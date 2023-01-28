const main  = document.querySelector(".main");
const fortune = document.querySelector(".fortune");

const fortuneCookie = document.getElementById("fortune-cookie");
const cookieMessage = document.getElementById("cookie-message");

const openCookie = document.getElementById("open-cookie");

const messages = [
    "A vida é feita de pequenos momentos de felicidade.",
    "Mantenha a fé, as coisas vão dar certo.",
    "A esperança é a última que morre.",
    "Tudo acontece por um motivo.",
    "A vida é curta, sorria enquanto pode.",
    "Os desafios são oportunidades para se mostrar o que você é capaz.",
    "A persistência é a chave do sucesso.",
    "O sucesso é uma jornada, não um destino.",
    "Oportunidades são escondidas dentro de cada fracasso.",
    "O impossível é apenas uma opinião, não uma realidade.",
    "A felicidade é uma escolha, escolha ser feliz.",
    "Não importa o tamanho do problema, a atitude é tudo.",
    "A gratidão é a chave para a felicidade.",
    "O amor é a força mais poderosa do mundo.",
    "A determinação é a chave para vencer.",
    "A bondade é a chave para a paz interior.",
    "A paciência é a chave para a sabedoria.",
    "A verdadeira riqueza é a amizade e a família.",
    "Otimismo é a chave para uma vida feliz.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "A honestidade é a chave para a confiança.",
    "A generosidade é a chave para a felicidade dos outros.",
    "A humildade é a chave para a sabedoria.",
    "A simplicidade é a chave para a felicidade.",
    "A confiança é a chave para o sucesso.",
    "A coragem é a chave para superar medos e obstáculos.",
    "A tolerância é a chave para a paz.",
    "A empatia é a chave para o entendimento dos outros.",
    "A sabedoria vem com a idade e a experiência.",
    "A criatividade é a chave para o sucesso."
];

function GenerateRandomMessage() {
    const totalMessages = messages.length;
    const RandomNumber = Math.floor(Math.random() * totalMessages);

    cookieMessage.innerHTML = messages[RandomNumber];
};

function ToggleClassHide() {
    main.classList.toggle("hide");
    fortune.classList.toggle("hide");
}

document.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        ToggleClassHide();
        GenerateRandomMessage();
    }
});

fortuneCookie.addEventListener('click', () => {
    ToggleClassHide();
    GenerateRandomMessage();
});

openCookie.addEventListener('click', () => {
    ToggleClassHide();
    GenerateRandomMessage();
});
