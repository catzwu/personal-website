'use client'

import clsx from 'clsx'
import { useState } from 'react'
import About from './about'
import Work from './work'

type PageType = 's' | 'c' | 'h' | ''

export default function Home() {
    const [selectedPage, setPage] = useState<PageType>('')

    const switchPage = (selectedPage: PageType) => {
        switch (selectedPage) {
            case 's':
                return <p>st</p>
            case 'c':
                return <Work />
            case 'h':
                return <About />
            default:
                return
        }
    }

    return (
        <main className="flex h-dvh flex-row items-center space-x-4 overflow-auto">
            <div
                className={clsx(
                    {
                        'w-1/2 pl-8 md:pl-24 lg:pl-48': selectedPage,
                        'w-full px-24 md:px-48 lg:px-64 ': !selectedPage,
                    },
                    'sticky top-1/3 flex flex-col items-start justify-center space-y-8 transition-all duration-700 ease-out'
                )}
            >
                <h1 className="tracking-none mb-4 cursor-pointer text-4xl font-bold leading-loose text-secondary-200 md:text-5xl lg:text-6xl">
                    <span onClick={() => setPage('')}>
                        Hi, I&apos;m Catherine
                    </span>
                </h1>
                <div className="flex items-center space-x-2">
                    <h3 className="mr-1 text-3xl font-extralight leading-loose text-main-400 lg:text-4xl">
                        I am a{!selectedPage ? '...' : ' '}
                    </h3>{' '}
                    <div className="flex h-72 flex-col justify-center overflow-clip">
                        <h3
                            className={clsx(
                                {
                                    'top-14 font-medium text-white':
                                        selectedPage === 'c',
                                    'top-0 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 's',
                                    '-top-14 bg-gradient-to-t from-main-600 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'h',
                                    'font-regular top-14 ml-8 text-main-400 duration-200 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-500 ease-linear lg:text-4xl'
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
                                    'top-0 font-medium text-white':
                                        selectedPage === 's',
                                    '-top-14 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'h',
                                    'top-14 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'c',
                                    'font-regular top-14 ml-8 text-main-400 duration-200 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-500 ease-linear lg:text-4xl'
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
                                    '-top-14 font-medium text-white':
                                        selectedPage === 'h',
                                    'top-14 bg-gradient-to-b from-main-600 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'c',
                                    'top-0 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 's',
                                    'font-regular top-14 ml-8 text-main-400 duration-200 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-500 ease-linear lg:text-4xl'
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

            {selectedPage && (
                <div className="my-auto flex max-h-full w-1/2 flex-col items-start justify-start space-y-4 py-12 pr-8 md:py-24 md:pr-24 lg:py-32 lg:pr-48">
                    {switchPage(selectedPage)}
                </div>
            )}
        </main>
    )
}
