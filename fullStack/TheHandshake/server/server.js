const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });
io.on("connection", socket => {
    console.log(socket.id);
    console.log('nice to meet you. (shake hands)')
    socket.emit('welcome', 'welcome to this app');
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data)
    });
});