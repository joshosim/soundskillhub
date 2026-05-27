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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a
            href="/"
            className="mb-10 inline-flex text-sm font-semibold text-purple-200 transition-colors hover:text-white"
          >
            Back to Soundskill Hub
          </a>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-200">
            Legal
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/75">{description}</p>
          <p className="mt-6 text-sm text-white/55">Last updated: May 27, 2026</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="mb-3 text-2xl font-bold text-slate-950">{section.heading}</h2>
              <p className="text-base leading-7 text-slate-650">{section.body}</p>
            </article>
          ))}

          <article className="border-t border-slate-200 pt-8">
            <h2 className="mb-3 text-2xl font-bold text-slate-950">Contact</h2>
            <p className="text-base leading-7 text-slate-650">
              For questions about this policy, contact Soundskill Hub at info@soundskillhub.com
              or +234 810 808 4179.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
