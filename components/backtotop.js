import React, { useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled far enough to show the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add an event listener to check the scroll position on page load
  // and on scroll, so we can toggle the visibility of the button
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("load", toggleVisibility);
  }

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M10 15a1 1 0 0 0 1-1V6.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5a.997.997 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L9 6.414V14a1 1 0 0 0 1 1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
