import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { FACILITIES_DATA } from '../../data/mockData';
import { FacilityItem } from '../../types';

export const FacilitiesPage: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Infrastructure', 'Lab', 'Sports', 'Amenity'];

  const filteredFacilities =
    filterCategory === 'All'
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((f) => f.category === filterCategory);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            World-Class Infrastructure
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Campus Facilities & Technological Ecosystem
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Spread across 25 landscaped acres, ABC School and College is equipped with cutting-edge laboratories, smart instructional spaces, sports complexes, and 24/7 security.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
              Explore Our Campus Infrastructure
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any facility card to inspect specifications, capacities, and laboratory protocols
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:border-amber-400/70 dark:hover:border-amber-400/70 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/70 text-amber-400 text-[11px] font-semibold uppercase backdrop-blur-sm">
                    {fac.category}
                  </div>
                  <div className="absolute bottom-3 left-3 text-white text-xs font-mono tabular-nums flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{fac.capacity}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fac.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs text-slate-700 dark:text-slate-300">
                    {fac.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{fac.timing}</span>
                </span>
                <span className="font-semibold text-blue-900 dark:text-amber-400 flex items-center gap-1 group-hover:underline">
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedFacility.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full bg-slate-950/50 hover:bg-slate-950/80 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                  {selectedFacility.category}
                </span>
                <h3 className="font-serif-brand text-2xl font-bold mt-1">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">
                {selectedFacility.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Technical Specifications & Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Operational Hours:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{selectedFacility.timing}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Designated Capacity:</span>
                  <span className="font-semibold text-blue-900 dark:text-amber-400">{selectedFacility.capacity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
