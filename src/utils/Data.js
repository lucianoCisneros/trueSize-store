export async function getData (){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=jordan`);
    const data = await response.json();
    return data.results;
}

export async function getProduct (){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?nickname=LUCIANOCISNEROS12`);
    const data = await response.json();
    return data.results;
}