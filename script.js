function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Change icon
    const btn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
      btn.textContent = "☀️";
    } else {
      btn.textContent = "🌙";
    }
}