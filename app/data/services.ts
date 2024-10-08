import brushHoggingImg from '~/assets/serviceImages/brush-hogging.png';
import commercialTreeManagementImg from '~/assets/serviceImages/commercial-tree-management.png';
import emergencyTreeRemovalImg from '~/assets/serviceImages/emergency-tree-removal.png';
import forestryManagementImg from '~/assets/serviceImages/forestry-management.png';
import lotClearingImg from '~/assets/serviceImages/lot-clearing.png';
import stormCleanupImg from '~/assets/serviceImages/storm-cleanup.png';
import stumpGrindingImg from '~/assets/serviceImages/stump-grinding.png';
import treePruningImg from '~/assets/serviceImages/tree-pruning.png';
import treeRemovalImg from '~/assets/serviceImages/tree-removal.png';

export const services = [
    {
        name: 'Tree Removal',
        slug: 'tree-removal',
        image: treeRemovalImg,
        heading: 'Professional Tree Removal Services for Safe and Efficient Tree Clearing',
        description: 'Safe and efficient removal of trees of any size to improve the safety and aesthetics of your property.',
        details: 'Our expert team is dedicated to providing top-notch tree removal services that meet the highest standards of safety and efficiency. We handle every project with care, ensuring that your property remains pristine. Whether it’s a routine removal or a hazardous tree, we have the equipment and expertise to safely remove trees of all sizes.',
        benefits: [
            {
                icon: "CloudArrowUpIcon",
                title: 'Safe and Efficient',
                description: 'Our team uses modern equipment and techniques to safely and efficiently remove trees, ensuring no damage to surrounding structures.'
            },
            {
                icon: "IdentificationIcon",
                title: 'Certified Arborists',
                description: 'Our certified professionals are trained in the latest safety standards to handle even the most complex tree removals with precision.'
            },
            {
                icon: "SparklesIcon",
                title: 'Complete Cleanup',
                description: 'After removal, we ensure that your property is left spotless, with all debris safely removed.'
            }
        ],
        cta: "Get My Free Tree Removal Estimate",
    },
    {
        name: 'Stump Grinding',
        slug: 'stump-grinding',
        image: stumpGrindingImg,
        heading: 'Expert Stump Grinding for a Clean and Beautiful Landscape',
        description: 'Efficient stump grinding services to remove unsightly stumps and enhance the appearance of your landscape.',
        details: 'Our stump grinding services are designed to quickly and effectively remove stumps, allowing you to reclaim valuable yard space. We grind stumps below the surface, ensuring a clean and level area ready for new landscaping or construction.',
        benefits: [
            {
                icon: "BoltIcon",
                title: 'Fast and Effective',
                description: 'Our specialized equipment grinds stumps efficiently, allowing you to quickly reclaim and beautify your yard.'
            },
            {
                icon: "CursorArrowRippleIcon",
                title: 'Safe and Precise',
                description: 'We use advanced tools to safely grind stumps while protecting your surrounding landscape.'
            },
            {
                icon: "StarIcon",
                title: 'Flawless Finish',
                description: 'After grinding, we leave your yard ready for any future use, ensuring a smooth, clean result.'
            }
        ],
        cta: "Claim My Free Stump Grinding Estimate",
    },
    {
        name: 'Tree Pruning',
        slug: 'tree-pruning',
        image: treePruningImg,
        heading: 'Tree Pruning Services for Healthier, Stronger, and More Beautiful Trees',
        description: 'Expert pruning services to maintain the health and beauty of your trees, promoting long-term growth.',
        details: 'Regular pruning is essential to ensure the health and longevity of your trees. Our expert arborists carefully remove dead or diseased branches, improving your trees’ structural integrity and overall appearance.',
        benefits: [
            {
                icon: "ScissorsIcon",
                title: 'Healthy Trees',
                description: 'Our pruning services promote healthy tree growth by removing dead or diseased branches.'
            },
            {
                icon: "PaintBrushIcon",
                title: 'Enhanced Aesthetics',
                description: 'We shape and trim trees to enhance the natural beauty of your landscape.'
            },
            {
                icon: "ShieldCheckIcon",
                title: 'Prevent Hazards',
                description: 'Regular pruning prevents potential hazards from weak or overgrown branches, ensuring safety around your property.'
            }
        ],
        cta: "Request My Free Tree Pruning Estimate",
    },
    {
        name: 'Storm Cleanup',
        slug: 'storm-cleanup',
        image: stormCleanupImg,
        heading: 'Reliable Storm Cleanup Services to Safely Restore Your Property',
        description: 'Reliable storm cleanup services to quickly restore your property after severe weather events.',
        details: 'When storms strike, downed trees and debris can cause significant damage to your property. Our storm cleanup team responds swiftly to remove fallen trees and branches, restoring safety and order to your yard.',
        benefits: [
            {
                icon: "BoltIcon",
                title: 'Fast Response',
                description: 'We respond quickly to storm emergencies, providing immediate cleanup to restore safety to your property.'
            },
            {
                icon: "HomeIcon",
                title: 'Damage Prevention',
                description: 'Our storm cleanup services minimize further damage by promptly removing hazardous debris.'
            },
            {
                icon: "SparklesIcon",
                title: 'Comprehensive Cleanup',
                description: 'We leave no mess behind, ensuring your property looks clean and safe once the job is done.'
            }
        ],
        cta: "Get My Free Storm Cleanup Estimate",
    },
    {
        name: 'Brush-Hog Clearing',
        slug: 'brush-hog-clearing',
        image: brushHoggingImg,
        heading: 'Brush-Hog Clearing for Overgrown Land and Property Maintenance',
        description: 'Professional brush-hog clearing to remove overgrown vegetation and prepare your land for development.',
        details: 'Our brush-hog clearing services are designed to remove dense brush, weeds, and overgrown vegetation, leaving your land clear and ready for any use. We work quickly and efficiently, using top-tier equipment to handle even the toughest jobs.',
        benefits: [
            {
                icon: "RocketLaunchIcon",
                title: 'Efficient Land Clearing',
                description: 'We clear overgrown areas quickly, making it easy to prepare your land for new projects.'
            },
            {
                icon: "WrenchScrewdriverIcon",
                title: 'Versatile Solutions',
                description: 'Our brush-hog equipment can handle a wide variety of terrain and vegetation types.'
            },
            {
                icon: "PhotoIcon",
                title: 'Clear and Ready',
                description: 'After clearing, your land is ready for construction, farming, or other projects.'
            }
        ],
        cta: "Get My Free Brush-Hog Clearing Estimate",
    },
    {
        name: 'Emergency Tree Removal',
        slug: 'emergency-tree-removal',
        image: emergencyTreeRemovalImg,
        heading: '24/7 Emergency Tree Removal for Dangerous and Fallen Trees',
        description: '24/7 emergency tree removal to address hazardous trees that pose an immediate risk to your property.',
        details: 'When trees fall unexpectedly or become a danger due to storms or damage, quick action is critical. Our emergency tree removal services are available 24/7 to remove dangerous trees and protect your property from further harm.',
        benefits: [
            {
                icon: "PhoneArrowUpRightIcon",
                title: 'Rapid Response',
                description: 'We’re available 24/7 to respond to emergency tree removal needs, ensuring your property stays safe.'
            },
            {
                icon: "ShieldCheckIcon",
                title: 'Safety First',
                description: 'Our team is equipped to handle hazardous tree removals, ensuring the safety of your home and surroundings.'
            },
            {
                icon: "TrashIcon",
                title: 'Comprehensive Cleanup',
                description: 'Once the tree is removed, we leave your property clean and safe.'
            }
        ],
        cta: "Call Now for My Free Emergency Tree Removal Estimate",
    },
    {
        name: 'Lot Clearing',
        slug: 'lot-clearing',
        image: lotClearingImg,
        heading: 'Comprehensive Lot Clearing for New Construction and Land Development',
        description: 'Full-service lot clearing to prepare your land for development, farming, or landscaping projects.',
        details: 'Our lot clearing services provide complete removal of trees, brush, and debris to prepare your land for construction or landscaping. We handle jobs of all sizes, from small residential lots to large commercial properties.',
        benefits: [
            {
                icon: "TruckIcon",
                title: 'Large-Scale Clearing',
                description: 'We have the equipment and expertise to clear lots of any size quickly and efficiently.'
            },
            {
                icon: "ArrowPathIcon",
                title: 'Complete Debris Removal',
                description: 'After clearing, we remove all debris to ensure your lot is ready for the next phase of development.'
            },
            {
                icon: "KeyIcon",
                title: 'Ready for Construction',
                description: 'Our lot clearing service ensures your land is prepped and ready for building, farming, or landscaping.'
            }
        ],
        cta: "Get My Free Lot Clearing Estimate",
    },
    {
        name: 'Commercial Tree Management',
        slug: 'commercial-tree-management',
        image: commercialTreeManagementImg,
        heading: 'Commercial Tree Management for Safe and Professional Property Care',
        description: 'Comprehensive tree management services for commercial properties, ensuring safety and aesthetic appeal.',
        details: 'We provide ongoing tree care and management services for commercial properties, ensuring the health, safety, and appearance of your trees. From pruning to removal, we handle all aspects of tree care for businesses, schools, and large complexes.',
        benefits: [
            {
                icon: "ArrowPathIcon",
                title: 'Complete Tree Care',
                description: 'We manage all aspects of tree health, from pruning to removal, for large commercial properties.'
            },
            {
                icon: "CheckBadgeIcon",
                title: 'Safety-First Approach',
                description: 'Our focus on safety ensures that your trees pose no risk to buildings, power lines, or pedestrian areas.'
            },
            {
                icon: "BuildingStorefrontIcon",
                title: 'Enhanced Aesthetics',
                description: 'Our tree management services enhance the beauty and curb appeal of your commercial property.'
            }
        ],
        cta: "Schedule My Free Commercial Tree Management Estimate",
    },
    {
        name: 'Forestry Management',
        slug: 'forestry-management',
        image: forestryManagementImg,
        heading: 'Sustainable Forestry Management Services for Long-Term Forest Health',
        description: 'Sustainable forestry management services to promote the long-term health of forested areas.',
        details: 'Our forestry management services focus on the sustainable care of large forested areas, ensuring the long-term health of trees and ecosystems. From forest planning to timber harvesting, we work with landowners to maintain and preserve forest health.',
        benefits: [
            {
                icon: "GlobeAmericasIcon",
                title: 'Sustainable Practices',
                description: 'We use sustainable methods to ensure long-term forest health and productivity.'
            },
            {
                icon: "AcademicCapIcon",
                title: 'Expert Forest Management',
                description: 'Our forestry experts handle all aspects of forest care, from tree planting to responsible harvesting.'
            },
            {
                icon: "ArrowTrendingUpIcon",
                title: 'Long-Term Health',
                description: 'We focus on promoting the long-term health and biodiversity of your forest.'
            }
        ],
        cta: "Request My Free Forestry Management Estimate",
    }
];
