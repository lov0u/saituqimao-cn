import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticleSlugs } from "@/lib/payload";
import { companyInfo } from "@/lib/company";
import ArticleCharts from "@/app/ArticleCharts";

export const revalidate = 3600;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "文章未找到",
      description: "您访问的文章不存在",
    };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.metaKeywords?.split(","),
    alternates: {
      canonical: `https://${companyInfo.domain}/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      images: article.coverImage ? [{ url: article.coverImage }] : [],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              首页
            </Link>
            <span>/</span>
            <Link
              href="/news"
              className="hover:text-brand-600 transition-colors"
            >
              新闻资讯
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium line-clamp-1">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-neutral-400 mb-4">
              {new Date(article.publishedAt).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                {article.excerpt}
              </p>
            )}
          </div>

          {article.coverImage && (
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stream-divider mb-8" />
          {article.content ? (
            <>
              <div
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <ArticleCharts />
            </>
          ) : (
            <p className="text-neutral-500 text-center py-8">
              文章内容加载中...
            </p>
          )}
        </div>
      </section>

      {/* Back to List */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-700 to-brand-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回文章列表
          </Link>
        </div>
      </section>
    </>
  );
}
