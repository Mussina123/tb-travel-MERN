import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPost } from "../features/post/postSlice"
import CloudUpload from './CloudUpload'


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
        cost: '',
        review: '',
        comments: ''
    })
    const [error, setError] = useState('')

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


    function handleOnUpload(error, result, widget) {
        if (error) {
            setError(error);
            widget.close({
                quiet: true
            });
            return;
        }
        setPostData({ ...postData, urlOfImg: (result?.info?.secure_url) });
    }

    return (
        <section className="text-center	m-4">
            <div>
                <CloudUpload onUpload={handleOnUpload}>
                    {({ open }) => {
                        function handleOnClick(e) {
                            e.preventDefault();
                            open();
                        }
                        return (
                            <button onClick={handleOnClick}
                                className='rounded-lg bg-[#E1F959] text-black px-4 hover:font-bold mb-4'>
                                Upload an Image
                            </button>
                        )
                    }}
                </CloudUpload>
            </div>
            <form onSubmit={onSubmit} >
                <div className="mb-4">
                    <label
                        className="pr-4"
                        htmlFor="location">Location
                    </label>
                    <input
                        className="rounded-md"
                        type='text'
                        name='location'
                        id='location'
                        value={postData.location}
                        onChange={(e) => setPostData({ ...postData, location: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mr-2"
                        htmlFor="url">Image</label>
                    <input
                        placeholder="Upload Image First!"
                        className="rounded-md"
                        type='text'
                        name='urlOfImg'
                        id='urlOfImg'
                        value={postData.urlOfImg}
                        onChange={(e) => setPostData({ ...postData, urlOfImg: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mr-2"
                        htmlFor="resortName">Resort Name</label>
                    <input
                        className="rounded-md"
                        type='text'
                        name='resortName'
                        id='resortName'
                        value={postData.resortName}
                        onChange={(e) => setPostData({ ...postData, resortName: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mr-6"
                        htmlFor="cost">Cost</label>
                    <input
                        className="rounded-md pr-4"
                        type='number'
                        name='cost'
                        id='cost'
                        value={postData.cost}
                        onChange={(e) => setPostData({ ...postData, cost: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mr-2"
                        htmlFor="review">Review: 0 to 5</label>
                    <input
                        className="rounded-md"
                        type='number'
                        name='review'
                        id='review'
                        value={postData.review}
                        onChange={(e) => setPostData({ ...postData, review: e.target.value })}
                    />
                </div>
                <div className="mb-4 flex justify-center" >
                    <label
                        className="mr-2 self-center"
                        htmlFor="comments">Comments</label>
                    <textarea
                        rows={4}
                        cols={30}
                        className="rounded-md commentForm"
                        type='text'
                        name='comments'
                        id='comments'
                        placeholder="Please fill in all inputs before posting!"
                        value={postData.comments}
                        onChange={(e) => setPostData({ ...postData, comments: e.target.value })}
                    />
                </div>
                <div>
                    <button type="submit" className='rounded-lg bg-[#E1F959] text-black px-4 hover:font-bold'>Post Experience</button>
                </div>
            </form>
            {/* <div>
                <CloudUpload onUpload={handleOnUpload}>
                    {({ open }) => {
                        function handleOnClick(e) {
                            e.preventDefault();
                            open();
                        }
                        return (
                            <button onClick={handleOnClick}>
                                Upload an Image
                            </button>
                        )
                    }}
                </CloudUpload>
            </div> */}
        </section>
    )
}

export default PostForm