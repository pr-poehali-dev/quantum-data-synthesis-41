import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Спасибо за внимание!</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Презентацию подготовил студент группы 251-Т62
            <br />
            <span className="text-foreground font-semibold">Калинин Алексей Анатольевич</span>
          </p>
        </div>
      </div>
    </section>
  )
}