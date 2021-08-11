import {Router} from 'express'
const router = Router()
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const { data_bases ,list ,object } = new PrismaClient();

router.get('/',async (req, res) => {
    const dbs = await data_bases.findMany({
        select:{
            id: true,
            titles:true,
            lists: true
        }
    });
    res.json(dbs)
})

router.post('/', async (req, res) => {
    const {title} = req.body;

    const titleExists = await title.findUnique({
        where:{
            title
        },
        select: {
            username: true
        }
    })
    if(titleExists){
        return res.status(400).json({
            msg:'data base already exists'
        })
    }

    const newTitle = await title.create({
        data:{
            title
        }
    })
    res.json(newTitle)
})

export default router