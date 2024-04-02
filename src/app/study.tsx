import Learning from '@/components/learning'
import { useState } from 'react'

const learningStuff = [
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
        name: 'Tech projects 2',
        description:
            'I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work. I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work. I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work.',
    },
    {
        name: 'Tech projects',
        description:
            'I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work.',
    },
    {
        name: 'Tech projects',
        description:
            'I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work.',
    },
    {
        name: 'Tech projects',
        description:
            'I am slowly learning how to be a full-stack developer/product engineer. I started with product. Moving down the stack, I learned the basics of design (highly recommend https://www.learnui.design/blog/). This website is all about learning CSS and getting familiar with Tailwind and animations. Next up is teammate hunt, where I will be leading a lot of the front-end work.',
    },
]

const Study = () => {
    const [open, setOpen] = useState<string>('')

    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
                What I&apos;m learning
            </h1>
            <div className="block space-y-4 pb-12">
                {learningStuff.map(({ name, description }) => (
                    <Learning
                        name={name}
                        isOpen={open === name}
                        onClick={() =>
                            name === open ? setOpen('') : setOpen(name)
                        }
                        key={name}
                    >
                        {description}
                    </Learning>
                ))}
            </div>
        </div>
    )
}

export default Study
