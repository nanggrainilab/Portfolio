import Link from "next/link";
import { BarChart3, LayoutDashboard, Database, Brain, Search, Eye, Boxes, LineChart } from "lucide-react";
import HeroScene from "@/components/HeroScene";
import ProjectGallery from "@/components/ProjectGallery";
import ContactForm from "@/components/ContactForm";
const services=[
 [BarChart3,"Data Analytics & Business Insights","Know What's Happening in Your Business.","I analyze datasets to uncover trends, performance gaps, customer behavior, and opportunities worth investigating.",["Data cleaning and validation","Exploratory data analysis","Sales and customer analysis","KPI reporting"],"Data Analytics"],
 [LayoutDashboard,"Dashboards & Business Intelligence","See the Bigger Picture, Faster.","I turn complex datasets into clear dashboards and visual reports that make important metrics easier to monitor and compare.",["Interactive dashboards","KPI monitoring","Operational reporting","Segmentation dashboards"],"Business Intelligence"],
 [Database,"Data Management & Engineering Foundations","Build a More Reliable Data Foundation.","Reliable decisions depend on reliable data. I work with SQL, data cleaning, validation, and integration concepts.",["SQL queries and extraction","Relational organization","Standardization","Duplicate and missing-value checks"],"Data Engineering"],
 [Brain,"Machine Learning & Predictive Exploration","Explore What Your Data Could Reveal Next.","I develop and evaluate models for classification and segmentation, with attention to preparation, metrics, and limitations.",["Exploratory ML","Customer segmentation","Image classification","Model evaluation"],"Machine Learning"]] as const;
