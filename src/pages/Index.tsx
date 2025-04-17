
import { Book, Clock, LineChart, Download, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCard from "@/components/FeaturedCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        {/* Hero Section */}
        <Hero 
          title="Student Prep Kit Portal"
          subtitle="Excel in Your Exams"
          ctaText="Explore Materials"
          ctaLink="/study-materials"
        />

        {/* Stats Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Key Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard 
              title="Study Materials" 
              value="120+"
              subtitle="Including PDFs, videos, and notes" 
              icon={<Book className="h-4 w-4 text-primary" />} 
            />
            <StatsCard 
              title="Upcoming Exams" 
              value="8"
              subtitle="Scheduled in next 30 days" 
              icon={<Clock className="h-4 w-4 text-primary" />} 
            />
            <StatsCard 
              title="Success Rate" 
              value="92%"
              subtitle="Students using our materials" 
              icon={<Trophy className="h-4 w-4 text-primary" />}
              trend={{ value: 5, isPositive: true }} 
            />
            <StatsCard 
              title="Downloads" 
              value="2.4k"
              subtitle="Materials downloaded this month" 
              icon={<Download className="h-4 w-4 text-primary" />}
              trend={{ value: 12, isPositive: true }} 
            />
          </div>
        </div>

        {/* Featured Sections */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Prepare Effectively</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturedCard 
              title="Study Materials" 
              description="Access comprehensive study materials including notes, textbooks, videos, and practice tests."
              icon={<Book className="h-5 w-5 text-primary" />}
              linkTo="/study-materials"
              badgeText="120+ Resources"
            />
            <FeaturedCard 
              title="Exam Schedule" 
              description="Keep track of upcoming exams, their dates, timings, and important instructions."
              icon={<Clock className="h-5 w-5 text-primary" />}
              linkTo="/exam-dates"
              badgeText="Updated Weekly"
            />
            <FeaturedCard 
              title="Previous Cutoffs" 
              description="Analyze previous months' cutoffs to understand the competition and set realistic goals."
              icon={<LineChart className="h-5 w-5 text-primary" />}
              linkTo="/cutoffs"
              badgeText="Trending"
            />
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Preparation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">01</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Create a Study Schedule</h3>
                <p className="mt-1 text-gray-600">Divide your time efficiently among all subjects based on their difficulty levels.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">02</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Practice Previous Papers</h3>
                <p className="mt-1 text-gray-600">Solve at least 3 years of previous question papers to understand the pattern.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">03</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Review Regularly</h3>
                <p className="mt-1 text-gray-600">Allocate time for revision to reinforce concepts and improve retention.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">04</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Stay Updated</h3>
                <p className="mt-1 text-gray-600">Check our portal regularly for the latest resources and announcements.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-6">
        <div className="container px-4">
          <div className="text-center">
            <h3 className="font-bold text-primary">PrepPal</h3>
            <p className="text-sm text-gray-500 mt-1">Helping students achieve academic excellence.</p>
            <p className="text-xs text-gray-400 mt-4">© {new Date().getFullYear()} PrepPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
