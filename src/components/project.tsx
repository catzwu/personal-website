import { FC } from 'react'

export type ProjectProps = {
    name: string
    roles: string
    image: string
    description: string
}

const Project: FC<ProjectProps> = ({ name, roles, image, description }) => {
    return (
        <div className="relative flex max-w-lg flex-row items-start justify-between space-x-4 rounded-md border border-secondary-200 p-4">
            <div>
                <h3 className="mb-2 text-2xl font-light text-secondary-200 lg:text-3xl">
                    {name}
                </h3>
                <h4 className="mb-4 text-lg font-extralight italic lg:text-xl">
                    {roles}
                </h4>
                <p className="mb-2 ">{description}</p>
            </div>

            <img src={image} className="h-16 md:h-24 lg:h-32" />
        </div>
    )
}

export default Project
