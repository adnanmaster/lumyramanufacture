import React from "react";

const SingleProductPage = () => {
  return (
    <>
      <div className="mb-12 flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-on-surface-variant">
        <a className="hover:text-primary transition-colors" href="#">
          Home
        </a>
        <span className="material-symbols-outlined text-[14px]">
          chevron_right
        </span>
        <a className="hover:text-primary transition-colors" href="#">
          Candles
        </a>
        <span className="material-symbols-outlined text-[14px]">
          chevron_right
        </span>
        <span className="text-primary font-medium">
          Hand-poured Soy Wax Candle
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 grid grid-cols-6 gap-4">
          <div className="col-span-6 relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low group">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              data-alt="Close-up of a minimalist hand-poured soy wax candle in a textured ceramic vessel on a sun-drenched wooden table"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaYy-lCIFguH9OQ8vNjXMhsbsA0Xz8CSqwgdwhcny90x6UIHndvVkFXP24Yf1lATJBdZ2c6qSsD_O7ejGTEEAoU5GY_b0CbFVJrDTL_fBgUNNi4et7oLXFY9Y8XVpsZgN4_pUkX1NOF5SPkrE1-JHdw8gDqHjhwxbHQ2ygNkJeG6Qwvgpj2If4nNw8zyaY-nYumBX_fD8UgRNhDJGpSD2r4XvxNMXPO-1mZxqWLaQxgCkrDtowLOWaDfEiA3L2WslNbHSfksW3dgM1"
            />
          </div>
          <div className="col-span-2 aspect-square overflow-hidden rounded-lg bg-surface-container-low">
            <img
              className="w-full h-full object-cover"
              data-alt="Macro detail of artisan candle wax texture and a cotton wick with soft botanical shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYd9WSU2hAFpUVhMmJeHQu35LY30LpGb0MVdNjhtf9vxvDg2bikiXud1ODAopkNh17PxIpPwlBoXlf6pYnGpvPQNC49GWHXUzqwSbFElHk0xQABaaykjopY9rPbAf0UFs87B1dbYh9753-9xyVLrwOhbFOZhKTUi7W4vC69dOghnF92XKS60XxXJmbVuFFHdbioqVeLbQZ-uJRUXoKrSKvNsRwvUApLNLU8q7hJN3y7pXiPIS9F-bEtycAGYZJhSViLy4kx-86aqp1"
            />
          </div>
          <div className="col-span-2 aspect-square overflow-hidden rounded-lg bg-surface-container-low">
            <img
              className="w-full h-full object-cover"
              data-alt="Side view of the candle burning with a warm golden flame in a cozy lifestyle setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtL8e7HcSYno2vONRcifI_iYghidRHISJqDtiKNxpVKd3Q03OSqiTc24-HdT-MTh40bqKDf0PIz8kuC6gVulqIzg9UMI67eAQ0vj_dvsMtoRLv2hn_CdjCu8UPZwkRo2UGIWWYvE7FYRSq_eIvuqf_YUUM71tYxOHqVPXSNqsiWEyinFBpLUZL6tUEG_6wCK9gYmJrzGmt8ccmXfcHV7fkUzj-ecXF_F1L4p5lBms0Fh-hQVpjNvsdGbhMuwwzAy9QC7IcmTMaQsik"
            />
          </div>
          <div className="col-span-2 aspect-square overflow-hidden rounded-lg bg-surface-container-low">
            <img
              className="w-full h-full object-cover"
              data-alt="The candle packaging, an eco-friendly recycled paper box with elegant minimalist typography"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_QTkXEVxxUYqOM_eyAjVObOXseRwdI0sk07bcwOS4fftxMILVqk8QGYtqN5mbCFX2eXTebnFQHSucOmayRHQegm7EYTKxLN9Bs7oUCuoGVQs7S9jcnMW9MECLF0RJSd-AHMt67rJzGwiB0edfSM13otav39mM53yxIPNLoFrmhb2bTyFOMrYXQPUbFHNyJ1wgnacyEZGCWt71Z4hxYXU2nBCtGIjJtT3mXb2QvdIQ8UthJGgGrCuyPDE-GvwEt8QgmWaLDFSxpSJV"
            />
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
          <header className="space-y-4">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-secondary font-medium">
              Limited Edition • Winter Collection
            </span>
            <h1 className="text-5xl font-headline leading-tight tracking-tight text-on-surface">
              Wild Fig &amp; Cedarwood
            </h1>
            <p className="text-2xl font-light text-on-surface-variant italic">
              Hand-poured Soy Wax Candle
            </p>
          </header>
          <div className="flex items-center justify-between py-6 border-y border-outline-variant/20">
            <span className="text-3xl font-light tracking-tight">$48.00</span>
            <div className="flex items-center space-x-1">
              <span
                className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;"
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;"
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;"
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;"
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 0;"
              >
                star
              </span>
              <span className="ml-2 text-xs uppercase tracking-widest opacity-60">
                (24 Reviews)
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-semibold text-on-surface/60">
                Select Size
              </label>
              <div className="flex gap-4">
                <button className="px-6 py-3 border border-primary bg-primary text-on-primary rounded-lg text-sm transition-all duration-300">
                  250g / 50hr
                </button>
                <button className="px-6 py-3 border border-outline-variant text-on-surface/80 rounded-lg text-sm hover:border-primary transition-all duration-300">
                  500g / 90hr
                </button>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-low px-4">
                <button className="w-8 h-8 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="w-10 text-center font-medium">1</span>
                <button className="w-8 h-8 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="flex-1 bg-primary text-on-primary py-4 px-8 rounded-lg font-medium tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/10">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="pt-8 space-y-8">
            <div className="group">
              <button className="flex items-center justify-between w-full py-4 text-left border-b border-outline-variant/30">
                <span className="font-headline text-lg">The Scent Profile</span>
                <span className="material-symbols-outlined transition-transform group-focus:rotate-180">
                  expand_more
                </span>
              </button>
              <div className="py-6 text-on-surface-variant leading-relaxed text-sm">
                A sophisticated blend of sun-ripened Mediterranean figs combined
                with the deep, grounding notes of Himalayan cedarwood. Top notes
                of wild berries lead into a heart of green leaf and fig, resting
                on a base of dry woods and amber.
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-lg">Artisanal Process</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Every candle is hand-poured in small batches of twelve in our
                studio. We use 100% natural soy wax sourced from sustainable
                farms, paired with lead-free cotton wicks and fragrance oils
                infused with essential oils. The ceramic vessels are hand-thrown
                by local potters, designed to be repurposed as planters after
                your candle has burned.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-32">
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-secondary">
              Complete the atmosphere
            </span>
            <h2 className="text-4xl font-headline tracking-tight">
              Recommended for you
            </h2>
          </div>
          <a
            className="text-sm font-medium underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-all"
            href="#"
          >
            View all collection
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Elegant tall tapered beeswax candles in a brass holder on a minimalist stone mantle"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk6DFgyoHWhMg3oeV0m1AXSAffXsiegeXipmHIJzSbmkS0b2X7wjcF7ut3-NMpZXfhvND-niNt_d6kLSVjp959X-Law1w6B5B5ubn6J1ME9YP8aaS11UQlBQEU-v7c5BAHamnrXzffq3PvpuvreaqOQ5YkEgfyal2Gsquf5d0Og2dHQIimO5QfJ8iWzuGjk427hZQ1YiGC2_OUexurhFwJDQlrheh8J5O2hKi_Murer-lI8aOtB1SEHKaqObDCTB-Blb2EtBJU6wrn"
              />
              <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="material-symbols-outlined text-primary">
                  add_shopping_cart
                </span>
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline text-xl">Beeswax Taper Pair</h3>
              <p className="text-on-surface-variant/70 text-sm italic">
                Natural Honey &amp; Smoke
              </p>
              <p className="pt-2 text-primary font-medium">$32.00</p>
            </div>
          </div>

          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A bundle of dried lavender and eucalyptus tied with twine on a rustic linen cloth"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarHIhXbExGf8TajJAt1DVWpp0LZyK5bZBERpKXx7dL1jfELfPGKZQT3i8aAj0-6jA_zrRMwXOpbyNS1wc8cBhW_XTcw34B_O1yyMKmfSD4hQ-nlRDCuTvMK-jPP5VnK6QdlxV2GAu3EwfQm0JPHdrQgqfsugYWBjelLLbFUTp-0hKHNlPxs7GMiqyImyb6qQKCCh0EMD951qfhc66XD54fWboRnx3SCSO4VH0Ywx9PX7WPpwEPMnphqlthkY1J2MqO-MfvvvM_dLZ"
              />
              <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="material-symbols-outlined text-primary">
                  add_shopping_cart
                </span>
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline text-xl">Dried Botanical Bundle</h3>
              <p className="text-on-surface-variant/70 text-sm italic">
                Wild Lavender &amp; Eucalyptus
              </p>
              <p className="pt-2 text-primary font-medium">$24.00</p>
            </div>
          </div>

          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Matte black metal wick trimmer and candle snuffer set on a dark tray"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2ibfU6tp8_x5SD_rbSoQj0qFOikxT8wLimUQj5atThzRnQi0yDL1F9kMb3b9fmAkAWTHEbdnHr_mYZIGS0NlGA2jOxplLdJl2rrX3be2TpkZMl4p5nBxiz2Rs2JXnawu-CV9p-136sqlpgQuBXwjCdgFS0RAq56PbTZsrZYqXB6kf2qrYl6qBVU6kTTTNbMkmivuyy4aFSxKo2QSvd2AkMw68WoXH0fPGl_-XxpnzqD7LyqJG9mYJj9tyKUbEAdzy8OrvJ1DiJi_"
              />
              <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="material-symbols-outlined text-primary">
                  add_shopping_cart
                </span>
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline text-xl">Artisan Wick Trimmer</h3>
              <p className="text-on-surface-variant/70 text-sm italic">
                Matte Black Steel
              </p>
              <p className="pt-2 text-primary font-medium">$18.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
