"use client";

import { About } from "./components/About";
import { BooksAuthored } from "./components/BooksAuthored";
import { BookingForm } from "./components/BookingForm";
import { Courses } from "./components/Courses";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PhotoGallery } from "./components/PhotoGallery";
import { Testimonials } from "./components/Testimonials";
import { TrainingPrograms } from "./components/TrainingPrograms";
import { VideoGallery } from "./components/VideoGallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <div id="home" className="scroll-mt-20">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div id="programs" className="scroll-mt-20">
        <TrainingPrograms />
      </div>
      <div id="courses" className="scroll-mt-20">
        <Courses />
      </div>
      <div id="books" className="scroll-mt-20">
        <BooksAuthored />
      </div>
      <div id="gallery" className="scroll-mt-20">
        <VideoGallery />
        <PhotoGallery />
      </div>
      <WhyChooseUs />
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>
      <div id="contact" className="scroll-mt-20">
        <BookingForm />
      </div>
      <Footer />
      <Analytics />
    </main>
  );
}
