/* =====================================================================
 * 网站内容数据 —— 日常更新只需要改这个文件
 *
 * 新论文：在 PAPERS 最上方复制一条，改字段即可
 *   topic   : "balance"（自平衡） | "gait"（步态康复） | "assist"（柔顺助力）
 *   role    : "first"（第一作者） | "cofirst"（共同第一） | ""（其他）
 *   selected: true 时出现在首页"代表性论文"
 *   doi/pdf/code/video: 有就填链接，没有留空 ""
 * 新动态：在 NEWS 最上方加一条，en / zh 各写一句
 * ===================================================================== */

const ME = "S. Zhang";

const PAPERS = [
  {
    title: "A Single-Source Dual-Drive Flexible Knee Assistive Exoskeleton for Elderly Daily Locomotion",
    authors: "S. Zhang, Y. Zhang, Y. Xu, J. Li, Y. Leng, X. Wu",
    venue: "Cyborg and Bionic Systems", abbr: "CBS", year: 2026,
    topic: "assist", role: "first", selected: true, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "A Gait Deviation Correction Method for Stable Walking With a Wearable Self-Balancing Exoskeleton Robot: A Technical Case Report",
    authors: "S. Zhang, J. Li, W. Li, X. Wang, Y. Hong, F. Li, X. Wu",
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering", abbr: "TNSRE", year: 2026,
    topic: "balance", role: "first", selected: true, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Gait Planning & Adaptive Impedance Control for Turning Walk Based on a Self-Balancing Lower Limb Exoskeleton",
    authors: "X. Wang#, S. Zhang#, J. Li, W. Sun, Z. Ren, W. Cao, M. Yin, X. Wu",
    venue: "IEEE Transactions on Automation Science and Engineering", abbr: "T-ASE", year: 2026,
    topic: "balance", role: "cofirst", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "A Twisted String Actuation based Portable Hand Rehabilitation Exoskeleton for Daily Activities: Design, Control, and Characterization",
    authors: "W. Dong#, S. Zhang#, Y. Zhang, J. Ye, G. Chen, D. Guo, Y. Leng",
    venue: "IEEE Transactions on Automation Science and Engineering", abbr: "T-ASE", year: 2026,
    topic: "assist", role: "cofirst", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "An Anomaly-Aware Variable Impedance Control Framework for a Hip Exoskeleton with Human-in-the-Loop Optimization",
    authors: "K. Tan#, S. Zhang#, J. Zhang, Y. Leng, C. Zhu, Y. Zhang",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2026,
    topic: "assist", role: "cofirst", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "A Rigid-Flexible Integrated Ankle Dorsiflexion Exoskeleton for Gait Assistance: Design, Control, and Characterization",
    authors: "Y. Xu#, S. Zhang#, J. Zhang, Y. Leng, C. Zhu, Y. Zhang",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2026,
    topic: "assist", role: "cofirst", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "A Control Method for Self-Balancing Exoskeleton Walking on Unknown Terrain Height Variations Only with Force/Torque Sensors",
    authors: "J. Li, W. Cao, F. Li, S. Zhang, X. Wu",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2026,
    topic: "balance", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "A Comprehensive Review of Performance Evaluation Metrics and State-of-the-Art Advances in Lower-Limb Exoskeletons",
    authors: "Y. Xu, Y. Li, S. Zhang, K. Tan, Y. Zhang, C. Wang, Y. Leng, X. Wu",
    venue: "Biomimetic Intelligence and Robotics", abbr: "BIR", year: 2026,
    topic: "assist", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "An Upper-Limb Teleoperation Exoskeleton with Stepless Arm-Length Parameterization and Adaptive Force-Triggered Impedance Blending",
    authors: "P. Zeng, Y. Xu, S. Zheng, S. Zhang, C. Zhu, R. Huang, Y. Zhang",
    venue: "Scientific Reports", abbr: "Sci. Rep.", year: 2026,
    topic: "assist", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Robot-Assisted Mirror Rehabilitation for Post-Stroke Upper Limbs: A Personalized Control Strategy",
    authors: "J. Chen, Z. Cheng, Y. Cai, S. Zhang, C. Zhu, Y. Zhang",
    venue: "Sensors", abbr: "Sensors", year: 2025,
    topic: "assist", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Motion Planning of Self-balancing Exoskeleton Robot Based on Spring-Loaded Inverted Pendulum",
    authors: "C. Wu, J. Li, Z. Ren, S. Zhang, X. Shen, X. Wu",
    venue: "International Conference on Intelligent Robotics and Applications (ICIRA)", abbr: "ICIRA", year: 2025,
    topic: "balance", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "A Method for Turning Gait Generation and Walking Control in Self-Balancing Exoskeleton Robot",
    authors: "X. Wang, J. Li, S. Zhang, W. Li, W. Sun, Z. Ren, T. Wang, X. Wu",
    venue: "IEEE International Conference on Real-time Computing and Robotics (RCAR)", abbr: "RCAR", year: 2025,
    topic: "balance", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Generation & Clinical Validation of Individualized Gait Trajectory for Stroke Patients Based on Lower Limb Exoskeleton Robot",
    authors: "S. Zhang, Y. Zhang, M. Luan, A. Peng, J. Ye, G. Chen, C. Fu, Y. Leng, X. Wu",
    venue: "IEEE Transactions on Automation Science and Engineering", abbr: "T-ASE", year: 2024,
    topic: "gait", role: "first", selected: true, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "An Intelligent Rehabilitation Assessment Method for Stroke Patients Based on Lower Limb Exoskeleton Robot",
    authors: "S. Zhang, L. Fan, J. Ye, G. Chen, C. Fu, Y. Leng",
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering", abbr: "TNSRE", year: 2023,
    topic: "gait", role: "first", selected: true, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Two-Stage Trajectory-Tracking Control of Cable-Driven Upper-Limb Exoskeleton Robots with Series Elastic Actuators: A Simple, Accurate, and Force-Sensorless Method",
    authors: "Y. Shu, Y. Chen, X. Zhang, S. Zhang, G. Chen, J. Ye, X. Li",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)", abbr: "IROS", year: 2023,
    topic: "assist", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Gait Deviation Correction Method for Gait Rehabilitation With a Lower Limb Exoskeleton Robot",
    authors: "S. Zhang, X. Guan, J. Ye, G. Chen, Z. Zhang, Y. Leng",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2022,
    topic: "gait", role: "first", selected: false, doi: "", pdf: "", code: "", video: ""
  },
  {
    title: "Effects of Individualized Gait Rehabilitation Robotics for Gait Training on Hemiplegic Patients: Before-After Study in the Same Person",
    authors: "Z. Guo, J. Ye, S. Zhang, L. Xu, G. Chen, X. Guan, Y. Li, Z. Zhang",
    venue: "Frontiers in Neurorobotics", abbr: "Front. Neurorobot.", year: 2022,
    topic: "gait", role: "", selected: false, doi: "", pdf: "", code: "", video: ""
  }
];

