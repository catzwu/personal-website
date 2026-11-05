import { researchStuff } from './content'

const Research = () => {
    return (
        <div className="animate-mount-component mt-4 space-y-8 pb-12">
            {researchStuff.map(({ title, status, link, description, date }) => (
                <article
                    key={title}
                    className="space-y-2 border-b border-main-600 pb-8 last:border-b-0 last:pb-0"
                >
                    <h3 className="text-xl font-light text-secondary-200 lg:text-2xl">
                        {link ? (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                {title}
                            </a>
                        ) : (
                            title
                        )}
                    </h3>
                    <p className="font-extralight italic">
                        {date} · {status}
                    </p>
                    <p className="font-light">{description}</p>
                </article>
            ))}
        </div>
    )
}

export default Research
