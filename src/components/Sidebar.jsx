// import {Link} from "react-router-dom"
// function Sidebar(){
//     return (
//         <div style={{width:"200px",height:"100vh",backgroundColor:"#1e293b",color:"white",padding:"20px"}}>
//         <ul style={{listStyle:"none",padding:0}}>
//             <li style={{margin:"200px 0"}}>
//                 <Link to="/" style={{color:"white"}}>Dashboard</Link>
//             </li>
//             {localStorage.getItem("role")==="admin" && (
//             <li style={{margin:"200px 0"}}>
//                 <Link to="/users" style={{color:"white"}}>Users</Link>
//             </li>
//             )}
//             <button onClick={()=>{localStorage.removeItem("token")
//                 window.location="/login";
//             }}>Logout</button>
           
//         </ul>
//         </div>
//     )
// }
// export default Sidebar;


import { Link } from "react-router-dom";
import "../styles.css";

function Sidebar(){

const role = localStorage.getItem("role");

return(

<div className="sidebar">

<h2>Admin Panel</h2>


<div className="sidebar-menu">

<Link to="/">Dashboard</Link>

{role==="admin" && (

<Link to="/users">Users</Link>

)}

</div>


<button className="sidebar-logout"

onClick={()=>{

localStorage.clear();

window.location="/login";

}}

>

Logout

</button>


</div>

)

}

export default Sidebar;