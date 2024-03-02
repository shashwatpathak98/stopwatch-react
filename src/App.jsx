import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <>
      <section className="text-gray-600 body-font my-7 mx-auto">
        <div className="container px-4 md:px-12 py-12 mx-auto md:py-24 ">
          <h1 className="text-3xl md:text-4xl text-yellow-300 justify-center text-center tracking-widest font-bold title-font mb-6">
            STOPWATCH
          </h1>

          <div className="flex flex-col text-center sm:w-1/2 md:w-1/2 lg:w-1/2  mx-auto pt-5 border-2 bg-gradient-to-r from-blue-100 to-slate-100 border-sky-500 rounded-full">
            <Stopwatch />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
