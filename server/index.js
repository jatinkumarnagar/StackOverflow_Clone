import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a Stack Overflow Clone API");
});

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);

const PORT = process.env.PORT || 5000;

// If your password has special characters, encode it
const encodedPassword = encodeURIComponent('<db_password>');
const CONNECTION_URL = `mongodb+srv://<db_user>:${encodedPassword}@cluster0.bawkzq3.mongodb.net/yourDatabaseName?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });
