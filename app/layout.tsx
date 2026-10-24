import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";
const d = Space_Grotesk({
  subsets: ["latin"],
  variable: "--f-display",
});

const b = Inter({
  subsets: ["latin"],
  variable: "--f-body",
});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://example.com"),
  title:{default:"Novita Anggraini | Data Analytics, BI & Data Engineering",template:"%s | Novita Anggraini"},
  description:"Explore Novita Anggraini's work in data analytics, business intelligence, data management, and machine learning. Discover project case studies, dashboards, and analytical solutions.",
  openGraph:{title:"Novita Anggraini | Data Analytics, BI & Data Engineering",type:"website"},
  icons:{icon:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23111412'/><text x='16' y='21' font-size='14' font-weight='700' text-anchor='middle' fill='%23D6FF4F' font-family='sans-serif'>NA</text></svg>"}};
export default function L({children}:{children:React.ReactNode}){
  const gh=process.env.NEXT_PUBLIC_GITHUB_URL,em=process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return(<html lang="en" className={`${d.variable} ${b.variable}`}><body>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-lime focus:p-3">Skip to content</a>
    <Header/><main id="main">{children}</main>
    <footer className="bg-ink py-12 text-ivory"><div className="wrap grid gap-8 md:grid-cols-3">
      <div><p className="font-display text-xl">NA · Novita Anggraini</p><p className="mt-2 max-w-xs text-sm text-mute">Exploring data, building clarity, and learning through practical work.</p></div>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">{[["Home","/"],["Services","/#services"],["Projects","/projects"],["About","/#about"],["Contact","/#contact"]].map(([l,h])=><Link key={l} href={h} className="min-h-[24px] hover:text-lime">{l}</Link>)}</nav>
      <div className="flex flex-wrap gap-5 text-sm"><a href="https://linkedin.com/in/novitanggraini" className="hover:text-lime">LinkedIn</a>{gh&&<a href={gh} className="hover:text-lime">GitHub</a>}{em&&<a href={`mailto:${em}`} className="hover:text-lime">Email</a>}</div>
      <p className="label text-mute md:col-span-3">© 2026 Novita Anggraini. All rights reserved.</p></div></footer>
  </body></html>);}
