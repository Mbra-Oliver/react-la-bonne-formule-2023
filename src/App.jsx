import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (userName, age) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        {
          name: userName,
          age: age,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
