import type { Metadata } from "next";
import Link from "next/link";
import { vehicles, vehicleCategories } from "@/lib/data";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "车型展示",
  description: `浏览${companyInfo.name}精选车型，包括轿车、SUV、MPV、新能源车等多种车型。品质保障，价格透明，烟台购车首选。`,
  alternates: {
    canonical: `https://${companyInfo.domain}/vehicles`,
  },
};

export default function VehiclesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            车型展示
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            精选品质好车，总有一款适合您
          </p>
        </div>
      </section>

      {/* Vehicle List */}
      <section className="py-16 bg-neutral-50 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {vehicleCategories.map((category) => (
              <a
                key={category}
                href={
                  category === "全部"
                    ? "#all"
                    : `#${category}`
                }
                className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-gradient-to-r hover:from-brand-700 hover:to-brand-500 hover:text-white hover:border-transparent transition-all"
              >
                {category}
              </a>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div id="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
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
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-bold">
                    {vehicle.year}款
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-medium">
                      {vehicle.fuel}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs font-medium">
                      {vehicle.transmission}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs font-medium">
                      {vehicle.power}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div>
                      <span className="text-xs text-neutral-400">指导价</span>
                      <div className="text-2xl font-bold gradient-text">
                        {vehicle.price}
                      </div>
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
    </>
  );
}
