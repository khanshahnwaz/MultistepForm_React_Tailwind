import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../Context/FormData'

const Data = () => {
    const context=useContext(FormContext)
    const formData=context.formData;
    const element=<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {formData.firstName}
                </th>
                <td className="py-4 px-6">
                    {formData.lastName}
                </td>
                <td className="py-4 px-6">
                    {formData.email}
                </td>
                <td className="py-4 px-6">
                    {formData.gender}
                </td>
                <td className="py-4 px-6">
                    {formData.age}
                </td>
                <td className="py-4 px-6">
                    {formData.department}
                </td>
                <td className="py-4 px-6">
                    {formData.designation}
                </td>
                <td className="py-4 px-6">
                    {formData.file}
                </td>
                <td className="py-4 px-6">
                    {formData.password}
                </td>

            </tr>
        
    
    
    
return (    
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Furst Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Last Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Gender
                </th>
                <th scope="col" className="py-3 px-6">
                    Age
                </th>
                <th scope="col" className="py-3 px-6">
                    Department
                </th>
                <th scope="col" className="py-3 px-6">
                    Designation
                </th>
                <th scope="col" className="py-3 px-6">
                    Publication
                </th>
                <th scope="col" className="py-3 px-6">
                    Password
                </th>
            </tr>
        </thead>
        <tbody>
          {element} 
            
        </tbody>
    </table>
</div>

            
    );
}
  


export default Data