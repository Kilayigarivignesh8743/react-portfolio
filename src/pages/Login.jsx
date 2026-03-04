import { useState } from "react";
import "../styles.css";

function Login(){

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


function handleLogin(){

// fetch("http://127.0.0.1:8000/api/login/",{
fetch("https://react-portfolio-7ed4.onrender.com/api/login/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username: username,
password: password
})

})

.then(res=>res.json())

.then(data=>{

console.log("LOGIN RESPONSE:", data);

if(data.token){

localStorage.setItem("token", data.token);
localStorage.setItem("role", data.role);

window.location="/";

}else{

alert("Invalid credentials");

}

})

}



return(

<div className="login-container">

<div className="login-box">

<h2>Admin Login</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>


<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={handleLogin}>
Login
</button>


</div>

</div>

)

}

export default Login;