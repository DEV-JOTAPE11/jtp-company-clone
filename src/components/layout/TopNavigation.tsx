import type { JSX } from "react";
import { navItems } from "../../data/site";

export function TopNavigation(): JSX.Element {
  return (
    <>
      <nav className="navbar" aria-label="Navegação principal">
        <div className="nav-inner">
          <button className="nav-brand" data-scroll-to="hero">
            <span><span className="text-foreground">Ascensão</span> <span className="text-primary">Company</span></span>
          </button>
      
          <div className="nav-links">
            {navItems.map(item => (
              <button key={item.targetId} data-scroll-to={item.targetId}>
                {item.label}
              </button>
            ))}
          </div>
      
          <button className="mobile-menu-btn" aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
      
      
      <div className="mobile-menu">
        <button className="mobile-menu-close" aria-label="Fechar menu" style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "2rem", color: "hsl(var(--foreground))" }}>✕</button>
        {navItems.map(item => (
          <button key={`mobile-${item.targetId}`} data-scroll-to={item.targetId}>
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
