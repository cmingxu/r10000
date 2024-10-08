'use client';

import React from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ResumeShort } from "@/components/teacher/resume-short";
import { IconAward } from '@tabler/icons-react';
import { Nav } from "@/components/nav";


export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen p-1 font-[family-name:var(--font-geist-sans)] lg:mt-4">
      <div className='flex w-full justify-center items-center space-x-2'>
          <IconAward stroke={2.5} className='text-2xl text-red-400'/>
          <IconAward stroke={2.5} className='text-2xl text-red-400'/>
        <h1 className="text-3xl font-bold">
          2024年教师评优
        </h1>
          <IconAward stroke={2.5} className='text-2xl text-red-400'/>
          <IconAward stroke={2.5} className='text-2xl text-red-400'/>
      </div>
      <main className="flex flex-col items-center justify-center">
        <BackgroundGradient className="rounded-[22px] max-w-lg p-2 sm:p-10 bg-white dark:bg-zinc-900">
          <ResumeShort />

          <div className='flex justify-end space-x-2 items-center'>
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              待定
            </button>

            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl transition duration-200">
              通过
            </button>
          </div>
        </BackgroundGradient>

        <Nav />
      </main>

    </div>
  );
}
