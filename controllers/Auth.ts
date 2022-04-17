import { Request, Response } from 'express';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

export const getAuth = (req: Request, res: Response) => {
    res.send('Get Auth')
}