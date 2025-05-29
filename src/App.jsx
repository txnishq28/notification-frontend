import NotificationBell from './components/NotificationBell';

function App() {
  const handleLike = async () => {
    await fetch('https://notification-backend-n1pg.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senderId: 'userA', recipientId: 'userB' })
    });
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
