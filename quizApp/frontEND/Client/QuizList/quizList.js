const quiz = document.getElementById("quiz")
let quizIndex =0
const getAll = async() => {
    const response = await fetch("http://localhost:8080/getAllQuizzes")
    let data = await response.json()
    let info = data.data
    console.log(data.data);
    info.map((singleQuiz)=>{
        quiz.innerHTML += `
        <div id="" class="listedItems">
        <h1>${singleQuiz.title}</h1>
        <button id="${singleQuiz._id}" onclick="goToQuiz(this)">Start Quiz</button>
        </div>
        `
    })
   
}


const goToQuiz = (ele) =>{
    console.log(ele.id);
    sessionStorage.setItem("QuizId", JSON.stringify(ele.id))
    
 window.location = '../QuizAPp/quizApp.html'
}




getAll()