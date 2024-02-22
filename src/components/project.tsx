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
            className="group relative h-80 max-w-sm overflow-clip rounded-md border border-secondary-200 bg-cover bg-local bg-clip-border bg-center bg-origin-border"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* note that this is going to be hard-coded to two lines of description, jk that doesn't work for screen sizes */}
            <div className="absolute -bottom-12 w-full rounded-md bg-gradient-to-t from-black p-4 transition-all duration-500 group-hover:bottom-0">
                <h3 className="mb-2 mt-4 text-2xl font-light text-secondary-200 lg:text-3xl">
                    {name}
                </h3>
                <h4 className="mb-4 text-xl font-extralight italic lg:text-2xl">
                    {roles}
                </h4>
                <p className="mb-2 ">{description}</p>
            </div>
        </div>
    )
}

export default Project
