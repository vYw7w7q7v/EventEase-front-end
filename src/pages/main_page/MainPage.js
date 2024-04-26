import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './MainPage.css';

const MainPage = () => {
  return (
    <Card className="main-container">
      <CardContent>
        <Typography variant="h5" component="h1">Добро пожаловать на главную страницу!</Typography>
        <Typography variant="body1">Здесь вы можете найти всю необходимую информацию о нашем приложении.</Typography>
      </CardContent>
    </Card>
  );
}

export default MainPage;
