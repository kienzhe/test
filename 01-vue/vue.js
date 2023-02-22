const textArea = document.getElementById('content');
const charactersCount = document.getElementById('countup');

textArea.oninput = () => {
    let characters = textArea.value;
    charactersCount.textContent = characters.length;
}