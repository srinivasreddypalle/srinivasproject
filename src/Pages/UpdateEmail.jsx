import React, { useState } from "react";

const UpdateEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API here
    setMessage("✅ Email updated successfully!");
  };

  return (
    <div className="form-container">
      <h2>Update Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />
        <button type="submit">Update Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateEmail;
