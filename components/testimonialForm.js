// import React, { useState } from 'react';
// import { createClient } from 'next-sanity';
// import { groq } from 'next-sanity';
// import client from '@/client';


// const TestimonialForm = ({ onClose }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [rating, setRating] = useState(0);
//   const [image, setImage] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleRatingChange = (event) => {
//     setRating(parseInt(event.target.value));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Perform form validation
//     if (!name || !email || !message || rating === 0) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     try {
//       // Upload the image to Sanity.io
//       const imageAsset = await client.assets.upload('image', image);

//       // Create a new testimonial document in Sanity.io
//       const newTestimonial = await client.create({
//         _type: 'testimonial',
//         name,
//         email,
//         message,
//         rating,
//         image: {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageAsset._id,
//           },
//         },
//       });

//       // Reset form fields and error message
//       setName('');
//       setEmail('');
//       setMessage('');
//       setRating(0);
//       setImage(null);
//       setErrorMessage('');

//       // Close the modal
//       onClose();

//       // Show success message or perform any desired actions
//       console.log('Testimonial submitted successfully:', newTestimonial);
//     } catch (error) {
//       // Handle error
//       console.error('Failed to submit testimonial:', error);
//       // Set error message if needed
//       setErrorMessage('Failed to submit testimonial. Please try again later.');
//     }
//   };


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
//       <div className="mb-4">
//       <label htmlFor="rating" className="block text-gray-700">
//           Rating:
//         </label>
//         <select
//           id="rating"
//           value={rating}
//           onChange={handleRatingChange}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value={0}>Select a rating</option>
//           <option value={1}>1 Star</option>
//           <option value={2}>2 Stars</option>
//           <option value={3}>3 Stars</option>
//           <option value={4}>4 Stars</option>
//           <option value={5}>5 Stars</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="image" className="block text-gray-700">
//           Image Upload:
//         </label>
//         <input
//           type="file"
//           id="image"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//     <button
//       type="submit"
//       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//     >
//       Submit
//     </button>
//       </form>);
// };

// export default TestimonialForm;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { createClient } from 'next-sanity';
// import { groq } from 'next-sanity';
// import client from '@/client';

// const TestimonialForm = ({ onClose }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     // Perform form validation
//     if (!data.name || !data.email || !data.message || data.rating === '0') {
//       console.log('Please fill out all fields.');
//       return;
//     }

//     try {
//       // Upload the image to Sanity.io
//       const imageAsset = await client.assets.upload('image', data.image[0]);

//       // Create a new testimonial document in Sanity.io
//       const newTestimonial = await client.create({
//         _type: 'testimonial',
//         name: data.name,
//         email: data.email,
//         message: data.message,
//         rating: parseInt(data.rating),
//         image: {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageAsset._id,
//           },
//         },
//       });

//       // Reset form fields
//       onClose();
//       console.log('Testimonial submitted successfully:', newTestimonial);
//     } catch (error) {
//       // Handle error
//       console.error('Failed to submit testimonial:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           {...register('name', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//         {errors.name && <p className="text-red-500">Name is required.</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//         {errors.email && (
//           <p className="text-red-500">Please enter a valid email address.</p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-gray-700">
//           Message:
//         </label>
//         <textarea
//           id="message"
//           {...register('message', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         ></textarea>
//         {errors.message && <p className="text-red-500">Message is required.</p>}
//       </div>
//       <div className="mb-4">
// <label htmlFor="rating" className="block text-gray-700">
// Rating:
// </label>
// <select
// id="rating"
// {...register('rating', { required: true })}
// className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
// >
// <option value="0">Select a rating</option>
// <option value="1">1 Star</option>
// <option value="2">2 Stars</option>
// <option value="3">3 Stars</option>
// <option value="4">4 Stars</option>
// <option value="5">5 Stars</option>
// </select>
// {errors.rating && <p className="text-red-500">Rating is required.</p>}
// </div>
// <div className="mb-4">
// <label htmlFor="image" className="block text-gray-700">
// Image Upload:
// </label>
// <input
// type="file"
// id="image"
// accept="image/*"
// {...register('image', { required: true })}
// className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
// />
// {errors.image && <p className="text-red-500">Image is required.</p>}
// </div>
// <button
//      type="submit"
//      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//    >
// Submit
// </button>
// </form>
// );
// };

// export default TestimonialForm;




// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { createClient } from 'next-sanity';
// import { groq } from 'next-sanity';
// import client from '@/client';

// const TestimonialForm = ({ onClose }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const titles = [
//     { value: 'Mr', label: 'Mr' },
//     { value: 'Mrs', label: 'Mrs' },
//     { value: 'Ms', label: 'Ms' },
//     { value: 'Dr', label: 'Dr' },
//   ];

