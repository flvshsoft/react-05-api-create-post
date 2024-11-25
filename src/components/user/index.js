import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]); // State untuk menyimpan data user
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menangkap error
  const navigate = useNavigate();

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
    <div className="container py-5">
      <h1>User List</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={() => navigate("/user/create")}
      >
        Tambah
      </button>
      <div className="row">
        {users.map((user) => (
          <div className="col-4 mb-4" key={user.id}>
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img
                    src={user.avatar}
                    className="card-img-top"
                    alt={`${user.first_name} ${user.last_name}`}
                    width="50"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <p className="card-title">
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="card-text">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
