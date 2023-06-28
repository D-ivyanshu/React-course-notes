import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUser(users.filter(u => u.id != user.id));
    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .catch( (err) => {
        console.log("hi");
        setError(err.message);
        setUser(originalUsers);
      })
  }

  const createUser = () => {
    const originalUsers = [...users];
    const newUser = {id: 0, name: 'Upreti'};
    setUser([newUser,...users]);

    axios.post('https://jsonplaceholder.typicode.com/users/',newUser)
      .then(res => setUser([res.data, ...users]))
      .catch( (err) => {
        setUser(originalUsers);
        setError(err);
      })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={() => createUser()}>Add</button>
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between" key={user.id}>
            {user.name} 
            <div>  
             <button className="btn btn-outline-secondary mx-3">Update</button>
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
