import BreedDetail from '@/components/breedDetail'
import { fetchDetail, fetchImagesByBreed } from '@/lib/api'
import { CatImage, DogImage } from '@/lib/apiTypes'

interface BreedPageProps {
	params: {
		id: string
		type: 'cat' | 'dog'
	}
}

export default async function BreedPage({ params }: BreedPageProps) {
	const { id, type } = params
	let imagesUrl: DogImage[] | CatImage[] | null = null

	const breed = await fetchDetail(id, type)

	if (breed) {
		console.log(type)
		imagesUrl = await fetchImagesByBreed(`${breed.id}`, type)
	}

	return (
		<div>
			{breed ? (
				<BreedDetail breed={breed} imagesUrl={imagesUrl} type={type} />
			) : (
				<div>No breed information available</div>
			)}
		</div>
	)
}
