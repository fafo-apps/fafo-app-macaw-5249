export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/[.08] dark:border-white/[.145]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold text-lg">Your Practice Name</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#approach" className="hover:underline">How it works</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="rounded-full bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700">Free consult</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Compassionate child therapy that helps kids feel safe and grow
            </h1>
            <p className="mt-4 text-base md:text-lg text-black/70 dark:text-white/80">
              Support for children ages 4–12 and their families. In-person and online sessions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com?subject=Free%2015-minute%20consultation"
                className="rounded-full bg-emerald-600 text-white px-5 py-3 text-sm md:text-base hover:bg-emerald-700"
              >
                Book a free 15‑minute call
              </a>
              <a
                href="tel:+10000000000"
                className="rounded-full border border-black/[.08] dark:border-white/[.145] px-5 py-3 text-sm md:text-base hover:bg-black/[.03] dark:hover:bg-white/[.06]"
              >
                Call us
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-black/60 dark:text-white/70">
              <span>Licensed Child Therapist</span>
              <span>Trauma‑informed, play‑based care</span>
              <span>Collaborative parent support</span>
            </div>
          </div>
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/70 dark:bg-black/20">
            <h2 className="font-semibold text-lg">Is this right for your child?</h2>
            <ul className="mt-3 space-y-2 text-sm text-black/70 dark:text-white/80 list-disc pl-5">
              <li>Big feelings, worries, or frequent meltdowns</li>
              <li>School stress, attention challenges, or friendship struggles</li>
              <li>Life changes like a move, divorce, or loss</li>
            </ul>
            <p className="mt-4 text-sm text-black/60 dark:text-white/70">
              We meet your child where they are and build skills step by step.
            </p>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="px-4 py-12 md:py-16 bg-black/[.03] dark:bg-white/[.05]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 bg-background">
              <h3 className="font-medium">Play Therapy</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">
                Using play to help children express feelings and practice new skills.
              </p>
            </div>
            <div className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 bg-background">
              <h3 className="font-medium">Anxiety & Mood Support</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">
                Gentle, practical tools to manage worries, sadness, and big emotions.
              </p>
            </div>
            <div className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 bg-background">
              <h3 className="font-medium">Parent Coaching</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">
                Simple, consistent strategies you can use at home to support progress.
              </p>
            </div>
            <div className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 bg-background">
              <h3 className="font-medium">School Collaboration</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">
                With your permission, we partner with teachers to align support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="approach" className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-5">
            <li className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5">
              <span className="text-emerald-700 font-semibold">1</span>
              <h3 className="font-medium mt-1">Free call</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">We learn about your child and answer questions.</p>
            </li>
            <li className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5">
              <span className="text-emerald-700 font-semibold">2</span>
              <h3 className="font-medium mt-1">First session</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">A gentle, welcoming visit for your child.</p>
            </li>
            <li className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5">
              <span className="text-emerald-700 font-semibold">3</span>
              <h3 className="font-medium mt-1">Personalized plan</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">Clear goals and simple steps you can use at home.</p>
            </li>
            <li className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5">
              <span className="text-emerald-700 font-semibold">4</span>
              <h3 className="font-medium mt-1">Ongoing support</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">Regular check‑ins and progress reviews.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-12 md:py-16 bg-black/[.03] dark:bg-white/[.05]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About the practice</h2>
            <p className="mt-4 text-black/70 dark:text-white/80">
              Hi, I’m [Your Name], a licensed child therapist serving families in [Your City].
              I use a warm, play‑based approach that helps children feel safe, understood, and confident.
              Parents are partners in every step so progress lasts at home and school.
            </p>
            <ul className="mt-4 text-sm text-black/70 dark:text-white/80 list-disc pl-5 space-y-1">
              <li>Licensed and insured</li>
              <li>In‑person and telehealth options</li>
              <li>Ages served: 4–12 (teens available on request)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-background">
            <h3 className="font-medium">What families say</h3>
            <blockquote className="mt-3 text-sm text-black/70 dark:text-white/80">
              “Our child looks forward to sessions and uses the calming tools at home. We’ve seen real change.”
            </blockquote>
            <blockquote className="mt-3 text-sm text-black/70 dark:text-white/80">
              “We feel heard and supported. The strategies are practical and kind.”
            </blockquote>
            <p className="mt-4 text-xs text-black/50 dark:text-white/60">Testimonials are anonymized to protect privacy.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <details className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 group open:bg-black/[.02] dark:open:bg-white/[.04]">
              <summary className="font-medium cursor-pointer">How long are sessions?</summary>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">45–50 minutes for most children.</p>
            </details>
            <details className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 group open:bg-black/[.02] dark:open:bg-white/[.04]">
              <summary className="font-medium cursor-pointer">Do you take insurance?</summary>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">Many families use out‑of‑network benefits. We can provide a superbill for reimbursement.</p>
            </details>
            <details className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 group open:bg-black/[.02] dark:open:bg-white/[.04]">
              <summary className="font-medium cursor-pointer">How are parents involved?</summary>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">We check in regularly and share simple tools to use at home. Parent‑only sessions are available.</p>
            </details>
            <details className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 group open:bg-black/[.02] dark:open:bg-white/[.04]">
              <summary className="font-medium cursor-pointer">Where are you located?</summary>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">[Your Address or Neighborhood]. Telehealth available across [Your State].</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-12 md:py-16 bg-black/[.03] dark:bg-white/[.05]">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-background">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Book a free 15‑minute consult</h2>
                <p className="mt-2 text-black/70 dark:text-white/80">Let’s make sure we’re a good fit and answer your questions.</p>
                <div className="mt-4 space-y-1 text-sm">
                  <p><span className="font-medium">Phone:</span> <a className="hover:underline" href="tel:+10000000000">(000) 000‑0000</a></p>
                  <p><span className="font-medium">Email:</span> <a className="hover:underline" href="mailto:hello@example.com">hello@example.com</a></p>
                  <p><span className="font-medium">Hours:</span> Mon–Fri, 9am–6pm</p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="mailto:hello@example.com?subject=Free%2015-minute%20consultation"
                  className="rounded-full bg-emerald-600 text-white px-5 py-3 hover:bg-emerald-700"
                >
                  Email us
                </a>
                <a
                  href="tel:+10000000000"
                  className="rounded-full border border-black/[.08] dark:border-white/[.145] px-5 py-3 hover:bg-black/[.03] dark:hover:bg-white/[.06]"
                >
                  Call now
                </a>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-black/50 dark:text-white/60">If this is a crisis, call 988 or your local emergency number.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-black/60 dark:text-white/70">
          <p>© {new Date().getFullYear()} Your Practice Name. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
