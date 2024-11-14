const tg = window.Telegram

let service = null

function get_service(elm) {
    const spanServiceText = elm.querySelector('span').textContent

    service = spanServiceText;

    console.log(service)

    const questionBlock = document.querySelector(".question_main_block");
    questionBlock.style.display = "none";

    document.querySelector(".form-main-block").style.display = "block";
}

const theme = Telegram.WebApp.themeParams;

document.documentElement.style.setProperty('--tg-theme-bg-color', theme.bg_color || '#ffffff');
document.documentElement.style.setProperty('--tg-theme-text-color', theme.text_color || '#000000');
document.documentElement.style.setProperty('--tg-theme-hint-color', theme.hint_color || '#cccccc');
document.documentElement.style.setProperty('--tg-theme-button-color', theme.button_color || '#4a76a8');
document.documentElement.style.setProperty('--tg-theme-button-text-color', theme.button_text_color || '#ffffff');