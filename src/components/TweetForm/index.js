import { useState } from "react"
import supabase from '../../lib/supabase'

const TweetForm = () => {
    const [tweet, setTweet] = useState('');
    const [tweetState, setTweetState] = useState('default');

    const session = supabase.auth.session();

    const postTweet = async (e) => {
        e.preventDefault();
        setTweetState('loading')
        const req = await fetch('https://api.twitter.com/2/tweets', {
            method: 'POST',
            json: {
                'text': tweet
            },
            responseType: 'json',
            headers: {
               // 'Authorization': 'Bearer '
            }
        })
        if (req.body) {
            console.log(req)
            return req.body;
          } else {
            throw new Error('Unsuccessful request');
        }
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