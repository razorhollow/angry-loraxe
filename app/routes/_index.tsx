import FeatureSection from '~/components/FeatureSection';
import LogoCloud from '~/components/LogoCloud';
import ReviewSection from '~/components/ReviewSection';

import HeroSection from '../components/HeroSection';

export default function Landing() {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <ReviewSection />
            <LogoCloud />
        </div>
    );
}