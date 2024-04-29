import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import './EventSelection.css';

const events = [
  {
    id: 1,
    title: "Событие 1",
    imageUrl: "/path/to/image1.jpg",
    location: "Адрес события 1",
    time: "Время события 1"
  },
  {
    id: 2,
    title: "Событие 2",
    imageUrl: "/path/to/image2.jpg",
    location: "Адрес события 2",
    time: "Время события 2"
  },
  {
    id: 3,
    title: "Событие 3",
    imageUrl: "/path/to/image3.jpg",
    location: "Адрес события 3",
    time: "Время события 3"
  },
  {
    id: 4,
    title: "Событие 4",
    imageUrl: "/path/to/image4.jpg",
    location: "Адрес события 4",
    time: "Время события 4"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  },
  {
    id: 5,
    title: "Событие 5",
    imageUrl: "/path/to/image5.jpg",
    location: "Адрес события 5",
    time: "Время события 5"
  }
];

const EventSelection = () => {
  return (
    <div className="events-grid">
      {events.map(event => (
        <Card key={event.id} className="event-card">
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CardMedia
                component="img"
                height="100"
                width="100"
                image={event.imageUrl}
                alt={event.title}
              />
              <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 'bold' }}>
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>
                Место: {event.location}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>
                Время: {event.time}
              </Typography>
              <Button variant="contained" style={{ fontFamily: 'Roboto', marginTop: '30px', backgroundColor: '#FFA500', color: 'white' }}>Выбрать</Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default EventSelection;
