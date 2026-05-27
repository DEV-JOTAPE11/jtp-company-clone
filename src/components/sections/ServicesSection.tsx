import type { JSX } from "react";

export function ServicesSection(): JSX.Element {
  return (
    <>
      <section id="servicos" className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute" style={{ bottom: "0", left: "33%", width: "24rem", height: "24rem", background: "hsl(var(--primary) / 0.08)", borderRadius: "9999px", filter: "blur(120px)" }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Nossos <span className="text-primary">Serviços</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Soluções completas para escalar o seu negócio de forma estruturada.</p>
          </div>
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="glass-card gradient-border p-8 text-center hover:bg-card/60 transition-all duration-300 group scroll-reveal">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:glow-blue transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-lg font-bold font-display mb-3">Edição de Vídeos Profissionais</h3>
              <p className="text-muted-foreground text-sm">Vídeos com motion design que capturam atenção e geram conversão.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 text-center hover:bg-card/60 transition-all duration-300 group scroll-reveal">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:glow-blue transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold font-display mb-3">Gestão de Tráfego Pago</h3>
              <p className="text-muted-foreground text-sm">Google Ads e Meta Ads com estratégia focada em vendas.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 text-center hover:bg-card/60 transition-all duration-300 group scroll-reveal">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:glow-blue transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold font-display mb-3">Agentes de Inteligência Artificial</h3>
              <p className="text-muted-foreground text-sm">IA integrada ao seu processo comercial para escalar vendas.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 text-center hover:bg-card/60 transition-all duration-300 group scroll-reveal">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:glow-blue transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold font-display mb-3">Desenvolvimento de Sites</h3>
              <p className="text-muted-foreground text-sm">Sites profissionais otimizados para conversão e performance.</p>
            </div>
      
            
            <div className="glass-card gradient-border p-8 text-center hover:bg-card/60 transition-all duration-300 group scroll-reveal">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:glow-blue transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold font-display mb-3">Gestão Estratégica de Social Media</h3>
              <p className="text-muted-foreground text-sm">Conteúdo estratégico para fortalecer sua marca e gerar autoridade.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

