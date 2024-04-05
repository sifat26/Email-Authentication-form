import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const Registar = () => {
    const [registerError,setRegisterError]=useState('')
    const [success,setSuccess] = useState('')
    const [showPassword,setShowPassword]=useState(false);
    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const accept=e.target.terms.checked;
        console.log(email,password,accept);
        setRegisterError('')
        setSuccess('')
        if(password.length<6){
            setRegisterError('Password must be at least 6 characters');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Password must contain at least one uppercase letter');
            return;
        }
        else if(!accept){
           setRegisterError('Please Accept terms and Condition'); 
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
        <div className=" ">
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input 
                required
                className="mb-4 w-full py-2 px-4" type="email" name="email" id="" placeholder="Your Email"/>
                <br />
                <div className="relative">
                    <input 
                required
                className=" w-full py-2 px-4  "
                type={showPassword?"text":"password" }
                name="password" id="" placeholder="Your Password"/>
                <span className=" absolute top-3 right-2" onClick={()=>{
                    setShowPassword(!showPassword);
                } }>{showPassword?
                    <GoEye />:<GoEyeClosed />}</span>
                </div>
                
                <br />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> Accept Our <a href=""> Terms and Condition</a></label>
                <br />
                <input 
                
                className="mb-8 w-full btn btn-secondary "
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