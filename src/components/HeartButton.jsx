import React from "react";

const HeartButton = () => {
  return (
    <button className="w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex top-2 right-2 items-center justify-center hidden">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M12 21.35L3.38 12.73a6.47 6.47 0 0 1 0-9.16 6.48 6.48 0 0 1 9.16 0L12 3.19l-.54-.54a6.48 6.48 0 0 1 9.16 0 6.47 6.47 0 0 1 0 9.16L12 21.35z"
        />
      </svg>
    </button>
  );
};

export default HeartButton;
