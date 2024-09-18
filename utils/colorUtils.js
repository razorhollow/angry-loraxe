export function stringToHue(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        // Generate a hash code from the string
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Convert hash code to a hue value between 0 and 359
    return Math.abs(hash % 360);
}

export function getPastelColorFromName(name) {
    const hue = stringToHue(name);
    const saturation = 70; // Pastel saturation
    const lightness = 85;  // Pastel lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}