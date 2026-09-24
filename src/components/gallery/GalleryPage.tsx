import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/mockData';
import { GalleryPhoto } from '../../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Classrooms', 'Sports', 'Cultural', 'Events'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === selectedCategory);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex(
      (activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Life at ABC
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Campus Photo Gallery & Visual Chronicles
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            A glimpse into our vibrant educational atmosphere: academic triumphs, sports competitions, laboratory discoveries, and cultural celebrations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
              Campus Moments
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select category or click any image to view in high definition
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-800 cursor-pointer h-64 hover:border-amber-400/80 transition-all"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                  {photo.category} · {photo.date}
                </span>
                <h4 className="font-serif-brand font-bold text-sm leading-tight text-slate-100">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={filteredPhotos[activePhotoIndex].title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-150"
          onClick={() => setActivePhotoIndex(null)}
        >
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-h-[65vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <img
                src={filteredPhotos[activePhotoIndex].imageUrl}
                alt={filteredPhotos[activePhotoIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 mt-3 text-white text-center">
              <div className="text-xs text-amber-400 uppercase font-semibold">
                {filteredPhotos[activePhotoIndex].category} · {filteredPhotos[activePhotoIndex].date}
              </div>
              <h3 className="font-serif-brand font-bold text-lg mt-0.5">
                {filteredPhotos[activePhotoIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl mx-auto">
                {filteredPhotos[activePhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
