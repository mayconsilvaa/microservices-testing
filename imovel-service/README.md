# MICROSERVICE 01

É um CRUD responsável pela criação do imóvel, visualização e exclusão.

* Crie um arquivo .env conforme o exemplo .env-example disponível no projeto.
  - NODE_ENV
  - NODE_PORT
  - DB_HOST
  - DB_NAME
  - DB_USER
  - DB_PASS
  - DB_PORT

  **OBS:**

  - **DB_HOST** deve ser informado o **nome do container** instanciado no Docker.

    O nome do container pode ser verificado dentro do arquivo docker-compose.yml

  - **NODE_PORT** deve ser informada dentro arquivo Dockerfile (EXPOSE)

* Execute o comando **sudo docker-compose up** para a instalação do service via docker.

## Autor

Desenvolvido por: **Maycon Silva** | **2021**
