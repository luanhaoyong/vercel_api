// api/index.js
import { Router } from 'express'
const router = Router()

// 版本更新接口
router.get('/update', async (req, res) => {
    res.status(200).json({
            code: 200,
            version: "1.0.0",
            msg: "本次版本更新测试"
        })
});

// 根路由
router.get('/', async (req, res) => {
  res.status(200).json({
    code: 200,
    msg: '服务运行正常，可用接口：/update'
  })
})

// 错误示例接口
router.get('/error', async (req, res) => {
  // HTTP 500 + 业务错误码
  res.status(500).json({
    code: 500,
    msg: "服务器内部错误"
  })
})

export default router
