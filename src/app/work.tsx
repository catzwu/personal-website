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

            <div className="space-y-8">
                <h3 className="font-regular py-2 text-3xl leading-loose text-white lg:text-4xl">
                    Selected work
                </h3>
                <Project
                    name="Mystery Hunt 2023"
                    roles="Director, Puzzle Writer"
                    image="mate.svg"
                    description="Description goes here la"
                />
                <Project
                    name="Shopify Data Platform"
                    roles="Product Manager"
                    image="shopify.svg"
                    description="Led data discovery and accuracy for a team"
                />
                <Project
                    name="SPARC"
                    roles="Instructor, Admissions Committee"
                    image="sparc2.svg"
                    description="A camp that does stuff for high school students but this needs to be two lines this time."
                />
            </div>
        </div>
    )
}

export default Work
