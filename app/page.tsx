'use client';
import { useEffect } from 'react';
import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import OurOrigins from '@/components/OurOrigins';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import FinalCTA from '@/components/FinalCTA';
import Navbar from '@/components/Navbar';
export default function Home() {
useEffect(() => {
// Ensure smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
}, []);
return (
<main className="bg-[#1A0F0A] min-h-screen">
<Navbar />
{/* Hero: Scroll-Triggered Canvas Animation */}
<HeroCanvasAnimation />
{/* Our Origins Section */}
<OurOrigins />
{/* Product Showcase Section */}
<ProductShowcase />

{/* Feature Highlights Section */}
<FeatureSection />
{/* Final Call-to-Action */}
<FinalCTA />
</main>
);
}
