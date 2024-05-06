'use client'

import clsx from 'clsx'
import { useState } from 'react'
import About from './about'
import Work from './work'
import Study from './study'
import Sidebar from '@/components/sidebar'

export type PageType = 's' | 'c' | 'h' | ''

export default function Home() {
    const [selectedPage, setPage] = useState<PageType>('')

    const switchPage = (selectedPage: PageType) => {
        switch (selectedPage) {
            case 's':
                return <Study />
            case 'c':
                return <Work />
            case 'h':
                return <About />
            default:
                return
        }
    }

    return (
        <main className="flex h-dvh flex-col items-center overflow-auto lg:flex-row lg:space-x-4">
            <Sidebar selectedPage={selectedPage} setPage={setPage} />
            <hr className="w-full border border-solid border-main-600 lg:hidden" />
            {selectedPage && (
                <div className=" flex w-full flex-col items-center justify-start space-y-4 px-4 py-4 md:py-12 lg:my-auto lg:w-2/3 lg:py-16 lg:pr-6">
                    <div className="flex max-w-xl flex-col">
                        {switchPage(selectedPage)}
                    </div>
                </div>
            )}
        </main>
    )
}
