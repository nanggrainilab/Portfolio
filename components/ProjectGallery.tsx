"use client";
import Link from "next/link";
import { useState } from "react";
import { FILTERS, projects, type Filter } from "@/lib/projects";
export function ProjectCard({p,dark}:{p:(typeof projects)[number];dark?:boolean}){return(
  <article className={`group flex flex-col justify-between border p-6 transition-colors ${dark?"border-dline bg-char text-ivory hover:border-lime":"border-line bg-soft hover:border-char"} ${p.featured?"md:col-span-2":""}`}>
    <div><p className="label text-mute">{p.category}</p>
      <h3 className="mt-3 font-display text-2xl leading-tight">{p.title}</h3>
      <p className="mt-3 max-w-xl text-sm opacity-80">{p.problem}</p></div>
    <div className="mt-8"><p className="label text-mute">{p.tools.join(" · ")}</p>
      <Link href={`/projects/${p.slug}`} className="mt-4 inline-block min-h-[44px] border-b border-current py-2 font-semibold">View Case Study<span className="sr-only"> for {p.title}</span> →</Link></div>
  </article>);}
export default function ProjectGallery(){
  const [f,setF]=useState<Filter|"All">("All");
  const list=projects.filter(p=>f==="All"||p.filters.includes(f));
  return(<div>
    <div role="group" aria-label="Filter projects" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
      {(["All",...FILTERS] as const).map(x=><button key={x} aria-pressed={f===x} onClick={()=>setF(x)}
        className={`min-h-[44px] shrink-0 rounded-full border px-4 text-sm ${f===x?"border-lime bg-lime text-ink":"border-line hover:border-char"}`}>{x==="All"?"All Projects":x}</button>)}</div>
    <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{list.map(p=><ProjectCard key={p.slug} p={p}/>)}</div></div>);}
