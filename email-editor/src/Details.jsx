// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
export function Details({ details, setDetails }) {
    const handleClick = () => {
        setDetails((prev) => {
            return {
                ...prev,
                title: prev.title + '.'
            }
        });
    };

    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{details.title}</h1>
            {/* eslint-disable-next-line react/prop-types */}
            <div>{details.description}</div>
            {/* eslint-disable-next-line react/prop-types */}
            <button onClick={handleClick}>{details.buttonText}</button>
        </div>
    );
}
