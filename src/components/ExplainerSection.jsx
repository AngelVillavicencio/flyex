import blur from "./assets/blur.jpg";
import example from "./assets/example.jpg";
import result from "./assets/result.jpg";

export default function ExplainerSection() {


    return (
        <div className="w-full max-w-6xl mt-16 p-8 bg-gray-100 rounded-lg space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">¿Cómo funciona?</h2>

            {/* Step 1: Upload your images */}
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                    <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                        1
                    </div>
                    <h3 className="text-2xl font-semibold">Sube los datos de tus postulantes</h3>
                </div>
                <p className="text-sm text-gray-600 text-center">
                    Sube los datos de tus postulantes como cv, url de Linkedin, entre otros.
                </p>
                <img
                    src={example}
                    alt="AI foto example"
                    className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
                />
            </div>

            {/* Step 2: Train your model */}
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                    <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                        2
                    </div>
                    <h3 className="text-2xl font-semibold">Nuestra IA haga el trabajo</h3>
                </div>
                <p className="text-sm text-gray-600 text-center">
                    Deja que nuestra IA haga su trabajo. Es cuestión de minutos.
                </p>
                <img
                    src={blur}
                    alt="AI foto blur"
                    className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
                />
            </div>

            {/* Step 3: Generate images */}
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                    <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                        3
                    </div>
                    <h3 className="text-2xl font-semibold">Obtén los mejores resultados</h3>
                </div>
                <p className="text-sm text-gray-600 text-center">
                    Te entregamos un análisis de cada perfil de postulante, con un top lista de los mejores postulantes.
                </p>
                <img
                    src={result}
                    alt="AI foto result"
                    className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
                />
            </div>
        </div>
    );
}