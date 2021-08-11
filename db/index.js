import express from "express"
import serverRoutes from "./routes/server.js";
import path from "path";

const __dirname = path.resolve();
const app = express()
const PORT =  process.env.PORT ?? 3000

app.use(express.json())
app.use('/api', serverRoutes)

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))


app.use(express.static(path.resolve(__dirname,'static')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', ((req, res) => {
    res.render('index', {title: 'Main page', active: 'main'})
}))

app.listen(PORT, (req,res) =>{
    console.log('Server has been started on ' + PORT)
})