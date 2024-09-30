import { getRandomArrElements } from '@/utils/helpers'
import { AnimalData, Cat, CatImage, Dog, DogImage } from './apiTypes'

export const fetchData = async (): Promise<AnimalData[]> => {
	const [dogData, catData] = await Promise.all<[Dog, Cat]>([
		fetch('https://api.thedogapi.com/v1/breeds').then(res => res.json()),
		fetch('https://api.thecatapi.com/v1/breeds').then(res => res.json()),
	])

	const dogs = dogData.map((dog): AnimalData => ({ animal: dog, type: 'dog' }))
	const cats = catData.map((cat): AnimalData => ({ animal: cat, type: 'cat' }))

	return getRandomArrElements([...dogs, ...cats], 9)
}

export const fetchDetail = async (
	id: string,
	type: 'cat' | 'dog'
): Promise<Cat | Dog | null> => {
	let res: Cat | Dog | null = null

	if (type === 'cat') {
		res = (await fetch(`https://api.thecatapi.com/v1/breeds/${id}`).then(res =>
			res.json()
		)) as Cat
	} else if (type === 'dog') {
		res = (await fetch(`https://api.thedogapi.com/v1/breeds/${id}`).then(res =>
			res.json()
		)) as Dog
	}

	return res
}

export const fetchImage = async (
	id: string,
	type: 'cat' | 'dog'
): Promise<DogImage | CatImage | null> => {
	let res: DogImage | CatImage | null = null
	if (type === 'cat') {
		res = (await fetch(`https://api.thecatapi.com/v1/images/${id}`).then(res =>
			res.json()
		)) as CatImage
	} else if (type === 'dog') {
		res = (await fetch(`https://api.thedogapi.com/v1/images/${id}`).then(res =>
			res.json()
		)) as DogImage
	}
	return res
}

export const fetchImagesByBreed = async (
	breed: string,
	type: 'cat' | 'dog'
): Promise<DogImage[] | CatImage[] | null> => {
	let res: DogImage[] | CatImage[] | null = null
	if (type === 'cat') {
		res = (await fetch(
			`https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=${breed}`
		).then(res => res.json())) as CatImage[]
	} else if (type === 'dog') {
		res = (await fetch(
			`https://api.thedogapi.com/v1/images/search?limit=9&breed_ids=${breed}`
		).then(res => res.json())) as DogImage[]
	}

	return res
}
