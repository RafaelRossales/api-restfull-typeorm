// import 'reflect-metadata';
import express,{ Request, Response, NextFunction} from 'express';
import cors from 'cors';
import routes from './routes';
import * as dotenv from 'dotenv'
import AppError from '@shared/errors/AppError';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Definindo middware para tratamento de erro
app.use((
    error:Error,
    request:Request,
    reponse:Response,
    next:NextFunction
    ) =>{
        if(error instanceof AppError){
            return Response.status(error.statusCode).json({
                status:'error',
                message:error.message
            });
        }

        return Response.status(500).json({
            status:'error',
            message:'Internal server Error'
        })
    })


app.listen(process.env.SERVER_PORT,() =>{
    console.log(`Server running on port ${process.env.SERVER_PORT} ✨`)
});
