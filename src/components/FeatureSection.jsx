import { features } from "../constants"

const FeatureSection = () => {
    return (
        <div id="features" className="relative mt-20 border-neutral-800 border-b min-h-[800px]">
            <div className="text-center font-mono font-semibold">
                <span className="bg-neutral-900 px-2 py-1 rounded-full h-6 font-medium text-teal-500 text-sm uppercase">
                    Feature
                </span>
                <h2 className="mt-10 lg:mt-20 text-3xl sm:text-5xl lg:text-6xl tracking wide">
                    Easily Automate
                    <span className="bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800 text-transparent">
                        {' '}Your Tasks
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex justify-center items-center bg-neutral-900 mx-6 rounded-full w-10 h-10 text-teal-700">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">
                                    {feature.text}
                                </h5>
                                <p className="mb-20 p-2 text-md text-neutral-500">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FeatureSection