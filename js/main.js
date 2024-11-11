onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy birth day Aly, bener kan? Aku nggak salah inget. Juga nggak akan panjang juga isinya, ngantuk. Panjang umur, sehat selalu, Aly. Aku buat ini karena sempat aja, sekali lagi. Panjang umur').split('.');

    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        const newText = titles[index].trim(); // Clean up any leading/trailing spaces
        if (newText) {
          const sentenceElement = document.createElement('span');
          sentenceElement.style.opacity = 0;
          sentenceElement.style.transition = 'opacity 1s ease-in-out';
          sentenceElement.innerHTML = newText + '.';
          titleElement.appendChild(sentenceElement);

          // Fade in the sentence
          setTimeout(() => {
            sentenceElement.style.opacity = 1;
          }, 100); // Delay to allow transition

          index++;
        }
        setTimeout(appendTitle, 2000); // 2000ms delay between sentences for smoother flow
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};
