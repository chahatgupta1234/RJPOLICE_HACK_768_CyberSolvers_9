import './index.css';

function App() {
  return (
    <div className="container flex items-center justify-center p-8 h-screen">
  {/* Header section */}

  {/* Main content */}
  <main className=" p-8 rounded shadow-lg my-8">
    <h1 className="text-4xl font-bold mb-4">Fraud Detection by Rajasthan Police</h1>
    <h2 className="text-2xl mb-4 py-11">The AI Solution you need to protect from any fraud.</h2>
    <button className="bg-white flex items-center justify-center hover:bg-red-700 text-black font-bold border rounded focus:outline-none focus:shadow-outline">
      <p className="px-3">  Open</p>
    </button>

    <section className="text-center mt-8">
      <h3 className="text-lg font-semibold mb-2">Hello everyone! Here is a broad Solution for any type of Mislead or Fraud</h3>
      <p>Presented by Rajasthan Police on 1930 Helpline</p>
    </section>
  </main>

</div>
  );
}

export default App;
