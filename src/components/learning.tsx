import { FC, PropsWithChildren, useState } from 'react'

type LearningProps = {
    name: string
    icon: string
    isOpen: boolean
    onClick: () => void
}

const Learning: FC<PropsWithChildren<LearningProps>> = ({
    name,
    icon,
    isOpen,
    onClick,
    children,
}) => {
    return (
        <div
            className="hover:bg-secondary-50 cursor-pointer rounded-md border border-secondary-200 p-4"
            onClick={onClick}
        >
            <p>{name}</p>
            {isOpen && <div>{children}</div>}
        </div>
    )
}

export default Learning
