import React, { useState , memo} from 'react'
import './RegisterInfo.css'





function RegisterInfo() {
const [lists , setLists] = useState([

    {
        id: 1,
        name: 'rafay',
        phoneno: '03353801076',
        email: 'abdulrafay00@gmail.com',
        class: 'gym',
    
    
    },
    {
        id: 2,
        name: 'anas',
        phoneno: '03212468501',
        email: 'anas00@gmail.com',
        class: 'gym',
    
    
    },
    {
        id: 3,
        name: 'afshal',
        phoneno: '0331378902',
        email: 'afshal00@gmail.com',
        class: 'gym',
    
    
    },
    {
        id: 4,
        name: 'aneeque',
        phoneno: '03345678909',
        email: 'aneeque00@gmail.com',
        class: 'gym',
    
    
    },
    {
        id: 5,
        name: 'ashraf',
        phoneno: '03345678909',
        email: 'aneeque00@gmail.com',
        class: 'gym',
    
    
    }
])

    const deleteItem = (list) => {
       const newList  = lists.filter((l) => l.id !== list.id
            
       )
       setLists(newList);
    

    }
  return (
    <>
     <span className='heading'>
       <h2>The Registers Information's</h2>
       </span>
    <table className='info-table'>
    <thead>
    <tr>
        <th className='table-head'>Name</th>
        <th className='table-head'>Phone Number</th>
        <th className='table-head'>Email</th>
        <th className='table-head'>Class</th>
        <th className='table-head'>Delete</th>
    </tr>
    </thead>
    <tbody>
    {lists.map((list, index) => (
        <tr key={index}>
       <td className='table-data'>
        {list.name}
       </td>
       <td className='table-data'>
        {list.phoneno}
       </td>
       <td className='table-data'>{list.email}</td>
       <td className='table-data'>{list.class}</td>
       <td className='table-data'><span className='delete-span' onClick= { () => (deleteItem(list))}>Delete </span></td>
</tr>
))}
</tbody>
</table>
</>
  )
}

export default memo(RegisterInfo)
