import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/smslogo.png";
import profile from "../../../assets/profil.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Profile Data
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "9876543210",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Save Changes
  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="fixed z-10 w-full bg-white h-22 shadow-sm">
      <div className="container mx-auto -mt-8 flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-200"
          />
         <div className="text-center ml-100 mt-12">
          <h3 className="text-3xl md:text-4xl text-black font-extrabold mb-3 ">
            Welcome to <span className="text-blue-600">SMS</span>
          </h3>
          <p className="text-gray-500 -mt-5 text-lg">
            Sadha Mee Seva Lo - Connecting You to Essential Services
          </p>
        </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link
            to="/home"
            className="text-blue-600 hover:text-red-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-600 hover:text-red-500 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contactus"
            className="text-blue-600 hover:text-red-500 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Profile Icon */}
        <div
          className="relative cursor-pointer"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <img
            src={profile}
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-gray-300 hover:border-blue-500"
          />
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed top-16 right-5 bg-white p-6 rounded-lg w-80 shadow-lg border border-gray-200">
          <div className="space-y-3">
            <div>
              <label className="block font-medium">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p>{profileData.name}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p>{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Mobile:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="mobile"
                  value={profileData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p>{profileData.mobile}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
