import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/strapi";
import { companyInfo } from "@/lib/company";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "新闻资讯",
  description: `${companyInfo.name}新闻资讯，汽车行业动态、购车指南、新车评测、用车知识等。了解最新汽车资讯，做出明智购车决策。`,
  alternates: {
    canonical: `https://${companyInfo.domain}/news`,
  },
};

export default async function NewsPage() {
  const { articles, total } = await getArticles(1, 20);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            新闻资讯
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            汽车行业动态、购车指南、用车知识
          </p>
        </div>
      </section>

      {/* Article List */}
      <section className="py-16 bg-neutral-50 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-neutral-200"
                  >
                    {article.coverImage && (
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-xs text-neutral-400 mb-2">
                        {new Date(article.publishedAt).toLocaleDateString(
                          "zh-CN"
                        )}
                      </p>
                      <h2 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-neutral-500 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-brand-600 font-semibold group-hover:underline">
                        阅读全文
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {total > 20 && (
                <div className="mt-8 text-center">
                  <p className="text-sm text-neutral-500">
                    共 {total} 篇文章，更多文章请持续关注
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📋</div>
              <h2 className="text-xl font-bold text-neutral-700 mb-2">
                暂无文章
              </h2>
              <p className="text-neutral-500 mb-8">
                我们正在准备最新的汽车资讯内容，敬请期待
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-700 to-brand-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                返回首页
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
