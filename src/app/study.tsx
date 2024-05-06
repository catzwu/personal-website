import Learning from '@/components/learning'
import { useState } from 'react'
import { learningStuff } from './content'

const Study = () => {
    const [open, setOpen] = useState<string>('')

    return (
        <div className="animate-mount-component space-y-4">
            <h1 className="mb-8 text-2xl font-semibold leading-loose md:text-3xl lg:text-4xl">
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
