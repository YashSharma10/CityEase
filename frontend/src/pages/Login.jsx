import React from 'react';
// import { auth, provider } from './firebaseConfig';
// import { signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // Successfully logged in
      // Redirect user to the homepage or dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Login with Google</h1>
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
