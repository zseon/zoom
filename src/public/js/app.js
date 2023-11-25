// Websocket connection
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => console.log("connected Server ✅"));
socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});
socket.addEventListener("close", () => console.log("disconnected server"));

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
});
