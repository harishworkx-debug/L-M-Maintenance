import { Phone } from 'lucide-react';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${PHONE}`}
      className="fixed bottom-0 left-0 right-0 w-full z-50 lg:hidden flex items-center justify-center gap-2 bg-blue-700 active:bg-blue-800 text-white font-bold py-4 shadow-[0_-4px_15px_rgba(0,0,0,0.15)] transition-all"
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      <span className="relative flex h-2.5 w-2.5 mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>
      <Phone className="w-5 h-5" />
      <span className="text-base tracking-wide uppercase">CALL NOW — {PHONE_DISPLAY}</span>
    </a>
  );
}
