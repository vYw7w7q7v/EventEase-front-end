import React from 'react';
import { Card, CardContent, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddEventDialog({ open, onClose }) {
  const [textField1, setTextField1] = React.useState('');
  const [textField2, setTextField2] = React.useState('');
  const [textField3, setTextField3] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleClose = () => onClose(false);

  const handleSave = () => {
    console.log('TextField 1:', textField1);
    console.log('TextField 2:', textField2);
    console.log('TextField 3:', textField3);
    console.log('Selected Date:', selectedDate);
    onClose(false);
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
              id="textField1"
              label="Название события"
              type="text"
              fullWidth
              value={textField1}
              onChange={(e) => setTextField1(e.target.value)}
            />
            <TextField
              margin="dense"
              id="textField2"
              label="Место (Адрес)"
              type="text"
              fullWidth
              value={textField2}
              onChange={(e) => setTextField2(e.target.value)}
            />
            <TextField
              margin="dense"
              id="textField3"
              label="Описание"
              type="text"
              fullWidth
              multiline
              rows={6}
              value={textField3}
              onChange={(e) => setTextField3(e.target.value)}
            />
            <div style={{ marginLeft: "25%", marginTop: "20px"}}>
              <label>Дата и время:</label>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd/MM/yyyy HH:mm"
                timeCaption="Время"
              />
            </div>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" style={{ backgroundColor: "#FFA500", marginBottom: "10px" }}>
          Отмена
        </Button>
        <Button onClick={handleSave} variant="contained" style={{ backgroundColor: "#FFA500", marginBottom: "10px", marginRight: "16px" }}>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEventDialog;
