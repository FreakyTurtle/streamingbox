import '../utilimports'
import express, {Request} from "express"
// import swaggerUi from "swagger-ui-express"
// import Documentation from "../documentation/generated/swagger.json"
import cors from 'cors'
import helmet from "helmet"
import { connectMongo } from '@ft/mongo'
// import * as Validator from "express-openapi-validator"
// import { errorHandler } from '@ft/middleware'
import path from 'path'

const startServer = async () => {
    try {
        await connectMongo()
        const app = express();
        const port = 8080; // default port to listen

        app.use(helmet())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        if (process.env.NODE_ENV !== 'production') app.use(cors())

        // app.use("/api/docs", swaggerUi.serve);
        // app.get("/api/docs", swaggerUi.setup(Documentation))

        // app.use(Validator.middleware({
        //     apiSpec: path.join(__dirname, '../documentation/generated/swagger.json'),
        //     validateRequests: true
        // }))


        // evolving api
        // app.use('api/trakk', trakk);

        app.get('/*', (req, res) => {
            // @TODO - put a more interesting 404 page - save some html somewhere
            console.log('404')
            res.status(404).send("The page you're looking for has not been found")
        })

        app.get('health', (req, res) => {
            res.status(200).send("Healthy")
        })
        
        // app.use(errorHandler)

        app.listen( port, () => {
            console.log( `server started at http://localhost:${ port }` );
        } );

    } catch (error) {
        console.error(`Service unable to start`, error)
    }
    await connectMongo()
}

startServer();