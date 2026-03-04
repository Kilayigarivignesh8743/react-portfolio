import Sidebar from "../components/Sidebar";
import "../styles.css";

function Dashboard(){

return(

<div className="layout">

<Sidebar/>

<div className="content">

<h1>Dashboard</h1>

<p>Welcome to Admin Dashboard</p>

</div>

</div>

)

}

export default Dashboard;