import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";

const Registar = () => {
    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(
                result.user
            );
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div className="border text-center">
            <div className="max-auto md:w-full">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="mb-4 w-3/4 py-2 px-4" type="email" name="email" id="" placeholder="Your Email"/>
                <br />
                <input 
                className="mb-4 w-3/4 py-2 px-4"type="password" name="password" id="" placeholder="Your Password"/>
                <br />
                <input 
                className="mb-8 w-3/4 btn btn-secondary "
                type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Registar;