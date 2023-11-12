export const setupWebNFC = (element: HTMLButtonElement) => {
  if (!("NDEFReader" in window)) {
    console.log("Web NFC is not available. Use Chrome on Android.");
  }

  element.addEventListener("click", async () => {
    console.log("User clicked scan button");

    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log("> Scan started");

      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      ndef.addEventListener("reading", (event: Event) => {
        const nfcEvent = event as NDEFReadingEvent;
        alert(`> Serial Number: ${nfcEvent.serialNumber}`);
        alert(`> Records: (${nfcEvent.message.records.length})`);
        console.log(nfcEvent);
      });
    } catch (error) {
      console.log("Argh! " + error);
    }
  });
}