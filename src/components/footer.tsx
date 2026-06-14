export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Электро<span className="text-red-500">Авто</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Реферат по теме «Электротранспорт: технологии, экология и перспективы»
            </p>
            <p className="font-space-mono text-gray-400 text-sm">
              Выполнил студент группы <span className="text-red-400">251-Т62</span>
            </p>
            <p className="font-space-mono text-gray-400 text-sm">
              Калинин Алексей Анатольевич
            </p>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Разделы реферата</h3>
            <ul className="space-y-2 font-space-mono text-gray-400 text-sm">
              <li>1. Введение</li>
              <li>2. История развития электротранспорта</li>
              <li>3. Устройство и ключевые компоненты</li>
              <li>4. Типы электромобилей (BEV, PHEV, HEV)</li>
              <li>5. Экологические аспекты: мифы и реальность</li>
              <li>6. Инфраструктура зарядных станций</li>
              <li>7. Экономика владения и рынок</li>
              <li>8. Перспективы и барьеры</li>
              <li>9. Заключение</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="font-space-mono text-gray-400 text-sm">2026 · Группа 251-Т62 · Калинин А.А.</p>
            <p className="font-space-mono text-gray-500 text-sm">Учебный реферат · ФИО студента</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
