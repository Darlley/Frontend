class Cadastro{
    
    validar(){

        //1) Leitura dos Inputs
        let mensagemValidacao = "PREENCHA OS CAMPOS ABAIXO\n"; 

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let sexo = document.querySelector("[name=sexo]:checked");
        let curso = document.querySelector("[name=curso]:checked");
        let estado = document.getElementById("estado").value;
        let foto = document.getElementById("foto").files[0];

        //2) Validação dos campos

        if(nome==""){
            mensagemValidacao += "\n-Nome\n";
        }
        if(email==""){
            mensagemValidacao += "-Email\n";
        }
        if(sexo==null){
            mensagemValidacao += "-Sexo\n";
        }
        if(curso==null){
            mensagemValidacao += "-Cursos\n";
        }
        if(estado==""){
            mensagemValidacao += "-Estado\n";
        }
        if(foto==undefined){
            mensagemValidacao += "-Foto\n";
        }else if(foto.size>1048576){
            mensagemValidacao += "-Escolha uma FOTO MENOR!\n";
        }else if(foto.type!="image/jpeg" && foto.type!="image/png"){
            mensagemValidacao += "-Formato do arquivo 'Foto' inválido!\n";
        }
        
        if((mensagemValidacao != "") && (mensagemValidacao != "PREENCHA OS CAMPOS ABAIXO\n")){
            document.getElementById("mensagens").innerText = mensagemValidacao;
            document.getElementById("mensagens").classList.add("show")
            document.getElementById("imagem").classList.add("outimagem")
        }
    }

}

var cadastro = new Cadastro();
