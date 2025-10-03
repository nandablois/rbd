interface Show {
  cidade: string;
  pais: string;
  data: string;
  youtube: string;
}

const shows: Show[] = [
  {
    cidade: "São Paulo",
    pais: "Brasil",
    data: "10 de outubro de 2005",
    youtube: "https://www.youtube.com/watch?v=EXEMPLO1",
  },
  {
    cidade: "Rio de Janeiro",
    pais: "Brasil",
    data: "15 de outubro de 2005",
    youtube: "https://www.youtube.com/watch?v=EXEMPLO2",
  },
  {
    cidade: "Buenos Aires",
    pais: "Argentina",
    data: "20 de novembro de 2005",
    youtube: "https://www.youtube.com/watch?v=EXEMPLO3",
  },
  // Adicione outros shows marcantes
];

export default function Shows() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-black to-red text-white pt-24 font-mulish">
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-12 gap-12 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Shows Mais Marcantes Do RBD
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {shows.map((show, idx) => (
            <a
              key={idx}
              href={show.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6 hover:scale-105 transition-transform hover:bg-red-700/50"
            >
              <h2 className="text-xl font-semibold mb-2">
                {show.cidade}, {show.pais}
              </h2>
              <p className="text-sm">{show.data}</p>
              <p className="text-sm text-gray-300 mt-2 underline">Assistir no YouTube</p>
            </a>
          ))}
        </div>

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
