import React, { useState , memo, useEffect} from 'react'
import './RegisterInfo.css'
import ClientInfoService from '../../services/ClientInfoService'





function RegisterInfo() {
const [lists , setLists] = useState([])

const getAllClients = () => {

    ClientInfoService.getAllClients().then((res) => {

        console.log(res)
        setLists(res.data.data)


    }).catch(err => {
        console.log(err)
      })


}

    const deleteItem = (list) => {
       const newList  = lists.filter((l) => l.id !== list.id
            
       )
       setLists(newList);
    

    }

    useEffect(() => {
        getAllClients()
    },[])


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
        {list.firstName}
       </td>
       <td className='table-data'>
        {list.phoneNo}
       </td>
       <td className='table-data'>{list.email}</td>
       <td className='table-data'>{list.Class}</td>
       <td className='table-data'><span className='delete-span' onClick= { () => (deleteItem(list))}>Delete </span></td>
</tr>
))}
</tbody>
</table>
</>
  )
}

export default memo(RegisterInfo)
