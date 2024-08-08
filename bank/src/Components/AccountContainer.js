import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search"; 
import AddTransactionForm from "./AddTransactionForm"; 
import transactions from "./Data"; 

function AccountContainer() {
  // Define state for filtered transactions, starting with all transactions
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  // Function to handle search based on query
  function handleSearch(query) {
    // If query is empty, reset filtered transactions to all transactions
    if (query.trim() === '') {
      setFilteredTransactions(transactions);
      return;
    }
    // Filter transactions based on the search query
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(query.toLowerCase()) || 
      transaction.category.toLowerCase().includes(query.toLowerCase()) || 
      transaction.amount.toString().toLowerCase().includes(query.toLowerCase()) ||
      transaction.date.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTransactions(filtered); // Update filteredTransactions state
  }

  // Function to add a new transaction
  function handleAddTransaction(newTransaction) {
    // Update the state with the new transaction
    const updatedTransactions = [...filteredTransactions, newTransaction];
    setFilteredTransactions(updatedTransactions);
  }

  return (
    <div>
      {/* Search component and pass handleSearch function as props */}
      <Search handleSearch={handleSearch} />
      {/* Render the AddTransactionForm component and pass handleAddTransaction function as props */}
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      {/* TransactionsList component and pass the filtered transactions */}
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
