import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function SelfieGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Selfie Gallery
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Selfie Gallery
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-700 text-[20px] leading-[28px] font-sansation-regular mb-8 max-w-4xl mx-auto">
              The best way to celebrate a new, straight smile is by snapping a selfie. We are always so excited when we see our patients gorgeous new smiles that sometimes we can't help but hop into the selfie, too!
            </p>
          </div>

          {/* Selfie Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Selfie 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/1.jpg"
                alt="Selfie Gallery - Patient 1"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Selfie 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/2.jpg"
                alt="Selfie Gallery - Patient 2"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Selfie 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/3.jpg"
                alt="Selfie Gallery - Patient 3"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Selfie 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/4.jpg"
                alt="Selfie Gallery - Patient 4"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <p className="text-[#004B87] text-[20px] font-sansation-regular mb-4">
              Interested in seeing the full Invisalign transformation from some of our patients? Check out the before & afters page.
            </p>
          </div>
        </div>
      </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
