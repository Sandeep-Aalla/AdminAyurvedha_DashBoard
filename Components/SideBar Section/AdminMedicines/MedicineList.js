import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './MedicineList.css';
import {Link} from 'react-router-dom';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [updateMedicine, setUpdateMedicine] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const fetchMedicines = () => {
    axios.get('http://localhost:2024/api/medicines')
      .then((response) => {
        setMedicines(response.data);
      })
      .catch((error) => {
        console.error('Error fetching medicines:', error);
      });
  };

  const handleViewClick = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleUpdateClick = (medicine) => {
    setUpdateMedicine(medicine);
    setSelectedMedicine(null);
  };

  const handleMedicineUpdate = () => {
    axios
      .put(`http://localhost:2024/api/medicines/${updateMedicine.id}`, updateMedicine)
      .then((response) => {
        setSuccessMessage(`Medicine ${medicines.name} updated successfully.`);
        setUpdateMedicine(null);
        fetchMedicines();
      })
      .catch((error) => {
        setErrorMessage('Error updating medicine.');
        console.error('Error updating medicine:', error);
      });
  };

  const handleMedicineDelete = (medicineId) => {
    axios
      .delete(`http://localhost:2024/api/medicines/${medicineId}`)
      .then(() => {
        setSuccessMessage(`Medicine ${medicines.name} deleted successfully.`);
        setMedicines((prevMedicines) => prevMedicines.filter((med) => med.id !== medicineId));
        setSelectedMedicine(null);
      })
      .catch((error) => {
        setErrorMessage('Error deleting medicine.');
        console.error('Error deleting medicine:', error);
      });
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  return (
    <div className='medicine-list-all'>
    <Link to="/Sidebar">
    <button className="buttonBack">Back</button></Link>
   <Link to='/AddMedicine' > <button className="linking">AddMedicine</button></Link>


      {selectedMedicine && !updateMedicine && (
        <div className="medicine-details">
          <h3 className='tag-name'>Medicine Details</h3>
          <p>
            <strong>Name:</strong> {selectedMedicine.name}
          </p>
          <p>
            <strong>Manufacture Date:</strong> {selectedMedicine.mfdDate}
          </p>
          <p>
            <strong>Expiry Date:</strong> {selectedMedicine.expiryDate}
          </p>
          <p>
            <strong>Quantity:</strong> {selectedMedicine.quantity}
          </p>
          <p>
            <strong>Cost:</strong> {selectedMedicine.cost}
          </p>
          <p>
            <strong>Company:</strong> {selectedMedicine.company}
          </p>
          <p>
            <strong>Category:</strong> {selectedMedicine.category}
          </p>
          <p>
            <strong>BatchCode:</strong> {selectedMedicine.batchCode}
          </p>
          <p>
          <strong>Description:</strong> {selectedMedicine.description}
        </p>
        <p>
        <strong>Formula:</strong> {selectedMedicine.formula}
      </p>
          <button onClick={() => setSelectedMedicine(null)} className="btn btn-danger">
            Close
          </button>
        </div>
      )}

      {updateMedicine && (
        <div className="medicine-update">
          <h2 className='tag-name'>Update Medicine</h2>
          <form className='update-form'>
            <div className="mb-3">
              <label className="form-label">Medicine Name:</label> <br />
              <input
                type="text"
                name="name"
                value={updateMedicine.name}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, name: e.target.value })}
                className="form-control"
              required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Manufacture Date:</label>
              <br />
              <input
                type="text"
                name="mfdDate"
                value={updateMedicine.mfdDate}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, mfdDate: e.target.value })}
                className="form-control"
              required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Expiry Date:</label>
              <br />
              <input
                type="text"
                name="expiryDate"
                value={updateMedicine.expiryDate}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, expiryDate: e.target.value })}
                className="form-control"
              required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity:</label>
              <br />
              <input
                type="text"
                name="quantity"
                value={updateMedicine.quantity}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, quantity: e.target.value })}
                className="form-control"
              required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Medicine Cost:</label>
              <br />
              <input
                type="text"
                name="cost"
                value={updateMedicine.cost}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, cost: e.target.value })}
                className="form-control"
              required />
            </div>
            <div className="mb-3">
            <label className="form-label">Description:</label>
            <br />
            <input
              type="text"
              name="description"
              value={updateMedicine.description}
              onChange={(e) => setUpdateMedicine({ ...updateMedicine, description: e.target.value })}
              className="form-control"
            required/>
          </div>
            <div className="mb-3">
              <label className="form-label">Medicine Company:</label>
              <br />
              <input
                type="text"
                name="company"
                value={updateMedicine.company}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, company: e.target.value })}
                className="form-control"
              required/>
            </div>
            <div className="mb-3">
            <label className="form-label">Formula:</label>
            <br />
            <input
              type="text"
              name="formula"
              value={updateMedicine.formula}
              onChange={(e) => setUpdateMedicine({ ...updateMedicine, formula: e.target.value })}
              className="form-control"
            required/>
          </div>
            <div className="mb-3">
              <label className="form-label">Medicine Category:</label>
              <br />
              <input
                type="text"
                name="category"
                value={updateMedicine.category}
                onChange={(e) => setUpdateMedicine({ ...updateMedicine, category: e.target.value })}
                className="form-control"
              />
            </div>
            <button type="button" onClick={handleMedicineUpdate} className="btn btn-primary">
              Update Medicine
            </button>
          </form>
        </div>
      )}

      <div className=" mt-4">
        <h2 className='tag-name'>Medicine List</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Manufacture Date</th>
              <th>Expiry Date</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Company</th>
              <th>Category</th>
              <th>BatchCode</th>
              <th>Description</th>
              <th>Formula</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
                <td>{medicine.mfdDate}</td>
                <td>{medicine.expiryDate}</td>
                <td>{medicine.quantity}</td>
                <td>{medicine.cost}</td>
                <td>{medicine.company}</td>
                <td>{medicine.category}</td>
                <td>{medicine.batchCode}</td>
                <td>{medicine.description}</td>
                <td>{medicine.formula}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewClick(medicine)}
                  >
                    View
                  </button>
                  <br></br>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdateClick(medicine)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleMedicineDelete(medicine.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineList;
