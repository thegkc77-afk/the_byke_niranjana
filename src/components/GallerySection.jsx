import React from 'react';

export default function GallerySection({ onOpenLightbox }) {
  const galleryItems = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpbF9dgN8f3Dbg-YKOTpV5sOZnJOHUXxW_Uu6kfKb5czx1EmUPycMq4JkAGjsyb2MAQ70lr7A03o87c8ohV4posT6cz0YYALVAIKC05J6vz44UGYwYvg-MTqcvQhGYa2NG97FNLOQuYcObgWv_2s_OG2WAYsDEtOC7R5Ggmv9gSYTuH-4SkHeVFNPLm2ShutbGetXtrLGy9HLLq_8fKoHSVyqxeIF3yFR-c-3IH6HAo7DDirPkLFMH',
      title: 'Resort Cottage Exterior',
      height: 'h-80'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0-6RcHjlL1Gr-HAwWanXyCUfkTFkYY6HEAYxT07QT11m8OpkvhOxAQ0Tj5BxnRPvB27-Cj3R2L_2BKRXxOSGSxVZCCCmSa4zmDciyrHLIpmO6k_WcOj3ghHgKbbDzckEjKzd1LkVkAnzZJTqcDVHxqVhlgWZU__cxajWwavNqp__YzT_LHMCZrXW9ij0CoMa2_BvTJDKLa1ui1bzPnKPM3kOHjng0kz1pVI1GBFnPgunpPXZnJF8',
      title: 'Wooden Cottage Bedroom',
      height: 'h-64'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlxz5MzoapKG9a6rUTGATfIzitMX1Dzzfixe6NxGJXCdJM45PnJTYGngsdFZ277WawinfqygdZay1iVNICt9XdWFBvZHd6DCmY5Bp54tpbpZK8zwe8ZugcjuIaKLi_uRPKFnz13X3uvXi9KFxIDP17V10eaC6RFXHO3JZYw9pinqxz9JlHptgKciLx6UMImSMZY1X4GW8p-Wxo5hV-5alXPNSLWr9R-_WWWGt5gKOWz7CHu5LWbks7',
      title: 'Tranquil Verandas & Gardens',
      height: 'h-[400px]'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjlFL3VBDbHzHj1Kgv0EnwhAQ7Gw39ZThZP42KhkpCGbMJXLNhOl6Q6CMdGCiJFPmlDE4KxYcVULZJCjl-nqeyaYxVmbi-HykTloiHEPQ-Uc6rp7NVasXbqFNopSmuaH1h0LBVVpuijjhUvoyalB1CYvKddZiAUK8BVaSbKijRIFssnPQ-GunQQLMhQci2Msp655BqTIAev8oXK_S8OXAhw6LlQW3ILaDUllMxyWVG6mRwNH22oD-',
      title: 'Gourmet Pure Vegetarian Dining',
      height: 'h-56'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA93kQlITHa2uC7lACAJY-ybQHhnFXItVgKUYGh3j11DZ3mUsgXtrbvSeek5j3Pyv3yEriSB5KVFUsq10TbBpHI1VFc3lLvZIhvXj6w9F-uOOdLEj9gIXltjsIlsa7hb_1rWpy10StRuXbUydsREHA77WbDkax3Cpm9E3vdjtdhkxP91mifNTqj-sdRamJlfiSnvQN6xPvrsvb3W1oWTQzCDyO9yD0dAbyClQoKQIbiiVYZpUl3m1Lk',
      title: 'Spacious Family Bungalow',
      height: 'h-64'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-jP3vI6Qp7cODuGDl4G9eS5d7oUm1jsECGFIdvJgmj9_YPvCgq9TXlypIyOzVOa9Fdy9bm67qSqgkpynfTOP0k5gFiRSedi9S3yeswHOtcrFo1GuVhB_4kXhkcn3psMwISt0JqEF54YPrJQ4llkHBysft9cB0wxupVsfn2d5uSGweA7Ht9ZCZf-gViLY-b7uFU-Vfruy11C37CyweJX_6Jczdpq0ks3uYyJh0xE7WXgsyNMd9_suI',
      title: 'Evening Banquet Lawns',
      height: 'h-80'
    }
  ];

  return (
    <section className="w-full py-24 bg-surface-container-low relative" id="gallery">
      <div className="max-w-[1320px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-space-xs mb-16">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
            Visual Sanctuary
          </span>
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
            A Glimpse of The Byke Niranjana
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            A visual walk through our wooden cottages, tranquil verandas, and peaceful gardens.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Col 1 */}
          <div className="space-y-6">
            {[galleryItems[0], galleryItems[1]].map((item, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenLightbox(item)}
                className="overflow-hidden bg-surface shadow-md group relative cursor-pointer border border-surface-variant/40"
              >
                <img 
                  alt={item.title} 
                  className={`w-full ${item.height} object-cover transition-transform duration-700 group-hover:scale-105`} 
                  src={item.url} 
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface font-semibold flex items-center justify-between w-full">
                    <span>{item.title}</span>
                    <span className="material-symbols-outlined text-base">zoom_in</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
            {[galleryItems[2], galleryItems[3]].map((item, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenLightbox(item)}
                className="overflow-hidden bg-surface shadow-md group relative cursor-pointer border border-surface-variant/40"
              >
                <img 
                  alt={item.title} 
                  className={`w-full ${item.height} object-cover transition-transform duration-700 group-hover:scale-105`} 
                  src={item.url} 
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface font-semibold flex items-center justify-between w-full">
                    <span>{item.title}</span>
                    <span className="material-symbols-outlined text-base">zoom_in</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            {[galleryItems[4], galleryItems[5]].map((item, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenLightbox(item)}
                className="overflow-hidden bg-surface shadow-md group relative cursor-pointer border border-surface-variant/40"
              >
                <img 
                  alt={item.title} 
                  className={`w-full ${item.height} object-cover transition-transform duration-700 group-hover:scale-105`} 
                  src={item.url} 
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface font-semibold flex items-center justify-between w-full">
                    <span>{item.title}</span>
                    <span className="material-symbols-outlined text-base">zoom_in</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Full Gallery Action */}
        <div className="pt-12 text-center">
          <button 
            onClick={() => onOpenLightbox(galleryItems[0])}
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-4 transition-colors hover:bg-secondary font-semibold"
          >
            View Full High-Res Gallery
            <span className="material-symbols-outlined text-sm">grid_view</span>
          </button>
        </div>

      </div>
    </section>
  );
}
