import { useEffect, useState } from "react";
import userService, { User } from "./services/user-service";

function App() {
  const [users, setUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUser(users.filter((u) => u.id != user.id));

    const request = userService.deleteUser(user.id);
    request.catch((err) => {
      console.log("hi");
      setError(err.message);
      setUser(originalUsers);
    });

  };

  const createUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Upreti" };
    setUser([newUser, ...users]);

    const request = userService.addUser(newUser);
    request
      .then((res) => setUser([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUser(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUser(users.map((u) => (u.id === user.id ? updatedUser : u)));

    const request = userService.updateUser(user.id, updatedUser);
    request.catch((err) => {
      setError(err.message);
      setUser(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={() => createUser()}>
        Add
      </button>
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

 