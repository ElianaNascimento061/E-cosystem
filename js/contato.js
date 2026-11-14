//Variáveis
const formulario = document.getElementById("contatoForm");
const mensagemStatus = document.getElementById("mensagemStatus");

formulario.addEventListener("submit", async (event) => {
  //Impede a página de carregar logo depois do envio
  event.preventDefault();
  const botao = formulario.querySelector('button[type="submit"]');
  botao.disabled = true; //Desativa o botão pro usuário clicar só uma vez
  botao.textContent = "Enviando...";
  mensagemStatus.hidden = true;
  mensagemStatus.textContent = "";
  mensagemStatus.className = "mensagem_status";

  try {
    //Cria um objeto formData com os dados preenchidos e envia para o email
    const resposta = await fetch(formulario.action, {
        method: "POST",
        headers: {
          "Content-Type" : "aplication/json",
          "Accept": "application/json"
        },
        //Transforma os dados preenchidos em JSON
        body: JSON.stringify(
          Object.fromEntries(new FormData(formulario))
        )
    });

    const dados = await resposta.json();
    //Verifica se o servidor respondeu
    if (!resposta.ok || String(dados.success).toLowerCase() !== "true") {
      throw new Error(dados.message || "Falha no envio.");
    }
    //Exibe a confirmação
    mensagemStatus.textContent = "Mensagem enviada com sucesso! Obrigada pelo contato.";
    mensagemStatus.classList.add("sucesso");
    //Limpa os campos do formulário
    formulario.reset();

  } catch (erro) {
    //Mostra o erro no console
    Console.error("Erro ao enviar:", erro);
    mensagemStatus.textContent = "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.";
    mensagemStatus.classList.add("erro")

  } finally {
      mensagemStatus.hidden = false;
      botao.disabled = false;
      botao.textContent = "Enviar mensagem";
  } 
});