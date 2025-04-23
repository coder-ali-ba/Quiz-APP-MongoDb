const userEmail     =document.getElementById("userEmail")
const userPassword =document.getElementById("userPassword")


const logIn = async() => {
    try {
        const currUser = {
            userEmail : userEmail.value,
            userPassword : userPassword.value
        }
        const response = await fetch('http://localhost:8080/logIn' , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(currUser)
        })

        const data = await response.json()
      
        const user = data.data
        
        // console.log(user);

        if(user.userPassword && user.userType == "Admin"){
           
            console.log("Admin Hai Ha ");
            console.log(user); 
            window.location = "../../Admin/adminDashboard/admin.html"
        } else if(user.userPassword && user.userType =="User"){
            console.log('user Hai');
            console.log(user);
            window.location = "../../Client/QuizList/quizList.html"
        }

       
        
    } catch (error) {
        alert(error.message)
    }
   
}