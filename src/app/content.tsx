import ArtDisplay from '@/components/artDisplay'
import { ProjectProps } from '@/components/project'

export const workStuff: ProjectProps[] = [
    {
        name: 'Mystery Hunt 2023',
        roles: 'Director, Puzzle Writer',
        image: 'mate.svg',
        description: 'Description goes here la',
    },
    {
        name: 'Shopify Data Platform',
        roles: 'Product Manager',
        image: 'shopify.svg',
        description: 'Led data discovery and accuracy for a team',
    },
    {
        name: 'SPARC',
        roles: 'Instructor, Admissions Committee',
        image: 'sparc2.svg',
        description:
            'A camp that does stuff for high school students but this needs to be two lines this time.',
    },
]

export const learningStuff = [
    { name: 'test', description: 'description' },
    {
        name: '2023 reading list',
        description: (
            <div className="list-disc">
                Some of the books of the past year that have most influenced me:
                <ul>
                    <li>
                        <i>The Licanius Trilogy</i>
                    </li>
                    <li>
                        <i>Flatterland</i>
                    </li>
                    <li>
                        <i>
                            The Nine: Inside the Secret World of the Supreme
                            Court
                        </i>
                    </li>
                    <li>
                        <i>The Price We Pay</i>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        name: 'Tech projects',
        description:
            'I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work.',
    },
    {
        name: 'Pencil and digital drawing',
        description: <ArtDisplay folder={'art'} />,
    },
    {
        name: 'Photography',
        description: <ArtDisplay folder={'photo'} />,
    },
    {
        name: 'Quotes I strive to live by',
        description: (
            <ul>
                <li>Seek to be wise over clever.</li>
                <li>
                    Take everyone around you seriously, and yourself not at all.
                </li>
            </ul>
        ),
    },
]

export const bio = (
    <>
        <p>
            I&apos;m currently a graduate student in economics, designing
            systems that lead to the best outcome for everyone. The perfect
            mechanism can&apos;t solve everything, but I believe we can get a
            long way towards &lsquo;better&rsquo; by being intentional about
            structure and incentives.
        </p>
        <p>
            Previously, I worked as a product manager on Shopify&apos;s data
            team, building experiences to help people make data-informed
            decisions.
        </p>
        <p>
            My interests have taken me all over the map, and I&apos;m leaning
            into chances to learn and try new things constantly. My hobbies
            currently include puzzle hunts, climbing and Classical Chinese.
        </p>
    </>
)
