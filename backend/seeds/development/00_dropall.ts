// import { Knex } from "knex";
// import { MongoClient } from "mongodb";
// import config from "../../src/modules/config";

// export async function seed(knex: Knex): Promise<void> {
//     // Deletes ALL existing entries
//     try {
//         const mongo = new MongoClient(config.MONGO_URI)
//         const client = await mongo.connect()
//         client.db().collection('files.files').deleteMany({})
//         client.db().collection('files.chunks').deleteMany({})
//     } catch (error) {
//         console.error('Unable to drop mongo file collections - may not exist')
//     }

//     await knex("FileData").del();
// };
