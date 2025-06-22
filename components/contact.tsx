"use client";
import Spotlight from "@/components/spotlight";
import { useState } from "react";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="ml-1 text-xs text-neutral-500 hover:text-primary-200 transition-colors"
      title={copied ? "Copied!" : "Copy"}
    >
      <svg className="inline h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor"/>
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor"/>
      </svg>
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-primary-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-primary-200/50">
              <span className="inline-flex bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-neutral-200),var(--color-primary-200),var(--color-accent-100),var(--color-primary-300),var(--color-neutral-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contact Us
            </h2>
            <p className="text-lg text-primary-200/75">
              Meet our team of dedicated professionals ready to help you with your learning journey.
            </p>
          </div>
          
          {/* Contact Cards */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {/* Team Member 1 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-neutral-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-primary-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-primary-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-neutral-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-neutral-900/50 after:via-neutral-800/25 after:to-neutral-900/50">
                {/* Profile Photo Placeholder */}
                <div className="flex h-48 items-center justify-center p-4">
                  <div className="text-center">
                    <img src="/images/talal.jpg" alt="Talal Malhi" className="mx-auto mb-3 h-32 w-32 rounded-lg object-cover" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-neutral-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-neutral-700/.15),--theme(--color-neutral-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-neutral-800/60">
                      <span className="bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                        Team Lead / Dev
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-200">Talal Malhi</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center text-xs text-neutral-400">
                        📧 talal.malhi128@gmail.com
                        <CopyButton value="talal.malhi128@gmail.com" />
                      </span>
                      <span className="flex items-center text-xs text-neutral-400">
                        🔗 linkedin.com/in/talal-malhi
                        <CopyButton value="https://www.linkedin.com/in/talal-malhi/" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-neutral-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-primary-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-primary-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-neutral-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-neutral-900/50 after:via-neutral-800/25 after:to-neutral-900/50">
                {/* Profile Photo Placeholder */}
                <div className="flex h-48 items-center justify-center p-4">
                  <div className="text-center">
                    <img src="/images/ahme.jpg" alt="Mohammed Ahmed" className="mx-auto mb-3 h-32 w-32 rounded-lg object-cover" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-neutral-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-neutral-700/.15),--theme(--color-neutral-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-neutral-800/60">
                      <span className="bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                        Developer
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-200">Mohammed Ahmed</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center text-xs text-neutral-400">
                        📧 m1lakdawala@torontomu.ca
                        <CopyButton value="m1lakdawala@torontomu.ca" />
                      </span>
                      <span className="flex items-center text-xs text-neutral-400">
                        🔗 linkedin.com/in/mohammed-ahmxd
                        <CopyButton value="https://www.linkedin.com/in/mohammed-ahmxd/" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-neutral-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-primary-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-primary-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-neutral-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-neutral-900/50 after:via-neutral-800/25 after:to-neutral-900/50">
                {/* Profile Photo Placeholder */}
                <div className="flex h-48 items-center justify-center p-4">
                  <div className="text-center">
                    <img src="/images/nat.jpeg" alt="Nathan Tsang" className="mx-auto mb-3 h-32 w-32 rounded-lg object-cover mt-4" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-neutral-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-neutral-700/.15),--theme(--color-neutral-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-neutral-800/60">
                      <span className="bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                        Developer
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-200">Nathan Tsang</h3>
                  <div className="space-y-2 text-sm">
                    <span className="flex items-center text-xs text-neutral-400">
                      📧 Nathan.Tsang000@gmail.com
                      <CopyButton value="Nathan.Tsang000@gmail.com" />
                    </span>
                    <span className="flex items-center text-xs text-neutral-400">
                        🔗 linkedin.com/in/nathan-tsang-000
                        <CopyButton value="https://www.linkedin.com/in/nathan-tsang-416183295" />
                      </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-neutral-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-primary-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-primary-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-neutral-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-neutral-900/50 after:via-neutral-800/25 after:to-neutral-900/50">
                {/* Profile Photo Placeholder */}
                <div className="flex h-48 items-center justify-center p-4">
                  <div className="text-center">
                    <img src="/images/dan.jpg" alt="Daniel Restrepo" className="mx-auto mb-3 h-32 w-32 rounded-lg object-cover mt-4" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-neutral-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-neutral-700/.15),--theme(--color-neutral-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-neutral-800/60">
                      <span className="bg-linear-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">
                        Developer
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-200">Daniel Restrepo</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center text-xs text-neutral-400">
                        📧 daniel@simplifiedlearning.com
                        <CopyButton value="daniel@simplifiedlearning.com" />
                      </span>
                      <span className="flex items-center text-xs text-neutral-400">
                        🔗 linkedin.com/in/daniel-restrepo-ab40aa333
                        <CopyButton value="https://www.linkedin.com/in/daniel-restrepo-ab40aa333" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
} 