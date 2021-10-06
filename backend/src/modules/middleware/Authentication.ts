// import { ErrorMessageText } from "@ft/types"
// import { Permissions } from "@ft/types"
import { RequestHandler } from "express"

export const Authenticate = (permissions: Permissions[]): RequestHandler => {
  return (request, response, next) => {
    // TODO: check the jwt and against the requires permissions - also set up passport
    // if (request.headers.authorization == null) return response.status(401).send(ErrorMessageText.Unauthorised)
    next()
  }
}