import Banner from "@/components/Banner";
import Image from "next/image";
import Advertisement from "@/components/Advertisement";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Banner />
      <Advertisement />
    </div>
  );
}
