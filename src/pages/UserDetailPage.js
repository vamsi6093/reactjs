import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./UserDetailPage.js"; // For CSS
import { Typography, Button } from "@mui/material"; // For Material-UI (Optional)

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user)
    return (
      <Typography align="center" variant="h6">
        Loading...
      </Typography>
    );

  return (
    <div className="user-detail">
      <Typography variant="h4" align="center" className="title">
        User Details
      </Typography>
      <Typography>
        <strong>Name:</strong> {user.name}
      </Typography>
      <Typography>
        <strong>Email:</strong> {user.email}
      </Typography>
      <Typography>
        <strong>Phone:</strong> {user.phone}
      </Typography>
      <Typography>
        <strong>Company:</strong> {user.company.name}
      </Typography>
      <Typography>
        <strong>Website:</strong>{" "}
        <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary" className="back-button">
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default UserDetailPage;
