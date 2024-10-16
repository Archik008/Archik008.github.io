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

    slack_android.addEventListener('touchstart', () => {
        slack_android.style.backgroundColor = 'rgb(224, 224, 77)';

        setTimeout(() => {
            slack_android.style.backgroundColor = 'rgb(248, 248, 80)';
        }, 200);
    });

    const getStarted = document.querySelector('.get-started')

    getStarted.addEventListener('touchstart', () => {
        getStarted.style.backgroundColor = 'rgb(78, 7, 78)';
        getStarted.style.borderColor = 'rgb(78, 7, 78)';

        setTimeout(() => {
            getStarted.style.backgroundColor = 'rgb(99, 7, 99)';
            getStarted.style.borderColor = 'rgb(99, 7, 99)';
        }, 200);
    })
}

handleMediaQuery(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQuery);