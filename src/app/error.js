'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong!</h2>
            <p className="text-gray-600 mb-4">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Try Again
            </button>
        </div>
    );
}
