const cep = document.getElementById("cep");


cep.addEventListener("blur", (e) => {
    let procurar = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${procurar}/json`, options)
        .then(response => {
            response.json()
                .then(data => Showdata(data))
        })
        .catch(e => alert_erro("O CEP: " + cep.value + " Não é válido"))
})

const Showdata = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}


/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confiSenha = document.getElementById("confiSenha");
    let cep = document.getElementById("cep");

    // verificar se o nome está vazio
    if (nome.value == "") {
        alert_erro("Nome não informado");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert_erro("E-mail não informado");
        email.focus();
        return;
    }

    if (senha.value == "") {
        alert_erro("Digite Alguma senha")
        email.focus()
        return
    }
    if (senha.value != confiSenha.value) {
        alert_erro("As senhas estão diferentes!")
        confiSenha.focus()
        return
    }

    if (cep.value == "") {
        alert_erro("CEP não informado");
        cep.focus();
        return;
    }

    window.open("paginaInicial.html", "_self")

}

$('#btn').click(function (evento) {
    evento.preventDefault()
    validar();
});

function alert_erro(msg){
    let texto = document.getElementById('msg')
    texto.innerHTML = msg
    
    $('.toast').toast('show')
        setTimeout(() => {
            if (document.getElementById('div_toast'))
            $('.toast').toast('hide')
        }, 5000)
    
}


