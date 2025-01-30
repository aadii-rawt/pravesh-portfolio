import React, { useState } from 'react'

function Login({ setIsLogin }) {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (password != "pravesh123") {
            setError("wrong password !")
            return
        }
        localStorage.setItem("pravesh", "pravesh Admin")
        setIsLogin(true)
    }
    return (
        <div className='w-full min-h-screen flex items-center p-10 flex-col gap-2
    justify-center'>
            <div className='space-y-2 w-full md:max-w-md'>
                <label htmlFor="" className='block text-gray-300'>Admin</label>
                <input type="text" value="Pravesh Chaudhary" className='w-full bg-transparent border rounded-lg px-3 py-2' />
            </div>
            <div className='space-y-2 w-full md:max-w-md'>
                <label htmlFor="" className='block text-gray-300'>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className=' w-full bg-transparent border rounded-lg px-3 py-2' />
            </div>
            {error && <p className='text-red-600 text-left'>{error}</p>}
            <div className='space-y-2 w-full mt-5 md:max-w-md'>
                <button onClick={handleLogin} className=' w-full  bg-white text-black font-semibold border rounded-lg px-3 py-2'>Log in</button>
            </div>
        </div>
    )
}

export default Login