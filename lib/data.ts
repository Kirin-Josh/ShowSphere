
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
        "/booking1.JPG",
      category: "portrait",
      title: "Festival Crowd",
      type: "image",
    },
    {
      id: 7,
      image:
        "/booking3.jpg",
      category: "portrait",
      title: "Studio Portrait",
      type: "image",
    },
    {
      id: 8,
      image:
        "/booking5.JPG",
      category: "portrait",
      title: "Professional Photoshoot",
      type: "image",
    },
    {
      id: 9,
      image:
        "/concert1.jpeg",
      category: "performance",
      title: "Concert Night",
      type: "image",
    },
    {
      id: 10,
      image:
        "/concert2.jpeg",
      category: "crowd",
      title: "Audience Energy",
      type: "image",
    },
    {
      id: 11,
      image:
        "/concert3.jpeg",
      category: "performance",
      title: "Featured Performance",
      type: "image",
    },
    {
      id: 12,
      image:
        "/booking6.png",
      category: "performance",
      title: "Stage Highlight",
      type: "video",
      videoUrl: "/concert-vid.MP4",
    },
    {
      id: 13,
      image:
        "/booking-vid3.PNG",
      category: "performance",
      title: "Special Moment",
      type: "video",
      videoUrl: "/booking-vid3.MP4",
    },
    {
      id: 14,
      image:
        "/performance-img2.PNG",
      category: "performance",
      title: "Saxophone Solo",
      type: "video",
      videoUrl: "/booking-vid5.mp4",
    },
    {
      id: 15,
      image:
        "/concert1.jpeg",
      category: "performance",
      title: "Concert Recording",
      type: "video",
      videoUrl: "/booking-vid7.mp4",
    },
    {
      id: 16,
      image:
        "/concert2.jpeg",
      category: "performance",
      title: "Holiday Concert",
      type: "video",
      videoUrl: "/concert-vid2.mp4",
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
  
export const events: Event[] = [];

 export const eventCategories = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
    { id: "featured", label: "Featured" },
];

interface UpcomingEvent {
  date: string;
  title: string;
  venue: string;
  image: string;
}
  
export const upcomingEvents: UpcomingEvent[] = [];