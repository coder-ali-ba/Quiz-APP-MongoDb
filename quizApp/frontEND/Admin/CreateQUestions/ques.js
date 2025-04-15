const title = document.getElementById("title")
const ques = document.getElementById("ques")

const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")

const correctOption = document.getElementById("correctOption")

let questionArr=[]
const addQuestion = () =>{
 
let QuesObj = {
    question :ques.value,
    options : [option1.value , option2.value , option3.value, option4.value],
    correctOne : correctOption.value
}
questionArr.push(QuesObj)

}


const addQuiz = async() => {
    try {
        let qiuzObj = {
            title : title.value,
            questionArray : questionArr,
            isActive : true
         }
        console.log(qiuzObj);
        
        const response = await fetch("http://localhost:8080/addQuestion" ,{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(qiuzObj)
        })
        
    } catch (error) {
        console.log(error.message);       
    }
}