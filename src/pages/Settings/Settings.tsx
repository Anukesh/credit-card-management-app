const Settings = () => {
  return (
    <div className="page-container">
      <h1>Settings</h1>
      <p>Account preferences and configuration</p>
      <div className="page-content">
        <p>Manage your account settings:</p>
        <ul>
          <li>Profile information</li>
          <li>Security settings</li>
          <li>Notification preferences</li>
          <li>Two-factor authentication</li>
          <li>API access management</li>
          <li>Business profile settings</li>
        </ul>
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f3f4f6",
            borderRadius: "5px",
          }}
        >
          <h3>Account Status</h3>
          <p>• Verified Business Account • 2FA Enabled • API Access: Active</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
