import Link from "next/link";

type PolicySection = {
  heading: string;
  body: string;
};

type PolicyPageProps = {
  title: string;
  description: string;
  sections: PolicySection[];
};

export function PolicyPage({ title, description, sections }: PolicyPageProps) {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950 transition-colors duration-300 dark:bg-[#1b1428] dark:text-amber-50">
      <section className="bg-[#fffdf8] dark:bg-[#1b1428] px-4 py-20 text-slate-950 dark:text-amber-50 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm font-semibold text-violet-700 dark:text-[#ffd85f] transition-colors hover:text-violet-800 dark:hover:text-amber-200"
          >
            Back to Soundskill Hub
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-700 dark:text-[#ffd85f]">
            Legal
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl text-slate-950 dark:text-amber-50">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-700 dark:text-amber-50/75">{description}</p>
          <p className="mt-6 text-sm text-slate-600 dark:text-amber-50/60">Last updated: May 27, 2026</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="mb-3 text-2xl font-bold text-slate-950 dark:text-amber-50">{section.heading}</h2>
              <p className="text-base leading-7 text-slate-700 dark:text-amber-50/75">{section.body}</p>
            </article>
          ))}

          <article className="border-t border-violet-100 pt-8 dark:border-white/10">
            <h2 className="mb-3 text-2xl font-bold text-slate-950 dark:text-amber-50">Contact</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-amber-50/75">
              For questions about this policy, contact Soundskill Hub at info@soundskillhub.com
              or +234 810 808 4179.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
