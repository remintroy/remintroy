import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, container = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-12 md:py-24 lg:py-32", className)}
        {...props}
      >
        {container ? (
          <div className="container px-4 md:px-6">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";
