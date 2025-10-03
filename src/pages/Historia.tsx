// Imagens correspondentes a cada seção
const sections = [
  {
    title: "Formação do Grupo",
    content:
      "Inicialmente, o grupo era composto por quatro personagens: Roberta Pardo (Dulce María), Miguel Arango (Alfonso Herrera), Diego Bustamante (Christopher Uckermann) e Celina Ferrer (Estefanía Villarreal). Com o desenvolvimento da trama, Mía Colucci (Anahí), Giovanni Méndez (Christian Chávez) e Lupita Fernández (Maite Perroni) passaram a integrar o grupo, formando o sexteto final.",
    image: "/assets/formacao.png",
  },
  {
    title: "Carreira Musical",
    content:
      "Após o sucesso da novela, o grupo lançou seu primeiro álbum, Rebelde (2004), seguido de Nuestro Amor (2005) e Celestial (2006). Também lançaram o primeiro álbum em inglês, Rebels (2006), e outros sucessos como Empezar Desde Cero (2007) e Para Olvidarte de Mí (2009).",
    image: "/assets/carreira.png",
  },
  {
    title: "Turnês e Sucesso Internacional",
    content:
      "O RBD realizou várias turnês internacionais, vendendo mais de 15 milhões de discos e se apresentando em 116 cidades ao redor do mundo, incluindo Brasil, Estados Unidos e Espanha. Shows memoráveis aconteceram no Estádio Maracanã, Madison Square Garden e Coliseu de Los Angeles.",
    image: "/assets/tours.png",
  },
  {
    title: "Fim das Atividades e Reunião",
    content:
      "Em 2008, o grupo anunciou oficialmente o fim das atividades, com o último show em Madrid. Após mais de uma década, o grupo se reuniu para o Soy Rebelde Tour em 2023, realizando shows no México, Brasil, Colômbia e Estados Unidos, sem a participação de Alfonso Herrera.",
    image: "/assets/fim.png",
  },
];

export default function Historia() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-black to-red text-white pt-24 font-mulish">
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-12 gap-16 max-w-6xl mx-auto">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          História do RBD
        </h1>

        {/* Seções */}
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Texto */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-lg">{section.content}</p>
            </div>

            {/* Imagem */}
            <div className="flex justify-center md:justify-end">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        ))}
         {/* Créditos da fonte */}
        <div className="mt-12 text-center text-sm text-gray-300">
          Fonte das informações:{" "}
          <a
            href="https://pt.wikipedia.org/wiki/RBD"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Wikipédia
          </a>
        </div>
      </main>
    </div>
  );
}
