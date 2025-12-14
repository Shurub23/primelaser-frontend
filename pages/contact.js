import Navbar from "../components/Navbar";


export default function Contact() {
async function submit(e) {
e.preventDefault();
const form = e.target;
await fetch("https://BACKEND_RENDER_URL/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
name: form.name.value,
email: form.email.value,
message: form.message.value
})
});
alert("Mesaj trimis!");
form.reset();
}


return (
<>
<Navbar />
<form onSubmit={submit} style={{ padding: 40 }}>
<input name="name" placeholder="Nume" required /><br />
<input name="email" placeholder="Email" required /><br />
<textarea name="message" placeholder="Mesaj" required /><br />
<button>Trimite</button>
</form>
</>
);
}