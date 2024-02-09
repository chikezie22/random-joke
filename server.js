import http from "http";
import { app } from "./index.js";
const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`listening to port ${PORT} ....`);
});
