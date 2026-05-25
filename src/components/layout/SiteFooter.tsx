import type { JSX } from "react";

export function SiteFooter(): JSX.Element {
  return (
    <>
      <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 footer-grid"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-lg font-bold font-display uppercase text-primary" style={{ letterSpacing: "0.2em" }}>Ascensão Company</h3>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/ascensaocompany_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300" style={{ color: "hsl(var(--foreground))" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/ascensaocompanymkt/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300" style={{ color: "hsl(var(--foreground))" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Ascensão Company. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
