import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]); // State untuk menyimpan data user
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menangkap error

  useEffect(() => {
    // Fungsi untuk fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users"); // Permintaan ke API
        const data = await response.json(); // Parsing data ke JSON
        setUsers(data.data); // Simpan data users ke state
        setLoading(false); // Set loading ke false
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData(); // Panggil fungsi fetch
  }, []); // Dependency array kosong agar hanya dijalankan sekali

  if (loading) return <p>Loading...</p>; // Tampilkan pesan loading
  if (error) return <p>{error}</p>; // Tampilkan pesan error

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              width="50"
            />
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
