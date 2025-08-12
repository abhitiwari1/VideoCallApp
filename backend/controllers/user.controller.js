import {User} from '../models/user.model.js';
import httpStatus from 'http-status';
import bcrypt, {hash} from 'bcrypt';
import crypto from 'crypto';

const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        return res.status(400).json({message: 'Username and password are required'});   
    }
    try {
        const user = await User.findOne({username});
        if(!user) {
            return res.status(httpStatus.NOT_FOUND).json({message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch) {
            let token = crypto.randomBytes(20).toString('hex');
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({message: 'Login successful', token});
        }else{
            return res.status(httpStatus.UNAUTHORIZED).json({message: 'Invalid credentials'});
        }
    }catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error logging in', error});
    }
}


const register = async (req, res) => {
    const {name, username, password} = req.body;
    if(!username || !password) {
        return res.status(400).json({message: 'Username and password are required'});
    }
    try {
        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(httpStatus.CONFLICT).json({message: 'Username already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: name,
            username: username, 
            password: hashedPassword,
        });
        await newUser.save();
        return res.status(httpStatus.CREATED).json({message: 'User registered successfully'});
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error registering user', error});
    }   
}

export {login, register};