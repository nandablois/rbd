export default function HeroSection() {
    return (
        <div className="order-2 flex flex-col gap-6 items-center text-center"        >
            <img
                src="/assets/logo1.png"
                alt="RBD Logo"
                className="w-60 md:w-60"
            />
            <p className="text-lg leading-relaxed font-mulish max-w-2xl">
                O <strong>RBD</strong> nasceu em 2004 a partir da novela{" "}
                <strong>Rebelde</strong> e rapidamente se tornou um fenômeno mundial. Com
                turnês esgotadas, músicas em espanhol, português e inglês, o grupo marcou
                gerações e até hoje é lembrado com carinho pelos fãs.
            </p>
        </div>
    );
}
