import dynamic from 'next/dynamic'
import Link from 'next/link'

const DynamicForceGraph = dynamic(() => import('../../components/ForceGraph'), {
    ssr: false,
})

const Brain = () => {
    return (
        <div className="bg-black">
            <Link
                href="/"
                className="fixed left-5 top-5 z-[1000] flex flex-row items-center space-x-1 rounded-md border border-secondary-200 bg-black p-3 text-secondary-200 transition-all duration-300 hover:bg-main-800"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
                <span>Back</span>
            </Link>
            <DynamicForceGraph />
        </div>
    )
}

export default Brain
