import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github' as const,
    repo: { owner: 'hewei0829', name: 'aerolight' },
  },

  ui: {
    brand: { name: 'Aerolight 管理后台' },
  },

  collections: {
    heroSlides: collection({
      label: '首页横幅轮播',
      slugField: 'title',
      path: 'content/hero-slides/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: '幻灯片名称（仅后台显示）' } }),
        eyebrow: fields.text({ label: '眉标文字' }),
        heading: fields.text({ label: '标题' }),
        highlight: fields.text({ label: '高亮词/短语' }),
        desc: fields.text({ label: '描述', multiline: true }),
        bg: fields.text({ label: '背景渐变色（备用）' }),
        image: fields.image({
          label: '背景图片',
          directory: 'public/images/hero',
          publicPath: '/images/hero/',
        }),
        order: fields.number({ label: '显示顺序', defaultValue: 1 }),
      },
    }),

    products: collection({
      label: '产品',
      slugField: 'name',
      path: 'content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: '产品名称' } }),
        series: fields.text({ label: '系列' }),
        tag: fields.text({ label: '标签' }),
        category: fields.select({
          label: '类别',
          options: [
            { label: '室内', value: 'indoor' },
            { label: '室外', value: 'outdoor' },
            { label: '轨道', value: 'tracking' },
          ],
          defaultValue: 'indoor',
        }),
        type: fields.array(fields.text({ label: '类型' }), { label: '类型列表' }),
        installation: fields.array(fields.text({ label: '安装方式' }), { label: '安装方式列表' }),
        power: fields.text({ label: '功率' }),
        cri: fields.text({ label: '显色指数 CRI' }),
        cct: fields.text({ label: '色温 CCT' }),
        ip: fields.text({ label: '防护等级 IP' }),
        shape: fields.select({
          label: '外形',
          options: [
            { label: '轨道', value: 'track' },
            { label: '圆形', value: 'circle' },
            { label: '锥形', value: 'cone' },
            { label: '条形', value: 'strip' },
            { label: '壁灯', value: 'wall' },
            { label: '台阶', value: 'step' },
          ],
          defaultValue: 'circle',
        }),
        bg: fields.text({ label: '背景渐变色（备用）' }),
        isNew: fields.checkbox({ label: '标记为新品', defaultValue: false }),
        desc: fields.text({ label: '描述', multiline: true }),
        features: fields.array(fields.text({ label: '特点' }), { label: '产品特点列表' }),
        image: fields.image({
          label: '产品图片',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
      },
    }),

    projects: collection({
      label: '项目案例',
      slugField: 'name',
      path: 'content/projects/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: '项目名称' } }),
        location: fields.text({ label: '地点' }),
        country: fields.text({ label: '国家' }),
        brand: fields.text({ label: '品牌' }),
        types: fields.array(fields.text({ label: '类型' }), { label: '灯具类型列表' }),
        areas: fields.array(fields.text({ label: '区域' }), { label: '项目区域列表' }),
        year: fields.number({ label: '年份' }),
        bg: fields.text({ label: '背景渐变色（备用）' }),
        bgLarge: fields.text({ label: '大图背景渐变色（备用）' }),
        desc: fields.text({ label: '描述', multiline: true }),
        highlights: fields.array(fields.text({ label: '亮点' }), { label: '项目亮点列表' }),
        image: fields.image({
          label: '项目图片',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
      },
    }),

    articles: collection({
      label: '媒体与文章',
      slugField: 'title',
      path: 'content/articles/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: '标题' } }),
        category: fields.select({
          label: '分类',
          options: [
            { label: '新闻', value: 'News' },
            { label: '博客', value: 'Blog' },
            { label: '媒体', value: 'Media' },
          ],
          defaultValue: 'News',
        }),
        date: fields.text({ label: '日期（如：2026年3月）' }),
        excerpt: fields.text({ label: '摘要', multiline: true }),
        bg: fields.text({ label: '背景渐变色（备用）' }),
        image: fields.image({
          label: '文章图片',
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),
      },
    }),

    downloads: collection({
      label: '下载资料',
      slugField: 'title',
      path: 'content/downloads/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: '标题' } }),
        category: fields.select({
          label: '分类',
          options: [
            { label: '产品目录', value: 'Catalogue' },
            { label: '作品集', value: 'Portfolio' },
          ],
          defaultValue: 'Catalogue',
        }),
        year: fields.text({ label: '年份' }),
        size: fields.text({ label: '文件大小（如：28 MB）' }),
        downloads: fields.number({ label: '下载次数', defaultValue: 0 }),
        bg: fields.text({ label: '背景渐变色' }),
      },
    }),
  },
})
