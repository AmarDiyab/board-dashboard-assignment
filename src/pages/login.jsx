import React from "react";
import styles from '../styles/login.module.css';
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

const Login = () => {

    return (
        <div className={styles.loginWrapper}>

            <section className="logo bg-black h-full col-span-2 flex justify-center items-center font-bold text-white text-6xl">
                Board.
            </section>

            <section className={styles.formWrapper}>

                <section className={styles.topSection}>
                    <h1 className="text-left font-bold text-4xl px-0 my-0">Sign In</h1>
                    <p className="text-left text-base px-0 py-2">Sign in to your account</p>
                    <div className={styles.authWrapper}>
                        <span className={styles.google}>
                            <FcGoogle className="h-[200%]" />
                            <span className="text-sm px-4 py-2" onClick={() => signIn()}>Sign in with Google</span>
                        </span>
                        <span className={styles.apple}>
                            <FaApple className="h-[200%]" />
                            <span className="text-sm px-4 py-2">Sign in with Apple</span>
                        </span>
                    </div>
                </section>

                <form className={styles.loginDetails} action=""  >
                    <p htmlFor="mail" className="text-left w-[100%] px-6 py-2">Email Address</p>
                    <input
                        type="text"
                        id="mail"
                        name="mail"
                        placeholder="johndoe@gmail.com"
                        className="border rounded-lg w-[90%] px-4 py-2 " />

                    <p htmlFor="mail" className="text-left w-[100%] px-6 py-2 pt-4">Password</p>
                    <input
                        type="password"
                        id="password"
                        name="mail"
                        placeholder="Password"
                        className="border rounded-lg w-[90%] px-4 py-2 " />

                    <a href='#' className="text-left text-blue-600 self-start px-6 py-4">Forgot Password?</a>

                    <button className="text-base font-semibold text-white bg-black w-[90%] rounded-lg py-2"
                    >Sign In</button>

                    <p className='text-base py-4'>
                        Don&apos;t have an account?{' '}
                        <a href='#' className='text-blue-600 text-left'>Register Here</a>
                    </p>

                </form>

            </section>
        </div>
    );
}

export default Login;