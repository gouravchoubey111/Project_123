import React from 'react';


function ElectricityBillingSystem() {
  return (
    
     

      <div className="container">
        <h1>Welcome to our Electricity Billing System</h1>
        <form className="billing-form">
          <div className="form-group">
            <label htmlFor="customerName">Customer Name:</label>
            <input type="text" id="customerName" name="customerName" required />
          </div>
          <div className="form-group">
            <label htmlFor="meterNumber">Meter Number:</label>
            <input type="text" id="meterNumber" name="meterNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="unitsConsumed">Units Consumed:</label>
            <input type="number" id="unitsConsumed" name="unitsConsumed" required />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount (in $):</label>
            <input type="number" id="amount" name="amount" required />
          </div>
          <div className="form-group">
            <button type="submit">Pay Now</button>
          </div>
        </form>
      </div>
    
  );
}

export default ElectricityBillingSystem;
