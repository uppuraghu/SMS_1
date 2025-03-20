import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import '../../App.css'
const Home = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.log("Logout Failed", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="fixed left-0 top-0 w-68 h-full bg-[#1557b3] text-white p-4 flex flex-col justify-between shadow-lg hidden md:flex">
      <ul className="space-y-3 mt-15">
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="w-full text-left bg-blue-600 hover:bg-blue-700 p-2 rounded"
          >
            Services ▼
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 bg-blue-800 text-white rounded shadow-lg">
              <li>
                <Link
                  to="/lawyerservice"
                  className="block p-2 hover:bg-blue-600"
                >
                  Lawyers
                </Link>
              </li>
              <li>
                <Link
                  to="/doctorappointment"
                  className="block p-2 hover:bg-blue-600"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/bankingservices"
                  className="block p-2 hover:bg-blue-600"
                >
                  Banking
                </Link>
              </li>
              <li>
                <Link
                  to="/otherservices"
                  className="block p-2 hover:bg-blue-600"
                >
                  Others
                </Link>
              </li>
            </ul>
          )}
        </li>
  
        <li>
          <Link
            to="/help"
            className="block bg-blue-600 hover:bg-blue-700 p-2 rounded"
          >
            Help
          </Link>
        </li>
      </ul>
  
      {/* Logout Button */}
      <div className="mt-auto text-center pb-4">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-600 text-white border border-red-500 rounded-md hover:bg-red-700 transition text-sm cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  
    {/* Main Content + Footer Wrapper */}
    <div className="ml-0 md:ml-64 flex flex-col w-full">
      <div className="p-6 flex-1">
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-4xl text-black font-extrabold mb-4">
            Welcome to <span className="text-blue-600">SMS</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Sadha Mee Seva Lo - Connecting You to Essential Services
          </p>
        </div>
  
        {/* Services Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[
            { name: "Lawyers", path: "/lawyerservice" },
            { name: "Doctors", path: "/doctorappointment" },
            { name: "Banking", path: "/bankingservices" },
            { name: "Others", path: "/otherservices" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Explore professional assistance and book services easily.
              </p>
              <Link
                to={service.path}
                className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Explore {service.name}
              </Link>
            </div>
          ))}
        </div>
        
      </div>
  
      <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-blue-700 mb-4">
            What Our Users Say
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <p className="text-gray-700">
                "Amazing platform! Helped me book a lawyer easily."
              </p>
              <span className="text-blue-600 font-semibold">- Ravi Kumar</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <p className="text-gray-700">
                "Fast and easy doctor appointments. Great service!"
              </p>
              <span className="text-blue-600 font-semibold">- Sita Devi</span>
            </div>
          </div>
          </div>


      {/* Footer Section */}
      <footer className="bg-[#1557b3] text-white p-6 -ml-2 -mb-10 w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-3">About SMS</h2>
            <p className="text-sm leading-relaxed">
              Sadha Mee Seva Lo offers a seamless connection to essential services like
              legal assistance, healthcare, banking, and more. We strive to make your
              service journey hassle-free.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-3">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              📞 +91 98765 43210
              <br />
              📧 support@smsservice.com
              <br />
              📍 Hyderabad, Telangana
            </p>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="text-center text-sm mt-6 border-t border-gray-300 pt-4">
          © {new Date().getFullYear()} Sadha Mee Seva Lo. All Rights Reserved.
        </div>
      </footer>
    </div>
  </div>
  
  );
};

export default Home;
