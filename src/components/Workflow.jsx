import { CheckCircle2 } from "lucide-react"
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants"
const Workflow = () => {
    return (
        <div id="workflow" className="mt-20">
            <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-5">
                Synchronize Your
                <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 text-transparent"> Team Workflow</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="Codeimage" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="justify-center bg-neutral-900 mx-6 p-2 rounded-full w-10 h-10 text-green-400">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Workflow