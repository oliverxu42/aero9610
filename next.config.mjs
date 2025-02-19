import createMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// const withMDX = createMDX({
//   // Markdown plugins
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkMath],
//     rehypePlugins: [rehypeKatex],
//   },
// });

// // Merge MDX config with Next.js config
// export default withMDX(nextConfig);
