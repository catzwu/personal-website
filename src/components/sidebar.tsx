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
                    '  max-w-full justify-center border-r border-main-800 px-4 pt-6 md:pt-16 lg:px-24 lg:pt-0':
                        selectedPage,
                    'w-full justify-center': !selectedPage,
                },
                'bg-main-900 flex h-full flex-col transition-all duration-500 ease-out'
            )}
        >
            <p
                className={clsx(
                    {
                        'text-2xl font-medium md:text-2xl lg:text-3xl':
                            selectedPage,
                        'relative left-1/4 w-3/4 text-4xl  md:text-5xl lg:text-6xl ':
                            !selectedPage,
                    },
                    'tracking-none  cursor-pointer font-bold leading-normal text-secondary-200'
                )}
            >
                <span onClick={() => setPage('')}>Hi, I&apos;m Catherine,</span>
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
                <div className="flex flex-col justify-center overflow-clip lg:h-72">
                    <h3
                        className={clsx(
                            {
                                'font-regular text-white lg:top-12':
                                    selectedPage === 'c',
                                'font-regular bg-gradient-to-t from-main-400 bg-clip-text text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-0':
                                    selectedPage === 's',
                                'font-regular bg-gradient-to-t from-main-600 bg-clip-text text-transparent hover:text-main-200 hover:drop-shadow-xl lg:-top-12':
                                    selectedPage === 'h',
                                'hover:font-regular font-light text-main-400 duration-100 hover:text-main-200 hover:drop-shadow-xl lg:mb-2  lg:text-4xl':
                                    !selectedPage,
                            },
                            'relative cursor-pointer py-1 text-xl transition-all duration-500 ease-linear md:py-2 md:text-xl lg:text-2xl'
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
                                'font-regular text-white lg:top-0':
                                    selectedPage === 's',
                                'font-regular bg-gradient-to-t from-main-400 bg-clip-text text-transparent hover:text-main-200 hover:drop-shadow-xl lg:-top-12':
                                    selectedPage === 'h',
                                'font-regular bg-gradient-to-b from-main-400 bg-clip-text text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-12':
                                    selectedPage === 'c',
                                'hover:font-regular font-light text-main-400 duration-100 hover:text-main-200 hover:drop-shadow-xl lg:mb-2  lg:text-4xl':
                                    !selectedPage,
                            },
                            'relative cursor-pointer py-1 text-xl transition-all duration-500 ease-linear md:py-2 md:text-xl lg:text-2xl'
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
                                'font-regular text-white lg:-top-12':
                                    selectedPage === 'h',
                                'font-regular bg-gradient-to-b from-main-600 bg-clip-text text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-12':
                                    selectedPage === 'c',
                                'font-regular bg-gradient-to-b from-main-400 bg-clip-text text-transparent hover:text-main-200 hover:drop-shadow-xl lg:top-0':
                                    selectedPage === 's',
                                'hover:font-regular font-light text-main-400 duration-100 hover:text-main-200 hover:drop-shadow-xl lg:mb-2  lg:text-4xl':
                                    !selectedPage,
                            },
                            'relative cursor-pointer py-1 text-xl transition-all duration-500 ease-linear md:py-2 md:text-xl lg:text-2xl'
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
