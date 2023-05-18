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

  const onSubmit = async (data, e) => {
    e.preventDefault();
  
    // Perform form validation
    if (!data.title || !data.name || !data.email || !data.message || data.rating === '0') {
      console.log('Please fill out all fields.');
      return;
    }
  
    setIsLoading(true);
  
    try {
      // Upload the image to Sanity.io if it exists
      let imageAsset = null;
      if (data.image && data.image[0]) {
        imageAsset = await client.assets.upload('image', data.image[0]);
      }
  
      // Create a new testimonial document in Sanity.io
      const newTestimonial = await client.create({
        _type: 'testimonial',
        title: data.title,
        name: data.name,
        email: data.email,
        message: data.message,
        rating: parseInt(data.rating),
        image: imageAsset
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageAsset._id,
              },
            }
          : null,
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
        <label htmlFor="title" className="block text-gray-700">
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
          {...register('image')}
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
