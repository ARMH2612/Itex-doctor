import React from 'react'

const FapComp = () => {
  return (
    <div className="flex items-center w-full">
            <div className="bg-white w-full">
                <div className=" flex flex-col justify-center w-full">
                    <div className="space-y-4 w-full">
                        <details className="w-full border" open>
                            <summary className="px-4 py-6 bg-slate-800 text-white">
                                <span className="text-orange-500">01</span>: Question text goes here
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 text-gray-600">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                            </p>
                        </details>
                        <details className="w-full border" >
                            <summary className="px-4 py-6 bg-slate-800 text-white">
                                <span className="text-orange-500">02</span>: Question text goes here
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 text-gray-600">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                            </p>
                        </details>
                        <details className="w-full border" >
                            <summary className="px-4 py-6 bg-slate-800 text-white">
                                <span className="text-orange-500">03</span>: Question text goes here
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 text-gray-600">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FapComp