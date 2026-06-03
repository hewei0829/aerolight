import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: process.env.KEYSTATIC_GITHUB_CLIENT_ID
    ? {
        kind: 'github' as const,
        repo: { owner: 'hewei0829', name: 'aerolight' },
      }
    : { kind: 'local' as const },
  ui: {
    brand: { name: 'Aerolight Admin' },
  },
  collections: {
    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Product Name' } }),
        series: fields.text({ label: 'Series' }),
        tag: fields.text({ label: 'Tag' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Indoor', value: 'indoor' },
            { label: 'Outdoor', value: 'outdoor' },
            { label: 'Tracking', value: 'tracking' },
          ],
          defaultValue: 'indoor',
        }),
        type: fields.array(fields.text({ label: 'Type' }), { label: 'Types' }),
        installation: fields.array(fields.text({ label: 'Method' }), { label: 'Installation' }),
        power: fields.text({ label: 'Power' }),
        cri: fields.text({ label: 'CRI' }),
        cct: fields.text({ label: 'CCT' }),
        ip: fields.text({ label: 'IP Rating' }),
        shape: fields.select({
          label: 'Shape',
          options: [
            { label: 'Track', value: 'track' },
            { label: 'Circle', value: 'circle' },
            { label: 'Cone', value: 'cone' },
            { label: 'Strip', value: 'strip' },
            { label: 'Wall', value: 'wall' },
            { label: 'Step', value: 'step' },
          ],
          defaultValue: 'circle',
        }),
        bg: fields.text({ label: 'Background Gradient (Tailwind classes)' }),
        isNew: fields.checkbox({ label: 'Mark as New', defaultValue: false }),
        desc: fields.text({ label: 'Description', multiline: true }),
        features: fields.array(fields.text({ label: 'Feature' }), { label: 'Features' }),
      },
    }),

    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'content/projects/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Project Name' } }),
        location: fields.text({ label: 'Location' }),
        country: fields.text({ label: 'Country' }),
        brand: fields.text({ label: 'Brand' }),
        types: fields.array(fields.text({ label: 'Type' }), { label: 'Fixture Types' }),
        areas: fields.array(fields.text({ label: 'Area' }), { label: 'Project Areas' }),
        year: fields.number({ label: 'Year' }),
        bg: fields.text({ label: 'Background Gradient' }),
        bgLarge: fields.text({ label: 'Background Gradient (Large)' }),
        desc: fields.text({ label: 'Description', multiline: true }),
        highlights: fields.array(fields.text({ label: 'Highlight' }), { label: 'Highlights' }),
      },
    }),

    articles: collection({
      label: 'Media & Articles',
      slugField: 'title',
      path: 'content/articles/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'News', value: 'News' },
            { label: 'Blog', value: 'Blog' },
            { label: 'Media', value: 'Media' },
          ],
          defaultValue: 'News',
        }),
        date: fields.text({ label: 'Date (e.g. March 2026)' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        bg: fields.text({ label: 'Background Gradient' }),
      },
    }),

    downloads: collection({
      label: 'Downloads',
      slugField: 'title',
      path: 'content/downloads/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Catalogue', value: 'Catalogue' },
            { label: 'Portfolio', value: 'Portfolio' },
          ],
          defaultValue: 'Catalogue',
        }),
        year: fields.text({ label: 'Year' }),
        size: fields.text({ label: 'File Size (e.g. 28 MB)' }),
        downloads: fields.number({ label: 'Download Count', defaultValue: 0 }),
        bg: fields.text({ label: 'Background Gradient' }),
      },
    }),
  },
})
