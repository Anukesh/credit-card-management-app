const Credit = () => {
  return (
    <div className="page-container">
      <h1>Credit</h1>
      <p>Credit facilities and loan management</p>
      <div className="page-content">
        <p>Manage your credit products:</p>
        <ul>
          <li>Business credit lines</li>
          <li>Equipment financing</li>
          <li>Working capital loans</li>
          <li>Credit utilization overview</li>
          <li>Payment schedules</li>
        </ul>
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#fef3c7",
            borderRadius: "5px",
          }}
        >
          <h3>Credit Summary</h3>
          <p>Available Credit: $50,000 • Used: $12,500 • Available: $37,500</p>
        </div>
      </div>
    </div>
  );
};

export default Credit;
