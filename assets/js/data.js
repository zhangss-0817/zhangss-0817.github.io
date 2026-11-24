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
    topic: "assist", role: "first", selected: true, doi: "10.34133/cbsystems.0576", pdf: "", code: "", video: ""
  },
  {
    title: "A Gait Deviation Correction Method for Stable Walking With a Wearable Self-Balancing Exoskeleton Robot: A Technical Case Report",
    authors: "S. Zhang, J. Li, W. Li, X. Wang, Y. Hong, F. Li, X. Wu",
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering", abbr: "TNSRE", year: 2026,
    topic: "balance", role: "first", selected: true, doi: "10.1109/TNSRE.2026.3695524", pdf: "", code: "", video: ""
  },
  {
    title: "Gait Planning & Adaptive Impedance Control for Turning Walk Based on a Self-Balancing Lower Limb Exoskeleton",
    authors: "X. Wang#, S. Zhang#, J. Li, W. Sun, Z. Ren, W. Cao, M. Yin, X. Wu",
    venue: "IEEE Transactions on Automation Science and Engineering", abbr: "T-ASE", year: 2026,
    topic: "balance", role: "cofirst", selected: false, doi: "10.1109/TASE.2026.3668388", pdf: "", code: "", video: ""
  },
  {
    title: "A Twisted String Actuation based Portable Hand Rehabilitation Exoskeleton for Daily Activities: Design, Control, and Characterization",
    authors: "W. Dong#, S. Zhang#, Y. Zhang, J. Ye, G. Chen, D. Guo, Y. Leng",
    venue: "IEEE Transactions on Automation Science and Engineering", abbr: "T-ASE", year: 2026,
    topic: "assist", role: "cofirst", selected: false, doi: "10.1109/TASE.2026.3748301", pdf: "", code: "", video: ""
  },
  {
    title: "An Anomaly-Aware Variable Impedance Control Framework for a Hip Exoskeleton with Human-in-the-Loop Optimization",
    authors: "K. Tan#, S. Zhang#, J. Zhang, Y. Leng, C. Zhu, Y. Zhang",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2026,
    topic: "assist", role: "cofirst", selected: false, doi: "10.1109/TMRB.2026.3733182", pdf: "", code: "", video: ""
  },
  {
    title: "A Rigid-Flexible Integrated Ankle Dorsiflexion Exoskeleton for Gait Assistance: Design, Control, and Characterization",
    authors: "Y. Xu#, S. Zhang#, J. Zhang, Y. Leng, C. Zhu, Y. Zhang",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2026,
    topic: "assist", role: "cofirst", selected: false, doi: "10.1109/TMRB.2026.3712801", pdf: "", code: "", video: ""
  },
  {
    title: "A Control Method for Self-Balancing Exoskeleton Walking on Unknown Terrain Height Variations Only with Force/Torque Sensors",
    authors: "J. Li, W. Cao, F. Li, S. Zhang, X. Wu",
    venue: "IEEE Transactions on Medical Robotics and Bionics", abbr: "T-MRB", year: 2026,
    topic: "balance", role: "", selected: false, doi: "10.1109/TMRB.2026.3744452", pdf: "", code: "", video: ""
  },
  {
    title: "Self-Balancing Walking Exoskeleton Distributed Circuit Design and Efficient 3-D Trajectory Synthesis Considering Wearer Constraints",
    authors: "F. Li, M. Yang, J. Sun, X. Wang, S. Zhang, J. Li, M. Yin, X. Wu",
    venue: "IEEE/ASME Transactions on Mechatronics", abbr: "T-MECH", year: 2026,
    topic: "balance", role: "", selected: false, doi: "10.1109/TMECH.2026.3735348", pdf: "", code: "", video: ""
  },
  {
    title: "A Comprehensive Review of Performance Evaluation Metrics and State-of-the-Art Advances in Lower-Limb Exoskeletons",
    authors: "Y. Xu, Y. Li, S. Zhang, K. Tan, Y. Zhang, C. Wang, Y. Leng, X. Wu",
    venue: "Biomimetic Intelligence and Robotics", abbr: "BIR", year: 2026,
    topic: "assist", role: "", selected: false, doi: "10.1016/j.birob.2026.100340", pdf: "", code: "", video: ""
  },
  {
    title: "An Upper-Limb Teleoperation Exoskeleton with Stepless Arm-Length Parameterization and Adaptive Force-Triggered Impedance Blending",
    authors: "P. Zeng, Y. Xu, S. Zheng, S. Zhang, C. Zhu, R. Huang, Y. Zhang",
    venue: "Scientific Reports", abbr: "Sci. Rep.", year: 2026,
    topic: "assist", role: "", selected: false, doi: "10.1038/s41598-026-37205-7", pdf: "", code: "", video: ""
  },
  {
    title: "Robot-Assisted Mirror Rehabilitation for Post-Stroke Upper Limbs: A Personalized Control Strategy",
    authors: "J. Chen, Z. Cheng, Y. Cai, S. Zhang, C. Zhu, Y. Zhang",
    venue: "Sensors", abbr: "Sensors", year: 2025,
    topic: "assist", role: "", selected: false, doi: "10.3390/s25185659", pdf: "", code: "", video: ""
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
    topic: "balance", role: "", selected: false, award: "best", doi: "10.1109/RCAR65431.2025.11139411", pdf: "", code: "", video: ""
  },
  {
    title: "Generation & Clinical Validation of Individualized Gait Trajectory for Stroke Patients Based on Lower Limb Exoskeleton Robot",
    authors: "S. Zhang, Y. Zhang, M. Luan, A. Peng, J. Ye, G. Chen, C. Fu, Y. Leng, X. Wu",
    venue: "IEEE Transactions on Automation Science and Engineering", abbr: "T-ASE", year: 2024,
    topic: "gait", role: "first", selected: true, doi: "10.1109/TASE.2024.3445886", pdf: "", code: "", video: ""
  },
  {
    title: "An Intelligent Rehabilitation Assessment Method for Stroke Patients Based on Lower Limb Exoskeleton Robot",
    authors: "S. Zhang, L. Fan, J. Ye, G. Chen, C. Fu, Y. Leng",
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering", abbr: "TNSRE", year: 2023,
    topic: "gait", role: "first", selected: true, doi: "10.1109/TNSRE.2023.3298670", pdf: "", code: "", video: ""
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
    topic: "gait", role: "first", selected: true, doi: "10.1109/TMRB.2022.3194360", pdf: "", code: "", video: ""
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
  { date: "2026-10", en: "Our portable hand rehabilitation exoskeleton (co-first author) is accepted by <i>IEEE T-ASE</i>.", zh: "便携式手部康复外骨骼论文（共同第一作者）被 <i>IEEE T-ASE</i> 接收。" },
  { date: "2026-08", en: "Our knee assistive exoskeleton for elderly daily locomotion is published in <i>Cyborg and Bionic Systems</i>.", zh: "面向老年人日常行走的膝关节助力外骨骼论文发表于 <i>Cyborg and Bionic Systems</i>。" },
  { date: "2026-06", en: "Awarded Merit Student Pacesetter of the University of Chinese Academy of Sciences.", zh: "获中国科学院大学三好学生标兵称号。" },
  { date: "2026-05", en: "Gait deviation correction for self-balancing exoskeletons is published in <i>IEEE TNSRE</i>.", zh: "自平衡外骨骼步态偏差纠正论文发表于 <i>IEEE TNSRE</i>。" },
  { date: "2025-06", en: "Our paper is selected as a Best Conference Paper Finalist at <i>IEEE RCAR 2025</i>.", zh: "论文入围 <i>IEEE RCAR 2025</i> 最佳会议论文。" }
];


