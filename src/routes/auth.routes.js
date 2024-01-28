import { Router } from 'express'


const authRouter = Router()



authRouter.get('/signin', (req, res ) => {
    res.json('fffff')
})

export default authRouter