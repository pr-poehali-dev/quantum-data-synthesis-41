import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Устройство электромобиля",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Электромобиль состоит из тягового аккумулятора (Li-ion), электродвигателя, инвертора,
            бортового зарядного устройства и системы рекуперативного торможения. В отличие от ДВС —
            минимум движущихся частей и высокий КПД до 90%.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Тяговый аккумулятор — сердце электромобиля (60–100+ кВт·ч)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Электродвигатель: КПД до 95% против 35–40% у ДВС
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Рекуперация: возврат до 25% энергии при торможении
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Экологические аспекты",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Главный миф: «электромобиль просто переносит выбросы на электростанцию». Реальность:
            даже при «грязной» сети суммарный CO₂ за жизненный цикл на 40–50% ниже. При зелёной
            энергетике — до 80% снижения выбросов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              −40–70% выбросов CO₂ по сравнению с бензиновым авто
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Переработка аккумуляторов — ключевая задача отрасли
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Нулевые выхлопы в городах — улучшение качества воздуха
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Перспективы развития",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            К 2035 году ЕС запрещает продажу новых автомобилей с ДВС. Твердотельные аккумуляторы
            обещают плотность энергии в 2–3 раза выше существующих. Беспроводная зарядка прямо в дороге
            — уже тестируется в Швеции и Израиле.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2035: запрет ДВС в Европе — переломная точка рынка
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Твердотельные батареи: зарядка за 10 минут, 1000+ км запаса
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Vehicle-to-Grid: электромобили как часть энергосети города
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Глубокий разбор тем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три ключевых блока реферата: устройство электромобиля, реальная экология
            и перспективы технологии до 2040 года.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
