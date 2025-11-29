document.getElementById('theme-toggle').addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('darkBody');
    }
});