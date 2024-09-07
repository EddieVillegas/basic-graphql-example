import { Widgets } from './dbConnectors.js'

const fetch = (model) => async (cb) => {
    let data = null
    let error = null
    try {
        data = await cb(model)
    } catch (error) {
        error = error
    }
    return { data, error }
}

const fetchProducts = fetch(Widgets)

export default {
    getAllProducts: async () => {
        const { data: products, error } = await fetchProducts(Widgets => Widgets.find())
        if(error) throw new Error(error) 
        return products
    },
    getProduct: async ({ id }) => { 
        const { data: product, error } = await fetchProducts(Widgets => Widgets.findById(id))
        if(error) throw new Error(error) 
            return product
    },
    createProduct: async ({ input }) => {
        const { data: product, error } = await fetchProducts(Widgets => Widgets.create({...input}))
        if(error) throw new Error(error) 
        return product
    },
    updateProduct: async ({ input }) => {
        const { data: newProduct, error } = await fetchProducts(Widgets => Widgets.findOneAndUpdate({ _id: input.id }, input, {new: true }))
        if(error) throw new Error(error)
        return newProduct
    }
}