// Centralized temporary image placeholders.
//
// These Pixabay URLs are temporary placeholders only. Each entry has a
// `fallback` pointing at a known-good Unsplash asset (already allowed by the
// Next image config) so the UI never shows a broken image if a remote host
// blocks hotlinking.
export interface PlaceholderImage {
  src: string;
  fallback: string;
}

export const images = {
  earthObservation: {
    src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/earth-1867616_1280.jpg",
    fallback:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  satellite: {
    src: "https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_1280.jpg",
    fallback:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  artificialIntelligence: {
    src: "https://cdn.pixabay.com/photo/2018/05/18/15/30/artificial-intelligence-3410137_1280.jpg",
    fallback:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
  },
  technology: {
    src: "https://cdn.pixabay.com/photo/2017/12/29/18/47/web-3045817_1280.jpg",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  nature: {
    src: "https://cdn.pixabay.com/photo/2016/11/19/14/00/forest-1835019_1280.jpg",
    fallback:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
  },
} satisfies Record<string, PlaceholderImage>;

export type ImageKey = keyof typeof images;

// Resolve a placeholder image into its primary src + fallback pair.
export function placeholder(key: ImageKey): PlaceholderImage {
  return images[key];
}
