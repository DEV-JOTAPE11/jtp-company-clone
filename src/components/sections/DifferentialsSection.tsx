import type { JSX } from "react";

export function DifferentialsSection(): JSX.Element {
  return (
    <>
      <section id="diferenciais" className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute" style={{ top: "0", right: "0", width: "18rem", height: "18rem", background: "hsl(var(--primary) / 0.1)", borderRadius: "9999px", filter: "blur(100px)" }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Por que somos <span className="text-primary">diferentes</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Não só geramos demanda, atuamos dentro do processo comercial da sua empresa.</p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass-card gradient-border p-8 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Atuação completa na jornada de compra</h3>
              <p className="text-muted-foreground">Da atração até a conversão e retenção, estamos em cada etapa do funil.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Foco em resultado real</h3>
              <p className="text-muted-foreground">Não trabalhamos com métricas de vaidade. Nosso foco é crescimento tangível.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Estratégia profunda</h3>
              <p className="text-muted-foreground">Muito mais do que subir anúncio. Planejamento estratégico completo.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Melhoria do atendimento comercial</h3>
              <p className="text-muted-foreground">Otimizamos o processo comercial para que nenhuma oportunidade seja perdida.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
