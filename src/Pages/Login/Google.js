import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import "./Google.css"


const Google = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const navigate = useNavigate()

    if (user) {
        navigate("/")
    }




    return (
        <div>
            <div className='or '>
                <hr />
                <span className='mx-2 fw-bold'>Or</span>
                <hr />
            </div>
            <div className='ms-5'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto'><img src="https://raw.githubusercontent.com/Omarfaruk2/Mobile-Hunter-Client/main/src/imges/googlelo.png" alt="" /> Continue With Google</button>
            </div>

            {/* Google Login */}

        </div>
    )
}

export default Google