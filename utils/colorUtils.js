// Utility function that returns an array of your brand colors
const brandColors = [
    'hsl(24,96%,90%)',  // primary 100
    'hsl(24,96%,70%)',  // primary 300
    'hsl(24,96%,50%)',  // primary 500 (Base: #F36301)
    'hsl(24,96%,40%)',  // primary 700
    'hsl(24,96%,25%)',  // primary 900
    'hsl(74,25%,85%)',  // accent 100
    'hsl(74,25%,50%)',  // accent 300
    'hsl(74,25%,35%)',  // accent 500 (Base: #525938)
    'hsl(74,25%,30%)',  // accent 700
    'hsl(74,25%,15%)',  // accent 900
    'hsl(0,0%,95%)',    // neutral 100
    'hsl(0,0%,80%)',    // neutral 300
    'hsl(0,0%,50%)',    // neutral 500
    'hsl(0,0%,30%)',    // neutral 700
    'hsl(0, 0%, 10%)',    // neutral 900
];

// Updated stringToHue function
export function stringToHue(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        // Generate a hash code from the string
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Convert hash code to an index of the brand color array
    return Math.abs(hash % brandColors.length);
}

// Updated getBrandColorFromName function
export function getBrandColorFromName(name) {
    const colorIndex = stringToHue(name);
    return brandColors[colorIndex]; // Return a color from the brand color array
}
