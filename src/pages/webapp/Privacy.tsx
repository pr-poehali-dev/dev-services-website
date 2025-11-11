import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              Scalper.io
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-sm sm:text-base">
              <Icon name="ArrowLeft" className="mr-1 sm:mr-2" size={16} />
              <span className="hidden xs:inline">На главную</span>
              <span className="xs:hidden">Назад</span>
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую ООО "ОПТИМЛАЙН" (далее — Оператор) может получить о Пользователе во время использования им сайта Scalper.io.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями Пользователь должен воздержаться от использования сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Персональная информация, которую мы собираем</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Мы можем собирать и обрабатывать следующую персональную информацию:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Фамилия, имя, отчество</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Контактный телефон</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Адрес электронной почты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Информация о компании и должности</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Данные об использовании сайта (cookie-файлы, IP-адрес, информация о браузере)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Цели обработки персональной информации</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Оператор обрабатывает персональные данные Пользователя в следующих целях:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Target" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Предоставление доступа к сервисам и функционалу сайта</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Target" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Связь с Пользователем для консультаций и информирования об услугах</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Target" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Улучшение качества сервиса и разработка новых услуг</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Target" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Проведение статистических и маркетинговых исследований</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Target" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Таргетирование рекламных материалов</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Правовые основания обработки</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор обрабатывает персональные данные Пользователя на основании:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-3">
                <li className="flex items-start gap-2">
                  <Icon name="Scale" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Scale" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Согласия Пользователя на обработку персональных данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Scale" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Договорных отношений между Пользователем и Оператором</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Защита персональных данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Применяемые меры защиты включают:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-3">
                <li className="flex items-start gap-2">
                  <Icon name="Shield" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Шифрование данных при передаче (SSL/TLS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Shield" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Ограничение доступа к персональным данным</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Shield" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Регулярное обновление системы безопасности</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Shield" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Контроль доступа сотрудников к персональным данным</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Передача данных третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор не передает персональные данные Пользователя третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-3">
                <li className="flex items-start gap-2">
                  <Icon name="Users" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Пользователь явно выразил свое согласие на такие действия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Users" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Передача необходима для использования Пользователем определенного сервиса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Users" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Передача предусмотрена российским или иным применимым законодательством</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Права Пользователя</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Пользователь имеет право:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Key" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Получать информацию о своих персональных данных, обрабатываемых Оператором</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Key" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Требовать уточнения, блокирования или уничтожения персональных данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Key" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Отозвать согласие на обработку персональных данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Key" className="text-primary mt-1 shrink-0" size={16} />
                  <span>Обжаловать действия или бездействие Оператора в уполномоченный орган</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookie-файлы</h2>
              <p className="text-muted-foreground leading-relaxed">
                Сайт использует cookie-файлы для улучшения работы сервиса и повышения удобства использования. Cookie-файлы — это небольшие текстовые файлы, которые сохраняются на устройстве Пользователя при посещении сайта.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Пользователь может управлять cookie-файлами в настройках своего браузера. Однако отключение cookie может повлиять на функциональность сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Изменение Политики конфиденциальности</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор имеет право вносить изменения в настоящую Политику конфиденциальности. Новая редакция Политики вступает в силу с момента ее размещения на сайте, если иное не предусмотрено новой редакцией Политики.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Действующая редакция Политики постоянно доступна на данной странице.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                По вопросам, касающимся обработки персональных данных, Пользователь может обратиться к Оператору:
              </p>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Building2" className="text-primary" size={20} />
                  <span className="font-medium">ООО "ОПТИМЛАЙН"</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <span className="text-muted-foreground">
                    129164, город Москва, Ракетный б-р, д. 16, эт 13 пом 25 ком 25
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <a href="mailto:info@scalper.io" className="text-primary hover:underline">
                    info@scalper.io
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <a href="tel:+74993913647" className="text-primary hover:underline">
                    +7 (499) 391-36-47
                  </a>
                </div>
              </div>
            </section>

            <section className="border-t border-border pt-8 mt-12">
              <p className="text-sm text-muted-foreground text-center">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;