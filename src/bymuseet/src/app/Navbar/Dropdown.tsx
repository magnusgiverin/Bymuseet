'use client';
import { useEffect, useRef, useState } from 'react';
import Icons from '../Utils/Icons';
import Shortcuts from '../Utils/Shortcuts';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };
        // Attach the event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Empty dependency array to run this effect only once


    return (
        <div className="ml-10 relative group" ref={dropdownRef}>
            <button onClick={toggleDropdown}>
                {isOpen ?
                    <Icons name="Cross" /> : <Icons name="Dropdown" />
                }
            </button>
            {/* Dropdown content */}
            <div className={`absolute right-0 mt-5 w-48 rounded-2xl shadow-black shadow-2xl backdrop-blur-2xl ${isOpen ? 'block' : 'hidden'}`}>
                {Shortcuts.map((shortcut, index) => (
                    <a
                        key={index}
                        href={shortcut.url}
                        className={`block px-4 py-2 text-sm text-white flex flex-row gap-4 hover:bg-blue-500 hover:text-white ${index === 0 ? 'rounded-t-2xl' : ''} ${index === Shortcuts.length - 1  ? 'rounded-b-2xl' : ''}`}
                    >   
                        {shortcut.icon}
                        <h3>{shortcut.header}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
