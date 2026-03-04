// import Sidebar from "../components/Sidebar";
// import { useEffect, useState } from "react";
// function Users() {
//     const [users, setUsers] = useState([]);
//     const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//     const [editId, setEditId] = useState(null);
//   const [editFirstName, setEditFirstName] = useState("");
//   const [editLastName, setEditLastName] = useState("");
//   const [editPhone, setEditPhone] = useState("");
//     // read operation
//     // useEffect(() => {
//     //     fetch('https://dummyjson.com/users')
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             console.log("API Response:", data.users)
//     //             setUsers(data.users);
//     //         })
//     // }, []
//     // )
//     useEffect(() => {

//   fetch("http://127.0.0.1:8000/api/users/")

//     .then(res => res.json())

//     .then(data => {

//       setUsers(data);

//     });

// }, []);
//     // Delete operation
//     // function handleDelete(id) {
//     //     const updatedUsers = users.filter(
//     //         user => user.id !== id
//     //     )
//     //     setUsers(updatedUsers)
//     // }
//     function handleDelete(id){

//   fetch(`http://127.0.0.1:8000/api/users/${id}/`, {

//     method: "DELETE"

//   })

//   .then(() => {

//     setUsers(users.filter(user => user.id !== id));

//   });

// }
//     // Create operation
//     // function handleAdd(){
//     //   if (!firstName || !lastName || !phone){
//     //     alert("Enter all fileds")
//     //     return;
//     //   }
//     //   const newId=users.length+1
//     //   const email=firstName.toLowerCase()+newId+"@gmail.com";
//     //   const newUser = {
//     //     id:newId,firstName,lastName,email,phone
//     //   };
//     //   setUsers([...users,newUser]);
//     //   setFirstName("")
//     //   setLastName("")
//     //   setPhone("")
//     // }
//     function handleAdd(){

//   const newUser = {

//     firstname: firstName,

//     lastname: lastName,

//     email: firstName.toLowerCase() + "@gmail.com",

//     phone: phone

//   };

//   fetch("http://127.0.0.1:8000/api/users/", {

//     method: "POST",

//     headers: {

//       "Content-Type": "application/json"

//     },

//     body: JSON.stringify(newUser)

//   })

//   .then(res => res.json())

//   .then(data => {

//     setUsers([data, ...users]);

//   });

// }
//     // Edit operation
//     function handleEdit(user){
//       setEditId(user.id);
//       setEditFirstName(user.firstName);
//       setEditLastName(user.lastName)
//       setEditPhone(user.phone)
//      }
//   //    //update operation
//   //    function handleUpdate(id){
//   //     const email=editFirstName.toLowerCase()+id+"@gmail.com";
//   //     const updatedUsers=users.map(user=>
//   //       user.id === id ? {
//   //         ...user,firstName:editFirstName,lastName:editLastName,email,phone:editPhone
//   //       }
//   //       :user
//   //     );
//   //  setUsers(updatedUsers);
//   //   setEditId(null)
//   //    }
// function handleUpdate(id){

//   const updatedUser = {

//     firstname: editFirstName,

//     lastname: editLastName,

//     email: editFirstName.toLowerCase() + "@gmail.com",

//     phone: editPhone

//   };

//   fetch(`http://127.0.0.1:8000/api/users/${id}/`, {

//     method: "PUT",

//     headers: {

//       "Content-Type": "application/json"

//     },

//     body: JSON.stringify(updatedUser)

//   })

//   .then(res => res.json())

//   .then(data => {

//     setUsers(users.map(user => user.id === id ? data : user));

//     setEditId(null);

//   });

// }
//      return (
//         <div style={{ display: "flex" }}>
//             <Sidebar />
//             <div style={{ padding: "20px" }}>
//                 <h2>Users Page</h2>

//                 <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>
//                 setFirstName(e.target.value)}/>
//                  <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>
//                 setLastName(e.target.value)}/>
//                  <input type="text" placeholder="Phone number" value={phone} onChange={(e)=>
//                 setPhone(e.target.value)}/>
//                 <button onClick={handleAdd}>Add User</button>

//                 {/* rendering section */}
//                 <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
                
//                         <tbody>

// {users.map(user => (

// <tr key={user.id}>

// <td>{user.id}</td>

// <td>

// {editId === user.id ? (

// <>
// <input
// value={editFirstName}
// onChange={(e)=>setEditFirstName(e.target.value)}
// />

