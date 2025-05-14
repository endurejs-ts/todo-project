import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, '.')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(path.join(__dirname, '.', 'index.html')));
});

app.post("/api/todo", (req, res) => {
    const { todo } = req.body;
    res.json({ todo });
});

app.listen(PORT, () => console.log("port ready"));
