var block = document.querySelector('#slide-login')

function loginProfessor() {
    block.classList.add("slide-left");
    block.classList.remove('slide-login')
}

function loginAluno() {
    const animation = new CSSStyleSheet();
    animation.insertRule(`.slide-login {
        animation: slide-right 2s ease-out;
    }`);

    document.adoptedStyleSheets = [animation];
    block.classList.remove('slide-left')
    block.classList.add("slide-login");
}
