/*
    1. express 설치
    2. view 엔진, 경로 설정
    3. static 파일 경로 설정
    4. 미들웨어
    5. 리슨 포트
*/
import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "pug"); // 템플릿 엔진
app.set("views", __dirname + "/views"); // 템플릿 경로

app.use("/public", express.static(__dirname + "/public")); // 유저에게 파일 공유(html,css,js)
app.get("/", (req, res) => res.render("home")); // 홈 템플릿 랜더

const handleListen = () => console.log(`listening to http://localhost:${PORT}`);
app.listen(3000, handleListen);
