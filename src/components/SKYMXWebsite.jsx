export default function SKYMXWebsite() {
  return (
    <div className="bg-white text-gray-900">
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-5xl font-bold mb-4">Redefining Travel. Restoring Freedom. Rewarding Movement.</h1>
        <p className="text-lg max-w-2xl">SKYMX transforms miles into real assets. No more expiration. No lock-ins. Just movement, value, and freedom.</p>
        <a href="#join" className="mt-6 px-6 py-3 bg-black text-white rounded-xl text-lg hover:bg-gray-800 transition">Join the Journey</a>
      </section>

      <section className="py-20 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Why SKYMX?</h2>
        <p className="text-lg mb-4">SKYMX is more than a token—it's a movement. From daily commutes to global travel, your steps are now assets. Earn SKYMX for every kilometer traveled. Spend or stake it with freedom and purpose.</p>
      </section>

      <section className="bg-gray-100 py-20 px-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tokenomics</h2>
        <img src="/SKYMX_Tokenomics_Chart.png" alt="Tokenomics Chart" className="mx-auto max-w-md" />
        <p className="mt-6">Total Supply: 35.2 Billion SKYMX<br />
          Presale: 5% | Post-Launch Release: 5% | Mining: 12% | Staking: 10% | Owner Reserve: 10% | Partners: 3% | Ecosystem Reserve: 55%</p>
      </section>

      <section className="py-20 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Imagine a World Where Movement = Wealth</h2>
        <p className="text-lg mb-4">Whether you're boarding a plane or riding a train, SKYMX rewards real travel. It's not speculation. It's infrastructure. And it's built to last for the next 20–30 years.</p>
      </section>

      <section id="join" className="bg-black text-white py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Own Your Miles. Own Your Movement. Own Your Future.</h2>
        <a href="mailto:team@skymiles.cloud" className="mt-4 inline-block px-6 py-3 bg-white text-black rounded-xl text-lg hover:bg-gray-200 transition">Contact Us</a>
      </section>
    </div>
  );
}
