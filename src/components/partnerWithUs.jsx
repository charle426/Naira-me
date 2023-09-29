

export default function Partner() {
    return (
        <section className="bg-[#00a85a] partner">
            <div className="bg-[#00a85aab] text-white text-center py-8 relative z-50">
                <h1>Partner with NAIRAME</h1>
            </div>
            <div className="relative grid md:grid-cols-2 grid-cols-1">
                <div className="relative joinUs join">
                    {/* <img src={ vendor } alt="" className="w-full" /> */}
                    <div className="absolute w-full left-[50%] z-20 flex items-center justify-center flex-col gap-3 top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-white uppercase">become a vendor</h3>
                        <button>Click to Begin</button>
                    </div>
                </div>
                <div className="relative joinUs">
                    {/* <img src={ driver } alt="" className="w-full" /> */}
                    <div className="absolute w-full left-[50%] z-20 flex items-center justify-center flex-col gap-3 top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-white uppercase">become a driver</h3>
                        <button>Click to Begin</button>
                    </div>
                </div>
                <div className="relative joinUs">
                    {/* <img src={ vendor } alt="" className="w-full" /> */}
                    <div className="absolute w-full left-[50%] z-20 flex items-center justify-center flex-col gap-3 top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-white uppercase">become a dasher</h3>
                        <button>Click to Begin</button>
                    </div>
                </div>
                <div className="relative joinUs">
                    {/* <img src={ vendor } alt="" className="w-full" /> */}
                    <div className="absolute w-full left-[50%] z-20 flex items-center justify-center flex-col gap-3 top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-white uppercase">become a flezzer</h3>
                        <button>Click to Begin</button>
                    </div>
                </div>
            </div>
        </section>
    )
}