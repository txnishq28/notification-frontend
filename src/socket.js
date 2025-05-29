import { io } from 'socket.io-client';

export const socket = io('http://localhost:4000'); // If backend is deployed later, replace URL
