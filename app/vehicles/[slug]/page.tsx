import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  vehicles,
  getVehicleBySlug,
  getAllVehicleSlugs,
} from "@/lib/data";
import { companyInfo } from "@/lib/company";

export function generateStaticParams() {
  return getAllVehicleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then((resolvedParams) => {
    const vehicle = getVehicleBySlug(resolvedParams.slug);
    if (!vehicle) {
      return {
        title: "车型未找到",
        description: "您访问的车型不存在",
      };
    }
    return {
      title: `${vehicle.name} - ${vehicle.price} | ${vehicle.category}`,
      description: `${vehicle.name}，${vehicle.category}，${vehicle.fuel}，${vehicle.power}。${vehicle.description.substring(0, 100)}`,
      alternates: {
        canonical: `https://${companyInfo.domain}/vehicles/${vehicle.slug}`,
      },
      openGraph: {
        title: `${vehicle.name} - ${vehicle.price}`,
        description: vehicle.description.substring(0, 160),
        images: [{ url: vehicle.image }],
      },
    };
  });
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  // 相关车型（同分类的其他车型）
  const relatedVehicles = vehicles
    .filter((v) => v.category === vehicle.category && v.slug !== vehicle.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              首页
            </Link>
            <span>/</span>
            <Link
              href="/vehicles"
              className="hover:text-brand-600 transition-colors"
            >
              车型展示
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{vehicle.name}</span>
          </nav>
        </div>
      </div>

      {/* Vehicle Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-700 to-brand-500 text-white text-sm font-semibold">
                  {vehicle.category}
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                {vehicle.name}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-sm font-medium">
                  {vehicle.year}款
                </span>
                <span className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
                  {vehicle.fuel}
                </span>
                <span className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
                  {vehicle.transmission}
                </span>
                <span className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
                  {vehicle.power}
                </span>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {vehicle.description}
              </p>

              {/* Price */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-neutral-50 border border-brand-100 mb-6">
                <div className="text-sm text-neutral-500 mb-1">指导价</div>
                <div className="text-4xl font-bold gradient-text">
                  {vehicle.price}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${companyInfo.email}?subject=咨询车型：${vehicle.name}`}
                  className="btn-primary flex-1"
                >
                  邮箱咨询
                </a>
                <Link href="/vehicles" className="btn-outline flex-1">
                  返回列表
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            详细<span className="gradient-text">参数</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-neutral-200">
            <table className="w-full">
              <tbody>
                {vehicle.specs.map((spec, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-neutral-50"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-neutral-500 w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-900 font-medium">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            配置<span className="gradient-text">列表</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vehicle.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-neutral-700 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      {relatedVehicles.length > 0 && (
        <section className="py-12 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              相关<span className="gradient-text">车型</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVehicles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/vehicles/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-neutral-200"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {related.name}
                    </h3>
                    <div className="text-xl font-bold gradient-text">
                      {related.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            对{vehicle.name}感兴趣？
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            联系我们获取更多详细信息和优惠报价
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${companyInfo.email}?subject=咨询车型：${vehicle.name}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all"
            >
              邮箱咨询
            </a>
            <Link
              href="/vehicles"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              浏览更多车型
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
