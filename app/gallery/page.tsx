import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | ScraPack Solutions LLC',
  description: 'Browse our gallery of OCC bales, recycled cardboard, and export operations — ScraPack Solutions LLC.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FDFAF4]">
      {/* Hero Banner */}
      <div className="relative bg-[#1A2E1A] pt-40 pb-20 px-6 overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #E8820C 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #2D5A3D 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-[#E8820C] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Operations
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gallery
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A window into our world — OCC bales, loading operations, and the materials that power paper mills across India.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <GalleryGrid />
      </div>
    </div>
  )
}
