/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  heroHeading: string;
  heroTagline?: string;
  heroCtaLabel?: string;
  heroCtaUrl?: string;
  heroBgColor?: string;
  heroHeadingColor?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "SaaS Admin Base Template",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#4f46e5",
    secondary: "#818cf8",
    accent: "#6366f1",
  },
  heroHeading: "The Admin Dashboard.",
  heroTagline: "Full-stack SaaS starter. Auth, RBAC, and admin UI — pre-wired.",
  heroCtaLabel: "Get Started",
  heroCtaUrl: "#",
  heroBgColor: "#ffffff",
  heroHeadingColor: "#0f172a",
};
