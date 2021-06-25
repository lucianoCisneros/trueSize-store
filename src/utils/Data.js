export async function getData (categories){
    const response = await fetch(`https://api.mercadolibre.com/sites/$SITE_ID/search?q=${categories}`);
    const data = await response.json();
    return data.results;
}