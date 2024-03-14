// Aqui irá el codigo que hace que funcione el panel tab

function changeOption (opcion){
    if (opcion == 1) {
        option2.classList.remove('option-active');
        content2.classList.remove('content-active');
        option1.classList.add('option-active');
        content1.classList.add('content-active');
    } else if (opcion == 2) {
        option1.classList.remove('option-active');
        content1.classList.remove('content-active');
        option2.classList.add('option-active');
        content2.classList.add('content-active');
    }
};
