import { useEffect, useState } from "react";
import type { JSX, SVGProps } from "react";
import { navItems } from "../../data/site";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const navIcons: IconComponent[] = [
  HomeIcon,
  BriefcaseIcon,
  LayoutGridIcon,
  MessageSquareIcon,
  FileTextIcon,
  HelpCircleIcon
];

export function TopNavigation(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map(item => item.targetId)];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = window.innerWidth >= 1024 ? 72 : 64;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="jtp-mobile-header" aria-label="Navegacao mobile">
        <button className="jtp-mobile-brand" onClick={() => scrollToSection("hero")} type="button">
          <img src="/images/brand/logo-jtp-80.webp" alt="JTP Services" className="jtp-brand-logo" />
          <span className="jtp-brand-text">JTP Services</span>
        </button>

        <button
          className="jtp-mobile-menu-trigger"
          aria-label="Abrir menu"
          type="button"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon className="jtp-menu-icon" />
        </button>
      </header>

      <div
        className={`jtp-mobile-overlay${mobileMenuOpen ? " open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        role="presentation"
      >
        <aside className="jtp-mobile-drawer" onClick={event => event.stopPropagation()}>
          <button
            className="jtp-mobile-close"
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            X
          </button>

          <nav className="jtp-mobile-links" aria-label="Navegacao do menu mobile">
            {navItems.map((item, index) => {
              const Icon = navIcons[index] ?? HelpCircleIcon;
              const isActive = activeSection === item.targetId;

              return (
                <button
                  key={`mobile-${item.targetId}`}
                  type="button"
                  className={`jtp-mobile-link${isActive ? " is-active" : ""}`}
                  onClick={() => scrollToSection(item.targetId)}
                >
                  <Icon className="jtp-nav-icon" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>
      </div>

      <nav className="navbar jtp-desktop-header" aria-label="Navegacao principal">
        <div className="jtp-desktop-inner">
          <button className="jtp-desktop-brand" onClick={() => scrollToSection("hero")} type="button">
            <img src="/images/brand/logo-jtp-80.webp" alt="JTP Services" className="jtp-brand-logo" />
            <span className="jtp-brand-text">JTP Services</span>
          </button>

          <div className="jtp-desktop-links">
            {navItems.map((item, index) => {
              const Icon = navIcons[index] ?? HelpCircleIcon;
              const isActive = activeSection === item.targetId;

              return (
                <button
                  key={item.targetId}
                  type="button"
                  onClick={() => scrollToSection(item.targetId)}
                  className={`jtp-desktop-link${isActive ? " is-active" : ""}`}
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="jtp-nav-icon" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

function IconBase(props: SVGProps<SVGSVGElement>): JSX.Element {
  const { children, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </IconBase>
  );
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </IconBase>
  );
}

function LayoutGridIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </IconBase>
  );
}

function MessageSquareIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9 10h6" />
      <path d="M9 7h6" />
    </IconBase>
  );
}

function FileTextIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </IconBase>
  );
}

function HelpCircleIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 2.5-3 4" />
      <path d="M12 17h.01" />
    </IconBase>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <IconBase {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </IconBase>
  );
}
