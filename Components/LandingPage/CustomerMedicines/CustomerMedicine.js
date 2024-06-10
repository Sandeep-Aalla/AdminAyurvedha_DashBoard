import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerMedicine.css';

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:2024/api/medicines')
      .then((response) => response.json())
      .then((data) => setMedicines(data));
    
    fetch('http://localhost:2025/api/category')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const addToCart = (medicine) => {
    if (cart.includes(medicine)) {
      setCartMessage(`"${medicine.name}" is already in the cart.`);
    } else {
      setCart([...cart, medicine]);
      setCartMessage(`Added "${medicine.name}" to the cart.`);
    }
  };

  const filterMedicines = () => {
    return medicines.filter((medicine) => {
      if (
        (!categoryFilter || medicine.category === categoryFilter) &&
        (!companyFilter || medicine.company === companyFilter)
      ) {
        return true;
      }
      return false;
    });
  };

  const resetFilters = () => {
    setCategoryFilter(''); 
    setCompanyFilter(''); 
  };

  return (
    <div className="medicine">
      
      <div className="mt-4">
        <h2 className="tag-name">Medicine List</h2>
        <div className="message">
          {cartMessage && <p className="alert alert-success">{cartMessage}</p>}
        </div>
        <div className="row">
          <div className="col-md-3 offset-md-9">
            <div className="filters text-right">
              <label>
                Filter by Category:<br/>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">Select the Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Filter by Company:<br/>
                <select
                  value={companyFilter}
                  onChange={(e) => setCompanyFilter(e.target.value)}
                >
                  <option value="">Select the Company</option>
                  {medicines.map(medicine => (
                    <option key={medicine.id} value={medicine.company}>
                        {medicine.company}
                    </option>
                  ))}
                </select>
              </label>
              <br/>
              <button
                className="reset"
                onClick={resetFilters}
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {filterMedicines().map((medicine) => (
            <div key={medicine.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <strong>Medicine Name:</strong> {medicine.name}
                  </p>
                  <p className="card-text">
                    <strong>Manufacture Date:</strong> {medicine.mfdDate}
                  </p>
                  <p className="card-text">
                    <strong>Expiry Date:</strong> {medicine.expiryDate}
                  </p>
                  <p className="card-text">
                    <strong>Quantity:</strong> {medicine.quantity}
                  </p>
                  <p className="card-text">
                    <strong>Cost:</strong> <i className="bi bi-currency-rupee"></i>
                    {medicine.cost}
                  </p>
                  <p className="card-text">
                    <strong>Company:</strong> {medicine.company}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {medicine.category}
                  </p>
                  <p className="card-text">
                    <strong>BatchCode:</strong> {medicine.batchCode}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(medicine)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicine;
