import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ** Style
import './Header.css';

// ** MUI
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// ** Components
import * as PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

function TabPanel(props) {
  return null;
}

TabPanel.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
  children: PropTypes.node
};
const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openCreateEventDialog, setOpenCreateEventDialog] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Воронеж'); // Установка Воронежа по умолчанию
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleCreateEventDialogOpen = () => {
    setOpenCreateEventDialog(true);
  };

  const handleCreateEventDialogClose = () => {
    setOpenCreateEventDialog(false);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleLogoClick = () => {
    setActiveButton(null);
  };

  const handleLocationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLocationClose = () => {
    setAnchorEl(null);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    handleLocationClose();
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <header className="header">
      <div className="logo">
        <Tooltip title="Главная" arrow>
          <Link to="/" className="logo-link" onClick={handleLogoClick}>EventEase</Link>
        </Tooltip>
      </div>
      <div className="location">
        <Button className="location" onClick={handleLocationClick} startIcon={<LocationOnIcon />}>
          {selectedLocation}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleLocationClose}
          className="location"
        >
          <MenuItem onClick={() => handleLocationSelect('Воронеж')}>Воронеж</MenuItem>
          <MenuItem onClick={() => handleLocationSelect('Москва')}>Москва</MenuItem>
          <MenuItem onClick={() => handleLocationSelect('Санкт-Петербург')}>Санкт-Петербург</MenuItem>
        </Menu>
      </div>
      <nav>
        <div className="navigation-links">
          <Link
            to="/selection"
            className={`header-button ${activeButton === 'view' ? 'active' : ''}`}
            onClick={() => handleButtonClick('view')}
          >
            <EventIcon />
            Подборки
          </Link>
          <Link
            to="/info"
            className={`header-button ${activeButton === 'create' ? 'active' : ''}`}
            onClick={() => handleButtonClick('create')}
          >
            <InfoIcon />
            О нас
          </Link>
        </div>
      </nav>
      <div className="login-button">
        <Button variant="contained" className="create-event-button" onClick={handleCreateEventDialogOpen}>Создать событие</Button>
        <Button variant="contained" onClick={handleDialogOpen}>Войти</Button>
        <LoginDialog open={openDialog} onClose={handleDialogClose} />
      </div>
      <Dialog open={openCreateEventDialog} onClose={handleCreateEventDialogClose} maxWidth="xs" fullWidth={false}>
        <Tooltip title="Закрыть" arrow>
          <IconButton onClick={handleCreateEventDialogClose} style={{ color: 'black', position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon style={{ color: 'black' }} />
          </IconButton>
        </Tooltip>
        <DialogTitle>Выберите тип события</DialogTitle>
        <DialogContent>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="dialog-tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#FFA500',
              }
            }}
          >
            <Tab
              label="Открытое"
              style={{color: tabValue === 0 ? '#FFA500' : 'black'}}
            />
            <Tab
              label="Закрытое"
              style={{color: tabValue === 1 ? '#FFA500' : 'black'}}
            />
          </Tabs>
          <Box hidden={tabValue !== 0} marginTop={2}>
            <Typography>
              Создать открытое событие можно без регистрации
            </Typography>
            <Box mt={2}>
              <Button variant="contained" style={{ backgroundColor: "#FFA500" }}>
                Создать
              </Button>
            </Box>
          </Box>
          <Box hidden={tabValue !== 1}>
            <Typography>
              Чтобы создать закрытое событие необходимо войти в свой аккаунт или зарегистрироваться.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
