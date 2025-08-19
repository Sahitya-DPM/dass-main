'use client';

export default function GoatAwardSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-[32px] font-sansation-bold text-[#004B87] text-center mb-12 md:mb-16">
            G.O.A.T. awarded at GRC 2023
          </h2>
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* YouTube Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/GO2EjyeMh6M?rel=0&modestbranding=1"
                title="Dr. Michael I. Wollock - G.O.A.T. awarded at GRC 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}
