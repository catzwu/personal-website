'use client'

import clsx from 'clsx'
import { useState } from 'react'
import About from './about'
import Work from './work'
import Study from './study'

type PageType = 's' | 'c' | 'h' | ''

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
        <main className="flex h-dvh flex-col items-center space-y-4 overflow-auto md:space-y-8 lg:flex-row lg:space-x-4">
            <div
                className={clsx(
                    {
                        'w-full pt-6 md:pt-16 lg:w-1/2 lg:pl-8 lg:pt-0':
                            selectedPage,
                        'sticky top-1/3 w-full lg:w-3/4': !selectedPage,
                    },
                    'flex flex-col items-center space-y-2 transition-all duration-1000 ease-out lg:sticky lg:top-1/3 lg:space-y-8'
                )}
            >
                <h1 className="tracking-none mb-4 cursor-pointer text-4xl font-bold leading-normal text-secondary-200 md:text-5xl lg:text-6xl">
                    <span onClick={() => setPage('')}>
                        Hi, I&apos;m Catherine
                    </span>
                </h1>
                <div className="flex flex-col items-center space-x-2 md:flex-row md:space-x-4 lg:space-x-8">
                    <h3 className="mr-0 py-2 text-2xl font-extralight text-main-400 md:mr-0.5 md:text-3xl lg:mr-1 lg:text-4xl">
                        I am a{!selectedPage ? '...' : ' '}
                    </h3>{' '}
                    <div className="flex flex-col justify-center overflow-clip lg:h-72">
                        <h3
                            className={clsx(
                                {
                                    'font-medium text-white lg:top-14':
                                        selectedPage === 'c',
                                    'bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-0':
                                        selectedPage === 's',
                                    'bg-gradient-to-t from-main-600 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl lg:-top-14':
                                        selectedPage === 'h',
                                    'font-regular text-main-400 duration-200 hover:font-medium hover:text-main-200 hover:drop-shadow-xl lg:top-14':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-1 text-2xl transition-all duration-500 ease-linear md:py-2 md:text-3xl lg:text-4xl'
                            )}
                            onClick={() => {
                                setPage('c')
                            }}
                        >
                            creator of experiences
                        </h3>
                        <h3
                            className={clsx(
                                {
                                    'font-medium text-white lg:top-0':
                                        selectedPage === 's',
                                    'bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl lg:-top-14':
                                        selectedPage === 'h',
                                    'bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-14':
                                        selectedPage === 'c',
                                    'font-regular text-main-400 duration-200 hover:font-medium hover:text-main-200 hover:drop-shadow-xl lg:top-14':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-1 text-2xl transition-all duration-500 ease-linear md:py-2 md:text-3xl lg:text-4xl'
                            )}
                            onClick={() => {
                                setPage('s')
                            }}
                        >
                            perpetual student
                        </h3>
                        <h3
                            className={clsx(
                                {
                                    'font-medium text-white lg:-top-14':
                                        selectedPage === 'h',
                                    'bg-gradient-to-b from-main-600 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-14':
                                        selectedPage === 'c',
                                    'bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-0':
                                        selectedPage === 's',
                                    'font-regular text-main-400 duration-200 hover:font-medium hover:text-main-200 hover:drop-shadow-xl lg:top-14':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-1 text-2xl transition-all duration-500 ease-linear md:py-2 md:text-3xl lg:text-4xl'
                            )}
                            onClick={() => {
                                setPage('h')
                            }}
                        >
                            human
                        </h3>
                    </div>
                </div>
            </div>
            <hr className="w-full border border-solid border-main-600 lg:hidden" />
            {selectedPage && (
                <div className=" md:py-2uto flex w-full flex-col items-center justify-start space-y-4 px-4 py-1 py-4 lg:my-auto lg:w-1/2 lg:py-16 lg:pr-6">
                    <div className="flex max-w-xl flex-col">
                        {switchPage(selectedPage)}
                    </div>
                </div>
            )}
        </main>
    )
}
