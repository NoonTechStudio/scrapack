/**
 * Line-icon set used site-wide in place of emoji.
 * All icons are 24×24, stroke-based, and inherit `currentColor`,
 * so they pick up whatever text colour the surrounding tile sets.
 */

type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

function Svg({
  className,
  size = 24,
  strokeWidth = 1.6,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ── Location & contact ── */

export const MapPinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 10c0 5.4-8 12-8 12s-8-6.6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.75" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 7 7.34 5.24a2 2 0 0 0 2.32 0L20.5 7" />
  </Svg>
);

export const ChatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 12.2a8.3 8.3 0 0 1-11.9 7.5L3 21l1.4-5.1A8.3 8.3 0 1 1 21 12.2Z" />
    <path d="M8.75 12h.01M12 12h.01M15.25 12h.01" strokeWidth="2.2" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.2 3.5h3l1.5 3.8-2 1.4a12.5 12.5 0 0 0 6.6 6.6l1.4-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </Svg>
);

/* ── Trade & logistics ── */

export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
  </Svg>
);

export const ShipIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 17.5c1.6 0 1.6 1.4 3.2 1.4s1.6-1.4 3.2-1.4 1.6 1.4 3.2 1.4 1.6-1.4 3.2-1.4 1.6 1.4 3.2 1.4" />
    <path d="M4.5 14.2 12 11.5l7.5 2.7-1.4 3.3H5.9Z" />
    <path d="M7.5 12.4V8.2h9v4.2M12 8.2V5.4M9.6 5.4h4.8" />
  </Svg>
);

export const ContainerIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="7" width="19" height="10" rx="1.5" />
    <path d="M7 7v10M11 7v10M15 7v10M19 7v10" />
  </Svg>
);

export const BoxIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 8.2v7.6a1.6 1.6 0 0 1-.85 1.41l-7.4 3.9a1.6 1.6 0 0 1-1.5 0l-7.4-3.9A1.6 1.6 0 0 1 3 15.8V8.2a1.6 1.6 0 0 1 .85-1.41l7.4-3.6a1.6 1.6 0 0 1 1.5 0l7.4 3.6A1.6 1.6 0 0 1 21 8.2Z" />
    <path d="m3.4 7.3 8.6 4.3 8.6-4.3M12 11.6V20" />
  </Svg>
);

export const BaleIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="7" rx="1.4" />
    <rect x="3" y="12.5" width="18" height="7" rx="1.4" />
    <path d="M8.5 4.5v15M15.5 4.5v15" />
  </Svg>
);

export const RecycleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8.3 4.9 12 11l-3.2 1.9" />
    <path d="M12 11 8.3 4.9a1.7 1.7 0 0 0-2.9.05L3.2 9" />
    <path d="M16.4 8.3 20 14.5a1.7 1.7 0 0 1-1.45 2.55H15.5" />
    <path d="m18 14.6-1.6-6.3-3.6 1" />
    <path d="M9.6 17.05H5.45A1.7 1.7 0 0 1 4 14.5l1.9-3.2" />
    <path d="m6.6 20.2-3-3.15L6.7 14" />
  </Svg>
);

export const FactoryIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 20.5V11l5.5 3.2V11L14 14.2V8.4l7 4.1v8Z" />
    <path d="M6.6 8.4V3.5h3.1v3.2" />
    <path d="M7 17.5h1.4M11.4 17.5h1.4M15.8 17.5h1.4" />
  </Svg>
);

export const TruckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2.5 6.5h10.2v10H2.5z" />
    <path d="M12.7 10h3.6l2.9 3v3.5h-6.5z" />
    <circle cx="7" cy="18.2" r="1.9" />
    <circle cx="17" cy="18.2" r="1.9" />
  </Svg>
);

export const RouteIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="5.5" cy="5.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
    <path d="M8 5.5h6.5a3.5 3.5 0 0 1 0 7h-5a3.5 3.5 0 0 0 0 7H16" strokeDasharray="1.5 3" />
  </Svg>
);

