const quizMain = document.getElementById("quizMain")
let next = 0;
const fetchQuiz = async() => {
    try {
        const response = await fetch("http://localhost:8080/getAllQuizzes")
        const data =await response.json()
        let allData = data.data
        
       const getSess =JSON.parse(sessionStorage.getItem("QuizId")) 
       

       const matchId = allData.find((quizItem)=>{
        return quizItem._id ==getSess
       })

       console.log(matchId);

      


        const questions= matchId.questionArray
         
       
       quizMain.innerHTML = `
       <h2>${matchId.title}</h2>
       <p>${questions[0].question}</p>
       <span>
          <button onclick="nextQuiz()">${questions[next].options[0]}</button>
       </span>
       <span>
          <button onclick="nextQuiz()">${questions[next].options[1]}</button>
       </span>
       <span>
          <button onclick="nextQuiz()">${questions[next].options[2]}</button>
       </span>
       <span>
          <button onclick="nextQuiz()">${questions[next].options[3]}</button>
       </span>
    
       `
    } catch (error) {
        console.log(error.message);     
    }
}

const nextQuiz = () => {
    quizMain.innerHTML = ""
    next++
    fetchQuiz()
}
window.addEventListener('load', fetchQuiz())