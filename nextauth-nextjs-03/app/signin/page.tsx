"use client"

import axios from "axios"


export default function Signin() {


    async function onClickSignin() {
        const response = await axios.post('http://localhost:3000/api/signin', {
            username:"asdd",
            password:"123456"
        })

        localStorage.setItem("token", response.data.token)
    }




    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-white">
                Sign In
                </h2>
                <div className="space-y-4">
                {/* Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">
                    Username
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your username"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">
                    Password
                    </label>
                    <input
                    type="password"
                    className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your password"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={onClickSignin}
                    type="submit"
                    className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
                </div>
            </div>
        </div>
    )
    
}