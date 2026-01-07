import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Chapter = defineDocumentType(() => ({
  name: 'Chapter',
  filePathPattern: `chapters/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the chapter',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      description: 'The URL for the chapter',
      resolve: (doc) => `/chapters/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Chapter],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
});