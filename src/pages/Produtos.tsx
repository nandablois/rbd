export default function Produtos() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-black to-red text-white pt-24 font-mulish">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center max-w-5xl mx-auto">
        <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-100 font-semibold">
          Confira a coleção exclusiva de produtos do <strong>RBD</strong> na
          Shopee. Camisetas, acessórios, posters e muito mais para os fãs
          reviverem essa história inesquecível e levarem um pedacinho da banda
          para casa. Aproveite para garantir já o seu item oficial e mostrar ao
          mundo que você também faz parte dessa geração Rebelde!
        </p>

        <img
          src="/assets/produtos/colecao.jpg"
          alt="Coleção RBD"
          className="rounded-2xl shadow-2xl w-full max-w-2xl mb-12"
        />

        <a
          href="https://shopee.com.br/seu-link-da-colecao"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-xl"
        >
          Ver Coleção Completa
        </a>
      </main>
    </div>
  );
}
