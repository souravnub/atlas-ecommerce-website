export default function RadioLabel({ label, info, price }) {
    return (
        <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1.5">
                <span className="leading-4 text-[.97rem] font-medium text-gray-700">
                    {label}
                </span>
                <span className="text-gray-400 text-sm">{info}</span>
            </div>

            <span className="leading-4 font-medium text-gray-500">{price}</span>
        </div>
    );
}
