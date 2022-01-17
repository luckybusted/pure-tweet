import './AuthForm.scss';
import { useState } from 'react'
import supabase from '../../lib/supabase'

const AuthForm = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({provider: 'twitter',})
              if (error) throw error
              alert('Check your email for the login link!')
        } catch(error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={"auth-form"}>
            <h1>just tweets</h1>

            <>
                <p>
                    Connect your twitter account
                </p>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}
                        disabled={loading}
                    >
                        Let's go!
                    </button>
            </>

        </div>
    )
}

export default AuthForm;
