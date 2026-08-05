import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: "关于我们",
  description: `关于${companyInfo.name}，烟台专业汽车销售服务商，主营新车、二手车、SUV、轿车、MPV、新能源车。10年行业经验，10000+满意客户。`,
  alternates: {
    canonical: `https://${companyInfo.domain}/about`,
  },
};

const timeline = [
  {
    year: "2014",
    title: "品牌创立",
    description: "赛途车行在烟台正式成立，开启专业汽车销售服务之路",
  },
  {
    year: "2017",
    title: "业务扩展",
    description: "增设新能源车业务线，引入专业车辆检测设备，服务能力大幅提升",
  },
  {
    year: "2020",
    title: "服务升级",
    description: "建立完善的售后服务体系，推出灵活金融购车方案，客户满意度行业领先",
  },
  {
    year: "2022",
    title: "数字化转型",
    description: "上线线上看车平台，实现线上线下融合服务，为客户提供更便捷的购车体验",
  },
  {
    year: "2024",
    title: "品质标杆",
    description: "累计服务客户超10000名，成为烟台地区汽车销售服务品质标杆企业",
  },
];

const team = [
  {
    name: "张明",
    role: "创始人 / 总经理",
    description: "15年汽车行业经验，深耕汽车销售与服务领域",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "李伟",
    role: "销售总监",
    description: "10年汽车销售经验，擅长为客户匹配最优购车方案",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "王芳",
    role: "检测主管",
    description: "资深车辆检测师，128项专业检测标准制定者",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "陈刚",
    role: "售后经理",
    description: "8年售后服务管理经验，致力于为客户提供无忧售后体验",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const values = [
  {
    title: "诚信经营",
    description: "以诚信为本，车况透明、价格透明，绝不欺瞒客户",
    icon: "shield",
  },
  {
    title: "品质至上",
    description: "严格把控车辆品质，128项专业检测，确保每辆车品质达标",
    icon: "star",
  },
  {
    title: "客户第一",
    description: "以客户需求为核心，提供个性化购车方案和贴心服务",
    icon: "heart",
  },
  {
    title: "持续创新",
    description: "紧跟行业趋势，不断创新服务模式，提升客户体验",
    icon: "lightning",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            关于赛途车行
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            10年深耕汽车销售，致力于为客户提供最优质的购车服务体验
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              公司<span className="gradient-text">简介</span>
            </h2>
            <div className="stream-divider w-32 mx-auto" />
          </div>
          <div className="prose-content text-lg">
            <p>
              赛途车行成立于2014年，总部位于美丽的海滨城市——烟台。作为一家专业的汽车销售服务商，我们主营新车、二手车、SUV、轿车、MPV、新能源车等各类车型，致力于为客户提供一站式购车服务。
            </p>
            <p>
              经过10年的发展，赛途车行已从最初的小型车行成长为烟台地区颇具影响力的汽车销售服务品牌。我们拥有专业的销售团队、资深的车辆检测师和完善的售后服务体系，累计服务客户超过10000名，客户满意度高达4.9分。
            </p>
            <p>
              我们始终坚持"精选好车、品质保障"的经营理念，每一辆车都经过128项专业检测，确保车况透明、品质达标。同时，我们提供灵活的金融购车方案和无忧的售后服务，让每一位客户都能轻松购车、安心用车。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50 grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              发展<span className="gradient-text">历程</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              10年风雨同行，每一步都值得铭记
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-700 via-brand-500 to-brand-300 md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-brand-700 to-brand-500 ring-4 ring-white md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 bg-white rounded-2xl shadow-md card-hover border border-neutral-200">
                    <div className="text-2xl font-bold gradient-text mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              核心<span className="gradient-text">团队</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              专业团队，为您保驾护航
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 card-hover"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-brand-100 group-hover:ring-brand-300 transition-all">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              企业<span className="gradient-text">价值观</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              我们坚守的核心价值理念
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-neutral-200 card-hover text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/20">
                  {value.icon === "shield" && (
                    <svg
                      className="w-8 h-8 text-white"
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
                  {value.icon === "star" && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  )}
                  {value.icon === "heart" && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                  {value.icon === "lightning" && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            欢迎来赛途车行选购您的爱车
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehicles"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all"
            >
              浏览车型
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
