'use client';

import Navbar from './components/Navbar'
import HeroSection from './components/home/HeroSection'
import VideoSection from './components/home/VideoSection'
import IntroSection from './components/home/IntroSection'
import StatsSection from './components/home/StatsSection'
import ComparisonSection from './components/home/ComparisonSection'
import BenefitsSection from './components/home/BenefitsSection'
import CourseSection from './components/home/CourseSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <IntroSection />
        <StatsSection />
        <ComparisonSection />
        <BenefitsSection />
        <CourseSection />
      </main>
    </>
  )
}
