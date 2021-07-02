export async function getData ({ categories }){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categories}`);
    const data = await response.json();
    return data.results;
}

export async function getProduct (){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=nike`);
    const data = await response.json();
    return data.results;
}