
import React from 'react';

const WaveDivider = () => {
  return (
    <div className="relative w-full overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-24 lg:h-48"
        preserveAspectRatio="none"
      >
        <path
          fill="#2563EB"
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,224C672,245,768,235,864,208C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
