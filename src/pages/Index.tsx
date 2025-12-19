import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/files/лого без фона 2.png" alt="X3 Engineering" className="h-12 md:h-14 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection("product")} className="text-sm font-medium hover:text-primary transition-colors">
              Продукты
            </button>
            <button onClick={() => scrollToSection("cases")} className="text-sm font-medium hover:text-primary transition-colors">
              Кейсы
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <Button>Связаться</Button>
        </div>
      </header>

      <main>
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="mb-4">Технологический суверенитет России</Badge>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  Инновационное сварочное оборудование
                </h1>
                <p className="text-xl text-muted-foreground">
                  Разработка и производство передового оборудования для российской промышленности. 
                  Установка орбитальной сварки <span className="text-primary font-semibold">Фаворит X3</span> — 
                  технология будущего уже сегодня.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2" onClick={() => scrollToSection("product")}>
                    Узнать больше <Icon name="ArrowRight" className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                    Связаться с нами
                  </Button>
                </div>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Установок</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">99.8%</div>
                    <div className="text-sm text-muted-foreground">Качество швов</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/a97212ea-2ebe-4eb6-9c68-9e6128eb2687/files/077fe0f0-ef0b-474f-ab26-e078a0681cab.jpg"
                  alt="Фаворит X3 - установка орбитальной сварки"
                  className="rounded-lg shadow-2xl hover-scale"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl">
                  <div className="text-2xl font-bold">Фаворит X3</div>
                  <div className="text-sm">Орбитальная сварка</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-4">X3 Engineering</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Мы специализируемся на разработке и производстве инновационного сварочного оборудования для российской промышленности
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Target" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Обеспечить технологический суверенитет России через создание передового оборудования мирового уровня
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="TrendingUp" className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Эффективность</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Повышение эффективности производственных процессов через автоматизацию и точность
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Lightbulb" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Инновации</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Постоянное развитие и внедрение передовых технологий в сварочное производство
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 relative">
              <img 
                src="https://cdn.poehali.dev/projects/a97212ea-2ebe-4eb6-9c68-9e6128eb2687/files/3ab2dfed-2dbe-4692-befe-9774cc191b81.jpg"
                alt="Производственный цех X3 Engineering"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        <section id="product" className="py-24">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4">Флагманский продукт</Badge>
              <h2 className="text-4xl font-bold mb-4">Фаворит X3</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Установка орбитальной сварки труб в трубные доски — технология высочайшей точности
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Settings" className="h-6 w-6 text-primary" />
                      Технические характеристики
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Диапазон диаметров</div>
                        <div className="font-semibold">8-60 мм</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Толщина стенки</div>
                        <div className="font-semibold">1-8 мм</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Точность позиционирования</div>
                        <div className="font-semibold text-primary">±0.01 мм</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Скорость сварки</div>
                        <div className="font-semibold">до 60 см/мин</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Тип управления</div>
                        <div className="font-semibold">ЧПУ / Автомат</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Питание</div>
                        <div className="font-semibold">380В, 50Гц</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Режимы сварки:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">TIG</Badge>
                        <Badge variant="secondary">MIG/MAG</Badge>
                        <Badge variant="secondary">Plasma</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Материалы:</div>
                      <div className="text-sm text-muted-foreground">
                        Нержавеющая сталь, углеродистая сталь, сплавы на основе никеля, титан, медь
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Award" className="h-6 w-6" />
                      Преимущества
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-semibold">Высокая производительность</div>
                        <div className="text-sm opacity-90">До 200 швов в смену</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-semibold">Безупречное качество</div>
                        <div className="text-sm opacity-90">99.8% соответствие стандартам</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-semibold">Экономия материалов</div>
                        <div className="text-sm opacity-90">Снижение расхода на 30%</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-semibold">Простота управления</div>
                        <div className="text-sm opacity-90">Интуитивный интерфейс</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <img 
                  src="https://cdn.poehali.dev/projects/a97212ea-2ebe-4eb6-9c68-9e6128eb2687/files/80bb1f9e-74dc-4530-be45-76238e416acd.jpg"
                  alt="Процесс орбитальной сварки"
                  className="rounded-lg shadow-xl w-full"
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Factory" className="h-6 w-6 text-secondary" />
                      Применение
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Building2" className="h-5 w-5 text-primary" />
                      <span>Теплообменники и котельное оборудование</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Droplet" className="h-5 w-5 text-primary" />
                      <span>Нефтегазовая промышленность</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Atom" className="h-5 w-5 text-primary" />
                      <span>Атомная энергетика</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Fuel" className="h-5 w-5 text-primary" />
                      <span>Химическая промышленность</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Ship" className="h-5 w-5 text-primary" />
                      <span>Судостроение</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary text-secondary-foreground">
                  <CardHeader>
                    <CardTitle>Сертификация</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Shield" className="h-4 w-4" />
                        <span>ГОСТ 16037-80, ГОСТ Р ИСО 3834</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Shield" className="h-4 w-4" />
                        <span>Сертификат Ростехнадзора</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Shield" className="h-4 w-4" />
                        <span>Соответствие требованиям НАКС</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4">Кейсы</Badge>
              <h2 className="text-4xl font-bold mb-4">Наши проекты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Успешные внедрения Фаворит X3 на ведущих предприятиях России
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale">
                <CardHeader>
                  <Badge className="w-fit mb-2">Энергетика</Badge>
                  <CardTitle>ПАО "Газпром"</CardTitle>
                  <CardDescription>Модернизация производства теплообменников</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Установлено:</span>
                      <span className="font-semibold">12 установок</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Рост производительности:</span>
                      <span className="font-semibold text-primary">+45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Год внедрения:</span>
                      <span className="font-semibold">2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <Badge className="w-fit mb-2">Атомная энергетика</Badge>
                  <CardTitle>ГК "Росатом"</CardTitle>
                  <CardDescription>Оборудование для АЭС нового поколения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Установлено:</span>
                      <span className="font-semibold">8 установок</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Качество швов:</span>
                      <span className="font-semibold text-primary">99.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Год внедрения:</span>
                      <span className="font-semibold">2022</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <Badge className="w-fit mb-2">Машиностроение</Badge>
                  <CardTitle>ОАО "ОМЗ"</CardTitle>
                  <CardDescription>Производство энергетического оборудования</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Установлено:</span>
                      <span className="font-semibold">15 установок</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Экономия времени:</span>
                      <span className="font-semibold text-primary">-40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Год внедрения:</span>
                      <span className="font-semibold">2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <Badge className="mb-4">Контакты</Badge>
                <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">
                  Готовы обсудить ваш проект? Наши специалисты ответят на все вопросы
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Офис и производство</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold">Адрес</div>
                        <div className="text-sm text-muted-foreground">
                          г. Москва, Научный проезд, д. 13
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold">Телефон</div>
                        <div className="text-sm text-muted-foreground">
                          +7 (495) 123-45-67
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-muted-foreground">
                          info@x3engineering.ru
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold">Режим работы</div>
                        <div className="text-sm text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Отправить запрос</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Ваше имя</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="ivan@company.ru"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Сообщение</label>
                        <textarea 
                          className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                          placeholder="Расскажите о вашем проекте..."
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Отправить запрос
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://cdn.poehali.dev/files/лого без фона 2.png" alt="X3 Engineering" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационное сварочное оборудование для российской промышленности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#product" className="hover:text-primary transition-colors">Фаворит X3</a></li>
                <li><a href="#product" className="hover:text-primary transition-colors">Технические характеристики</a></li>
                <li><a href="#product" className="hover:text-primary transition-colors">Применение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@x3engineering.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 X3 Engineering. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;