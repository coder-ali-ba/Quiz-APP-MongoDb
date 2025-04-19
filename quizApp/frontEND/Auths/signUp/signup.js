const fullName = document.getElementById("fullName") 
const phoneNo  = document.getElementById("phoneNo") 
const email    = document.getElementById("email")
const gender   = document.getElementById("gender")
const password = document.getElementById("password")

const sign = async() =>{
    try {
        const userObj ={
            fullName : fullName.value,
            phNo : phoneNo.value,
            email : email.value,
            gender : gender.value,
            password : password.value
        }
    
        const response =  await fetch("http://localhost:8080/signUp" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userObj)
        }).then(()=>{
            alert("User Signed Up")
        })
    } catch (error) {
        alert(error.message)
    }

}