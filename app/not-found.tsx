import Link from "next/link";
import { companyInfo } from "@/lib/company";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          页面未找到
        </h1>
        <p className="text-neutral-500 mb-8">
          您访问的页面可能已被移除或暂时不可用。如需了解更多车型信息，请联系我们。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary"
          >
            返回首页
          </Link>
          <a
            href={`mailto:${companyInfo.email}`}
            className="btn-outline"
          >
            邮箱咨询
          </a>
        </div>
      </div>
    </div>
  );
}
