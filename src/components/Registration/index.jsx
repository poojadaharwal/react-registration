import React, { useState } from "react";

function Registration({ handleUserList }) {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserList({ id: Date.now(), ...user });
    setUser({
      name: "",
      dob: "",
      email: "",
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <br /> <br />
        <input
          type="date"
          name="dob"
          placeholder="dob"
          value={user.dob}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type="email"
          placeholder="email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Registration;