// <input
// value={editLastName}
// onChange={(e)=>setEditLastName(e.target.value)}
// />
// </>

// ) : (

// `${user.firstName} ${user.lastName}`

// )}

// </td>

// <td>{user.email}</td>

// <td>

// {editId === user.id ? (

// <input
// value={editPhone}
// onChange={(e)=>setEditPhone(e.target.value)}
// />

// ) : (

// user.phone

// )}

// </td>

// <td>

// {editId === user.id ? (

// <button onClick={()=>handleUpdate(user.id)}>
// Update
// </button>

// ) : (

// <button onClick={()=>handleEdit(user)}>
// Edit
// </button>

// )}

// <button onClick={()=>handleDelete(user.id)}>
// Delete
// </button>

// </td>

// </tr>

// ))}

// </tbody>
                   
//                 </table>


//             </div>
//         </div>
//     )
// }
// export default Users;



// import Sidebar from "../components/Sidebar";
// import { useEffect, useState } from "react";

// function Users() {

// const token=localStorage.getItem("token");
// if(!token){
// window.location="/login";
// }

//   const API = "http://127.0.0.1:8000/api/users/";   //to resue it multiple times and improves maintainability

//   const [users, setUsers] = useState([]);   //to store users list

//   const [firstName, setFirstName] = useState("");   //to store imput fields
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");

//   const [editId, setEditId] = useState(null);    //stores currently editing userId
//   const [editFirstName, setEditFirstName] = useState("");
//   const [editLastName, setEditLastName] = useState("");
//   const [editPhone, setEditPhone] = useState("");


//   // ✅ READ
//   useEffect(() => {

//     fetch(API)
//       .then(res => res.json())
//       .then(data => setUsers(data));

//   }, []);


//   // ✅ CREATE
//   function handleAdd() {    //runs when clicking on button

//     const email = firstName.toLowerCase() + "@gmail.com";   //creates email automatically

//     fetch(API, {

//       method: "POST",   //posts send data to backend

//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({   //converts object into json

//         firstname: firstName,
//         lastname: lastName,
//         email: email,
//         phone: phone

//       })

//     })
//       .then(res => res.json())
//       .then(newUser => {

//         setUsers([newUser, ...users]);   //updates ui instantly

//         setFirstName("");
//         setLastName("");
//         setPhone("");

//       });

//   }


//   // ✅ DELETE
//   function handleDelete(id) {

//     fetch(API + id + "/", {

//       method: "DELETE"

//     })
//       .then(() => {

//         setUsers(users.filter(user => user.id !== id));   //to remove deleted users from state

//       });

//   }


//   // ✅ EDIT
//   function handleEdit(user) {
//     //stores selected user data in state 
//     setEditId(user.id);
//     setEditFirstName(user.firstname);
//     setEditLastName(user.lastname);
//     setEditPhone(user.phone);

//   }


//   // ✅ UPDATE
//   function handleUpdate(id) {

//     const email = editFirstName.toLowerCase() + "@gmail.com";

//     fetch(API + id + "/", {

//       method: "PUT",   //put updates user in backend

//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({

//         firstname: editFirstName,
//         lastname: editLastName,
//         email: email,
//         phone: editPhone

//       })

//     })
//       .then(res => res.json())
//       .then(updated => {

//         setUsers(users.map(user =>    //updates ui
//           user.id === id ? updated : user
//         ));

//         setEditId(null);

//       });

//   }



//   // ✅ RETURN
//   return (     //this renders ui

//     <div style={{ display: "flex" }}>

//       <Sidebar />

//       <div style={{ padding: "20px", width: "100%" }}>

//         <h2>Users Page</h2>


//         {/* ADD USER */}

//         <input
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />

//         <input
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />

//         <input
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <button onClick={handleAdd}>
//           Add User
//         </button>



//         {/* USERS TABLE */}

//         <table border="1" cellPadding="10">

//           <thead>

//             <tr>

//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Action</th>

//             </tr>

//           </thead>


//           <tbody>

//             {users.map(user => (

//               <tr key={user.id}>


//                 <td>{user.id}</td>


//                 <td>

//                   {editId === user.id ? (

//                     <>
//                       <input
//                         value={editFirstName}
//                         onChange={(e) =>
//                           setEditFirstName(e.target.value)
//                         }
//                       />

//                       <input
//                         value={editLastName}
//                         onChange={(e) =>
//                           setEditLastName(e.target.value)
//                         }
//                       />
//                     </>