const steps=[["Understand","Clarify the problem, business context, and questions the data needs to answer."],["Prepare","Inspect the data, identify quality issues, and organize the information for analysis."],["Analyze","Use suitable techniques, SQL queries, visualizations, or models to investigate the problem."],["Communicate","Present findings clearly, explain limitations, and identify practical next steps."],["Improve","Use feedback and further validation to refine the analysis or solution."]];
const skills=[["Analytics & Visualization","SQL, Python, Excel, Power BI, DAX, Looker, EDA, data visualization"],["Databases & Data Management","MySQL, relational concepts, data cleaning, validation, standardization, integration"],["Machine Learning","Python, TensorFlow/Keras, ResNet50, EfficientNetB0, K-Means, SMOTE, model evaluation"],["Development & Cloud","HTML, CSS, JavaScript, PHP, Supabase, Cloudflare, GitHub. AWS fundamentals (currently learning)"]];
export default function Home(){return(<>
<section className="relative overflow-hidden bg-char pb-20 pt-28 text-ivory md:pt-36"><div className="wrap grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
  <div className="rise"><p className="label text-sage">INDEPENDENT DATA & ANALYTICS PORTFOLIO</p>
  <h1 className="h-xl mt-5">Your Data Has a Story. Let's Find What It Can Do.</h1>
  <p className="mt-6 max-w-xl text-lg text-ivory/80">I help turn raw data into clear insights, practical dashboards, and structured data solutions—so you can understand your business better, uncover opportunities, and make decisions with greater confidence.</p>
  <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/projects" className="btn bg-lime text-ink">Explore My Work ↗</Link><Link href="#contact" className="btn border border-ivory/40 hover:border-lime">Let's Discuss Your Project</Link></div>
  <p className="label mt-8 text-mute">Data Analytics · Business Intelligence · Data Engineering · Machine Learning</p></div>
  <div className="mx-auto w-full max-w-md lg:max-w-none"><HeroScene/></div></div></section>
<section className="light sec"><div className="wrap"><h2 className="h-lg max-w-3xl">From Raw Data to Real Understanding.</h2>
  <p className="mt-5 max-w-2xl text-lg">Every useful insight starts with the right questions, reliable data, and a clear way to communicate what the numbers mean.</p>
  <ul className="mt-10 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">{[[Search,"Analyze"],[Eye,"Visualize"],[Boxes,"Structure"],[LineChart,"Predict"]].map(([I,l])=>{const Ic=I as typeof Search;return<li key={l as string} className="flex items-center gap-3 bg-soft p-5"><Ic className="text-sage" aria-hidden/>{l as string}</li>})}</ul></div></section>
<section id="services" className="light bg-soft sec"><div className="wrap"><p className="label text-mute">WHAT I CAN HELP WITH</p><h2 className="h-lg mt-3">Make Your Data Work Harder.</h2>
  <p className="mt-5 max-w-2xl text-lg">Whether you need to understand business performance, organize operational data, or explore predictive models, I focus on turning technical work into something useful and actionable. These are areas of collaboration, grounded in the projects below.</p>
  <div className="mt-12 grid gap-4 md:grid-cols-2">{services.map(([I,t,h,d,l,f],i)=>{const Ic=I as typeof Search;return(
   <article key={t} className={`flex flex-col border p-7 ${i%3===0?"border-dline bg-char text-ivory":"border-line bg-ivory"}`}><Ic className="text-lime" aria-hidden/>
   <p className="label mt-5 text-mute">{t}</p><h3 className="mt-2 font-display text-2xl">{h}</h3><p className="mt-3 opacity-80">{d}</p>
   <ul className="mt-5 list-disc space-y-1 pl-5 text-sm">{l.map(x=><li key={x}>{x}</li>)}</ul>
   <Link href="/projects" className="mt-6 min-h-[44px] self-start border-b border-current py-2 font-semibold">Explore {f} Projects →</Link></article>)})}</div></div></section>
<section className="light sec"><div className="wrap"><p className="label text-mute">SELECTED PROJECTS</p><h2 className="h-lg mt-3">Proof of Work, Not Just Promises.</h2>
  <p className="mb-10 mt-5 max-w-2xl text-lg">Selected projects using real datasets, analytical methods, databases, dashboards, and machine learning models.</p><ProjectGallery/></div></section>
<section className="bg-char sec text-ivory"><div className="wrap"><p className="label text-sage">WHY DATA NEEDS CONTEXT</p>
  <h2 className="h-lg mt-3 max-w-4xl">A Dashboard Is Only Useful When It Answers the Right Questions.</h2>
  <p className="mt-6 max-w-2xl text-lg text-ivory/80">More charts do not automatically mean better decisions. The real value comes from asking the right questions, checking the quality of the data, and making findings understandable to the people who need them.</p>
  <div className="mt-10 grid gap-px border border-dline bg-dline md:grid-cols-3">{[["Clarity Before Complexity","Start with the question that matters, then choose the right analytical approach."],["Reliable Data, Better Insights","Validate the underlying information before drawing conclusions from it."],["Insights with Purpose","Present findings so people understand what they mean and what to investigate next."]].map(([t,d])=><div key={t} className="bg-ink p-6"><h3 className="font-display text-xl text-lime">{t}</h3><p className="mt-2 text-ivory/80">{d}</p></div>)}</div></div></section>
<section className="light sec"><div className="wrap"><h2 className="h-lg">A Clear Process. A Practical Outcome.</h2>
  <ol className="mt-10 grid gap-6 border-l border-line pl-6 lg:grid-cols-5 lg:gap-4 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">{steps.map(([t,d],i)=><li key={t}><span className="label text-mute">Step {i+1}</span><h3 className="font-display text-xl">{t}</h3><p className="mt-1 text-sm">{d}</p></li>)}</ol>
  <p className="mt-6 text-sm text-mute">The process adapts to project scope and available data.</p></div></section>
<section id="about" className="light bg-soft sec"><div className="wrap grid gap-10 lg:grid-cols-[1.4fr_.6fr]"><div>
  <h2 className="h-lg">Curious About the Data. Focused on the Problem.</h2>
  <div className="mt-6 max-w-2xl space-y-4 text-lg"><p>I am Novita Anggraini, an Information Engineering graduate from Universitas Tanjungpura with a GPA of 3.66/4.00.</p>
  <p>My work and academic projects have introduced me to different ways of solving problems with technology, from analyzing customer and sales data to organizing operational information and developing machine learning models.</p>
  <p>I enjoy connecting the technical side of data with the questions people actually need answered. That means paying attention to data quality, clear explanations, and the limitations of results.</p>
  <p>I am continuing to develop my expertise in data analytics, business intelligence, data engineering, and cloud technologies through practical projects and structured learning.</p></div></div>
  <aside className="self-start border border-line bg-ivory p-6"><p className="font-display text-5xl text-sage" aria-hidden>NA</p><h3 className="mt-4 font-display text-lg">Education</h3>
  <ul className="mt-2 space-y-1 text-sm"><li>Bachelor's Degree in Information Engineering (confirm official English designation)</li><li>Universitas Tanjungpura, 2021–2026</li><li>GPA 3.66/4.00</li><li>Bronze Medal, Mandalika Essay Competition 3, 2024</li></ul></aside></div></section>
<section className="light sec"><div className="wrap"><h2 className="h-lg">The Tools Behind the Work.</h2>
  <div className="mt-10 grid gap-4 md:grid-cols-2">{skills.map(([t,d])=><div key={t} className="border border-line p-6"><h3 className="font-display text-xl">{t}</h3><p className="mt-2">{d}</p></div>)}</div>
  <h3 className="h-lg mt-16 !text-2xl md:!text-3xl">Building Skills Through Practice.</h3>
  <p className="mt-3 max-w-2xl">Ongoing development, not completed professional qualifications.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-3">{[["Data Engineering","SQL, database design, data integration, and pipeline fundamentals."],["Cloud Technologies","AWS fundamentals, cloud security concepts, compute, storage, databases, and networking."],["Machine Learning","Model validation, class imbalance, generalization, and evaluation beyond accuracy alone."]].map(([t,d])=><div key={t} className="bg-char p-6 text-ivory"><h4 className="font-display text-lg text-lime">{t}</h4><p className="mt-2 text-sm text-ivory/80">{d}</p></div>)}</div></div></section>
<section id="contact" className="bg-ink sec text-ivory"><div className="wrap grid gap-12 lg:grid-cols-2"><div>
  <p className="label text-sage">HAVE A DATA CHALLENGE?</p><h2 className="h-xl mt-4">Let's Turn Your Data into Something Useful.</h2>
  <p className="mt-6 max-w-lg text-lg text-ivory/80">Need a clearer view of your business performance, a more useful dashboard, or help exploring a dataset? Tell me what you are trying to understand. We can start with the problem, identify the information available, and explore a practical next step.</p>
  <a href="https://linkedin.com/in/novitanggraini" className="btn mt-8 border border-ivory/40 hover:border-lime">Connect on LinkedIn</a>
  <p className="mt-6 text-sm text-mute">Not sure what you need yet? That's okay. Start by describing the question you want your data to answer.</p></div>
  <ContactForm/></div></section>
</>);}
