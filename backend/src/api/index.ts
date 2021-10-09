import '../utilimports'
import express, {Request} from "express"
import cors from 'cors'
import helmet from "helmet"
import path from 'path'
import { connect, disconnect } from '@ft/vpn'

const startServer = async () => {
    try {
        const app = express();
        const port = 8080; // default port to listen

        app.use(helmet())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        app.use(cors())

        app.get('/connect', async (req, res) => {
          try {
              await connect()
              res.status(200).send('OK') 
          } catch (error) {
              res.status(500).send('OK') 
          }
        })
        app.get('/disconnect', async (req, res) => {
          try {
              await disconnect()
              res.status(200).send('OK') 
          } catch (error) {
              res.status(500).send('OK') 
          }
        })

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
}

startServer();