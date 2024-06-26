import ArtDisplay from '@/components/artDisplay'
import { ProjectProps } from '@/components/project'
import Link from 'next/link'

export const workStuff: ProjectProps[] = [
    {
        name: 'Shopify Data Platform',
        roles: 'Product Manager',
        image: 'shopify.svg',
        description:
            "Building tools to help other product managers use the data they don't realize they can.",
        long: '',
    },
    {
        name: 'SPARC',
        roles: 'Instructor, Admissions Committee',
        image: 'sparc.svg',
        description:
            'Teaching everything I know to high school students, via intellectual play.',
    },
    {
        name: 'Mystery Hunt 2023',
        roles: 'Director, Puzzle Writer',
        image: 'mate.svg',
        description:
            'Making the hard tradeoffs between constructing cool puzzles, delivering an amazing story, and meeting deadlines burnout-free.',
    },
]

export const learningStuff = [
    {
        name: 'Tech stuff',
        description: (
            <div className="space-y-2">
                <h3 className=" text-xl">Personal website</h3>
                <p>
                    My goal in building this website was to get as comfortable
                    as possible with CSS and Tailwind. I wanted to minimize the
                    amount of Typescript I used while still creating cool
                    effects, like a scrolling sidebar. I also inadvertently
                    learned about designing mobile-friendly sites from the
                    ground up.
                </p>
                <p>
                    In addition to presenting myself in a linkable site, I also
                    wanted to nod at the impossibility of capturing my whole
                    self. My experiences and interests have been artificially
                    bucketed into these categories, but my internal experience
                    is more accurately represented by the chaos of the Brain
                    page.
                </p>
                <h3 className="pt-4 text-xl">Teammate Hunt</h3>
                <p>
                    I started learning React and Typescript to help with
                    postprodding puzzles for Teammate Hunt. Most of my public
                    examples of web development still are from puzzle hunts:
                    <ul className="list-disc py-2 pl-5">
                        <li>
                            (Python, React, Typescript) I wrote many of the
                            interaction puzzles for MITMH2023&apos;s{' '}
                            <Link
                                className="link"
                                href="https://puzzles.mit.edu/2023/interestingthings.museum/rounds/innovation"
                            >
                                Innovation Round
                            </Link>
                            , where gizmos on the factory floor secretly alter
                            individual puzzles. .
                        </li>
                        <li>
                            (HTML Canvas) I built a{' '}
                            <Link
                                className="link"
                                href="https://2021.teammatehunt.com/puzzles/pin-the-tail"
                            >
                                small game
                            </Link>{' '}
                            where you control a figure wandering in a dark
                            building. Because the game is incredibly light on
                            graphics, HTML canvas seemed the best way to go.
                        </li>
                        <li>
                            ...and more. Teammate hunt continues! Our 2024 hunt
                            isn&apos;t released yet, but I will be working on a
                            lot of the frontend for the experience we are
                            creating.
                        </li>
                    </ul>
                </p>
                <h3 className="pt-4 text-xl">Learning UI</h3>
                <p>
                    In 2021, I spent several months learning the basics of UI
                    and UX design. I highly recommend Erik Kennedy&apos;s{' '}
                    <Link
                        className="link"
                        href="https://www.learnui.design/blog/"
                    >
                        Learn UI blog
                    </Link>{' '}
                    to understand fundamental principles behind color, font and
                    hierarchy. Some of the projects I worked on:
                </p>
                <ul className="list-disc pl-5">
                    <li>
                        MIT Mystery Hunt 2023{' '}
                        <Link
                            className="link"
                            href="https://puzzles.mit.edu/2023/mitmh2023.com"
                        >
                            registration site
                        </Link>
                        , reused in 2024. I drew inspiration from famous
                        museums&apos; websites, particularly the Natural History
                        museum in New York City. Specifically, I drew on the use
                        of hero images, Exhibits sections, and a Plan Your Visit
                        page.
                    </li>
                    <li>
                        <Link className="link" href="https://www.sparc.camp/">
                            SPARC website
                        </Link>
                        . I am particularly proud of (1) how the FAQ page came
                        together and (2) the empty footer, as a subtle but
                        strong &ldquo;page ends here&rdquo; signal. Looking
                        back, I now believe the site needs more of a visual
                        motif, beyond the color palette, to tie it together.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        name: 'Languages',
        description: (
            <>
                Languages I&apos;ve Duo&apos;ed:
                <ul className="list-disc py-2 pl-5">
                    <li>
                        Japanese &mdash; Current, on and off since Summer 2016
                    </li>
                    <li>German &mdash; Winter 2021-2022</li>
                    <li>Spanish &mdash; Summer 2015</li>
                </ul>
                I know a dabbling of Korean, Frenched in high school, and went
                to Chinese school for 13 years. I am currently learning
                Classical Chinese and working my way through HSK6.
            </>
        ),
    },
    {
        name: 'Pencil and digital drawing',
        description: (
            <div className="space-y-2">
                <p>
                    I quit a sketching class in tears when I was nine,
                    frustrated by all my imperfections. Nearly 20 years later, I
                    have finally matured enough to try again. I find pencil (and
                    eraser!) to be especially meditative.
                </p>
                <ArtDisplay folder={'art'} />
            </div>
        ),
    },
    {
        name: 'Photography',
        description: (
            <div className="space-y-2">
                <p>
                    For every thousand pictures I take, I find maybe one that I
                    am happy with. I try to play with framing and angles to make
                    interesting shapes or foreground-background contrast.
                </p>
                <p>
                    I also enjoy looking at plants realllly close up, so my
                    photos reflect that too. They are nature&apos;s original
                    art!
                </p>
                <p>
                    See more of my photography, including higher-resolution
                    images,{' '}
                    <Link href="https://photos.catzwu.com/" className="link">
                        here
                    </Link>
                    .{' '}
                </p>

                <ArtDisplay folder={'photo'} />
                <p className="text-sm font-light italic text-main-200">
                    Taken with an Olympus E-M10 Mark IV{' '}
                </p>
            </div>
        ),
    },
    {
        name: 'Reading list',
        description: (
            <div className="">
                <p className="">Some recent books I have learned a lot from</p>
                <ul className="list-disc py-2 pl-5">
                    <li>
                        <span className="book-title">The Licanius Trilogy</span>
                        . Tropiest fantasy writing, but stellar multi-book
                        plotting.
                    </li>
                    <li>
                        <i>
                            The Nine: Inside the Secret World of the Supreme
                            Court
                        </i>
                    </li>
                    <li>
                        <i>The Price We Pay</i>, by Martin Makary
                    </li>
                    <li>
                        <span className="book-title">
                            Tomorrow, and Tomorrow, and Tomorrow
                        </span>
                        , by Gabrielle Zevin. A book about raw life.
                    </li>
                    <li>
                        <i>The Scholomance</i> series, by Naomi Novik
                    </li>
                    <li>
                        <span className="book-title">
                            Bullshit Jobs: A Theory
                        </span>
                        , by David Graeber. This book overpromises, but having
                        the vocabulary (and the shared cultural consciousness){' '}
                    </li>
                </ul>
                <p className="pt-4">The all-time favorites</p>
                <ul className="list-disc py-2 pl-5">
                    <li>
                        <span className="book-title">
                            The Queen&apos;s Thief
                        </span>{' '}
                        series, by Megan Whalen Turner. The OG, Eugenides was my
                        childhood hero.
                    </li>
                    <li>
                        <span className="book-title">
                            Realm of the Elderlings
                        </span>{' '}
                        series, by Robin Hobb. If I ever have a person like Fitz
                        and the Fool have in each other, I will be content.
                    </li>
                    <li>
                        <span className="book-title">
                            A Gentleman in Moscow
                        </span>
                        , by Amor Towles. The protagonist demonstrates an
                        open-minded, upbeat approach to an otherwise somber
                        situation.
                    </li>
                    <li>
                        <span className="book-title">Exhalation</span>, by Ted
                        Chiang
                    </li>
                </ul>
                <p className="pt-4">The classics</p>
                <ul className="list-disc py-2 pl-5">
                    <li>
                        <span className="italic">Thinking, Fast and Slow</span>,
                        by Daniel Kahneman
                    </li>
                    <li>
                        <span className="italic">Gödel, Escher, Bach</span>, by
                        Douglas Hofstadter
                    </li>

                    <li>
                        <span className="italic">
                            The Design of Everyday Things
                        </span>
                        , by Don Norman
                    </li>
                    <li>
                        <span className="italic">The Selfish Gene</span>, by
                        Richard Dawkins
                    </li>
                </ul>
            </div>
        ),
    },
    {
        name: 'Fleeting thoughts, memorialized',
        description: (
            <ul>
                <li>Be wise rather than clever.</li>
                <li>
                    Take everyone around you seriously, and yourself not at all.
                </li>
                <li>Everyone can be a friend.</li>
                <li>Play to play vs play to win vs play to not lose.</li>
            </ul>
        ),
    },
]

export const bio = (
    <>
        <p>
            I&apos;m currently a graduate student who likes thinking about
            coordination problems. The perfect mechanism can&apos;t solve
            everything, but I believe we can get a long way towards
            &lsquo;better&rsquo; by being intentional about incentives.
        </p>
        <p>
            I enjoy puzzles, design and learning new skills from the people
            around me.
        </p>
    </>
)
