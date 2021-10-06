import { MongoClient, GridFSBucket } from "mongodb";
import config from "@ft/config";
let client: MongoClient;
let bucket: GridFSBucket;


/**
 * Connect and create a mongo client
 */
export const connectMongo = async () => {
  const mongo = new MongoClient(config.MONGO_URI)
  client = await mongo.connect()
  bucket = new GridFSBucket(client.db(), {
    bucketName: config.MONGO_FILE_BUCKET
  });
}

/**
 * get the connected mongoclient
 * @returns Mongo Client
 */
export const getMongoClient = () => {
  return client
}

/**
 * get the GridFSBucket
 * @returns Bucket
 */
export const getBucket = () => {
  return bucket
}

/**
 * Close the mongo connection
 */
export const close = async () => {
  await client.close()
} 