//   const onSubmit = async (data) => {
//     // Perform form validation
//     if (!data.title || !data.name || !data.email || !data.message || data.rating === '0') {
//       console.log('Please fill out all fields.');
//       return;
//     }

//     try {
//       // Upload the image to Sanity.io
//       const imageAsset = await client.assets.upload('image', data.image[0]);

//       // Create a new testimonial document in Sanity.io
//       const newTestimonial = await client.create({
//         _type: 'testimonial',
//         title: data.title,
//         name: data.name,
//         email: data.email,
//         message: data.message,
//         rating: parseInt(data.rating),
//         image: {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageAsset._id,
//           },
//         },
//       });

//       // Reset form fields
//       onClose();
//       console.log('Testimonial submitted successfully:', newTestimonial);
//     } catch (error) {
//       // Handle error
//       console.error('Failed to submit testimonial:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-gray-700">
//           Title:
//         </label>
//         <select
//           id="title"
//           {...register('title', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">Select a title</option>
//           {titles.map((title) => (
//             <option key={title.value} value={title.value}>
//               {title.label}
//             </option>
//           ))}
//         </select>
//         {errors.title && <p className="text-red-500">Title is required.</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           {...register('name', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//         {errors.name && <p className="text-red-500">Name is required.</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//         />
//         {errors.email && (
//           <p className="text-red-500">Please enter a valid email address.</p>
//           )}
//           </div>
//           <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700">
//           Message:
//           </label>
//           <textarea
//           id="message"
//           {...register('message', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//           ></textarea>
//           {errors.message && <p className="text-red-500">Message is required.</p>}
//           </div>
//           <div className="mb-4">
//           <label htmlFor="rating" className="block text-gray-700">
//           Rating:
//           </label>
//           <select
//           id="rating"
//           {...register('rating', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//           >
//           <option value="0">Select a rating</option>
//           <option value="1">1 Star</option>
//           <option value="2">2 Stars</option>
//           <option value="3">3 Stars</option>
//           <option value="4">4 Stars</option>
//           <option value="5">5 Stars</option>
//           </select>
//           {errors.rating && <p className="text-red-500">Rating is required.</p>}
//           </div>
//           <div className="mb-4">
//           <label htmlFor="image" className="block text-gray-700">
//           Image Upload:
//           </label>
//           <input
//           type="file"
//           id="image"
//           accept="image/*"
//           {...register('image', { required: true })}
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
//           />
//           {errors.image && <p className="text-red-500">Image is required.</p>}
//           </div>
//           <button
//                type="submit"
//                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//              >
//           Submit
//           </button>
//           </form>
//           );
//           };
          
//           export default TestimonialForm;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';
import client from '@/client';

const TestimonialForm = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const titles = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' },
  ];

  const onSubmit = async (data) => {
    // Perform form validation
    if (!data.title || !data.name || !data.email || !data.message || data.rating === '0') {
      console.log('Please fill out all fields.');
      return;
    }

    setIsLoading(true);

    try {
      // Upload the image to Sanity.io
      const imageAsset = await client.assets.upload('image', data.image[0]);

      // Create a new testimonial document in Sanity.io
      const newTestimonial = await client.create({
        _type: 'testimonial',
        title: data.title,
        name: data.name,
        email: data.email,
        message: data.message,
        rating: parseInt(data.rating),
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
      });

      // Reset form fields
      reset();
      setIsLoading(false);
      onClose();
      console.log('Testimonial submitted successfully:', newTestimonial);
    } catch (error) {
      console.error('Failed to submit testimonial:', error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700" placeholder='Mr'>
          Title:
        </label>
        <select
          id="title"
          {...register('title', { required: true })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select a title</option>
          {titles.map((title) => (
            <option key={title.value} value={title.value}>
              {title.label}
            </option>
          ))}
        </select>
        {errors.title && <p className="text-red-500">Title is required.</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.name && <p className="text-red-500">Name is required.</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.email && (
          <p className="text-red-500">Please enter a valid email address.</p>
          )}
          </div>
          <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
          Message:
          </label>
          <textarea
          id="message"
          {...register('message', { required: true })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.message && <p className="text-red-500">Message is required.</p>}
          </div>
          <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700">
          Rating:
          </label>
          <select
          id="rating"
          {...register('rating', { required: true })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          >
          <option value="0">Select a rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
          </select>
          {errors.rating && <p className="text-red-500">Rating is required.</p>}
          </div>
          <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
          Image Upload:
          </label>
          <input
          type="file"
          id="image"
          accept="image/*"
          {...register('image', { required: true })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          {errors.image && <p className="text-red-500">Image is required.</p>}
          </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default TestimonialForm;

