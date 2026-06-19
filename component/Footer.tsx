import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Isi Bensin
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Platform digital untuk menemukan dan memesan bensin dari
            warung 24 jam di Kota Madiun dengan mudah dan cepat.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-3">
            <li><a href="#peta" className="hover:text-blue-400 transition">Peta</a></li>
            <li><a href="#fitur" className="hover:text-blue-400 transition">Fitur</a></li>
            <li><a href="#aplikasi" className="hover:text-blue-400 transition">Aplikasi</a></li>
          </ul>
        </div>

        {/* KONTAK */}
        <div>
          <h4 className="text-white font-semibold mb-4">Kontak</h4>
          <ul className="space-y-3 text-gray-400">

            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              support@isibensin.com
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              0812-3456-7890
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" />
              Kota Madiun
            </li>

          </ul>
        </div>

        {/* DOWNLOAD */}
        <div>
          <h4 className="text-white font-semibold mb-4">Aplikasi</h4>

          <a
            href="https://play.google.com/store/apps/details?id=nama.app.kamu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            <Download size={18} />
            Download App
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Isi Bensin. All rights reserved.
      </div>
    </footer>
  );
}