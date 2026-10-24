import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { char:"#111412", ink:"#090B0A", ivory:"#F4F1E8", soft:"#FCFBF7", sage:"#A7B89A", lime:"#D6FF4F", mute:"#8C938B", line:"#D8D9D0", dline:"#2B312C" },
    fontFamily: { display:["var(--f-display)"], sans:["var(--f-body)"], mono:["var(--f-mono)"] },
  } },
  plugins: [],
} satisfies Config;
