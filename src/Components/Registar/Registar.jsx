import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";
import { useState } from "react";

const Registar = () => {
    const [registerError,setRegisterError]=useState('')
    const [success,setSuccess] = useState('')
    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        setRegisterError('')
        setSuccess('')
        if(password.length<6){
            setRegisterError('Password must be at least 6 characters');
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(
                result.user
            );
            setSuccess('User Created Successfully')
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message)
        })

    }
    return (
        <div className="border text-center">
            <div className="max-auto md:w-full">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input 
                required
                className="mb-4 w-3/4 py-2 px-4" type="email" name="email" id="" placeholder="Your Email"/>
                <br />
                <input 
                required
                className="mb-4 w-3/4 py-2 px-4"type="password" name="password" id="" placeholder="Your Password"/>
                <br />
                <input 
                
                className="mb-8 w-3/4 btn btn-secondary "
                type="submit" value="Register" />
            </form>
            {
                registerError && 
                <p className="text-red-700">{registerError}</p>
            }
            {
                success && 
                <p className="text-green-700">{success}</p>
            }
            </div>
        </div>
    );
};

export default Registar;