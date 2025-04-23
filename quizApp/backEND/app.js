import express,{response, urlencoded} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { questions } from './models/models.js'
import { signUp } from './models/models.js'
import { logIn } from './models/models.js'
import bcrypt, { compare } from 'bcryptjs'

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


app.post("/signUp" , async(request , response) => {
try {
    const user = request.body
    const CheckUser =await signUp.findOne({
        email : user.email
    })
    if(CheckUser){
        return response.json({
            data : null,
            message : "User Already Exists"
        })
    }
     
    const userPass = user.password
    const hashPass = await bcrypt.hash(userPass, 10)    

    let obj = {
        ...user,
        password : hashPass
    }
    const addUser = await signUp.create(obj)
    console.log(addUser);
    
    response.json({
        data :addUser,
        message : "signedUp successfully"
    })
} catch (error) {
response.json({
    data : null,
    message : "signUp Failed"
})    
}
   
})

app.post("/logIn",  async(request , response) => {
    try {
        const body = request.body
        const {userEmail, userPassword} = body;

        console.log(userEmail, userPassword);
        
        const findUser = await signUp.findOne({email:userEmail})

        if(!findUser){
            return  response.json({
                data : null,
                message : "Invalid EmailAddress"
            }) 
        }
        const comPass =await bcrypt.compare(userPassword , findUser.password)
         if(!comPass){
            return response.json({
                data : null,
                message : "invalid Password"
            })
         }

        // const saveCurrent = await logIn.create(body)

        console.log(findUser)

         response.json({
            data : {
                ...body,
                userPassword : comPass,
                userType : findUser.userType
            },
            message : "user Found"
         })

        
    } catch (error) {
        response.json({
            data : null,
            message : "user Not Found"
        })
    }
    
    
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);  
})