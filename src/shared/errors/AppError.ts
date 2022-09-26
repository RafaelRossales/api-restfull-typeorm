'use strict'

/**
 * @ignore
 */
class AppError{

    public readonly message:string;

    public readonly statusCode:number;

    constructor(message:string,statusCode = 400){

        /**
        * @attribute
        */
        this.message = message;

        /**
        * @attribute
        */
        this.statusCode = statusCode;
    }
}


export default AppError;
