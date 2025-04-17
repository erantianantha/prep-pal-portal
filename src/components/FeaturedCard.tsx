
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  badgeText?: string;
}

const FeaturedCard = ({ title, description, icon, linkTo, badgeText }: FeaturedCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="bg-secondary/50 pb-2">
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-primary/10 p-2">{icon}</div>
          {badgeText && <Badge className="bg-accent">{badgeText}</Badge>}
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4 pb-4">
        <Button variant="ghost" className="ml-auto group" asChild>
          <Link to={linkTo} className="flex items-center">
            Explore
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCard;
