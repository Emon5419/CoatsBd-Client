import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import logo from '../../../images/g-logo.png';


const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const navigate = useNavigate();

   let errorElement;

   if (loading) {
      return <Loading></Loading>
   }

   if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
   }

   if (user) {
      navigate('/home');
   }

   return (
      <div>
         <div className='d-flex align-items-center'>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            {errorElement}
         </div>
         <div className=''>

            <button
               onClick={() => signInWithGoogle()}
               className='btn btn-outline-primary w-100 d-block mx-auto my-2'>
               <img style={{ width: '30px' }} src='' alt="" />
               <span className='px-2'><img src={logo} alt="" /> Google Sign In</span>
            </button>
         </div>

      </div>

   );
};

export default SocialLogin;