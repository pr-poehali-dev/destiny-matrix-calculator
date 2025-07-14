import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [birthDate, setBirthDate] = useState('')
  const [partnerDate, setPartnerDate] = useState('')
  const [matrix, setMatrix] = useState<number[]>([])
  const [compatibility, setCompatibility] = useState<any>(null)

  const calculateMatrix = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    
    const digits = [day, month, year].join('').split('').map(Number)
    const sum = digits.reduce((acc, digit) => acc + digit, 0)
    const finalSum = sum > 22 ? sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0) : sum
    
    return [day, month, year, sum, finalSum]
  }

  const handleCalculate = () => {
    if (birthDate) {
      const result = calculateMatrix(birthDate)
      setMatrix(result)
    }
  }

  const handleCompatibilityCalculate = () => {
    if (birthDate && partnerDate) {
      const matrix1 = calculateMatrix(birthDate)
      const matrix2 = calculateMatrix(partnerDate)
      const compatibility = Math.abs(matrix1[4] - matrix2[4])
      setCompatibility({ matrix1, matrix2, compatibility })
    }
  }

  const services = [
    {
      title: 'Персональная консультация',
      description: 'Индивидуальный разбор вашей матрицы судьбы с подробной расшифровкой',
      price: '5000 ₽',
      duration: '1.5 часа',
      icon: 'User'
    },
    {
      title: 'Парная консультация',
      description: 'Анализ совместимости и построение гармоничных отношений',
      price: '8000 ₽',
      duration: '2 часа',
      icon: 'Heart'
    },
    {
      title: 'Детская матрица',
      description: 'Раскрытие потенциала и талантов вашего ребенка',
      price: '4000 ₽',
      duration: '1 час',
      icon: 'Baby'
    }
  ]

  const courses = [
    {
      title: 'Базовый курс "Матрица Судьбы"',
      description: 'Изучение основ метода, 22 арканов Таро и их значения',
      price: '15000 ₽',
      duration: '4 недели',
      icon: 'BookOpen'
    },
    {
      title: 'Углубленный курс',
      description: 'Профессиональное консультирование и работа с клиентами',
      price: '35000 ₽',
      duration: '8 недель',
      icon: 'GraduationCap'
    },
    {
      title: 'Мастер-класс "Совместимость"',
      description: 'Специализация на парных консультациях и отношениях',
      price: '12000 ₽',
      duration: '2 дня',
      icon: 'Users'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-sage to-mystic-beige">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={28} className="text-mystic-rose" />
              <h1 className="text-2xl font-cormorant font-bold text-primary">Матрица Судьбы</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#calculator" className="text-primary hover:text-mystic-rose transition-colors">Калькулятор</a>
              <a href="#services" className="text-primary hover:text-mystic-rose transition-colors">Услуги</a>
              <a href="#courses" className="text-primary hover:text-mystic-rose transition-colors">Курсы</a>
              <a href="#about" className="text-primary hover:text-mystic-rose transition-colors">Обо мне</a>
              <a href="#contact" className="text-primary hover:text-mystic-rose transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-primary mb-6 animate-fade-in">
              Откройте свою истинную судьбу
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-open-sans animate-fade-in">
              Матрица Судьбы — это древний метод познания себя через числа вашего рождения. 
              Раскройте свой потенциал, найдите свое предназначение и создайте гармонию в жизни.
            </p>
            <div className="flex justify-center mb-12">
              <img 
                src="/img/1bbb81e7-f513-4ae3-9588-2f0b74a18cdb.jpg" 
                alt="Матрица Судьбы" 
                className="rounded-xl shadow-2xl max-w-md animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Калькулятор Матрицы Судьбы</h3>
            <p className="text-lg text-muted-foreground font-open-sans">
              Рассчитайте свою матрицу или проверьте совместимость с партнером
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="single" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="single" className="text-lg">Личная матрица</TabsTrigger>
                <TabsTrigger value="compatibility" className="text-lg">Совместимость</TabsTrigger>
              </TabsList>

              <TabsContent value="single" className="space-y-6">
                <Card className="shadow-lg border-mystic-rose/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-cormorant text-primary">Ваша матрица судьбы</CardTitle>
                    <CardDescription className="font-open-sans">
                      Введите дату рождения для расчета вашей матрицы
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="birthDate" className="text-lg font-open-sans">Дата рождения</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="mt-2 text-lg"
                      />
                    </div>
                    <Button 
                      onClick={handleCalculate}
                      className="w-full bg-mystic-rose hover:bg-mystic-rose/90 text-white font-open-sans text-lg py-6"
                      disabled={!birthDate}
                    >
                      <Icon name="Calculator" className="mr-2" />
                      Рассчитать матрицу
                    </Button>
                    
                    {matrix.length > 0 && (
                      <div className="mt-8 p-6 bg-mystic-beige/30 rounded-lg">
                        <h4 className="text-xl font-cormorant font-bold text-primary mb-4">Результат расчета:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {['День', 'Месяц', 'Год', 'Сумма', 'Основной аркан'].map((label, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl font-bold text-primary mb-2">{matrix[index]}</div>
                              <div className="text-sm text-muted-foreground font-open-sans">{label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="compatibility" className="space-y-6">
                <Card className="shadow-lg border-mystic-rose/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-cormorant text-primary">Совместимость партнеров</CardTitle>
                    <CardDescription className="font-open-sans">
                      Введите даты рождения обоих партнеров
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="birthDate2" className="text-lg font-open-sans">Ваша дата рождения</Label>
                        <Input
                          id="birthDate2"
                          type="date"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          className="mt-2 text-lg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="partnerDate" className="text-lg font-open-sans">Дата рождения партнера</Label>
                        <Input
                          id="partnerDate"
                          type="date"
                          value={partnerDate}
                          onChange={(e) => setPartnerDate(e.target.value)}
                          className="mt-2 text-lg"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleCompatibilityCalculate}
                      className="w-full bg-mystic-rose hover:bg-mystic-rose/90 text-white font-open-sans text-lg py-6"
                      disabled={!birthDate || !partnerDate}
                    >
                      <Icon name="Heart" className="mr-2" />
                      Рассчитать совместимость
                    </Button>
                    
                    {compatibility && (
                      <div className="mt-8 p-6 bg-mystic-beige/30 rounded-lg">
                        <h4 className="text-xl font-cormorant font-bold text-primary mb-4">Результат совместимости:</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-open-sans">Ваш основной аркан:</span>
                            <Badge variant="secondary" className="text-lg">{compatibility.matrix1[4]}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-open-sans">Аркан партнера:</span>
                            <Badge variant="secondary" className="text-lg">{compatibility.matrix2[4]}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-open-sans">Уровень совместимости:</span>
                            <Badge 
                              variant={compatibility.compatibility <= 3 ? "default" : "destructive"}
                              className="text-lg"
                            >
                              {compatibility.compatibility <= 3 ? "Высокий" : "Средний"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Услуги</h3>
            <p className="text-lg text-muted-foreground font-open-sans">
              Профессиональные консультации по матрице судьбы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-mystic-rose/20 hover:animate-glow">
                <CardHeader className="text-center">
                  <Icon name={service.icon} size={48} className="text-mystic-rose mx-auto mb-4" />
                  <CardTitle className="text-xl font-cormorant text-primary">{service.title}</CardTitle>
                  <CardDescription className="font-open-sans">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-mystic-rose">{service.price}</div>
                  <div className="text-sm text-muted-foreground font-open-sans">Длительность: {service.duration}</div>
                  <Button className="w-full bg-mystic-rose hover:bg-mystic-rose/90 text-white font-open-sans">
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Курсы и обучение</h3>
            <p className="text-lg text-muted-foreground font-open-sans">
              Освойте метод матрицы судьбы и станьте профессиональным консультантом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-mystic-rose/20">
                <CardHeader className="text-center">
                  <Icon name={course.icon} size={48} className="text-mystic-rose mx-auto mb-4" />
                  <CardTitle className="text-xl font-cormorant text-primary">{course.title}</CardTitle>
                  <CardDescription className="font-open-sans">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-mystic-rose">{course.price}</div>
                  <div className="text-sm text-muted-foreground font-open-sans">Длительность: {course.duration}</div>
                  <Button className="w-full bg-mystic-rose hover:bg-mystic-rose/90 text-white font-open-sans">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-8">Обо мне</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-muted-foreground font-open-sans">
                  Добро пожаловать! Меня зовут [Ваше имя], и я практикующий консультант по матрице судьбы 
                  с более чем 5-летним опытом работы.
                </p>
                <p className="text-lg text-muted-foreground font-open-sans">
                  Матрица судьбы изменила мою жизнь, и теперь я помогаю людям раскрыть свой потенциал, 
                  найти свое предназначение и создать гармонию в отношениях.
                </p>
                <p className="text-lg text-muted-foreground font-open-sans">
                  За годы практики я провела более 1000 консультаций и обучила более 200 студентов 
                  этому удивительному методу.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-mystic-beige/30 flex items-center justify-center">
                  <Icon name="User" size={120} className="text-mystic-rose" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground font-open-sans">
              Свяжитесь со мной для записи на консультацию или обучение
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-mystic-rose/20">
                <CardHeader className="text-center">
                  <Icon name="MessageCircle" size={48} className="text-mystic-rose mx-auto mb-4" />
                  <CardTitle className="text-xl font-cormorant text-primary">Telegram</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-mystic-rose hover:bg-mystic-rose/90 text-white font-open-sans">
                    Написать в Telegram
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-mystic-rose/20">
                <CardHeader className="text-center">
                  <Icon name="Instagram" size={48} className="text-mystic-rose mx-auto mb-4" />
                  <CardTitle className="text-xl font-cormorant text-primary">Instagram</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-mystic-rose hover:bg-mystic-rose/90 text-white font-open-sans">
                    Перейти в Instagram
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground font-open-sans mb-4">
                Или свяжитесь со мной по телефону:
              </p>
              <a 
                href="tel:+79000000000" 
                className="text-2xl font-bold text-mystic-rose hover:text-mystic-rose/80 transition-colors"
              >
                +7 (900) 000-00-00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Sparkles" size={24} className="text-mystic-rose" />
            <h4 className="text-xl font-cormorant font-bold">Матрица Судьбы</h4>
          </div>
          <p className="text-sm font-open-sans text-white/80">
            © 2024. Все права защищены. Раскройте свою истинную судьбу.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index