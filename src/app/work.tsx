import Project, { ProjectProps } from '@/components/project'
import { workStuff } from './content'

const Work = () => {
    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-2xl font-semibold leading-loose md:text-3xl lg:text-4xl">
                What I&apos;ve done
            </h1>
            <p className="font-light">
                I like to build things that make people&apos;s lives richer. I
                am obsessed with obsession, delight and agency.{' '}
            </p>

            <div className="mb-8 space-y-8">
                <h3 className="font-regular py-2 text-2xl leading-loose text-white lg:text-3xl">
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
