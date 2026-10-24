import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectGallery";
export const dynamicParams=false;
export const generateStaticParams=()=>projects.map(p=>({slug:p.slug}));
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const p=getProject((await params).slug);return p?{title:p.title,description:p.value}:{}}
const H=({children}:{children:React.ReactNode})=><h2 className="h-lg mb-6">{children}</h2>;
const List=({a}:{a:string[]})=><ul className="space-y-3 border-l-2 border-sage pl-5">{a.map(x=><li key={x}>{x}</li>)}</ul>;
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const p=getProject((await params).slug); if(!p) notFound();
  const related=projects.filter(x=>x.slug!==p.slug&&x.filters.some(f=>p.filters.includes(f))).slice(0,3);
  return(<>
  <section className="bg-char pb-16 pt-32 text-ivory"><div className="wrap">
    <Link href="/projects" className="label text-lime">← All projects</Link>
    <p className="label mt-8 text-mute">{p.category}</p><h1 className="h-xl mt-3 max-w-5xl">{p.title}</h1>
    <p className="mt-6 max-w-2xl text-lg text-ivory/80">{p.value}</p>
    <p className="label mt-6 text-sage">{p.tools.join(" · ")}</p></div></section>
  <div className="light wrap sec space-y-16 md:space-y-24">
    <section><H>The Challenge</H><p className="max-w-3xl text-lg">{p.challenge}</p></section>
    <section><H>Objectives</H><List a={p.objectives}/></section>
    <section><H>Dataset & Scope</H><List a={p.scope}/></section>
    <section><H>Approach</H><ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">{p.approach.map((a,i)=><li key={a} className="bg-soft p-5"><span className="label text-mute">Step {i+1}</span><p className="mt-2 font-display text-lg">{a}</p></li>)}</ol></section>
    {p.code&&<section><H>Technical Implementation</H><pre className="overflow-x-auto bg-ink p-5 font-mono text-sm text-ivory" tabIndex={0}><code>{p.code.src}</code></pre></section>}
    {p.findings.length>0&&<section><H>Key Findings</H><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{p.findings.map(f=><div key={f.label} className="border border-line bg-soft p-6"><p className="font-display text-4xl break-words">{f.value}</p><p className="mt-2 font-semibold">{f.label}</p>{f.note&&<p className="mt-2 text-sm text-mute">{f.note}</p>}</div>)}</div></section>}
    {p.implications.length>0&&<section><H>Recommendations & Implications</H><List a={p.implications}/></section>}
    <section><H>Limitations & Next Steps</H><List a={p.limits}/></section>
    {p.links&&<section><H>Project Links</H>{p.links.map(l=><a key={l.href} href={l.href} className="underline">{l.label}</a>)}</section>}
    <section><H>Related Projects</H><div className="grid gap-4 md:grid-cols-3">{related.map(r=><ProjectCard key={r.slug} p={{...r,featured:false}}/>)}</div></section>
  </div></>);}
