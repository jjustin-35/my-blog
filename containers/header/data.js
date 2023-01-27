export default {
  frontSide: {
    brand: {
      src: '/images/common/blog-header-brand.svg',
      alt: 'img-header-brand',
    },
    options: [
      { text: '首頁', link: '/' },
      { text: '技術文章', link: '/tech' },
      { text: '生活隨筆', link: '/note' },
      { text: '作品集', link: '/portfolio' },
      { text: '關於我', link: '/about' },
    ],
  },
  backSide: {
    brand: {
      src: '/images/common/blog-header-brand.svg',
      alt: 'img-header-brand',
    },
    options: [
      { text: '文章管理', link: '/admin' },
      { text: '新增文章', link: '/admin/editor' },
    ],
  },
  edit: {
    brand: {
      src: '/images/common/blog-header-brand.svg',
      alt: 'img-header-brand',
    },
    options: [
      { text: '文章管理', link: '/admin' },
      { text: '新增文章', link: '/admin/editor' },
    ],
    buttons: [
      {
        styles: {
          size: 'large',
          type: 'pill',
        },
        text: '新增',
      },
    ],
  },
};
