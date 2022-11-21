import { MongoClient } from "mongodb";
import 'dotenv/config' 

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('Blog-app')
export const post = database.collection('post')

client.connect()
console.log('connected to mongo')