# API GATEWAY

Fornece um ponto de acesso único à sua arquitetura de microservices e gerencia o tráfego de requisições para os microservices de destino.

* Crie um arquivo .env conforme o exemplo .env-example disponível no projeto.
  - NODE_ENV
  - NODE_PORT
  - JWT_SECRET
  - REDIS_HOST
  - REDIS_PORT
  - REDIS_PASS

  **OBS**:

  - **REDIS_HOST** deve ser informado o **nome do container** instanciado no Docker.

  O nome do container pode ser verificado dentro do arquivo docker-compose.yml

  - **NODE_PORT** deve ser informada dentro arquivo Dockerfile (EXPOSE)

* Execute o comando **sudo docker-compose up** para a instalação do service via docker.

Após o serviço ser instanciado, será necessário criar um usuário e realizar a sessão com este usuário para obter acesso aos microservices.

Na sessão do usuário será gerado um **token JWT** requerido para acessar as demais rotas na aplicação.

### MICROSERVICES

* Acesso
  - Dentro de **/src/utils/urlService.js**
    - line 11
      - é necessário informar as **portas** dos services conforme configurou na criação.


## Documentação

A documentação é gerada através do swagger;

Disponível em (ex: http://localhost:3020/api-docs)

## Autor

Desenvolvido por: **Maycon Silva** | **2021**
