export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Portfolio. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}