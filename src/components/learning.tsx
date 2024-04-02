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
            className="cursor-pointer flex-col rounded-md border border-secondary-200 p-4 transition-all duration-300 hover:bg-secondary-50"
            onClick={onClick}
        >
            <h3 className="mb-2 text-2xl font-light text-secondary-200 lg:text-3xl">
                {name}
            </h3>
            <div
                className={clsx(
                    { 'h-[0]': !isOpen, 'h-32': isOpen },
                    'flex items-center overflow-auto transition-[height] duration-500'
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default Learning
