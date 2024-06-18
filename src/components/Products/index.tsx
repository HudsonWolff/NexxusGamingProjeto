import "./products.css";

function Products() {
  return (
    <section id="products-section" className="box-default">
      <h2 id="h2-products" className="h2-default">
        CONFIRA AGORA OS PRODUTOS QUE BATEM RECORDE DE VENDAS EM NOSSA LOJA
      </h2>
      <div className="product-container">
        <img src="src\assets\teclado-redragon.jpg" className="img-div" alt="" />
        <p id="p-product" className="p-default">
          O teclado Kumara é conhecido por sua combinação de design compacto e
          desempenho poderoso, especialmente voltado para gamers. Fabricado pela
          Redragon, o Kumara é elogiado por sua durabilidade e precisão,
          oferecendo uma experiência de digitação responsiva e confortável. Com
          teclas mecânicas de alta qualidade, iluminação LED ajustável e uma
          construção robusta, o Kumara é uma escolha popular para jogadores que
          buscam um teclado confiável e acessível.
        </p>
      </div>

      <div className="product-container2">
        <img src="src\assets\mouse-razer.jpg" alt="" className="img-div" />

        <p id="p-product2" className="p-default">
          O Razer Basilisk é a escolha definitiva para jogadores que buscam
          precisão, conforto e desempenho incomparáveis. Com um design
          ergonômico que se adapta perfeitamente à sua mão, o Basilisk oferece
          horas de jogo confortável sem fadiga. Equipado com um sensor óptico de
          alta precisão e switches mecânicos Razer, cada movimento é executado
          com a máxima precisão e resposta rápida.
        </p>
      </div>

      <div className="product-container3">
        <img src="src\assets\monitor aoc.jpg" alt="" />

        <p id="p-product " className="p-default">
          O monitor AOC Hero de 144Hz é uma excelente escolha para jogadores que
          buscam uma experiência de jogo suave e imersiva. Com uma taxa de
          atualização de 144Hz, este monitor oferece imagens incrivelmente
          fluidas e sem borrões, permitindo que você reaja rapidamente às ações
          no jogo. Além disso, o AOC Hero de 144Hz possui uma tela de alta
          resolução e tecnologia de painel avançada, proporcionando cores
          vibrantes e detalhes nítidos em cada cena. Seja explorando vastos
          mundos de jogos ou participando de intensas batalhas multiplayer, você
          desfrutará de uma experiência visual incrível.
        </p>
      </div>

      <div className="product-container4">
        <img src="src\assets\mousepad redragon.jpg" alt="" />

        <p id="p-product" className="p-default">
          O mouse pad Redragon Pluto é uma adição essencial para qualquer
          configuração de jogos séria. Com uma superfície de tecido fino de alta
          densidade, o Pluto oferece um equilíbrio perfeito entre velocidade e
          controle, permitindo movimentos suaves e precisos do mouse em todas as
          situações de jogo. O design extra grande do Redragon Pluto proporciona
          espaço mais do que suficiente para movimentos amplos e rápidos,
          garantindo que você nunca fique sem espaço durante os momentos
          cruciais do jogo. Além disso, sua base de borracha antiderrapante
          mantém o mouse pad firmemente no lugar, mesmo durante as sessões de
          jogo mais intensas.
        </p>
      </div>

      <h2 id="h2-final" className="h2-default">
        ESSES SÃO SÓ ALGUNS DOS PRODUTOS MAIS COMPRADOS E BEM AVALIADOS DA NOSSA
        LOJA
      </h2>

      <button id="btn-products" className="button-default">CLIQUE AQUI PARA CONHECER NOSSA LOJA COMPLETA
      </button>
    </section>
  );
}

export default Products;
