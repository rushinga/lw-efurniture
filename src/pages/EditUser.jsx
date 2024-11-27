// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const EditUser = () => {
//   const { id } = useParams(); // Get the ID from URL params
//   const [user, setUser] = useState({
//     id: "",
//     username: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     role: "",
//   });

//   // Fetch user data from an API or backend service when component mounts
//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await fetch(`http://localhost:9090/user?id=${id}`);

//         // Check if the request was successful (status 200-299)
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         // Parse the JSON response
//         const userData = await response.json();
//         setUser(userData); // Set the user state with the fetched data
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//       }
//     }

//     fetchUser();
//   }, []); // Fetch user data whenever `id` changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("User updated:", user);

//     try {
//       const response = await fetch(`http://localhost:9090/admin/users/update`, {
//         method: "PUT", // Use PUT for updating data
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user), // Send the user data as JSON
//       });

//       // Check if the request was successful (status 200-299)
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       // Parse the JSON response
//       const data = await response;
//       console.log("Updated user:", data); // Log the updated user data or handle it accordingly
//     } catch (error) {
//       console.error("Failed to update user:", error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Edit User</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="hidden" name="id" value={user.id} />
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="form-control"
//             value={user.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="form-control"
//             value={user.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="firstName" className="form-label">
//             First Name
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             className="form-control"
//             value={user.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="lastName" className="form-label">
//             Last Name
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className="form-control"
//             value={user.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={user.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phoneNumber" className="form-label">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             className="form-control"
//             value={user.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="role" className="form-label">
//             Role
//           </label>
//           <select
//             id="role"
//             name="role"
//             className="form-select"
//             value={user.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Select a role
//             </option>
//             <option value="ROLE_USER">Customer</option>
//             <option value="ROLE_SELLER">Seller</option>
//             <option value="ROLE_ADMIN">Admin</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditUser;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams(); // Get the ID from URL params
  const navigate = useNavigate(); // To navigate after updating
  const [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
  });

  // Fetch user data from an API or backend service when component mounts
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:9090/user?id=${id}`);

        // Check if the request was successful (status 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON response
        const userData = await response.json();
        setUser(userData); // Set the user state with the fetched data
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }

    fetchUser();
  }, [id]); // Fetch user data whenever `id` changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User updated:", user);

    try {
      const response = await fetch(
        `http://localhost:9090/admin/users/update/${id}`,
        {
          method: "PUT", // Use PUT for updating data
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user), // Send the user data as JSON
        }
      );

      // Check if the request was successful (status 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Parse the JSON response
      const data = await response.json();
      console.log("Updated user:", data); // Log the updated user data or handle it accordingly

      // Redirect to another page after successful update (e.g., back to user list or profile)
      navigate(`/usermgt`);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={user.id} />
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={user.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="form-select"
            value={user.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="ROLE_USER">Customer</option>
            <option value="ROLE_SELLER">Seller</option>
            <option value="ROLE_ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
