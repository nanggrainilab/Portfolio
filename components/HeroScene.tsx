// Lightweight isometric SVG scene: sources -> structured store -> analytics. Illustrative, no real data.
const Block=({x,y,h,c}:{x:number;y:number;h:number;c:string})=>(<g transform={`translate(${x} ${y})`}>
  <polygon points={`0,${-h} 40,${-h+20} 0,${-h+40} -40,${-h+20}`} fill={c}/>
  <polygon points={`-40,${-h+20} 0,${-h+40} 0,40 -40,20`} fill="#1B211D" stroke="#2B312C"/>
  <polygon points={`40,${-h+20} 0,${-h+40} 0,40 40,20`} fill="#151A17" stroke="#2B312C"/></g>);
export default function HeroScene(){return(
<svg viewBox="0 0 520 440" role="img" aria-label="Illustration: scattered data blocks flowing into an organized database and an analytics panel" className="h-auto w-full max-w-[560px]">
  <g fill="none" stroke="#D6FF4F" strokeWidth="1.5" opacity=".8">
    <path className="flow" d="M110 250 C170 230 200 250 250 230"/><path className="flow" d="M110 330 C170 330 210 290 250 250"/>
    <path className="flow" d="M290 220 C340 200 360 190 400 170"/></g>
  <Block x={90} y={270} h={30} c="#2B312C"/><Block x={70} y={350} h={20} c="#2B312C"/><Block x={150} y={380} h={40} c="#3A433C"/>
  <Block x={270} y={260} h={90} c="#A7B89A"/><Block x={270} y={330} h={50} c="#8C938B"/>
  <Block x={420} y={200} h={60} c="#D6FF4F"/>
  <g transform="translate(330 40)"><rect width="170" height="96" fill="#151A17" stroke="#2B312C"/>
    {[20,38,26,52,44,70].map((h,i)=><rect key={i} x={14+i*25} y={84-h} width="14" height={h} fill={i===5?"#D6FF4F":"#A7B89A"}/>)}
    <text x="14" y="16" fill="#8C938B" fontSize="9" fontFamily="monospace">illustrative</text></g>
  {[[60,200],[130,170],[40,300]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="#D6FF4F"/>)}
</svg>);}
