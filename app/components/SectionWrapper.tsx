// "use client";

// import { FluidParticlesBackground } from "@/components/fluid-particles-background";

// interface SectionWrapperProps {
//   children: React.ReactNode;
//   className?: string;
//   id?: string;
// }

// export default function SectionWrapper({
//   children,
//   className = "",
//   id,
// }: SectionWrapperProps) {
//   return (
//     <div id={id} className={`relative w-full ${className}`}>
//       <FluidParticlesBackground>
//         {/* Particles ke upar dark overlay — content readable rahe */}
//         <div className="absolute inset-0 bg-[#0a0a0a]/80 pointer-events-none z-[1]" />

//         {/* Actual section content */}
//         <div className="relative z-[2] w-full">{children}</div>
//       </FluidParticlesBackground>
//     </div>
//   );
// }
