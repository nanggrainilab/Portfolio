import { projects } from "@/lib/projects";
export default function sitemap(){const u=process.env.NEXT_PUBLIC_SITE_URL||"https://example.com";
  return ["","/projects",...projects.map(p=>`/projects/${p.slug}`)].map(p=>({url:u+p}))}
