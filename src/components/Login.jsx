import { FaGoogle, FaFacebook, FaRegEnvelope } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png'

const Login = () => {
  return (
    <div className="min-h-screen bg-neutral-800 flex items-center justify-center p-4">
      <div className="bg-neutral-900 p-8 rounded-2xl max-w-md w-full space-y-6">
        {/* Title Section */}
        <div className="flex items-center gap-3 justify-center">
          <div>
            <img className='mr-2 w-10 h-10' src={logo2} alt="logo" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
            Log In
          </h1>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <FaFacebook className="text-xl" />
            Facebook
          </button>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <FaGoogle className="text-xl" />
            Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center">
          <div className="flex-1 border-t border-neutral-600"></div>
          <span className="px-4 text-neutral-400">OR</span>
          <div className="flex-1 border-t border-neutral-600"></div>
        </div>

        {/* Email/Password Form */}
        <form className="space-y-4">
          <div className="flex items-center gap-3 bg-neutral-800 p-3 rounded-xl">
            <FaRegEnvelope className="text-neutral-400" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3 bg-neutral-800 p-3 rounded-xl">
            <RiLockPasswordLine className="text-neutral-400" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-neutral-400">
              <input type="checkbox" className="rounded accent-teal-500" />
              Remember me
            </label>
            <a href="#" className="text-teal-500 hover:text-teal-400 transition-colors">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-gradient-to-r from-teal-600 to-teal-950 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300">
            Sign In
          </button>
        </form>
        {/* Sign up Button */}
        <p className="text-center text-neutral-400 mb-0">
          Don{"'"}t have an account?{' '}
          <Link to="/signup" className="text-teal-500 hover:text-teal-400 transition-colors">
            Sign Up
          </Link>
        </p>
        {/* Login admin Button */}
        <p className="text-center text-neutral-400">
          Login as{' '}
          <Link to="/admin" className="text-teal-500 hover:text-teal-400 transition-colors">Admin</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;