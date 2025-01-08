function changeLanguage() {
    const isRussian = document.getElementById('language-switch').checked;
    const languageLabel = document.querySelector('.language-toggle .label-text');
    if (isRussian) {
        document.getElementById('welcome-text').textContent = 'Добро пожаловать в fsociety. Мы анонимны. Мы легион.';
        document.getElementById('about-title').textContent = 'Обо мне';
        document.getElementById('about-text').textContent = 'Привет! Меня зовут peepkeen, мне 18 лет. Я начал увлекаться программированием в 2021 году и с тех пор не могу остановиться. Моя цель — стать профессиональным веб-разработчиком и создавать удивительные вещи в интернете. Я верю, что код — это искусство, и стремлюсь к совершенству в каждой строке.';
        document.getElementById('links-title').textContent = 'Мои ссылки:';
        languageLabel.textContent = 'EN';
    } else {
        document.getElementById('welcome-text').textContent = 'Welcome to the fsociety. We are anonymous. We are legion.';
        document.getElementById('about-title').textContent = 'About Me';
        document.getElementById('about-text').textContent = 'Hello! My name is peepkeen, I am 18 years old. I started getting into programming in 2021 and haven\'t been able to stop since. My goal is to become a professional web developer and create amazing things on the internet. I believe that code is art, and I strive for perfection in every line.';
        document.getElementById('links-title').textContent = 'My links:';
        languageLabel.textContent = 'RU';
    }
}

function changeTheme() {
    const isLightTheme = document.getElementById('theme-switch').checked;
    const themeLabel = document.querySelector('.theme-toggle .label-text');
    if (isLightTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeLabel.textContent = 'Dark';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeLabel.textContent = 'Light';
    }
}
