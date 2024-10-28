'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Mail, Phone, MapPin, Instagram, Star as StarIcon, ChevronDown, Layout, Server, Database } from 'lucide-react'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

type Language = 'en' | 'ru' | 'kk'

const translations = {
  en: {
    courses: 'Courses',
    instructors: 'Instructors',
    aboutUs: 'About Us',
    careers: 'Careers',
    blog: 'Blog',
    contact: 'Contact',
    login: 'Login',
    heroTitle: '🚀 Start learning programming today!',
    heroSubtitle: 'Join Mol Aity and kickstart your career in tech',
    enrollNow: 'Enroll Now',
    popularCourses: 'Popular Courses',
    learnMore: 'Learn More',
    graduatesSay: 'What Our Graduates Say',
    readyToStart: 'Ready to start your journey?',
    enrollCourse: 'Enroll in a Course',
    getFreeConsultation: 'Get a Free Consultation',
    contactUs: 'Contact Us',
    sendMessage: 'Send Message',
    copyright: '© 2023 Mol Aity Programming School. All rights reserved.',
    weTeach: 'We teach:',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    yourPhone: 'Your Phone',
  },
  ru: {
    courses: 'Курсы',
    instructors: 'Преподаватели',
    aboutUs: 'О нас',
    careers: 'Карьера',
    blog: 'Блог',
    contact: 'Контакты',
    login: 'Войти',
    heroTitle: '🚀 Начните изучать программирование сегодня!',
    heroSubtitle: 'Присоединяйтесь к Mol Aity и начните свою карьеру в IT',
    enrollNow: 'Записаться',
    popularCourses: 'Популярные курсы',
    learnMore: 'Узнать больше',
    graduatesSay: 'Что говорят наши выпускники',
    readyToStart: 'Готовы начать свой путь?',
    enrollCourse: 'Записаться на курс',
    getFreeConsultation: 'Получить бесплатную консультацию',
    contactUs: 'Свяжитесь с нами',
    sendMessage: 'Отправить сообщение',
    copyright: '© 2023 Школа программирования Mol Aity. Все права защищены.',
    weTeach: 'Мы обучаем:',
    yourName: 'Ваше имя',
    yourEmail: 'Ваш email',
    yourMessage: 'Ваше сообщение',
    yourPhone: 'Ваш телефон',
  },
  kk: {
    courses: 'Курстар',
    instructors: 'Оқытушылар',
    aboutUs: 'Біз туралы',
    careers: 'Мансап',
    blog: 'Блог',
    contact: 'Байланыс',
    login: 'Кіру',
    heroTitle: '🚀 Бүгін бағдарламалауды үйренуді бастаңыз!',
    heroSubtitle: 'Mol Aity-ға қосылып, IT саласындағы мансабыңызды бастаңыз',
    enrollNow: 'Қазір жазылу',
    popularCourses: 'Танымал курстар',
    learnMore: 'Көбірек білу',
    graduatesSay: 'Біздің түлектер не дейді',
    readyToStart: 'Жолыңызды бастауға дайынсыз ба?',
    enrollCourse: 'Курсқа жазылу',
    getFreeConsultation: 'Тегін кеңес алу',
    contactUs: 'Бізбен байланысыңыз',
    sendMessage: 'Хабарлама жіберу',
    copyright: '© 2023 Mol Aity бағдарламалау мектебі. Барлық құқықтар қорғалған.',
    weTeach: 'Біз үйретеміз:',
    yourName: 'Сіздің атыңыз',
    yourEmail: 'Сіздің email',
    yourMessage: 'Сіздің хабарламаңыз',
    yourPhone: 'Сіздің телефоныңыз',
  },
}

