import { useEffect, useState } from 'react';
import { socket } from '../socket';

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => socket.off('notification');
  }, []);

  return (
    <div>
      <h2>🔔 Notifications ({notifications.length})</h2>
      <ul>
        {notifications.map((n, idx) => (
          <li key={idx}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
}
