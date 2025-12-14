import Navbar from "../components/Navbar";
import { Target, Users, Award, TrendingUp } from 'lucide-react';

// Dacă AI componente UI în components/ui/, DECOMENTEAZĂ următoarele linii:
// import { Card, CardContent } from '../components/ui/card';

const Despre = () => {
  const values = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'Profesionalism',
      description: 'Dedicați excelenței în fiecare proiect'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Orientare Client',
      description: 'Soluții personalizate pentru nevoile tale'
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: 'Calitate Premium',
      description: 'Standarde înalte în toate aspectele'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
      title: 'Inovație',
      description: 'Tehnologie de ultimă generație'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Despre PrimeLaser Cleaning</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Liderul în tehnologia de curățare laser din România
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Povestea Noastră</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                PrimeLaser Cleaning s-a născut din pasiunea pentru tehnologie și dorința de a oferi
                soluții de curățare superioare pentru industria românească. Cu o echipă de specialiști
                dedicați și echipamente laser de ultimă generație, ne-am propus să revoluționăm
                industria curățeniei profesionale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Tehnologia laser reprezintă viitorul curățeniei industriale - ecologică, eficientă
                și extrem de precisă. Spre deosebire de metodele tradiționale care utilizează substanțe
                chimice sau abrazivi, curățarea cu laser este complet non-invazivă și respectuoasă
                cu mediul înconjurător.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fie că este vorba despre îndepărtarea ruginii de pe echipamente industriale,
                restaurarea monumentelor istorice sau curățarea în medii industriale complexe,
                PrimeLaser Cleaning oferă soluții personalizate care depășesc așteptările.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Valorile Noastre</h2>
            <p className="text-xl text-slate-600">Principiile care ne ghidează în fiecare proiect</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              // Dacă NU ai componenta Card, folosește div-ul de mai jos:
              <div key={index} className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg p-8 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Misiunea Noastră</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Să oferim servicii de curățare laser de cea mai înaltă calitate, contribuind la
                  protejarea mediului și la eficientizarea proceselor industriale. Ne angajăm să fim
                  partenerul de încredere pentru toate nevoile de curățare profesională.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Viziunea Noastră</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Să devenim standardul de referință în tehnologia de curățare laser în România și
                  Europa de Est, extinzând continuu sfera serviciilor și adaptându-ne la nevoile
                  în continuă evoluție ale clienților noștri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { number: '500+', label: 'Proiecte Finalizate' },
              { number: '200+', label: 'Clienți Mulțumiți' },
              { number: '10+', label: 'Ani Experiență' },
              { number: '100%', label: 'Satisfacție Client' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Despre;
