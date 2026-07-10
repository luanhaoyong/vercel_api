// express_test/index.js
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
// 新增：导入api路由
import apiRouter from './api/index.js'

const app = express();
app.use(cors());

// 挂载路由，所有api下接口前缀为 /
app.use('/', apiRouter) 

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app