# Projeto Testing

O projeto tem como propósito desenvolver 2 microservices que se comuniquem internamente.

### API GATEWAY

Fornece um ponto de acesso único à sua arquitetura de microservices.

Por sua vez roteia e gerencia o tráfego de requisições para os microservices de destino.

### MICROSERVICE 01

- Se trata de um CRUD.

  - [x] Cadastro do imóvel
  - [x] Consulta todos os imóveis cadastrados
  - [x] Consulta um imóvel em específico
  - [x] Deleta um imóvel em específico

### MICROSERVICE 02

Responsável por consultar um imóvel no **microservice 01**, obter o valor do m/2 e realizar o cálculo com base na metragem do terreno.

### JENKINS

Jenkins é um servidor de Integração Contínua open-source.

## Tecnologias

* Express
* Docker
* Redis
* Mongo
* Swagger
* Jenkins

## Autor

Desenvolvido por: **Maycon Silva** | **2021**