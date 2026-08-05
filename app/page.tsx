import type { Metadata } from "next";
import Link from "next/link";
import { vehicles } from "@/lib/data";
import { getArticles } from "@/lib/strapi";
import { companyInfo } from "@/lib/company";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `${companyInfo.name} - 精选好车 品质保障 | 烟台汽车销售`,
  description: companyInfo.description,
  alternates: {
    canonical: `https://${companyInfo.domain}`,
  },
};

const services = [
  {
    icon: "shield",
    title: "品质保障",
    description: "每辆车经过严格检测，品质有保障，购车无忧",
  },
  {
    icon: "search",
    title: "专业检测",
    description: "128项专业检测标准，确保车况透明，放心选择",
  },
  {
    icon: "finance",
    title: "灵活金融",
    description: "多种金融方案可选，低首付低月供，轻松购车",
  },
  {
    icon: "support",
    title: "售后无忧",
    description: "完善的售后服务体系，全程跟踪服务，省心省力",
  },
];

const stats = [
  { value: "10+", label: "年行业经验" },
  { value: "500+", label: "精选车型" },
  { value: "10000+", label: "满意客户" },
  { value: "4.9", label: "客户评分" },
];

export default async function HomePage() {
  const { articles } = await getArticles(1, 3);
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
            alt="赛途车行 精选好车"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-brand-700/70" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-medium mb-6 animate-fade-in">
            烟台专业汽车销售服务商
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            <span className="block">赛途车行</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-3 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">
              精选好车 品质保障
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-slide-up">
            新车、二手车、SUV、轿车、MPV、新能源车，一站式购车服务，让您的出行更精彩
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/vehicles"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:shadow-white/20"
            >
              浏览车型
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-lg font-bold text-lg hover:from-brand-500 hover:to-brand-400 transition-all border-2 border-white/30"
            >
              联系我们
            </Link>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="stream-divider" />
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              为什么选择<span className="gradient-text">赛途车行</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              专业、诚信、品质、服务，四大核心优势为您保驾护航
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  {service.icon === "shield" && (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  )}
                  {service.icon === "search" && (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  )}
                  {service.icon === "finance" && (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {service.icon === "support" && (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-neutral-50 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
                精选<span className="gradient-text">车型</span>
              </h2>
              <p className="text-neutral-500 text-lg">
                严选品质好车，总有一款适合您
              </p>
            </div>
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors mt-4 md:mt-0"
            >
              查看全部
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <Link
                key={vehicle.slug}
                href={`/vehicles/${vehicle.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-neutral-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-brand-700 to-brand-500 text-white text-xs font-semibold">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
                    <span>{vehicle.year}款</span>
                    <span className="text-neutral-300">|</span>
                    <span>{vehicle.fuel}</span>
                    <span className="text-neutral-300">|</span>
                    <span>{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold gradient-text">
                        {vehicle.price}
                      </span>
                    </div>
                    <span className="text-sm text-brand-600 font-semibold group-hover:underline">
                      查看详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80"
                  alt="赛途车行展厅"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                关于<span className="gradient-text">赛途车行</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                赛途车行成立于烟台，是一家专业的汽车销售服务商。我们秉承"精选好车、品质保障"的经营理念，主营新车、二手车、SUV、轿车、MPV、新能源车等各类车型。
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                我们拥有专业的车辆检测团队和完善的售后服务体系，为每一位客户提供从选车、购车到售后的全流程优质服务。多年来，已为上万名客户提供了满意的购车体验。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              新闻<span className="gradient-text">动态</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              了解最新行业资讯和车行动态
            </p>
          </div>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-neutral-200"
                >
                  {article.coverImage && (
                    <div className="relative h-48 overflow-hidden">
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
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-neutral-700 mb-2">
                资讯即将上线
              </h3>
              <p className="text-neutral-500">
                我们正在准备最新的行业资讯内容，敬请期待
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好开启您的驾车之旅了吗？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            无论您是选购新车还是二手车，赛途车行都将为您提供最专业的服务和最优质的车型
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehicles"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all"
            >
              浏览车型
            </Link>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              邮箱咨询
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
