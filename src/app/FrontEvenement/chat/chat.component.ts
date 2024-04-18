import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket: Socket;
  messages: string[] = []; // Define messages property as an empty array
  newMessage: string = '';
  text: string = '';
  sentByMe: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Connect to the Socket.IO server
    this.socket = io('http://localhost:9092'); // Replace with your server URL and port

    // Listen for messages from the server
    this.socket.on('chat message', (msg: string) => {
      console.log('Received message:', msg);
      // Handle the received message as needed (e.g., display it in the UI)
    });
  }

  sendMessage(message: string): void {
    // Send a message to the server
    this.socket.emit('chat message', message);
  }
}