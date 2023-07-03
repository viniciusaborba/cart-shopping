const fetchProducts = async (query) => {

    const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    const response = await fetch(apiUrl)
        .then(res => res.json())

    return response.results
}

export default fetchProducts