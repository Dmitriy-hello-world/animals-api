import BreedCard from '@/components/breedCard'
import { fetchData } from '@/lib/api'

export default async function Home() {
	const animals = await fetchData()

	return (
		<div className='grid grid-cols-3 gap-6'>
			{animals.map(animal => (
				<BreedCard key={animal.animal.id} animal={animal} />
			))}
		</div>
	)
}
