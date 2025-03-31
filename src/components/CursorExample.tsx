import React from 'react';
import Cursor from './CustomCursor';

/**
 * Example of how to use the Cursor component in any page or component
 * 
 * This is just an example - you don't need to actually create this file
 * in your project unless you want to use it for reference.
 */
const SomePage: React.FC = () => {
  return (
    <div>
      {/* Add the Cursor component at the top level of your component */}
      <Cursor />
      
      {/* Rest of your component content */}
      <h1>Page Title</h1>
      <p>Page content goes here...</p>
      
      {/* Any links or buttons will automatically get the hover effect */}
      <a href="#" className="cursor-pointer">This link will trigger the cursor effect</a>
      <button>This button will also trigger the effect</button>
      
      {/* You can also add the 'cursor-pointer' class to any element */}
      <div className="cursor-pointer">
        This div will trigger the cursor effect too
      </div>
    </div>
  );
};

export default SomePage; 