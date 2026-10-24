"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links=[["Home","/"],["Services","/#services"],["Projects","/projects"],["About","/#about"],["Contact","/#contact"]];
export default function Header(){
  const [open,setOpen]=useState(false); const [solid,setSolid]=useState(false);
  useEffect(()=>{const s=()=>setSolid(scrollY>20);const k=(e:KeyboardEvent)=>e.key==="Escape"&&setOpen(false);
    s();addEventListener("scroll",s,{passive:true});addEventListener("keydown",k);return()=>{removeEventListener("scroll",s);removeEventListener("keydown",k)}},[]);
  return(<header className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors ${solid||open?"bg-char/90 backdrop-blur border-b border-dline":""}`}>
    <div className="wrap flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-3" aria-label="Novita Anggraini home" onClick={()=>setOpen(false)}>
        <span className="grid h-9 w-9 place-items-center border border-lime font-display text-sm font-bold text-lime">NA</span>
        <span className="hidden font-display sm:block">Novita Anggraini</span></Link>
      <nav aria-label="Main" className="hidden gap-8 text-sm md:flex">{links.map(([l,h])=><Link key={l} href={h} className="hover:text-lime">{l}</Link>)}</nav>
      <div className="flex items-center gap-2">
        <Link href="/#contact" className="btn hidden bg-lime text-ink sm:inline-flex">Let’s Talk ↗</Link>
        <button className="grid h-11 w-11 place-items-center md:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div></div>
    {open&&<nav id="mnav" aria-label="Mobile" className="wrap flex flex-col gap-1 pb-6 md:hidden">
      {links.map(([l,h])=><Link key={l} href={h} onClick={()=>setOpen(false)} className="border-b border-dline py-4 font-display text-2xl">{l}</Link>)}
      <Link href="/#contact" onClick={()=>setOpen(false)} className="btn mt-4 bg-lime text-ink">Let’s Talk ↗</Link></nav>}
  </header>);
}
