import express from "express"
import schema from "./schema.js"
import resolvers from "./resolvers.js"
import { graphqlHTTP } from "express-graphql"

const app = express()
const PORT = process.env.PORT || 8081

app.get('/', (req, res) =>  res.send("Graphql is amazing!!!"))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers,
}))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))