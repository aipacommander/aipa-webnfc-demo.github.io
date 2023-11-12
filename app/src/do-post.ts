export function doPost(element: HTMLButtonElement) {
  const post = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwjYRvhAQ0tt1enPe_BkS1UN5SUHknJtCeRcyUacOAstS5fVkaJi6xbMSqc6eCg_zt-/exec';
    const token = 'BBtGOmbmwikr6vr0XzAip0G5';
    const response = await fetch(url, {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token })
    });
    const r = await response;
    console.log(r);
  };
  element.addEventListener("click", () => post());
}
