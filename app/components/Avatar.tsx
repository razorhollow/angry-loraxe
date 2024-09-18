import { getPastelColorFromName } from 'utils/colorUtils';

export default function Avatar({ name }: { name: string }) {
    const backgroundColor = getPastelColorFromName(name);
    const firstLetter = name.charAt(0).toUpperCase();

    return (
        <div
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-${backgroundColor} text-white`}
        >
            {firstLetter}
        </div>
    )
}