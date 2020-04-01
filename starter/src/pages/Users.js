import React, { useState, useEffect } from 'react';

import api from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.website})</li>
        ))}
      </ul>

      <button type="button">Sair</button>
    </>
  );
}
