import React, { useState } from 'react';

const AddReview = () => {
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState('');

  const handleAddReview = () => {
    const newReview = {
      rating,
      description,
    };
    console.log('Added Review:', newReview);
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default AddReview;