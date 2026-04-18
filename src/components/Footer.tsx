const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Suvesha Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
