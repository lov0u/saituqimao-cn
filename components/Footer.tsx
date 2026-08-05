import Link from "next/link";
import { companyInfo } from "@/lib/company";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/vehicles", label: "车型展示" },
  { href: "/about", label: "关于我们" },
  { href: "/news", label: "新闻资讯" },
  { href: "/contact", label: "联系我们" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center text-white font-bold text-lg">
                赛
              </div>
              <div className="text-lg font-bold text-white">
                赛途车行
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              赛途车行是烟台专业的汽车销售服务商，主营新车、二手车、SUV、轿车、MPV、新能源车。精选好车，品质保障，为您提供专业的购车服务。
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Vehicle Categories */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">车型分类</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/vehicles"
                className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
              >
                轿车
              </Link>
              <Link
                href="/vehicles"
                className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
              >
                SUV
              </Link>
              <Link
                href="/vehicles"
                className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
              >
                MPV
              </Link>
              <Link
                href="/vehicles"
                className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
              >
                新能源车
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-brand-400 transition-colors"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {companyInfo.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {companyInfo.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                全天候在线咨询
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} {companyInfo.name}. 保留所有权利.
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <Link href="/" className="hover:text-brand-400 transition-colors">
                首页
              </Link>
              <span>|</span>
              <Link
                href="/about"
                className="hover:text-brand-400 transition-colors"
              >
                关于我们
              </Link>
              <span>|</span>
              <Link
                href="/contact"
                className="hover:text-brand-400 transition-colors"
              >
                联系我们
              </Link>
              <span>|</span>
              <Link
                href="/sitemap.xml"
                className="hover:text-brand-400 transition-colors"
              >
                网站地图
              </Link>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-neutral-600">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
            >
              鲁ICP备2024090668号
            </a>
            <span className="hidden md:inline">|</span>
            <span>
              技术支持：{" "}
              <a
                href="https://ra0.cn/wangzhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-400 transition-colors"
              >
                青衣网络
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
