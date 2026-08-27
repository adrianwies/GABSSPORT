const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const domain = 'https://www.gabsperu.com.pe';
const updated = '2026-08-27';

const slugify = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll(String.fromCharCode(34), '&quot;');
const meta = (value) => String(value).replace(/\s+/g, ' ').trim().slice(0, 155);

const services = [
  { slug: 'canchas-deportivas', title: 'Canchas deportivas', label: 'Canchas en general', image: 'canchafut.webp', description: 'Construimos canchas deportivas de alto rendimiento para fútbol, tenis, básquet, pádel y espacios multiuso con materiales premium y acabados profesionales.', features: ['Materiales y acabados premium', 'Soluciones para cada disciplina', 'Alta resistencia y drenaje eficiente'] },
  { slug: 'pistas-atleticas', title: 'Pistas atléticas', label: 'Superficies de alto rendimiento', image: 'pistaatl.webp', description: 'Diseñamos y construimos pistas atléticas seguras, duraderas y certificadas para entrenamiento y competencia en todo el Perú.', features: ['Alto rendimiento y seguridad', 'Resistencia al desgaste y al clima', 'Acabados certificados y duraderos'] },
  { slug: 'suelos-recreativos', title: 'Suelos recreativos', label: 'Espacios seguros', image: 'juegos.webp', description: 'Instalamos suelos recreativos seguros, resistentes y atractivos para áreas de juego, parques, colegios y espacios comunitarios.', features: ['Superficies antideslizantes', 'Alta absorción de impacto', 'Seguridad y durabilidad'] },
  { slug: 'iluminacion-deportiva', title: 'Iluminación deportiva', label: 'Sistemas LED', image: 'luces.webp', description: 'Implementamos sistemas de iluminación LED de alta eficiencia para canchas e instalaciones deportivas, con uniformidad lumínica y ahorro energético.', features: ['Iluminación profesional', 'Ahorro energético', 'Cumplimiento normativo'] },
  { slug: 'mantenimiento-deportivo', title: 'Mantenimiento de superficies deportivas', label: 'Mantenimiento profesional', image: 'mantenimiento.webp', description: 'Realizamos mantenimiento integral para conservar el rendimiento, la seguridad y la vida útil de superficies e instalaciones deportivas.', features: ['Limpieza especializada', 'Reparación de áreas', 'Planes de mantenimiento'] }
];
const categoryNames = { futbol: 'Césped y canchas', pistas: 'Pistas atléticas', recreativos: 'Pisos deportivos', mantenimiento: 'Mantenimiento deportivo', luces: 'Iluminación deportiva' };

function schemaFor(item) {
  const canonical = domain + '/' + item.parent + '/' + item.slug + '/';
  const entity = item.kind === 'service'
    ? { '@type': 'Service', name: item.title, provider: { '@id': domain + '/#organization' }, areaServed: { '@type': 'Country', name: 'Perú' } }
    : { '@type': 'CreativeWork', name: item.title, description: item.description, image: domain + '/img/' + item.image, creator: { '@id': domain + '/#organization' }, locationCreated: item.location };
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': canonical + '#webpage', url: canonical, name: item.title + ' | GABSPORT', description: item.description, inLanguage: 'es-PE', mainEntity: entity },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: domain + '/' },
      { '@type': 'ListItem', position: 2, name: item.parentLabel, item: domain + '/' + item.parent + '/' },
      { '@type': 'ListItem', position: 3, name: item.title, item: canonical }
    ] }
  ] };
}

const q = String.fromCharCode(34);
const attr = (name, value) => ' ' + name + '=' + q + esc(value) + q;

