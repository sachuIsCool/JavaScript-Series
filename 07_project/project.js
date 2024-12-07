document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = button.id;
    });
});
