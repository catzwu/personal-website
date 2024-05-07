import clsx from 'clsx'
import { FC, PropsWithChildren, useState } from 'react'

type LearningProps = {
    name: string
    isOpen: boolean
    onClick: () => void
}

const Learning: FC<PropsWithChildren<LearningProps>> = ({
    name,
    isOpen,
    onClick,
    children,
}) => {
    return (
        <div
            className=" flex-col rounded-md border border-secondary-200 px-5 transition-all duration-300 has-[:first-child:hover]:border-secondary-400"
            // TODO: add smarter behavior so you can e.g. highlight stuff inside
        >
            <h3
                className="cursor-pointer py-5 text-xl font-light text-secondary-200 transition-all duration-300  hover:text-secondary-400 lg:text-2xl"
                onClick={onClick}
            >
                {name}
            </h3>
            <div
                className={clsx(
                    { 'max-h-0': !isOpen, 'max-h-[40rem]': isOpen }, // TODO: scroll slightly so the full open thing is centered
                    'flex overflow-auto transition-all duration-300'
                )}
            >
                <div className="my-auto pb-5 font-light">{children}</div>
            </div>
        </div>
    )
}

export default Learning
