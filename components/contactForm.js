import React, { useState } from 'react';
import client from '@/client';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new document in Sanity.io
      await client.create({
        _type: 'contact',
        name,
        email,
        message,
      });

      // Clear form fields and show success message
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (formSubmitted) {
    return (
      <div className="text-center">
        <p className="text-xl mb-4">Thanks for getting in touch!</p>
        <button
          onClick={() => setFormSubmitted(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;



// import React, { useState } from "react";
// import client from '@/client';
// import { createClient } from 'next-sanity';

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic (e.g., send data to Sanity.io)
    



//     // Reset form fields
//     setName("");
//     setEmail("");
//     setMessage("");

//     // Set submission status to true
//     setIsSubmitted(true);
//   };

//   const handleBack = () => {
//     setIsSubmitted(false);
//   };

//   return (
//     <div>
//       {isSubmitted ? (
//         <div>
//           <p className="text-green-500">Form submitted successfully!</p>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//             onClick={handleBack}
//           >
//             Back
//           </button>
//         </div>
//       ) : (     


//          <form onSubmit={handleSubmit}>
//        <div className="mb-4">
//          <label htmlFor="name" className="block text-sm font-medium">
//            Name
//          </label>
//        <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="message" className="block text-sm font-medium">
//           Message
//         </label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Submit
//       </button>
//     </form>

    
//   )
// };
        
//     </div>
//   );
// };

// export default ContactForm;
