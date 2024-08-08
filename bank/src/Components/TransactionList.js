import React from "react"; 
import Transaction from "./Transaction"; 
import "./TransactionList.css"; 

function TransactionsList({ transactions }) {
  console.log(transactions);
  // Map each transaction to a <Transaction> component
  const list = transactions.map((item) => {
    return (
      <Transaction
        key={item.id} 
        date={item.date} 
        description={item.description} 
        category={item.category} 
        amount={item.amount} 
      />
    );
  });

  //  table with transaction details
  return (
    <table className="padded table"> 
      <tbody>
        <tr>
          {/* Table headers */}
          <th>
            <h3 className="table header">Date</h3>
          </th>
          <th>
            <h3 className="table header">Description</h3>
          </th>
          <th>
            <h3 className="table header">Category</h3>
          </th>
          <th>
            <h3 className="table  header">Amount</h3>
          </th>
        </tr>
        {/* list of <Transaction> components */}
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList; // Export TransactionsList component for use in other files