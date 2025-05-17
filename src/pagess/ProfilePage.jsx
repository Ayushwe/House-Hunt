import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [bio, setBio] = useState('');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const savedBio = localStorage.getItem(`bio-${user?.uid}`);
    if (savedBio) {
      setBio(savedBio);
    } else {
      setBio('Hello! I’m a passionate user of this real estate platform...');
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleBioSave = () => {
    localStorage.setItem(`bio-${user.uid}`, bio);
    setIsEditingBio(false);
    setSaveMessage('Bio saved!');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">You must be logged in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={user.photoURL || '/default-avatar.png'}
          alt="Profile"
          className="w-28 h-28 rounded-full border border-gray-300"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#590d82]">
            {user.displayName || 'Anonymous User'}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">Joined: May 2025</p>
        </div>
      </div>

      {/* Account Info */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-[#590d82] mb-3">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Username:</p>
            <p>{user.displayName || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold">Email Address:</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">User ID:</p>
            <p>{user.uid}</p>
          </div>
        </div>
      </div>

      {/* Editable Bio */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#590d82] mb-3">Bio</h3>
          {!isEditingBio && (
            <button
              onClick={() => setIsEditingBio(true)}
              className="text-sm text-blue-600 hover:underline"
            >
              Edit
            </button>
          )}
        </div>
        {isEditingBio ? (
          <div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-md p-2 text-sm text-gray-700"
              rows={4}
            />
            <div className="mt-2 flex gap-2">
              <button
                onClick={handleBioSave}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 text-sm"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditingBio(false)}
                className="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
            </div>
            {saveMessage && (
              <p className="text-green-600 text-sm mt-2">{saveMessage}</p>
            )}
          </div>
        ) : (
          <p className="text-gray-700 text-sm">{bio}</p>
        )}
      </div>

      {/* Placeholder Activity */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-[#590d82] mb-3">Recent Activity</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Viewed 3 properties in Mumbai</li>
          <li>Saved 2 properties to wishlist</li>
          <li>Contacted seller for a Bangalore listing</li>
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-10 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
