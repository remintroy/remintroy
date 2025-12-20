export const Footer = () => {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold tracking-tighter">
              REMIN TROY
            </span>
            <p className="text-sm text-muted-foreground">
              Building scalable distributed systems with passion.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="https://github.com/remintroy"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/remin-t-roy/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/remin_t_roy/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Remin T Roy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
