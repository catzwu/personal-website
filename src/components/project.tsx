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
                <h3 className="mb-2 text-xl font-light text-secondary-200 lg:text-2xl">
                    {name}
                </h3>
                <h4 className="text-md mb-4 font-extralight italic lg:text-lg">
                    {roles}
                </h4>
                <p className="mb-2 font-light ">{description}</p>
            </div>

            <img src={image} className="h-16 md:h-24 lg:h-32" />
        </div>
    )
}

export default Project
