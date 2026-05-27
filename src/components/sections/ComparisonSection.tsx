import type { JSX } from "react";

export function ComparisonSection(): JSX.Element {
  return (
    <>
      <section id="comparativo" className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute float-animation-delayed" style={{ top: "33%", right: "0", width: "400px", height: "400px", background: "hsl(var(--primary) / 0.08)", borderRadius: "9999px", filter: "blur(140px)" }}></div>
          <div className="absolute float-animation" style={{ bottom: "25%", left: "0", width: "300px", height: "300px", background: "hsl(var(--primary) / 0.05)", borderRadius: "9999px", filter: "blur(120px)" }}></div>
        </div>
      
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-3">Quais profissionais você precisa <span className="text-primary">para executar este plano?</span></h2>
            <p className="text-muted-foreground text-lg">Quanto você paga por cada um deles <strong className="text-foreground">NO MERCADO</strong>?</p>
          </div>
      
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-14 stagger-children">
            
            <div className="text-center group scroll-reveal">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-secondary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300" style={{ transition: "box-shadow 0.3s" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ opacity: "0.6" }}>
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                  <path d="M5 21h14"></path>
                </svg>
              </div>
              <h4 className="font-bold font-display text-sm md:text-base mb-1">Líder de Vendas</h4>
              <p className="text-muted-foreground text-xs mb-2 leading-relaxed">Para liderar, conduzir e treinar o time de vendas</p>
              <p className="text-primary font-bold text-sm">R$ 5.000,00/mês</p>
            </div>
      
            
            <div className="text-center group scroll-reveal">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-secondary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ opacity: "0.6" }}>
                  <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path>
                  <path d="M16 8 2 22"></path>
                  <path d="M17.5 15H9"></path>
                </svg>
              </div>
              <h4 className="font-bold font-display text-sm md:text-base mb-1">Redator de Publicidade</h4>
              <p className="text-muted-foreground text-xs mb-2 leading-relaxed">Responsável por escrever textos persuasivos</p>
              <p className="text-primary font-bold text-sm">R$ 3.500,00/mês</p>
            </div>
      
            
            <div className="text-center group scroll-reveal">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-secondary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ opacity: "0.6" }}>
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h4 className="font-bold font-display text-sm md:text-base mb-1">Gestor de Tráfego</h4>
              <p className="text-muted-foreground text-xs mb-2 leading-relaxed">Para fazer seus anúncios patrocinados na internet</p>
              <p className="text-primary font-bold text-sm">R$ 2.500,00/mês</p>
            </div>
      
            
            <div className="text-center group scroll-reveal">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-secondary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ opacity: "0.6" }}>
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
                  <path d="m6.2 5.3 3.1 3.9"></path>
                  <path d="m12.4 3.4 3.1 4"></path>
                  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
                </svg>
              </div>
              <h4 className="font-bold font-display text-sm md:text-base mb-1">Editor de Vídeo</h4>
              <p className="text-muted-foreground text-xs mb-2 leading-relaxed">Para editar seus vídeos e aumentar o engajamento do público</p>
              <p className="text-primary font-bold text-sm">R$ 2.500,00/mês</p>
            </div>
      
            
            <div className="text-center group scroll-reveal">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-secondary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ opacity: "0.6" }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h4 className="font-bold font-display text-sm md:text-base mb-1">Gestor de Projetos</h4>
              <p className="text-muted-foreground text-xs mb-2 leading-relaxed">O responsável por tomar conta de todo o projeto e liderar todo esse time</p>
              <p className="text-primary font-bold text-sm">R$ 7.500,00/mês</p>
            </div>
          </div>
      
          
          <div className="max-w-lg mx-auto scroll-reveal-scale">
            <div className="glass-card gradient-border p-10 text-center">
              <p className="text-lg md:text-xl font-display font-semibold mb-2 text-muted-foreground">Total se você contratar tudo separado:</p>
              <p className="text-4xl md:text-5xl font-bold font-display text-primary mb-1">
                <span id="total-counter">R$ 0</span><span className="text-lg text-muted-foreground">/mês</span>
              </p>
              <p className="text-muted-foreground text-sm mb-6">Com a Ascensão, você tem uma assessoria completa que atua em todas essas frentes por um investimento muito menor.</p>
              <button className="btn-cta glow-blue w-full">QUERO MAIS INFORMAÇÕES</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

