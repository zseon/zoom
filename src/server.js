import http from "http";
import express from "express";
import WebSocket from "ws";

const app = express();
const PORT = 3000;

// set template config
app.set("view engine", "pug"); // 템플릿 엔진
app.set("views", __dirname + "/views"); // 템플릿 경로
app.use("/public", express.static(__dirname + "/public")); // 유저에게 파일 공유(html,css,js)

//req
app.get("/", (req, res) => res.render("home")); // 홈 템플릿 랜더

// set http server
const server = http.createServer(app);

// set socket server
const wss = new WebSocket.Server({ server });
const sockets = [];

wss.on("connection", (socket) => {
  console.log(`Connected to Browser ✅`);
  ß;
  sockets.push(socket);
  socket.on("close", () => console.log("Disconnected from the Browser ❌"));

  socket.on("message", (message) => {
    console.log(message.toString());
    sockets.forEach((s) => s.send(message.toString()));
  });
});

// listen server
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
