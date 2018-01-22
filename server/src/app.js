import express from "express";
import http from "http";
import socket from "socket.io";
import rootRoutes from "./routes/root";
import userRoutes from "./routes/user";
import SocketHandler from "./socket/SocketHandler";

const app = express();
const httpServer = http.Server(app);
const io = socket(httpServer);

app.use('/', rootRoutes);
app.use('/user', userRoutes);

io.on('connection', function(socket) {
  console.log('a user connected');
  SocketHandler.handleEvent(socket);
});

export default httpServer;