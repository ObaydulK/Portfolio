import { useState } from "react";
import { useEffect } from "react"


const FacthTest = () => {
  const [users, setUser] = useState([]);
 
 
 
  const getData = async () => {
    const res = await fetch('users.json');
    setUser(await res.json());
  
  
  }



  useEffect(() => {



    
    getData();
  }, []);

  return (

    <>
      <div className="  grid grid-flow-row grid-cols-3  ">

        {
          users.map((user) => {
            return (
              <>
                <div className="p-10  ">
                  <div className=" ">
                    <div className="flex gap-4" >
                      <h1> {user.name}</h1>
                      <h2>{user.username}</h2>
                    </div>
                    <div>{user.email}</div>
                    <div>{user.address.street}</div>
                  </div>
                </div>
              </>
            )
          })
        }

      </div >

    </>
  )
}

export default FacthTest