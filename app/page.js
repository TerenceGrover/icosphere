'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex-col">
        <div className="">
          <div className="w-2/3 rounded mx-auto">
            <img src="https://media.licdn.com/dms/image/D4D03AQE54ST1DlzLYQ/profile-displayphoto-shrink_800_800/0/1701356787470?e=1706745600&v=beta&t=klajhKntwm6Ef4GQU4NHt3pz4Oh-rNt3Fg_wKZLd2Y0" />
          </div>
        </div>
        <Link className='btn btn-square btn-outline z-30 text-md md:text-2xl w-[40vw] sm:w-[25vw] lg:w-[15vw] h-auto px-1 py-3' href='/rendu'>
          MODELISATION 3D ET RENDU
        </Link>
      </div>
    </div>
  )
}
