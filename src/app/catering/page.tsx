import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import MobileNav from "@/components/MobileNav";
import FadeOnScroll from "@/components/FadeOnScroll";
import CateringInquiryForm from "@/components/CateringInquiryForm";

export const metadata: Metadata = {
  title: "Catering",
  description: "Catering to go from The Kahlert Café in Sparks, MD. Breakfast, lunch, sandwich trays, platters, salads, hors d’oeuvres, and more for your event.",
  robots: { index: false, follow: false },
};

export default function CateringPage() {
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
      <section className="relative py-16 md:py-20 text-white" style={{backgroundImage: "url(/tkc-cta-bg.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <div className="w-12 h-0.5 bg-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Catering To Go</h1>
          <p className="text-lg text-stone-200">Fresh, farm-to-able catering<br />for your next gathering.</p>
          <a href="#inquiry" className="inline-block mt-8 bg-white text-[#0F6397] px-6 py-3 font-semibold hover:bg-stone-100">
            INQUIRE
          </a>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-[100px] z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 relative">
          <div className="flex gap-1 overflow-x-auto py-3 pr-14 text-sm font-medium scrollbar-none">
            <a href="#breakfast" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Breakfast</a>
            <a href="#lunch" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Lunch</a>
            <a href="#trays" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Trays & Boxes</a>
            <a href="#platters" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Platters</a>
            <a href="#salads" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Salads</a>
            <a href="#hors" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Hors d’oeuvres</a>
            <a href="#sides" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Sides</a>
            <a href="#desserts" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Desserts</a>
            <a href="#ordering" className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]">Ordering</a>
            <a href="#inquiry" className="whitespace-nowrap px-4 py-2 rounded-full border border-[#0F6397] text-[#0F6397] hover:bg-[#0F6397] hover:text-white">Inquire</a>
          </div>
          {/* Mobile scroll hint */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none lg:hidden" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 lg:hidden pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <FadeOnScroll>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
            Minimum order of 10 • 48-hour notice required • Custom orders available with 72-hour notice. Contact Barbara Hineline at <a href="tel:4106891016" className="text-[#0F6397] font-medium hover:underline">(410) 689-1016</a> or use the inquiry form below.
          </p>
        </FadeOnScroll>

        {/* Breakfast */}
        <section id="breakfast" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Breakfast</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Butter, Chocolate & Almond Croissants</h3><span className="font-medium whitespace-nowrap">$6.50 / person</span></div>
              <p className="text-sm text-stone-600 mt-1">Butter & Jam</p>
            </div>
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Bagels & Smear</h3><span className="font-medium whitespace-nowrap">$4.00 / person</span></div>
              <p className="text-sm text-stone-600 mt-1">Assorted Bagels with Cream Cheese, Butter & Jam</p>
            </div>
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Stuffed Breakfast Biscuits</h3><span className="font-medium whitespace-nowrap">$6.00 / person</span></div>
              <ul className="text-sm text-stone-600 mt-1 list-disc list-inside">
                <li>Bacon, Egg & Cheese</li>
                <li>Sausage, Egg & Cheese</li>
                <li>Egg, Cheddar & Spring Onion</li>
              </ul>
              <p className="text-sm text-stone-600 mt-2">Add Fruit or Tots • $4.00</p>
            </div>
            <div>
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Pfefferkorn Coffee Box</h3><span className="font-medium whitespace-nowrap">$30.00</span></div>
              <p className="text-sm text-stone-600 mt-1">Regular • Decaf • Hazelnut</p>
            </div>
          </div>
        </section>

        {/* Lunch */}
        <section id="lunch" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Lunch</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Entrée Selection</h3><span className="font-medium whitespace-nowrap">$20.00 / person</span></div>
              <p className="text-sm text-stone-600 mt-1">Choice of: Beef Brisket • Pulled Pork • Crabby Mac & Cheese</p>
              <p className="text-sm text-stone-600">Served with Green Goddess House Salad & Slider Rolls</p>
            </div>
            <div className="pb-6 border-b border-stone-100">
              <h3 className="font-semibold">Tuna Poke Bowl</h3>
              <p className="text-sm text-stone-600 mt-1">Brown Rice, Seared Tuna, Edamame, Seaweed Salad, Cucumbers, Pickled Red Onion & Sriracha Mayo</p>
            </div>
            <div className="pb-6 border-b border-stone-100">
              <h3 className="font-semibold">Mediterranean Bowl</h3>
              <p className="text-sm text-stone-600 mt-1">Mixed Greens, Roasted Red Peppers, Roasted Onion, Roasted Tomatoes, Falafel, Hummus & Tzatziki</p>
              <p className="text-sm text-stone-600 mt-1">Add Chicken +$4 • Add Shrimp +$6</p>
            </div>
            <div>
              <h3 className="font-semibold">Crab Dip with Soft Pretzel Bites</h3>
              <p className="text-sm text-stone-600 mt-1">Housemade Crab Dip with Fresh Baked Soft Pretzel Bites</p>
            </div>
          </div>
        </section>

        {/* Sandwich Trays */}
        <section id="trays" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-2">Sandwich Trays & Boxed Lunches</h2>
          <p className="text-stone-600 mb-6">$22.00 per person • Includes bottled water, selected side dish & dessert</p>
          <ul className="space-y-3 text-sm text-stone-700">
            <li>• Oven Roasted Turkey with Guacamole Mayo, White Cheddar, Mixed Greens & Tomato on Whole Grain</li>
            <li>• Black Forest Ham, Brie, Apples & Arugula on Baguette with Apricot Dijon</li>
            <li>• Rare Roast Beef with Sharp White Cheddar on Sourdough with Creamy Horseradish, Mixed Greens and Tomato</li>
            <li>• Tarragon Chicken Salad on Croissant</li>
            <li>• Mediterranean Tuna Salad on Rosemary Focaccia (olives, capers, red onion, mayo)</li>
            <li>• Open Faced Shrimp Salad on Brioche Roll</li>
            <li>• Grilled Chicken Wrap with Plum Tomatoes, Mixed Greens & Pesto Mayonnaise</li>
            <li>• Mozzarella & Plum Tomatoes with Balsamic on Rosemary Focaccia</li>
            <li>• Falafel Pita with Cucumbers, Red Onion, Roasted Peppers, Greens & Hummus</li>
            <li>• The Campbell Club with Roast Turkey, Black Forest Ham, Bacon, Muenster Cheese, Mixed Greens, Tomato & Avocado</li>
          </ul>
        </section>

        {/* Platters */}
        <section id="platters" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Platters</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Assorted Skewers with Dips</h3><span className="font-medium whitespace-nowrap">$180 • Serves 10</span></div>
              <p className="text-sm text-stone-600 mt-2">Beef Satay (GF) • Chicken Sesame • Nashville Hot Chicken • Pork Belly (GF) • Coconut Shrimp • Roasted Root Vegetable (GF, VG)</p>
            </div>
            <div>
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Local Sourced Cheese Platter with Kneads Fresh Baguette</h3><span className="font-medium whitespace-nowrap">$180 • Serves 10</span></div>
              <p className="text-sm text-stone-600 mt-1">Whispering Breeze Havarti • Garlic & Chive • Italian • Cheddar</p>
              <p className="text-sm text-stone-600 mt-1">Add Prosciutto & Assorted Salami • $260.00</p>
            </div>
          </div>
        </section>

        {/* Salads */}
        <section id="salads" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Salads</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">The Richcroft Caesar</h3><span className="font-medium whitespace-nowrap">$12.50 / person</span></div>
              <p className="text-sm text-stone-600 mt-1">Crisp Romaine Lettuce Tossed with Classic Caesar Dressing</p>
              <p className="text-sm text-stone-600 mt-1">Add: Grilled Chicken +$4 • Grilled Shrimp or Grilled Salmon +$6 per person</p>
            </div>
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Super Foods Salad</h3><span className="font-medium whitespace-nowrap">$12.50 / person</span></div>
              <p className="text-sm text-stone-600 mt-1">Mixed Greens Topped with Antioxidant-Rich Dried Fruits, Berries & Nuts Tossed with a Light Raspberry Vinaigrette</p>
            </div>
            <div>
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Gordon Green Goddess</h3><span className="font-medium whitespace-nowrap">$8 / person</span></div>
              <p className="text-sm text-stone-600 mt-1">Mixed Greens Topped with shaved carrots, tri color pepper strips, heirloom cherry tomatoes, cucumber, & red onion with Balsamic Vinaigrette</p>
              <p className="text-sm text-stone-600 mt-1">Add: Grilled Chicken +$4 • Grilled Shrimp or Grilled Salmon +$6 per person</p>
            </div>
          </div>
        </section>

        {/* Hors d'oeuvres */}
        <section id="hors" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Assorted Hors d’oeuvres</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-stone-100">
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Choose 4</h3><span className="font-medium whitespace-nowrap">$200 • Serves 10</span></div>
              <ul className="text-sm text-stone-600 mt-2 space-y-1 list-disc list-inside">
                <li>Coney Island Franks with Sauerkraut & Mustard</li>
                <li>Mini Cubans</li>
                <li>Fig & Goat Cheese Flatbread (Veg)</li>
                <li>Mushrooms with Boursin & Spinach (Veg)</li>
                <li>Mushrooms with Italian Sausage & Fresh Herbs</li>
                <li>Coconut Shrimp</li>
                <li>Miso Glazed Shrimp & Spring Onion (GF)</li>
                <li>Scallop Wrapped in Bacon (GF)</li>
                <li>Lamb Gyro in Mini Pita</li>
                <li>Antipasto Kebab</li>
                <li>Roasted Vegetable Kebab (GF, VG)</li>
                <li>Beef Tenderloin with Peppers & Red Onion (GF)</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between gap-4"><h3 className="font-semibold">Crab Cake Platter</h3><span className="font-medium whitespace-nowrap">$300 • Serves 10</span></div>
              <p className="text-sm text-stone-600 mt-1">Maryland Style Crab Cakes with Tartar & Cocktail Sauce</p>
            </div>
          </div>
        </section>

        {/* Sides */}
        <section id="sides" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Side Dishes</h2>
          <p className="text-stone-600 mb-4">Additional Sides Available • $4.00 per person</p>
          <ul className="space-y-2 text-sm text-stone-700 list-disc list-inside">
            <li>Fresh Fruit Salad</li>
            <li>White Bean, Tomato & Rosemary Salad</li>
            <li>Tomatoes, Cucumbers, Feta & Olives</li>
            <li>Potato Salad</li>
            <li>Cole Slaw</li>
          </ul>
        </section>

        {/* Desserts */}
        <section id="desserts" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Dessert Selection</h2>
          <p className="text-stone-600 mb-4">Additional Desserts Available • $4.00 per person</p>
          <ul className="space-y-2 text-sm text-stone-700 list-disc list-inside">
            <li>Dessert Shooters</li>
            <li>French Macaroons (GF)</li>
            <li>Raspberry & Passion Raw Cake (GF, VG) (+ $2.00)</li>
            <li>Assorted Cookies</li>
          </ul>
        </section>

        {/* Ordering Info */}
        <section id="ordering" className="mb-16 scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Ordering Information</h2>
          <div className="space-y-4 text-stone-700">
            <p><strong>Barbara Hineline</strong></p>
            <p>☎ <a href="tel:4106891016" className="text-[#0F6397] hover:underline">410-689-1016</a></p>
            <p>✉ <a href="mailto:barbarah@richcroft.org" className="text-[#0F6397] hover:underline">barbarah@richcroft.org</a></p>

            <h3 className="font-semibold text-stone-900 mt-6">Catering Policies</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Minimum Order of 10</li>
              <li>48-Hour Notice Required</li>
              <li>Custom Orders Can Be Accommodated with 72-Hour Notice</li>
              <li>Pick-Up Available</li>
              <li>We Accept All Major Credit Cards</li>
              <li>Wheat & Gluten-Free and Vegetarian Options Available</li>
            </ul>

            <p className="text-center text-stone-600 mt-8 italic">✦ Cheers to Coffee & Inclusion ✦</p>
            <p className="text-sm text-stone-500 mt-2">
              (The Kahlert Café is proudly tip-free. Donations are appreciated and directly support Richcroft’s programs for people with intellectual and developmental disabilities. Thank you for your support!)
            </p>
            <p className="text-xs text-stone-400 mt-4">*The Kahlert Café gratefully uses spices generously donated by The Chesapeake Spice Co.</p>
          </div>
        </section>

        {/* Catering Inquiry Form */}
        <section id="inquiry" className="scroll-mt-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">Catering Inquiry</h2>
          <div className="bg-white p-6 md:p-8 border border-stone-200 shadow-sm">
            <CateringInquiryForm />
          </div>
        </section>
      </div>

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
                <p className="pt-2 text-stone-400">53 Loveton Circle, Suite #112<br />Sparks, MD 21152</p>
              </div>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-stone-500 text-center md:text-left">© 2026 The Kahlert Café – A Richcroft Farm-to-Able Enterprise. All Rights Reserved.</p>
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
