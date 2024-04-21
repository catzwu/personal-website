const art = require.context('../../public/art', true)
const photos = require.context('../../public/photos', true)

const ArtDisplay = ({ folder }: { folder: string }) => {
    const images = folder === 'art' ? art : photos
    const imageList = images.keys().map((image) => images(image))
    console.log(imageList)
    return (
        <div className="flex flex-wrap ">
            {imageList.map((image, index) => (
                <img
                    key={index}
                    src={image.default.src}
                    alt={`image-${index}`}
                    className="m-1 h-32"
                />
            ))}
        </div>
    )
}

export default ArtDisplay
