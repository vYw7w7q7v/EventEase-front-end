import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import './EventSelection.css';

const events = [
  {
    id: 1,
    title: "Рок-концерт",
    imageUrl: "/img/event/event_1.jpg",
    location: "пер. Домодедовская, 20",
    time: "12/24/2024 19:00",
    type: "концерт"
  },
  {
    id: 2,
    title: "Отцы и дети",
    imageUrl: "/img/event/event_2.jpg",
    location: "ул. Ленина, 60",
    time: "12/25/2024 18:30",
    type: "театр"
  },
  {
    id: 3,
    title: "Диджей из Сочи",
    imageUrl: "/img/event/event_3.jpg",
    location: "наб. Славы, 93",
    time: "12/26/2024 20:15",
    type: "другое"
  },
  {
    id: 4,
    title: "Вручение награды",
    imageUrl: "/img/event/event_4.jpg",
    location: "бульвар Чехова, 58",
    time: "12/27/2024 17:45",
    type: "другое"
  },
  {
    id: 5,
    title: "Модный показ",
    imageUrl: "/img/event/event_5.jpg",
    location: "спуск Косиора, 32",
    time: "12/28/2024 16:20",
    type: "другое"
  },
  {
    id: 6,
    title: "Евгений Онегин",
    imageUrl: "/img/event/event_6.jpg",
    location: "шоссе Будапештская, 97",
    time: "12/29/2024 21:00",
    type: "театр"
  }
];


const EventSelection = () => {
  const [openEventDetails, setOpenEventDetails] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // добавляем состояние для хранения строки поиска

  const handleOpenEventDetails = (event) => {
    setSelectedEvent(event);
    setOpenEventDetails(true);
  };

  const handleOpenImageModal = (image) => {
    setSelectedImage(image);
    setOpenImageModal(true);
  };

  const handleClose = () => {
    setOpenEventDetails(false);
    setOpenImageModal(false);
    setSelectedEvent(null);
    setSelectedImage(null);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Card style={{ width: '89%', margin: '10px auto' }}>
        <CardContent>
          <TextField
            label="Поиск"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginTop: '10px' }}
          />
        </CardContent>
      </Card>
      <div className="events-grid">
        {filteredEvents.map(event => (
          <Card key={event.id} className="event-card">
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography gutterBottom variant="h6" component="div" className="text-content" style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 'bold' }}>
                  {event.title}
                </Typography>
                <Box className="image-container" sx={{ marginBottom: '10px' }} onClick={() => handleOpenImageModal(event.imageUrl)}>
                  <CardMedia
                    component="img"
                    image={event.imageUrl}
                    alt={event.title}
                    className="event-image"
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-content"
                  style={{ fontFamily: 'Roboto', fontSize: '16px', cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => handleOpenEventDetails(event)}>
                  Место и время
                </Typography>
                <Button variant="contained" style={{ fontFamily: 'Roboto', marginTop: '10px', backgroundColor: '#FFA500', color: 'white' }}>Выбрать</Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog
        open={openEventDetails}
        onClose={handleClose}
        aria-labelledby="event-details-title"
        aria-describedby="event-details-description"
      >
        <DialogTitle id="event-details-title">{selectedEvent ? selectedEvent.title : ''}</DialogTitle>
        <DialogContent>
          <DialogContentText id="event-details-description">
            {selectedEvent && (
              <>
                <Typography variant="body2" color="text.secondary">
                  Место: {selectedEvent.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Время: {selectedEvent.time}
                </Typography>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        open={openImageModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-content">
          {selectedImage && (
            <img src={selectedImage} alt="Event" className="modal-image" />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default EventSelection;
