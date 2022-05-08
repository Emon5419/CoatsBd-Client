import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
// import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';

const Register = () => {
   const [
      createUserWithEmailAndPassword,
      user,
      loading
   ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

   const [updateProfile, updating] = useUpdateProfile(auth);

   const navigate = useNavigate();

   const navigateLogin = () => {
      Navigate('/login');
   }

   if (loading || updating) {
      return <Loading></Loading>
   }

   if (user) {
      console.log('user', user);
   }

   const handleRegister = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      // const agree = event.target.terms.checked;

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log('Updated profile');
      navigate('/home');
   }

   return (
      <div className='register-form'>

         <h2 style={{ textAlign: 'center' }}>Create an Admin Account</h2>

         <form onSubmit={handleRegister}>

            <input type="text" name="name" id="" placeholder='Your Name' />

            <input type="email" name="email" id="" placeholder='Email Address' required />

            <input type="password" name="password" id="" placeholder='Password' required />

            <input className='w-100 mx-auto btn btn-primary mt-2' type="submit" value="Register" />

         </form>

         <p>
            Already have an account?
            <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login </Link>
         </p>

         {/* <SocialLogin></SocialLogin> */}

      </div>
   );
};

export default Register;