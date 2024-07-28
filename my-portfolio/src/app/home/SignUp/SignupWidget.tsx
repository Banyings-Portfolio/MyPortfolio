'use client';
import React, { useState, FormEvent } from 'react';
import Image from "next/image"

const SignupWidget = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
        }
    };

    return (
        <div className="Notification w-full max-w-sm mx-auto lg:p-6 rounded-lg ">
            <div className="Image flex items-center mb-4 pl-4 pr-4">
                <Image
                    src="/Mail.png"
                    width={20}
                    height={20}
                    alt="Email Logo"
                    className="dark:invert transition-all duration-300 mr-3"
                />
                <h1 className="text-xl lg:text-2xl font-bold">Stay up to date</h1>
            </div>
            <div className="Publish mb-4 pl-4">
                <p className="text-sm lg:text-base ">Get notified when I publish something new, and unsubscribe at any time.</p>
            </div>
            {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="Email-input flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 pl-4">
                    <input
                        className="email w-full sm:w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 text-black dark:text-black"
                        placeholder="johdo@mail.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="button w-full sm:w-1/3 bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                    >
                        Join me
                    </button>
                </form>
            ) : (
                <div className="Thank-you-message text-center text-green-600 font-bold">
                    Thank you for subscribing!
                </div>
            )}
        </div>
    )
}
export default SignupWidget;