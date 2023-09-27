export function About() {
  return (
    <>
      <div className="flex flex-row items-center">
        <img
          src={"/professional.jpeg"}
          className="w-1/3 rounded-lg float-left mr-16"
        />
        <div className="flex flex-col">
          <p className="text-6xl font-bold font-sans mb-4">
            Josh Wood
          </p>
          <p className="text-3xl font-bold font-sans">
            A creative problem solver who likes to code.
          </p>
          <div className="flex flex-row space-x-4 mt-4">

          </div>
        </div>
      </div>
    </>
  );
}
