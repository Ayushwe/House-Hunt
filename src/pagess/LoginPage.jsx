import React, { useState } from 'react';
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const toggleMode = () => setIsRegister(!isRegister);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = isRegister
        ? await createUserWithEmailAndPassword(auth, form.email, form.password)
        : await signInWithEmailAndPassword(auth, form.email, form.password);

      console.log(isRegister ? 'User registered:' : 'User signed in:', res.user);
      navigate('/home'); // ✅ Redirect to home
    } catch (error) {
      console.error('Auth error:', error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google login successful:', result.user);
      navigate('/home'); // ✅ Redirect to home
    } catch (error) {
      console.error('Google login error:', error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f0fa] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#590d82] font-merriweather">
          {isRegister ? 'Create Account' : 'Welcome Back'}
        </h2>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-[#7912b0]"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-[#7912b0]"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#7912b0] hover:bg-[#590d82] text-white w-full py-2 rounded-full transition duration-300"
          >
            {loading ? (isRegister ? 'Registering...' : 'Logging in...') : isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-t" />
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="bg-white border border-gray-300 text-gray-700 w-full py-2 rounded-full hover:bg-gray-100 transition"
        >
          {loading ? 'Loading...' : 'Continue with Google'}
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="text-[#7912b0] hover:underline ml-1"
          >
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
