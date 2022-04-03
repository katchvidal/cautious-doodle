

export const getGifs = async (url) => {
    const request = await fetch(url);
    const { data } = await request.json();

    const gift = data.map(img => {
        return {
            id: img.id,    //  revisar el data para saber obtener sus datos
            title: img.title,
            urli: img.images?.downsized_medium.url
        }
    });

    return gift;
}