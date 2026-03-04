import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

function App(){
  return ( 
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<Dashboard />}>
  //   </Route>
  //   <Route path="/users" element={<Users />} >
  //     </Route>
  //     <Route path='/login' element={<Login/>}
  //     ></Route>
  //     </Routes>
  //     </BrowserRouter>
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<PrivateRoute>
      <Dashboard/>
    </PrivateRoute>}/>
    <Route path="/users" element={
  <PrivateRoute>
    <AdminRoute>
      <Users/>
    </AdminRoute>
  </PrivateRoute>
}/>
    </Routes>
    </BrowserRouter> 
 
    
  )
}
export default App;