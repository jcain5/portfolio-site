import { config, fields, collection } from "@keystatic/core";

const isGitHubMode = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === "github";

const colorOptions = [
  { label: "Cyan", value: "cyan" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Amber", value: "amber" },
  { label: "Purple", value: "purple" },
  { label: "Emerald", value: "emerald" },
  { label: "Slate", value: "slate" },
  { label: "Rose", value: "rose" },
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
] as const;

const statusOptions = [
  { label: "Planned", value: "Planned" },
  { label: "Active", value: "Active" },
  { label: "In Development", value: "In Development" },
  { label: "Ongoing", value: "Ongoing" },
  { label: "Beta", value: "Beta" },
  { label: "Complete", value: "Complete" },
  { label: "Paused", value: "Paused" },
  { label: "Archived", value: "Archived" },
] as const;

// Career-trajectory categorization (Systems & Infrastructure Administrator
// positioning). Multi-select — a project can genuinely span several, e.g. an
// AD lab is both "infrastructure" and "identity". Distinct from the existing
// free-text `category` field, which stays as-is for the display badge label.
const projectCategoryOptions = [
  { label: "Infrastructure", value: "infrastructure" },
  { label: "Systems Administration", value: "systems-administration" },
  { label: "Automation", value: "automation" },
  { label: "Networking", value: "networking" },
  { label: "Identity", value: "identity" },
  { label: "Linux", value: "linux" },
  { label: "Cloud", value: "cloud" },
  { label: "Security", value: "security" },
  { label: "Software Development", value: "software-development" },
  { label: "Other", value: "other" },
] as const;

const strategicPriorityOptions = [
  { label: "Flagship", value: "flagship" },
  { label: "Supporting", value: "supporting" },
  { label: "Archive", value: "archive" },
] as const;

const evidenceTypeOptions = [
  { label: "Screenshot", value: "screenshot" },
  { label: "Diagram", value: "diagram" },
  { label: "Log Output", value: "log-output" },
  { label: "Config File", value: "config-file" },
  { label: "Other", value: "other" },
] as const;

const documentationCategoryOptions = [
  { label: "Runbook", value: "Runbook" },
  { label: "SOP", value: "SOP" },
  { label: "Architecture Note", value: "Architecture Note" },
  { label: "Case Study", value: "Case Study" },
  { label: "Maintenance Record", value: "Maintenance Record" },
  { label: "Troubleshooting Guide", value: "Troubleshooting Guide" },
] as const;

// Two independent classification axes used across projects and competencies.
// `source` says *where* a competency/project was actually demonstrated;
// `status` says *how mature* it is. Never conflate them — a thing can be
// independent-lab + developing (Azure RBAC) or independent-lab + demonstrated
// (AD in the lab) or professional + demonstrated (Intune troubleshooting).
const evidenceSourceOptions = [
  { label: "Professional", value: "professional" },
  { label: "Volunteer", value: "volunteer" },
  { label: "Independent Lab", value: "independent-lab" },
  { label: "Portfolio Project", value: "portfolio-project" },
  { label: "Education", value: "education" },
] as const;

const evidenceStatusOptions = [
  { label: "Demonstrated", value: "demonstrated" },
  { label: "Developing", value: "developing" },
  { label: "Planned", value: "planned" },
] as const;

// Keystatic select fields always resolve to a value (defaultValue substitutes
// when a key is absent from stored content), so an explicit "unset" option is
// needed to distinguish "this skill's status wasn't deliberately set" from a
// real status — used only on individual skills where it adds meaning (e.g. a
// specific capability that's still developing while the rest of its
// competency group is demonstrated).
const optionalSkillStatusOptions = [
  { label: "Not set (implicitly demonstrated)", value: "" },
  ...evidenceStatusOptions,
] as const;

// Shared image directory for assets uploaded through the CMS UI going
// forward. Existing pre-CMS screenshots keep their current
// public/images/projects/<slug>/... paths — the reader returns whatever
// string is stored, so those paths were hand-authored directly into the
// migrated content rather than re-uploaded through this field.
const uploadImageField = (label: string) =>
  fields.image({
    label,
    directory: "public/images/keystatic-uploads",
    publicPath: "/images/keystatic-uploads/",
  });

const screenshotField = fields.object(
  {
    image: uploadImageField("Image"),
    alt: fields.text({
      label: "Alt text",
      validation: { isRequired: true },
      description: "Required — describes the image for screen readers.",
    }),
    caption: fields.text({ label: "Caption", multiline: true }),
    evidenceType: fields.select({
      label: "Evidence type (optional)",
      description: "What kind of evidence this is — shown as a small label next to the caption.",
      options: evidenceTypeOptions,
      defaultValue: "screenshot",
    }),
  },
  { label: "Screenshot" }
);

export default config({
  storage: isGitHubMode
    ? { kind: "github", repo: { owner: "jcain5", name: "portfolio-site" } }
    : { kind: "local" },
  collections: {
    projects: collection({
      label: "Projects",
      path: "app/content/keystatic/projects/*/",
      slugField: "title",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        subtitle: fields.text({ label: "Subtitle" }),
        category: fields.text({
          label: "Display category",
          description: 'Free text shown as the badge label, e.g. "Enterprise Infrastructure" — not a fixed list. For grouping/filtering, use "Career categories" below instead.',
        }),
        categories: fields.multiselect({
          label: "Career categories",
          description:
            "Systems & Infrastructure Administrator trajectory categories. Pick every category this project genuinely demonstrates — drives grouping on the public Infrastructure listing page (Infrastructure Ownership / Administration & Automation / Supporting Technical Work).",
          options: projectCategoryOptions,
          defaultValue: [],
        }),
        status: fields.select({
          label: "Status",
          description: "Describes the actual state of the project. Planned work must not be presented as completed.",
          options: statusOptions,
          defaultValue: "Active",
        }),
        strategicPriority: fields.select({
          label: "Strategic priority",
          description:
            "Controls presentation priority only — NOT visibility (use Published for that). Flagship = top Infrastructure Ownership tier. Supporting = normal Administration & Automation / Supporting Technical Work tier. Archive = lowest-priority tier, rendered in its own Archive section if Published is checked. To actually hide a project, uncheck Published — do not rely on Archive for that.",
          options: strategicPriorityOptions,
          defaultValue: "supporting",
        }),
        color: fields.select({
          label: "Color token",
          options: colorOptions,
          defaultValue: "slate",
        }),
        evidenceSource: fields.select({
          label: "Evidence source",
          description: "Where this project's work was actually performed — drives the evidence badge shown on the card and detail page.",
          options: evidenceSourceOptions,
          defaultValue: "portfolio-project",
        }),
        evidenceStatus: fields.select({
          label: "Evidence status",
          description: "Maturity of this project's demonstrated work.",
          options: evidenceStatusOptions,
          defaultValue: "demonstrated",
        }),
        competencies: fields.multiRelationship({
          label: "Competencies",
          collection: "competencies",
        }),
        published: fields.checkbox({
          label: "Published",
          defaultValue: true,
          description: "Uncheck to keep this entry written but hidden from the live site.",
        }),
        featured: fields.checkbox({
          label: "Featured",
          defaultValue: false,
          description: "Show in the top Featured Projects tier.",
        }),
        featuredRank: fields.integer({
          label: "Featured rank",
          description: "Lower numbers render first. Only used when Featured is checked.",
        }),
        featuredVariant: fields.select({
          label: "Featured variant",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
          defaultValue: "secondary",
        }),
        displayOrder: fields.integer({
          label: "Display order",
          description: "Ordering within the non-featured/secondary tier. Lower renders first.",
          defaultValue: 0,
        }),
        startDate: fields.date({ label: "Start date" }),
        completionDate: fields.date({ label: "Completion date" }),

        summary: fields.text({ label: "Executive summary", multiline: true }),
        cardSummary: fields.text({ label: "Card summary (one line)", multiline: true }),
        featuredChips: fields.array(fields.text({ label: "Chip" }), {
          label: "Featured chips",
          description: "Compact tech chips for the homepage featured card. Falls back to Technologies if empty.",
        }),

        overview: fields.text({ label: "Overview", multiline: true }),
        problem: fields.text({ label: "Business problem", multiline: true }),
        environment: fields.text({ label: "Environment", multiline: true }),
        ownership: fields.text({ label: "Ownership", multiline: true }),
        architecture: fields.text({ label: "Architecture", multiline: true }),
        architectureDiagram: fields.text({
          label: "Architecture diagram (plain text/ASCII)",
          multiline: true,
        }),
        solution: fields.array(fields.text({ label: "Step" }), {
          label: "Solution",
          description: "Ordered flow of how the built solution works.",
        }),
        implementation: fields.array(fields.text({ label: "Item" }), { label: "Implementation" }),
        features: fields.array(fields.text({ label: "Feature" }), { label: "Features" }),
        infrastructureOperations: fields.array(fields.text({ label: "Item" }), {
          label: "Infrastructure & operations",
        }),
        validation: fields.text({ label: "Production validation", multiline: true }),
        troubleshootingHighlights: fields.array(fields.text({ label: "Item" }), {
          label: "Troubleshooting highlights",
        }),
        skillsDemonstrated: fields.array(fields.text({ label: "Skill" }), {
          label: "Skills demonstrated",
        }),
        currentLimitations: fields.array(fields.text({ label: "Item" }), {
          label: "Current limitations",
        }),
        documentation: fields.text({
          label: "Documentation note",
          multiline: true,
          description: "Short prose note about project documentation practices (distinct from Related Documentation links below).",
        }),
        roadmap: fields.array(fields.text({ label: "Item" }), {
          label: "Roadmap (planned)",
        }),
        transparencyNote: fields.text({ label: "Transparency note", multiline: true }),
        privacy: fields.text({ label: "Privacy note", multiline: true }),
        securityNote: fields.text({ label: "Security note", multiline: true }),
        lessonsLearned: fields.text({ label: "Lessons learned", multiline: true }),

        technologyCategories: fields.array(
          fields.object({
            category: fields.text({ label: "Category" }),
            items: fields.array(fields.text({ label: "Item" }), { label: "Items" }),
          }),
          { label: "Technology breakdown", itemLabel: (props) => props.fields.category.value || "Category" }
        ),
        dnsConfiguration: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            description: fields.text({ label: "Description", multiline: true }),
            record: fields.text({ label: "Record (optional)" }),
          }),
          { label: "DNS configuration", itemLabel: (props) => props.fields.label.value || "Entry" }
        ),
        emailAliases: fields.array(
          fields.object({
            alias: fields.text({ label: "Alias" }),
            purpose: fields.text({ label: "Purpose" }),
          }),
          { label: "Email aliases", itemLabel: (props) => props.fields.alias.value || "Alias" }
        ),
        verificationSummary: fields.text({ label: "Verification summary", multiline: true }),
        verificationItems: fields.array(fields.text({ label: "Item" }), {
          label: "Verification items",
        }),
        outcome: fields.array(fields.text({ label: "Item" }), {
          label: "Outcome",
          description: "Rendered as a single paragraph when there's exactly one item, a bulleted list otherwise.",
        }),

        heroImage: uploadImageField("Hero image"),
        screenshots: fields.array(screenshotField, {
          label: "Screenshots",
          itemLabel: (props) => props.fields.caption.value || "Screenshot",
        }),

        relatedDocumentation: fields.multiRelationship({
          label: "Related documentation",
          collection: "documentation",
        }),
        relatedProjects: fields.multiRelationship({
          label: "Related projects",
          collection: "projects",
        }),

        technologies: fields.array(fields.text({ label: "Technology" }), {
          label: "Technologies (chip list)",
        }),
        bullets: fields.array(fields.text({ label: "Bullet" }), {
          label: "Summary bullets",
        }),
        github: fields.url({ label: "GitHub URL" }),
        liveUrl: fields.url({ label: "Live URL" }),
        demoUrl: fields.url({ label: "Demo URL", description: "For a separate demo distinct from the live production URL." }),
        documentationUrl: fields.url({
          label: "External documentation URL",
          description: "An external doc link, distinct from Related Documentation above (which links to this site's own Documentation collection).",
        }),
        externalReference: fields.object(
          {
            label: fields.text({ label: "Label" }),
            url: fields.url({ label: "URL" }),
          },
          { label: "External reference (optional)" }
        ),

        customSections: fields.array(
          fields.object({
            title: fields.text({ label: "Section title" }),
            body: fields.text({ label: "Section body", multiline: true }),
            code: fields.text({
              label: "Code / command block (optional)",
              multiline: true,
              description: "Rendered in a monospace block below the section body.",
            }),
          }),
          {
            label: "Custom sections",
            description:
              "Use this for project-specific content that doesn't fit the fields above (e.g. Mission, Incident, Monitoring, Backup & Recovery). Renders after all other sections, in the order listed here — drag to reorder. Lets you add new kinds of project content without editing code.",
            itemLabel: (props) => props.fields.title.value || "Section",
          }
        ),

        metaTitle: fields.text({ label: "Meta title (SEO override)" }),
        metaDescription: fields.text({ label: "Meta description (SEO override)", multiline: true }),
      },
    }),

    documentation: collection({
      label: "Technical Documentation",
      path: "app/content/keystatic/documentation/*/",
      slugField: "title",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.select({
          label: "Category",
          options: documentationCategoryOptions,
          defaultValue: "Runbook",
        }),
        classification: fields.text({
          label: "Classification note",
          description: 'e.g. "Production-style home lab" disclaimer line.',
        }),
        goal: fields.text({ label: "Goal", multiline: true }),
        steps: fields.array(fields.text({ label: "Step" }), {
          label: "Steps",
          description: "Optional — used for how-to/SOP style entries.",
        }),
        validationChecklist: fields.array(fields.text({ label: "Item" }), {
          label: "Validation checklist",
        }),
        references: fields.array(fields.text({ label: "Reference" }), {
          label: "References",
        }),
        body: fields.document({
          label: "Body",
          formatting: {
            inlineMarks: true,
            listTypes: true,
            alignment: true,
            headingLevels: [2, 3, 4],
            blockTypes: true,
            softBreaks: true,
          },
          tables: true,
          dividers: true,
          links: true,
        }),
        relatedProjects: fields.multiRelationship({
          label: "Related projects",
          collection: "projects",
        }),
        lastUpdated: fields.date({ label: "Last updated" }),
      },
    }),

    competencies: collection({
      label: "Competencies",
      path: "app/content/keystatic/competencies/*/",
      slugField: "label",
      format: { data: "yaml" },
      schema: {
        label: fields.slug({ name: { label: "Competency" } }),
        description: fields.text({ label: "Description", multiline: true }),
        color: fields.select({
          label: "Color token",
          options: colorOptions,
          defaultValue: "slate",
        }),
        icon: fields.text({ label: "Icon (emoji)" }),
        sources: fields.multiselect({
          label: "Evidence sources",
          description:
            "Every place this competency has actually been demonstrated. A group may legitimately span multiple sources (e.g. Networking: professional + volunteer + independent-lab) — shown once per group, not per skill.",
          options: evidenceSourceOptions,
          defaultValue: [],
        }),
        skills: fields.array(
          fields.object({
            label: fields.text({ label: "Skill" }),
            status: fields.select({
              label: "Evidence status (optional override)",
              description:
                "Leave unset for skills that are simply demonstrated. Only set this when one specific skill's maturity differs from the rest of the group (e.g. a capability that's still developing or planned) — avoid setting this on every skill.",
              options: optionalSkillStatusOptions,
              defaultValue: "",
            }),
          }),
          { label: "Skills", itemLabel: (props) => props.fields.label.value || "Skill" }
        ),
        displayOrder: fields.integer({ label: "Display order", defaultValue: 0 }),
      },
    }),
  },
});
