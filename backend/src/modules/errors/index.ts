export * from './ValidationError'
export * from './NotFound'

export class FileHandlingError extends Error {
  statusCode: number;
  constructor(message: string){
    super(message);
    this.name = "NotFoundError"
    this.statusCode = 402;
  }
}