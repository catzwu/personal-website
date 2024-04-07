import dynamic from 'next/dynamic'

const DynamicForceGraph = dynamic(() => import('../../components/ForceGraph'), {
    ssr: false,
})

const Brain = () => {
    return (
        <div className="bg-black">
            <DynamicForceGraph />
        </div>
    )
}

export default Brain
