import ArtDisplay from '@/components/artDisplay'
import { ProjectProps } from '@/components/project'
import Link from 'next/link'

export const workStuff: ProjectProps[] = [
    {
        name: 'NYU Stern',
        roles: 'PhD Student',
        image: 'nyu.svg',
        description: 'Studying how AI is going to affect the future of work.',
        long: 'My recent work is on the incentives of digital twins and how their creators balance productivity enhancement and replacement risk. I am also interested in how to design incentive-aligned institutional culture.',
    },
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
            'Teaching everything I know to high school students, via intellectual play. Also an instructor at ASPR.',
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
                            was released in 2025, and I built much of the
                            frontend for the main comic page.
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
                <p className="">Some recent books I learned a lot from</p>
                <ul className="list-disc py-2 pl-5">
                    {/* <li>
                        <span className="book-title">The Licanius Trilogy</span>
                        . Tropiest fantasy writing, but stellar multi-book
                        plotting.
                    </li> */}
                    <li>
                        {/* 4/10/2025 */}
                        <span className="book-title">
                            Situational Awareness
                        </span>
                        , by Leopold Aschenbrenner. The publication that got me
                        thinking about AI.
                    </li>
                    <li>
                        {/* 4/10/2025 */}
                        <span className="book-title">
                            The Unaccountability Machine
                        </span>
                        by Dan Davies. Old ideas explaining new phenomena to a
                        surprising depth.
                    </li>
                    <li>
                        {/* 4/10/2025 */}
                        <span className="book-title">
                            The Structure of Scientific Revolutions
                        </span>
                        , by Thomas Kuhn. Solid meta-scientific framework.
                    </li>
                    {/* <li>
                        <i>
                            The Nine: Inside the Secret World of the Supreme
                            Court
                        </i>
                    </li> */}
                    <li>
                        {/* 4/10/2025 */}
                        <span className="book-title">
                            Top-Down Democracy in South Korea
                        </span>
                        , by Erik Mobrand. Institutional inertia.
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
                    {/* <li>
                        <i>The Scholomance</i> series, by Naomi Novik
                    </li> */}
                    {/* <li>
                        <span className="book-title">
                            Bullshit Jobs: A Theory
                        </span>
                        , by David Graeber. This book overpromises, but having
                        the vocabulary (and the shared cultural consciousness){' '}
                    </li> */}
                </ul>
                <p className="pt-4">The classics</p>
                <ul className="list-disc py-2 pl-5">
                    <li>
                        <span className="book-title">
                            Thinking, Fast and Slow
                        </span>
                        , by Daniel Kahneman
                    </li>
                    <li>
                        <span className="book-title">Gödel, Escher, Bach</span>,
                        by Douglas Hofstadter
                    </li>

                    <li>
                        <span className="book-title">
                            The Design of Everyday Things
                        </span>
                        , by Don Norman
                    </li>
                    <li>
                        <span className="book-title">The Selfish Gene</span>, by
                        Richard Dawkins
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
                        Chiang. This man sees the beauty in science and in the
                        world.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        name: 'Productivity tools',
        description: (
            <>
                My current setup:
                <ul className="list-disc py-2 pl-5">
                    <li>
                        <span className="book-title">Obsidian</span> for
                        read-later (via clipping and various shortcuts), weekly
                        todos, journaling, shower thoughts.
                    </li>
                    <li>
                        <span className="book-title">Zotero</span> for research
                        seminars, individual projects, synthesizing academic
                        notes.
                    </li>
                    <li>
                        <span className="book-title">Mochi</span> for spaced
                        repetition (the UI is much nicer than Anki&apos;s).
                    </li>
                    <li>
                        <span className="book-title">VSCode</span> with Codeium
                        for all development, R scripts, and LaTeX with custom
                        snippets.
                    </li>
                    <li>
                        <span className="book-title">Figma</span> for graphics
                        and visual design.
                    </li>
                    <li>
                        <span className="book-title">BetterTouchTools</span> and{' '}
                        <span className="book-title">Karabiner</span>for custom
                        keyboard tooling and window control.
                    </li>
                    <li>
                        Miscellaneous: 1Password, Remarkable Tablet, Brave
                        Browser.
                    </li>
                </ul>
            </>
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
    // {
    //     name: 'Fleeting thoughts, memorialized',
    //     description: (
    //         <ul>
    //             <li>Be wise rather than clever.</li>
    //             <li>
    //                 Take everyone around you seriously, and yourself not at all.
    //             </li>
    //             <li>Everyone can be a friend.</li>
    //             <li>Play to play vs play to win vs play to not lose.</li>
    //         </ul>
    //     ),
    // },
]

export const bio = (
    <>
        <p>
            I am currently a PhD student studying how AI will impact the future
            of work. Academically, I am trained in economics and applied math.
            Professionally, I worked in product management and design.
            Intellectually, I believe all great problems are design problems; I
            care most about incentives design. Like many others, I have recently
            been bitten by the AI bug. Orienting AI successfully to help
            humanity thrive will require immense foresight and care. In the
            remainder of my free time, I enjoy puzzle hunts, bouldering and
            learning new skills from the people around me.
            {/* who thinks about incentives and
            coordination problems. Mechanism design is a strong yet fallible
            technique for crafting outcomes more intentionally. Before we get
            close to AI alignment, I believe we need to solve
            &quot;institutional alignment&quot;. */}
        </p>
        {/* <p>
            I see design as the grand theory that shapes the most interesting
            problems around us. It is the reduction of variation, shaped by
            values and aesthetics, that shapes the world around us. Everything
            is a design problem; everything that is a design problem can be
            interesting.
            I have recently been bitten by the AI bug, like many others. 
        </p> */}
        {/* <p></p> */}
    </>
)
