import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToSocket from './controllers/socketManager.js';

dotenv.config();
const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 8000));

app.get('/', (req, res) =>{
    return res.json({
        message: 'Welcome to Video Call Backend'
    });
})

const start = async () => {
    app.set('mongo_user')
    const connectionDB = await mongoose.connect(process.env.MONGO_URL);
    if (connectionDB) {
        console.log(`MONGO Connected to DB HOST: ${connectionDB.connection.host}`);
    } else {
        console.error('Failed to connect to MongoDB');
        return;
    }
    server.listen(app.get('port'), () => {
        console.log(`Server is running on port ${app.get('port')}`);
    }); 
}

start();
