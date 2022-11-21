// import mongoCLient 
// import { dbConnect } from "./dbConnect.js";
// import { ObjectId } from "mongodb";

import { post } from "./dbConnect.js"
import { ObjectId } from "mongodb"

export const addPost = async (req, res) => {
    await post.insertOne(req.body)
    res.send('item was added')
}

export const deletePost = async (req, res) => {
    console.log(req.params)
    const { id } = req.params


    console.log(new ObjectId(id))

    await post.findOneAndDelete({ _id: new ObjectId(id) })
    res.send('item was deleted')
}




//add/create post: POST
// export async function addNewPost (req,res){
//     const newPost = req.body 
//     const db = dbConnect()
//     await db.collection('post').insertOne
//     (newPost)
//     .catch(err => {
//         res.status(500).send(err)
//         return
//     })
//     res.status(201).send({ message: "New Post Added."})
// }

// export async function getAllPost(req,res){
//     const db = dbConnect()
//     const collection = await 
//     db.collection('post').find().toArray()
//     res.send(collection)
// }

// export async function updatePost(req,res){
//     const { postId } = req.params
//     const db = dbConnect()
//     await db.collection('post')
//     .findOneAndUpdate({ _id: new 
//     ObjectId(foodId) }, { $set: req.body })
//     .catch(err => {
//         res.status(500).send(err)
//         return 
//     })
//     res.status(202).send({ message: 'post is updated'})
// }