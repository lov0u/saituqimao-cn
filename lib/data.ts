/**
 * 车型数据
 * 8款车型:轿车、SUV、MPV、新能源
 */

export interface Vehicle {
  slug: string;
  name: string;
  category: string;
  price: string;
  priceValue: number;
  image: string;
  year: string;
  mileage: string;
  transmission: string;
  fuel: string;
  power: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export const vehicles: Vehicle[] = [
  {
    slug: "volkswagen-lavida",
    name: "大众朗逸",
    category: "轿车",
    price: "10.99万起",
    priceValue: 10.99,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "自动挡",
    fuel: "汽油",
    power: "1.5L / 110马力",
    description:
      "大众朗逸是一款经典的家轿车型，以出色的空间表现和稳定的品质著称。搭载1.5L自然吸气发动机，动力平顺，油耗经济。适合家庭日常通勤使用，是入门级家轿的优选。",
    features: [
      "全景天窗",
      "无钥匙进入与一键启动",
      "LED大灯组",
      "8英寸中控大屏",
      "倒车影像",
      "自动空调",
      "多功能方向盘",
      "CarPlay/CarLife手机互联",
    ],
    specs: [
      { label: "车型", value: "紧凑型轿车" },
      { label: "排量", value: "1.5L" },
      { label: "最大功率", value: "110马力" },
      { label: "变速箱", value: "6AT手自一体" },
      { label: "综合油耗", value: "5.5L/100km" },
      { label: "车身尺寸", value: "4670×1806×1474mm" },
      { label: "轴距", value: "2688mm" },
      { label: "座位数", value: "5座" },
    ],
  },
  {
    slug: "toyota-rav4",
    name: "丰田RAV4荣放",
    category: "SUV",
    price: "17.68万起",
    priceValue: 17.68,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135af1c7a4b?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "自动挡",
    fuel: "汽油/混动",
    power: "2.0L / 171马力",
    description:
      "丰田RAV4荣放是城市SUV的经典代表，基于TNGA架构打造，拥有硬朗的外观设计和出色的越野能力。搭载2.0L发动机，配备E-Four电子四驱系统，兼顾城市驾驶和轻度越野需求。",
    features: [
      "TNGA-K高级平台",
      "E-Four电子四驱系统",
      "TSS智行安全系统",
      "10.1英寸中控屏",
      "全景天窗",
      "电动尾门",
      "7个安全气囊",
      "自适应巡航控制系统",
    ],
    specs: [
      { label: "车型", value: "紧凑型SUV" },
      { label: "排量", value: "2.0L" },
      { label: "最大功率", value: "171马力" },
      { label: "变速箱", value: "CVT无级变速" },
      { label: "综合油耗", value: "6.4L/100km" },
      { label: "车身尺寸", value: "4600×1855×1680mm" },
      { label: "轴距", value: "2690mm" },
      { label: "座位数", value: "5座" },
    ],
  },
  {
    slug: "honda-odyssey",
    name: "本田奥德赛",
    category: "MPV",
    price: "23.58万起",
    priceValue: 23.58,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "自动挡",
    fuel: "混动",
    power: "2.0L / 146马力",
    description:
      "本田奥德赛是MPV市场的标杆车型，搭载2.0L混合动力系统，平顺安静且燃油经济性出色。双侧电动滑门，灵活的7座空间布局，是商务出行和家庭旅行的理想之选。",
    features: [
      "本田i-MMD双电机混动系统",
      "双侧电动滑门",
      "第二排独立航空座椅",
      "魔术空间座椅系统",
      "Honda SENSING安全超感",
      "10英寸中控屏",
      "脚踢感应电动尾门",
      "三区独立空调",
    ],
    specs: [
      { label: "车型", value: "中型MPV" },
      { label: "排量", value: "2.0L混动" },
      { label: "最大功率", value: "146马力" },
      { label: "变速箱", value: "E-CVT" },
      { label: "综合油耗", value: "5.8L/100km" },
      { label: "车身尺寸", value: "4861×1820×1712mm" },
      { label: "轴距", value: "2900mm" },
      { label: "座位数", value: "7座" },
    ],
  },
  {
    slug: "byd-han",
    name: "比亚迪汉",
    category: "新能源",
    price: "20.98万起",
    priceValue: 20.98,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "单速变速箱",
    fuel: "纯电动",
    power: "电机 / 245马力",
    description:
      "比亚迪汉是国产高端新能源轿车的代表之作，搭载刀片电池技术，安全性业界领先。百公里加速仅3.9秒（四驱版），NEDC续航最高可达715公里，兼顾性能与实用。",
    features: [
      "刀片电池技术",
      "DiLink智能网联系统",
      "DiPilot智能驾驶辅助",
      "12.3英寸全液晶仪表",
      "15.6英寸自适应旋转Pad",
      "NEDC续航715km",
      "快充30分钟80%",
      "丹拿音响系统",
    ],
    specs: [
      { label: "车型", value: "中大型轿车" },
      { label: "驱动方式", value: "纯电动" },
      { label: "最大功率", value: "245马力" },
      { label: "变速箱", value: "单速变速箱" },
      { label: "NEDC续航", value: "715km" },
      { label: "车身尺寸", value: "4995×1910×1495mm" },
      { label: "轴距", value: "2920mm" },
      { label: "座位数", value: "5座" },
    ],
  },
  {
    slug: "bmw-3-series",
    name: "宝马3系",
    category: "轿车",
    price: "29.99万起",
    priceValue: 29.99,
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "自动挡",
    fuel: "汽油",
    power: "2.0T / 184马力",
    description:
      "宝马3系是豪华运动轿车的标杆，以出色的操控性能和驾驶乐趣闻名。搭载2.0T涡轮增压发动机，匹配8AT变速箱，底盘调校兼顾运动与舒适，彰显纯粹驾驶者之车的精神。",
    features: [
      "2.0T B48涡轮增压发动机",
      "8速手自一体变速箱",
      "自适应M悬架",
      "12.3英寸数字仪表盘",
      "14.9英寸中控触控屏",
      "iDrive 8.0智能系统",
      "Harman Kardon音响",
      "自动驾驶辅助系统Pro",
    ],
    specs: [
      { label: "车型", value: "中型豪华轿车" },
      { label: "排量", value: "2.0T" },
      { label: "最大功率", value: "184马力" },
      { label: "变速箱", value: "8AT手自一体" },
      { label: "综合油耗", value: "6.9L/100km" },
      { label: "车身尺寸", value: "4719×1827×1459mm" },
      { label: "轴距", value: "2851mm" },
      { label: "座位数", value: "5座" },
    ],
  },
  {
    slug: "tesla-model-y",
    name: "特斯拉Model Y",
    category: "新能源",
    price: "26.39万起",
    priceValue: 26.39,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "单速变速箱",
    fuel: "纯电动",
    power: "电机 / 299马力",
    description:
      "特斯拉Model Y是纯电SUV的领军者，以极简设计理念和强大科技配置著称。CLTC续航最高688公里，百公里加速5.0秒，搭载Autopilot自动驾驶辅助，OTA持续升级体验。",
    features: [
      "CLTC续航688km",
      "Autopilot自动辅助驾驶",
      "15英寸触控中控屏",
      "全景玻璃车顶",
      "超级快充网络",
      "HEPA空气过滤系统",
      "OTA空中升级",
      "无线手机充电",
    ],
    specs: [
      { label: "车型", value: "中型纯电SUV" },
      { label: "驱动方式", value: "纯电动" },
      { label: "最大功率", value: "299马力" },
      { label: "变速箱", value: "单速变速箱" },
      { label: "CLTC续航", value: "688km" },
      { label: "车身尺寸", value: "4750×1921×1624mm" },
      { label: "轴距", value: "2890mm" },
      { label: "座位数", value: "5座" },
    ],
  },
  {
    slug: "mercedes-glc",
    name: "奔驰GLC",
    category: "SUV",
    price: "42.78万起",
    priceValue: 42.78,
    image:
      "https://images.unsplash.com/photo-1617814065893-00757125efab?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "自动挡",
    fuel: "汽油",
    power: "2.0T / 258马力",
    description:
      "奔驰GLC是豪华中型SUV的代表之作，融合优雅设计与强悍动力。搭载2.0T高功率发动机与9AT变速箱，配备4MATIC全时四驱系统，MBUX智能交互系统带来极致豪华体验。",
    features: [
      "4MATIC全时四驱系统",
      "9速自动变速箱",
      "MBUX智能人机交互",
      "11.9英寸中控竖屏",
      "Burmester柏林之声音响",
      "多光束LED大灯",
      "360度全景影像",
      "空气悬挂系统(AIRMATIC)",
    ],
    specs: [
      { label: "车型", value: "中型豪华SUV" },
      { label: "排量", value: "2.0T" },
      { label: "最大功率", value: "258马力" },
      { label: "变速箱", value: "9AT手自一体" },
      { label: "综合油耗", value: "8.2L/100km" },
      { label: "车身尺寸", value: "4764×1898×1642mm" },
      { label: "轴距", value: "2973mm" },
      { label: "座位数", value: "5座" },
    ],
  },
  {
    slug: "buick-gl8",
    name: "别克GL8",
    category: "MPV",
    price: "23.29万起",
    priceValue: 23.29,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80",
    year: "2024",
    mileage: "0-5万公里",
    transmission: "自动挡",
    fuel: "汽油",
    power: "2.0T / 237马力",
    description:
      "别克GL8是中国MPV市场的传奇车型，以豪华舒适的乘坐体验闻名。搭载2.0T+48V轻混动力系统，第二排头等舱式独立座椅，静谧性同级领先，是商务接待和家庭出行的首选。",
    features: [
      "2.0T+48V轻混动力",
      "第二排头等舱座椅",
      "双侧电动滑门",
      "12.3英寸双联屏",
      "eConnect智能互联",
      "Bose音响系统",
      "ANC主动降噪技术",
      "全景天窗",
    ],
    specs: [
      { label: "车型", value: "中大型MPV" },
      { label: "排量", value: "2.0T+48V" },
      { label: "最大功率", value: "237马力" },
      { label: "变速箱", value: "9AT手自一体" },
      { label: "综合油耗", value: "7.9L/100km" },
      { label: "车身尺寸", value: "5238×1878×1800mm" },
      { label: "轴距", value: "3088mm" },
      { label: "座位数", value: "7座" },
    ],
  },
];

/**
 * 获取所有车型 slug
 */
export function getAllVehicleSlugs(): string[] {
  return vehicles.map((v) => v.slug);
}

/**
 * 根据 slug 获取车型
 */
export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

/**
 * 获取车型分类
 */
export const vehicleCategories = [
  "全部",
  "轿车",
  "SUV",
  "MPV",
  "新能源",
];
