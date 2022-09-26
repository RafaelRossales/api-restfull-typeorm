Criando arquivo tsconfig

yarn tsc --init --rootDir src --outDir build \ --esModuleInterpo --resolveJsonModule --lib es6 \ --module commonjs --allowJs true --noImplicitAny true


Executando o servidor em desenvolvimento

Usar a biblioteca  ts-node-dev para execução da aplicação em desenvolvimento.

incluir script para rodar o ts-node-dev no arquivo package.json

"scripts":{
    "dev":"ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
}

yarn dev

ESLint (Define a padronização do código)

yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

"scripts":{
    "dev":"ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
    "lint":"eslint . --exit .ts"
}


Prettier (Formatação do código)

yarn add prettier -D

yarn add eslint-config-prettier eslint-plugin-prettier -D



Extensões
    - Editor Config
    - Prettier Code Formatter


Criação de atalhos para as importações de arquivos não ficarem extensas


###### Adicionar no tsconfig.json ######
"paths":{
    "@config/*":["src/config/*"],
    "@modules/*":["src/modules/*"],
    "@shared/*":["src/shared/*"],
}


Instalando typeorm
* Versao utilizada "0.2.29"

 -pg:postegress

 -yarn add typeorm reflect-metadata pg

 * configurar arquivo ormconfig
 {
    "type":"postgres",
    "host":"localhost",
    "post":5432,
    "username":"postgres",
    "password":"docker",
    "database":"restapivendas",
    "migrations":[  // Localização da pasta onde devem ficar as migrations
        "./src/shared/typeorm/migrations/*.ts"
    ],
    "cli":{ // cli que deve axiliar no comando para gerar as migrations
        "migrationsDir":"./src/shared/typeorm/migrations"
    }
}

* Definir script no arquivo package.json




 Craiação de migrations
 - yarn typeorm migration:create -m CreateProducts





Instalando express
 - yarn add express cors express-async-errors
 - yarn add -d @types/express @types/cors



