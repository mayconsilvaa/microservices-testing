
# COMANDO OBRIGATÓRIO

# Download da imagem do NodeJS com a versão alpine (versão simplificada e leve)

FROM node:alpine

# Define o local que o APP vai ficar alocado no disco do container

WORKDIR /app

# Copia tudo que começa com package e termina com .json para dentro da pasta raiz /app

COPY package*.json ./

# Executa o yarn install para add as dependências e criar a pasta node_modules

RUN yarn

# Copia tudo que está no diretório onde o arquivo Dockerfile está para dentro da pasta /app

COPY . .

# Porta exposta que o container ficará ouvindo os acessos

EXPOSE 3020

# Executa o comando yarn para iniciar o script do package.json

CMD yarn start
