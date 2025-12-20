import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  year: string;
  image?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  year,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted border mb-6 group-hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <ArrowUpRight size={32} />
          </div>
        </div>
        <div className="absolute top-6 left-6 flex gap-2">
          {tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-background/80 backdrop-blur-sm border-white/10"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              {year}
            </span>
            <div className="h-[1px] w-8 bg-muted-foreground/20" />
          </div>
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
