// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { homeRouter } from "./home/home.router.js";
const app = express();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.use("/", homeRouter);
export { app };
