import React from 'react';
import Link from 'next/link';

const ForgotPassword = () => {
    return (
        // <section className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <section className="bg-gray-50 min-h-screen flex justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                <div
                    className="hidden md:block md:w-1/2 bg-center bg-cover"
                    style={{ backgroundImage: "url('http://localhost:3005/api/hello')" }}
                ></div>

                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col items-center md:items-start mb-8">
                        <div className="relative">
                            <h2 className="font-bold text-3xl md:text-4xl text-gray-800 relative z-10">Forgot Password</h2>
                            <div className="absolute bottom-0 left-0 w-full h-3 bg-pink-200 opacity-50 -z-10"></div>
                        </div>
                        <div className="w-20 h-1 bg-pink-500 mt-2"></div>
                        <p className="text-sm text-gray-600 mt-4 text-center md:text-left">
                            Enter your email and we'll send you a reset link.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                className="w-full p-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <button
                            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium shadow-md"
                            type="submit"
                        >
                            Send Reset Link
                        </button>
                    </form>

                    <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">Remembered your password?</p>
                        <Link href="/login">
                            <button className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition">
                                Back to Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
