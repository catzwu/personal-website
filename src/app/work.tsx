import Project from '@/components/project'

const Work = () => {
    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
                What I've done
            </h1>
            <p>
                I like to build things that make people's lives richer. I am
                obsessed with obsession, delight and agency.{' '}
            </p>
            <h3 className="py-2 text-3xl font-medium leading-loose text-white lg:text-4xl">
                Selected work
            </h3>
            <Project
                name="Mystery Hunt 2023"
                roles="Director, Puzzle Writer"
                image="face.JPG"
                description="Description goes here"
            />
        </div>
    )
}

export default Work
