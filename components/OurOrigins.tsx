'use client';
import { motion } from 'framer-motion';

export default function OurOrigins() {
    return (
        <section id="our-origins" className="py-32 px-4 md:px-8 relative overflow-hidden bg-[#1A0F0A]">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1810]/50 to-[#1A0F0A] opacity-80" />
            
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                
                {/* Left Side: Art / Floating Elements */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[200px] overflow-hidden border border-[#5A4034]/30 shadow-2xl bg-[#2D1810]/40 backdrop-blur-sm">
                        
                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                            {/* Rotating border accent */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="w-[110%] h-[110%] absolute border-[1px] border-dashed border-[#E9C9A8]/20 rounded-[200px]"
                            />
                            
                            {/* Floating Bean Centerpiece */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img 
                                    src="/coffee/bean.png"
                                    className="w-48 h-48 object-contain opacity-80"
                                    alt="Roasted Coffee Bean"
                                />
                            </motion.div>
                            
                            {/* Ambient internal glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-transparent to-[#1A0F0A] opacity-50 pointer-events-none" />
                        </div>
                    </div>
                    
                    {/* Small floating accents */}
                    <motion.div 
                        animate={{ y: [0, 20, 0], rotate: [0, 45, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-10 right-10 md:-right-10 w-16 h-16 opacity-30"
                    >
                        <img src="/coffee/bean.png" className="w-full h-full object-contain blur-[2px]" alt="" />
                    </motion.div>
                    <motion.div 
                        animate={{ y: [0, -30, 0], rotate: [0, -45, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-20 left-0 md:-left-10 w-24 h-24 opacity-20"
                    >
                        <img src="/coffee/bean.png" className="w-full h-full object-contain blur-[4px]" alt="" />
                    </motion.div>
                </motion.div>

                {/* Right Side: Typography Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-[#E9C9A8]"></div>
                        <p className="text-[#E9C9A8] font-['Inter'] tracking-[0.2em] font-medium text-sm md:text-base uppercase">
                            The Journey
                        </p>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-[#E8D8C7] mb-8 leading-tight">
                        Our Origins
                    </h2>
                    
                    <div className="space-y-6">
                        <p className="text-[#C9B8A0] font-['Inter'] text-lg md:text-xl leading-relaxed font-light">
                            <span className="text-4xl text-[#E9C9A8] font-['Playfair_Display'] mr-1 float-left leading-none mt-1">E</span>very great cup of coffee begins long before it reaches your hands. Our story started with a simple idea that coffee should be more than a daily routine; it should be an experience.
                        </p>
                        
                        <p className="text-[#C9B8A0] font-['Inter'] text-lg md:text-xl leading-relaxed font-light">
                            Inspired by the craft of small-batch roasting and the cultures that celebrate coffee around the world, we set out to create a place where quality, artistry, and community come together. From carefully sourcing our beans to perfecting every roast, our mission has always been to honor the journey of coffee from farm to cup.
                        </p>

                        <p className="text-[#C9B8A0] font-['Inter'] text-lg md:text-xl leading-relaxed font-light">
                            What began as a passion for exceptional coffee has grown into a space where every sip tells a story, and every visit feels like a moment worth savoring.
                        </p>
                    </div>

                    <motion.div 
                        className="mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <img 
                            src="/coffee/logo.png" 
                            alt="Artisan Signature" 
                            className="w-20 h-20 object-contain opacity-40 mix-blend-screen"
                        />
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Ambient glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4F9C8F]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4A574]/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}
