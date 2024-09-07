import mongoose, {Schema, model} from "mongoose";

(async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/widgets")
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
    }
})()

export const Widgets = model('widgets', Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    inventory: String,
    stores: Array
}))

