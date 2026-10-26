import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import MobileNav from "@/components/MobileNav";
import FadeOnScroll from "@/components/FadeOnScroll";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about The Kahlert Café — an inclusive farm-to-able community café in Sparks, MD providing employment and training for adults with intellectual and developmental disabilities.",
};

const teamMembers = [
  { name: "Anthony", img: "/Anthony%20(1).JPG" },
  { name: "Cameron", img: "/Cameron%20(1).JPG" },
  { name: "Carina", img: "/Carina%20(1).JPG" },
  { name: "Donna", img: "/Donna%20(1).JPG" },
  { name: "Emily", img: "/Emily%20(1).JPG" },
  { name: "Isabel", img: "/Isabel%20(1).JPG" },
  { name: "Karlin", img: "/Karlin%20(1).JPG" },
  { name: "Kelsey", img: "/Kelsey%20(1).JPG" },
  { name: "Lisa", img: "/Lisa%20(1).JPG" },
  { name: "Liza", img: "/Liza%20(1).JPG" },
  { name: "Matthew", img: "/Matthew%20(1).JPG" },
  { name: "Nicole", img: "/Nicole%20(1).JPG" },
  { name: "Susie", img: "/Susie%20(1).JPG" },
  { name: "Tim", img: "/Tim%20(1).JPG" },
  { name: "Timothy", img: "/Timothy%20(1).JPG" },
];

const donateUrl = "https://secure.givelively.org/donate/richcroft-inc/the-kahlert-cafe-and-farm-to-able-food-truck";

