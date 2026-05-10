import React, { useEffect, useState } from "react";

export const ViewUser = () => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      const fetchUsers = async () => {
         setLoading(true);
         setError("");
         try {
            const res = await fetch("http://localhost:5000/api/user/all");
            const data = await res.json();
            if (res.ok) {
               setUsers(data.users || []);
            } else {
               setError(data.message || "Failed to fetch users");
            }
         } catch (err) {
            setError("Server error");
         }
         setLoading(false);
      };
      fetchUsers();
   }, []);

   const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this user?")) return;
      try {
         const res = await fetch(`http://localhost:5000/api/user/delete/${id}`, { method: "DELETE" });
         const data = await res.json();
         if (res.ok) {
            setUsers(users.filter((u) => u._id !== id));
         } else {
            alert(data.message || "Failed to delete user");
         }
      } catch (err) {
         alert("Server error");
      }
   };

   return (
      <div>
         <h1 className="form-title">View Users</h1>
         {loading && <p>Loading...</p>}
         {error && <p style={{ color: "red" }}>{error}</p>}
         {!loading && !error && (
            <table border="1" cellPadding="8">
               <thead>
                  <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Date of Birth</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.length === 0 ? (
                     <tr><td colSpan="4">No users found.</td></tr>
                  ) : (
                     users.map((user) => (
                        <tr key={user._id}>
                           <td>{user.fname}</td>
                           <td>{user.lname}</td>
                           <td>{user.dob ? new Date(user.dob).toLocaleDateString() : ""}</td>
                           <td>
                              <button onClick={() => handleDelete(user._id)} style={{ color: "red" }}>Delete</button>
                           </td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         )}
      </div>
   );
}