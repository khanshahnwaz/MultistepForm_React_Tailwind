import {useFormik} from 'formik'
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { FormContext } from '../Context/FormData';
import {useNavigate} from 'react-router-dom'
import Data from './Data';
const SignUp=()=>{
    // context api,used to store the form data to be used in another page 
    const context=useContext(FormContext)
    // state to manage formData
    const[formData,setFormData]=useState({})
    // values to manage the percentage of the progress bar 
   const[pct,setPct]=useState('');
   const[pctText,setPctText]=useState('0/3');
//    multistep , for multistep form
   const[step,setStep]=useState(0);

//    navigate after successfull form submission
const navigate=useNavigate();
   
//    useEffect(()=>{
//     // data.appendt(formData)
//   console.log(formData)
//    },[formData])


    // Formik library
    const formik1=useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        validate:values=>{
            const errors={};
            if(!values.firstName ){
                errors.firstName='*Required'
            }else{
                setFormData({...formData,firstName:values.firstName})
            }
            if(!values.lastName){
                errors.lastName='*Required'
            }else {
                setFormData({...formData,lastName:values.lastName})
            }
            if(!values.email){
                errors.email='*Required'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = '*Invalid email';
              }else{
                setFormData({...formData,email:values.email})
              }
              
            return errors;
        },
        onSubmit: async values=>{
            setPct('w-[30%]')
        //    collectFormData(values)
            setPctText('1/3')
            setStep(1)

            //  console.log("hello")
            console.log("First form values",formData)

        }
    })
    // console.log("Visited fields",formik1.touched)

    // Formik library
    const formik2=useFormik({
        initialValues:{
            department:'',
            designation:'',
            gender:'',
            age:''
        },
        validate:values=>{
            // console.log("Values of file is",values.file)
            const errors={};
            if(!values.age){
                errors.age='*Required'
               }else if(values.age<20){
                errors.age='*Invalid age(<20)'
               }else if(values.age>100){
                errors.age='*Invalid age(>100)'
               }else{
                setFormData({...formData,age:values.age})

               }
            if(!values.department){
                errors.department='*Required'
            }else{
                setFormData({...formData,department:values.department})

            }
           
            if(!values.designation){
                errors.designation='*Required'
            }else{
                setFormData({...formData,designation:values.designation})

            }
            
          
            if(!values.gender){
                errors.gender='*Required'
            }else{
                setFormData({...formData,gender:values.gender})

            }
            
          
                
            return errors;
        },
        onSubmit: async values=>{
            setStep(2)
            setPct('w-[60%]')
            setPctText('2/3')
            // collectFormData(values)
           console.log("Second form values",formData)
        }
    })



     // Formik library
     const formik3=useFormik({
        initialValues:{
            file:'',
            password:'',
            confirmPassword:''
        },
        validate:values=>{
            const errors={};
            if(!values.file){
                errors.file='*Required'
            }else{
                
                setFormData({...formData,file:values.file})

            }
            if(!values.password){
                errors.password='*Required'
            }else{
                setFormData({...formData,password:values.password})

            }
            
            if(!values.confirmPassword){
                errors.confirmPassword='*Required'
            }else if(!values.confirmPassword.match(values.password
                )){
                    errors.confirmPassword='*Passwords do not match.'
                }else{
                    setFormData({...formData,confirmPassword:values.confirmPassword})

                }
                
            return errors;
        },
        onSubmit: async values=>{
            // setStep(2)
            setPct('w-full')
            setPctText('3/3')
            // collectFormData(values)
           console.log("Third form values",formData)
           context.setFormData(formData);
           navigate('/data')
        //    window.location.assign('/data')
           
        }
    })


 





    return (
        <>
       
        {/* <!-- Overlay element --> */}
     <div className="fixed  z-30 w-screen h-screen inset-0 bg-gray-400 bg-opacity-60"></div>

     
     <div id='mainContainer'  className=" fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40  bg-white rounded-lg shadow-2xl p-10 w-[60%]  ">
                 {/*for percentage indicator  */}
                 <div className='w-full bg-blue-400 rounded-md'>
                    
            <div className={`${pct} bg-[#7e22ce] transition ease-out duration-300 rounded-md`} id='p'>
                 {pctText}
            </div>
         </div>
         <label className='text-2xl font-bold tracking-wide text-[#7e22ce] float-left'>Progress Bar</label>
         <br/>
         {/* <ProgressBar variant="success" now={pct} /> */}
<div className='contentContainer flex w-full'>
            {/* left division */}
            <div className="h-[700px] bg-gradient-to-br from-[#7e22ce] to-[#a26bcd] w-[350px] border-white rounded-lg shadow-lg ">
                <p className="text-left text-base font-bold text-white pl-10 mt-4">Andc_Treasure</p>
                <p className="text-4xl tracking-wider text-left mt-10 p-10 text-white font-bold">Start your <br/> journey with us</p>
                <p className="text-sm mt-2 text-left px-10 text-gray-200">Discover world best community of freelancers and business owners.</p>
                <div className=" mt-44  py-5 px-5 pb-4 mx-10 bg-[#5c1e7e] text-base font-bold  text-left text-gray-200 h-32 rounded-lg shadow-lg">Simply unbelievable! I am absolutely satisfied with my business. This is absolutely wonderful.</div>
            </div>
            {/* right division */}
            <div className="bg-white h-[700px] w-[500px] ">
                <div className='mt-5 p-10 mb-0'><p className='text-left text-4xl font-bold tracking-wide text-[#7e22ce]'>Sign Up</p>
                <p className='mt-2 text-sm tracking-wide text-left font-semibold'>Have an account?<del><span className="text-[#7e22c3]">Login</span></del></p>
                
                </div>
                <div className='-mt-8 p-10 '>
                    {/* Form section  */}
                   {step==0?(
                    <form onSubmit={formik1.handleSubmit} >
    <label htmlFor='firstName' className='float-left text-[#7e22ce] font-bold' >FirstName</label><br/>
    <input type='text' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='firstName' onChange={formik1.handleChange} value={formik1.values.firstName} onBlur={formik1.handleBlur}></input>
    {formik1.errors.firstName && formik1.touched.firstName?<span className='text-red-400 float-left'>{formik1.errors.firstName}</span>:null}
    <br/> 
   <br/>

   <label htmlFor='lastName' className='float-left text-[#7e22ce] font-bold' >LastName</label><br/>
    <input type='text' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='lastName' onChange={formik1.handleChange} value={formik1.values.lastName} onBlur={formik1.handleBlur}></input>
    {formik1.errors.lastName && formik1.touched.lastName?<span className='text-red-400 float-left'>{formik1.errors.lastName}</span>:null}
    <br/> 
   <br/>
   
    <label htmlFor='email' className='float-left text-[#7e22ce] font-bold' >Email</label><br/>
    <input type='text' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='email' onBlur={formik1.handleBlur}onChange={formik1.handleChange} value={formik1.values.email} ></input>{formik1.errors.email && formik1.touched.email?<span className='text-red-400 float-left'>{formik1.errors.email}</span>:null}
    <br/><br/>
   
    <button type='submit' className=' font-bold float-left cursor-pointer bg-[#7e22c3] text-white py-2 px-5 rounded hover:opacity-50 hover:cursor-pointer' >Next</button>
    </form>
                   ):step==1?(
                    <form onSubmit={formik2.handleSubmit} >

       
                    <label htmlFor='department' className='float-left text-[#7e22ce] font-bold' >Department</label><br/>
                    <select name="department" className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' onBlur={formik2.handleBlur} onChange={formik2.handleChange} value={formik2.values.department}  >
                    <option value="">Select</option>
                    
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Zoology">Zoology</option>
                    <option value="Botany">Botany</option>
                    <option value="Electronics">Electronics</option>
                    </select>
                    {formik2.errors.department && formik2.touched.department?<span className='text-red-400 float-left'>{formik2.errors.department}</span>:null}
                    <br/><br/>
                    
                    
                    <label htmlFor='designation' className='float-left text-[#7e22ce] font-bold' >Designation</label><br/>
                    <div className='inline-block rounded border-2 border-[#7e22c3] float-left mt-1 py-1 px-5 mr-4'>
                    <input type="radio" id="Professor" name="designation" className='rounded border-2 border-[#7e22c3] float-left mt-1' onBlur={formik2.handleBlur} onChange={formik2.handleChange} value='Professor' />
                    <label htmlFor="professor" className='float-left mr-2 text-[#7e22ce] font-bold'>Professor</label>
                    </div>
                    <div className='inline-block rounded border-2 border-[#7e22c3] float-left mt-1 py-1 px-5'>
                    <input type="radio" id="As.Professor" name="designation"  className='rounded border-4 border-[#7e22c3] float-left mt-1' onBlur={formik2.handleBlur} onChange={formik2.handleChange} value='As.Professor' />
                    <label htmlFor="asProfessor" className='float-left text-[#7e22ce] font-bold'>As. Professor</label></div>
                    {formik2.errors.designation && formik2.touched.designation?<span className='text-red-400 float-left'>{formik2.errors.designation}</span>:null}
                    
                    <br/><br/>

                    <label htmlFor='gender' className='float-left text-[#7e22ce] font-bold' >Gender</label><br/>
                    <div className='inline-block rounded border-2 border-[#7e22c3] float-left mt-1 py-1  mr-4 px-10'>
                    <input type="radio" id="Male" name="gender" className='rounded border-2 border-[#7e22c3] float-left mt-1' onBlur={formik2.handleBlur} onChange={formik2.handleChange} value='Male' />
                    <label htmlFor="male" className='float-left mr-2 text-[#7e22ce] font-bold'>Male</label>
                    </div>
                    <div className='inline-block rounded border-2 border-[#7e22c3] float-left mt-1 py-1 px-10 '>
                    <input type="radio" id="female" name="gender"  className='rounded border-4 border-[#7e22c3] float-left mt-1' onBlur={formik2.handleBlur} onChange={formik2.handleChange} value='female' />
                    <label htmlFor="female" className='float-left text-[#7e22ce] font-bold'>Female</label></div>
                    {formik2.errors.gender && formik2.touched.gender?<span className='text-red-400 float-left'>{formik2.errors.gender}</span>:null}
                    
                    <br/><br/>
                    
                    <label htmlFor='age' className='float-left text-[#7e22ce] font-bold' >Age</label><br/>
      <input type='number' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='age' onBlur={formik2.handleBlur}onChange={formik2.handleChange} value={formik2.values.age} ></input>
      {formik2.errors.age && formik2.touched.age?<span className='text-red-400 float-left'>{formik2.errors.age}</span>:null}
      <br/><br/><br/>
                    <div className=' w-[70%]'>
                    <button type='submit' className=' font-bold float-left cursor-pointer bg-[#7e22c3] text-white py-2 px-5 rounded hover:opacity-50 hover:cursor-pointer' onClick={()=>{setStep(0);setPct('w-0');setPctText('0/3')}}>Back</button>
                    
                    <button type='submit' className=' font-bold float-right cursor-pointer bg-[#7e22c3] text-white py-2 px-5 rounded  hover:opacity-50 hover:cursor-pointer'>Next</button>
                    </div>
                    </form>
                    
                   ):(
                    <form onSubmit={formik3.handleSubmit}>

<label htmlFor='file' className='float-left text-[#7e22ce] font-bold' >Upload your publication</label><br/>
                    <input type='file' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='file' onBlur={formik3.handleBlur} onChange={formik3.handleChange} value={formik3.values.file} ></input>
                    {formik3.errors.file && formik3.touched.file?<span className='text-red-400 float-left'>{formik3.errors.file}</span>:null}
                    <br/><br/>

                    <label htmlFor='password' className='float-left text-[#7e22ce] font-bold' >Password</label><br/>
                    <input type='passsword' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='password' onBlur={formik3.handleBlur} onChange={formik3.handleChange} value={formik3.values.password} ></input>
                    {formik3.errors.password && formik3.touched.password?<span className='text-red-400 float-left'>{formik3.errors.password}</span>:null}
                    <br/><br/>

                    <label htmlFor='confirmPassword' className='float-left text-[#7e22ce] font-bold' >Confirm Password</label><br/>
                    <input type='password' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='confirmPassword' onBlur={formik3.handleBlur} onChange={formik3.handleChange} value={formik3.values.confirmPassword} ></input>
                    {formik3.errors.confirmPassword && formik3.touched.confirmPassword?<span className='text-red-400 float-left'>{formik3.errors.confirmPassword}</span>:null}
                    
                    <br/><br/><br/>
                    <div className='w-[70%]'>
                    <button type='submit' className=' font-bold float-left cursor-pointer bg-[#7e22c3] text-white py-2 px-5 rounded hover:opacity-50 hover:cursor-pointer' onClick={()=>{setStep(1);setPct('w-[60%]');setPctText('2/3')}}>Back</button>
                    
                    <button type='submit' className=' float-right font-bold   bg-[#7e22c3] text-white py-2 px-5 rounded  hover:opacity-50 hover:cursor-pointer'>Create Account</button>
                    </div>
                    </form>
                    

                   )}
                 
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default SignUp;