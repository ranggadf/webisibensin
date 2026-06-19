"use client";

import dynamic from "next/dynamic";
import Topbar from "@/component/Topbar";

// 🔥 disable SSR untuk leaflet
const MapView = dynamic(() => import("@/component/MapView"), {
  ssr: false,
});

export default function PetaPage() {
  return (
    <div className="h-screen w-full">
      
      {/* TOPBAR */}
      <Topbar />

      {/* MAP FULL */}
      <div className="pt-20 h-[calc(100vh-80px)] w-full">
        <MapView />
      </div>

    </div>
  );
}