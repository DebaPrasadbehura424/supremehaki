import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Login from '../componets/Login';


function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.password,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                if (res.data) {
                    alert("sign up successfull")
                }

            })
            .catch((er) => {

                if (er.response) {
                    alert("user already exist ")
                }
            });

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Create Account</h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium text-white">Fullname</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter name.."
                            {...register("fullname", { required: "Email is required" })}
                            aria-invalid={errors.fullname ? "true" : "false"}
                        />
                        {errors.fullname && (<span style={{ color: "red" }}>{errors.email.message}</span>)}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter email.."
                            {...register("email", { required: "Email is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (<span style={{ color: "red" }}>{errors.email.message}</span>)}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter password"
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && (<span style={{ color: "red" }}>{errors.password.message}</span>)}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 bg-opacity-50 backdrop-blur-md text-white py-2 rounded-md hover:bg-opacity-70 transition duration-200"
                    >
                        Sign Up
                    </button>

                    <p>If you already have an account, please proceed to log in. </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
