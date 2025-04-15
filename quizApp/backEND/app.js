import express,{response, urlencoded} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { questions } from './models/models.js'

const app = express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())
const PORT =8080


const URI =`mongodb+srv://habibali:aliba@cluster0.pygv4nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(URI)
.then(()=>{
    console.log("mongoDB connected");  
})

app.post("/addQuestion", async (request, response)=>{
    try {
        console.log(request.body)
        const addQues = await questions.create(request.body)      
        response.json({
            message : "chal raha",
            data : addQues
        })  
    } catch (error) {
        response.json({
            message : "Nhi Chal Raha"
        })
    }
    
})

app.get('/getAllQuizzes' , async (request , response) => {
    try {
        const allQuizzes = await questions.find({})

        response.json({
            data : allQuizzes,
            message : "fetched All quizzes"
        })
    } catch (error) {
        response.json({
            data : null,
            message : "fetched All quizzes failed"
        })
    }
    
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);  
})