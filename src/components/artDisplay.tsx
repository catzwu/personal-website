import { LazyLoadImage } from 'react-lazy-load-image-component'

const art = require.context('../../public/art', true)
const photos = require.context('../../public/photos', true)

const ArtDisplay = ({ folder }: { folder: string }) => {
    const images = folder === 'art' ? art : photos
    const imageList = images.keys().map((image) => images(image))
    console.log(imageList)
    return (
        <div className="flex flex-wrap">
            {imageList.map((image, index) => (
                <LazyLoadImage
                    key={index}
                    className="h-32 w-32 object-cover"
                    src={image.default.src}
                    alt={`image-${index}`}
                />
            ))}
        </div>
    )
}

export default ArtDisplay
