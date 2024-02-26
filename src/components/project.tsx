import { FC } from 'react'

type ProjectProps = {
    name: string
    roles: string
    image: string
    description: string
}

const Project: FC<ProjectProps> = ({ name, roles, image, description }) => {
    return (
        <div className="group relative max-w-md overflow-clip rounded-md border border-secondary-200 p-4">
            {/* note that this is going to be hard-coded to two lines of description, jk that doesn't work for screen sizes */}
            <h3 className="mb-2 text-2xl font-light text-secondary-200 lg:text-3xl">
                {name}
            </h3>
            <h4 className="mb-4 text-lg font-extralight italic lg:text-xl">
                {roles}
            </h4>
            <p className="mb-2 ">{description}</p>
            <img src={image} />
        </div>
    )
}

export default Project
