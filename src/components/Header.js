import React from 'react';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-red-600 to-transparent p-6 rounded-lg mb-4">
            <div className="flex items-center">
                <img
                    src="../../public/R.jpeg"
                    alt="Michael Jackson"
                    className="w-24 h-24 object-cover rounded-lg shadow-lg"
                />
                <div className="ml-6">
                    <h2 className="text-3xl font-bold">Michael Jackson</h2>
                    <p className="text-gray-400">27,852,501 monthly listeners</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
