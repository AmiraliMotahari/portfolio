import { SkillCategoryType } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  category: SkillCategoryType;
  className?: string;
};
const SkillCategoryCard = ({ category, className }: Props) => {
  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex items-center mb-4">
        {category.icon}
        <h4 className="text-lg font-semibold ml-3">{category.title}</h4>
      </div>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="text-muted-foreground flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategoryCard;
