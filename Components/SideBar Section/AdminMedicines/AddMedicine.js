import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './AddMedicine.css';
import {Link} from 'react-router-dom';

function AddMedicine() {
    const [medicine, setMedicine] = useState({
        name: '',
        mfdDate: '',
        expiryDate: '',
        quantity:'',
        cost: '',
        company: '',
        category: '',
    
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicine({ ...medicine, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2024/api/medicines', medicine)
            .then(response => {
                setMessage('Medicine added successfully.');
                setError('');
                setMedicine({
                    name: '',
                    mfdDate: '',
                    expiryDate: '',
                    quantity:'',
                    cost: '',
                    company: '',
                    description:'',
                    formula:'',
                    category: ''
                });
            })
            .catch(error => {
                setMessage(`medicine with ${medicine.name} is already present`);
                setError('');
            });
    };
    useEffect(() => {
        axios.get('http://localhost:2025/api/category')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
       
        <div className='medicine-form'>
        <Link to="/MedicineList">
        <button className="buttonBack">Back</button></Link>
        <Link to='/MedicineList'> <button className="linking">MedicineList</button></Link>

            <div className="container mt-4">
                <h2 className='tag-name'>Add Medicine</h2>
                <form onSubmit={handleSubmit} className='medicine-form1'>
                    <div className="mb-3">
                        <label className="form-label">Medicine Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter the Medicine Name'
                            value={medicine.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Manufacture Date:</label>
                        <input
                            type="text"
                            name="mfdDate"
                            placeholder='Enter the Manufactured Date'
                            value={medicine.mfdDate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expiry Date:</label>
                        <input
                            type="text"
                            name="expiryDate"
                            placeholder='Enter the Expiry Date'
                            value={medicine.expiryDate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity:</label>
                        <input
                            type="text"
                            name="quantity"
                            placeholder='Enter the Medicine Cost'
                            value={medicine.quantity}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Medicine Cost:</label>
                        <input
                            type="text"
                            name="cost"
                            placeholder='Enter the Medicine Cost'
                            value={medicine.cost}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Medicine Company:</label>
                        <input
                            type="text"
                            name="company"
                            placeholder='Enter the Medicine Company'
                            value={medicine.company}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description:</label>
                        <input
                            type="text"
                            name="description"
                            placeholder='Enter the Description'
                            value={medicine.description}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Formula:</label>
                    <input
                        type="text"
                        name="formula"
                        placeholder='Enter the formula'
                        value={medicine.formula}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                    <div className="mb-3">
                        <label className="form-label">Medicine Category:</label>
                        <select
                            name="category"
                            value={medicine.category}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="" className="category-option">Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.name} className="category-option">
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Medicine</button>
                    {message && <div className="alert alert-success mt-3">{message}</div>}
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default AddMedicine;
