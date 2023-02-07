import { Testimony } from "@/models/testimony"

type Props = {
    testimony: Testimony;
}

export default function BoxTemplate({ testimony }: Props) {
    return (
        <div className={` ${testimony.gridCols} 
                    ${testimony.bgColor === 'bg-white' ? 'text-black' : 'text-white'}`}>
            <div className={`relative p-10 rounded-xl ${testimony.bgColor}`}>
                {testimony.quoteIcon && (
                    <img src="bg-pattern-quotation.svg" alt="quotation"
                        className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150" />
                )}


                {/* box header */}
                <div className="flex z-10 space-x-4">
                    <img src={testimony.img} className="w-10 h-10 rounded-full ring-2 ring-purple-300" />
                    <div className="text-sm">
                        <h4 className="opacity-90">{testimony.name}</h4>
                        <p className="opacity-50">{testimony.title}</p>
                    </div>
                </div>
                {/* large text*/}
                <p className="relative z-10 mt-6 text-xl">
                    {testimony.header}
                </p>
                {/* small text */}
                <p className={`mt-6 opactity-50 ${testimony.lineClamp}`}>
                    {testimony.testimony}
                </p>
            </div>
        </div>
    )
}
