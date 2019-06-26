import React from 'react';

const User = (props) => {
   console.log(props)
   const items = props.user.map(item=>{
        return(
            <div>
            <table align="center" className="class_two" border="1px">
           
            <tbody>
               
                    <tr key={item.id}>
                         <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.age}</th>
                        <th>{item.gender}</th>
                        <th>{item.email}</th>
                        <th>{item.phoneNo}</th>
                    </tr>
                
            </tbody>
        </table>
        </div>
        )
   })
        return (
     <div>
         {items}
     </div>
        )
    }
  


export default User;