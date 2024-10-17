const mediaQuery = window.matchMedia('(max-width: 600px)');

// Функция, которая будет вызываться при изменении состояния медиа-запроса
function handleMediaQuery(event) {
    if (event.matches) {
        setMobile();
    } else {
        setDesktop();
    }
}

function setMobile() {
    const slack_android = document.querySelector('.button-slack-android')

    slack_android.addEventListener('touchstart', (e) => {
        e.preventDefault();
        slack_android.style.backgroundColor = 'rgb(224, 224, 77)';
        slack_android.classList.add('glow-effect');
    });

    slack_android.addEventListener('touchend', () => {
        slack_android.style.backgroundColor = 'rgb(248, 248, 80)';
        slack_android.classList.remove('glow-effect');
    })
}

function setDesktop() {
    document.querySelector('.slack-android-container').style.display = 'none';

    const get_started_btn = document.querySelector('.some-words .get-started')
    get_started_btn.addEventListener('mouseenter', () => {
        get_started_btn.classList.add('glitch-effect');
    })

    get_started_btn.addEventListener('mouseout', () => {
        get_started_btn.classList.remove('glitch-effect');
    })
}

handleMediaQuery(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQuery);