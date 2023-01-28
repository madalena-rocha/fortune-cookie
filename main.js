const main  = document.querySelector(".main");
const fortune = document.querySelector(".fortune");

const fortuneCookie = document.getElementById("fortune-cookie");
const cookieMessage = document.getElementById("cookie-message");

const openCookie = document.getElementById("open-cookie");

const messages = [
    "Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.",
    "Não vale a pena viver sonhando e se esquecer de viver.",
    "Não são nossas habilidades que revelam quem realmente somos, são as nossas escolhas.",
    "Em breve teremos que escolher entre o que é certo e o que é fácil.",
    "Palavras são, na minha nada humilde opinião, nossa inesgotável fonte de magia.",
    "Não tenha pena dos mortos. Tenha pena dos vivos, e, acima de tudo, daqueles que vivem sem amor.",
    "Todos temos luz e trevas dentro de nós. O que importa é o lado no qual decidimos agir. Isso é o que realmente somos.",
    "As coisas que nos pertencem acabam voltando para nós. Bom, nem sempre da forma que esperamos.",
    "É necessário muita coragem para enfrentar nossos inimigos, e tanto quanto para enfrentar nossos amigos.",
    "É o grau de comprometimento que determina o sucesso, não o número de seguidores.",
    "Se você quer saber como um homem é, preste atenção em como ele trata quem é inferior a ele, não seus iguais.",
    "Não adianta a gente ficar sentado se preocupando. O que tiver de ser será, e nós o enfrentaremos quando vier.",
    "A verdade é uma coisa bela e terrível, e portanto deve ser tratada com grande cautela.", 
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
        ToggleClassHide()
        GenerateRandomMessage();
    }
});

fortuneCookie.addEventListener('click', () => {
    ToggleClassHide()
    GenerateRandomMessage();
});

openCookie.addEventListener('click', () => {
    ToggleClassHide()
    GenerateRandomMessage();
});
