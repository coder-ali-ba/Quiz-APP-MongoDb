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
        console.log(data.data);
        
    } catch (error) {
        alert(error.message)
    }
   
}