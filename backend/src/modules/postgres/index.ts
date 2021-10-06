import Knex from "knex"
import config from "@ft/config"

export default Knex(config.POSTGRES_KNEX_OPTS)