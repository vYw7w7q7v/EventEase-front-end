import React from 'react';
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import './MyAccount.css';

const MyAccount = () => {
  return (
    <Card className="account-container">
      <CardContent>
        <div className="account-info">
          <div className="avatar-container">
            <Avatar alt="User Avatar" src="/avatar.jpg" className="avatar" sx={{ width: 300, height: 300, borderRadius: 0 }} />
          </div>
          <div className="user-details">
            <Typography variant="h4" component="h2">
              Username
            </Typography>
            <Typography variant="h6" color="textSecondary">
              user@example.com
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Profile Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MyAccount;
