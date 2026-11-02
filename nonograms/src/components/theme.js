const THEME_STORAGE_KEY = 'theme';

export default function toggleTheme(checkbox) {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {
    const isDarkMode = checkbox.checked;

    document.body.classList.toggle('dark-mode', isDarkMode);

    const theme = isDarkMode ? 'dark' : 'light';

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  });
}
