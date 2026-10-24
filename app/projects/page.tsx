import ProjectGallery from "@/components/ProjectGallery";
export const metadata={title:"Projects",description:"Selected data analytics, BI, data engineering and machine learning projects by Novita Anggraini."};
export default function P(){return(<section className="light sec pt-32"><div className="wrap"><p className="label text-mute">SELECTED PROJECTS</p>
  <h1 className="h-xl mt-4 max-w-4xl">Proof of Work, Not Just Promises.</h1>
  <p className="mt-6 max-w-2xl text-lg">Projects built on real datasets, analytical methods, databases, dashboards, and machine learning models.</p>
  <div className="mt-12"><ProjectGallery/></div></div></section>);}
