import { createAsyncThunk } from "@reduxjs/toolkit"

// import axios connection
import axios from "axios"
import apiUrl from '../../app/base/base_url'

const url = `${apiUrl}/category`

/**
 * description
 */
export const getCategorys = createAsyncThunk(
    'category/getCategorys',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message)
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