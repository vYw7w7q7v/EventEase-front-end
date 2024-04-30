import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, TextField, Button, Grid } from "@mui/material";
import './AccountSettings.css';

const AccountSettings = () => {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  const handleSave = () => {
    // Implement logic to save user settings
    console.log("Settings saved!");
  };

  return (
    <Card className="account-container">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt="User Avatar" src={avatar} className="avatar" sx={{ width: 400, height: 400, borderRadius: 0 }} />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="About"
              multiline
              rows={4}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={4} container direction="column" justifyContent="flex-start" alignItems="flex-end">
            <Grid item container direction="row" spacing={1}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary" onClick={() => {}}>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AccountSettings;
