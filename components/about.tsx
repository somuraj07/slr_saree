export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#F4E7BD] border-t border-[#CBA135]/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-[#CBA135] font-bold mb-4 tracking-wide">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>Gift Vouchers</li>
            <li>Collections</li>
            <li>Sarees</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#CBA135] font-bold mb-4 tracking-wide">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li className="underline cursor-pointer">Our History</li>
            <li>The Nalli Promise (Blog)</li>
            <li>Lookbook</li>
            <li>Campaigns</li>
            <li>Press</li>
            <li>Product Care</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#CBA135] font-bold mb-4 tracking-wide">CLIENT CARE</h3>
          <ul className="space-y-2 text-sm">
            <li>Help / FAQs</li>
            <li>Shipping & Payment</li>
            <li>Returns & Exchange Policy</li>
            <li>Customs, Duties & Taxes</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <p>📍 TRACK ORDER</p>
          <p>🏬 STORE LOCATOR</p>
          <p>📞 Contact Customer Care</p>

          <p className="pt-2">🌐 INR - ₹</p>

          <div className="flex gap-4 text-lg pt-2">
            <span className="cursor-pointer hover:text-[#CBA135]">📸</span>
            <span className="cursor-pointer hover:text-[#CBA135]">👍</span>
            <span className="cursor-pointer hover:text-[#CBA135]">📌</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#CBA135]/30 py-4">
        <p className="text-center text-xs text-[#F4E7BD]/70">
          © 1928–2024 Nalli Silk Sarees Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
