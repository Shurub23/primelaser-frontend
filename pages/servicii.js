import Navbar from "../components/Navbar";
import { Wrench, Building2, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // IMPORTANT: Next.js Link, nu react-router-dom

// Dacă AI componente UI în components/ui/, DECOMENTEAZĂ următoarele linii:
// import { Button } from '../components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Servicii = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Curățare Metal & Rugină',
      description: 'Îndepărtarea eficientă a ruginii, oxidării și contaminanților de pe suprafețe metalice.',
      features: [
        'Eliminarea completă a ruginii',
        'Curățare pentru oțel, aluminiu, cupru',
        'Pregătire suprafață pentru vopsire',
        'Fără deteriorarea metalului de bază',
        'Ideal pentru echipamente industriale'
      ],
      applications: 'Mașini industriale, structuri metalice, echipamente auto, șipci, conducte'
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: 'Restaurare Monumente',
      description: 'Curățare delicată și precisă pentru conservarea și restaurarea monumentelor istorice.',
      features: [
        'Tehnici non-invazive',
        'Păstrează integritatea suprafeței',
        'Îndepărtare selectivă poluanți',
        'Protejează patrimoniul cultural',
        'Aprobat de specialiști în restaurare'
      ],
      applications: 'Fațade istorice, statui, clădiri patrimoniale, pietre naturale, fresce'
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: 'Curățare Industrială',
      description: 'Soluții profesionale de curățare pentru medii industriale și producție.',
      features: [
        'Curățare echipamente producție',
        'Îndepărtare vopsea și acoperiri',
        'Decontaminare suprafețe',
        'Mentenanță predictivă',
        'Reducere downtime producție'
      ],
      applications: 'Linii de producție, forme turnătorie, echipamente heavy-duty, instalații petroliere'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Serviciile Noastre</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Oferim soluții complete de curățare laser pentru diverse industrii și aplicații.
              Tehnologie de vârf, rezultate garantate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              // Dacă NU ai componenta Card, folosește div-ul de mai jos:
              <div key={index} className="bg-white border-0 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex flex-col justify-center items-center text-center">
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-slate-600 text-lg">{service.description}</p>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Caracteristici:</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">Aplicații:</h3>
                      <p className="text-slate-600">{service.applications}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Procesul Nostru</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultație', desc: 'Evaluăm nevoile tale' },
                { step: '02', title: 'Analiză', desc: 'Planificăm soluția optimă' },
                { step: '03', title: 'Execuție', desc: 'Curățare profesională' },
                { step: '04', title: 'Verificare', desc: 'Garantăm calitatea' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ai Nevoie de Serviciile Noastre?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o consultație gratuită și o ofertă personalizată.
          </p>
          {/* IMPORTANT: Next.js folosește 'href' și componenta 'Link' */}
          <Link href="/contact">
            {/* Dacă NU ai componenta Button, folosește button simplu: */}
            <button className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Solicită Ofertă
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicii;
