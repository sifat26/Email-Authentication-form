import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";

const HeroRegistar = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now</h1>
      <p className="py-6">Please Give Your Email And Set a Strong Password . You can also reset your password by your Email</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default HeroRegistar;