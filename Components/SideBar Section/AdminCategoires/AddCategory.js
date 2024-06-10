import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddCategory.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AddCategory() {
    const [category, setCategory] = useState({
        name: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!category.name) {
            setMessage('Please fill in the Category Name field.');
        } else {
            axios.post('http://localhost:2025/api/category', category)
                .then(response => {
                    setMessage(`Category with ${category.name} added successfully.`);
                    // Clear the form after successful submission
                    setCategory({ name: '' });
                })
                .catch(error => {
                    setMessage(`category with ${category.name} is already present`);
                });
        }
    };

    return (
        <div className="category-add">
        <Link to="/CategoryList">
        <button className="buttonBack">Back</button></Link>
       <Link to='/CategoryList' > <button className="linking">CategoryList</button></Link>
            <div className="container mt-4">
                <h2 className="tag-name">Add Category</h2>
                {message && <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
                <form onSubmit={handleSubmit} className="category-form">
                    <div className="form-group">
                        <label htmlFor="name">Category Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter the Category Name"
                            value={category.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Category</button>
                </form>
            </div>
        </div>
    );
}

export default AddCategory;
