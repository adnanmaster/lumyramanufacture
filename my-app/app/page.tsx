

import { SplitText } from "@/components/SplitText";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


export default function Home() {

  return (
    <>
      <main className="pt-24 bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-on-secondary-container">
        {/* Hero Section: The Digital Atelier */}
        <section className="relative px-8 py-12 md:py-20 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 z-10">
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-secondary mb-4 block">
                Est. 2025 — Lumyra Manufacture
              </span>

              <h1 className="text-5xl md:text-7xl font-serif text-on-surface leading-tight mb-8">
                Produkte für dein{" "}
                <span className="italic underline underline-offset-8 decoration-secondary">
                  Slow Living
                </span>{" "}
                Ritual.
              </h1>
              <p className="text-on-surface-variant max-w-md text-lg mb-10 leading-relaxed">
                Handgefertigte Trockenblumen-Arrangements, pflanzliche Kerzen,
                Tabletts und feine Düfte, kreiert, um deinem Zuhause eine
                organische Wärme zu verleihen.
              </p>
              <div className="flex gap-4">
                <a
                  className="bg-primary text-on-primary px-8 py-4 rounded-md font-medium hover:scale-[1.02] transition-transform flex items-center gap-2"
                  href="./shop"
                >
                  Shop Entdecken{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container shadow-sm">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close-up of a rustic bouquet of dried eucalyptus, lavender, and pampas grass in a ceramic vase with soft morning light."
                      src="https://i.etsystatic.com/63042411/r/il/fabeda/7686102272/il_1588xN.7686102272_pndu.jpg"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-low translate-x-12">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Handmade soy candle in a minimal amber glass jar with a wooden wick, sitting on a weathered wooden surface."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsyXpFgHNx5f0v_jeVDtRTgV9OWyLfbS0EMjltDC5gv9o2mGM7crn-SMhicb7OFZw4_dNtyRcsXu_ik7yQkkaIzuE-LUnXN1L62fJXfwaDLZZ2iBFrCV42leyyoRzjl7GUbE3zvy4hrldYSFSitn6yDhtdS5GQZPPU4jU5x6BB0UzukoLwseNNPsGJvgqo9uhkeLh0fLSEKtDt405WWSxKSyRUJ7AMPyK_NRZDsfzRrCPEnhv2SL5iP-QquhCM8a3XU6DOh86Bh1eC"
                    />
                  </div>
                </div>
                <div className="pt-12">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-high shadow-lg">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Detail of artisanal flower drying process in a sunlit wooden workshop with bundles hanging from rafters."
                      src="https://i.etsystatic.com/63042411/r/il/b0c1b6/7631476449/il_1588xN.7631476449_3lwp.jpg"
                    />
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
                <h2 className="text-4xl font-serif text-on-surface mb-2">
                  New Arrivals
                </h2>
                <p className="text-on-surface-variant font-sans">
                  Seasonal pieces freshly curated for your space.
                </p>
              </div>
              <a
                className="text-secondary font-medium underline underline-offset-8 decoration-secondary/30 hover:decoration-secondary transition-all"
                href="#"
              >
                View All Products
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Product 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Elegant eucalyptus wreath tied with a simple linen ribbon, hanging on a white textured wall."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQ0Z-jpsMaThNXNtLThdPqjlVB8DtzitMsVbFMn10QT22ijVO4mEEq0qJnHjRbSnp6EggYiSUlII2Fy33mmt9HmCm1w9qDCO1dS-SB-U_syFtmCmQU474K7KsUznQsAmusv0ndtniIpzWXS1eLzT5yBYKEMuULIf-C9yHxmyzFnLn9AS1ABNCBavcuaJHVRlz_5BIrST3GuZPRAwLwBEE67B0cnSXap8QZ_QoP_pmIm1tFwtYE64Bae7AqcAD66ep1nL7pc5PQm4K"
                  />
                  <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-primary">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">
                  Eucalyptus Wreath
                </h3>
                <p className="text-on-surface-variant text-sm mb-2 font-sans">
                  Dried Silver Dollar Eucalyptus
                </p>
                <span className="text-secondary font-medium">€42.00</span>
              </div>
              {/* Product 2 */}
              <div className="group cursor-pointer pt-8">
                <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Natural lavender scented candle in a matte ceramic vessel, with dried lavender sprigs resting nearby."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb3k6OQFoQPvg9QvGtjj7N0zGz12BXCRgpMX6yp5rODn7NNr_UPoqDfMrx0Az12qrb6WqVJIZKBGiv3favkap0gRTIWMYxJXFL5LNpc5ZKI1TiBi6uFY3NrZ7d4OcqO0v_qKkpYZqYmEeLewzAW7Q26wKnH3gZQLlNfIO4tx9i2lRGnRoDL6KVRF38MBspJMPhvJs0tgv0jfcylnBhWTWI3ZAsPXGtwHewhhuOE3P3N7P4x64gDtAReVg59NCVHOY8eFgB6uSoBZIY"
                  />
                  <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-primary">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">
                  Lavender Scented Candle
                </h3>
                <p className="text-on-surface-variant text-sm mb-2 font-sans">
                  100% Soy Wax | 40hr Burn Time
                </p>
                <span className="text-secondary font-medium">€28.00</span>
              </div>
              {/* Product 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A tall bouquet of sun-bleached pampas grass and white strawflowers in a minimalist glass bottle."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD-iWrct6bRec_cMZ8lfmAhaP7o2Xgplvu7HPLtyrIFDyXiVPakx_kZgsyhxumhp8dopPtrAYvGgA7TWcliTuBxtweirA3SEhAOeTzI0ZQ0lhJdna5M3dsvsvVhSyuhm-VCa7QGpkFi4Ra-cFHKd2sqtzNcYso-PISICBjShmLojtoTWe7TPq8BFQZpKO_GrXEOf8RhH48Z8DLvx-N-2IZzhwG8W5lf5uIQ-_wrXXrTGepFJp1BZ7f7CvxFMWj2P5bvbZdAbPvR3Md"
                  />
                  <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-primary">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">
                  Sun-Bleached Bouquet
                </h3>
                <p className="text-on-surface-variant text-sm mb-2 font-sans">
                  Strawflowers & Pampas Grass
                </p>
                <span className="text-secondary font-medium">€54.00</span>
              </div>
              {/* Product 4 */}
              <div className="group cursor-pointer pt-8">
                <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A pair of hand-dipped beeswax taper candles with a natural textured finish and cotton wicks."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Nt3JlWV6NtPFVb51f8SyxAKm3LYiXyG2SXMlGowfTvCad2z2_9c0n02CHmNPCVhknqNF3BnUPKO_bifckpqGKMKRtNhuO1Pyw4HpNFYwFI_f5G1KI_bzag0ehQ4ye5M_P_bRvy1OcayvZZhdHcWiqTZ0re8HrXbP1LfZ-LGqIRbA3MC5NpRX-VFLE_10FpuhOA-OiXWAY7Bq6mdjoXG058D_Dv4LL41luVZf3VRb82N8dD6zB6X_JUXJeTvxP6T_cMxPdS4OLoHH"
                  />
                  <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-primary">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">
                  Beeswax Tapers
                </h3>
                <p className="text-on-surface-variant text-sm mb-2 font-sans">
                  Hand-dipped | Set of Two
                </p>
                <span className="text-secondary font-medium">€18.00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship: The Atelier Philosophy */}
        <section className="pb-[200px] pt-24 px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Close-up of artisan hands carefully arranging delicate dried petals and herbs on a rustic workbench."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXP8T_1LBOWVSxQEtnQ-25IDh66YSG52MgaEEZuS8pxOUytQkTtvb6r-wPq4J_wnVPc3IlIvDH3bdg87Li2DLIA9OdCOXEdWN-hWcIqdU_JouuTTbDro9C5MwRvOhdYz_qhF7iupOnsT8RfFDBPbBWEZO2dn1qMw-KXA6USODcLrT2Gg83xyfz2zFMubieFHFVG2OC4FaZ93zEJz2LsU86F_bwCVHqwQOoHncv4aiNAV8PJMAb088RmOc4zz8OpxTgtuV6dDW9YhQ"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-xl shadow-lg border border-outline-variant/10 max-w-[280px]">
                <p className="font-serif italic text-primary text-lg">
                  "Beauty lies in the slow, deliberate work of hands."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif text-on-surface mb-6">
                Made for the home, by hand.
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Every item at Haus der Handarbeit is a testament to the patient
                process of creation. We source our botanicals from small
                European farms, allowing them to dry naturally to preserve their
                soul. Our candles are hand-poured in small batches, infused with
                essential oils that evoke the memory of a wild meadow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-outline-variant"></span>
                  <span className="font-sans text-sm tracking-widest uppercase text-secondary">
                    Sustainable Sourcing
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-outline-variant"></span>
                  <span className="font-sans text-sm tracking-widest uppercase text-secondary">
                    Small Batch Production
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-outline-variant"></span>
                  <span className="font-sans text-sm tracking-widest uppercase text-secondary">
                    Plastic-Free Packaging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
