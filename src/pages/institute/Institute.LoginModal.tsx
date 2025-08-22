// components/LoginModal.tsx
// import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const InstituteLoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                ref={modalRef}
                className="relative bg-white rounded-lg p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Rest of your modal content */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Welcome back</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                        <input
                            type="email"
                            placeholder="name@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password*</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                        Login
                    </button>
                </div>

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* <div className="space-y-4 mb-6">
                    <button className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md hover:bg-gray-50 font-medium">
                        <FaGoogle className="mr-3 text-red-500" />
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md hover:bg-gray-50 font-medium">
                        <FaFacebook className="mr-3 text-blue-600" />
                        Continue with Facebook
                    </button>
                    <button className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md hover:bg-gray-50 font-medium">
                        <FaApple className="mr-3 text-gray-800" />
                        Continue with Apple
                    </button>
                </div> */}

                <div className="text-center space-y-4 text-sm">
                    <p>
                        New to Mzatinova? <a href="#" className="text-blue-600 hover:underline font-medium">Sign up</a>
                    </p>
                    <p>
                        <a href="#" className="text-blue-600 hover:underline font-medium">Log in with your organization</a>
                    </p>
                    <p>
                        <a href="#" className="text-blue-600 hover:underline">Having trouble logging in?</a> <a href="#" className="text-blue-600 hover:underline">Learner help center</a>
                    </p>
                </div>

                <p className="text-xs text-gray-500 text-center mt-8">
                    This site is protected by reCAPTCHA Enterprise and the
                    <br />
                    Google Privacy Policy and Terms of Service apply.
                </p>
            </div>
        </div>
    );
};