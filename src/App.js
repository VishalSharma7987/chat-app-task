import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './Features/ChatSlice';
import { TextField, Button, List, ListItem, ListItemText, Container, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';


const StyledListItem = styled(ListItem)`
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #e0f7fa;
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color:green;
  }
`;

const StyledContainer = styled(Container)`
  background: linear-gradient(135deg, #e0f7fa, #ffccbc);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [user1Message, setUser1Message] = useState('');
  const [user2Message, setUser2Message] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const endOfMessagesRef = useRef(null);

  const handleUser1Send = () => {
    if (user1Message.trim()) {
      const message = {
        text: user1Message,
        user: 'User 1',
        time: new Date().toLocaleTimeString(),
      };
      dispatch(sendMessage(message));
      setUser1Message('');
    }
  };

  const handleUser2Send = () => {
    if (user2Message.trim()) {
      const message = {
        text: user2Message,
        user: 'User 2',
        time: new Date().toLocaleTimeString(),
      };
      dispatch(sendMessage(message));
      setUser2Message('');
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Background Layer */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: -2,
          height: '100%',
          width: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 238, 182, 0.5), rgba(255, 183, 197, 0.5))',
        }}
      ></div>

      <StyledContainer maxWidth="md">
        <Typography variant="h4" gutterBottom align="center" color="#333">Chat Application</Typography>
        
        <Box sx={{ maxHeight: '400px', overflowY: 'auto', borderRadius: '5px', padding: '1rem', marginBottom: '1rem', backgroundColor: 'white', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <List>
            {messages.map((msg, index) => (
              <StyledListItem key={index}>
                <ListItemText primary={`${msg.user}: ${msg.text}`} secondary={msg.time} />
              </StyledListItem>
            ))}
            <div ref={endOfMessagesRef} />
          </List>
        </Box>

        <TextField 
          value={user1Message}
          onChange={(e) => setUser1Message(e.target.value)}
          label="User 1 Type a message"
          fullWidth
          sx={{ marginBottom: '1rem', transition: 'all 0.3s ease', '&:focus': { boxShadow: '0 0 5px rgba(0, 0, 255, 0.5)' }}}
        />
        <Button onClick={handleUser1Send} variant="contained" color="primary" sx={{ display: "flex", margin: "auto", transition: 'all 0.3s ease', bottom:"8px", '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' } }}>
          Send (User 1)
        </Button>

        <TextField 
          value={user2Message}
          onChange={(e) => setUser2Message(e.target.value)}
          label="User 2 Type a message"
          fullWidth
          sx={{ marginBottom: '1rem', transition: 'all 0.3s ease', '&:focus': { boxShadow: '0 0 5px rgba(0, 0, 255, 0.5)' }}}
        />
         
        <Button onClick={handleUser2Send} variant="contained" color="secondary" sx={{ display: "flex", margin: "auto", transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' } }}>
        
          Send (User 2)

        </Button>
      
      </StyledContainer>
    </div>
  );
};

export default App;
