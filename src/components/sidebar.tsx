import { PageType } from '@/app/page'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

const Sidebar = ({
    selectedPage,
    setPage,
}: {
    selectedPage: PageType
    setPage: Dispatch<SetStateAction<PageType>>
}) => {
    return (
        <div
            className={clsx(
                {
                    'items-center px-4 py-6 lg:w-1/3 lg:max-w-[28rem] lg:pt-0':
                        selectedPage,
                    'h-full items-center': !selectedPage, // TODO: fix width changing with bold
                },
                'bg-main-900 flex w-full flex-col justify-center transition-all  duration-500 ease-out lg:sticky lg:top-0 lg:h-full'
            )}
        >
            <div
                className={clsx({
                    'flex flex-col lg:w-1/2': !selectedPage,
                })}
            >
                <p
                    className={clsx(
                        {
                            'mb-2 text-2xl font-medium lg:text-3xl':
                                selectedPage,
                            'mb-10 text-4xl font-bold md:text-5xl lg:text-6xl':
                                !selectedPage,
                        },
                        'tracking-none cursor-pointer leading-normal text-secondary-200 duration-500'
                    )}
                >
                    <span onClick={() => setPage('')}>Catherine Wu</span>
                </p>

                {/* TODO: fix scrolling (just use js) */}
                <div
                    className={clsx(
                        {
                            'flex-col space-y-6': !selectedPage,
                            // TODO: fix weird edge case below 472px
                            'flex-row justify-between min-[472px]:w-[36rem] lg:w-full lg:flex-col lg:space-y-4':
                                selectedPage,
                        },
                        'flex  lg:pt-6'
                    )}
                >
                    <h3
                        className={clsx(
                            {
                                'font-regular text-white md:text-xl lg:text-2xl':
                                    selectedPage === 'c',
                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl md:text-xl lg:text-2xl':
                                    selectedPage === 's' ||
                                    selectedPage === 'h',

                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl md:text-3xl lg:text-4xl':
                                    !selectedPage,
                            },
                            'cursor-pointer text-xl transition-all duration-500 hover:duration-200 hover:ease-linear'
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
                                'font-regular text-white md:text-xl lg:text-2xl':
                                    selectedPage === 's',
                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl md:text-xl lg:text-2xl':
                                    selectedPage === 'h' ||
                                    selectedPage === 'c',
                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl md:text-3xl lg:text-4xl':
                                    !selectedPage,
                            },
                            'cursor-pointer text-xl transition-all duration-500 hover:duration-200 hover:ease-linear '
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
                                'font-regular text-white md:text-xl lg:text-2xl':
                                    selectedPage === 'h',
                                'bg-clip-text  font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl md:text-xl lg:text-2xl':
                                    selectedPage === 'c' ||
                                    selectedPage === 's',
                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl md:text-3xl lg:text-4xl':
                                    !selectedPage,
                            },
                            'cursor-pointer text-xl transition-all duration-500 hover:duration-200 hover:ease-linear '
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
    )
}

export default Sidebar