/* 荣誉奖励 */
const AWARDS = [
  { year: "2026", en: "Merit Student Pacesetter (2025–2026), University of Chinese Academy of Sciences", zh: "中国科学院大学三好学生标兵（2025–2026 学年）" },
  { year: "2025", en: "Best Conference Paper Finalist, IEEE RCAR 2025", zh: "IEEE RCAR 2025 最佳会议论文入围" },
  { year: "2024", en: "Director's Innovation Award – Outstanding Graduate Student, Shenzhen Institute of Advanced Integration Technology, CAS", zh: "中国科学院深圳先进集成技术研究所所长创新奖——优秀研究生" },
  { year: "2024", en: "Merit Student (2023–2024), University of Chinese Academy of Sciences", zh: "中国科学院大学三好学生（2023–2024 学年）" }
];

/* 发明专利  status: "granted" 已授权 | "pending" 审查中 */
const PATENTS = [
  { no: "CN202311334769.2", year: "2023", status: "granted",
    en: "Compliant walking control technology for a self-balancing lower-limb exoskeleton robot",
    zh: "一种自平衡下肢外骨骼机器人柔顺行走控制技术" },
  { no: "CN202311335655.X", year: "2023", status: "pending",
    en: "Anthropomorphic viscoelastic compliant control method for a lower-limb exoskeleton",
    zh: "一种下肢外骨骼的拟人粘弹性柔顺控制方法" },
  { no: "CN202511111317.7", year: "2025", status: "pending",
    en: "Stable walking development and control method for a self-balancing lower-limb exoskeleton",
    zh: "一种用于自平衡下肢外骨骼的稳定行走开发和控制方法" },
  { no: "CN202511111318.1", year: "2025", status: "pending",
    en: "Natural individualized gait trajectory generation method for a lower-limb exoskeleton robot",
    zh: "一种下肢外骨骼机器人的自然个性化步态轨迹生成方法" }
];

