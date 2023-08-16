# RabbitMQ Test Task App

This repository contains a simple app that simulates the creation and removal of tasks using a RabbitMQ microservice. It provides three endpoints to interact with the app: `/`, `/create`, and `/remove`.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone http://github.com/neoquijo/rabbitmq-test-task.git

    Navigate to the project directory:

    sh

cd rabbitmq-test-task

Start the app and dependencies:

sh

    docker-compose up

    Access the app:

    Open your browser and go to http://localhost:3000.

Endpoints

    /: The main endpoint of the app, also is the same as /create.
    /create: Simulates the creation of tasks via the RabbitMQ microservice.
    /remove: Simulates the removal of tasks via the RabbitMQ microservice.
    /logs: Get access log


