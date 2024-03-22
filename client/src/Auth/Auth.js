import { useReducer, useEffect } from 'react';
import axois from "axois";





    const loginUser = async (userForm) => {
        try {
          const response = await axois.post(`http://localhost:3001/users/login`, userForm);

          if (response.data.success) {
            localStorage.setItem(
              "accessToken",
              response.data.accessToken,
            );
          }
          console.log(response);
          
          return response.data;
        } catch (error) {
          if (error.response.data) {
            return error.response.data;
          } else {
            return { success: false, message: error.message };
          }
        }
      };

export default loginUser;