/* 参与的科研项目 */
const PROJECTS = [
  { period: "2026–2030", level: "national",
    en: "Intelligent perception and cooperative control of exoskeleton robots for adaptive transitions across land and water scenarios",
    zh: "面向水陆多场景自适应转换的外骨骼机器人智能感知与协同控制研究",
    role_en: "Simulation environment and stable walking control in complex environments", role_zh: "负责仿真环境搭建与复杂环境稳定行走控制" },
  { period: "2025–2027", level: "national",
    en: "Human–robot co-integrated decision-making and human-like safe planning for self-balancing exoskeletons in dynamic environments",
    zh: "动态环境载人自平衡外骨骼人机共融精准决策与类人安全规划研究",
    role_en: "Stable walking control and sit-to-stand function", role_zh: "负责稳定行走控制与坐—站功能实现" },
  { period: "2022–2026", level: "national",
    en: "Human–machine fusion exoskeleton robots",
    zh: "人机融合外骨骼机器人",
    role_en: "Simulation environment and stable walking control of the self-balancing exoskeleton", role_zh: "负责自平衡外骨骼仿真环境搭建与复杂环境稳定行走控制" }
];

/* 界面文字（中英对照） */
const I18N = {
  en: {
    "nav.honors": "Honors",
    "honors.title": "Honors", "awards.title": "Awards", "patents.title": "Patents", "projects.title": "Research projects",
    "patent.granted": "Granted", "patent.pending": "Under examination",
    "level.national": "National", "level.provincial": "Provincial",
    "award.best": "Best Paper Finalist",
    "meta.title": "Shisheng Zhang · Rehabilitation Robotics & Wearable Exoskeletons",
    "nav.research": "Research", "nav.publications": "Publications", "nav.news": "News", "nav.contact": "Contact",
    "hero.kicker": "Rehabilitation robotics · Wearable exoskeletons",
    "hero.lead": "Ph.D. candidate at the Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences, advised by Prof. Xinyu Wu. His research on rehabilitation robotics and wearable exoskeletons focuses on <em>stable walking, individualized gait trajectory generation, compliant assistive control and intelligent rehabilitation assessment</em> of wearable exoskeletons. He has published {total} papers, including {lead} SCI journal papers as first or co-first author.",
    "hero.place": "<address><span class=\"lab\">Guangdong Provincial Key Lab of Robotics and Intelligent System</span><br>Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences<br>No. 1068, Xueyuan Rd., Xili, Nanshan District, Shenzhen, Guangdong, China 518055<br>Email: <a href=\"mailto:ss.zhang6@siat.ac.cn\">ss.zhang6@siat.ac.cn</a></address>",
    "research.title": "Research",
    "research.intro": "Centered on rehabilitation robotics and wearable exoskeletons, the research spans human–exoskeleton modeling, motion control and clinical validation across three exoskeleton platforms of increasing portability: self-balancing exoskeletons for people with severe lower-limb impairment, rehabilitation exoskeletons for post-stroke gait training, and augmentation exoskeletons for daily-life assistance.",
    "r1.title": "Self-Balancing Lower-Limb Exoskeleton<span class=\"sub\">Dynamic balance and stable locomotion control</span><span class=\"dof\">12 active DoFs</span>",
    "r1.text": "A crutch-free lower-limb exoskeleton with 12 actively driven joints that keeps the wearer–exoskeleton system balanced on its own, intended for users with severe lower-limb motor impairment. Research covers dynamic-balance gait planning, gait deviation correction, turning-gait generation with adaptive impedance control, and walking over unknown terrain using force/torque sensing alone.",
    "r2.title": "Lower-Limb Rehabilitation Exoskeleton<span class=\"sub\">Individualized gait generation and intelligent rehabilitation assessment</span><span class=\"dof\">6 active DoFs</span>",
    "r2.text": "A lower-limb rehabilitation exoskeleton with 6 active degrees of freedom for gait training after stroke and other neurological injuries. Research covers exoskeleton-based intelligent rehabilitation assessment, individualized gait trajectory generation, gait deviation correction and compliant interaction control, validated in clinical studies with stroke patients.",
    "r3.title": "Wearable Augmentation Exoskeletons<span class=\"sub\">Lightweight compliant design and assistive control</span><span class=\"dof\">2 active DoFs (lower limb) · upper limb</span>",
    "r3.text": "Lightweight, compliant wearable exoskeletons for daily-life assistance of older adults and motor augmentation, including a 2-DoF single-source dual-drive flexible knee exoskeleton, hip and ankle assistive exoskeletons, and upper-limb and hand exoskeletons. Research covers rigid–flexible mechanism design, variable impedance control and human-in-the-loop optimization.",
    "r.papers": "{n} papers →",
    "pubs.selected": "Selected<br>papers",
    "pubs.summary": "{total} papers, including {lead} SCI journal papers as first or co-first author.",
    "pubs.full": "Full list →",
    "news.title": "News",
    "contact.title": "Write to me.",
    "pubs.page.title": "Publications",
    "pubs.page.intro": "In reverse chronological order. # equal contribution. Also on <a href=\"https://scholar.google.com/citations?user=wST5BboAAAAJ\" target=\"_blank\" rel=\"noopener\">Google Scholar</a>.",
    "filter.all": "All", "filter.balance": "Self-balancing", "filter.gait": "Gait rehabilitation", "filter.assist": "Assistive control",
    "grp.balance": "Self-balancing lower-limb exoskeleton", "grp.gait": "Lower-limb rehabilitation exoskeleton", "grp.assist": "Wearable augmentation exoskeletons",
    "role.first": "First author", "role.cofirst": "Co-first author",
    "back.home": "← Home",
    "footer.copy": "© 2026 Shisheng Zhang"
  },
  zh: {
    "nav.honors": "荣誉",
    "honors.title": "荣誉与成果", "awards.title": "获奖荣誉", "patents.title": "发明专利", "projects.title": "参与科研项目",
    "patent.granted": "已授权", "patent.pending": "审查中",
    "level.national": "国家级", "level.provincial": "省部级",
    "award.best": "最佳论文入围",
    "meta.title": "张石生 · 康复机器人与可穿戴外骨骼",
    "nav.research": "研究方向", "nav.publications": "论文", "nav.news": "动态", "nav.contact": "联系",
    "hero.kicker": "康复机器人 · 可穿戴外骨骼",
    "hero.lead": "中国科学院深圳先进技术研究院博士研究生，师从吴新宇研究员。研究方向为康复机器人与可穿戴外骨骼，聚焦<em>可穿戴式外骨骼的稳定行走、个性化步态轨迹生成、柔顺助力控制以及智能康复评估</em>。已发表学术论文 {total} 篇，其中以第一/共同第一作者发表 SCI 论文 {lead} 篇。",
    "hero.place": "<address><span class=\"lab\">广东省机器人与智能系统重点实验室</span><br>中国科学院深圳先进技术研究院<br>深圳市南山区西丽深圳大学城学苑大道 1068 号<br>邮编：518055<br>邮箱：<a href=\"mailto:ss.zhang6@siat.ac.cn\">ss.zhang6@siat.ac.cn</a></address>",
    "research.title": "研究方向",
    "research.intro": "以康复机器人与可穿戴外骨骼为主线，围绕人—外骨骼系统的建模、运动控制与临床验证，构建了三类不同自由度与应用场景的外骨骼平台：面向重度下肢功能障碍者的自平衡外骨骼、面向脑卒中步态康复的康复外骨骼，以及面向日常生活助力的增强外骨骼。",
    "r1.title": "自平衡下肢外骨骼<span class=\"sub\">人机系统动态平衡与稳定行走控制</span><span class=\"dof\">12 个主动自由度</span>",
    "r1.text": "面向重度下肢运动功能障碍者，研究无需拐杖辅助、可自主维持人机系统平衡的下肢外骨骼，双下肢共配置 12 个主动驱动自由度。研究内容包括动态平衡步态规划、步态偏差纠正、转弯步态生成与自适应阻抗控制，以及仅依靠力/力矩传感的未知地形稳定行走。",
    "r2.title": "下肢康复外骨骼<span class=\"sub\">个性化步态生成与智能康复评估</span><span class=\"dof\">6 个主动自由度</span>",
    "r2.text": "面向脑卒中等神经损伤患者的下肢步态康复训练，研究具有 6 个主动自由度的下肢康复外骨骼。研究内容包括基于外骨骼数据的智能康复评估、个性化步态轨迹生成、步态偏差纠正与柔顺交互控制，相关方法已在脑卒中患者中完成临床验证。",
    "r3.title": "可穿戴增强外骨骼<span class=\"sub\">轻量化柔性结构与柔顺助力控制</span><span class=\"dof\">2 个主动自由度（下肢）· 上肢</span>",
    "r3.text": "面向老年人日常行走助力与人体运动能力增强，研究轻量化、柔顺化的可穿戴增强外骨骼，包括 2 个主动自由度的单源双驱柔性膝关节外骨骼、髋/踝关节助力外骨骼，以及上肢与手部外骨骼。研究内容包括刚柔耦合机构设计、变阻抗控制与人在回路优化。",
    "r.papers": "{n} 篇论文 →",
    "pubs.selected": "代表性<br>论文",
    "pubs.summary": "已发表学术论文 {total} 篇，其中以第一/共同第一作者发表 SCI 论文 {lead} 篇。",
    "pubs.full": "全部论文 →",
    "news.title": "最新动态",
    "contact.title": "欢迎来信交流。",
    "pubs.page.title": "论文",
    "pubs.page.intro": "按时间倒序排列，# 表示共同第一作者。也可查看 <a href=\"https://scholar.google.com/citations?user=wST5BboAAAAJ\" target=\"_blank\" rel=\"noopener\">Google Scholar</a>。",
    "filter.all": "全部", "filter.balance": "自平衡", "filter.gait": "步态康复", "filter.assist": "柔顺助力",
    "grp.balance": "自平衡下肢外骨骼", "grp.gait": "下肢康复外骨骼", "grp.assist": "可穿戴增强外骨骼",
    "role.first": "第一作者", "role.cofirst": "共同第一作者",
    "back.home": "← 返回首页",
    "footer.copy": "© 2026 张石生"
  }
};
