'use client';

import Navbar from './components/Navbar'
import HeroSection from './components/home/HeroSection'
import VideoSection from './components/home/VideoSection'
import IntroSection from './components/home/IntroSection'
import StatsSection from './components/home/StatsSection'
import ComparisonSection from './components/home/ComparisonSection'
import BenefitsSection from './components/home/BenefitsSection'
import CourseSection from './components/home/CourseSection'
import FeatureSection from './components/home/FeatureSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <IntroSection />
        <ComparisonSection />
        <BenefitsSection />
        <StatsSection />
        <CourseSection />
        <FeatureSection />
      </main>
    </>
  )
}
