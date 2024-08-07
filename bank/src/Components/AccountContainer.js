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
    // If query is empty or not a string, reset filtered transactions to all transactions
    if (typeof query !== 'string' || query === '') {
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

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm setTransactions={setFilteredTransactions} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;