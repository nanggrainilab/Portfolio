"use client";
import { useState } from "react";
const EMAIL=process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export default function ContactForm(){
  const [err,setErr]=useState("");
  function go(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const d=new FormData(e.currentTarget);
    if(!EMAIL){setErr("Email is not configured yet. Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local.");return}
    setErr("");const body=`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nType: ${d.get("type")}\n\n${d.get("msg")}`;
    location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry: "+d.get("type"))}&body=${encodeURIComponent(body)}`;}
  const i="mt-1 w-full border border-dline bg-ink px-4 py-3 text-ivory";
  return(<form onSubmit={go} className="grid gap-4 text-left">
    <label>Name<input required name="name" autoComplete="name" className={i}/></label>
    <label>Email<input required type="email" name="email" autoComplete="email" className={i}/></label>
    <label>Project or opportunity type<select name="type" className={i}><option>Dashboard or reporting</option><option>Data analysis</option><option>Data management</option><option>Machine learning</option><option>Job opportunity</option></select></label>
    <label>Short description<textarea required name="msg" rows={4} className={i}/></label>
    <button className="btn bg-lime text-ink">Open in my email app ↗</button>
    {err&&<p role="alert" className="text-sm text-lime">{err}</p>}
    <p className="text-sm text-mute">This opens your email app with the message prepared. Nothing is sent until you send it.</p></form>);}
