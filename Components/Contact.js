
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        
        // You can integrate with a real form service here
        alert('Message sent successfully!');
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "your.email@example.com",
            link: "mailto:your.email@example.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Your City, Country",
            link: null
        }
    ];

    const socialLinks = [
        { icon: Github, link: "https://github.com", label: "GitHub" },
        { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
        { icon: Twitter, link: "https://twitter.com", label: "Twitter" }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 batman-text-glow">
                        Open Comms
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Need an operative for a mission? Drop your coordinates here.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Intel Drop</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * index }}
                                        className="flex items-center space-x-4"
                                    >
                                        <div className="p-3 bg-yellow-500/10 rounded-md">
                                            <info.icon className="w-5 h-5 text-yellow-500" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-white hover:text-yellow-500 transition-colors duration-300"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Social Network</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-gray-800 rounded-md text-gray-400 hover:text-yellow-500 hover:bg-gray-700 transition-all duration-300"
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gray-800/50 p-8 rounded-md border border-gray-700 cut-corner"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Secure Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Your Callsign"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    required
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 rounded-sm"
                                />
                            </div>
                            
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Your Frequency (Email)"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    required
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 rounded-sm"
                                />
                            </div>
                            
                            <div>
                                <Textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    required
                                    rows={6}
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 resize-none rounded-sm"
                                />
                            </div>
                            
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-sm"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <Send size={16} />
                                        <span>Transmit Message</span>
                                    </div>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
