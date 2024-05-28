import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './MyAccount.css';
import { useAuthContext } from "../../context/AuthContext";

const MyAccount = () => {
  const { authToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/');
    }
  }, [authToken, navigate]);

  if (!authToken) {
    return null;
  }

  return (
    <Card className="account-container">
      <CardContent>
        <div className="account-info">
          <div className="avatar-container">
            <Avatar alt="User Avatar" src="/img/avatar/avatar_demo.jpg" className="avatar" sx={{ width: 300, height: 300, borderRadius: 0 }} />
          </div>
          <div className="user-details">
            <Typography variant="h4" component="h2">
              Sigma
            </Typography>
            <Typography variant="h6" color="textSecondary">
              sigma@gmail.com
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Есть проблемы — звони,
              В сердце мрак и огни.
              Я приду, помогу,
              Мы разгоним тьму.
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MyAccount;
