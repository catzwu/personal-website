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
                    '  max-w-full justify-center px-4 pt-6 md:pt-16 lg:px-24 lg:pt-0':
                        selectedPage,
                    'w-full justify-center': !selectedPage, // TODO: fix width changing with bold
                },
                'bg-main-900 flex h-full flex-col transition-all duration-500 ease-out'
            )}
        >
            <p
                className={clsx(
                    {
                        'mb-2 text-2xl font-medium md:text-2xl lg:text-3xl':
                            selectedPage,
                        'relative left-1/4 mb-10 w-3/4  text-4xl md:text-5xl lg:text-6xl':
                            !selectedPage,
                    },
                    'tracking-none  cursor-pointer font-bold leading-normal text-secondary-200'
                )}
            >
                <span onClick={() => setPage('')}>Catherine Wu</span>
            </p>
            <div
                className={clsx(
                    { ' relative left-1/4 w-3/4': !selectedPage },
                    '  flex flex-col items-center space-x-2 md:flex-row  md:space-x-2 lg:space-x-4 '
                )}
            >
                {/* <h3
                    className={clsx(
                        {
                            'text-xl md:text-xl lg:text-2xl': selectedPage,
                            'text-4xl md:text-5xl lg:text-6xl': !selectedPage,
                        },
                        'mr-0 py-2 font-extralight text-main-400 md:mr-0.5 lg:mr-1 '
                    )}
                >
                    I am a{!selectedPage ? '...' : ' '}
                </h3>{' '} */}
                {/* TODO: fix scrolling (just use js) */}
                <div className="flex flex-col justify-center overflow-clip lg:h-48">
                    <h3
                        className={clsx(
                            {
                                'font-regular text-white ':
                                    selectedPage === 'c',
                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl ':
                                    selectedPage === 's' ||
                                    selectedPage === 'h',

                                'font-light text-main-400 duration-100 hover:text-main-200 hover:drop-shadow-xl lg:mb-2  lg:text-4xl':
                                    !selectedPage,
                            },
                            'relative cursor-pointer py-1 text-xl transition-all duration-200 ease-linear md:py-2 md:text-xl lg:text-2xl'
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
                                'font-regular text-white ':
                                    selectedPage === 's',
                                'font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl':
                                    selectedPage === 'h' ||
                                    selectedPage === 'c',
                                'font-light text-main-400 duration-100 hover:text-main-200 hover:drop-shadow-xl lg:mb-2  lg:text-4xl':
                                    !selectedPage,
                            },
                            'relative cursor-pointer py-1 text-xl transition-all duration-200 ease-linear md:py-2 md:text-xl lg:text-2xl'
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
                                'font-regular text-white ':
                                    selectedPage === 'h',
                                'bg-clip-text  font-light text-main-400 hover:text-main-200 hover:drop-shadow-xl ':
                                    selectedPage === 'c' ||
                                    selectedPage === 's',
                                'font-light text-main-400 duration-100 hover:text-main-200 hover:drop-shadow-xl lg:mb-2  lg:text-4xl':
                                    !selectedPage,
                            },
                            'relative cursor-pointer py-1 text-xl transition-all duration-200 ease-linear md:py-2 md:text-xl lg:text-2xl'
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
