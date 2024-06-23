
import hero from "../components/assets/hero.jpg";
import LayoutPages from "../components/LayoutPages";

const Index = ()=>{
    return (<>
    <LayoutPages>
        <div className="flex flex-col items-center pt-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
                <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
                    <h1 className="text-5xl font-bold">
                        vender viaje
                    </h1>
                    
                </div>
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                    <img
                        src={hero}
                        alt="hero"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>
            
        </div>
    </LayoutPages>



</>)
}

export default Index;