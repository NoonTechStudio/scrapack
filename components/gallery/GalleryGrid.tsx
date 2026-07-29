'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/t1.jpeg', alt: 'High-density baled scrap tires stacked in the yard, ready for export' },
  { src: '/images/t5.jpeg', alt: 'Steel-wire tied scrap tire bales awaiting container loading' },
  { src: '/images/t3.jpeg', alt: 'Scrap tire bales loaded into a 40-foot high-cube export container' },
  { src: '/images/t4.jpeg', alt: 'Container loading pattern for baled scrap tires — 24 to 27 MT per container' },
  { src: '/images/t2.jpeg', alt: 'Compressed passenger and light-truck tire bales at the collection yard' },
  { src: '/images/1.webp', alt: 'OCC bales stacked in warehouse' },
  { src: '/images/2.avif', alt: 'Compressed cardboard bales' },
  { src: '/images/3.webp', alt: 'OCC Grade 11 bales ready for export' },
  { src: '/images/4.webp', alt: 'Recycled cardboard bale stacks' },
  { src: '/images/5.webp', alt: 'Large warehouse with OCC bales' },
  { src: '/images/6.jpg', alt: 'OCC bales in storage facility' },
  { src: '/images/7.avif', alt: 'Tightly baled cardboard materials' },
  { src: '/images/8.jpeg', alt: 'Export-ready OCC bales' },
  { src: '/images/9.jpeg', alt: 'OCC bales loading operations' },
  { src: '/images/10.jpeg', alt: 'High-quality recycled cardboard' },
  { src: '/images/11.jpg', alt: 'OCC bales at loading dock' },
  { src: '/images/12.jpeg', alt: 'Container loading operations' },
  { src: '/images/13.jpg', alt: 'Bulk OCC bale storage' },
  { src: '/images/14.jpg', alt: 'Sorted cardboard for paper mills' },
  { src: '/images/15.jpeg', alt: 'OCC Grade 12 bales' },
  { src: '/images/16.jpeg', alt: 'Warehouse OCC inventory' },
  { src: '/images/17.jpeg', alt: 'Bale weighing and inspection' },
  { src: '/images/18.jpg', alt: 'Shipping container with OCC bales' },
  { src: '/images/19.jpg', alt: 'OCC export cargo ready' },
  { src: '/images/20.jpg', alt: 'Port operations — OCC shipment' },
]

// Deterministic span assignments for the masonry feel. Kept as a repeating
// pattern so the grid stays balanced however many images are in the list.
const SPAN_PATTERN = ['row-span-2', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-2', 'row-span-2']
const spanFor = (i: number) => SPAN_PATTERN[i % SPAN_PATTERN.length]

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const open = useCallback((i: number) => setLightbox(i), [])
  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null), [])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % images.length : null), [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }, [close, prev, next])

  return (
    <>
      {/* Masonry-style CSS grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        style={{ gridAutoRows: '160px' }}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`${spanFor(i)} relative overflow-hidden rounded-2xl cursor-pointer group bg-[#EAF1F3]`}
            onClick={() => open(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#10252B]/0 group-hover:bg-[#10252B]/45 transition-all duration-300 flex items-center justify-center">
              <svg className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" /><path d="M11 8v6M8 11h6" strokeLinecap="round" />
              </svg>
            </div>
            {/* Bottom gradient for label */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" /></svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
            aria-label="Previous"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl mx-16 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain rounded-xl"
              preload
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
            aria-label="Next"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
