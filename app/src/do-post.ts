const doPost = async (text: string) => {
    const url = 'https://script.google.com/macros/s/AKfycbyE-YhyYz0fqa9_FXPV8RM7ZM_jzbF_zl-cfQdTKUZkV6fbOhByxEwEqnuqYnJEcy8w/exec';
    const token = 'BBtGOmbmwikr6vr0XzAip0G5';
    const response = await fetch(url, {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, text })
    });
    const r = await response;
    console.log(r);
  };

export const postNfcData = async (event: NDEFReadingEvent) => {
    const decoder = new TextDecoder();
    const text = decoder.decode(event.message.records[0].data)
    console.log(text)
    await doPost(text)
}