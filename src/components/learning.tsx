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
            onClick={onClick} // TODO: add smarter behavior so you can e.g. highlight stuff inside
        >
            <h3 className="mb-2 text-xl font-light text-secondary-200 lg:text-2xl">
                {name}
            </h3>
            <div
                className={clsx(
                    { 'max-h-0': !isOpen, 'max-h-[40rem]': isOpen }, // TODO: scroll slightly so the full open thing is centered
                    'flex overflow-auto transition-all duration-300'
                )}
            >
                <div className="my-auto p-1 font-light">{children}</div>
            </div>
        </div>
    )
}

export default Learning
