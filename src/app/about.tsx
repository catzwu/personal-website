import Link from 'next/link'

const About = () => {
    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
                Who I am
            </h1>
            <div className="block space-y-4">
                <img
                    src="face.JPG"
                    className="float-right m-4 w-1/4 rounded-lg"
                    alt="It's me!"
                />
                <p>
                    I&apos;m currently a graduate student in economics,
                    designing systems that lead to the best outcome for
                    everyone. The perfect mechanism can&apos;t solve everything,
                    but I believe we can get a long way towards
                    &lsquo;better&rsquo; by being intentional about structure
                    and incentives.
                </p>
                <p>
                    Previously, I worked as a product manager on Shopify&apos;s
                    data team, building experiences to help people make
                    data-informed decisions.
                </p>
                <p>
                    My interests have taken me all over the map, and I&apos;m
                    leaning into chances to learn and try new things constantly.
                    My hobbies currently include puzzle hunts, climbing and
                    Classical Chinese.
                </p>
            </div>

            <div className="flex flex-row space-x-14 pt-4 font-light text-secondary-200">
                <span>Resume</span>
                <span>Contact</span>
                <Link href="https://www.admonymous.co/catzwu">Feedback</Link>
                <Link href="/brain">???</Link>
            </div>
        </div>
    )
}

export default About