const courses = [
  {
    name: 'Frontend',
    icon: Layout,
    description: {
      en: 'Learn to build beautiful and interactive user interfaces.',
      ru: 'Научитесь создавать красивые и интерактивные пользовательские интерфейсы.',
      kk: 'Әдемі және интерактивті пайдаланушы интерфейстерін құруды үйреніңіз.',
    },
  },
  {
    name: 'Backend',
    icon: Server,
    description: {
      en: 'Master server-side programming and API development.',
      ru: 'Освойте серверное программирование и разработку API.',
      kk: 'Серверлік бағдарламалау және API әзірлеуді меңгеріңіз.',
    },
  },
  {
    name: 'Data Science',
    icon: Database,
    description: {
      en: 'Explore data analysis, machine learning, and AI concepts.',
      ru: 'Изучите анализ данных, машинное обучение и концепции искусственного интеллекта.',
      kk: 'Деректерді талдау, машиналық оқыту және жасанды интеллект тұжырымдамаларын зерттеңіз.',
    },
  },
]

const programmingLanguages = [
  'Python', 'JavaScript', 'Java', 'C#', 'C++', 'Ruby', 'Go', 'Swift', 'Kotlin', 'TypeScript',
  'Rust', 'PHP', 'Dart', 'SQL', 'R', 'Scala'
]

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % 100)
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col ${montserrat.className}`}>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/placeholder.svg?height=40&width=120" width={120} height={40} alt="Mol Aity Logo" />
          <nav className="hidden md:flex space-x-4">
            {[t.courses, t.instructors, t.aboutUs, t.careers, t.blog, t.contact].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-900">
                {item}
              </a>
            ))}
            <a href="#" className="text-blue-900 font-semibold">
              {t.login}
            </a>
          </nav>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="kk">Қазақша</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
          <button className="md:hidden">Menu</button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-900 text-white py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t.heroTitle}</h1>
            <p className="text-xl mb-8">{t.heroSubtitle}</p>
            <a
              href="#"
              className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              {t.enrollNow}
            </a>
          </div>
        </section>

        <section className="py-4 bg-blue-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <span className="font-bold mr-4">{t.weTeach}</span>
              <div className="overflow-hidden whitespace-nowrap">
                <div
                  className="inline-block animate-scroll"
                  style={{
                    transform: `translateX(-${scrollPosition}%)`,
                    transition: 'transform 0.15s linear',
                  }}
                >
                  {programmingLanguages.join(' • ')}
                </div>
                <div
                  className="inline-block animate-scroll"
                  style={{
                    transform: `translateX(-${scrollPosition}%)`,
                    transition: 'transform 0.15s linear',
                  }}
                >
                  {programmingLanguages.join(' • ')}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">{t.popularCourses}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.name} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <course.icon className="text-blue-900 mr-2" size={24} />
                    <h3 className="text-xl font-semibold text-blue-900">{course.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description[language]}</p>
                  <a href="#" className="text-blue-900 font-semibold hover:underline">
                    {t.learnMore}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">{t.graduatesSay}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg relative">
                <p className="text-gray-600 mb-4 pr-12">
                  "Great place, great instructors!"
                </p>
                <p className="font-semibold">- Dilnaz Ordabek</p>
                <div className="flex absolute top-6 right-6">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg relative">
                <p className="text-gray-600 mb-4 pr-12">
                  "Zhaksylyk is a knowledgeable and responsible teacher!"
                </p>
                <p className="font-semibold">- Nurkhan K.</p>
                <div className="flex absolute top-6 right-6">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">{t.readyToStart}</h2>
            <div className="space-x-4">
              <a
                href="#"
                className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
              >
                {t.enrollCourse}
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
              >
                {t.getFreeConsultation}
              </a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">{t.contactUs}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t.yourName}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder={t.yourPhone}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder={t.yourEmail}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <textarea
                  placeholder={t.yourMessage}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300"
                >
                  {t.sendMessage}
                </button>
              </form>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-900 mr-2" />
                  <span>Astana, Dostyk 5</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-900 mr-2" />
                  <span>+7 (702) 672-7749</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-900 mr-2" />
                  <span>info@molaity.kz</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="text-blue-900 mr-2" />
                  <a href="#" className="hover:underline">
                    @molit.astana
                  </a>
                </div>
              </div>
            </div>
          
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>{t.copyright}</p>
        </div>
      </footer>
    </div>
  )
}