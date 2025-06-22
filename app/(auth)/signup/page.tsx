"use client";

import Link from "next/link";

export default function SignUp() {
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just UI - no backend functionality
    console.log("Sign up button clicked - UI only");
  };

  const handleGoogleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    // This is just UI - no backend functionality
    console.log("Google sign up clicked - UI only");
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-neutral-200),var(--color-primary-200),var(--color-accent-100),var(--color-primary-300),var(--color-neutral-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]" onSubmit={handleSignUp}>
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-primary-200/75"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-primary-200/75"
                  htmlFor="company"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your company name"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-primary-200/75"
                  htmlFor="email"
                >
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your work email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-primary-200/75"
                  htmlFor="password"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button 
                type="submit"
                className="btn w-full bg-linear-to-t from-primary-600 to-primary-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Register
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-neutral-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-neutral-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-neutral-400/25">
                or
              </div>
              <button 
                type="button"
                onClick={handleGoogleSignUp}
                className="btn relative w-full bg-linear-to-b from-neutral-800 to-neutral-800/60 bg-[length:100%_100%] bg-[bottom] text-neutral-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-neutral-800),var(--color-neutral-700),var(--color-neutral-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Sign Up with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-primary-200/75">
            Already have an account?{" "}
            <Link className="font-medium text-primary-500 hover:text-primary-400 transition-colors duration-200" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
