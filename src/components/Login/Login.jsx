import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
        .then( result => {
            console.log(result.user);
            navigate('/')
        })
        .catch( error => {
            console.log(error);
        })
    }
  return (
    <div className="min-h-[80vh] flex items-center ">
      <div className="border bg-[#FFFFFF] lg:w-1/2 mx-auto p-8">
        <h3 className="text-4xl font-semibold text-center my-8">Login your account</h3>
        <hr className="m-10" />
        <form onSubmit={handleLogin} className="lg:w-3/4 mx-auto">
          <div className="my-5">
            <label className="text-xl font-semibold my-4">Email address</label>
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
          <button className="btn w-full bg-[#403F3F] text-white my-4">
            Login
          </button>
        </form>
        <h3 className="font-semibold text-center mb-11">Dont’t Have An Account ? <Link to='/login/register' className="text-[#F75B5F]">Register</Link></h3>
      </div>
    </div>
  );
};

export default Login;
