import { FC } from 'react'

type ProjectProps = {
    name: string
    roles: string
    image: string
    description: string
}

const Project: FC<ProjectProps> = ({ name, roles, image, description }) => {
    return (
        <div
            className="relative h-80 max-w-lg rounded-md border border-secondary-200 bg-cover bg-local bg-clip-border bg-center bg-origin-border"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute bottom-0 w-full space-y-2 rounded-md bg-gradient-to-t from-black p-4">
                <h3 className="mt-4 text-2xl font-light text-secondary-200 lg:text-3xl">
                    {name}
                </h3>
                <h4 className="text-xl font-extralight italic lg:text-2xl">
                    {roles}
                </h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project
