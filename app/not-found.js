"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <Image src='https://http.cat/204' alt="204" width='400' height='400' />
      <Link
        href="/"
        className="bg-[#F8F9FA] text-black px-2 transition duration-200 ease-in-out rounded-lg font-bold hover:bg-gray-300"
      >
        Go home
      </Link>
    </main>
  );
}
