export default function Shop() {
  return (
    <>
      <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-headline tracking-tight text-on-surface mb-4">
            Shop
          </h1>
          <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">
            A curated collection of objects for slow living. Each piece is
            handcrafted in our studio, reflecting the organic imperfections of
            the natural world.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 flex-shrink-0 space-y-10">
            <div>
              <h3 className="font-headline text-lg mb-6 text-on-surface">
                Categories
              </h3>
              <ul className="space-y-4">
                <li>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface-container"
                      type="checkbox"
                    />
                    <span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">
                      Flowers
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface-container"
                      type="checkbox"
                    />
                    <span className="text-sm font-body text-primary font-medium">
                      Candles
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface-container"
                      type="checkbox"
                    />
                    <span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">
                      Decor
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface-container"
                      type="checkbox"
                    />
                    <span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">
                      Gifts
                    </span>
                  </label>
                </li>
              </ul>
            </div>

            

            <div>
              <h3 className="font-headline text-lg mb-6 text-on-surface">
                Sort By
              </h3>
              <select className="w-full bg-surface-container border-none rounded-lg py-3 px-4 text-sm font-body focus:ring-1 focus:ring-primary/30">
                <option>New Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </aside>

          <section className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              <div className="group relative flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                  <img
                    alt="Artisan Candle"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Minimalist artisanal hand-poured candle in a textured ceramic vessel on a neutral sandstone surface with soft morning light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEyJpDtsPp20U6wmq-ubk6OiZkqNu0D-X6ytr_7IzI4tsVf_fhrWuTsP62Y1b2Hh9WDGkmZrfocNTkQD3SoQfWoTl2W0wVAQ8acEyEtNtfMvzs0_7uAPJDUenYThFLVqwpHfWkvLm294nOzABo4gktOZDVo36sPREyA32BGYHnsFj2fjffgsPZ9Ddw9lwek6WtWIlxP7H34erhPZ4cgg3MBo0UB4mlJxg_Rdx0EcSEjOEJ2QEI-fBnAIuleXZ-e_V5Sx4OBMWI8JMB"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                      Candles
                    </p>
                    <h3 className="text-lg font-headline text-on-surface">
                      Cedar &amp; Moss Vessel
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-body">$42</span>
                </div>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                  <img
                    alt="Dried Flowers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Sophisticated arrangement of dried wildflowers and eucalyptus in a muted ceramic vase against a clean plaster wall"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFLjVQZ1AjCcydMGx-bLjQXiwTBXhI2TZDNXpz9tEk6xjdr2qgPAv9AQre6d2TW5yjF4s3WwxM4PVEmiWxrYGgWwefuDVsNnsLK9iM9NxVk6YmaGNpy-n_i8ICGtr804tr_dOWoJyVR6JHokBnlndjh_iDz3XkM6vEc-3u7Z0ToBXYB1wng5ILQTLcRY3hu_NLx15XlHtIRM7xoVJsLwwjH7OneIZs_GGiFYQEo1nfd8ZbzVKMjkMTOdIFJeSyteAZN5j66U9jqsbb"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                      Flowers
                    </p>
                    <h3 className="text-lg font-headline text-on-surface">
                      Everlasting Meadow
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-body">$68</span>
                </div>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                  <img
                    alt="Ceramic Decor"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Hand-sculpted organic shaped ceramic bowl with a matte speckled glaze on a rustic wooden table in soft ambient light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9OmpdbBAcFppbUyjxfibNwqh_Ks-0n0KnSCjz7nFZuA4RUTyPVrh0jlzlg36IEGnxizCBtOKZNfje5llklS7zWAfyNOJBVPwPv8zCmLtUzAzT97EvGSkLSV8yKaI-1mDj_fR41n9JQfjyLKHB4bfQX7-wBoyEFp2L5vaXBZL4GrIG0DO3Fp2cHcii-PzbZ5hvY1wThd9iIccvCFcCl73pgxPasNmKVl59ANtCGgNi-RisUXt_gYYtfd-TUY0VAp9cH-mir2kariK3"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                      Decor
                    </p>
                    <h3 className="text-lg font-headline text-on-surface">
                      Sculpted Basin
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-body">
                    $115
                  </span>
                </div>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                  <img
                    alt="Beeswax Tapers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Bundle of hand-dipped natural beeswax taper candles tied with a simple linen twine on a stone surface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2_3jdwRujXReV6eXfiyRNCVoxpjUoH6AyyHkNw1paBbbzw_BcXCKbuvddMct3kq-ASXg7Mp6FRbYKWfAQ99Sd1BH4COo2GK3vtETLSu710wtrykHp_iD4IqtszempjF-ThQAL0pmdxnwDFyGFYY5yfUZ7pay_rg6JN6PyqerXZ_yqAhFC6QrGrQVKlL3PG8Cbr0WkuPvSnAFLUHTq3RBrnCxn9jGVSL-OVRbn_MyWZTpBSBUcu01nc6YHCOoTuToLK8miBD3kWyE"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                      Candles
                    </p>
                    <h3 className="text-lg font-headline text-on-surface">
                      Honey Taper Set
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-body">$28</span>
                </div>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                  <img
                    alt="Linen Napkins"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Folded premium linen napkins in earthy tones of terracotta and sage arranged neatly on a marble countertop"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJAbo3gZAGQFUTBGsnZbrQhGMo37KuUf0e2Q3Fv-SfvwK-uPphFGsBARKQBXJoQ7PzMGAzHwpvnz69yboUfM3NumfHiosqyorcCqCOZuXTn8i6ffvpmfUcSvOFrWQYXhBTQTVjzT30SkTrYHLKHNCSM-bhy8DiZSZWUtoaAzzBrU_eQqeqvnMjO4ZnCroJz0nsNV4pwYvW_cmaUX4o7g2K9zZDKU3FHtluCkNgm3CxcTTXQqghicyqxO0RP3cW83pPbRlqG3P5dgVw"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                      Decor
                    </p>
                    <h3 className="text-lg font-headline text-on-surface">
                      Raw Edge Linen Set
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-body">$54</span>
                </div>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                  <img
                    alt="Gift Box"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Elegant gift box containing a small dried bouquet and a ceramic candle, beautifully wrapped with recycled paper and a botanical sprig"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3DaxdP50qJhSvls_-KM03OaRLlcxAVY8hapdlosvuX-Z4YrHakkAGlHv3I0kQ961ucCaPe9h8LoxoN_xRR5TuhIsmic0vs5wsgHKIgL5J_bc0Ef8RvIrNuG2pXTz1Pdfhr5e5beSDHKo5vEBEDJKUqzqSDZy1y9ikW4mAwlaUaGvDidHT9dzCIv1N9jrHnEGnQWLfq5doVnrbLP6K-mf7-ovOY32gsFCIIPoFl6cmgp7i_7jKoBbJiIHmxL6nVOftBzS5eLPGOgXX"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                      Gifts
                    </p>
                    <h3 className="text-lg font-headline text-on-surface">
                      The Atelier Bundle
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-body">$85</span>
                </div>
              </div>
            </div>

            <div className="mt-24 flex justify-center items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <span className="text-sm font-body text-primary font-semibold border-b border-primary px-1">
                1
              </span>
              <span className="text-sm font-body text-on-surface-variant">
                2
              </span>
              <span className="text-sm font-body text-on-surface-variant">
                3
              </span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