const NEWS = [
  { date: "2026-11", en: "My new personal website is live.", zh: "个人网站上线。" },
  { date: "2026", en: "Our knee assistive exoskeleton paper is published in <i>Cyborg and Bionic Systems</i>.", zh: "膝关节助力外骨骼论文发表于 <i>Cyborg and Bionic Systems</i>。" }
];

/* 界面文字（中英对照） */
const I18N = {
  en: {
    "meta.title": "Shisheng Zhang · Rehabilitation Robotics & Wearable Exoskeletons",
    "nav.research": "Research", "nav.publications": "Publications", "nav.news": "News", "nav.contact": "Contact",
    "hero.kicker": "Rehabilitation robotics · Wearable exoskeletons",
    "hero.lead": "Ph.D. candidate at the Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences, designing exoskeletons that <em>balance, adapt and assist</em>, in the clinic and in daily life.",
    "hero.place": "Shenzhen, China",
    "research.title": "Research",
    "research.intro": "Three connected questions about how a wearable robot can keep a person stable, move the way they move, and help without getting in the way.",
    "r1.title": "Stable walking with self-balancing exoskeletons",
    "r1.text": "Crutch-free walking control: correcting gait deviation, generating turning gaits, and handling unknown terrain with force/torque sensing alone.",
    "r2.title": "Individualized gait generation for rehabilitation",
    "r2.text": "Measuring how each stroke patient walks, generating a gait trajectory for that patient, and validating it in clinical studies.",
    "r3.title": "Compliant assistive control",
    "r3.text": "Lightweight knee, ankle, hip and hand exoskeletons with adaptive impedance control and human-in-the-loop optimization for daily-life assistance.",
    "r.papers": "{n} papers →",
    "pubs.selected": "Selected<br>papers",
    "pubs.summary": "{total} papers, including {lead} journal papers as first or co-first author.",
    "pubs.full": "Full list →",
    "news.title": "News",
    "contact.title": "Write to me.",
    "pubs.page.title": "Publications",
    "pubs.page.intro": "In reverse chronological order. # equal contribution. Also on <a href=\"https://scholar.google.com/citations?user=wST5BboAAAAJ\" target=\"_blank\" rel=\"noopener\">Google Scholar</a>.",
    "filter.all": "All", "filter.balance": "Self-balancing", "filter.gait": "Gait rehabilitation", "filter.assist": "Assistive control",
    "role.first": "First author", "role.cofirst": "Co-first author",
    "back.home": "← Home",
    "footer.copy": "© 2026 Shisheng Zhang"
  },
  zh: {
    "meta.title": "张石生 · 康复机器人与可穿戴外骨骼",
    "nav.research": "研究方向", "nav.publications": "论文", "nav.news": "动态", "nav.contact": "联系",
    "hero.kicker": "康复机器人 · 可穿戴外骨骼",
    "hero.lead": "中国科学院深圳先进技术研究院博士研究生。我研究能够<em>自主平衡、个性适应、柔顺助力</em>的外骨骼，让它们在医院和日常生活中帮助人们行走。",
    "hero.place": "中国 · 深圳",
    "research.title": "研究方向",
    "research.intro": "围绕三个相互关联的问题：可穿戴机器人如何让人走得稳、走得像自己，并且在帮忙的同时不添负担。",
    "r1.title": "自平衡外骨骼稳定行走",
    "r1.text": "无拐杖行走控制：步态偏差纠正、转弯步态生成，以及仅依靠力/力矩传感应对未知地形。",
    "r2.title": "面向康复的个性化步态生成",
    "r2.text": "评估每位脑卒中患者的行走特征，为其生成个性化步态轨迹，并通过临床试验验证。",
    "r3.title": "柔顺助力控制",
    "r3.text": "膝、踝、髋、手部轻量化外骨骼，结合自适应阻抗控制与人在回路优化，服务日常生活助力。",
    "r.papers": "{n} 篇论文 →",
    "pubs.selected": "代表性<br>论文",
    "pubs.summary": "已发表论文 {total} 篇，其中以第一作者 / 共同第一作者发表期刊论文 {lead} 篇。",
    "pubs.full": "全部论文 →",
    "news.title": "最新动态",
    "contact.title": "欢迎来信交流。",
    "pubs.page.title": "论文",
    "pubs.page.intro": "按时间倒序排列，# 表示共同第一作者。也可查看 <a href=\"https://scholar.google.com/citations?user=wST5BboAAAAJ\" target=\"_blank\" rel=\"noopener\">Google Scholar</a>。",
    "filter.all": "全部", "filter.balance": "自平衡", "filter.gait": "步态康复", "filter.assist": "柔顺助力",
    "role.first": "第一作者", "role.cofirst": "共同第一作者",
    "back.home": "← 返回首页",
    "footer.copy": "© 2026 张石生"
  }
};
