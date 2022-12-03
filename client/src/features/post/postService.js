import axios from "axios";


const API_URL = 'posts/'

// Create new post

const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + 'createPost', postData, config)

    return response.data
}

// Get user Posts 

const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}
// Get All Posts 

const getAllPosts = async (token) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    const response = await axios.get(API_URL + 'allPosts')

    return response.data
}

// Delete user post 

const deletePost = async (postId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + 'deletePost/' + postId, config)

    return response.data
}

const postService = {
    createPost,
    getPosts,
    deletePost,
    getAllPosts
}

export default postService