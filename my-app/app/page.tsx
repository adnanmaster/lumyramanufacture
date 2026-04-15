import Image from "next/image";

export default function Home() {
  return (
  <>
    {/* TopNavBar */}
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-[#1b1c19]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <a className="text-2xl font-serif italic text-[#565f4c] dark:text-[#848d78]" href="#">Lumyra Manufacture</a>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300" href="#">Blumen</a>
            <a className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300" href="#">Kerzen</a>
            <a className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300" href="#">Düfte</a>
            <a className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300" href="#">Deko</a>
            <a className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300" href="#">Unsere Story</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-surface-container px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-on-surface-variant/50" placeholder="Search collection..." type="text"/>
          </div>
          <button className="flex items-center text-[#565f4c] dark:text-[#848d78] hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </div>
    </nav>

    <main className="pt-24 bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Hero Section: The Digital Atelier */}
      <section className="relative px-8 py-12 md:py-20 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <span className="font-sans text-sm tracking-[0.2em] uppercase text-secondary mb-4 block">Est. 2025 — Lumyra Manufacture</span>
            <h1 className="text-5xl md:text-7xl font-serif text-on-surface leading-tight mb-8">Produkte für dein <span className="italic underline underline-offset-8 decoration-secondary" >Slow Living</span> Ritual.</h1>
            <p className="text-on-surface-variant max-w-md text-lg mb-10 leading-relaxed">Handgefertigte Trockenblumen-Arrangements, pflanzliche Kerzen, Tabletts und feine Düfte, kreiert, um deinem Zuhause eine organische Wärme zu verleihen.</p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-medium hover:scale-[1.02] transition-transform flex items-center gap-2">
                Entdecken <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container shadow-sm">
                  <img className="w-full h-full object-cover" data-alt="Close-up of a rustic bouquet of dried eucalyptus, lavender, and pampas grass in a ceramic vase with soft morning light." src="https://i.etsystatic.com/63042411/r/il/fabeda/7686102272/il_1588xN.7686102272_pndu.jpg"/>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-low translate-x-12">
                  <img className="w-full h-full object-cover" data-alt="Handmade soy candle in a minimal amber glass jar with a wooden wick, sitting on a weathered wooden surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsyXpFgHNx5f0v_jeVDtRTgV9OWyLfbS0EMjltDC5gv9o2mGM7crn-SMhicb7OFZw4_dNtyRcsXu_ik7yQkkaIzuE-LUnXN1L62fJXfwaDLZZ2iBFrCV42leyyoRzjl7GUbE3zvy4hrldYSFSitn6yDhtdS5GQZPPU4jU5x6BB0UzukoLwseNNPsGJvgqo9uhkeLh0fLSEKtDt405WWSxKSyRUJ7AMPyK_NRZDsfzRrCPEnhv2SL5iP-QquhCM8a3XU6DOh86Bh1eC"/>
                </div>
              </div>
              <div className="pt-12">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-high shadow-lg">
                  <img className="w-full h-full object-cover" data-alt="Detail of artisanal flower drying process in a sunlit wooden workshop with bundles hanging from rafters." src="https://i.etsystatic.com/63042411/r/il/b0c1b6/7631476449/il_1588xN.7631476449_3lwp.jpg"/>
                </div>
              </div>
            </div>
            {/* Atmospheric Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary-container/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* New Arrivals: The Floating Herbarium */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-on-surface mb-2">New Arrivals</h2>
              <p className="text-on-surface-variant font-sans">Seasonal pieces freshly curated for your space.</p>
            </div>
            <a className="text-secondary font-medium underline underline-offset-8 decoration-secondary/30 hover:decoration-secondary transition-all" href="#">View All Products</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Elegant eucalyptus wreath tied with a simple linen ribbon, hanging on a white textured wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQ0Z-jpsMaThNXNtLThdPqjlVB8DtzitMsVbFMn10QT22ijVO4mEEq0qJnHjRbSnp6EggYiSUlII2Fy33mmt9HmCm1w9qDCO1dS-SB-U_syFtmCmQU474K7KsUznQsAmusv0ndtniIpzWXS1eLzT5yBYKEMuULIf-C9yHxmyzFnLn9AS1ABNCBavcuaJHVRlz_5BIrST3GuZPRAwLwBEE67B0cnSXap8QZ_QoP_pmIm1tFwtYE64Bae7AqcAD66ep1nL7pc5PQm4K"/>
                <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                </button>
              </div>
              <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">Eucalyptus Wreath</h3>
              <p className="text-on-surface-variant text-sm mb-2 font-sans">Dried Silver Dollar Eucalyptus</p>
              <span className="text-secondary font-medium">€42.00</span>
            </div>
            {/* Product 2 */}
            <div className="group cursor-pointer pt-8">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Natural lavender scented candle in a matte ceramic vessel, with dried lavender sprigs resting nearby." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb3k6OQFoQPvg9QvGtjj7N0zGz12BXCRgpMX6yp5rODn7NNr_UPoqDfMrx0Az12qrb6WqVJIZKBGiv3favkap0gRTIWMYxJXFL5LNpc5ZKI1TiBi6uFY3NrZ7d4OcqO0v_qKkpYZqYmEeLewzAW7Q26wKnH3gZQLlNfIO4tx9i2lRGnRoDL6KVRF38MBspJMPhvJs0tgv0jfcylnBhWTWI3ZAsPXGtwHewhhuOE3P3N7P4x64gDtAReVg59NCVHOY8eFgB6uSoBZIY"/>
                <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                </button>
              </div>
              <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">Lavender Scented Candle</h3>
              <p className="text-on-surface-variant text-sm mb-2 font-sans">100% Soy Wax | 40hr Burn Time</p>
              <span className="text-secondary font-medium">€28.00</span>
            </div>
            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A tall bouquet of sun-bleached pampas grass and white strawflowers in a minimalist glass bottle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD-iWrct6bRec_cMZ8lfmAhaP7o2Xgplvu7HPLtyrIFDyXiVPakx_kZgsyhxumhp8dopPtrAYvGgA7TWcliTuBxtweirA3SEhAOeTzI0ZQ0lhJdna5M3dsvsvVhSyuhm-VCa7QGpkFi4Ra-cFHKd2sqtzNcYso-PISICBjShmLojtoTWe7TPq8BFQZpKO_GrXEOf8RhH48Z8DLvx-N-2IZzhwG8W5lf5uIQ-_wrXXrTGepFJp1BZ7f7CvxFMWj2P5bvbZdAbPvR3Md"/>
                <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                </button>
              </div>
              <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">Sun-Bleached Bouquet</h3>
              <p className="text-on-surface-variant text-sm mb-2 font-sans">Strawflowers & Pampas Grass</p>
              <span className="text-secondary font-medium">€54.00</span>
            </div>
            {/* Product 4 */}
            <div className="group cursor-pointer pt-8">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A pair of hand-dipped beeswax taper candles with a natural textured finish and cotton wicks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Nt3JlWV6NtPFVb51f8SyxAKm3LYiXyG2SXMlGowfTvCad2z2_9c0n02CHmNPCVhknqNF3BnUPKO_bifckpqGKMKRtNhuO1Pyw4HpNFYwFI_f5G1KI_bzag0ehQ4ye5M_P_bRvy1OcayvZZhdHcWiqTZ0re8HrXbP1LfZ-LGqIRbA3MC5NpRX-VFLE_10FpuhOA-OiXWAY7Bq6mdjoXG058D_Dv4LL41luVZf3VRb82N8dD6zB6X_JUXJeTvxP6T_cMxPdS4OLoHH"/>
                <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                </button>
              </div>
              <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">Beeswax Tapers</h3>
              <p className="text-on-surface-variant text-sm mb-2 font-sans">Hand-dipped | Set of Two</p>
              <span className="text-secondary font-medium">€18.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship: The Atelier Philosophy */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="Close-up of artisan hands carefully arranging delicate dried petals and herbs on a rustic workbench." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXP8T_1LBOWVSxQEtnQ-25IDh66YSG52MgaEEZuS8pxOUytQkTtvb6r-wPq4J_wnVPc3IlIvDH3bdg87Li2DLIA9OdCOXEdWN-hWcIqdU_JouuTTbDro9C5MwRvOhdYz_qhF7iupOnsT8RfFDBPbBWEZO2dn1qMw-KXA6USODcLrT2Gg83xyfz2zFMubieFHFVG2OC4FaZ93zEJz2LsU86F_bwCVHqwQOoHncv4aiNAV8PJMAb088RmOc4zz8OpxTgtuV6dDW9YhQ"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-xl shadow-lg border border-outline-variant/10 max-w-[280px]">
              <p className="font-serif italic text-primary text-lg">"Beauty lies in the slow, deliberate work of hands."</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif text-on-surface mb-6">Made for the home, by hand.</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Every item at Haus der Handarbeit is a testament to the patient process of creation. We source our botanicals from small European farms, allowing them to dry naturally to preserve their soul. Our candles are hand-poured in small batches, infused with essential oils that evoke the memory of a wild meadow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-outline-variant"></span>
                <span className="font-sans text-sm tracking-widest uppercase text-secondary">Sustainable Sourcing</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-outline-variant"></span>
                <span className="font-sans text-sm tracking-widest uppercase text-secondary">Small Batch Production</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-outline-variant"></span>
                <span className="font-sans text-sm tracking-widest uppercase text-secondary">Plastic-Free Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-24 px-8">
        <div className="max-w-4xl mx-auto bg-surface-container rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-serif mb-4">Join our Journal</h2>
            <p className="text-on-surface-variant mb-10 max-w-md mx-auto">Subscribe for seasonal collection previews, interior styling tips, and artisanal stories.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input className="flex-grow bg-surface px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40" placeholder="Your email address" type="email"/>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-medium hover:scale-[1.02] transition-transform">Subscribe</button>
            </form>
            <p className="text-[10px] text-on-surface-variant/60 mt-6 uppercase tracking-widest">Unsubscribe anytime. We respect your peace.</p>
          </div>
          {/* Abstract Organic Shape Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-[#f5f3ee] dark:bg-[#121210] w-full pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-xl text-[#565f4c] mb-6">The Artisanal Atelier</h3>
          <p className="font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4] opacity-80 leading-relaxed">
            Celebrating the intersection of heritage craft and modern minimalism. Crafted for slow living.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Shop</h4>
          <ul className="space-y-3 font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4]">
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Flowers</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Candles</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Gift Cards</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Bulk Orders</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Explore</h4>
          <ul className="space-y-3 font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4]">
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Instagram Feed</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Journal</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Newsletter</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Our Makers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Customer Care</h4>
          <ul className="space-y-3 font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4]">
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Shipping & Returns</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Care Guide</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 border-t border-outline-variant/10 pt-8 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4] opacity-60">
          © 2024 The Artisanal Atelier. Crafted for slow living.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-on-surface-variant opacity-60">payments</span>
          <span className="material-symbols-outlined text-on-surface-variant opacity-60">local_shipping</span>
          <span className="material-symbols-outlined text-on-surface-variant opacity-60">eco</span>
        </div>
      </div>
    </footer>
  </>
);
}
