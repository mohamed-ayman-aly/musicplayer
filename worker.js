onmessage = async (mes) => {
    const { i, file, open, lastbackgroundImage } = mes.data;
    if (i === undefined) return;
    try {
        importScripts('jsmediatags.js');
        const tags = await new Promise((resolve, reject) => {
            jsmediatags.read(file, {
                onSuccess: resolve,
                onError: reject
            });
        });

        const d = tags.tags.picture.data.map(ch => String.fromCharCode(ch)).join('');
        postMessage({
            album: tags.tags.album,
            artist: tags.tags.artist,
            d,
            i,
            format: tags.tags.picture.format,
            open,
            lastbackgroundImage
        });
    } catch (error) {
        postMessage({ d: '', i, format: '', open, lastbackgroundImage });
    }

    close();
};
