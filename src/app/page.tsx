'use client'

import { useState } from 'react'
import Brain from './brain'
import clsx from 'clsx'

type PageType = 's' | 'c' | 'h' | ''

export default function Home() {
    const [selectedPage, setPage] = useState<PageType>('')
    const [scrollOffset, setScroll] = useState<number>(0)

    const switchPage = (selectedPage: PageType) => {
        switch (selectedPage) {
            case 's':
                return <p>st</p>
            case 'c':
                return <p>cr</p>
            case 'h':
                return <p>hu</p>
            default:
                return
        }
    }

    return (
        <main className="flex h-dvh flex-row space-x-4 px-8 md:px-24 lg:px-48">
            <div
                className={clsx(
                    {
                        'w-1/2': selectedPage,
                        'w-full px-16 md:px-24 ': !selectedPage,
                    },
                    'flex flex-col items-start justify-center space-y-8 transition-all duration-700 ease-out'
                )}
            >
                <h1 className="tracking-none mb-4 cursor-pointer text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
                    <span onClick={() => setPage('')}>
                        Hi, I&apos;m Catherine
                    </span>
                </h1>
                <div className="flex items-center space-x-2">
                    <h3 className="text-3xl font-light leading-loose text-main-400 lg:text-4xl">
                        I am a{' '}
                    </h3>{' '}
                    <div className="flex h-72 flex-col justify-start overflow-clip">
                        <h3
                            className={clsx(
                                {
                                    '-top-14 font-medium text-white':
                                        selectedPage === 'c',
                                    'top-14 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 's',
                                    'top-0 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'h',
                                    'font-regular text-main-400 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-700 ease-linear lg:text-4xl'
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
                                    'top-14 font-medium text-white':
                                        selectedPage === 's',
                                    'top-0 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'h',
                                    '-top-14 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'c',
                                    'font-regular text-main-400 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-700 ease-linear lg:text-4xl'
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
                                    'top-0 font-medium text-white':
                                        selectedPage === 'h',
                                    '-top-14 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'c',
                                    'top-14 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 's',
                                    'font-regular text-main-400 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-700 ease-linear lg:text-4xl'
                            )}
                            onClick={() => {
                                setPage('h')
                            }}
                        >
                            human
                        </h3>
                        <h3
                            className={clsx(
                                {
                                    '-top-14 font-medium text-white':
                                        selectedPage === 'c',
                                    'top-14 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 's',
                                    'top-0 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'h',
                                    'font-regular text-main-400 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-700 ease-linear lg:text-4xl'
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
                                    'top-14 font-medium text-white':
                                        selectedPage === 's',
                                    'top-0 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'h',
                                    '-top-14 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'c',
                                    'font-regular text-main-400 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-700 ease-linear lg:text-4xl'
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
                                    'top-0 font-medium text-white':
                                        selectedPage === 'h',
                                    '-top-14 bg-gradient-to-t from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 'c',
                                    'top-14 bg-gradient-to-b from-main-400 bg-clip-text font-medium text-transparent hover:text-main-200 hover:drop-shadow-xl':
                                        selectedPage === 's',
                                    'font-regular text-main-400 hover:font-medium hover:text-main-200 hover:drop-shadow-xl':
                                        !selectedPage,
                                },
                                'relative cursor-pointer py-2 text-3xl leading-loose transition-all duration-700 ease-linear lg:text-4xl'
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
                <div className="w-1/2">{switchPage(selectedPage)}</div>
            )}
        </main>
    )
}
