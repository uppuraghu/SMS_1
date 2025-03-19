import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";

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
    <div className="relative min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-160 mt-15 bg-[#1557b3] text-white p-4 flex flex-col justify-between shadow-lg hidden md:flex">
        <ul className="space-y-3 mt-4">
          {/* Services Dropdown */}
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
                  <Link to="/lawyerservice" className="block p-2 hover:bg-blue-600">
                    Lawyers
                  </Link>
                </li>
                <li>
                  <Link to="/doctorappointment" className="block p-2 hover:bg-blue-600">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/bankingservices" className="block p-2 hover:bg-blue-600">
                    Banking
                  </Link>
                </li>
                <li>
                  <Link to="/otherservices" className="block p-2 hover:bg-blue-600">
                    Others
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Help Section */}
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

      {/* Main Content */}
      <div className="ml-0 md:ml-64 p-6">
        {/* Welcome Section */}
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-4xl text-black font-extrabold -ml-20 mb-4">
            Welcome to <span className="text-blue-600">SMS</span>
          </h1>
          <p className="text-gray-700 text-lg -ml-15">
            Sadha Mee Seva Lo - Connecting You to Essential Services
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
  {[
    { name: "Lawyers", path: "lawyerservice" },
    { name: "Doctors", path: "doctorappointment" },
    { name: "Banking", path: "bankingservices" },
    { name: "Others", path: "otherservices" },
  ].map((service, index) => (
    <div
      key={index}
      className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold text-blue-600">{service.name}</h3>
      <p className="text-sm text-gray-600 mt-2">
        Explore professional assistance and book services easily.
      </p>
      <Link
        to={`/${service.path}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Explore {service.name}
      </Link>
    </div>
  ))}
</div>


        {/* Contact Us Section */}
        {/* <div className="mt-12 bg-gray-100 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              required
              className="w-full p-2 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div> */}

        {/* Testimonials Section */}
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
      </div>
      {/* Footer Section */}
<footer className="bg-blue-900 text-white text-center py-6 w-310 ml-60 ">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Footer Links */}
      <div className="mb-4 md:mb-0">
        <ul className="flex space-x-4 justify-center md:justify-start">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-blue-400 transition">
              Help
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-sm">
        © {new Date().getFullYear()} Sadha Mee Seva Lo. All rights reserved.
      </div>
    </div>

    {/* Social Media Icons */}
    <div className=" mt-8 flex justify-center space-x-6">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f text-xl hover:text-blue-400"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-xl hover:text-blue-400"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in text-xl hover:text-blue-400"></i>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;
