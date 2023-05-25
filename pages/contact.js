import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/contactForm";
import { FaTwitter, FaLinkedin, FaEnvelopeOpen, FaPhone, FaGitSquare, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa"



const ContactPage = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
      
      <div className="md:w-1/2 px-4 py-8 ">
          <h2 className="text-3xl font-bold mb-4">Drop A Message For Me!</h2>
          <ContactForm />       
      </div>

      <div className="md:w-1/2 flex flex-row lg:order-last md:order-first sm:order-first">
          <Image
            src="/images/jojo-contact.png"
            alt="Contact Image"
            width={500}
            height={500}
            className="shadow-sm"
          />
          <div className="flex flex-col mt-8 self-center gap-4 text-blue-700 px-3">
          <a href="https://twitter.com/@coded_toolz" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/joseph-anselm" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href="mailto:iamjoeanselm@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelopeOpen/>
          </a>
          <a href="tel:+2348032516519" target="_blank" rel="noopener noreferrer">
            <FaPhone />
          </a>
          <a href="https://github.com/joseph-anselm" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare/>
          </a>
          <a href="https://www.youtube.com/jojo" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare/>
          </a>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default ContactPage;