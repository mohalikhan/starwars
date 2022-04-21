export async function getCharacters() {
    const data =  await executeRequest('https://swapi.dev/api/people')
    return data.results
}

export async function getMovie(url) {
    return await executeRequest(url)
}

async function executeRequest(url) {
    const response = await fetch(url);
    const dataJson = await response.json();
    return dataJson;
}