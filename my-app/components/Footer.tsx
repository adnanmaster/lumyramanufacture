import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#f5f3ee] dark:bg-[#121210] w-full pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-xl text-[#565f4c] mb-6">Lumyra Manufacture</h3>
          <p className="font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4] opacity-80 leading-relaxed">
            Celebrating the intersection of heritage craft and modern minimalism. Crafted for slow living.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Shop</h4>
          <ul className="space-y-3 font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4]">
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Blumen</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Kerzen</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Düfte</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">Deko</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Explore</h4>
          <ul className="space-y-3 font-sans text-sm tracking-wide text-[#1b1c19] dark:text-[#fbf9f4]">
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="https://www.instagram.com/lumyra.manufacture/" target='blank'>Instagram</a></li>
            <li><a className="opacity-80 hover:opacity-100 transition-opacity" href="#">TikTok</a></li>
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
          © 2025 Lumyra Manufacture.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-on-surface-variant opacity-60">payments</span>
          <span className="material-symbols-outlined text-on-surface-variant opacity-60">local_shipping</span>
          <span className="material-symbols-outlined text-on-surface-variant opacity-60">eco</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer