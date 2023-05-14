import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/contactForm";


const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
      
      <div className="md:w-1/2 px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Drop A Message For Me!</h2>
        <ContactForm />
      </div>
      <div className="md:w-1/2">
        <Image
          src="/images/jojo-contact.png"
          alt="Contact Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ContactPage;
