var saldo = 100;
var senha = 3589;
var nome = prompt("Digite seu nome") || "Desconhecido";

alert("Olá " + nome + ", Seja Bem Vindo(a) ao seu banco online");

function inicio() {

    var escolha = parseInt(prompt("Informe qual operação deseja realizar \n 1.) Saldo \n 2.) Extrato \n 3.) Saque \n 4.) Depósito \n 5.) Transferência \n 6.) Sair"));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            extrato();
            break;
        case 3:
            saque();
            break;
        case 4:
            depósito();
            break;
        case 5:
            transferência();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function ver_saldo() {
    if (senha == prompt("Digite a sua senha")) {
        alert("Seu saldo atual é: " + saldo);
        inicio();
    } else {
        alert("Senha Incorreta");
        ver_saldo();
    }
}

function extrato() {
    if (senha == prompt("Digite sua senha")) {
        alert("\n Depósito de R$100.87 \n Saque de R$5.00 \n Depósito de R$3000.00 \n Tranferência de R$1000.00")
        inicio();
    } else {
        alert("Senha Incorreta");
        extrato();
    }
}

function saque() {
    if (senha == prompt("Digite a sua senha")) {
        let saque = parseFloat(prompt("Deseja sacar qual valor?"));
        switch (isNaN(saque) || saque === "" || saque <= 0 || saque > saldo) {
            case true:
                alert("Operação não autorizada");
                saque();
                break;
            case false:
                saldo -= saque
                alert("Seu saldo é " + saldo);
                inicio();
                break;
        }
    } else {
        alert("Senha Incorreta");
        saque();
    }
}

function depósito() {
    let deposito = parseFloat(prompt("Deseja depositar qual valor?"));
    switch (isNaN(deposito) || deposito === "" || deposito <= 0) {
        case true:
            alert("Operação não autorizada");
            depósito();
            break;
        case false:
            saldo += deposito
            alert("Seu saldo atual é " + saldo);
            inicio();
            break;
    }
}

function transferência() {
    if (senha == prompt("Digite a sua senha")) {
        let transferencia = parseFloat(prompt("Qual a conta que deseja transferir"));
        switch (isNaN(transferencia) || transferencia === "" || transferencia < 0) {
            case true:
                alert("Operação não autorizada");
                transferência();
                break;
            case false:
                let valor = parseFloat(prompt("Qual valor você deseja transferir?"));
                switch (isNaN(valor) || valor === "" || valor <= 0 || valor > saldo) {
                    case true:
                        alert("Operação não autorizada");
                        transferência();
                        break;
                    case false:
                        saldo -= valor;
                        alert("Seu saldo atual é " + saldo);
                        inicio();
                        break;
                }
        }
    } else {
        alert("Senha incorreta");
        transferência();
    }
}

function sair() {
    var confirmar = confirm("Você deseja sair?");
    if (confirmar) {
        alert(nome + " foi um prazer ter você por aqui, volte sempre!");
        window.close();
    } else {
        inicio();
    }
}

function erro() {
    alert("Por favor, informe um número entre 1 e 6");
    inicio();
}

inicio();
