import React, { useState } from 'react';

function Overlay() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="OverlayComponent">
            {/* Button to open panel */}
            <button onClick={toggleOverlay} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Open Panel
            </button>

            {/* Backdrop */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={toggleOverlay}
                    ></div>
                )}

            {/* Sliding Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6">
                    <h2 className="text-2xl font-bold">This is a sliding panel!</h2>
                    <button onClick={toggleOverlay} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Overlay;
