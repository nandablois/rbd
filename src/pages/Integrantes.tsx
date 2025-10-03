interface Integrante {
  nome: string;
  imagem: string;
  descricao: string;
}

const integrantes: Integrante[] = [
  {
    nome: "Anahí",
    imagem: "/assets/anahi.png",
    descricao: "Interpretava Mía Colucci na novela Rebelde. Além de cantora, atriz e compositora, foi um dos destaques do grupo.",
  },
  {
    nome: "Dulce María",
    imagem: "/assets/dulce.png",
    descricao: "Interpretava Roberta Pardo. Destacou-se pela voz marcante e presença de palco.",
  },
  {
    nome: "Maite Perroni",
    imagem: "/assets/maite.png",
    descricao: "Interpretava Lupita Fernández. Também seguiu carreira solo como cantora e atriz.",
  },
  {
    nome: "Christopher Uckermann",
    imagem: "/assets/christopher.png",
    descricao: "Interpretava Diego Bustamante. Participou de álbuns do RBD e da novela Rebelde.",
  },
  {
    nome: "Alfonso Herrera",
    imagem: "/assets/alfonso.png",
    descricao: "Interpretava Miguel Arango. Atuou em teatro, televisão e filmes após o fim do grupo.",
  },
  {
    nome: "Christian Chávez",
    imagem: "/assets/christian.png",
    descricao: "Interpretava Giovanni Méndez. Cantor, ator e figura importante dentro do grupo.",
  },
];

export default function Integrantes() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-black to-red text-white pt-24 font-mulish">
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-12 gap-12 max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Integrantes do RBD
        </h1>

        {/* Grid dos integrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {integrantes.map((integ) => (
            <div
              key={integ.nome}
              className="bg-black/30 rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-4 hover:scale-105 transition-transform"
            >
              <img
                src={integ.imagem}
                alt={integ.nome}
                className="w-40 h-40 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{integ.nome}</h2>
              <p className="text-sm">{integ.descricao}</p>
            </div>
          ))}
        </div>

        {/* Crédito da fonte (opcional) */}
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
