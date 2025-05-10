// App.js
import { useState } from "react";
import User from "./User";
import CustomBtn from "../shared/CustomBtn";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([
    {
      "id": 1,
      "name": "Ali",
      "email": "ali@example.com"
    },
    {
      "id": 2,
      "name": "Lina",
      "email": "lina@example.com"
    },
    {
      "id": 3,
      "name": "Omar",
      "email": "omar@example.com"
    },
    {
      "id": 4,
      "name": "Sara",
      "email": "sara@example.com"
    },
    {
      "id": 5,
      "name": "Yousef",
      "email": "yousef@example.com"
    }
  ]);

  return (
    <div className="container mt-5">
      <AddUser/>
      
      {users.map((user) => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}

      <CustomBtn type="Edit" color="success" />
      <CustomBtn type="Delete" color="danger" />
    </div>
  );
}

export default App;