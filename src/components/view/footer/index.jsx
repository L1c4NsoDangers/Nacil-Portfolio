import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

import Link from "next/link";

import { FaSquareThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black w-full p-20 text-orange-600 py-12 mt-24">
      <div className="max-w-screen-xl">
        <div className="justify-between  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Bagian 1: Informasi Kontak */}
          <div className=" col-span-1 sm:col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Contact Us :</h3>
            <p className="mb-2">
              Address: Jl. Bromo VII, Banjarsari, Surakarta
            </p>
            <p className="mb-2">Phone: +6281225568420</p>
            <p>Email: ramdhanihw420@gmail.com</p>
          </div>

          {/* Bagian 2: Informasi Layanan */}
          <div className="r  col-span-1 sm:col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Services :</h3>
            <p className="mb-2">Graphic Design Services</p>
            <p className="mb-2">Program Development Services</p>
            <p>Pentester Services</p>
          </div>

          {/* Bagian 3: Tautan Sosial Media */}
          <div className=" text-orange-600 items-center col-span-1 sm:col-span-1 md:col-span-1">
            <h3 className="text-2xl text-orange-600 font-bold mb-4">
              Social Media
            </h3>
            <div className=" flex gap-4">
              <Link href="#" className="text-4xl">
                <FaFacebookSquare />
              </Link>
              <Link href="#" className="text-4xl">
                <FaInstagramSquare />
              </Link>
              <Link href="#" className="text-4xl">
                <FaSquareThreads />
              </Link>
              <Link href="#" className="text-4xl">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
