const tgWebApp = Telegram.WebApp

let service = null;

function get_service(elm) {
    const spanServiceText = elm.querySelector('span').textContent

    service = spanServiceText;

    const questionBlock = document.querySelector(".question_main_block");
    questionBlock.classList.remove("visible");
    questionBlock.classList.add("hidden");

    // Появление блока формы после задержки
    const formBlock = document.querySelector(".form-main-block");

    setTimeout(() => {
        questionBlock.style.display = "none"; // скрываем элемент после анимации

        formBlock.style.display = "block"; // показываем блок перед анимацией
        formBlock.classList.remove("hidden");
        formBlock.classList.add("visible");
    }, 500); // задержка должна совпадать с продолжительностью анимации
}

const theme = tgWebApp.themeParams;

document.documentElement.style.setProperty('--tg-theme-bg-color', theme.bg_color || '#ffffff');
document.documentElement.style.setProperty('--tg-theme-text-color', theme.text_color || '#000000');
document.documentElement.style.setProperty('--tg-theme-hint-color', theme.hint_color || '#cccccc');
document.documentElement.style.setProperty('--tg-theme-button-color', theme.button_color || '#4a76a8');
document.documentElement.style.setProperty('--tg-theme-button-text-color', theme.button_text_color || '#ffffff');


const submitBtn = document.querySelector(".send-btn");

submitBtn.addEventListener("click", function (e) {

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const description = document.getElementById('description').value;

    const params = [name, contact, description]

    if(name.length < 3 || contact.length < 3 || description.length < 5){
        const errorElm = document.querySelector(".error");
        errorElm.textContent = "Некорректные данные";
        return;
    }

    const formData = {
        name: name,
        contact: contact,
        description: description,
        service_type: service
    };

    tgWebApp.sendData(JSON.stringify(formData));

    tgWebApp.close();
})