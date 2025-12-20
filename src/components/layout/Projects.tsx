import { Section } from "./Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EcoSphere Dashboard",
    description:
      "A real-time environmental monitoring system built with distributed microservices architecture for massive scale.",
    tags: ["React", "Node.js", "Redis"],
    year: "2024",
  },
  {
    title: "Lumina Analytics",
    description:
      "High-performance data visualization platform processing millions of events per second with TypeScript and GraphQL.",
    tags: ["Next.js", "Go", "InfluxDB"],
    year: "2023",
  },
  {
    title: "Nimbus Cloud Engine",
    description:
      "Cloud-native infrastructure management tool designed for automated scaling and resilient deployments.",
    tags: ["Docker", "Kubernetes", "Express"],
    year: "2023",
  },
];

export const Projects = () => {
  return (
    <Section id="projects" className="relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            Selected <br />
            <span className="text-muted-foreground/30 outline-text">Works</span>
          </h2>
        </div>
        <div className="hidden md:block max-w-sm text-right">
          <p className="text-muted-foreground text-lg italic">
            Curated selection of projects showcasing expertise in distributed
            systems and modern web architecture.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} />
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-12 h-14 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View All Projects
        </Button>
      </div>
    </Section>
  );
};
