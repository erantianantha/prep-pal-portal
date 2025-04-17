
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { LineChart, TrendingUp, TrendingDown, InfoIcon, AlertTriangle } from "lucide-react";

const Cutoffs = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  
  // Updated test types
  const testTypes = ["SCALER", "NSET"];
  
  // Generate cutoff data for each test type and month
  const generateCutoffData = () => {
    const data: Record<string, Record<string, any>> = {};
    
    testTypes.forEach(testType => {
      const baseScore = testType === "SCALER" ? 85 : 80;
      
      // Generate monthly data with slight variations
      data[testType] = {
        "January": {
          general: Math.round(baseScore + Math.random() * 3 - 1.5),
          obc: Math.round(baseScore - 5 + Math.random() * 3 - 1.5),
          sc: Math.round(baseScore - 10 + Math.random() * 3 - 1.5),
          st: Math.round(baseScore - 15 + Math.random() * 3 - 1.5),
          trend: Math.random() > 0.5 ? "up" : "down",
          change: Math.round(Math.random() * 2 * 10) / 10
        },
        "February": {
          general: Math.round(baseScore + 0.5 + Math.random() * 3 - 1.5),
          obc: Math.round(baseScore - 4.5 + Math.random() * 3 - 1.5),
          sc: Math.round(baseScore - 9.5 + Math.random() * 3 - 1.5),
          st: Math.round(baseScore - 14.5 + Math.random() * 3 - 1.5),
          trend: Math.random() > 0.5 ? "up" : "down",
          change: Math.round(Math.random() * 2 * 10) / 10
        },
        "March": {
          general: Math.round(baseScore + 1 + Math.random() * 3 - 1.5),
          obc: Math.round(baseScore - 4 + Math.random() * 3 - 1.5),
          sc: Math.round(baseScore - 9 + Math.random() * 3 - 1.5),
          st: Math.round(baseScore - 14 + Math.random() * 3 - 1.5),
          trend: Math.random() > 0.6 ? "up" : "down",
          change: Math.round(Math.random() * 3 * 10) / 10
        },
        "April": {
          general: Math.round(baseScore + 1.5 + Math.random() * 3 - 1.5),
          obc: Math.round(baseScore - 3.5 + Math.random() * 3 - 1.5),
          sc: Math.round(baseScore - 8.5 + Math.random() * 3 - 1.5),
          st: Math.round(baseScore - 13.5 + Math.random() * 3 - 1.5),
          trend: Math.random() > 0.3 ? "up" : "down",
          change: Math.round(Math.random() * 2.5 * 10) / 10
        },
        "May": {
          general: Math.round(baseScore + 2 + Math.random() * 3 - 1.5),
          obc: Math.round(baseScore - 3 + Math.random() * 3 - 1.5),
          sc: Math.round(baseScore - 8 + Math.random() * 3 - 1.5),
          st: Math.round(baseScore - 13 + Math.random() * 3 - 1.5),
          trend: "up",
          change: Math.round(Math.random() * 2 * 10) / 10
        },
        "June": {
          general: Math.round(baseScore + 3 + Math.random() * 3 - 1.5),
          obc: Math.round(baseScore - 2 + Math.random() * 3 - 1.5),
          sc: Math.round(baseScore - 7 + Math.random() * 3 - 1.5),
          st: Math.round(baseScore - 12 + Math.random() * 3 - 1.5),
          trend: "up",
          change: Math.round(Math.random() * 3.5 * 10) / 10
        }
      };
    });
    
    return data;
  };
  
  const cutoffData = generateCutoffData();
  
  // Helper function to get trend icon
  const getTrendIcon = (trend: string, change: number) => {
    if (trend === "up") {
      return (
        <div className="flex items-center text-red-500">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+{change}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-green-500">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>-{change}%</span>
        </div>
      );
    }
  };
  
  // Define the months to show
  const months = ["January", "February", "March", "April", "May", "June"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Previous Cutoffs</h1>
        <p className="text-muted-foreground mb-6">
          Analyze past cutoff trends to better understand competition levels.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center">
            <LineChart className="h-5 w-5 text-primary mr-2" />
            <h2 className="text-xl font-medium">Cutoff Analysis</h2>
          </div>
          
          <div className="w-full sm:w-48">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue={testTypes[0].toLowerCase()}>
          <TabsList className="mb-6">
            {testTypes.map((type) => (
              <TabsTrigger 
                key={type} 
                value={type.toLowerCase()}
              >
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {testTypes.map((type) => (
            <TabsContent key={type} value={type.toLowerCase()}>
              <div className="mb-4">
                <h3 className="text-lg font-medium">{type} Exams - {selectedYear} Cutoffs</h3>
                <p className="text-sm text-muted-foreground">
                  Monthly cutoff percentages by category.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {months.map((month) => (
                  <Card key={month}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{month}</CardTitle>
                        {getTrendIcon(cutoffData[type][month].trend, cutoffData[type][month].change)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">General</span>
                          <span className="font-medium">{cutoffData[type][month].general}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">OBC</span>
                          <span className="font-medium">{cutoffData[type][month].obc}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">SC</span>
                          <span className="font-medium">{cutoffData[type][month].sc}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">ST</span>
                          <span className="font-medium">{cutoffData[type][month].st}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <InfoIcon className="h-5 w-5 mr-2 text-primary" />
                    Cutoff Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      For {type.toLowerCase()} exams in {selectedYear}, the cutoff percentages show 
                      {cutoffData[type]["June"].trend === "up" ? " an upward" : " a downward"} trend 
                      over the first half of the year.
                    </p>
                    
                    <div className="bg-accent/50 p-4 rounded-md border border-accent">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Important Note</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Cutoffs typically increase in the second half of the year due to higher competition. 
                            Plan your preparation accordingly and aim for scores at least 5% above the latest cutoffs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t mt-16 py-6">
        <div className="container px-4">
          <div className="text-center">
            <h3 className="font-bold text-primary">appt.ppl</h3>
            <p className="text-sm text-muted-foreground mt-1">Helping students achieve academic excellence.</p>
            <p className="text-xs text-muted-foreground/70 mt-4">© {new Date().getFullYear()} appt.ppl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cutoffs;
