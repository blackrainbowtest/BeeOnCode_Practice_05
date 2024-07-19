// src/app/Category/CategoryAPI.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../app/base/base_url';
import { convertImageToBase64 } from '../../utils/image';
import { addError, setLoading } from '../global/GlobalSlice';

const url = `${apiUrl}/category`;

export const getCategorys = createAsyncThunk(
    'category/getCategorys',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (category, { dispatch, rejectWithValue }) => {
        try {
            const base64Image = category.image ? await convertImageToBase64(category.image) : null;
            const response = await axios.post(url, { ...category, image: base64Image });
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false)); // maybe i dont need this one IDK
        }
    }
);










/**
 * Maybe i can try save images like this
 * const express = require('express');
    const multer = require('multer');
    const path = require('path');

    const app = express();
    const upload = multer({ dest: 'uploads/' }); // Путь к папке для сохранения файлов

    // Обработчик загрузки файла
    app.post('/upload', upload.single('image'), (req, res) => {
    // req.file содержит информацию о загруженном файле
    // Путь к файлу можно сохранить в базе данных или в JSON сервере
    const imagePath = req.file.path;
    res.send(`File uploaded to: ${imagePath}`);
    });

    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
 */