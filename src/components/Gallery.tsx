import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery1.jpg',
    alt: 'A',
  },
  {
    id: 2,
    src: '/images/gallery2.jpg',
    alt: 'B',
  },
  {
    id: 3,
    src: '/images/gallery3.jpg',
    alt: 'C',
  },
  {
    id: 4,
    src: '/images/gallery4.jpg',
    alt: 'D',
  },
  {
    id: 5,
    src: '/images/gallery5.jpg',
    alt: 'E',
  },
  {
    id: 6,
    src: '/images/gallery6.jpg',
    alt: 'F',
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return
      
      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold gradient-text text-center mb-12">
          Memory Lane
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-card scale-in cursor-pointer aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-lg max-h-[85vh] mx-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={closeLightbox}
                className="absolute -top-8 right-0 z-10 birthday-card"
              >
                <X className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={prevImage}
                className="absolute left-2 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 birthday-card"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextImage}
                className="absolute right-2 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 birthday-card"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="lightbox-image rounded-xl scale-in"
              />
            </div>

            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            />
          </div>
        )}
      </div>
    </section>
  )
}