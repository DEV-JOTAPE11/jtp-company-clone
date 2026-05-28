import type { JSX } from "react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export function HeroSection(): JSX.Element {
  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div className="hidden md:block relative min-h-screen">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/founders-Butfy_T2.svg"
              alt="Natanael Almeida e Daniel Marques - Fundadores da Ascensão Company"
              className="absolute right-0 bottom-0 h-auto object-contain brightness-125 contrast-110 hero-image-mask"
              style={{ width: "75%" }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--background)), transparent, transparent)",
              }}
            ></div>

            <div
              className="absolute pulse-glow"
              style={{
                top: "50%",
                right: "25%",
                transform: "translateY(-50%)",
                width: "500px",
                height: "500px",
                background: "hsl(var(--primary) / 0.3)",
                borderRadius: "9999px",
                filter: "blur(130px)",
              }}
            ></div>

            <div
              className="absolute z-20 text-center"
              style={{
                bottom: "4rem",
                left: "58%",
                transform: "translateX(-50%)",
                fontSize: "0.875rem",
              }}
            >
              <p className="font-display font-bold text-foreground">
                João Pedro
              </p>
              <p className="text-primary text-xs tracking-widest uppercase">
                Fundador
              </p>
            </div>
          </div>

          <div className="absolute inset-0" style={{ zIndex: "1" }}>
            <div
              className="absolute float-animation"
              style={{
                top: "25%",
                left: "10%",
                width: "400px",
                height: "400px",
                background: "hsl(var(--primary) / 0.1)",
                borderRadius: "9999px",
                filter: "blur(160px)",
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full min-h-screen flex items-center px-12 py-20">
            <div style={{ maxWidth: "42rem" }}>
              <div className="mb-6 flex justify-center">
                <img
                  src="/assets/ascensao-company-logo.svg"
                  alt="Ascensão Company"
                  className="h-auto object-contain mx-auto"
                  style={{ width: "min(520px, 80vw)" }}
                />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 scroll-reveal">
                Sua empresa não precisa só de um {" "}
                <span className="hero-text-gradient">site.</span>
                <br />
                Precisa vender mais e gerar  {" "}
                <span className="hero-text-gradient">resultados.</span>
              </h1>

              <div className="mb-5 scroll-reveal">
                <p className="text-2xl font-display font-semibold text-foreground/90">
                  Site + Divulgação + Estratégia = {" "}
                  <span className="hero-text-gradient">Clientes</span>
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg mb-8 scroll-reveal">
                Criamos uma estrutura digital completa para atrair as pessoas certas, apresentar sua marca com autoridade e transformar visitantes em vendas.
              </p>

              <div className="mb-6 scroll-reveal">
                <button className="btn-cta glow-blue">
                  <WhatsAppIcon className="h-5 w-5" />
                  SOLICITAR DIAGNÓSTICO GRATUITO
                </button>
              </div>

              <div className="scroll-reveal">
                <button
                  type="button"
                  data-scroll-to="formulario"
                  aria-label="Rolar para o formulário"
                  className="inline-flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-muted-foreground animate-bounce"
                  >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col min-h-screen">
          <div className="relative w-full pt-20">
            <div
              className="absolute pulse-glow"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "300px",
                height: "300px",
                background: "hsl(var(--primary) / 0.3)",
                borderRadius: "9999px",
                filter: "blur(90px)",
              }}
            ></div>
            <img
              src="/assets/founders-Butfy_T2.svg"
              alt="Natanael Almeida e Daniel Marques - Fundadores da Ascensão Company"
              className="relative w-full h-auto object-contain brightness-125 contrast-110 hero-image-mask-mobile"
            />
            <div
              className="absolute flex justify-center text-xs z-10"
              style={{ bottom: "1rem", left: "0", right: "0" }}
            >
              <div className="text-center">
                <p className="font-display font-bold text-foreground">
                  João Pedro
                </p>
                <p
                  className="text-primary uppercase tracking-widest"
                  style={{ fontSize: "10px" }}
                >
                  Fundador
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 px-6 pb-12 -mt-8 flex-1 flex flex-col justify-center">
            <div className="absolute inset-0" style={{ zIndex: "1" }}>
              <div
                className="absolute float-animation"
                style={{
                  top: "0",
                  left: "10%",
                  width: "200px",
                  height: "200px",
                  background: "hsl(var(--primary) / 0.1)",
                  borderRadius: "9999px",
                  filter: "blur(100px)",
                }}
              ></div>
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <img
                  src="/assets/ascensao-company-logo.svg"
                  alt="Ascensão Company"
                  className="h-auto object-contain mx-auto"
                  style={{ width: "min(320px, 82vw)" }}
                />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-4 scroll-reveal">
               Sua empresa não precisa só de um 
                <span className="hero-text-gradient"> site.</span>
                <br />
                Precisa vender mais e gerar {" "}
                <span className="hero-text-gradient">resultados.</span>
              </h1>
              <div className="mb-4 scroll-reveal">
                <p className="hero-mobile-equation font-display font-semibold text-foreground/90">
                  Site + Divulgação + Estratégia = {" "}
                  <span className="hero-text-gradient">Clientes</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground max-w-lg mb-6 scroll-reveal">
                Criamos uma estrutura digital completa para atrair as pessoas certas, apresentar sua marca com autoridade e transformar visitantes em vendas.
              </p>
              <div className="mb-4 scroll-reveal">
                <button className="btn-cta glow-blue hero-mobile-cta">
                  <WhatsAppIcon className="h-5 w-5" />
                  Solicitar diagnóstico gratuito
                </button>
              </div>
              <div className="scroll-reveal">
                <button
                  type="button"
                  data-scroll-to="formulario"
                  aria-label="Rolar para o formulário"
                  className="inline-flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-muted-foreground animate-bounce"
                  >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
