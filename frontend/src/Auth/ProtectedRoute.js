// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);

//   useEffect(() => {
//     const checkTokenValidity = async () => {
//       const token = localStorage.getItem('authToken');

//       if (!token) {
//         setIsAuthenticated(false);
//         return;
//       }

//       try {
     
//          // const response = await axios.get(`${process.env.Backend_URL}/api/auth/verify`, {
       
//         const response = await axios.get('https://event-management-project-backend.onrender.com/api/auth/verify',{
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

    
//         if (response.status === 200) {
//           setIsAuthenticated(true);
//         } else {
 
//           console.error('Token verification failed:', response.status, response.data);
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error('Token verification failed', error);
//         setIsAuthenticated(false);
//       }
//     };

//     checkTokenValidity();
//   }, []);

//   if (isAuthenticated === null) {
//     return <p>Loading...</p>;
//   }

//   return isAuthenticated ? children : <Navigate to="/signin" />;
// };

// export default ProtectedRoute;
// --------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        console.error('No token found in localStorage');
        setIsAuthenticated(false);
        return;
      }

      try {
        console.log('Verifying token...');

        const response = await axios.get('https://event-management-project-backend.onrender.com/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log('Token verification successful:', response.data);
          setIsAuthenticated(true);
        } else {
          console.error('Token verification failed:', response.status, response.data);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Token verification error:', error.response ? error.response.data : error.message);
        setIsAuthenticated(false);
      }
    };

    checkTokenValidity();
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // Show a loading state while checking authentication
  }

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;

