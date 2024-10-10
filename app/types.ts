export interface Service {
    name: string;
    slug: string;
    image: string;
    heading: string;
    description: string;
    details: string;
    benefits: {
        icon: string;
        title: string;
        description: string;
    }[];
    cta: string;
}