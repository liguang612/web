const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const {faker} = require("@faker-js/faker");
const {Socket} = require("socket.io")

const port = 4000;

app.get("/", (_req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// server
io.on("connection", (socket) => {
    // generate a fake name
    const username = faker.person.firstName();
    
    // server receive msg
    socket.on("chat", (msg) => {
      // server broadcasts (forward) message to all other clients
      io.emit("sendMsg", username, msg);
    });
  });  

http.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
