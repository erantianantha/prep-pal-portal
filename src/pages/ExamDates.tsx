
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react";

const ExamDates = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Helper to create exam data
  const createExamData = (monthOffset: number) => {
    const targetMonth = new Date(currentYear, currentMonth + monthOffset, 1);
    const monthName = targetMonth.toLocaleString('default', { month: 'long' });
    const year = targetMonth.getFullYear();
    
    // Generate different exams for different months
    let exams = [];
    
    if (monthOffset === 0) {
      exams = [
        {
          id: 1,
          name: "Mathematics Midterm",
          date: new Date(year, targetMonth.getMonth(), 10).toISOString(),
          time: "10:00 AM - 12:00 PM",
          venue: "Main Hall, Block A",
          type: "Written",
          important: true
        },
        {
          id: 2,
          name: "Physics Lab Practical",
          date: new Date(year, targetMonth.getMonth(), 15).toISOString(),
          time: "2:00 PM - 5:00 PM",
          venue: "Physics Lab, Block C",
          type: "Practical",
          important: false
        },
        {
          id: 3,
          name: "Computer Science Quiz",
          date: new Date(year, targetMonth.getMonth(), 22).toISOString(),
          time: "11:00 AM - 12:30 PM",
          venue: "CS Department",
          type: "MCQ",
          important: false
        }
      ];
    } else if (monthOffset === 1) {
      exams = [
        {
          id: 4,
          name: "Chemistry Final Exam",
          date: new Date(year, targetMonth.getMonth(), 5).toISOString(),
          time: "9:00 AM - 12:00 PM",
          venue: "Examination Hall 1",
          type: "Written",
          important: true
        },
        {
          id: 5,
          name: "Biology Semester Test",
          date: new Date(year, targetMonth.getMonth(), 12).toISOString(),
          time: "10:00 AM - 1:00 PM",
          venue: "Biology Block",
          type: "Mixed",
          important: true
        },
        {
          id: 6,
          name: "English Literature Essay",
          date: new Date(year, targetMonth.getMonth(), 18).toISOString(),
          time: "2:00 PM - 4:00 PM",
          venue: "Liberal Arts Building",
          type: "Essay",
          important: false
        },
        {
          id: 7,
          name: "History Assessment",
          date: new Date(year, targetMonth.getMonth(), 25).toISOString(),
          time: "11:00 AM - 1:00 PM",
          venue: "Room 204",
          type: "Written",
          important: false
        }
      ];
    } else {
      exams = [
        {
          id: 8,
          name: "Final Semester Examinations",
          date: new Date(year, targetMonth.getMonth(), 8).toISOString(),
          time: "Various Timings",
          venue: "Multiple Venues",
          type: "Written",
          important: true
        },
        {
          id: 9,
          name: "Programming Competition",
          date: new Date(year, targetMonth.getMonth(), 15).toISOString(),
          time: "9:00 AM - 5:00 PM",
          venue: "Computer Lab",
          type: "Practical",
          important: false
        },
        {
          id: 10,
          name: "Mathematics Advanced Topics",
          date: new Date(year, targetMonth.getMonth(), 20).toISOString(),
          time: "10:00 AM - 1:00 PM",
          venue: "Lecture Hall 3",
          type: "Written",
          important: true
        }
      ];
    }
    
    return {
      month: monthName,
      year: year,
      exams: exams
    };
  };
  
  const examSchedule = [
    createExamData(0), // Current month
    createExamData(1), // Next month
    createExamData(2)  // Month after next
  ];
  
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short', 
      year: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Exam Schedule</h1>
        <p className="text-gray-600 mb-6">
          Keep track of all upcoming exams and prepare accordingly.
        </p>
        
        <Tabs defaultValue={examSchedule[0].month.toLowerCase()}>
          <TabsList className="mb-6">
            {examSchedule.map((schedule) => (
              <TabsTrigger 
                key={schedule.month} 
                value={schedule.month.toLowerCase()}
                className="px-6"
              >
                {schedule.month} {schedule.year}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {examSchedule.map((schedule) => (
            <TabsContent key={schedule.month} value={schedule.month.toLowerCase()}>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  {schedule.month} {schedule.year}
                </h2>
              </div>
              
              {schedule.exams.length === 0 ? (
                <Card>
                  <CardContent className="py-10 text-center">
                    <p className="text-gray-500">No exams scheduled for this month.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {schedule.exams.map((exam) => (
                    <Card key={exam.id} className={exam.important ? "border-primary/50" : ""}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{exam.name}</CardTitle>
                          <Badge variant={exam.important ? "default" : "outline"}>
                            {exam.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{formatDate(exam.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{exam.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{exam.venue}</span>
                          </div>
                        </div>
                        
                        {exam.important && (
                          <div className="mt-4 p-3 bg-primary/10 rounded-md flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Important Exam</p>
                              <p className="text-xs text-gray-600">This exam significantly contributes to your final grade. Prepare thoroughly.</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-white p-6 mt-8 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-4">Exam Guidelines</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">1</span>
              </span>
              <span>Arrive at least 30 minutes before the scheduled exam time.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">2</span>
              </span>
              <span>Bring your ID card, exam admit card, and required stationery.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">3</span>
              </span>
              <span>Electronic devices are generally not allowed unless specified.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">4</span>
              </span>
              <span>Check the exam schedule regularly for any updates or changes.</span>
            </li>
          </ul>
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

export default ExamDates;