//                   ) : (

//                     user.firstname + " " + user.lastname

//                   )}

//                 </td>


//                 <td>{user.email}</td>


//                 <td>

//                   {editId === user.id ? (

//                     <input
//                       value={editPhone}
//                       onChange={(e) =>
//                         setEditPhone(e.target.value)
//                       }
//                     />

//                   ) : (

//                     user.phone

//                   )}

//                 </td>


//                 <td>

//                   {editId === user.id ? (

//                     <button
//                       onClick={() => handleUpdate(user.id)}
//                     >
//                       Update
//                     </button>

//                   ) : (

//                     <button
//                       onClick={() => handleEdit(user)}
//                     >
//                       Edit
//                     </button>

//                   )}


//                   <button
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     Delete
//                   </button>


//                 </td>


//               </tr>

//             ))}

//           </tbody>

//         </table>


//       </div>

//     </div>

//   );

// }

// export default Users;


import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import "../styles.css";
import "./users.css";   // import css



function Users() {

const token = localStorage.getItem("token");

if (!token) {
window.location = "/login";
}


const API = "http://127.0.0.1:8000/api/users/";


const [users, setUsers] = useState([]);

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [phone, setPhone] = useState("");

const [editId, setEditId] = useState(null);
const [editFirstName, setEditFirstName] = useState("");
const [editLastName, setEditLastName] = useState("");
const [editPhone, setEditPhone] = useState("");



/* READ */

useEffect(() => {

fetch(API)

.then(res => res.json())

.then(data => setUsers(data));

}, []);




/* CREATE */

function handleAdd() {

const email = firstName.toLowerCase() + "@gmail.com";

fetch(API, {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({

firstname: firstName,
lastname: lastName,
email: email,
phone: phone

})

})

.then(res => res.json())

.then(newUser => {

setUsers([newUser, ...users]);

setFirstName("");
setLastName("");
setPhone("");

});

}



/* DELETE */

function handleDelete(id) {

fetch(API + id + "/", {

method: "DELETE"

})

.then(() => {

setUsers(users.filter(user => user.id !== id));

});

}



/* EDIT */

function handleEdit(user) {

setEditId(user.id);

setEditFirstName(user.firstname);

setEditLastName(user.lastname);

setEditPhone(user.phone);

}



/* UPDATE */

function handleUpdate(id) {

const email = editFirstName.toLowerCase() + "@gmail.com";

fetch(API + id + "/", {

method: "PUT",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({

firstname: editFirstName,
lastname: editLastName,
email: email,
phone: editPhone

})

})

.then(res => res.json())

.then(updated => {

setUsers(users.map(user =>

user.id === id ? updated : user

));

setEditId(null);

});

}



return (

<div className="layout">


<Sidebar />


<div className="users-container">


<h2 className="title">Users Management</h2>



<div className="form">


<input

placeholder="First Name"

value={firstName}

onChange={(e) => setFirstName(e.target.value)}

/>


<input

placeholder="Last Name"

value={lastName}

onChange={(e) => setLastName(e.target.value)}

/>


<input

placeholder="Phone"

value={phone}

onChange={(e) => setPhone(e.target.value)}

/>


<button className="add-btn" onClick={handleAdd}>

Add User

</button>


</div>




<table className="users-table">


<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Action</th>

</tr>

</thead>



<tbody>


{users.map(user => (

<tr key={user.id}>


<td>{user.id}</td>


<td>

{editId === user.id ? (

<>

<input

value={editFirstName}

onChange={(e)=>setEditFirstName(e.target.value)}

/>


<input

value={editLastName}

onChange={(e)=>setEditLastName(e.target.value)}

/>

</>

) :

user.firstname + " " + user.lastname

}

</td>


<td>{user.email}</td>


<td>

{editId === user.id ? (

<input

value={editPhone}

onChange={(e)=>setEditPhone(e.target.value)}

/>

) :

user.phone

}

</td>



<td>


{editId === user.id ? (

<button className="update-btn"

onClick={() => handleUpdate(user.id)}>

Update

</button>

) :

<button className="edit-btn"

onClick={() => handleEdit(user)}>

Edit

</button>

}



<button className="delete-btn"

onClick={() => handleDelete(user.id)}>

Delete

</button>


</td>


</tr>

))}


</tbody>


</table>



</div>


</div>


);

}


export default Users;