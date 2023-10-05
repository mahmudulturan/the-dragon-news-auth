import { Link } from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import {useState} from 'react'

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleRegister = e => {
        e.preventDefault()
        setError(null)
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsCondition = e.target.termsCondition.checked;
        if(!termsCondition){
            return setError('Please accept our terms and condition.')
        }
        else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
            return setError('Password should have one capital letter one symbol and one number')
        }
        createUser(email,password)
        .then(result => {
            const authUser = result.user;
            updateProfile(authUser, {
                displayName: name,
                photoURL: photo
            })
            console.log(authUser); 
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }

  return (
    <div>
      <div className="min-h-[80vh] flex items-center ">
        <div className="border bg-[#FFFFFF] lg:w-1/2 mx-auto p-8">
          <h3 className="text-4xl font-semibold text-center my-8">
            Register your account
          </h3>
          <hr className="m-10" />
          <form className="lg:w-3/4 mx-auto" onSubmit={handleRegister}>
            <div className="my-5">
              <label className="text-xl font-semibold my-4">Your Name</label>
              <input
                className="bg-[#F3F3F3] p-4 w-full rounded-md"
                type="text"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="my-5">
              <label className="text-xl font-semibold my-4">Photo URL</label>
              <input
                className="bg-[#F3F3F3] p-4 w-full rounded-md"
                type="text"
                placeholder="Enter your photo URL"
                name="photo"
              />
            </div>
            <div className="my-5">
              <label className="text-xl font-semibold my-4">Email</label>
              <input
                className="bg-[#F3F3F3] p-4 w-full rounded-md"
                type="email"
                placeholder="Enter your email address"
                name="email"
              />
            </div>
            <div className="mt-5">
              <label className="text-xl font-semibold my-4">Password</label>
              <input
                className="bg-[#F3F3F3] p-4 w-full rounded-md"
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div className="flex gap-2 my-3">
                <input className="text-xl bg-[#706F6F]" type="checkbox" name="termsCondition" id="termsCondition" />
                <label htmlFor="termsCondition">Accept <span className="text-[#706F6F] font-semibold">Term & Conditions</span></label>
            </div>
                {
                    error && <div>
                        <h3 className="text-red-500 font-medium">{error}</h3>
                    </div>
                }
            <button className="btn w-full bg-[#403F3F] text-white my-4">
              Register
            </button>
          </form>
          <h3 className="font-semibold text-center mb-11">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-[#F75B5F]">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
