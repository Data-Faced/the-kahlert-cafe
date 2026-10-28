import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import VideoThumbnail from "@/components/VideoThumbnail";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FadeOnScroll from "@/components/FadeOnScroll";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
  description:
    "Visit The Kahlert Café in Sparks, Maryland — an inclusive farm-to-able community café. Fresh, locally sourced meals, artisanal baked goods, and specialty coffee while supporting employment and culinary training for adults with intellectual and developmental disabilities. Open Mon–Fri 8AM–3PM.",
  keywords: [
    "Kahlert Cafe Sparks MD",
    "inclusive cafe near me",
    "farm to able cafe Maryland",
    "specialty coffee Sparks",
    "community cafe Baltimore County",
    "cafe for adults with disabilities",
    "Richcroft cafe",
  ],
  openGraph: {
    title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
    description:
      "Inclusive farm-to-able community café in Sparks, MD. Fresh food, specialty coffee, and meaningful employment opportunities.",
    images: ["/tkc-web-preview.png"],
  },
};

export default function Home() {
  const fbImages = [
    "/tkc-home-fb-1.jpg",
    "/tkc-home-fb-2.jpg",
    "/tkc-home-fb-3.jpeg",
    "/tkc-home-fb-4.jpg",
    "/tkc-home-fb-5.jpeg",
    "/tkc-home-fb-6.jpg",
    "/tkc-home-fb-7.jpg",
    "/tkc-home-fb-8.jpeg",
  ];

  const isWednesday = new Date().getDay() === 3;

  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-white text-stone-900">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/tkc-header-logo.png" alt="The Kahlert Café" width={180} height={60} priority />
            </Link>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
              <Link href="/" className="hover:text-[#0F6397]">HOME</Link>
              <Link href="/catering" className="hover:text-[#0F6397]">CATERING</Link>
              <Link href="/menu" className="hover:text-[#0F6397]">MENU</Link>
              <Link href="/about" className="hover:text-[#0F6397]">ABOUT</Link>
              <Link href="/contact" className="hover:text-[#0F6397]">CONTACT</Link>
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-[#0F6397] hover:bg-[#0d5580] text-white px-4 py-2 text-sm font-semibold">ORDER ONLINE</a>
              <MobileNav />
            </div>
          </div>
        </header>

        {/* Wacky Wing Wednesday Promo */}
        <section className={`relative overflow-hidden ${isWednesday ? 'bg-red-700' : 'bg-red-800'} text-white py-10 md:py-14`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent" />
          <div className="relative container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="inline-block bg-yellow-400 text-red-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {isWednesday ? "Today Only!" : "Every Wednesday"}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                  It’s Wacky Wing<br className="hidden md:block" /> Wednesday!
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-yellow-300 mb-4">
                  CHICKEN WINGS — $1 a wing!
                </p>
                <p className="text-lg mb-2">
                  Secret Hot Wing recipe straight from Buffalo, NY
                </p>
                <p className="text-base mb-4 text-yellow-100">
                  Plus BBQ, Old Bay, Garlic Parm & Hot Honey Sriracha
                </p>
                <div className="bg-yellow-400 text-red-900 font-bold text-lg px-4 py-2 rounded-full inline-block mb-4">
                  $1 a wing!
                </div>
                <p className="text-sm mb-6 opacity-90">
                  Minimum order of 6 · Limit 12 wings per person<br />
                  Great wings, a great price, and an even greater mission.
                </p>
                <a
                  href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 py-3 rounded-full text-lg transition-colors"
                >
                  Order Wings Online
                </a>
                <p className="text-xs mt-3 opacity-75">
                  Note: Order 6 or 12 through Toast. $1 pricing applies on Wednesdays.
                </p>
              </div>
              <div className="relative aspect-[3/4] max-w-xs mx-auto md:max-w-sm">
                <Image
                  src="/wacky-wing-wednesday.jpg"
                  alt="Wacky Wing Wednesday special — $1 chicken wings"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center text-white">
          <Image
            src="/tkc-hero-bg.jpeg"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 w-full">
            <div className="max-w-xl lg:max-w-2xl relative">
              <div 
                className="absolute -inset-8 md:-inset-12 -z-10 rounded-3xl"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 70%, transparent 100%)",
                  filter: "blur(8px)",
                }}
              />
              <div className="relative">
                <div className="w-12 h-0.5 bg-white mb-6 animate-fade-in" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left animate-fade-in-delay-1">
                  Welcome to<br />The Kahlert Café
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed text-left animate-fade-in-delay-2">
                  At The Kahlert Café, every purchase supports meaningful employment and opportunity for people with intellectual and developmental disabilities. We’re proud to serve great coffee and food with an even greater purpose - brewing confidence, connection, and a more inclusive community with every cup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
                  <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0F6397] px-6 py-3 font-semibold text-center hover:bg-stone-100">ORDER ONLINE</a>
                  <Link href="/about" className="border-2 border-white text-white px-6 py-3 font-semibold text-center hover:bg-white/10">OUR MISSION</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusive Café Open */}
        <section className="py-16 bg-stone-50 text-center">
          <FadeOnScroll>
            <div className="container mx-auto px-4">
              <div className="w-16 h-0.5 bg-[#0F6397] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F6397] mb-3">Inclusive Café Now Open in Sparks, MD</h2>
              <p className="text-lg text-stone-700 mb-8">Watch the Kahlert’s Café’s Exciting Ribbon Cutting Celebration</p>
              <VideoThumbnail />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0F6397] border border-[#0F6397] px-8 py-3 font-semibold hover:bg-blue-50">ORDER ONLINE</a>
                <Link href="/about" className="border-2 border-stone-400 text-stone-700 px-8 py-3 font-semibold hover:bg-stone-100">ABOUT US</Link>
              </div>
            </div>
          </FadeOnScroll>
        </section>

        {/* Farm-to-Able */}
        <section className="bg-stone-900 text-white py-16">
          <FadeOnScroll>
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-md lg:max-w-sm">
                <Image src="/tkc-home-food-1.jpg" alt="Farm-to-table food at The Kahlert Café" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-0.5 bg-white mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Unique Farm-to-Able Culinary Experience</h2>
                <p className="text-lg leading-relaxed mb-8">
                  Savor fresh, locally sourced meals, artisanal baked goods, and specialty coffee at The Kahlert Café. Our inclusive community café in Sparks, Maryland serves delicious food while creating meaningful job training and employment opportunities for adults with intellectual and developmental disabilities.
                </p>
                <Link href="/menu" className="inline-block border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-stone-900">BROWSE MENU</Link>
              </div>
            </div>
          </FadeOnScroll>
        </section>

        {/* Crafted with Love */}
        <section className="bg-stone-900 text-white py-16">
          <FadeOnScroll>
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-0.5 bg-white mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafted with Love and Purpose</h2>
                <p className="text-lg leading-relaxed mb-8">
                  More than just a café, The Kahlert Café is a welcoming space of inclusion and opportunity right here in Sparks, MD. Discover how we empower adults with disabilities through hands-on culinary training while building community one delicious dish at a time.
                </p>
                <Link href="/about" className="inline-block border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-stone-900">MORE ABOUT US</Link>
              </div>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-md lg:max-w-sm">
                <Image src="/tkc-home-food-2.jpg" alt="Team member preparing food at The Kahlert Café" fill className="object-cover" />
              </div>
            </div>
          </FadeOnScroll>
        </section>

        {/* Where Inclusion Comes to Life */}
        <section className="py-16 bg-white">
          <FadeOnScroll>
            <div className="container mx-auto px-4">
              <div className="w-16 h-0.5 bg-[#0F6397] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F6397] text-center mb-4">
                Where Inclusion<br className="sm:hidden" /> Comes to Life
              </h2>
              <p className="text-center mb-2"><a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="text-[#0F6397] font-semibold hover:underline">Follow Us on Facebook!</a></p>
              <p className="text-center text-stone-600 max-w-2xl mx-auto mb-10">
                Step inside and see the dedicated team, farm-to-table flavors, and genuine connections that make The Kahlert Café a place of purpose, growth, and belonging in Sparks, Maryland.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {fbImages.map((src, i) => (
                  <div key={i} className="relative aspect-square">
                    <Image src={src} alt={`The Kahlert Café team and community photo ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0F6397] text-white px-8 py-3 font-semibold hover:bg-[#0d5580]">FOLLOW THE KAHLERT CAFE</a>
              </div>
            </div>
          </FadeOnScroll>
        </section>

        {/* Final CTA */}
        <section className="relative py-20">
          <Image
            src="/tkc-cta-bg.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-black/40" />
          <FadeOnScroll>
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 flex justify-start">
              <div className="bg-white p-8 md:p-10 max-w-lg">
                <div className="w-12 h-0.5 bg-[#0F6397] mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6">An Inclusive Culinary Experience.<br />Visit us or order online.</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-[#0F6397] text-white px-6 py-3 font-semibold text-center hover:bg-[#0d5580]">ORDER ONLINE</a>
                  <Link href="/contact" className="border-2 border-stone-300 text-stone-700 px-6 py-3 font-semibold text-center hover:bg-stone-50">CONTACT</Link>
                </div>
              </div>
            </div>
          </FadeOnScroll>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-300">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              <div className="lg:col-span-1">
                <Link href="/">
                  <Image src="/tkc-header-logo.png" alt="The Kahlert Café" width={170} height={55} className="mb-4 brightness-0 invert" />
                </Link>
                <p className="text-stone-400 text-sm leading-relaxed">A Richcroft Farm-to-Able Enterprise</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Explore</h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <li><a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Order Online</a></li>
                  <li><Link href="/catering" className="hover:text-white transition-colors">Catering</Link></li>
                  <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Hours & Location</h3>
                <div className="text-sm space-y-2">
                  <p><span className="text-[#4da3d9]">Open:</span> Mon – Fri, 8AM – 3PM</p>
                  <p><span className="text-red-400">Closed:</span> Sat & Sun</p>
                  <p className="pt-2 text-stone-400">
                    53 Loveton Circle, Suite #112<br />
                    Sparks, MD 21152
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-14 pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs text-stone-500 text-center md:text-left">
                © 2026 The Kahlert Café – A Richcroft Farm-to-Able Enterprise. All Rights Reserved.
              </p>
              <div className="flex items-center gap-5">
                <a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
