import React, { useState } from 'react';

// ** MUI
import { Card, CardContent, Button, Dialog, DialogTitle, DialogContent, Typography, Tab, Tabs, Box } from '@mui/material';

// ** Style
import './InfoPage.css';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

const InfoPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Card className="info-container">
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h4">
            EventEasy - сервис для создания мероприятий
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <Button variant="contained" color="primary" onClick={handleOpenDialog} style={{ backgroundColor: "#FFA500" }}>
              Создать событие
            </Button>
          </div>
        </CardContent>
      </Card>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs" fullWidth={false}>
        <Tooltip title="Закрыть" arrow>
          <IconButton onClick={handleCloseDialog} style={{ color: 'black', position: 'absolute', top: 10, right: 10 }}>
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
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default InfoPage;
