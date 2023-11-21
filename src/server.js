import http from "http";
import express from "express";
import WebSocket from "ws";

const app = express();
const PORT = 3000;

app.set("view engine", "pug"); // 템플릿 엔진
app.set("views", __dirname + "/views"); // 템플릿 경로

app.use("/public", express.static(__dirname + "/public")); // 유저에게 파일 공유(html,css,js)
app.get("/", (req, res) => res.render("home")); // 홈 템플릿 랜더

const handleListen = () => console.log(`listening to http://localhost:${PORT}`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

server.listen(3000, handleListen);