/* ── Quality & trust ── */

export const VerifiedIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.2 19 6v5.6c0 4.2-2.8 7.6-7 9.2-4.2-1.6-7-5-7-9.2V6Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </Svg>
);

export const InspectIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10.8" cy="10.8" r="6.3" />
    <path d="m15.4 15.4 4.1 4.1" />
    <path d="m8.4 10.9 1.8 1.8 3.3-3.5" />
  </Svg>
);

export const HandshakeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M11 7.5 8.6 9.9a1.9 1.9 0 0 0 2.7 2.7l.7-.7 3.3 3.3a1.7 1.7 0 0 0 2.4-2.4" />
    <path d="M12 8.6 14 6.8l6 4.6M4 11.4l4-4.6 3.2 1.1" />
    <path d="m13.6 13.4 1.7 1.7M11.9 15.1l1.7 1.7M10.2 16.8l1.2 1.2" />
  </Svg>
);

export const DocumentIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13.6 3.2H6.8a1.8 1.8 0 0 0-1.8 1.8v14a1.8 1.8 0 0 0 1.8 1.8h10.4a1.8 1.8 0 0 0 1.8-1.8V8.4Z" />
    <path d="M13.6 3.2v5.2H19M8.6 13h6.8M8.6 16.6h4.6" />
  </Svg>
);

export const LockIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.5" y="10.2" width="15" height="10.3" rx="2.2" />
    <path d="M8.2 10.2V7.6a3.8 3.8 0 0 1 7.6 0v2.6" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={p.strokeWidth ?? 2.2}>
    <path d="m4.8 12.4 4.6 4.6L19.2 7.2" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={p.strokeWidth ?? 2}>
    <path d="m5.5 8.75 6.5 6.5 6.5-6.5" />
  </Svg>
);

/* ── Tire programme ── */

export const TireIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" />
    <path d="m5.6 5.6 2.3 2.3M16.1 16.1l2.3 2.3M18.4 5.6l-2.3 2.3M7.9 16.1l-2.3 2.3" />
  </Svg>
);

export const FlameIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21c3.6 0 6.2-2.4 6.2-5.7 0-3.9-3.5-5.2-3.5-9.1 0-1-.3-1.9-1-2.7-.5 2.9-2.4 3.7-3.9 5.6a7.6 7.6 0 0 0-2 5.1c0 .9.2 1.7.5 2.4" />
    <path d="M12 21c-1.9 0-3.3-1.4-3.3-3.2 0-2.1 2.2-3 3-5.2.9 1.6 3.1 2.6 3.1 5.1A3.2 3.2 0 0 1 12 21Z" />
  </Svg>
);

export const BeakerIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.5 3.2v6.1L4.6 17.6a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3l-4.9-8.3V3.2" />
    <path d="M8.2 3.2h7.6M7 14.6h10" />
  </Svg>
);

export const RoadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8.4 3.2 5.2 20.8M15.6 3.2l3.2 17.6" />
    <path d="M12 4.2v2.6M12 10.7v2.6M12 17.2v2.6" />
  </Svg>
);

export const LayersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3 8.5 4.4L12 11.8 3.5 7.4Z" />
    <path d="m3.5 12.2 8.5 4.4 8.5-4.4M3.5 16.6 12 21l8.5-4.4" />
  </Svg>
);

export const LeafIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 19.5c0-8 5.2-13 15-13 0 8.5-4.6 13-10.4 13Z" />
    <path d="M4.5 19.5c2.6-4.4 5.6-7 9.2-8.6" />
  </Svg>
);

export const ScaleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4.2v16M7.5 20.2h9M12 6.4l7 2M12 6.4l-7 2" />
    <path d="M2.4 14.2 5 8.6l2.6 5.6a2.7 2.7 0 0 1-5.2 0ZM16.4 14.2 19 8.6l2.6 5.6a2.7 2.7 0 0 1-5.2 0Z" />
  </Svg>
);
