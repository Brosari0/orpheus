// we send a request to the server
// the websocket protocol allows real time communication to happen once it's been upgraded
// server responds to the http request
// now the server can initiate contanct with the client
// there doesn't need to be a response. just messages being sent when needed over time
// socket.io handles the connection for us. (people disconnected/reconnecting)
// societ.io creates (rooms) for users to connect in. 
// generally when a client sends a message to the server we send the same message back
// think about video game servers being client side or server side. 
// server side is generally more fair. 
// a 'string' that needs to be exact or it won't work
// and won't cause an error is called a "Magic" string
// socket.io brings in a fully configured client library
// Socket === client-side io === server-side

// Step 1
// npm i socket.io
// Step 1.1 
// touch io.js
// in the directory bin/www add:
// var io = require('../io);
// io.attach(server);

// Step 2
// in the io.js file add:
// const io = require('socket.io')();
// io.on('connection', function(socket) {
//   console.log(`Client with id of ${socket.id} connected`);
// });
// module.exports = io;

// Step 3 
// in html include a script tag:
// <script src="/socket.io/socket.io.js"></script>
// do not defer ^

// Step 4
// in directory public/javascripts/main.js add:
// const socket = io();

// Step 5
// in io.js write the code: (This is server code)
//  socket.on('add-circle', function(data) {
//    io.emit('add-circle', data);
//  });

// Step 6
// in main.js write the code (This is our client code)
// socket.on('add-circle', function(data) {
// //  addCircle(data);
// });
// Replace the code further below in circles.addeventlistener:
// circles.addEventListener('click', function(evt) {
//   socket.emit('add-circle', {
//     initials,
//     x: evt.clientX,
//     y: evt.clientY,
//     dia: randomBetween(10,100),
//     rgba: getRandomRGBA()
//   });
// });
// in the function addCircle change the arguments to be destrcutured and add initials:
// function addCircle({x, y, dia, rgba, initials}) {
  // const el = document.createElement('div');
//   el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
//   el.style.top = y - Math.floor(dia / 2 + 0.5) + 'px';
//   el.style.width = el.style.height = dia + 'px';
//   el.style.backgroundColor = rgba;
//   el.style.fontSize = Math.floor(dia / 3) + 'px';
//   el.innerText = initials;
//   circles.appendChild(el);
// }
