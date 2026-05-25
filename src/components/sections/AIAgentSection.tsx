import type { JSX } from "react";

export function AIAgentSection(): JSX.Element {
  return (
    <>
      <section id="agente-ia" className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute float-animation" style={{ top: "50%", left: "0", width: "500px", height: "500px", background: "hsl(var(--primary) / 0.1)", borderRadius: "9999px", filter: "blur(150px)" }}></div>
          <div className="absolute float-animation-delayed" style={{ bottom: "0", right: "25%", width: "300px", height: "300px", background: "hsl(var(--primary) / 0.05)", borderRadius: "9999px", filter: "blur(100px)" }}></div>
        </div>
      
        
        <div className="absolute" style={{ top: "0", left: "50%", transform: "translateX(-50%)", width: "250px", height: "3px", borderRadius: "9999px", background: "linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), transparent)", filter: "blur(1px)" }}></div>
      
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-6 scroll-reveal">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">DESTAQUE ESPECIAL</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Agente de <span className="text-gradient">Inteligência Artificial</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">Não é um chatbot qualquer. É um agente inteligente que transforma o atendimento comercial da sua empresa.</p>
          </div>
      
          
          <div className="glass-card gradient-border p-8 max-w-3xl mx-auto mb-12 scroll-reveal">
            <h3 className="text-xl md:text-2xl font-bold font-display mb-4 text-center">Economia real para <span className="text-primary">sua empresa</span></h3>
            <p className="text-muted-foreground text-center mb-4">Com o agente de IA, sua empresa não precisa:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary/20 shrink-0" style={{ background: "hsl(var(--primary))" }}></div>
                <span className="text-foreground/80 text-sm">Contratar novos funcionários</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "hsl(var(--primary))" }}></div>
                <span className="text-foreground/80 text-sm">Arcar com salários e encargos trabalhistas</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "hsl(var(--primary))" }}></div>
                <span className="text-foreground/80 text-sm">Investir em treinamentos constantes</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "hsl(var(--primary))" }}></div>
                <span className="text-foreground/80 text-sm">Gerenciar equipe comercial</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm text-center">Exemplo prático: Um vendedor CLT pode custar <strong className="text-foreground">R$ 5.000 a R$ 8.000 por mês</strong> com encargos. O agente de IA opera 24h por um custo muito menor, sem faltas, férias ou rotatividade.</p>
          </div>
      
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            <div className="flex items-center gap-4 glass-card p-4 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Entende e envia áudio</span>
            </div>
      
            <div className="flex items-center gap-4 glass-card p-4 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Processa imagens</span>
            </div>
      
            <div className="flex items-center gap-4 glass-card p-4 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Entende contexto completo</span>
            </div>
      
            <div className="flex items-center gap-4 glass-card p-4 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Inteligência real, não chatbot travado</span>
            </div>
      
            <div className="flex items-center gap-4 glass-card p-4 hover:bg-card/60 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Atendimento 24/7 instantâneo</span>
            </div>
          </div>
      
          
          <div className="max-w-md mx-auto mb-10 scroll-reveal">
            <div className="glass-card gradient-border overflow-hidden rounded-2xl">
              <div className="aspect-[9/16]">
                <iframe src="about:blank" title="Demo Agente de IA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" loading="lazy" data-placeholder="video-demo-ia" style={{ background: "hsl(var(--secondary))" }}>
                </iframe>
              </div>
            </div>
            <p className="text-muted-foreground text-xs text-center mt-3">Veja o agente em ação</p>
          </div>
      
          <div className="text-center scroll-reveal">
            <button className="btn-cta glow-red">QUERO MEU AGENTE DE IA</button>
          </div>
        </div>
      </section>
    </>
  );
}
