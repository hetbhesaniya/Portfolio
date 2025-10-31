
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

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
            value: "hbhesani@asu.edu",
            link: "mailto:your.hbhesani@asu.edu"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (623) 296-3036",
            link: "tel:+16232963036"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Tempe, AZ • USA",
            link: null
        }
    ];

    const socialLinks = [
        { icon: Github, link: "https://github.com/hetbhesaniya", label: "GitHub" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/het-bhesaniya/", label: "LinkedIn" },
    
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 asu-text-glow" style={{ color: 'var(--heading-accent)' }}>
                        Lets Connect
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-8" style={{ background: 'var(--underline-accent)' }}></div>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: '#444' }}>
                        Open to collaborations, opportunities, or just a good tech chat.
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
                            <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest" style={{ color: 'var(--heading-accent)' }}>Get in Touch</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * index }}
                                        className="flex items-center space-x-4"
                                    >
                                        <div className="p-3 rounded-md" style={{ background: 'rgba(255,198,39,0.12)' }}>
                                            <info.icon className="w-5 h-5" style={{ color: 'var(--asu-maroon)' }} />
                                        </div>
                                        <div>
                                            <p className="text-sm" style={{ color: 'var(--batman-text-muted)' }}>{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="transition-colors duration-300"
                                                    style={{ color: 'var(--batman-text)' }}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p style={{ color: 'var(--batman-text)' }}>{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest" style={{ color: 'var(--heading-accent)' }}>Social Network</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-md transition-all duration-300"
                                        style={{ background: 'var(--asu-ink)', color: 'var(--batman-text-muted)', border: '1px solid var(--asu-border)' }}
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
                        className="p-8 rounded-md border"
                        style={{ background: 'var(--asu-ink)', borderColor: 'var(--asu-border)' }}
                    >
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest" style={{ color: 'var(--heading-accent)' }}>Send Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    required
                                    className="rounded-sm"
                                    style={{ background: '#f9fafb', borderColor: '#e5e7eb', color: '#111111' }}
                                />
                            </div>
                            
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    required
                                    className="rounded-sm"
                                    style={{ background: '#f9fafb', borderColor: '#e5e7eb', color: '#111111' }}
                                />
                            </div>
                            
                            <div>
                                <Textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    required
                                    rows={6}
                                    className="resize-none rounded-sm"
                                    style={{ background: '#f9fafb', borderColor: '#e5e7eb', color: '#111111' }}
                                />
                            </div>
                            
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-sm asu-btn-primary asu-gold-glow"
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
