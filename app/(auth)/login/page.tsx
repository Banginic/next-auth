import React from 'react'

function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen ">
      <form action="" className="bg-white p-6 rounded shadow-md w-96 border border-gray-300">
        <h1 className='text-xl font-bold mb-4 text-center'>Login</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className='w-full border px-4 rounded py-1.5' placeholder='Enter your email' />
        </div>
        <div className='mt-4'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required className='w-full border px-4 rounded py-1.5' placeholder='Enter your password' />
        </div>
        <button type="submit" className='bg-black text-white w-full py-2 rounded mt-6 cursor-pointer'>Login</button>
        <p className='mt-4 text-center text-sm text-gray-700'>
          Don't have an account? <a href="/sign-up" className='text-black'>Register</a>
        </p>
      </form>
    </main>
  )
}

export default LoginPage
