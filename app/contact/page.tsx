import type { Metadata } from "next";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "联系我们",
  description: `联系${companyInfo.name}，邮箱：${companyInfo.email}。专业汽车销售服务，地址：${companyInfo.address}。新车、二手车、SUV、轿车、MPV、新能源车，欢迎咨询。`,
  alternates: {
    canonical: `https://${companyInfo.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            联系我们
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            专业汽车销售服务，随时欢迎您的咨询
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                联系<span className="gradient-text">方式</span>
              </h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-neutral-50 border border-brand-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-500/20">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">
                      电子邮箱
                    </h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-sm text-neutral-500 mt-1">
                      随时欢迎邮件咨询，我们将尽快回复
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">
                      公司地址
                    </h3>
                    <p className="text-lg text-neutral-700">
                      {companyInfo.address}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      欢迎来店参观选购
                    </p>
                  </div>
                </div>

                {/* Service Time */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">
                      服务时间
                    </h3>
                    <p className="text-lg text-neutral-700">周一至周日</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      08:00 - 20:00（邮件全天候受理）
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-brand-700 to-brand-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-brand-500/30 transition-all"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  发送邮件咨询
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                在线<span className="gradient-text">留言</span>
              </h2>
              <form
                action={`mailto:${companyInfo.email}`}
                method="post"
                encType="text/plain"
                className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 shadow-md"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    您的姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="姓名"
                    required
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    电子邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="邮箱"
                    required
                    placeholder="请输入您的电子邮箱"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="留言"
                    required
                    rows={5}
                    placeholder="请输入您想咨询的内容，例如感兴趣的车型、预算等"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-brand-700 to-brand-500 text-white rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-brand-500/30 transition-all"
                >
                  提交留言
                </button>
                <p className="text-xs text-neutral-400 text-center mt-4">
                  提交后将通过邮件客户端发送至 {companyInfo.email}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
