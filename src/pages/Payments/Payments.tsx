const Payments = () => {
  return (
    <div className="page-container">
      <h1>Payments</h1>
      <p>Manage your payments and transfers</p>
      <div className="page-content">
        <p>From this page you can:</p>
        <ul>
          <li>Send money to other accounts</li>
          <li>Pay bills and utilities</li>
          <li>Schedule recurring payments</li>
          <li>View payment history</li>
          <li>Manage beneficiaries</li>
        </ul>
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f0f9ff",
            borderRadius: "5px",
          }}
        >
          <h3>Quick Actions</h3>
          <p>• Transfer funds • Pay bills • International transfers</p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
