import { Cat, CatImage, Dog, DogImage } from '@/lib/apiTypes'
import Image from 'next/image'

interface BreedDetailProps {
	breed: Cat | Dog | null
	imagesUrl: DogImage[] | CatImage[] | null
	type: 'dog' | 'cat'
}

const BreedDetail: React.FC<BreedDetailProps> = async ({
	breed,
	imagesUrl,
	type,
}) => {
	if (breed === null) {
		return <div className='p-8'>No information available.</div>
	}

	return (
		<div className='p-8 rounded-lg shadow-md'>
			<h1 className='text-4xl font-bold mb-4'>{breed.name}</h1>
			<p className='mt-4 text-gray-700'>
				{type === 'cat' ? (breed as Cat).description : breed.temperament}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
				{imagesUrl?.length === 0 ? (
					<div>No breed images available.</div>
				) : (
					imagesUrl?.map((url, index) => (
						<div
							key={index}
							className='relative w-full h-64 overflow-hidden rounded-lg shadow-lg'
						>
							<Image
								src={url.url}
								alt={breed.name}
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 transform hover:scale-105'
							/>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default BreedDetail
