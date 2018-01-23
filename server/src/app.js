import express from "express";
import http from "http";
import socketIo from "socket.io";
import rootRoutes from "./routes/root";
import userRoutes from "./routes/user";
import Socket from "./socket/Socket";
import socketioJwt from "socketio-jwt";
import UserRepo from "./db/UserRepository";

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);

app.use('/', rootRoutes);
app.use('/user', userRoutes);

io.on('connection', socketioJwt.authorize({
  secret:'123456',
  timeout: 15000
})).on('authenticated', function(socket) {
  Socket.connect(socket);

  // // Up on connection, try to find the user
  // socket.join('room 237', () => {
  //   let rooms = Object.keys(socket.rooms);
  //   console.log(rooms); // [ <socket.id>, 'room 237' ]
  // });
  //
  // io.of('/').clients((error, clients) => {
  //   if (error) throw error;
  //   console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
  // });
});


export default httpServer;