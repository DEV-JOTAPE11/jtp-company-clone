import type { JSX } from "react";

export function TestimonialsSection(): JSX.Element {
  return (
    <>
      <section id="depoimentos" className="py-20 md:py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Histórias reais de <span className="text-primary">resultados</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Veja as histórias reais de quem já alcançou resultados</p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="glass-card gradient-border overflow-hidden rounded-2xl scroll-reveal">
              <div className="aspect-[9/16]">
                <iframe src="about:blank" title="Depoimento 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" loading="lazy" data-placeholder="video-depoimento-1" style={{ background: "hsl(var(--secondary))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                </iframe>
              </div>
            </div>
      
            
            <div className="glass-card gradient-border overflow-hidden rounded-2xl scroll-reveal">
              <div className="aspect-[9/16]">
                <iframe src="about:blank" title="Depoimento 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" loading="lazy" data-placeholder="video-depoimento-2" style={{ background: "hsl(var(--secondary))" }}>
                </iframe>
              </div>
            </div>
      
            
            <div className="glass-card gradient-border overflow-hidden rounded-2xl scroll-reveal">
              <div className="aspect-[9/16]">
                <iframe src="about:blank" title="Depoimento 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" loading="lazy" data-placeholder="video-depoimento-3" style={{ background: "hsl(var(--secondary))" }}>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
