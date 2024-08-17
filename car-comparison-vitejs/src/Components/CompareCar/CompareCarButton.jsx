import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompareCarButton({ car1, car2 }) {
  const navigate = useNavigate();

  const handleCompare = () => {
    navigate('/compare', { state: { car1, car2 } });
  };

  return (
    <div className="compare-button-container">
      <button className="compare-button" onClick={handleCompare}>
        Compare
      </button>
    </div>
  );
}
