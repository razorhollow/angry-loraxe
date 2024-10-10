import FeatureSection from '~/components/FeatureSection';
import LogoCloud from '~/components/LogoCloud';
import ReviewSection from '~/components/ReviewSection';
import ServicesSection from '~/components/ServicesSection';

import HeroSection from '../components/HeroSection';

export default function Landing() {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <ReviewSection />
            <LogoCloud />
            <ServicesSection />
        </div>
    );
}

export const meta =() => {
    return [
        {title: 'Angry Loraxe - Home'},
        {name: 'description', content: 'Angry Loraxe Tree Service is the premier tree service in the Southern Tier, NY. We provide tree removal, tree trimming, stump grinding, and more.'}
    ]
}