import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CategoryList.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [deleteSuccess, setDeleteSuccess] = useState('');
    const [editedCategoryName, setEditedCategoryName] = useState(''); // Add this state variable

    useEffect(() => {
        // Fetch the list of categories from your API when the component mounts
        axios.get('http://localhost:2025/api/category')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleEdit = (category) => {
        setEditingCategory(category);
        setEditedCategoryName(category.name); // Initialize the editedCategoryName
    };

    const handleDelete = (category) => {
        // Implement delete functionality using axios
        axios.delete(`http://localhost:2025/api/category/${category.id}`)
            .then((response) => {
                // Update the categories state to remove the deleted category
                setCategories(categories.filter(cat => cat.id !== category.id));
                setDeleteSuccess(`"${category.name}" is deleted successfully.`);
            })
            .catch((error) => {
                console.error("Error deleting category:", error);
                setDeleteSuccess('Error deleting category.');
            });
    };

    const handleUpdate = (category) => {
        // Make a PUT request to update the category on the server
        axios.put(`http://localhost:2025/api/category/${category.id}`, { name: editedCategoryName }) // Update category name with the edited value
            .then((response) => {
                // Update the categories state with the updated category
                const updatedCategories = categories.map((c) => (c.id === category.id ? { ...c, name: editedCategoryName } : c));
                setCategories(updatedCategories);
                setEditingCategory(null); // Clear the editing state
                setUpdateSuccess(`"${category.name}" is updated successfully.`);
            })
            .catch((error) => {     
                console.error("Error updating category:", error);
                setUpdateSuccess('Error updating category.');
            });
    };

    return (
        <div className="category-list">
            
        <Link to="/Sidebar">
        <button className="buttonBack">Back</button></Link>
       <Link to='/AddCategory' > <button className="linking">AddCategory</button></Link>
       
            <div className=" mt-4">
                <h2 className="tag-name">Category List</h2>
                {updateSuccess && <div className="alert alert-success">{updateSuccess}</div>}
                {deleteSuccess && <div className="alert alert-success">{deleteSuccess}</div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>
                                    {editingCategory === category ? (
                                        <input
                                            type="text"
                                            value={editedCategoryName}
                                            onChange={e => setEditedCategoryName(e.target.value)}
                                            className="form-control"
                                        />
                                    ) : (
                                        category.name
                                    )}
                                </td>
                                <td>
                                    {editingCategory === category ? (
                                        <div>
                                            <button
                                                onClick={() => handleUpdate(category)} 
                                                className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                onClick={() => handleEdit(category)} 
                                                className="btn btn-warning">
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category)} 
                                                className="btn btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryList;
