"use client";

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Hero content */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-primary-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-primary-200/50">
                <span className="inline-flex bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                  Welcome to
                </span>
              </div>
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-neutral-200),var(--color-primary-200),var(--color-accent-100),var(--color-primary-300),var(--color-neutral-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
                SimplifiedLearning
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-primary-200/75">
                Revolutionizing education through AI-powered personalized learning experiences that adapt to every student's unique needs and learning style.
              </p>
            </div>
            {/* CTA buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6" data-aos="fade-up" data-aos-delay={400}>
              <div data-aos="fade-up" data-aos-delay={500}>
                <button
                  onClick={() => smoothScrollTo('about-us')}
                  className="btn group mb-4 w-full bg-linear-to-t from-primary-600 to-primary-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <span className="relative inline-flex items-center">
                    About Us! 
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <button
                  onClick={() => smoothScrollTo('contact-us')}
                  className="btn relative w-full bg-linear-to-b from-neutral-800 to-neutral-800/60 bg-[length:100%_100%] bg-[bottom] text-neutral-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-neutral-800),var(--color-neutral-700),var(--color-neutral-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Contact Us!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
