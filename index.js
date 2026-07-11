// express_test/index.js
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
// 新增：导入api路由
import apiRouter from './api/index.js'

const app = express();
app.use(cors());

// 1. 优先拦截图标请求
app.get('/favicon.ico', (req, res) => res.status(204).send())

// 2. 再挂载业务路由
app.use('/', apiRouter) 

// 3. 最后兜底404
app.use((req, res) => {
  res.status(404).json({
    code: 404,
    msg: '接口不存在，请检查请求地址'
  })
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app