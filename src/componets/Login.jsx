import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const acceptConetext = useContext(RouterConetext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email, 
      password: data.password
    };
    
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          acceptConetext.setBuy(true);
          alert("Successfully logged in"); 
        } else {
         alert("Login failed");
        }
      })
      .catch((er) => {
        if (er.response) {
         alert("Login failed"); 
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <dialog className="modal">
        <div className="modal-box bg-gray-900 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Login</h3>
          <form className="py-4" onSubmit={handleSubmit(onSubmit)} method='dialog'>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-2 bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email && (<span style={{ color: "red" }}>This field is required</span>)}

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4 bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500"
              {...register("password", { required: true })}
            />
            {errors.password && (<span style={{ color: "red" }}>This field is required</span>)}

            <button className="btn w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-200">
              Login
            </button>
          </form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn bg-gray-700 hover:bg-gray-600">Close!</label>
          </div>
          <div className="text-center mt-4">
            <NavLink to="/signup" className="text-blue-400 hover:underline">Not registered? Sign up</NavLink>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
