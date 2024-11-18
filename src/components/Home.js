import React from "react";

function Home() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary">Welcome to the Home Page</h1>
      <p className="text-center text-muted">
        This is the home page of our application.
      </p>

      {/* Card Example */}
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
