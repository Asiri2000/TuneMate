import React, { useState } from "react";
import { ViewUser } from "./ViewUser";

export const AddUser = () => {
   const [form, setForm] = useState({ fname: "", lname: "", dob: "" });
   const [message, setMessage] = useState("");

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleAddUser = async (e) => {
      e.preventDefault();
      setMessage("");
      try {
         const res = await fetch("http://localhost:5000/api/user/adduser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
         });
         const data = await res.json();
         if (res.ok) {
            setMessage("User added successfully!");
            setForm({ fname: "", lname: "", dob: "" });
         } else {
            setMessage(data.message || "Failed to add user");
         }
      } catch (err) {
         setMessage("Server error");
      }
   };

   return (
      <div>
         <h1 className="form-title">Add a User</h1>
         <form id="adduserform" onSubmit={handleAddUser} style={{ width: "100%" }}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" value={form.fname} onChange={handleChange} required />
            <br />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" value={form.lname} onChange={handleChange} required />
            <br />
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={form.dob} onChange={handleChange} required />
            <br />
            <input type="submit" value="Add User" />
         </form>

             <button onClick={() => window.location.href = "/view"}>View Users</button>

         {message && <p>{message}</p>}
      </div>
   );
}