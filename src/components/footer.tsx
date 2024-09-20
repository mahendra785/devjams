'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const iconVariants = {
        whileHover: { rotate: 360, scale: 1.2 },
        whileTap: { rotate: -360, scale: 0.8 },
        whileFocus: { rotate: 360, scale: 1.2 },
    };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <motion.div className="max-w-screen-xl mx-auto px-6 flex justify-end items-center space-x-8">
                <motion.div variants={iconVariants} whileHover="whileHover" whileTap="whileTap">
                    <FaFacebook size={30} />
                </motion.div>
                <motion.div variants={iconVariants} whileHover="whileHover" whileTap="whileTap">
                    <FaInstagram size={30} />
                </motion.div>
                <motion.div variants={iconVariants} whileHover="whileHover" whileTap="whileTap">
                    <FaPhone size={30} />
                </motion.div>
                <motion.div
                   variants={iconVariants} whileHover="whileHover" whileTap="whileTap"
                >
                    <FaReact size={30} />
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;