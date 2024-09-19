'use client';

import React from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ExpandableDemo  } from "@/components/teacher/expandable-demo";
import { IconAward } from '@tabler/icons-react';


export default function ExpandablePage() {
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
          <ExpandableDemo />

        </BackgroundGradient>
      </main>

    </div>
  );
}
