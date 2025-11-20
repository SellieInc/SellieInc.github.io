const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Marchell Strydom. Built with passion and attention to detail.
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">
          Crafted with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
