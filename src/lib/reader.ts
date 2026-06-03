import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

export async function getProducts() {
  const entries = await reader.collections.products.all()
  return entries.map(({ slug, entry }) => ({ ...entry, slug }))
}

export async function getProduct(slug: string) {
  const entry = await reader.collections.products.read(slug)
  if (!entry) return null
  return { ...entry, slug }
}

export async function getProjects() {
  const entries = await reader.collections.projects.all()
  return entries.map(({ slug, entry }) => ({ ...entry, slug }))
}

export async function getProject(slug: string) {
  const entry = await reader.collections.projects.read(slug)
  if (!entry) return null
  return { ...entry, slug }
}

export async function getArticles() {
  const entries = await reader.collections.articles.all()
  return entries.map(({ slug, entry }) => ({ ...entry, slug }))
}

export async function getArticle(slug: string) {
  const entry = await reader.collections.articles.read(slug)
  if (!entry) return null
  return { ...entry, slug }
}

export async function getDownloads() {
  const entries = await reader.collections.downloads.all()
  return entries.map(({ slug, entry }) => ({ ...entry, slug }))
}

export async function getHeroSlides() {
  const entries = await reader.collections.heroSlides.all()
  return entries
    .map(({ slug, entry }) => ({ ...entry, slug }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
