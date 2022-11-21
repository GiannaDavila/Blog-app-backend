import express from "express";
import cors from 'cors';
import 'dotenv/config'

import {post} from './dbConnect.js'
import { addPost, deletePost } from './post.js'

const app = express();// create a new server instance 
app.use(cors())
app.use(express.json());// will recieve json data

// const client = new MongoClient(process.env.MONGO_URI)
// const database = client.db('Blog-app')
// const post = database.collection('post')

// client.connect()
// console.log('connected to mongo')

app.listen(process.env.PORT, () => console.log (`api running on port ${process.env.PORT}`));

// app.post('/', async (req,res)=> {
//     await post.insertOne(newPost)
//     res.send('new item was added')
// })

app.post('/', addPost)
app.delete('/', deletePost)

app.get('/', async (req,res) =>{
    const allPost = await post.find().toArray()
    res.send(allPost)
})
