
export const galleryItems = [
    {
      id: 1,
      image:
        "/about-image.jpeg",
      category: "performance",
      title: "Stage Performance",
    type: "video",
      videoUrl: "/booking-vid4.mp4",
    },
    {
      id: 2,
      image:
        "/instruments.jpg",
      category: "crowd",
      title: "Concert Crowd",
      type: "image",
    },
    {
      id: 3,
      image:
        "/booking2.JPG",
      category: "portrait",
      title: "Professional Portrait",
      type: "image",
    },
    {
      id: 4,
      image:
        "/perfomance-img.PNG",
      category: "performance",
      title: "Live Music",
      type: "video",
      videoUrl: "/booking-vid8.mp4",
    },
    {
      id: 5,
      image:
        "/performance-img2.PNG",
      category: "performance",
      title: "Jazz Band",
      type: "video",
      videoUrl: "/booking-vid9.mp4",
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
      title: "Concert",
      date: "Nov 20, 2025",
      venue: "Blue Note Jazz Club, NYC",
      image: "/concert1.jpeg",
      type: "image",
      category: "upcoming",
      link: "/contact",
    },
    {
      id: 2,
      title: "Corporate Gala Performance",
      date: "Nov 28, 2025",
      venue: "Grand Ballroom, Manhattan",
      image: "/concert2.jpeg",
      type: "image",
      category: "upcoming",
      link: "/contact",
    },
    {
      id: 3,
      title: "Holiday Concert Series",
      date: "Dec 5, 2024",
      venue: "Symphony Hall, Boston",
      image: "/concert-vid.mp4",
      type: "video",
      category: "past",
      link: "/concert-vid.mp4",
    },
    {
      id: 4,
      title: "Featured Charity Event",
      date: "Jan 15, 2025",
      venue: "City Hall, Los Angeles",
      image: "/concert3.jpeg",
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