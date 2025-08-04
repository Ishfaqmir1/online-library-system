import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.title) errs.title = 'Title is required';
    if (!formData.author) errs.author = 'Author is required';
    if (!formData.category) errs.category = 'Category is required';
    if (!formData.description) errs.description = 'Description is required';
    if (!formData.rating || isNaN(formData.rating)) errs.rating = 'Valid rating is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addBook(newBook));
    navigate('/books/all');
  };

  return (
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {['title', 'author', 'category', 'description', 'rating'].map((field) => (
          <div key={field}>
            <input
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            />
            {errors[field] && <p className="error">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
