// import { Knex } from "knex";
// import config from "../../src/modules/config"
// import { MongoClient } from "mongodb";
// import {files, chunks} from "./data/filedata"


// export async function seed(knex: Knex): Promise<void> {
//     // Deletes ALL existing entries
//     await knex("FileData").del();

//     const mongo = new MongoClient(config.MONGO_URI)
//     const client = await mongo.connect()
//     await client.db().collection("files.files").insertMany(files)
//     await client.db().collection("files.chunks").insertMany(chunks)

//     // Inserts seed entries
//     await knex("FileData").insert([
//         {
//           "id": "330c68b6-c972-4738-b7f8-0bc3b28a1899",
//           "originalDocumentId": "61091b238483ec9aac54580f",
//           "originalDocumentHash": "0x5bd495f7bdd7cff9ba0cf442e9a20987b54211aafaeb523e5a7df7c068e99a29",
//           "uploadedBy": "james.guest@komgo.io",
//           "created_at": "2021-08-03 10:32:03.044496+00",
//           "updated_at": "2021-08-03 10:32:03.044496+00"
//         },
//       ]);
// };
