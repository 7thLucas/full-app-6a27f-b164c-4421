import { useConfigurables } from "~/modules/configurables";

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  const heroBg = config.heroBgColor ?? "#ffffff";
  const headingColor = config.heroHeadingColor ?? "#0f172a";
  const accentColor = config.brandColor?.accent ?? "#6366f1";
  const heading = config.heroHeading ?? "Hello World";
  const tagline =
    config.heroTagline ??
    "A clean, minimal landing page. Simple, bold, and to the point.";
  const ctaLabel = config.heroCtaLabel ?? "Get Started";
  const ctaUrl = config.heroCtaUrl ?? "#";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: heroBg }}
    >
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-8 py-24">
        {/* Decorative accent line */}
        <div
          className="w-16 h-1 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        {/* Main Heading */}
        <h1
          className="text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight"
          style={{ color: headingColor }}
        >
          {heading}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="text-lg sm:text-xl font-medium text-slate-500 max-w-lg leading-relaxed">
            {tagline}
          </p>
        )}

        {/* CTA Button */}
        {ctaLabel && (
          <a
            href={ctaUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: accentColor,
              // @ts-expect-error css custom property
              "--tw-ring-color": accentColor,
            }}
          >
            {ctaLabel}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        )}
      </section>

      {/* Minimal footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-sm text-slate-400">
          {config.appName ?? "Hello World"}
        </p>
      </footer>
    </div>
  );
}
