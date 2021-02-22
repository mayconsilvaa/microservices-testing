# MICROSERVICE 02

Responsável por consultar um imóvel no **microservice 01**, obter o valor do m/2 e realizar o cálculo com base na metragem do terreno.

* Crie um arquivo .env conforme o exemplo .env-example disponível no projeto.
  - NODE_ENV
  - NODE_PORT

  **OBS:**

  - **NODE_PORT** deve ser informada dentro arquivo Dockerfile (EXPOSE)

* Execute o comando **sudo docker-compose up** para a instalação do service via docker.

### MICROSERVICES

* Acesso
  - Dentro de **/src/utils/calculate.js**
    - line 05
      - é necessário informar a **porta** do microservice01 conforme configurou na criação.


## Autor

Desenvolvido por: **Maycon Silva** | **2021**
