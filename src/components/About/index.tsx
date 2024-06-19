import "./about.css";

function About() {
  return (
    <section id="about-section" className="box-default">
      <div id="about-div">
        <h2 id="h2-about" className="h2-default">
          NOS CONHEÇA MELHOR
        </h2>

        <p id="p-about" className="p-default">
          Bem-vindo à Nexxus Gaming Center, sua fonte definitiva de periféricos de
          informática para os aficionados por jogos. Nós entendemos a
          importância de ter os melhores equipamentos para elevar sua
          experiência de jogo a novos patamares, e é por isso que nos dedicamos
          a fornecer uma ampla seleção de produtos de alta qualidade.
        </p>

        <div id="img-about" className="img-div" >
          <img src="src\assets\pc game.jpg" alt="" />
          <img src="src\assets\teclado.webp" alt="" />
        </div>

        <p id="p-about" className="p-default">
          
          Na Gamer's Nexus, não apenas oferecemos uma variedade de teclados,
          mouses, headsets e outros acessórios, mas também garantimos que cada
          item em nosso estoque seja cuidadosamente selecionado para atender às
          demandas dos gamers mais exigentes. Nossa paixão por jogos nos
          impulsiona a buscar constantemente os produtos mais inovadores e
          avançados no mercado, para que você possa jogar com confiança e
          desempenho máximo.
        </p>

        <div id="img-about2"className="img-div" >
          <img src="src\assets\setup.jpg" alt="" />
          <img src="src\assets\monitor samurai.jpg" alt="" />
        </div>


      </div>


      <button id="aboutBtn" className="button-default">QUER SABER MAIS SOBRE NÓS ? CLIQUE AQUI</button>

    </section>
  );
}

export default About;
