"use client";

import { useEffect, useState } from "react";

export default function WackyWingBanner({ variant = "full" }: { variant?: "full" | "menu" }) {
  const [isWednesday, setIsWednesday] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsWednesday(new Date().getDay() === 3);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Full homepage banner only on Wednesdays
  if (variant === "full" && !isWednesday) {
    return null;
  }

  if (variant === "menu") {
    return (
      <div className="bg-red-700 text-white py-3 px-4 text-center">
        <div className="container mx-auto">
          <span className="inline-block bg-yellow-400 text-red-900 text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mr-2">
            {isWednesday ? "Today Only!" : "Coming Wednesday"}
          </span>
          <span className="font-semibold">
            {isWednesday
              ? "It’s Wacky Wing Wednesday! $1 wings (min 6, limit 12)"
              : "Wacky Wing Wednesday every Wednesday — $1 wings"}
          </span>
          <a
            href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 underline hover:text-yellow-300 text-sm"
          >
            Order now
          </a>
        </div>
      </div>
    );
  }

  // Full homepage banner (Wednesdays only)
  return (
    <section className="relative overflow-hidden bg-red-800 text-white py-10 md:py-14">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent" />
      <div className="relative container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-yellow-400 text-red-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Today Only!
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
            <img
              src="/wacky-wing-wednesday.jpg"
              alt="Wacky Wing Wednesday special — $1 chicken wings"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
