import Link from "next/link";


export default function Navbar() {
return (
<header style={{ padding: 20 }}>
<Link href="/"><strong>PrimeLaser Cleaning</strong></Link>
<nav style={{ float: "right" }}>
<Link href="/servicii">Servicii</Link> |
<Link href="/despre">Despre</Link> |
<Link href="/galerie">Galerie</Link> |
<Link href="/testimoniale">Testimoniale</Link> |
<Link href="/contact">Contact</Link>
</nav>
</header>
);
}