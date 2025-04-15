import { Award, Building2, Calendar, Cpu, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ExperiencesType } from "@/lib/types";

type Props = {
  experience: ExperiencesType[number];
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <Card className="relative">
      <CardHeader className="gap-2">
        <CardTitle className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <h3 className="text-xl font-bold">{experience.position}</h3>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <Calendar size={16} />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </CardTitle>
        <CardDescription className="flex items-center">
          <Building2 className="size-4 text-muted-foreground mr-2" />
          <span className="font-medium">{experience.company}</span>
          <span className="mx-2">•</span>
          <MapPin className="size-4 text-muted-foreground mr-2" />
          <span className="font-medium">{experience.location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{experience.description}</p>
      </CardContent>

      <CardFooter className="flex flex-col justify-start items-start gap-6">
        {/* Achievements */}
        <div>
          <div className="flex items-center mb-3">
            <Award className="size-5 mr-2" />
            <h4 className="font-semibold">Achievements</h4>
          </div>
          <ul className="space-y-1">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Technologies */}
        <div>
          <div className="flex items-center mb-3">
            <Cpu className="size-5 mr-2" />
            <h4 className="font-semibold">Key Technologies</h4>
          </div>
          <ul className="space-y-1">
            {experience.technologies.map((course, i) => (
              <li key={i} className="flex items-center justify-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span className="text-muted-foreground">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-neon-green to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-neon-red to-transparent"
      />
    </Card>
  );
};

export default ExperienceCard;
