import { useState } from "react"

const TweetForm = () => {
    const [tweet, setTweet] = useState('');
    const [tweetState, setTweetState] = useState('default');

    const postTweet = async (e) => {
        e.preventDefault();
        setTweetState('loading')

    }

    return (
        <>
            <form onSubmit={postTweet}>
                <input
                type="text"
                placeholder="type your tweet"
                onChange={e => setTweet(e.target.value)}
                required/>
                <button type="submit">send tweet</button>
            </form>
        </>
    )

}

export default TweetForm