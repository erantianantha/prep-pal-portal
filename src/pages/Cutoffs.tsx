
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
  
  // Single test type
  const testTypes = ["ScalerNSET"];
  
  // Simplified cutoff data without categories
  const nsetCutoffData = {
    "January": {
      score: "36-38%",
      trend: "up",
      change: 1.5
    },
    "February": {
      score: "35%",
      trend: "down",
      change: 2.1
    },
    "March": {
      score: "38-40%",
      trend: "up",
      change: 3.2
    },
    "April": {
      score: "37%",
      trend: "down",
      change: 1.8
    },
    "May": {
      score: "39%",
      trend: "up",
      change: 2.4
    },
    "June": {
      score: "41%", 
      trend: "up",
      change: 2.0
    }
  };
  
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
          Analyze past NSET cutoff trends to better understand competition levels.
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
                  Monthly cutoff percentages for {type}.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {months.map((month) => (
                  <Card key={month}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{month}</CardTitle>
                        {getTrendIcon(nsetCutoffData[month as keyof typeof nsetCutoffData].trend, 
                                    nsetCutoffData[month as keyof typeof nsetCutoffData].change)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">NSET Cutoff:</span>
                        <span className="text-xl font-bold">{nsetCutoffData[month as keyof typeof nsetCutoffData].score}</span>
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
                      For {type} exams in {selectedYear}, the cutoff percentages show 
                      a mixed trend with slight variations between months. January intake starts at 36-38%, 
                      drops to 35% in February, and increases to 38-40% in March.
                    </p>
                    
                    <div className="bg-accent/50 p-4 rounded-md border border-accent">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Important Note</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Cutoffs typically fluctuate based on the difficulty of the exam and the number of applicants.
                            Plan your preparation to score at least 5% above the latest cutoff for a safe margin.
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
