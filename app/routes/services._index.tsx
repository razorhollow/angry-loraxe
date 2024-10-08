import type { V2_MetaFunction } from "@remix-run/node";
import step1Img from "../assets/step-1.png";
import step2Img from "../assets/step-2.png";
import step3Img from "../assets/step-3.png";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Angry Loraxe - Our Process" },
    { name: "description", content: "Learn about our professional 3-step process for exceptional tree care." },
  ];
};

export default function Services() {
  return (
    <div className="text-neutral-900 font-sans py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">
          Our 3-Step Process for Exceptional Tree Care
        </h1>

        <div className="flex flex-col items-center">
          {/* Step 1 */}
          <div className="flex items-center mb-16">
            <div className="flex flex-col items-center relative">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-24 bg-primary-500"></div>
              <div className="w-16 h-16 border-4 border-primary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="w-1 h-24 bg-primary-500"></div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center md:ml-8">
              <img
                src={step1Img}
                alt="Book Your Free Estimate"
                className="w-64 md:w-80 mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">Book Your Free Estimate</h2>
                <p className="max-w-xl">
                  We know that tree care can seem daunting, but getting started should be easy. Simply call or fill out our online form to book your free estimate. Our friendly team is here to answer your questions, provide reassurance, and guide you smoothly through the process. With us, you can feel confident that you're making the right choice for your property.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center mb-16">
            <div className="flex flex-col items-center relative">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-24 bg-primary-500"></div>
              <div className="w-16 h-16 border-4 border-primary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="w-1 h-24 bg-primary-500"></div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center md:ml-8">
              <img
                src={step2Img}
                alt="On-Site Inspection"
                className="w-64 md:w-80 mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">On-Site Inspection</h2>
                <p className="max-w-xl">
                  Once your appointment is scheduled, our tree care professional will come to your property to conduct a thorough inspection. We assess the unique needs of your trees with care, offering transparent recommendations tailored to your landscape. Our goal is to prioritize your safety, protect your property, and ensure that you’re informed at every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="flex flex-col items-center relative">
              <div className="w-16 h-16 border-4 border-primary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center md:ml-8">
              <img
                src={step3Img}
                alt="Complete the Work"
                className="w-64 md:w-80 mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">Complete the Work</h2>
                <p className="max-w-xl">
                  Our skilled crew will arrive at your property with all necessary tools and equipment to complete the job safely and efficiently. We don’t just remove trees—we transform your outdoor space. Every detail is handled meticulously, leaving your property pristine, safe, and even more beautiful. You can count on us for a thorough and professional experience from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}