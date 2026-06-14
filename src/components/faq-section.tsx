import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Правда ли, что электромобили вреднее для экологии из-за производства батарей?",
      answer:
        "Это распространённый миф. Да, производство аккумулятора создаёт повышенный «углеродный долг», однако он полностью компенсируется уже через 1,5–2 года эксплуатации. За весь срок службы электромобиль выбрасывает на 40–70% меньше CO₂, чем бензиновый аналог.",
    },
    {
      question: "Чем отличаются BEV, PHEV и HEV?",
      answer:
        "BEV (Battery Electric Vehicle) — полностью электрический, заряжается только от сети. PHEV (Plug-in Hybrid) — гибрид с зарядкой от розетки и ДВС для дальних поездок. HEV (Hybrid) — классический гибрид, заряжается только от рекуперации, розетка не нужна.",
    },
    {
      question: "Сколько стоит зарядка электромобиля?",
      answer:
        "Домашняя зарядка обходится в 3–5 раз дешевле эквивалентного объёма бензина. На быстрых публичных станциях цена выше, но всё равно экономичнее ДВС. В среднем расходы на «топливо» снижаются на 60–70%.",
    },
    {
      question: "Каков реальный запас хода современного электромобиля?",
      answer:
        "Массовые модели 2024 года предлагают 350–600 км по циклу WLTP. Флагманы (Tesla Model S, Mercedes EQS) — свыше 600 км. Реальный пробег зависит от температуры, стиля езды и скорости — в городе, как правило, выше паспортного.",
    },
    {
      question: "Что будет с аккумуляторами после выхода из строя?",
      answer:
        "Батареи получают «вторую жизнь» как стационарные накопители энергии (например, в системах солнечных станций). После полного износа ценные металлы (литий, кобальт, никель) извлекаются путём переработки. Эффективность переработки уже превышает 90%.",
    },
    {
      question: "Каковы главные барьеры для массового перехода на электромобили?",
      answer:
        "Основные барьеры: высокая начальная стоимость (хотя разрыв с ДВС сокращается), недостаточная зарядная инфраструктура в регионах, «зарядная тревога» у водителей и длительное время зарядки по сравнению с заправкой. К 2030 году большинство экспертов ожидают устранения этих барьеров.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Вопросы по теме</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на самые частые вопросы об электромобилях — мифы, факты и перспективы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
