const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Choppa Venkata Ashok. All rights reserved.</p>
        <p className="text-xs">Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
