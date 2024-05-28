import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// ** MUI
import { Card, CardContent, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, Switch } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";

// ** Styled
import "react-datepicker/dist/react-datepicker.css";

// ** Components
import DatePicker from "react-datepicker";

// ** Context
import { useAuthContext } from "../../context/AuthContext";
import { useCloseEventContext } from '../../context/event/CloseEventContext';

function AddEventDialog({ open, onClose }) {
  const { closeEvent } = useCloseEventContext();
  const { authToken, setAuthToken } = useAuthContext();
  const [eventData, setEventData] = useState({
    name_event: '',
    address: '',
    description: '',
    registration: null,
    invitedBy: '',
    selectedDate: null,
    closeEvent: closeEvent
  });

  useEffect(() => {
    setEventData(prevState => ({
      ...prevState,
      closeEvent: closeEvent
    }));
  }, [closeEvent]);

  const handleClose = () => onClose(false);
  const handleSave = () => {
    console.log('Event Data:', eventData);
    onClose(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleDateChange = (date) => {
    setEventData(prevState => ({
      ...prevState,
      selectedDate: date
    }));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle>Создать событие</DialogTitle>
      <DialogContent>
        <Card variant="outlined">
          <CardContent>
            <TextField
              autoFocus
              margin="dense"
              name="name_event"
              label="Название события"
              type="text"
              fullWidth
              value={eventData.name_event}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="address"
              label="Место (Адрес)"
              type="text"
              fullWidth
              value={eventData.address}
              onChange={handleChange}
            />
            {authToken && (
              <TextField
                margin="dense"
                name="description"
                label="Описание"
                type="text"
                fullWidth
                multiline
                rows={6}
                value={eventData.description}
                onChange={handleChange}
              />
            )}
            {authToken && (
              <div>
                <label>Требуется регистрация: </label>
                <Switch
                  name="registration"
                  checked={eventData.registration}
                  onChange={handleSwitchChange}
                />
              </div>
            )}
            {authToken && (
              <TextField
                margin="dense"
                name="invitedBy"
                label="Приглашающий"
                type="text"
                fullWidth
                value={eventData.invitedBy}
                onChange={handleChange}
              />
            )}
            {authToken && (
              <div style={{ marginLeft: "25%", marginTop: "20px" }}>
                <label>Дата и время:</label>
                <DatePicker
                  selected={eventData.selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  timeCaption="Время"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" style={{ backgroundColor: "#FFA500", marginBottom: "10px" }}>
          Отмена
        </Button>
        <MenuItem component={Link} to="/preview" variant="contained" style={{ backgroundColor: "#FFA500", marginBottom: "10px", marginRight: "16px" }} onClick={handleSave}>
          Сохранить
        </MenuItem>
      </DialogActions>
    </Dialog>
  );
}

export default AddEventDialog;
