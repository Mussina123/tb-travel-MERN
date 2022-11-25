import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"


const PostForm = () => {
    const [location, setLocation] = useState('')
    const [url, setUrl] = useState('')
    const [resort, setResort] = useState('')
    const [cost, setCost] = useState(undefined)
    const [review, setReview] = useState(undefined)
    const [comments, setComments] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        type='text'
                        name='location'
                        id='location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="url">URL for Image</label>
                    <input
                        type='text'
                        name='url'
                        id='url'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="resort">Resort Name</label>
                    <input
                        type='text'
                        name='resort'
                        id='resort'
                        value={resort}
                        onChange={(e) => setResort(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cost">Cost</label>
                    <input
                        type='number'
                        name='cost'
                        id='cost'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="review">Review: 0 to 5</label>
                    <input
                        type='number'
                        name='review'
                        id='review'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <input
                        type='text'
                        name='comments'
                        id='comments'
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
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