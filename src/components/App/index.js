import supabase from '../../lib/supabase'
import './App.css';
import AuthForm from '../AuthForm';
import { useState } from 'react';
import TweetForm from '../TweetForm';

function App() {
  // const { user, session, error } = supabase.auth.signIn({
  //   provider: 'twitter',
  // })
  const user = supabase.auth.user()
  const [login, setLogin] = useState(false);

  console.log(user);

  supabase.auth.onAuthStateChange((event, session) => {
    setLogin(event === "SIGNED_IN");
  })

  return (
    <>
    {!user ? (
      <div className={"container"}>
        <AuthForm />
      </div>
    ):(
    <div className="App">
      <header className="App-header">
        <p>
          You are logged in with twitter.
        </p>
        <TweetForm />
      </header>
    </div>
    )}
    </>
  );
  
}

export default App;
