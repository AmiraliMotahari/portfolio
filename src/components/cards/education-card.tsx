import { EducationType } from "@/lib/types";
import { Award, BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  data: EducationType[number];
};

const EducationCard = ({ data }: Props) => {
  return (
    <Card className="p-8 relative overflow-hidden">
      <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-foreground"></div>
      <CardHeader className="gap-2">
        <CardTitle className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <h3 className="text-xl font-bold">{data.degree}</h3>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <Calendar size={16} />
            <span>
              {data.startDate} - {data.endDate}
            </span>
          </div>
        </CardTitle>
        <CardDescription className="flex items-center">
          <GraduationCap className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="font-medium">{data.institution}</span>
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="text-muted-foreground">{data.location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{data.description}</p>
      </CardContent>
      <CardFooter className="grid md:grid-cols-2 gap-6">
        {/* courses */}
        <div>
          <div className="flex items-center mb-3">
            <BookOpen className="h-5 w-5 mr-2" />
            <h4 className="font-semibold">Key Courses</h4>
          </div>
          <ul className="space-y-1">
            {data.courses.map((course, i) => (
              <li key={i} className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">{course}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* achievements */}
        <div>
          <div className="flex items-center mb-3">
            <Award className="h-5 w-5 mr-2" />
            <h4 className="font-semibold">Achievements</h4>
          </div>
          <ul className="space-y-1">
            {data.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EducationCard;
