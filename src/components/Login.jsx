import { FaGoogle, FaFacebook, FaRegEnvelope } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
  return (
    <div className="min-h-screen bg-neutral-800 flex items-center justify-center p-4">
      <div className="bg-neutral-900 p-8 rounded-2xl max-w-md w-full space-y-6">
        {/* Title Section */}
        <div className="flex items-center gap-3 justify-center">
          <div className="bg-orange-500 p-2 rounded-full">
            <RiLockPasswordLine className="text-2xl text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
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
              <input type="checkbox" className="rounded accent-orange-500" />
              Remember me
            </label>
            <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-900 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300">
            Sign In
          </button>
        </form>
        {/* Sign up Button */}
        <p className="text-center text-neutral-400">
          Don{"'"}t have an account?{' '}
          <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;