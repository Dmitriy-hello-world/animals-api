import { fetchImage } from '@/lib/api'
import { AnimalData } from '@/lib/apiTypes'
import Image from 'next/image'
import Link from 'next/link'

interface BreedCardProps {
	animal: AnimalData
}

const BreedCard: React.FC<BreedCardProps> = async ({ animal }) => {
	const imgUrl = await fetchImage(animal.animal.reference_image_id, animal.type)

	return (
		<div className='border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl'>
			<Link href={`/breeds/${animal.type}/${animal.animal.id}`}>
				<div className='flex flex-col items-center'>
					<div className='relative w-48 h-48 mb-2 overflow-hidden rounded-lg'>
						<Image
							src={imgUrl?.url || ''}
							alt={animal.animal.name}
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<h2 className='text-xl font-bold text-center'>
						{animal.animal.name}
					</h2>
				</div>
			</Link>
		</div>
	)
}

export default BreedCard
