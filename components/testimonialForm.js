// import React, { useState } from 'react';
// import { createClient } from 'next-sanity';
// import { groq } from 'next-sanity';
// import client from '@/client';


// const TestimonialForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

 

// // Initialize Sanity client


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Perform form validation
//   if (!name || !email || !message) {
//     setErrorMessage('Please fill out all fields.');
//     return;
//   }

//   try {
//     // Create a new testimonial document in Sanity.io
//     const newTestimonial = await client.create({
//       _type: 'testimonial',
//       name,
//       email,
//       message,
//     });

//     // Reset form fields and error message
//     setName('');
//     setEmail('');
//     setMessage('');
//     setErrorMessage('');

//     // Show success message or perform any desired actions
//     console.log('Testimonial submitted successfully:', newTestimonial);
//   } catch (error) {
//     // Handle error
//     console.error('Failed to submit testimonial:', error);
//     // Set error message if needed
//     setErrorMessage('Failed to submit testimonial. Please try again later.');
//   }
// };


//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-gray-700">
//           Message:
//         </label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         ></textarea>
//       </div>
//       {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Submit
//       </button>
      
//     </form>
//   );
// };

// export default TestimonialForm;


import React, { useState } from 'react';
import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';
import client from '@/client';


const TestimonialForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !message || rating === 0) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      // Upload the image to Sanity.io
      const imageAsset = await client.assets.upload('image', image);

      // Create a new testimonial document in Sanity.io
      const newTestimonial = await client.create({
        _type: 'testimonial',
        name,
        email,
        message,
        rating,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
      });

      // Reset form fields and error message
      setName('');
      setEmail('');
      setMessage('');
      setRating(0);
      setImage(null);
      setErrorMessage('');

      // Close the modal
      onClose();

      // Show success message or perform any desired actions
      console.log('Testimonial submitted successfully:', newTestimonial);
    } catch (error) {
      // Handle error
      console.error('Failed to submit testimonial:', error);
      // Set error message if needed
      setErrorMessage('Failed to submit testimonial. Please try again later.');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
      <label htmlFor="rating" className="block text-gray-700">
          Rating:
        </label>
        <select
          id="rating"
          value={rating}
          onChange={handleRatingChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        >
          <option value={0}>Select a rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700">
          Image Upload:
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Submit
    </button>
      </form>);
};

export default TestimonialForm;