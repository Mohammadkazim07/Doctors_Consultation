import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and description */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-indigo-500">Doctor Appointment</h2>
            <p className="mt-2 text-sm">
              A seamless way to book your doctor's appointments online with ease. Providing quality healthcare at your convenience.
            </p>
          </div>

          {/* Quick Links
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400">Services</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">Contact Us</h4>
            <ul className="text-sm">
              <li>Phone: +91 8862905807/7992284672</li>
              <br></br>
              <li>Email: drmohammadaamir16@gmail.com</li>
              <br></br>
              <li>Address: Meer Nagar Road , Near Sadar Hospital , Araria</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://www.facebook.com/share/15ciLRAKke/" className="text-indigo-400 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" className="text-indigo-400 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dr-mohammad-aamir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-indigo-400 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Chest & Kidney care centre . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
