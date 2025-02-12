document.getElementById("formulario").addEventListener("submit",
    function (event) {
        let valido = true
        let mensagem = []


        const nome = documente.getElementById("nome").value
        if (nome.split(" ").length < 2) {
            valido = false
            mensagem.push("o nome deve conter pelo menos 6 letras")
        }

        const sexomasc = document.getElementById("masculino").checked
        const sexofem = document.getElementById("feminino").checked

        if (!sexomasc && !sexofem)
            valido = false
        mensagem.push("selecione o campo sexo.")


        /*const estado = document.querySelector("input[name='estado']:checked")
        if (!estado) {
            mensagem.push("selecione o campo estado")
        }*/
       const sugestao = document.getElementById("sugestao").value
       if (sugestao.length < 50){
        valido = false
        mensagem.push("A sugestao deve conter pelo menos 100 caracteres")
       }

        if (!valido == false) {
            event.preventDefault()

            alert(mensagem.join("\n"))
        }
    }


)