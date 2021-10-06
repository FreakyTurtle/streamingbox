// import config from "@ft/config"
// import knex from "@ft/postgres"
// import { IFileData } from "@ft/types"
// import {v4 as uuid} from "uuid"

// export const FileData = () => {
//   const table = 'FileData'
//   const query = knex<IFileData>(table)
//   return {
//     create: async (fd: IFileData) => {
//       if (!fd.id ) fd.id = uuid();
//       return await query.insert(fd);
//     },
//     findOneById: async (id: string) => await query.where('id', id).first(),
//     findOneByHash: async (hash: string) => await query.where('originalDocumentHash', hash).orWhere('banneredDocumentHash', hash).first(),
//   }
// }