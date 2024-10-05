export default function NutritionAndExercising() {
  return (
    <div className="flex w-full h-[calc(100vh-70px)] md:h-[calc(100vh-80px)] flex-grow gap-6 bg-tiber text-black p-10">
      <div className="bg-tiber w-full flex flex-col justify-start min-h-screen px-5">
      <h2 className="text-3xl text-white font-bold mb-4 text-center">
        Nutrizione e Allenamento
      </h2>
      <p className="text-lg text-white mb-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis, ante a mollis pulvinar, sem sem scelerisque arcu, sed dignissim eros erat vitae neque. Aenean est nisl, lacinia ut urna ac, aliquam dictum elit. Aliquam vehicula dolor turpis, vel semper neque sagittis at. Donec cursus euismod turpis, non interdum ligula ultricies vel. Fusce faucibus, eros vel vulputate ullamcorper, nisi ipsum ornare felis, sed pulvinar ipsum libero sed mi. Praesent mattis scelerisque tortor, hendrerit pretium orci gravida non. Donec congue mauris sem, quis consectetur nisi molestie quis. Phasellus hendrerit lectus velit, vel imperdiet nisl elementum a. Nunc ullamcorper accumsan commodo. Proin dignissim, felis ut fringilla faucibus, felis orci posuere metus, eu scelerisque metus mauris eu tortor.
      </p>

      <div className="flex">
        <div className="w-1/2 h-64 bg-white mb-5">
        </div>
        <div className="text-white ml-4">
          Nutrizioni
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 text-white">
          Allenamento
        </div>
        <div className="flex-1 w-1/2 h-64 bg-white mb-5">
        </div>
      </div>

      <div className="w-full h-80 bg-white">
        {/* Immagini con lo slider prima e dopo*/}
      </div>

      </div>
    </div>
  );
}
