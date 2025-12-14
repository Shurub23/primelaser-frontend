import { useState } from "react";
import { Send, Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar"; // Asigură-te că ai Navbar

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Se trimite...");

    try {
      const res = await fetch(
        "https://primelaser-backend.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      if (res.ok) {
        setStatus("✅ Mesaj trimis cu succes! Vă vom contacta în scurt timp.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Eroare la trimitere. Încercați din nou.");
      }
    } catch (err) {
      setStatus("⚠️ Server indisponibil. Vă rugăm să ne contactați la telefon.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
        {/* Header */}
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Suntem aici să răspundem la orice întrebare și să oferim soluții personalizate pentru nevoile tale.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formular */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Trimite un mesaj
              </h2>
              <p className="text-slate-600 mb-8">
                Completează formularul și te vom contacta în maximum 24 de ore.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Introdu numele tău"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="email@exemplu.com"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="07xx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Mesajul tău *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Descrie-ne nevoile tale..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Trimite Mesajul
                </button>

                {status && (
                  <div className={`p-4 rounded-lg text-center font-medium ${
                    status.includes("✅") ? "bg-green-50 text-green-700" :
                    status.includes("❌") ? "bg-red-50 text-red-700" :
                    "bg-yellow-50 text-yellow-700"
                  }`}>
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Informații de contact */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Date de contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Telefon</h4>
                      <p className="text-slate-600">+40 724 123 456</p>
                      <p className="text-sm text-slate-500">Luni-Vineri, 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600">contact@primelaser.ro</p>
                      <p className="text-sm text-slate-500">Răspundem în 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Sediu</h4>
                      <p className="text-slate-600">Str. Tehnologiei nr. 10</p>
                      <p className="text-slate-600">Cluj-Napoca, România</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Program de lucru</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-600">Luni - Vineri</span>
                      <span className="font-semibold">9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-600">Sâmbătă</span>
                      <span className="font-semibold">10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-600">Duminică</span>
                      <span className="font-semibold">Închis</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">De ce să ne contactezi?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Ofertă personalizată în 24h</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Consultanță tehnică gratuită</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Echipă de specialiști cu experiență</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// ATENȚIE: Aici se termină fișierul. NU mai pune acolade în plus!
