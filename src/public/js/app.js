// Websocket connection
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => console.log("connected Server ✅"));
socket.addEventListener("message", (message) =>
  console.log("New message: ", message.data)
);
socket.addEventListener("close", () => console.log("disconnected server"));

setTimeout(() => {
  socket.send("hello from the browser!");
}, 5000);
