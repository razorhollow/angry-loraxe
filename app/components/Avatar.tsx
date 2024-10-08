import { getBrandColorFromName } from 'utils/colorUtils';

export default function Avatar({ name }: { name: string }) {
    const backgroundColor = getBrandColorFromName(name).split(" ").join("");
    const firstLetter = name.charAt(0).toUpperCase();

    return (
        <div
            className="text-3xl flex items-center justify-center w-12 h-12 rounded-full text-white"
            style={{ backgroundColor: backgroundColor }}
        >
            {firstLetter}
        </div>
    );
}