export default function AboutPage() {
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

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center text-white py-16 md:py-20 lg:py-0" style={{backgroundImage: "url(/tkc-hero-bg.jpeg)", backgroundSize: "cover", backgroundPosition: "center right"}}>
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
            <div className="relative py-6 md:py-8">
              <div className="w-12 h-0.5 bg-white mb-6 animate-fade-in" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left animate-fade-in-delay-1">
                About The<br />Kahlert Café
              </h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-left animate-fade-in-delay-2">
                At The Kahlert Café, it’s all about <strong>Coffee and Inclusion</strong>. Our Mission – The Kahlert Café is where coffee, community, and inclusion meet. We provide paid training and employment opportunities that help people with intellectual and developmental disabilities gain valuable workplace skills and confidence. Every meal served and every cup poured is a celebration of ability, opportunity, and belonging.
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-left animate-fade-in-delay-2">
                Whether you’re stopping by for a quick pick-me-up or taking your favorite food to go, every purchase supports meaningful employment and opportunity for people with intellectual and developmental disabilities.
              </p>
              <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-stone-900 transition-colors animate-fade-in-delay-3">
                HOW TO DONATE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-stone-50">
        <FadeOnScroll>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="w-16 h-0.5 bg-[#0F6397] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F6397] text-center mb-16">Meet Our Team</h2>

            {/* Barbara */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div className="order-2 md:order-1">
                <p className="text-stone-700 leading-relaxed text-base md:text-lg">
                  For nearly 40 years, Café Training Manager, Barbara Hineline thrived in the energy of the restaurant business, learning that the heart of any great experience is genuine human connection and a watchful eye for the details that matter. This past year, Barbara has pivoted that passion toward a new mission: supporting adults with disabilities. At The Kahlert Café, Barbara leads a remarkable team of staff with intellectual and developmental disabilities who are the true heart of everything we do. Each team member brings their own talents, perspectives, and passion to the café, creating an environment filled with pride, purpose, and possibility. Together, this team is redefining what inclusion looks like - one cup of coffee, one connection, and one opportunity at a time.
                </p>
              </div>
              <div className="order-1 md:order-2 text-center">
                <div className="relative w-56 h-72 md:w-64 md:h-80 mx-auto mb-4">
                  <Image
                    src="/Headshot%20Barbara%20Hineline.JPG"
                    alt="Barbara Hineline"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, 256px"
                    quality={70}
                    priority
                  />
                </div>
                <p className="font-semibold text-[#0F6397] text-lg md:text-xl">Barbara Hineline</p>
                <p className="text-sm md:text-base text-stone-600">Café Training Manager</p>
              </div>
            </div>

            {/* Brendan */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div className="text-center">
                <div className="relative w-48 h-64 md:w-56 md:h-72 mx-auto mb-4">
                  <Image
                    src="/Brendan%20headshot%20(1).JPG"
                    alt="Brendan Bangay"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 224px"
                    quality={70}
                    priority
                  />
                </div>
                <p className="font-semibold text-[#0F6397] text-base md:text-lg">Brendan Bangay</p>
                <p className="text-sm text-stone-600">Asst. Café Manager</p>
              </div>
              <div>
                <p className="text-stone-700 leading-relaxed">
                  Brendan Bangay serves as Assistant Café Manager at The Kahlert Café, bringing previous retail management experience and a Bachelor of Science in Psychology from Towson University. Passionate about supporting people with intellectual and developmental disabilities, Brendan enjoys helping team members build vocational skills and confidence. He values the opportunity to learn something new every day and takes pride in fostering an inclusive and supportive workplace.
                </p>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative aspect-[3/4] mb-3 bg-stone-200">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      quality={65}
                    />
                  </div>
                  <p className="font-medium text-[#0F6397]">{member.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0F6397] text-white px-8 py-3 font-semibold hover:bg-[#0d5580]">
                HOW TO DONATE
              </a>
            </div>
          </div>
        </FadeOnScroll>
      </section>

      {/* With Gratitude */}
      <section className="py-16 bg-white">
        <FadeOnScroll>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-10">
              <div className="w-12 h-0.5 bg-[#0F6397] mb-4" />
              <h2 className="text-3xl font-bold text-[#0F6397]">With Gratitude</h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/The%20Kahlert%20Foundation%20Check%20Presentation%20(1).jpg" alt="The Kahlert Foundation" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">The Kahlert Foundation</p>
              </div>
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/The%20Campbell%20Foundation%20Logo%20(1).png" alt="The Campbell Foundation" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">The Campbell Foundation</p>
              </div>
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/Gordon%20Family%20photo%20(1).jpg" alt="The Gordan Family" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">The Gordan Family</p>
              </div>
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/IMG_0114%20(1).JPG" alt="First Financial Federal Credit Union" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">First Financial Federal Credit Union</p>
              </div>
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/Catalyst-NewLogo_high%20res%20(1).png" alt="Catalyst Communications" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">Catalyst Communications</p>
              </div>
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/Strategic%20Factory%20check%20presentation%20(1).jpg" alt="Strategic Factory" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">Strategic Factory</p>
              </div>
              <div className="border border-stone-200 p-4 text-center">
                <div className="relative aspect-video mb-3 bg-stone-100"><Image src="/Harvest%20Logo%20(1).jpg" alt="Harvest Investment Consultants" fill className="object-contain" sizes="(max-width: 768px) 50vw, 33vw" quality={70} /></div>
                <p className="text-sm font-medium">Harvest Investment Consultants</p>
              </div>
              <div className="border border-stone-200 p-4 text-center col-span-1 sm:col-span-2 md:col-span-3">
                <p className="text-sm font-medium text-[#0F6397] mb-3">Additional Supporters</p>
                <div className="text-sm text-stone-600 space-y-1.5">
                  <p>Richard Hook • Donna Cossentino • The Christmas Project – Bob Hodges</p>
                  <p>Michael and Amy Lopez • Teresa Christofferson • Vicki Hineline</p>
                  <p>Robert Starr • Jennifer Fritsch • Dawn Welsh • David Crowley</p>
                  <p>Kathleen Thurman • Rita Scharmann</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0F6397] text-white px-8 py-3 font-semibold hover:bg-[#0d5580]">
                HOW TO DONATE
              </a>
            </div>
          </div>
        </FadeOnScroll>
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
