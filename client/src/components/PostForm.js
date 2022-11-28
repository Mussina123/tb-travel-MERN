import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPost } from "../features/post/postSlice"


const PostForm = () => {
    // const [location, setLocation] = useState('')
    // const [urlOfImg, setUrlOfImg] = useState('')
    // const [resortName, setResortName] = useState('')
    // const [cost, setCost] = useState(undefined)
    // const [review, setReview] = useState(undefined)
    // const [comments, setComments] = useState('')

    const [postData, setPostData] = useState({
        location: '',
        urlOfImg: '',
        resortName: '',
        cost: undefined,
        review: undefined,
        comments: ''
    })

    const dispatch = useDispatch()


    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost(postData))
        setPostData({
            location: '',
            urlOfImg: '',
            resortName: '',
            cost: 0,
            review: 0,
            comments: ''
        })
    }
    // setLocation('')
    // setUrlOfImg('')
    // setResortName('')
    // setCost(undefined)
    // setReview(undefined)
    // setComments('')


    return (
        <section >
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        type='text'
                        name='location'
                        id='location'
                        value={postData.location}
                        onChange={(e) => setPostData({ ...postData, location: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="url">URL for Image</label>
                    <input
                        type='text'
                        name='urlOfImg'
                        id='urlOfImg'
                        value={postData.urlOfImg}
                        onChange={(e) => setPostData({ ...postData, urlOfImg: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="resortName">Resort Name</label>
                    <input
                        type='text'
                        name='resortName'
                        id='resortName'
                        value={postData.resortName}
                        onChange={(e) => setPostData({ ...postData, resortName: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="cost">Cost</label>
                    <input
                        type='number'
                        name='cost'
                        id='cost'
                        value={postData.cost}
                        onChange={(e) => setPostData({ ...postData, cost: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="review">Review: 0 to 5</label>
                    <input
                        type='number'
                        name='review'
                        id='review'
                        value={postData.review}
                        onChange={(e) => setPostData({ ...postData, review: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <input
                        type='text'
                        name='comments'
                        id='comments'
                        value={postData.comments}
                        onChange={(e) => setPostData({ ...postData, comments: e.target.value })}
                    />
                </div>
                <div>
                    <button type="submit">Post Experience</button>
                </div>
            </form>
        </section>
    )
}

export default PostForm