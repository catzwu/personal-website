import Project, { ProjectProps } from '@/components/project'
import { workStuff } from './content'

const Work = () => {
    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
                What I&apos;ve done
            </h1>
            <p>
                I like to build things that make people&apos;s lives richer. I
                am obsessed with obsession, delight and agency.{' '}
            </p>

            <div className="mb-8 space-y-8">
                <h3 className="font-regular py-2 text-3xl leading-loose text-white lg:text-4xl">
                    Selected work
                </h3>
                {workStuff.map(({ name, roles, image, description }) => (
                    <Project
                        name={name}
                        key={name}
                        roles={roles}
                        image={image}
                        description={description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Work
