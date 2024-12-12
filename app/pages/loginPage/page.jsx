'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                setEmail("");
                setPassword("");
                console.log("evet");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                setEmail("");
                setPassword("");
                window.location.href = '/';
                console.log("Giriş başarılı");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='h-[95vh] flex justify-center items-center text-[#4B2E2E]'>
            <form className='bg-[#F4EDE4] p-10 rounded-xl shadow-lg w-[400px]'>
                <h2 className='text-3xl font-semibold text-center mb-8'>Giriş Yap</h2>
                <div className='flex flex-col mb-6'>
                    <label htmlFor="email" className='text-base font-medium mb-2'>E-mail:</label>
                    <input
                        id="email"
                        className='border border-gray-300 bg-[#F4EDE4] rounded-lg p-4 mt-2 focus:outline-none focus:ring focus:ring-[#4B2E2E] text-[#4B2E2E] text-lg'
                        type="email"
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col mb-8'>
                    <label htmlFor="password" className='text-base font-medium mb-2'>Şifre:</label>
                    <input
                        id="password"
                        className='border border-gray-300 bg-[#F4EDE4] rounded-lg p-4 mt-2 focus:outline-none focus:ring focus:ring-[#4B2E2E] text-[#4B2E2E] text-lg'
                        type="password"
                        placeholder='Şifre'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center gap-x-6'>
                    <button
                        onClick={register}
                        type="submit"
                        className='w-32 py-2 bg-[#4B2E2E] text-white rounded-lg hover:bg-[#3A2323] focus:outline-none focus:ring focus:ring-[#4B2E2E] text-lg'
                    >
                        Kayıt Ol
                    </button>
                    <button
                        onClick={login}
                        type="submit"
                        className='w-32 py-2 bg-[#4B2E2E] text-white rounded-lg hover:bg-[#3A2323] focus:outline-none focus:ring focus:ring-[#4B2E2E] text-lg'
                    >
                        Giriş Yap
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;