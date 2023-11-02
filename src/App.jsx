import React, { useState } from "react";
import "./App.css";
import Registration from "./components/Registration";
import DisplayList from "./components/DisplayList";

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: 1698952836491,
      name: "P",
      dob: "2023-10-03",
      email: "D@gmail.com",
    },
  ]);

  const handleUserList = (user) => {
    setUsersList([...usersList, user]);
  };

  return (
    <div>
      <Registration handleUserList={handleUserList} />
      <DisplayList usersList={usersList} />
    </div>
  );
}

export default App;
