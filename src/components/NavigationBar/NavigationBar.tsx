// components/TopNav.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Search as SearchIcon } from "lucide-react";

interface NavItem {
    name: string;
    icon: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Dashboard", icon: "/icons/Home.png", href: "#" },
    { name: "Listings", icon: "/icons/Toolbox.png", href: "#" },
    { name: "Users", icon: "/icons/prof.png", href: "#" },
    { name: "Request", icon: "/icons/Article.png", href: "#" },
    { name: "Applications", icon: "/icons/Scroll.png", href: "#" },
];

export default function TopNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            {/* Mobile Header (only shows on small screens) */}
            <div className="md:hidden w-full bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between h-[60px]">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-gray-100"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="flex items-center">
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="p-2 rounded-md hover:bg-gray-100 mr-2"
                    >
                        <SearchIcon size={20} />
                    </button>
                    <Image
                        src="/icons/prof.png"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* Mobile Search */}
            {isSearchOpen && (
                <div className="md:hidden w-full bg-white px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
                        <SearchIcon size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search listings, users..."
                            className="bg-transparent outline-none text-sm ml-2 w-full"
                        />
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full bg-white border-b border-gray-200">
                    <ul className="flex flex-col">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className={`flex items-center text-sm leading-tight tracking-normal gap-3 px-6 py-3 ${item.name === "Dashboard"
                                        ? "bg-gray-100 text-black font-bold"
                                        : "text-black"
                                        }`}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex w-full bg-white border-b border-gray-200 px-4 lg:px-8 py-2 items-center justify-between h-[67px]">
                <div className="flex-1">
                    <ul className="flex items-center gap-4 lg:gap-8">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className={`flex items-center text-sm leading-tight tracking-normal gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-md hover:bg-gray-100 transition ${item.name === "Dashboard"
                                        ? "bg-gray-100 text-black font-bold"
                                        : "text-black"
                                        }`}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <span className="hidden lg:inline text-sm">
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center bg-gray-100 px-3 py-2 rounded-md">
                    <Image
                        src="/icons/Search.png"
                        alt="Search"
                        width={20}
                        height={20}
                    />
                    <input
                        type="text"
                        placeholder="Search listings, users here..."
                        className="bg-transparent outline-none text-sm ml-2 w-56"
                    />
                </div>
            </nav>
        </>
    );
}