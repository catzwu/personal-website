'use client'

import ForceGraph2D from 'react-force-graph-2d'
import data from '../../public/data.json'

const ForceGraph = () => {
    return (
        <ForceGraph2D
            graphData={data}
            // nodeLabel="id" //only use for no-text hover nodes
            // nodeAutoColorBy="group"
            linkColor={() => 'rgba(255,255,255,0.5)'}
            nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.id
                const fontSize = 12 / globalScale
                ctx.font = `${fontSize}px Sans-Serif`
                const textWidth = ctx.measureText(label).width
                const bckgDimensions: [number, number] = [
                    textWidth + fontSize * 0.2,
                    fontSize + fontSize * 0.2,
                ] // some padding

                ctx.fillStyle = 'rgba(255, 255, 255, 0)'
                ctx.fillRect(
                    // ! asserts that the x,y properties exist, but I have no idea if that's true
                    node.x! - bckgDimensions[0] / 2,
                    node.y! - bckgDimensions[1] / 2,
                    ...bckgDimensions
                )

                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = 'white' // set to node.color once the groups are set
                ctx.fillText(label, node.x!, node.y!)

                node.__bckgDimensions = bckgDimensions // to re-use in nodePointerAreaPaint
            }}
            nodePointerAreaPaint={(node, color, ctx) => {
                ctx.fillStyle = color
                const bckgDimensions: [number, number] = node.__bckgDimensions
                bckgDimensions &&
                    ctx.fillRect(
                        node.x! - bckgDimensions[0] / 2,
                        node.y! - bckgDimensions[1] / 2,
                        ...bckgDimensions
                    )
            }}
        />
    )
}

export default ForceGraph
