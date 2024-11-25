import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const [user, setUser] = useState({ name: "", job: "" });
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      setResponse(data); // Menyimpan respons dari server
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate("/user")}
      >
        Kembali
      </button>

      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">
            Job
          </label>
          <input
            type="text"
            name="job"
            className="form-control"
            id="job"
            value={user.job}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>

      {/* Tampilkan respons server */}
      {response && (
        <div className="mt-4">
          <h3>User Created</h3>
          <p>
            <strong>ID:</strong> {response.id}
          </p>
          <p>
            <strong>Name:</strong> {response.name}
          </p>
          <p>
            <strong>Job:</strong> {response.job}
          </p>
          <p>
            <strong>Created At:</strong> {response.createdAt}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserCreate;
