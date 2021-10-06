# Template

This template follows some guiding principles that are designed to ease the understandibility, maintenance and work as well as simplify the architecture without losing the core business needs of the system.

## TL;DR - Quick start (dev) - backend

```
docker-compose up -d
docker exec -it api /bin/bash

# Inside the container's shell
npm install
npx knex migrate:latest
npx knex seed:run --env=development
npm start
```

The swagger ui will now be running at localhost:8080/api/docs

___

## Guiding principles:  


* Avoid any technology that moves you further away from the core technology that you're using.  

This means that any library that moves you substantially away from the vanilla working of core libraries like express should be avoided.  Particularly if they require wrapping business logic in an outside library that is used for convenience.  It is not that these types of libraries are without merit, but that they create extra knowledge requirements on the developer away from the foundation that they need to get the system working.  Adding too many of these starts to negate their positive attributes with the sheer burden of knowledge the dev needs.  Examples might be: swagger generation tools that wrap express like tsoa, tools that change node/ts importing functionality like inversify.  

* Nothing should be a microservice until it's self-evident that it should be.

No new feature or functionality should, by default, be a microservice, particularly when it comes to api's.  To decide if something should be a microservice it should be at least some of the following: 
1. Have high resource requirements that need independant scaling.
2. Be a service not written or maintained by komgo, eg keycloak. (most easily run as a seperate docker container)
3. Not be directly exposed to the outside internet or network.

Until a piece of work proves itself to be some or all of the above, it should be incorporated with the main system for the sake of simplicity. Examples of things which DO NOT need to be microservices: any api which saves basic data to a database, any service which is rarely used.  Examples of thngs which _might_ need to be their own ms include services that use excessive processing, like image manipulation or virus scanning and services that are outside komgo's development and run as docker containers like keycloak.

* Internal Messaging, or asynchronous activity, should be a means of last resort.

Messaging queues are important to handle high volume of interactions stably.  They should not be used as a "go to" to replace synchronous ways of working.  Introducing Asynchronous workflows brings complication to the front end and often results in excessive FE calls and/or FE doing business logic.  Remember that making anything asynchronous means you cant be sure when that data is available.  So for instance, logging metrics that are read once a week, or once a day is a good use case for adding to a queue: it will likely be high volume, and doesn't need to be immediately available.  Communication between services or functionality is a bad use case, because it introduces asynchronicity that keeps users waiting, and complicates the structure for retrieving data.

* Logging and metrics should be at the forefront of every feature

Important to know usage, performance etc to be able to decide what features to keep, what should be microservices, what features to remove.  Unused functionality should be easily removable and decoupled.

* Seperating the Backend and Frontend

In node the configuration and approach to compiling code to run on-server in node, and in browser, is quite different, and to avoid complications it's a good idea to keep them separated.  We keep them in the same repo however, for ease of all-in-one testing and running.  Spin them up together, test together, down together.

* Testing and pipelines

`npm run test`

Any tests should always be written in, and runnable, in the same place as the code, this goes for unit, integration, and e2e.  The e2e tests should be bundled with the front end.

Test groups

You can give tests groups to run in with a jsdoc annotation like this

```
/**
 * Admin dashboard tests
 * 
 * @group unit
 * @group thisModule
 */
 describe('some tests', () => {})
```

Be sure to group all unit tests as unit and integration tests as integration.  Integration tests need a running system so need to be run seperately from unit tests often.

To run unit tests

```
npm run test:unit
```

To run integration tests

```
npm run test:integration
```

To run any other group of tests

```
npm test -- --group=groupname
```

this

General guidelines for testing good practices:

1. e2e: e2e tests live with the frontend client and are of highest importance and they cover a whole flow's functionality.
2. Unit tests are the tests inside the modules.  In a well designed backend, the functional code will be re-usable in many scenarios, therefore it is important the unit tests cover these usage scenarios to alert to changes that could break functionality for a specific usage.  This is particularly true of libraries.  Unit testing on front-end has little added benefit, so is best used as snapshot tests for the smallest, stateless components (atoms if you use atomic design), who's value is in their styling rather than their functionality.
3. Integration tests are the tests in the /api directory, avoid mocks as much as possible.

* Frontend

Keep components as small and singularly functional as possible.
No redux.
@TODO - fill this part out

---

## Prerequisites

Docker and docker compose

## Startup

```
docker-compose up -d
```

To rebuild the api container
```
docker-compose build
```

To enter the api container
```
docker exec -it api /bin/bash
```

Once in the container start the app as normal
```
npm install
npm start
```

To stop the docker containers
```
docker-compose down
```

## Databases

One instance of postgres for keycloak specifically (this could be amalgumated to the main postgres)
One instance of postgres
One instance of mongo 

#### How to choose whether you should save something in mongo or postgres

If the data is likely to be structured, related or have multiple indexable attributes that can be used for lookup it should be in postgres
examples: document hashes, metrics logging

If its data that is unstructured and likely to change (for instance an array that can hold multiple objects but has no requirement), has few indexes for lookup and is unlikely to be related to other data, it should be in mongo
examples: document signing activity

If we're saving files in a db, it should be in mongo, use the fileHandler library.

### Postgres migrations/seeds

To make a migration (make sure you are in the backend folder in your shell)

`npx knex migrate:make migration_name -x ts`

To make a seed (make sure you are in the backend folder in your shell, replace environment with environment to seed)

`npx knex seed:make 02_seedname -x ts --env=testing`

run migrations

`npx knex migrate:latest`

run a seed

`npx knex seed:run --env=testing`

## Backend work flows

### Modules

Anything in the modules folder can be imported using
```
import {} from "@kg/modulename
```

#### Config

Exports a default object that holds all the config options, overridable by environment variables

#### fileHandler

Essentially a file model, saves and retrieves files from GridFSBucket

#### middleware

Holds all the express middleware used in the api


* Authentication - checks the JWT, and checks against a given array of permissions @TODO - to be finished/sorted with keycloak

* mongo - exports helper functions to connect to mongo (used at server startup), get the mongo client, and close the connection

* postgres - the same as the mongo, but for postgres

* types - exports all the types used in the entirety of the backend




### Definition of Done

When working on the backend (module or api) - make sure you've met these requirements when finishing any work

1. Make sure any new routes in /api have integration tests (passing)
2. Make sure any new functionality in any module has unit tests (passing)
3. Make sure any new functionality in any module has documentation (jsdoc)
4. Make sure any changes to the working is reflected in the openapi specification
5. Document new modules in the readme


Suggested vscode extensions

- OpenApi (Swagger) Editor
- Jest snippets
- Docker

