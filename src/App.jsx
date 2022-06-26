// import React, { useState } from "react";

// const App = () => {
//     const[Fullname,setFullName] = useState({
//         fname : "",
//         lname : "",
//         email : "",
//         phone : ""
//     });
//     const Submit = (event) => {
//         event.preventDefault();
//         alert("Submitted");
//     }
//     const inputEvent = (event) => {
//         const {value,name} = event.target;
        
//         setFullName((prevVal) => {
//           if(name === 'fname'){
//             return {
//             fname : value,
//             lname : prevVal.lname,
//             email : prevVal.email,
//             phone : prevVal.phone
//             };
//         }else if(name === 'lname'){
//             return {
//             fname : prevVal.fname,
//             lname : value,
//             email : prevVal.email,
//             phone : prevVal.phone
//             };
//         }else if(name === 'email'){
//             return {
//             fname : prevVal.fname,
//             lname : prevVal.lname,
//             email : value,
//             phone : prevVal.phone
//             };
//         }else if(name === 'phone'){
//             return {
//             fname : prevVal.fname,
//             lname : prevVal.lname,
//             email : prevVal.email,
//             phone : value
//             };
//         }
//         })
//     }
//     return (
//         <>
//         <div>
//         <form onSubmit={Submit}>
//         <h1>Hello {Fullname.fname} {Fullname.lname}</h1>
//         <p>{Fullname.email}</p>
//         <p>{Fullname.phone}</p>
//         <input type='text' placeholder='Enter Your Name' name="fname" value={Fullname.fname} onChange={inputEvent}/><br />
//         <input type='text' placeholder='Enter Your Last Name' name="lname" value={Fullname.lname} onChange={inputEvent}/><br />
//         <input type='email' placeholder='Enter Your Email' name="email" value={Fullname.email} onChange={inputEvent}/><br />
//         <input type='number' placeholder='Enter Your Phone Number' name="phone" value={Fullname.phone} onChange={inputEvent}/>
//         <button className="b1" type="submit">Click Me</button>
//         </form>
//         </div>
//         </>
//     );
// }
// export default App;

import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const App = () => {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const [data,setData] = useState();
    const onSubmit=(data)=>{
        setData(data);
        console.log(data)
    }
    return (
        <>
        <div>
        {data?(<h1>Hello {data.fname} {data.lname}</h1>):(<h1>Hello</h1>)}
        {data?(<h6>{data.email} {data.phone}</h6>):(<h6> </h6>)}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder="Enter Your Name" name="fname" {...register('fname', { required: true })}/><br />
            {errors.fname && <span>This field is required</span>}
            <input type='text' placeholder="Enter Your Last Name" name="lname" {...register('lname', { required: true })}/><br />
            {errors.lname && <span>This field is required</span>}
            <input type='email' placeholder="Enter Your Email" name="email" {...register('email')}/><br />
            <input type='number' placeholder="Enter Your Phone Number" name="phone" {...register('phone', {required : true, minLength : 10})}/>
            {errors.phone && errors.phone.type === "minLength" && <span>Number Should Be Atleast 10 Digit</span>}
            <button className="b1" type="submit">Click Me</button>
        </form>
        </div>
        </>
    )
}
export default App;