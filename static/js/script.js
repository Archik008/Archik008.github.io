const mediaQuery = window.matchMedia('(max-width: 600px)');

// Функция, которая будет вызываться при изменении состояния медиа-запроса
function handleMediaQuery(event) {
    if (event.matches) {
        setMobile();
    } else {
        document.querySelector('.slack-android-container').style.display = 'none';
    }
}

function setMobile() {
    const slack_android = document.querySelector('.button-slack-android')

    slack_android.addEventListener('touchstart', (e) => {
        e.preventDefault();
        slack_android.style.backgroundColor = 'rgb(224, 224, 77)';
    });

    slack_android.addEventListener('touchend', () => {
        slack_android.style.backgroundColor = 'rgb(248, 248, 80)';
    })
}

handleMediaQuery(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQuery);