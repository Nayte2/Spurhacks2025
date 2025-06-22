import Image from "next/image";
import TeamPhoto from "@/public/images/team.jpg";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="about-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-primary-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-primary-200/50">
              <span className="inline-flex bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                Our Story
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-neutral-200),var(--color-primary-200),var(--color-accent-100),var(--color-primary-300),var(--color-neutral-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              About Us
            </h2>
            <p className="text-lg text-primary-200/75">
              We're passionate about revolutionizing education through AI-powered personalized learning experiences that adapt to every student's unique needs.
            </p>
          </div>
          
          {/* About Us Content */}
          <div className="mx-auto max-w-4xl">
            <div className="group/card relative overflow-hidden rounded-2xl bg-neutral-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-primary-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-primary-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 overflow-hidden rounded-[inherit] bg-neutral-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-neutral-900/50 after:via-neutral-800/25 after:to-neutral-900/50">
                {/* Group Photo */}
                <div className="relative h-96">
                  <Image
                    src={TeamPhoto}
                    alt="Our Team"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-neutral-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-neutral-700/.15),--theme(--color-neutral-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-neutral-800/60">
                      <span className="bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                        Our Team
                      </span>
                    </span>
                  </div>
                  <p className="text-primary-200/75">
                    Meet the passionate educators, developers, and AI specialists behind SimplifiedLearning. We're dedicated to making education accessible, personalized, and effective for every learner. Our mission is to revolutionize education by creating AI-powered learning experiences that adapt to each student's unique learning style, pace, and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
