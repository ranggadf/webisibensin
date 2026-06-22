"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ TYPE (FIXED: samakan dengan backend "long")
type Warung = {
  id: number;
  nama: string;
  alamat: string;
  lat: number;
  long: number;
};

// 📍 ICON WARUNG
const warungIcon = L.icon({
  iconUrl: "/warungpeta.png",
  iconSize: [90, 90],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

// 📍 ICON USER
const userIcon = L.icon({
  iconUrl: "/penggunapeta.png",
  iconSize: [90, 90],
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
});

export default function MapView() {
  const [warungs, setWarungs] = useState<Warung[]>([]);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // 🔹 GET DATA WARUNG
  useEffect(() => {
    axios
      .get<Warung[]>("https://api.isibensinkotamadiun.com/api/admin/persebaran")
      .then((res) => {
        const data: Warung[] = res.data.map((item: any) => ({
          id: item.id,
          nama: item.nama_warung,
          alamat: item.alamat_warung,
          lat: parseFloat(item.lat),
          long: parseFloat(item.long),
        }));

        setWarungs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERROR AXIOS:", err.response);
        console.log("ERROR MESSAGE:", err.message);
      });
  }, []);

  // 🔹 GET LOKASI USER
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([
          pos.coords.latitude,
          pos.coords.longitude,
        ]);
      },
      (err) => {
        console.log("ERROR GEO:", err);
        alert("Gagal mengambil lokasi. Pastikan izin lokasi browser diaktifkan.");
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  }, []);

  // 🔹 DEFAULT CENTER
  const center = userLocation || [-7.6473, 111.5266];

  const filteredWarungs = warungs.filter((w) =>
    w.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative h-screen w-full">

      {/* SEARCH CARD */}
      <div className="absolute top-4 right-4 z-[1000]">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 w-[280px] border border-white/50">
          <div className="flex items-center gap-3">
            <MagnifyingGlassIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />

            <input
              type="text"
              placeholder="Cari warung..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* TOTAL WARUNG */}
      <div className="absolute bottom-5 left-5 z-[1000]">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <BuildingStorefrontIcon className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-gray-800">
              {filteredWarungs.length} Warung
            </span>
          </div>
        </div>
      </div>

      {/* MAP */}
      <MapContainer
        center={center as [number, number]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* USER */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">Lokasi Anda</h3>
              </div>
            </Popup>
          </Marker>
        )}

        {/* WARUNG */}
        {filteredWarungs.map((w) => (
          <Marker
            key={w.id}
            position={[w.lat, w.long]} // ✅ FIXED (long bukan lng)
            icon={warungIcon}
          >
            <Popup>
              <div className="w-64">
                <div className="mb-3">
                  <h3 className="font-bold text-lg text-gray-800">
                    {w.nama}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {w.alamat}
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store",
                        "_blank"
                      )
                    }
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl font-medium"
                  >
                    Pesan Sekarang
                  </button>

                  <button
                    onClick={() => {
                      if (!userLocation) return;

                      const [latUser, lngUser] = userLocation;

                      window.open(
                        `https://www.google.com/maps/dir/${latUser},${lngUser}/${w.lat},${w.long}`,
                        "_blank"
                      );
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-medium"
                  >
                    Lihat Rute
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* FAB LOCATION */}
      {userLocation && (
        <button
          onClick={() => window.location.reload()}
          className="fixed bottom-5 right-5 z-[1000] w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:scale-105 transition flex items-center justify-center"
        >
          <MapPinIcon className="w-6 h-6" />
        </button>
      )}

      {/* LOADING */}
      {loading && (
        <div className="absolute inset-0 bg-white flex items-center justify-center z-[2000]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="mt-4 text-gray-600">Memuat peta...</p>
          </div>
        </div>
      )}
    </div>
  );
}