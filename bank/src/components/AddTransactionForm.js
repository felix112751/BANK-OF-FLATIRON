import React, { useState } from "react";
import "./AddTransactionForm.css"; 

function AddTransactionForm({ setTransactions }) {
  // Initialize state for form data using the useState hook
  const [formData, setFormData] = useState({
    date: "", 
    description: "", 
    category: "", 
    amount: "" 
  });

  // Function to handle changes in form input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form field in formData thingy
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // makes newish transaction object with a unique ID (mostly timestamp)) and form data
    const newTransaction = {
      id: String(Date.now()), // Generate unique ID using current timestamp
      ...formData // Spread form data
    };

    // Update transactions state by adding the newish transaction with  the existing ones 
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);

    alert("Transaction added successfully");

    //  clear input fields
    setFormData({
      date: "", 
      description: "", 
      category: "",
      amount: "" 
    });
  }

  // the form part
  return (
    <div className="segment">
      <form onSubmit={handleSubmit} className="form">
        <div className="inline fields">
          <input
            value={formData.date}
            onChange={handleChange}
            type="date"
            name="date"
          />
          <input
            value={formData.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={formData.amount}
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;