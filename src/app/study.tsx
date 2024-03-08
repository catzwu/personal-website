import Learning from '@/components/learning'
import { useState } from 'react'

const learningStuff = [
    { name: 'test', description: 'description', icon: 'shopify.svg' },
]

const Study = () => {
    const [open, setOpen] = useState<string>('')

    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
                What I&apos;m learning
            </h1>
            <div className="block space-y-4">
                {learningStuff.map(({ name, description, icon }) => (
                    <Learning
                        name={name}
                        icon={icon}
                        isOpen={open === name}
                        onClick={() =>
                            name === open ? setOpen('') : setOpen(name)
                        }
                    >
                        {description}
                    </Learning>
                ))}
            </div>
        </div>
    )
}

export default Study
