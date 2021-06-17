import express, { Application, Request, Response, NextFunction } from "express"
import {createServer} from 'http'
import { Server, Socket } from 'socket.io'
const app: Application = express()
const server = createServer(app);


const options = {cors: {origin: 'http://localhost:9000'}};

const io = new Server(server, options);

io.on("connect", (socket: Socket) => {
  console.log("user connected", socket.id);


  socket.on("chat-msg", function (data) {
    io.emit("chat-msg", data);
  });
});

server.listen(3001, () =>  console.log("listening on port 3001"));

