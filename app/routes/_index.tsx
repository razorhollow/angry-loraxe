import FeatureSection from '~/components/FeatureSection';
import ReviewSection from '~/components/ReviewSection';

import HeroSection from '../components/HeroSection';

export default function Landing() {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <ReviewSection />
        </div>
    );
}