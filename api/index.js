// api/index.js
import { Router } from 'express'
const router = Router()

router.get('/test', async (req, res) => {
    let data = {
        "code":200,
        "name":"小明",
    }
    res.json(data);
});

export default router