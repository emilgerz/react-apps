export async function getPokemons(step, itemsQty = 16) {
	const offset = step * itemsQty

	const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${itemsQty}`)
	const dataParsed = await data.json()

	return dataParsed.results.map((pokemons) => {
		return {
			name: pokemons.name,
			id: pokemons.url.split('/').at(-2),
		}
	})
}

// https://sinyakov.com/frontend/react/hw/profi.png
