import Topbar from "@/component/Topbar";
import Footer from "@/component/Footer";
import { Search, Map, Fuel, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />

      {/* SECTION 1 - HERO */}
      <section
        className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Kota.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-sm"></div>

        <div className="text-center max-w-3xl text-white relative z-10">
          {/* Judul */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Temukan warung 24 jam yang menjual bensin terdekat di{" "}
            <span className="text-blue-400">Kota Madiun</span>
          </h1>

          {/* Deskripsi */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Cari lokasi warung 24 jam terdekat dengan mudah dan cepat melalui fitur aplikasi isi bensin,
            dan anda juga bisa melakukan pemesanan bensin dari warung 24 jam yang terdaftar di aplikasi
            Isi Bensin di Kota Madiun.
          </p>
        </div>
      </section>

      {/* SECTION 2 - APA ITU */}
     <section id="aplikasi" className="scroll-mt-24 py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* KIRI: Gambar HP */}
          <div className="flex justify-center">
            <img
              src="/phone.png"
              alt="Aplikasi Isi Bensin"
              className="w-72 md:w-96 drop-shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

          {/* KANAN: Penjelasan */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Apa itu Aplikasi Isi Bensin?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Aplikasi Isi Bensin adalah platform digital yang membantu masyarakat
              untuk menemukan warung penjual bensin 24 jam terdekat di Kota Madiun
              dengan cepat dan mudah.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Melalui aplikasi ini, pengguna tidak hanya dapat melihat lokasi warung,
              tetapi juga dapat melakukan pemesanan bensin secara langsung tanpa harus
              datang ke lokasi.
            </p>

            {/* Highlight point */}
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2">✅ Cari lokasi bensin terdekat</li>
              <li className="flex items-center gap-2">✅ Warung buka 24 jam</li>
              <li className="flex items-center gap-2">✅ Bisa pesan langsung dari aplikasi</li>
            </ul>

            {/* CTA BUTTON */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
              >
                Download di Play Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - GABUNG MITRA */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* KIRI: Penjelasan */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Punya Warung Bensin? Gabung Bersama Kami
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        Aplikasi Isi Bensin juga memberikan kesempatan bagi pemilik warung
        untuk memperluas jangkauan pelanggan dan meningkatkan penjualan.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Dengan mendaftarkan warung Anda, lokasi warung akan lebih mudah
        ditemukan oleh pengguna dan Anda juga dapat menerima pesanan
        bensin langsung melalui aplikasi.
      </p>

      {/* Benefit */}
      <ul className="space-y-3 mb-8">
        <li className="flex items-center gap-2">✅ Menjangkau lebih banyak pelanggan</li>
        <li className="flex items-center gap-2">✅ Promosi warung secara digital</li>
        <li className="flex items-center gap-2">✅ Menerima pesanan langsung dari aplikasi</li>
      </ul>

      {/* CTA */}
      <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow-md">
        Daftarkan Warung Anda
      </button>
    </div>

    {/* KANAN: Gambar (FIX DI SINI) */}
    <div className="flex justify-center">
      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800 hover:scale-105 transition duration-300">
        
        <img
          src="/warung.png"
          alt="Pemilik Warung"
          className="w-72 md:w-[380px] object-contain"
        />

      </div>
    </div>

  </div>
</section>

      {/* SECTION 4 - FITUR */}
      <section id="fitur" className=" scroll-mt-24 py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Temukan Warung Bensin Terdekat dengan Mudah
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Aplikasi Isi Bensin membantu Anda menemukan warung bensin 24 jam
            di Kota Madiun dengan cepat, akurat, dan dilengkapi fitur yang memudahkan kebutuhan Anda.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-2xl">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pencarian Cepat & Akurat</h3>
              <p className="text-gray-400">
                Temukan warung bensin terdekat berdasarkan lokasi Anda dengan hasil yang cepat dan akurat.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-2xl">
                <Map size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Peta Interaktif</h3>
              <p className="text-gray-400">
                Lihat lokasi warung bensin dalam peta interaktif untuk membantu Anda menentukan rute terbaik.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-2xl">
                <Fuel size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fitur Pemesanan Bensin</h3>
              <p className="text-gray-400">
                Pesan bensin langsung dari aplikasi tanpa harus datang ke lokasi. Nikmati kemudahan transaksi dengan proses yang cepat dan praktis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - CARA PENGGUNAAN */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
      Cara Menggunakan Aplikasi
    </h2>

    <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
      Hanya dengan beberapa langkah sederhana, Anda dapat menemukan dan memesan bensin dengan mudah.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {/* STEP 1 */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl border border-gray-800 hover:scale-105 transition duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-6 mx-auto shadow-lg">
          1
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Buka Aplikasi
        </h3>

        <p className="text-gray-400">
          Unduh dan buka aplikasi Isi Bensin di perangkat Anda untuk mulai mencari warung terdekat.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl border border-gray-800 hover:scale-105 transition duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-6 mx-auto shadow-lg">
          2
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Cari Warung Terdekat
        </h3>

        <p className="text-gray-400">
          Gunakan fitur pencarian atau peta untuk menemukan warung bensin 24 jam di sekitar Anda.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl border border-gray-800 hover:scale-105 transition duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-6 mx-auto shadow-lg">
          3
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Pesan Bensin
        </h3>

        <p className="text-gray-400">
          Lakukan pemesanan langsung melalui aplikasi dan tunggu hingga pesanan Anda diproses oleh warung.
        </p>
      </div>

    </div>

  </div>
</section>

     {/* SECTION 6 - MITRA CARA GABUNG */}
<section className="py-24 px-6 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Cara Bergabung Menjadi Mitra
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
      Daftarkan warung Anda dan mulai jangkau lebih banyak pelanggan melalui aplikasi Isi Bensin.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {/* STEP 1 */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-6 mx-auto shadow-lg">
          1
        </div>

        <h3 className="text-xl font-semibold mb-2">
          Daftarkan Warung
        </h3>

        <p className="text-gray-400 text-center">
          Isi data warung Anda melalui aplikasi dengan mudah dan cepat.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-6 mx-auto shadow-lg">
          2
        </div>

        <h3 className="text-xl font-semibold mb-2">
          Verifikasi Data
        </h3>

        <p className="text-gray-400 text-center">
          Verifikasi data anda apakah benar atau tidak, jika benar maka data anda akan di proses untuk di tampilkan di aplikasi isi bensin.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-6 mx-auto shadow-lg">
          3
        </div>

        <h3 className="text-xl font-semibold mb-2">
          Mulai Jualan
        </h3>

        <p className="text-gray-400 text-center">
          Warung Anda siap menerima pesanan bensin dari pelanggan melalui aplikasi.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* SECTION 7 - FINAL CTA */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
      Mulai Gunakan Aplikasi Isi Bensin Sekarang
    </h2>

    <p className="text-gray-500 text-lg mb-10">
      Temukan warung bensin terdekat atau daftarkan warung Anda langsung melalui aplikasi.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4">

      {/* Customer */}
      <a
        href="https://play.google.com/store/apps/details?id=nama.app.kamu"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-800 hover:scale-105 transition"
      >
        Download Aplikasi
      </a>

      {/* Mitra */}
      <a
        href="https://play.google.com/store/apps/details?id=nama.app.kamu"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition"
      >
        Daftarkan Warung
      </a>

    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}