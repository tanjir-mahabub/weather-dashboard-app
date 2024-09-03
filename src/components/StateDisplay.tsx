import React from 'react';

interface StateDisplayProps {
  error: string | null;
  children: React.ReactNode;
}

const StateDisplay: React.FC<StateDisplayProps> = ({ error, children }) => {
  if (error) {
    return (
      <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-md">
        <p className="text-red-500">City Not Found</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default StateDisplay;
