import React from "react";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Download,
  Headphones,
  GraduationCap,
  FileText,
  Image as ImageIcon,
  Layers,
  Play,
  Check
} from "lucide-react";

// Re-export standard icons
export { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Download,
  Headphones,
  GraduationCap,
  FileText,
  ImageIcon,
  Layers,
  Play,
  Check
};

// Custom TikTok Icon
export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Custom Facebook Icon
export const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Custom Youtube Icon
export const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

// Custom Eurowindow Emblem Icon
export const EurowindowLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    {...props}
  >
    <rect x="4" y="4" width="32" height="32" rx="6" fill="currentColor" />
    <path
      d="M 12,12 C 19,8 27,10 30,12 C 32,19 31,27 28,30 C 21,32 13,31 10,28 C 8,21 9,13 12,12 Z"
      fill="#005bb7"
    />
  </svg>
);

// Custom Eurowindow Full Logo Banner with Vietnamese Slogan: "Tiên Phong. Kiến Tạo. Đồng Hành."
export const EurowindowBrandLogo = ({
  textColor = "text-white",
  subColor = "text-white/80",
  className = "",
}: {
  textColor?: string;
  subColor?: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    {/* White Icon Box */}
    <div className="h-10 w-10 sm:h-11 sm:w-11 bg-white rounded-lg p-2 flex items-center justify-center shadow-md flex-shrink-0">
      <svg viewBox="0 0 40 40" className="w-full h-full text-[#005bb7]" fill="currentColor">
        <path d="M 10,9 C 20,5 30,8 33,11 C 36,20 34,29 30,33 C 20,36 10,33 7,29 C 4,20 6,12 10,9 Z" />
      </svg>
    </div>

    {/* Brand Name & Vietnamese Slogan */}
    <div className="flex flex-col leading-none">
      <span className={`font-display font-extrabold text-[20px] sm:text-[22px] tracking-tight ${textColor}`}>
        Eurowindow
      </span>
      <span className={`text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.08em] mt-1 ${subColor}`}>
        Tiên Phong. Kiến Tạo. Đồng Hành.
      </span>
    </div>
  </div>
);
