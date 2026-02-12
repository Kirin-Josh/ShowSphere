"use client";
import { FooterComponent } from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { HomePage } from "@/components/HomePage";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    const cleanPage = page.startsWith("/") ? page.slice(1) : page;

    if (cleanPage === "home") {
      router.push("/");
    } else {
      router.push(`/${cleanPage}`);
    }
  };

  return (
    <div className="min-h-screen">
      <NavbarComponent currentpage="home" onNavigate={handleNavigate} />
      <HomePage onNavigate={handleNavigate} />
      <FooterComponent onNavigate={handleNavigate} />
    </div>
  );
}
