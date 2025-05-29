import { useEffect } from 'react';
import { io } from 'socket.io-client';
import NotificationBell from './components/NotificationBell';

const socket = io('https://notification-backend-n1pg.onrender.com'); // ✅ WebSocket connection

function App() {
  useEffect(() => {
    // ✅ Listen for real-time notifications
    socket.on('notification', (data) => {
      console.log('📣 New notification:', data);
      // You can update state here or pass the event to NotificationBell
    });

    // Optional: cleanup
    return () => socket.disconnect();
  }, []);

  const handleLike = async () => {
    try {
      const res = await fetch('https://notification-backend-n1pg.onrender.com/api/interaction/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senderId: 'userA', recipientId: 'userB' })
      });

      const data = await res.json();
      console.log('✅ Like sent:', data);
    } catch (err) {
      console.error('❌ Failed to send like:', err);
    }
  };

  return (
    <div className="app-center">
      <h1>Notification System Demo</h1>
      <button onClick={handleLike}>Simulate Like</button>
      <NotificationBell />
    </div>
  );
}

export default App;
