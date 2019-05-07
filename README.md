<h2>Conceitos aplicados</h2>
<li>Yarn</li>
<li>EXpressJS</li>
<li>Nodemon</li>
<li>EditorConfig</li>
<li>ESLint</li>
<li>Fluxos de requisocoes</li>
<li>Nunjucks e renderizar dados na view</li>
<li>Enviando formulário</li>

<h2> Executando a aplicação</h2>
<ul>1. Download <a href="https://yarnpkg.com/en/" target="_blank" >"Yarn."</a></ul>
<ul>2. Execute o yarn na raiz do projeto no terminal com comando "yarn start" (sem aspas).</ul>
<ul>3. Acesse <a href="http://localhost:3000/" target="_blank" >http://localhost:3000/</a> em seu navegador preferido.</ul>

<h2> Quest ^^</h2>
<h4>by <a href="https://station.rocketseat.com.br" target="_blank" >RocketSeat!</a></h4>

<b>Rotas</b> 
<li><b>/:</b> Rota inicial que renderiza uma página com um formulário com um único campo ageque representa a idade do usuário;
<li><b>/check:</b> Rota chamada pelo formulário da página inicial via método POST que checa se aidade do usuário é maior que 18 e o redireciona para a rota /major, caso contrário oredireciona para a rota /minor (Lembre de enviar a idade como Query Param noredirecionamento);
<li><b>/major:</b> Rota que renderiza uma página com o texto: Você é maior de idade epossui x anos, onde x deve ser o valor informado no input do formulário;
<li><b>/minor:</b> Rota que renderiza uma página com o texto: Você é menor de idade epossui x anos, onde x deve ser o valor informado no input do formulário;
</li>

