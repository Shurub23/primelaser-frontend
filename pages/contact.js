import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // FOARTE IMPORTANT

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
        setStatus("Mesaj trimis cu succes!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Eroare la trimitere.");
      }
    } catch (err) {
      setStatus("Server indisponibil.");
    }
  };

  return (
<>
<Navbar />
<main style={{ padding: 40 }}>
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nume"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Mesaj"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Trimite</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
