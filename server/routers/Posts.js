const express = require("express");
const router = express.Router();
const { Posts } = require("../models/");
const { checkAuth } = require("../middlewares/AuthMiddlewaware");

router.get("/",async(req,res) => {
    const allPosts = await Posts.findAll()  
    res.status(200).json(allPosts)
})
router.post("/addPost",checkAuth,async(req,res) => {
    const username = req.user.username
    const {title,text} = req.body
    try {
        const addedPost = await Posts.create({username,title,text})
        res.status(200).json(addedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/post/:id",async(req,res) => {
    const id = req.params.id
    try {
        const post = await Posts.findOne({where:{id}})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
