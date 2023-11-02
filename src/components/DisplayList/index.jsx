import React from "react";

function DisplayUsers({ usersList }) {
  console.log("usersList: ", usersList);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayUsers;
