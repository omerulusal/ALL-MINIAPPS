'use client'
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import Structure from "@/components/structer";
import Kart from "@/components/kart";
import Recent from "@/components/recent";
import Customer from "@/components/customer";
import "./index.css"
export default function Home() {

  const [ekle, setEkle] = useState(false)
  const toggleBurger = () => {
    // setEkle(!ekle)
    // şimdilik çalıştırmadım
    console.log("calıstı")
  }
  const eklenmisClass = ekle ? "burgerinactive" : "";


  return (
    <main>
      <div style={{ fontSize: '28px' }}>
        <Sidebar ekli={eklenmisClass} />
        <Structure toggle={toggleBurger} ekli={eklenmisClass} />
        <Kart />
        <Recent />
        <Customer />
      </div>
    </main>
  )
}
