import React from "react";
import { useEffect, useState } from "react";
import { AllUsers } from "../../actions";

const DisplayUsers = () => {
      const [users, setUsers] = useState([]);
      
        useEffect(() => {
          const FetchData = async () => {
            try {
              const response = await AllUsers();
              console.log(response)
              setUsers(response);
            } catch (error) {
              console.log(error);
            }
          };
      
          FetchData();
        }, []);
      
         
         
            
              return (
                <div className="pl-12">
                  
                <div className="text-6xl font-bold pb-12 pt-3 text-center">User Profiles</div>
                <div className="grid grid-cols-2 gap-4">
                  {users.map(user => (
                    <div key={user._id} class="text-center max-w-sm bg-blue-300 rounded-lg border border-gray-200 shadow-xl">
                      <div class="bg-gray-400 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="text-sm text-left text-black pl-10">
                          <img
                            className="mx-auto rounded-t-lg "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjKeGI4YUz4_Pih8w1gCZiIvaL28vv-QSoWRagw0&s"
                            alt="image"
                          />
                          <label>
                            Name: {user.name}
                            </label><br />
                          <label>Email: {user.email}</label><br />
                          <label>Gender: {user.gender}</label><br />
                          <label>Date of Birth: {user.dob}</label><br />
                          <label>Mobile: {user.mobile}</label><br />
                          <label>Qualification: {user.qualification}</label><br />
                          <label>School/College: {user.school_clz}</label><br />
                          <label>Specialization: {user.specialization}</label><br />
                        </div>
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
              )
          
        };
      
      const AdminSlidebarActions = () => {
        return (
          <div className="px-6 pt-6 2xl:container">
            <DisplayUsers />
          </div>
        );
      };
      
     
export default AdminSlidebarActions;