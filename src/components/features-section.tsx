import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "История электротранспорта",
    description: "Первые электромобили появились ещё в конце XIX века — задолго до массового распространения ДВС. В 1899 году электрокар «La Jamais Contente» побил рекорд скорости в 100 км/ч.",
    icon: "history",
    badge: "1899–2024",
  },
  {
    title: "Типы электромобилей",
    description: "BEV (полностью электрические), PHEV (плагин-гибриды) и HEV (классические гибриды) — три основных класса, каждый со своей архитектурой и назначением.",
    icon: "type",
    badge: "BEV / PHEV / HEV",
  },
  {
    title: "Ключевые компоненты",
    description: "Тяговый аккумулятор, электродвигатель, инвертор и система рекуперации энергии — основа любого электромобиля. Плотность энергии батарей за 10 лет выросла в 5 раз.",
    icon: "engine",
    badge: "Технология",
  },
  {
    title: "Экология: мифы и факты",
    description: "При среднем энергобалансе сети электромобиль выбрасывает на 40–70% меньше CO₂, чем бензиновый аналог. Производство батарей компенсируется уже после 2 лет эксплуатации.",
    icon: "eco",
    badge: "−60% CO₂",
  },
  {
    title: "Инфраструктура зарядки",
    description: "В мире свыше 3 млн публичных зарядных станций (2024). Быстрая зарядка DC (150–350 кВт) пополняет батарею на 80% за 20–30 минут.",
    icon: "charge",
    badge: "3 млн+ станций",
  },
  {
    title: "Экономика владения",
    description: "Стоимость «топлива» электромобиля в 3–4 раза ниже бензина, расходы на обслуживание меньше на 30–40%. Мировой рынок EV к 2030 году превысит $1,3 трлн.",
    icon: "economy",
    badge: "Выгодно",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Ключевые аспекты реферата</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Обзор главных тем: от истории и устройства до экологии, инфраструктуры и экономики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "history" && "🕰️"}
                    {feature.icon === "type" && "⚡"}
                    {feature.icon === "engine" && "🔋"}
                    {feature.icon === "eco" && "🌿"}
                    {feature.icon === "charge" && "🔌"}
                    {feature.icon === "economy" && "💰"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
