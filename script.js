const texts = ["where teens anywhere in the world can get involved in STEM", "where teens can get technology and STEM supplies for free", "where teens can learn to build the world"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

(function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('typewriter').textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        // Pause before starting to delete
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting
    } else if (isDeleting && letter.length === 0) {
        // Move to the next text
        isDeleting = false;
        count++;
        setTimeout(type, 500); // Pause before typing the next text
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}());
