import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ** Context
import { useAuthContext } from '../../context/AuthContext';
import { useCloseEventContext } from '../../context/event/CloseEventContext';

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
import Avatar from '@mui/material/Avatar';

// ** Components
import AddEventDialog from "../../views/componets/AddEventDialog";
import CloseIcon from "@mui/icons-material/Close";
import LoginDialog from "../../pages/authorization/login/LoginDialog";


const Header = () => {
  const { authToken, setAuthToken } = useAuthContext();
  const { setCloseEvent } = useCloseEventContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [openAddEventDialog, setOpenAddEventDialog] = useState(false);
  const [openCreateEventDialog, setOpenCreateEventDialog] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [anchorMenu, setAnchorMenu] = useState(null);

  const handleDialogAddEventOpen = () => {
    setOpenAddEventDialog(true);
  };

  const handleDialogAddEventClose = () => {
    setOpenAddEventDialog(false);
  };

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 0) {
      setCloseEvent(0);
    } else {
      setCloseEvent(1);
    }
  };

  const handleMenuClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorMenu(null);
  };

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
    handleMenuClose();
  };

  return (
    <header className="header">
      <div className="logo">
        <Tooltip title="Главная" arrow>
          <Link to="/" className="logo-link" onClick={handleLogoClick}>EventEase</Link>
        </Tooltip>
      </div>
      <nav>
        <div className="navigation-links">
          <Link
            to="/selection-event"
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
      {authToken ? (
        <div className="login-button">
          <Button variant="contained" style={{ marginRight: '10px' }} onClick={handleCreateEventDialogOpen}>Создать событие</Button>
          <IconButton onClick={handleMenuClick}>
            <Avatar alt="User Avatar" src="/img/avatar/avatar_demo.jpg" className="avatar" sx={{ width: 50, height: 50}} />
          </IconButton>
          <Menu
            anchorEl={anchorMenu}
            open={Boolean(anchorMenu)}
            onClose={handleMenuClose}
          >
            <Link to="/account" style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuClose}>
              <MenuItem>Личные данные</MenuItem>
            </Link>
            <Link to="/account-settings" style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuClose}>
              <MenuItem>Настройки</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout} style={{color: 'black' }}>Выйти</MenuItem>
          </Menu>
          <AddEventDialog open={openAddEventDialog} onClose={handleDialogAddEventClose}/>
        </div>
      ) : (
        <div className="login-button">
          <Button variant="contained" style={{ marginRight: '10px' }} onClick={handleCreateEventDialogOpen}>Создать событие</Button>
          <Button variant="contained" onClick={handleDialogOpen}>Войти</Button>
          <LoginDialog open={openDialog} onClose={handleDialogClose} />
          <AddEventDialog open={openAddEventDialog} onClose={handleDialogAddEventClose}/>
        </div>
      )}
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
              <Button variant="contained" style={{ backgroundColor: "#FFA500" }} onClick={handleDialogAddEventOpen}>
                Создать
              </Button>
            </Box>
          </Box>
          {authToken ? (
            <Box hidden={tabValue !== 1} marginTop={2}>
              <Typography>
                Создайте своё мероприятие мечты!
              </Typography>
              <Box mt={2}>
                <Button variant="contained" style={{ backgroundColor: "#FFA500" }} onClick={handleDialogAddEventOpen}>
                  Создать
                </Button>
              </Box>
            </Box>
          ) : (
            <Box hidden={tabValue !== 1}>
              <Typography>
                Чтобы создать закрытое событие необходимо войти в свой аккаунт или зарегистрироваться.
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
