export const galleryItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1669459881627-06c2a4948e33?ixlib=rb-4.0.3&q=80",
      category: "performance",
      title: "Stage Performance",
      type: "image",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1761959159004-1c94b22e3f1b?ixlib=rb-4.0.3&q=80",
      category: "crowd",
      title: "Concert Crowd",
      type: "video",
      videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1646350222809-9f414ad875d0?ixlib=rb-4.0.3&q=80",
      category: "portrait",
      title: "Professional Portrait",
      type: "image",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1561264819-1ccc1c6e0ae9?ixlib=rb-4.0.3&q=80",
      category: "performance",
      title: "Live Music",
      type: "image",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1731083122864-0e226bb5f006?ixlib=rb-4.0.3&q=80",
      category: "performance",
      title: "Jazz Band",
      type: "image",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&q=80",
      category: "crowd",
      title: "Festival Crowd",
      type: "image",
    },
];
  
export const categories = [
    { id: "all", label: "All" },
    { id: "performance", label: "Performances" },
    { id: "crowd", label: "Crowd" },
    { id: "portrait", label: "Portraits" },
];

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  image: string;
  type: "image" | "video";
  category: "upcoming" | "past" | "featured";
  link?: string; // ticket or video link
}
  
export const events: Event[] = [
    {
      id: 1,
      title: "Jazz Night at Blue Note",
      date: "Nov 20, 2025",
      venue: "Blue Note Jazz Club, NYC",
      image: "/hero-image2.jpeg",
      type: "image",
      category: "upcoming",
      link: "/contact",
    },
    {
      id: 2,
      title: "Corporate Gala Performance",
      date: "Nov 28, 2025",
      venue: "Grand Ballroom, Manhattan",
      image: "/hero-image3.jpeg",
      type: "image",
      category: "upcoming",
      link: "/contact",
    },
    {
      id: 3,
      title: "Holiday Concert Series",
      date: "Dec 5, 2024",
      venue: "Symphony Hall, Boston",
      image: "/hero-image4.jpeg",
      type: "video",
      category: "past",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Featured Charity Event",
      date: "Jan 15, 2025",
      venue: "City Hall, Los Angeles",
      image: "/hero-image5.jpeg",
      type: "image",
      category: "featured",
      link: "/contact",
    },
  ];

 export const eventCategories = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
    { id: "featured", label: "Featured" },
];
  
export const upcomingEvents = [
    {
      date: "Nov 20",
      title: "Jazz Night at Blue Note",
      venue: "Blue Note Jazz Club, NYC",
      image:
        "/hero-image2.jpeg",
    },
    {
      date: "Nov 28",
      title: "Corporate Gala Performance",
      venue: "Grand Ballroom, Manhattan",
      image:
        "/hero-image3.jpeg",
    },
    {
      date: "Dec 5",
      title: "Holiday Concert Series",
      venue: "Symphony Hall, Boston",
      image:
        "/hero-image4.jpeg",
    },
  ];