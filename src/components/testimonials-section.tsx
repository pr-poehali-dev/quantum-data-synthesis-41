import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const facts = [
  {
    name: "Рынок электромобилей",
    role: "Мировая статистика, 2024",
    initial: "📊",
    content:
      "В 2023 году в мире продано свыше 14 млн электромобилей — рост 35% к предыдущему году. Лидеры: Китай (60% продаж), Европа (20%), США (10%).",
  },
  {
    name: "Запас хода",
    role: "Современные BEV, 2024",
    initial: "🔋",
    content:
      "Tesla Model S обеспечивает до 652 км на одном заряде. Средний серийный электромобиль 2024 года — 400–500 км. Ещё в 2015-м норма была 150–200 км.",
  },
  {
    name: "Стоимость владения",
    role: "Сравнительный анализ",
    initial: "💡",
    content:
      "Эксплуатационные расходы электромобиля на 30–40% ниже бензинового: дешевле «топливо», нет масла, меньше износ тормозов благодаря рекуперации.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Цифры и факты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ключевые данные, подтверждающие выводы реферата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{fact.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="text-2xl bg-transparent">{fact.initial}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{fact.name}</p>
                    <p className="text-sm text-muted-foreground">{fact.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
