import Link from 'next/link'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip } from 'react-tooltip'
import { bio } from './content'

const email = 'catw2188@gmail.com'

const About = () => {
    const [tooltip, setTooltip] = useState<string>('Click to copy email')

    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-2xl font-bold leading-loose md:text-3xl lg:text-4xl">
                Who I am
            </h1>
            <div className="block space-y-4 font-light">
                <img
                    src="face.JPG"
                    className="float-right m-4 w-1/4 rounded-lg"
                    alt="It's me!"
                />
                {bio}
            </div>

            <div className="flex flex-row space-x-14 pt-4 font-light text-secondary-200 *:transition-colors hover:*:text-secondary-400">
                <Link
                    href="./cwu_resume_0124.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </Link>
                <CopyToClipboard
                    text={email}
                    onCopy={() => setTooltip('Copied!')}
                >
                    <span className="cursor-pointer" id="contact">
                        Contact
                    </span>
                </CopyToClipboard>
                <Tooltip
                    anchorSelect="#contact"
                    place="bottom"
                    content={tooltip}
                    className="bg-white"
                    noArrow={true}
                    afterHide={() => setTooltip('Click to copy email')}
                    style={{ backgroundColor: '#02190C' }}
                />

                <Link href="https://www.admonymous.co/catzwu">Feedback</Link>
                <Link href="/brain">Brain</Link>
            </div>
        </div>
    )
}

export default About
