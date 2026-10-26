import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import MobileNav from "@/components/MobileNav";
import FadeOnScroll from "@/components/FadeOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Kahlert Café in Sparks, MD. Inquire about catering, visit us, or send a message. Open Monday–Friday 8AM–3PM.",
};

export default function ContactPage() {
  return (
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

      {/* Hero / Contact Intro */}
      <section className="relative py-20 md:py-28 text-white" style={{backgroundImage: "url(/tkc-cta-bg.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <div className="relative inline-block max-w-2xl mx-auto px-4 py-8">
            <div
              className="absolute -inset-10 md:-inset-16 -z-10 rounded-3xl"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 75%, transparent 100%)",
                filter: "blur(12px)",
              }}
            />
            <div className="relative">
              <div className="w-12 h-0.5 bg-white mx-auto mb-6 animate-fade-in" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-delay-1">
                Reach Out to<br className="hidden md:inline" /> The Kahlert Café
              </h1>
              <p className="text-lg md:text-xl text-stone-100 animate-fade-in-delay-2">
                Submit the form below and a member of our team will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form — first on mobile, right on desktop */}
            <FadeOnScroll className="order-1 lg:order-2 lg:col-span-3">
              <div className="bg-white p-8 md:p-10 shadow-sm border border-stone-200">
                <h2 className="text-xl font-semibold text-stone-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </FadeOnScroll>

            {/* Catering + Visit info — second on mobile, left on desktop */}
            <FadeOnScroll className="order-2 lg:order-1 lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F6397] mb-3">We Offer Catering To Go!</h2>
                  <p className="text-stone-700 mb-4">
                    For catering orders, please use our dedicated catering inquiry form or contact Barbara Hineline at
                  </p>
                  <a href="tel:4106891016" className="text-[#0F6397] font-semibold text-lg hover:underline">(410) 689-1016</a>
                  <div className="mt-5">
                    <Link href="/catering#inquiry" className="inline-block border-2 border-[#0F6397] text-[#0F6397] px-5 py-2 text-sm font-semibold hover:bg-[#0F6397] hover:text-white transition-colors">
                      Catering Inquiry Form
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900 mb-3">Catering Policies</h3>
                  <ul className="text-sm text-stone-700 space-y-2 list-disc list-inside">
                    <li>Minimum Order of 10</li>
                    <li>48-Hour Notice Required</li>
                    <li>Custom Orders Can Be Accommodated with 72-Hour Notice</li>
                    <li>Pick-Up Available</li>
                    <li>We Accept All Major Credit Cards</li>
                    <li>Wheat & Gluten-Free and Vegetarian Options Available</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <h3 className="font-semibold text-stone-900 mb-2">Visit Us</h3>
                  <p className="text-stone-700 text-sm">
                    53 Loveton Circle, Suite #112<br />
                    Sparks, MD 21152
                  </p>
                  <p className="text-sm mt-2"><span className="text-[#0F6397]">Open:</span> Mon – Fri, 8AM – 3PM</p>
                  <p className="text-sm"><span className="text-red-600">Closed:</span> Sat & Sun</p>
                </div>
              </div>
            </FadeOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div>
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
  );
}
