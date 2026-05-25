import { useEffect } from "react";

export function useSiteInteractions(): void {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const initScrollReveal = () => {
      const revealElements = document.querySelectorAll<HTMLElement>(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
      );
      if (!revealElements.length) return;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const element = entry.target as HTMLElement;
            const parent = element.parentElement;
            if (
              parent &&
              (parent.classList.contains("grid") || parent.classList.contains("stagger-children"))
            ) {
              const siblings = Array.from(parent.children);
              const index = siblings.indexOf(element);
              element.style.transitionDelay = `${index * 0.1}s`;
            }

            element.classList.add("revealed");
            observer.unobserve(element);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      revealElements.forEach(element => observer.observe(element));
      cleanups.push(() => observer.disconnect());
    };

    const initNavbar = () => {
      const navbar = document.querySelector<HTMLElement>("nav.navbar");
      if (!navbar) return;

      const onScroll = () => {
        if (window.pageYOffset > 50) {
          navbar.classList.add("scrolled");
          return;
        }
        navbar.classList.remove("scrolled");
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    };

    const closeMobileMenu = () => {
      const mobileMenu = document.querySelector<HTMLElement>(".mobile-menu");
      if (!mobileMenu) return;
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    };

    const scrollToSection = (targetId: string | null) => {
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      const offset = 64;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const initSmoothScroll = () => {
      const navButtons = document.querySelectorAll<HTMLElement>("[data-scroll-to]");
      const handlers = new Map<HTMLElement, EventListener>();

      navButtons.forEach(button => {
        const handler: EventListener = () => {
          scrollToSection(button.getAttribute("data-scroll-to"));
          closeMobileMenu();
        };

        handlers.set(button, handler);
        button.addEventListener("click", handler);
      });

      cleanups.push(() => {
        handlers.forEach((handler, button) => button.removeEventListener("click", handler));
      });
    };

    const initMobileMenu = () => {
      const toggleButton = document.querySelector<HTMLButtonElement>(".mobile-menu-btn");
      const closeButton = document.querySelector<HTMLButtonElement>(".mobile-menu-close");
      const mobileMenu = document.querySelector<HTMLElement>(".mobile-menu");
      if (!toggleButton || !mobileMenu) return;

      const onToggle = () => {
        mobileMenu.classList.toggle("open");
        document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
      };

      const onClose = () => closeMobileMenu();

      toggleButton.addEventListener("click", onToggle);
      closeButton?.addEventListener("click", onClose);

      cleanups.push(() => {
        toggleButton.removeEventListener("click", onToggle);
        closeButton?.removeEventListener("click", onClose);
      });
    };

    const initCounter = () => {
      const counterElement = document.getElementById("total-counter");
      if (!counterElement) return;

      const targetValue = 21000;
      let hasAnimated = false;
      let animationFrameId = 0;

      const animateCounter = () => {
        const start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const tick = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(start + (targetValue - start) * eased);

          counterElement.textContent = `R$ ${currentValue.toLocaleString("pt-BR")}`;

          if (progress < 1) {
            animationFrameId = window.requestAnimationFrame(tick);
            return;
          }

          counterElement.textContent = `R$ ${targetValue.toLocaleString("pt-BR")}`;
        };

        animationFrameId = window.requestAnimationFrame(tick);
      };

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting || hasAnimated) return;
            hasAnimated = true;
            animateCounter();
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(counterElement);
      cleanups.push(() => {
        observer.disconnect();
        window.cancelAnimationFrame(animationFrameId);
      });
    };

    const initWhatsAppFloat = () => {
      const whatsappImage = document.querySelector<HTMLImageElement>(".whatsapp-float img");
      if (!whatsappImage) return;

      let animationFrameId = 0;
      let time = 0;

      const animate = () => {
        time += 0.03;
        const offsetY = Math.sin(time) * 5;
        whatsappImage.style.transform = `translateY(${offsetY}px)`;
        animationFrameId = window.requestAnimationFrame(animate);
      };

      animationFrameId = window.requestAnimationFrame(animate);
      cleanups.push(() => window.cancelAnimationFrame(animationFrameId));
    };

    const initCtaButtons = () => {
      const ctaButtons = document.querySelectorAll<HTMLButtonElement>(".btn-cta");
      const handlers = new Map<HTMLButtonElement, EventListener>();

      ctaButtons.forEach(button => {
        if (button.type === "submit") return;

        const handler: EventListener = () => scrollToSection("formulario");
        handlers.set(button, handler);
        button.addEventListener("click", handler);
      });

      cleanups.push(() => {
        handlers.forEach((handler, button) => button.removeEventListener("click", handler));
      });
    };

    const initForm = () => {
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      if (!form) return;

      const onSubmit = (event: Event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
          nome: String(formData.get("nome") ?? ""),
          email: String(formData.get("email") ?? ""),
          whatsapp: String(formData.get("whatsapp") ?? ""),
          empresa: String(formData.get("empresa") ?? ""),
          setor: String(formData.get("setor") ?? ""),
          faturamento: String(formData.get("faturamento") ?? "")
        };

        const message = encodeURIComponent(
          "Olá! Vim pelo site e gostaria de mais informações.\n\n" +
            `Nome: ${data.nome}\n` +
            `Email: ${data.email}\n` +
            `WhatsApp: ${data.whatsapp}\n` +
            `Empresa: ${data.empresa}\n` +
            `Setor: ${data.setor}\n` +
            `Faturamento: ${data.faturamento}`
        );

        window.open(`https://wa.me/5575981401481?text=${message}`, "_blank");
      };

      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    };

    initScrollReveal();
    initNavbar();
    initSmoothScroll();
    initMobileMenu();
    initCounter();
    initWhatsAppFloat();
    initCtaButtons();
    initForm();

    return () => {
      cleanups.forEach(cleanup => cleanup());
      document.body.style.overflow = "";
    };
  }, []);
}
