import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import MobileNav from "@/components/MobileNav";
import { getToastMenu, type MenuSection } from "@/lib/toast";

export const metadata: Metadata = {
  title: "Menu",
  description: "View the full menu at The Kahlert Café in Sparks, MD. Fresh, farm-to-able meals including breakfast, lunch, bowls, salads, baked goods, sides, and drinks.",
  robots: { index: false, follow: false },
};

const menuSections = [
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      { name: "Western Breakfast Burrito w/ Tots", desc: "Egg, roasted red peppers, red onion, cheddar cheese blend in a 12\" tortilla wrap, served with tater tots", price: "$9.00" },
      { name: "Spinach & Swiss Egg Bites", desc: "Swiss Cheese & Spinach served with greens and balsamic vinaigrette", price: "$7.00" },
      { name: "Stuffed Biscuit Sandwich w/ Chive Egg Cheese & Tots", desc: "Chive, egg, and cheese filling in a biscuit served with tater tots", price: "$9.00" },
      { name: "Stuffed Biscuit Sandwich w/ Bacon Egg Cheese & Tots", desc: "Bacon, egg, and cheese filling in a biscuit served with tater tots", price: "$9.00" },
      { name: "Stuffed Biscuit Sandwich w/ Sausage Egg Cheese & Tots", desc: "Sausage, egg, and cheese filling in a biscuit served with tater tots", price: "$9.00" },
      { name: "Bagel", desc: "Your choice of bagel finished how you would like. We offer gluten free bagels and vegan spreads as well.", price: "$3.00" },
      { name: "Oatmeal", desc: "Oatmeal served with brown sugar, cranberries and pepitas", price: "$5.00" },
      { name: "Avocado Toast", desc: "Whole Grain, Avocado Spread, Heirloom Tomatoes, Pickled Onion, Arugula", price: "$7.00" },
      { name: "Golden Gordon Breakfast Bowl", desc: "Roasted sweet potatoes, brown rice, dried cranberries, pepitas on a bed of baby spinach", price: "$12.00" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    items: [
      { name: "Margherita Pizza", desc: "Shredded and fresh mozzarella on a rustic crust with fresh basil", price: "$14.00" },
      { name: "Gluten Free Pizza", desc: "Gluten free crust topped with marinara and shredded mozzarella, vegan option available", price: "$15.00" },
      { name: "Quesadilla", desc: "Freshly made to order Quesadilla. Choose one or all three of the toppings.", price: "$9.00" },
      { name: "Chicken Caesar Wrap", desc: "Romaine lettuce, shredded parmesan, chicken, caesar dressing in a wrap with your choice of side.", price: "$12.00" },
      { name: "Shrimp Salad", desc: "Shrimp in mayo Chesapeake seafood seasoning, red onion, celery.", price: "$10.00" },
      { name: "Mushroom Truffle Pizza", desc: "Mushrooms and shredded mozzarella on a rustic crust and finished with truffle oil & arugula", price: "$16.00" },
      { name: "Tomato, Spinach, Mozzarella Tart w/ Mixed Greens", desc: "Tomato, spinach, mozzarella in pastry served with mixed greens.", price: "$12.00" },
      { name: "Caprese Panini", desc: "Mozzarella, Tomato, Pesto on Herb Focaccia with Balsamic Glaze", price: "$12.00" },
      { name: "Lentil & Chickpea Soup", desc: "Vegan blend of spiced lentils and chickpeas", price: "$6.00" },
      { name: "French Onion Soup", desc: "Made to order and served in a bowl topped with gruyere and croutons.", price: "$8.00" },
      { name: "Mediterranean Tuna Salad on Rosemary Focaccia", desc: "Tuna salad, mayo, capers, kalamata olives, red onion", price: "$10.00" },
      { name: "Roseda Farms Hot Dog", desc: "Roseda farms hot dog topped your way.", price: "$6.00" },
      { name: "Cheese Steak Grilled Cheese", desc: "Steak, onions and peppers with melted cheese on sourdough bread", price: "$9.00" },
      { name: "Shrimp Salad Sandwich", desc: "Shrimp salad (mayo, Chesapeake seafood seasoning, red onion, celery) on brioche", price: "$15.00" },
      { name: "Chicken Salad Sandwich", desc: "Chicken Salad (tarragon white meat chicken, mayo, celery) on croissant.", price: "$11.00" },
      { name: "Falafel Pita", desc: "Falafel, greens, roasted red pepper, red onion, hummus, on pita.", price: "$10.00" },
      { name: "Hot Honey Chicken Sandwich", desc: "Hot Honey Chicken Sandwich on Ciabatta with Hot Honey & Pepperjack Cheese", price: "$11.00" },
      { name: "Turkey w/ Avocado Mayo", desc: "Turkey, avocado mayo, white cheddar, lettuce, tomato on whole grain toasted to perfection", price: "$10.00" },
      { name: "Ham & Brie", desc: "Ham, brie, apples, arugula and apricot dijon on Kneads hoagie roll", price: "$13.00" },
      { name: "Kahlert Crab Club", desc: "Crabcake, Bacon, Tomato, Arugula, & Caper Aioli on Ciabatta", price: "$18.00" },
      { name: "Ham & Brie on Baguette", desc: "Ham and brie with apricot dijon on a fresh baguette", price: "$11.00" },
      { name: "Wings", desc: "Crispy wings tossed in your choice of sauce, served with celery sticks, blue cheese or ranch; gluten free option available", price: "$12.00" },
      { name: "Grilled Cheese & Tomato Bisque", desc: "Classic grilled cheese served alongside creamy tomato bisque", price: "$12.00" },
      { name: "Meatball Sub", desc: "Hearty meatballs with fresh marinara and mozzarella on a Kneads Bakery fresh baked bread, toasted to perfection.", price: "$14.00" },
      { name: "Chili", desc: "Beef and Bean chili, garnished with shredded cheddar, jalapeno, & sour cream", price: "$8.00" },
    ],
  },
  {
    id: "bowls",
    title: "Bowls",
    items: [
      { name: "Seafood Mac & Cheese Bowl", desc: "White cheddar with Crabmeat and Shrimp seasoned in Chesapeake spice seafood blend", price: "$18.00" },
      { name: "Buffalo Chicken Mac & Cheese Bowl", desc: "White cheddar cheese sauce tossed with crispy chicken in buffalo sauce", price: "$12.00" },
      { name: "Acai Bowl", desc: "Acai berry puree topped with local granola, and fresh fruit medley", price: "$13.00" },
      { name: "Mediterranean Bowl", desc: "Falafel, roasted red peppers, cucumber, kalamata olives, red onion, tzatziki and hummus", price: "$15.00" },
      { name: "Tuna Poke Bowl", desc: "Seared Tuna with Rice, Edamame, Seaweed Salad, Cucumbers, Pickled Onion with a Sriracha Mayo", price: "$16.00" },
      { name: "Golden Gordon Breakfast Bowl", desc: "Roasted sweet potatoes, brown rice, dried cranberries, pepitas on a bed of baby spinach", price: "$12.00" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Greek Salad", desc: "Romaine, pepperoncini, cucumber, kalamata olives, tomatoes, feta cheese and greek vinaigrette", price: "$10.00" },
      { name: "The Gordon Green Goddess", desc: "Mixed greens, shaved carrot, cucumber, heirloom tomato with choice of dressing", price: "$8.00" },
      { name: "Richcroft Caesar", desc: "Romaine, croutons, shaved parmesan, caesar dressing", price: "$10.00" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Mozzarella Sticks w/ Marinara", desc: "Mozzarella Sticks served with a side of marinara", price: "$10.00" },
      { name: "Chicken Salad", desc: "White meat chicken in mayo, tarragon and celery.", price: "$7.00" },
      { name: "Shrimp Salad", desc: "Shrimp in mayo Chesapeake seafood seasoning, red onion, celery.", price: "$10.00" },
      { name: "Tater Tots", desc: "Tater tots turbo fried for crispness", price: "$4.00" },
      { name: "Cole Slaw", desc: "House-made classic creamy slaw", price: "$4.00" },
      { name: "Greek Tortellini Pasta Salad", desc: "Tortellini, tomatoes, red onion, cucumbers in a greek vinaigrette", price: "$4.00" },
      { name: "Chips", desc: "Crispy potato chips", price: "$2.00" },
      { name: "Ridge Cut Fries", desc: "Ridge cut potatoes turbo fried for crispness", price: "$4.00" },
      { name: "Potato Salad", desc: "House-made classic potato salad with celery, onion, mayo, mustard, and celery seed", price: "$4.00" },
      { name: "Fresh Cut Fruit", desc: "Daily seasonal selection", price: "$4.00" },
      { name: "Charcuterie Plate", desc: "Cheese wedges, sliced meats, nuts, olives, and gourmet crackers", price: "$13.00" },
      { name: "Ackerman's Artisan Hummus Board", desc: "House-made hummus served with fresh vegetables and pita", price: "$9.00" },
      { name: "Mediterranean Tuna Salad", desc: "Tuna salad with olives, capers, and red onion", price: "$7.00" },
      { name: "Sweet Potato Fries", desc: "Crispy sweet potato fries", price: "$3.00" },
    ],
  },
  {
    id: "baked",
    title: "Baked Goods",
    items: [
      { name: "Apple Cider Doughnut Holes", desc: "Warm apple cider doughnut holes", price: "$4.00" },
      { name: "Macaron", desc: "Delicate French macaron", price: "$3.25" },
      { name: "Cinnamon Roll", desc: "Soft cinnamon roll with sweet glaze", price: "$4.00" },
      { name: "Stroopwafel", desc: "Crispy caramel-filled stroopwafel", price: "$4.00" },
      { name: "Mixed Berry Tart", desc: "Fresh mixed berry tart", price: "$6.00" },
      { name: "Coffee Cake", desc: "Classic coffee cake", price: "$4.00" },
      { name: "Croissant", desc: "Fresh buttery croissants daily", price: "$6.00" },
      { name: "Gluten Free Chocolate Tarts", desc: "Mini chocolate tarts", price: "$2.75" },
      { name: "Muffins", desc: "Fresh muffins with three flavors daily. Bee Kind Granola, vegan and gluten free options available", price: "$4.00" },
      { name: "Vegan Tartlets", desc: "Mini vegan tartlets", price: "$2.75" },
      { name: "Granola Bars", desc: "Bee Kind Granola bars, locally made", price: "$3.50" },
      { name: "Granola Bag", desc: "Bee Kind Granola, locally made", price: "$15.00" },
      { name: "Stuffed Banana Tart w/ Walnuts", desc: "Pastry stuffed with banana and walnuts in a sweet cream", price: "$6.00" },
      { name: "Assorted Doughnuts", desc: "Try one of the 6 flavors of the week", price: "$6.00" },
    ],
  },
  {
    id: "drinks",
    title: "Coffee & Drinks",
    items: [
      { name: "Richcroft Chill", desc: "Two shots of espresso over ice with vanilla and brown sugar syrups. Add your milk of choice, topped with cold foam and a caramel drizzle.", price: "$8.00" },
      { name: "Latte", desc: "Espresso with steamed milk", price: "$5.00+" },
      { name: "Mocha", desc: "Chocolate with espresso, served hot or iced with your choice of milk.", price: "$6.00+" },
      { name: "Cappuccino", desc: "Espresso with equal parts steamed milk and foam", price: "$5.00+" },
      { name: "Self Serve Coffee", desc: "Fresh brewed coffee, self-serve", price: "$3.00+" },
      { name: "Espresso", desc: "Single or double shot of espresso", price: "$4.00+" },
      { name: "Frappuccino", desc: "This blended coffee drink comes in a 16 oz size only.", price: "$6.00" },
      { name: "Red Eye", desc: "12 oz is 1 shot of espresso in coffee, 16 oz is 2 shots in coffee.", price: "$5.00+" },
      { name: "Affogato", desc: "Espresso poured over vanilla ice cream", price: "$6.00" },
      { name: "Flat White", desc: "Espresso with velvety steamed milk", price: "$5.00+" },
      { name: "Cold Brew", desc: "Smooth slow-steeped cold brew coffee", price: "$6.00" },
      { name: "Steamer", desc: "Steamed milk with flavor of your choice", price: "$4.00+" },
      { name: "Hot Chocolate", desc: "Rich hot chocolate", price: "$3.00+" },
      { name: "Self Serve Tea", desc: "Hot tea, self-serve", price: "$3.00+" },
      { name: "Iced Tea", desc: "Freshly brewed iced tea", price: "$3.00" },
      { name: "Chai Latte", desc: "Spiced chai with steamed milk", price: "$5.00+" },
      { name: "Ground Coffee Bags", desc: "Take-home bags of our house coffee", price: "$15.00" },
      { name: "Be More Summer Lemonade", desc: "Mix of blood orange and raspberry.", price: "$6.00" },
      { name: "Classic Lemonade", desc: "Fresh classic lemonade", price: "$3.00" },
      { name: "Flavored Lemonade", desc: "Lemonade with your choice of flavor", price: "$5.00" },
      { name: "Flavored Refresher", desc: "Refreshing flavored beverage", price: "$5.00" },
      { name: "Inclusion Punch", desc: "Raspberry and lavender lemonade topped with club soda.", price: "$6.00" },
      { name: "Peach Mango", desc: "Peach mango refresher", price: "$6.00" },
      { name: "Matthew's Shirley Temple", desc: "Sprite, grenadine, club soda with a cherry on top.", price: "$6.00" },
      { name: "Soda", desc: "Fountain soda", price: "$3.00" },
      { name: "Monster", desc: "Monster energy drink", price: "$3.00" },
      { name: "Water", desc: "Bottled water", price: "$3.00" },
      { name: "Sparkling Water", desc: "Sparkling water", price: "$3.00" },
      { name: "Tractor Beverages", desc: "Organic real fruit beverages", price: "$4.00" },
      { name: "Juice", desc: "Fresh juice", price: "$5.00" },
      { name: "Apple Cider Cold Brew", desc: "Housemade Cold Brew coffee with fresh local apple cider, pumpkin spice cold foam, caramel drizzle & an apple cider donut hole!", price: "$7.50" },
      { name: "Smores Mocha", desc: "Hot or cold. Chocolate, coffee, toasted marshmallow flavor with your choice of milk. Topped with toasted marshmallow fluff, graham cracker crumble, and a toasted marshmallow.", price: "$7.50" },
      { name: "Pumpkin Cold Foam Chai Latte", desc: "Classic chai with a fall twist, topped with pumpkin spice cold foam.", price: "$7.50" },
      { name: "White Chocolate Cappuccino", desc: "A cappuccino with white chocolate.", price: "$6.00+" },
    ],
  },
];

export default async function MenuPage() {
  const toastSections = await getToastMenu();
  const sections: MenuSection[] = toastSections && toastSections.length ? toastSections : menuSections;

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
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-12 h-0.5 bg-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Menu</h1>
          <p className="text-lg text-stone-200">Fresh, farm-to-able meals<br />made with care.</p>
          <Link href="/catering" className="inline-block mt-8 border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white/10">
            VIEW CATERING MENU
          </Link>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-[100px] z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 relative">
          <div className="flex gap-1 overflow-x-auto py-3 pr-14 text-sm font-medium scrollbar-none">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#0F6397]"
              >
                {section.title}
              </a>
            ))}
            <Link href="/catering" className="whitespace-nowrap px-4 py-2 rounded-full border border-[#0F6397] text-[#0F6397] hover:bg-[#0F6397] hover:text-white">
              Catering
            </Link>
          </div>
          {/* Mobile scroll hint */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none lg:hidden" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 lg:hidden pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-[220px]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6 pb-2 border-b border-stone-200">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.items.map((item) => (
                <div key={item.name} className="flex justify-between gap-4 pb-6 border-b border-stone-100 last:border-0">
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900">{item.name}</h3>
                    {item.desc && <p className="text-sm text-stone-600 mt-1">{item.desc}</p>}
                  </div>
                  <div className="font-medium text-stone-800 whitespace-nowrap">{item.price}</div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-8">
          <Link href="/catering" className="inline-block border-2 border-[#0F6397] text-[#0F6397] px-6 py-3 font-semibold hover:bg-[#0F6397] hover:text-white">
            View Catering Menu
          </Link>
        </div>
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
