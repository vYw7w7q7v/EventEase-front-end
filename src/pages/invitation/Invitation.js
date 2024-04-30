import React, { useState } from 'react';

// ** MUI
import { Card, CardContent, Typography} from '@mui/material';

// ** Style
import './Invitation.css';

const Invitation = () => {
  const [invitationData, setInvitationData] = useState({
    inviter: "Никита",
    meeting: "Концерт",
    address: "ул. Примерная, 123",
    startDate: "01.05.2024, 12:00"
  });

  return (
    <div>
      <Card className="invitation-container">
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Вас пригласили
          </Typography>
          <Typography variant="body1">
            Вас пригласил {invitationData.inviter} на встречу {invitationData.meeting}
          </Typography>
          <Typography variant="body1">
            Мероприятие будет проходить по адресу {invitationData.address}
          </Typography>
          <Typography variant="body1">
            Начало {invitationData.startDate}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invitation;
