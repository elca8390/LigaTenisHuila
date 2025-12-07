import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { JoinSection } from './components/JoinSection';
import { StatsSection } from './components/StatsSection';
import { ClubsSection } from './components/ClubsSection';
import { Sponsors } from './components/Sponsors';
import { ContactSection } from './components/ContactSection';
import { DocumentsSection } from './components/DocumentsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <JoinSection />
        <StatsSection />
        <ClubsSection />
        <ContactSection />
        <DocumentsSection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default App;
