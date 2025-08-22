// components/SignUpModal.tsx
// import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const InstituteSignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = ''; // Re-enable body scrolling
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-4">
                {/* Backdrop */}
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

                {/* Scrollable modal container */}
                <div
                    ref={modalRef}
                    className="relative bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Sign up</h2>
                        <p className="text-gray-600 mt-1">Learn on your own time</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Enter your full name</label>
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                            <input
                                type="password"
                                placeholder="Between 8 and 72 characters"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                            Create password
                        </button>
                    </div>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* <div className="space-y-3">
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaGoogle className="mr-2 text-red-500" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaFacebook className="mr-2 text-blue-600" />
              Continue with Facebook
            </button>
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaApple className="mr-2 text-gray-800" />
              Continue with Apple
            </button>
          </div> */}

                    <p className="text-center text-sm mt-6">
                        Already on Mzatinova? <a className="text-blue-600 hover:underline cursor-pointer">Log in</a>
                    </p>

                    <p className="text-center text-sm mt-2">
                        <a className="text-blue-600 hover:underline cursor-pointer">Sign up with your organization</a>
                    </p>

                    <div className="mt-6 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I accept Mzatinova's Terms of Use and Privacy Notice.
                            </label>
                        </div>
                        <div className="flex justify-center space-x-4 text-sm">
                            <a className="text-blue-600 hover:underline cursor-pointer">Having trouble logging in?</a>
                            <a className="text-blue-600 hover:underline cursor-pointer">Learner help center</a>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-6">
                        This site is protected by reCAPTCHA Enterprise and the
                        <br />
                        Google Privacy Policy and Terms of Service apply
                    </p>
                </div>
            </div>
        </div>
    );
};