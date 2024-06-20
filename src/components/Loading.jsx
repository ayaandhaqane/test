import React from 'react';

function Loading() {
  return (
    <div className="flex items-start justify-center min-h-screen mt-10">
      <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
