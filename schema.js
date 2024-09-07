import { buildSchema } from "graphql";

export default buildSchema(`
    enum Soldout {
        SOLDOUT
        ONSALE
    }
    input StoreInput {
        store: String
    }
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        stores: [Store]!
    }
    type Store {
        store: String
    }
    input ProductInput {
        id: ID
        name: String 
        description: String
        price: Float, 
        soldout: Soldout,
        stores: [StoreInput]!,
    }
    type Query {
        getProduct(id: ID): Product
        getAllProducts: [Product]
    }
    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
    }
`)