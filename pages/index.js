import Navbar from "../components/Navbar"; // Păstrăm Navbar-ul tău existent
import { Sparkles, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // NEXT.JS: Folosim Link de la Next.js, nu de la react-router-dom

// NEXT.JS: Înlocuim componentele UI specifice cu elemente HTML simple + Tailwind CSS
// Dacă ai fișierele în components/ui/, poți decomenta și folosi importurile originale:
// import { Button } from '../components/ui/button';
// import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: 'Tehnologie Avansată',
      description: 'Echipamente laser de ultimă generație pentru rezultate impecabile'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Ecologic & Sigur',
      description: 'Fără substanțe chimice, fără abrazivi, protejăm mediul înconjurător'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Rapid & Eficient',
      description: 'Curățare rapidă și precisă, economisind timp și costuri'
    }
  ];

  const benefits = [
    'Elimină rugina, vopseaua și contaminanții',
    'Nu deteriorează suprafața de bază',
    'Fără reziduuri sau deșeuri secundare',
    'Ideal pentru suprafețe delicate',
    'Costuri reduse pe termen lung',
    'Rezultate superioare metodelor tradiționale'
  ];

  return (
    <>
      <Navbar /> {/* Navbar-ul tău existent rămâne aici */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-700 font-semibold text-sm">Curățenie cu Laser - La Nivel Premium</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Revoluționăm Curățenia
                <span className="block text-blue-600">Cu Tehnologie Laser</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Soluții profesionale de curățare laser pentru industrie, restaurare și construcții.
                Tehnologie avansată, rezultate perfecte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* NEXT.JS: Folosim `href` și componenta <Link> de la Next.js */}
                <Link href="/contact">
                  {/* Dacă NU ai componenta Button, folosește un <button> simplu: */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Solicită Ofertă Gratuită
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </button>
                </Link>
                <Link href="/servicii">
                  <button className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-6 text-lg rounded-lg transition-all duration-300">
                    Descoperă Serviciile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">De Ce PrimeLaser Cleaning?</h2>
              <p className="text-xl text-slate-600">Avantajele tehnologiei laser pentru curățenie</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                // Dacă NU ai componente Card, folosește un <div>
                <div key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl rounded-lg p-8 transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">Beneficii Curățare Laser</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Curățarea cu laser oferă o alternativă superioară metodelor tradiționale,
                    fiind mai eficientă, mai precisă și mai ecologică.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Solicită o Consultație</h3>
                    <p className="text-slate-600 mb-6 text-center">
                      Contactează-ne pentru o evaluare gratuită și o ofertă personalizată.
                    </p>
                    <Link href="/contact" className="block">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        Contactează-ne Acum
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Pregătit să Experimentezi Diferența?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Alătură-te sutelor de clienți mulțumiți care au ales tehnologia laser pentru
              proiectele lor de curățare.
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Începe Acum
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