function renderPage(item) {
  const canonical = domain + '/' + item.parent + '/' + item.slug + '/';
  const title = item.title + ' | ' + (item.kind === 'service' ? 'Servicios' : 'Proyecto') + ' GABSPORT';
  const featureHtml = item.features.map((feature) => {
    const heading = feature.title || feature;
    const text = feature.text || 'Solución ejecutada con materiales de calidad y atención profesional.';
    return '<article' + attr('class', 'detail-feature') + '><h3>' + esc(heading) + '</h3><p>' + esc(text) + '</p></article>';
  }).join('\n');
  const jsonLd = JSON.stringify(schemaFor(item), null, 2);
  return [
    '<!doctype html>',
    '<html' + attr('lang', 'es') + '><head>',
    '<meta' + attr('charset', 'UTF-8') + ' />',
    '<meta' + attr('name', 'viewport') + attr('content', 'width=device-width, initial-scale=1.0') + ' />',
    '<title>' + esc(title) + '</title>',
    '<meta' + attr('name', 'description') + attr('content', meta(item.description)) + ' />',
    '<meta' + attr('name', 'robots') + attr('content', 'index, follow, max-image-preview:large, max-snippet:-1') + ' />',
    '<link' + attr('rel', 'canonical') + attr('href', canonical) + ' />',
    '<meta' + attr('property', 'og:locale') + attr('content', 'es_PE') + ' />',
    '<meta' + attr('property', 'og:type') + attr('content', 'website') + ' />',
    '<meta' + attr('property', 'og:site_name') + attr('content', 'GABSPORT') + ' />',
    '<meta' + attr('property', 'og:title') + attr('content', title) + ' />',
    '<meta' + attr('property', 'og:description') + attr('content', meta(item.description)) + ' />',
    '<meta' + attr('property', 'og:url') + attr('content', canonical) + ' />',
    '<meta' + attr('property', 'og:image') + attr('content', domain + '/img/' + item.image) + ' />',
    '<meta' + attr('name', 'twitter:card') + attr('content', 'summary_large_image') + ' />',
    '<script' + attr('type', 'application/ld+json') + '>' + jsonLd + '</script>',
    '<link' + attr('rel', 'icon') + attr('type', 'image/png') + attr('href', '../../img/gabs-icon.png') + ' />',
    '<link' + attr('rel', 'stylesheet') + attr('href', '../../css/style.css') + ' />',
    '<link' + attr('rel', 'stylesheet') + attr('href', '../../css/typography.css') + ' />',
    '<link' + attr('rel', 'stylesheet') + attr('href', '../../css/detail.css') + ' />',
    '<link' + attr('rel', 'stylesheet') + attr('href', '../../componentes/header/header.css') + ' />',
    '<link' + attr('rel', 'stylesheet') + attr('href', '../../componentes/footer/footer.css') + ' />',
    '</head><body>',
    '<div' + attr('id', 'site-header') + attr('data-base', '../../') + attr('data-active', item.parent) + '></div>',
    '<main><section' + attr('class', 'detail-hero') + '>',
    '<img' + attr('class', 'detail-hero__image') + attr('src', '../../img/' + item.image) + attr('alt', item.title) + attr('fetchpriority', 'high') + ' />',
    '<div' + attr('class', 'detail-hero__overlay') + attr('aria-hidden', 'true') + '></div>',
    '<div' + attr('class', 'detail-hero__content') + '><span' + attr('class', 'detail-eyebrow') + '>' + esc(item.label) + '</span><h1>' + esc(item.title) + '</h1><p' + attr('class', 'detail-hero__lead') + '>' + esc(item.description) + '</p></div>',
    '</section><section' + attr('class', 'detail-main') + '>',
    '<nav' + attr('class', 'detail-breadcrumb') + attr('aria-label', 'Migas de pan') + '><a' + attr('href', '../../') + '>Inicio</a> / <a' + attr('href', '../') + '>' + item.parentLabel + '</a> / <span>' + esc(item.title) + '</span></nav>',
    '<div' + attr('class', 'detail-layout') + '><div' + attr('class', 'detail-copy') + '><h2>Detalles ' + (item.kind === 'service' ? 'del servicio' : 'del proyecto') + '</h2><p>' + esc(item.description) + '</p><div' + attr('class', 'detail-features') + '>' + featureHtml + '</div></div>',
    '<aside' + attr('class', 'detail-aside') + '><span>GABSPORT</span><h2>¿Tienes un proyecto similar?</h2><p>Conversemos sobre tu próximo espacio deportivo y recibe asesoría especializada.</p><a' + attr('class', 'detail-cta') + attr('href', 'https://wa.me/51986667508') + attr('target', '_blank') + attr('rel', 'noopener noreferrer') + '>COTIZAR PROYECTO →</a></aside>',
    '</div></section></main>',
    '<div' + attr('id', 'site-footer') + attr('data-base', '../../') + '></div>',
    '<script' + attr('src', '../../componentes/header/header.js?v=20260827-2') + '></script>',
    '<script' + attr('src', '../../componentes/footer/footer.js') + '></script>',
    '</body></html>',
    ''
  ].join('\n');
}

const projectData = JSON.parse(fs.readFileSync(path.join(root, 'data', 'proyectos.json'), 'utf8'));
const projects = projectData.map((project) => ({
  kind: 'project',
  parent: 'proyectos',
  parentLabel: 'Proyectos',
  slug: slugify(project.titulo),
  title: project.titulo,
  label: categoryNames[project.categoria] || 'Proyecto deportivo',
  image: path.basename(project.imagen),
  description: project.descripcion,
  location: project.ubicacion,
  features: project.caracteristicas || []
}));
const servicePages = services.map((service) => ({
  ...service,
  kind: 'service',
  parent: 'servicios',
  parentLabel: 'Servicios',
  location: 'Perú'
}));
const pages = [...servicePages, ...projects];

for (const item of pages) {
  const directory = path.join(root, item.parent, item.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), renderPage(item), 'utf8');
}

const coreUrls = [
  { urlPath: '/', priority: '1.0', frequency: 'weekly', image: 'imagenportada1.webp' },
  { urlPath: '/nosotros/', priority: '0.8', frequency: 'monthly', image: 'bannerpadel.webp' },
  { urlPath: '/servicios/', priority: '0.9', frequency: 'monthly', image: 'bannerservicios.webp' },
  { urlPath: '/proyectos/', priority: '0.9', frequency: 'weekly', image: 'bannerproyectos.webp' },
  { urlPath: '/contactanos/', priority: '0.7', frequency: 'yearly' }
];
const sitemapEntries = coreUrls.map((entry) => {
  const image = entry.image ? '<image:image><image:loc>' + domain + '/img/' + entry.image + '</image:loc></image:image>' : '';
  return '  <url><loc>' + domain + entry.urlPath + '</loc><lastmod>' + updated + '</lastmod><changefreq>' + entry.frequency + '</changefreq><priority>' + entry.priority + '</priority>' + image + '</url>';
});
for (const item of pages) {
  sitemapEntries.push('  <url><loc>' + domain + '/' + item.parent + '/' + item.slug + '/</loc><lastmod>' + updated + '</lastmod><changefreq>monthly</changefreq><priority>0.7</priority><image:image><image:loc>' + domain + '/img/' + item.image + '</image:loc><image:title>' + esc(item.title) + '</image:title></image:image></url>');
}
const sitemap = ['<?xml version=' + q + '1.0' + q + ' encoding=' + q + 'UTF-8' + q + '?>', '<urlset xmlns=' + q + 'http://www.sitemaps.org/schemas/sitemap/0.9' + q + ' xmlns:image=' + q + 'http://www.google.com/schemas/sitemap-image/1.1' + q + '>', ...sitemapEntries, '</urlset>', ''].join('\n');
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
console.log('Generated ' + pages.length + ' SEO detail pages and ' + sitemapEntries.length + ' sitemap URLs.');
