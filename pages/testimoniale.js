import Navbar from "../components/Navbar";
import { Star, Quote } from 'lucide-react';

// Dacă AI componente UI în components/ui/, DECOMENTEAZĂ următoarele linii:
// import { Card, CardContent } from '../components/ui/card';

const Testimoniale = () => {
  // Date pentru testimoniale (înlocuiește cu date reale când le ai)
  const testimoniale = [
    {
      name: "Alexandru Popescu",
      position: "Director Tehnic",
      company: "MetalConstruct SRL",
      text: "Am folosit serviciile PrimeLaser pentru curățarea structurilor metalice ale unui depozit industrial. Rezultatele au depășit așteptările! Echipamentul a fost restaurat la starea inițială, fără deteriorări.",
      rating: 5
    },
    {
      name: "Maria Ionescu",
      position: "Conservator",
      company: "Muzeul Național de Istorie",
      text: "Pentru restaurarea fațadei istorice a muzeului, am ales curățarea cu laser. Metoda non-invazivă a păstrat integritatea pietrei, iar rezultatul a fost remarcabil. Recomand cu încredere!",
      rating: 5
    },
    {
      name: "Cristian Moldovan",
      position: "Manager Producție",
      company: "AutoParts RO",
      text: "Curățarea cu laser a scuturilor de producție a redus downtime-ul cu 70%. Nu mai folosim substanțe chimice, iar productivitatea a crescut semnificativ. Partener de încredere!",
      rating: 5
    },
    {
      name: "Ana Dumitrescu",
      position: "Proprietar",
      company: "Vila Istorică Transilvania",
      text: "Restaurarea balustradei originale din fier forjat a fost o provocare. Echipa PrimeLaser a lucrat cu precizie și atenție la detalii. Rezultatul a păstrat autenticitatea elementului istoric.",
      rating: 4
    },
    {
      name: "Robert Stan",
      position: "Director General",
      company: "PetrolService SA",
      text: "Pentru decontaminarea echipamentelor petroliere, tehnologia laser s-a dovedit cea mai eficientă. Sigur, rapid și ecologic. Colaborăm în continuare pentru toate proiectele noastre.",
      rating: 5
    },
    {
      name: "Elena Vasile",
      position: "Arhitect",
      company: "Arhitecți Asociați",
      text: "În proiectul de reabilitare a unei clădiri patrimoniale, curățarea cu laser a fost soluția ideală pentru îndepărtarea stratului de poluare fără a afecta materialul original. Profesionalism maxim!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Ce Spun Clienții Noștri</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Mărturii reale de la clienți mulțumiți care au experimentat serviciile noastre
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimoniale.map((testimonial, index) => (
              // Dacă NU ai componenta Card, folosește div-ul de mai jos:
              <div key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl rounded-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-blue-100 opacity-20">
                  <Quote className="w-24 h-24" />
                </div>
                <div className="p-8 relative z-10">
                  {/* Stele rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="w-5 h-5 text-slate-300" />
                    ))}
                  </div>
                  
                  {/* Text testimonial */}
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Autor testimonial */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-slate-600 text-sm">{testimonial.position}</div>
                      <div className="text-slate-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Rezultate Măsurabile</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Stat 1 */}
              <div className="bg-white border-0 shadow-lg rounded-xl">
                <div className="p-8">
                  <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-xl font-semibold text-slate-900 mb-1">Satisfacție Client</div>
                  <div className="text-slate-600">Clienți mulțumiți</div>
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white border-0 shadow-lg rounded-xl">
                <div className="p-8">
                  <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-xl font-semibold text-slate-900 mb-1">Proiecte Finalizate</div>
                  <div className="text-slate-600">Cu succes</div>
                </div>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-white border-0 shadow-lg rounded-xl">
                <div className="p-8">
                  <div className="text-5xl font-bold text-blue-600 mb-2">4.9/5</div>
                  <div className="text-xl font-semibold text-slate-900 mb-1">Rating Mediu</div>
                  <div className="text-slate-600">Din recenzii</div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Vrei să devii și tu un client mulțumit?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Contactează-ne astăzi pentru o consultație gratuită și descoperă cum tehnologia laser poate rezolva nevoile tale de curățare.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactează-ne Acum
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimoniale;
