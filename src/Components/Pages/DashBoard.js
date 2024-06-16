import { useEffect, useState } from 'react';

function Usuario() {
  const baseUrl = "http://localhost:8080/api/v1/usuarios";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }
  , []);

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.idUsuario}>
              <td>{user.idUsuario}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;