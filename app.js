/* ============================================
   LOVOT Caregiver Companion — Application Logic
   ============================================ */

// ─── i18n: Dialect / Language Translations ────────────────────────
const translations = {
  en: {
    name: "English",
    dashboard: "Dashboard",
    cctvLive: "CCTV Live View",
    reminders: "Reminders",
    facialRec: "Facial Recognition",
    activityReport: "Activity Report",
    communityForum: "Community Forum",
    activities: "Activities",
    dialect: "Language / Dialect",
    pageTitle: "Caregiver Dashboard",
    lovotOnline: "LOVOT Online",
    simulateFall: "Simulate Fall",
    toggleFaces: "Toggle Face Detection",
    fullscreen: "Fullscreen",
    addReminder: "Add Instruction",
    reminderType: "Type",
    reminderText: "Instruction",
    reminderTime: "Time",
    reminderFreq: "Frequency",
    medicine: "Medicine",
    selfCare: "Self Care",
    exercise: "Exercise",
    appointment: "Appointment",
    hydration: "Hydration",
    daily: "Daily",
    weekly: "Weekly",
    once: "Once",
    recognizedFaces: "Recognized Faces",
    addFace: "Add New Face",
    faceName: "Name",
    faceRelation: "Relation",
    register: "Register",
    interactions: "Interactions",
    alertsToday: "Alerts Today",
    activeHours: "Active Hours",
    moodScore: "Mood Score",
    timeIdle: "Time Idle",
    timeMoving: "Time Moving",
    socialInteractions: "Social Time",
    sleepQuality: "Sleep Quality",
    dailyBreakdown: "Daily Time Breakdown",
    generateReport: "Generate Report",
    exportPdf: "Export PDF",
    weeklyActivity: "Weekly Activity Overview",
    fallDetected: "FALL DETECTED",
    fallMessage: "Possible fall detected in living room. Caregiver notified.",
    dismiss: "Dismiss",
    caregiverNotified: "Caregiver has been notified via SMS & app push notification.",
    noReminders: "No reminders yet. Add one above!",
    reminderPlaceholder: "e.g. Take blood pressure medicine",
    forumSubtitle: "Connect with fellow LOVOT caregivers. Share experiences, ask questions, and support each other.",
    activitiesSubtitle: "Discover events and activities to enrich your loved one's daily life.",
    localEvents: "Local Events",
    nearbyActivities: "Nearby",
    overseasTravel: "Overseas Travel",
    mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
    recording: "REC",
    livingRoom: "Living Room — Camera 1",
    articles: "Articles",
    articlesSectionTitle: "Caregiver Articles",
    articlesSubtitle: "Helpful tips and guides for LOVOT caregivers."
  },
  zh: {
    name: "华语 (Mandarin)",
    dashboard: "主页",
    cctvLive: "实时监控",
    reminders: "提醒事项",
    facialRec: "人脸识别",
    activityReport: "活动报告",
    dialect: "语言 / 方言",
    pageTitle: "看护者主页",
    lovotOnline: "LOVOT 在线",
    simulateFall: "模拟跌倒",
    toggleFaces: "切换人脸检测",
    fullscreen: "全屏",
    addReminder: "添加指令",
    reminderType: "类型",
    reminderText: "指令内容",
    reminderTime: "时间",
    reminderFreq: "频率",
    medicine: "药物",
    selfCare: "个人护理",
    exercise: "运动",
    appointment: "预约",
    hydration: "喝水",
    daily: "每天",
    weekly: "每周",
    once: "一次",
    recognizedFaces: "已识别人脸",
    addFace: "添加新面孔",
    faceName: "名字",
    faceRelation: "关系",
    register: "注册",
    interactions: "互动次数",
    alertsToday: "今日警报",
    activeHours: "活跃时段",
    moodScore: "情绪分数",
    generateReport: "生成报告",
    exportPdf: "导出 PDF",
    weeklyActivity: "每周活动概览",
    fallDetected: "检测到跌倒",
    fallMessage: "客厅可能检测到跌倒。已通知护理人员。",
    dismiss: "关闭",
    caregiverNotified: "已通过短信和应用推送通知护理人员。",
    noReminders: "暂无提醒，请在上方添加！",
    reminderPlaceholder: "例如：服用降压药",
    mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日",
    recording: "录制中",
    livingRoom: "客厅 — 摄像头 1",
    articles: "文章",
    articlesSectionTitle: "看护者文章",
    articlesSubtitle: "为LOVOT看护者提供实用的建议和指南。"
  },
  hokkien: {
    name: "福建话 (Hokkien)",
    dashboard: "总页面",
    cctvLive: "现场画面",
    reminders: "提醒",
    facialRec: "面孔认识",
    activityReport: "活动报告",
    dialect: "语言 / 方言",
    pageTitle: "看护人总页面",
    lovotOnline: "LOVOT 连线中",
    simulateFall: "模拟跌倒",
    toggleFaces: "开/关面孔探测",
    fullscreen: "全屏幕",
    addReminder: "加指令",
    reminderType: "类型",
    reminderText: "指令",
    reminderTime: "时间",
    reminderFreq: "频率",
    medicine: "药物",
    selfCare: "个人卫生",
    exercise: "运动",
    appointment: "预约",
    hydration: "饮水",
    daily: "每日",
    weekly: "每礼拜",
    once: "一次",
    recognizedFaces: "已认识的面孔",
    addFace: "加新面孔",
    faceName: "名字",
    faceRelation: "关系",
    register: "注册",
    interactions: "互动",
    alertsToday: "今日警报",
    activeHours: "活跃时间",
    moodScore: "情绪分数",
    generateReport: "制作报告",
    exportPdf: "导出 PDF",
    weeklyActivity: "每礼拜活动",
    fallDetected: "检测到跌倒",
    fallMessage: "客厅可能有人跌倒。已通知照顾者。",
    dismiss: "关闭",
    caregiverNotified: "已用短信和App通知照顾者。",
    noReminders: "还没有提醒。在上面加一个！",
    reminderPlaceholder: "例如：吃血压药",
    mon: "礼拜一", tue: "礼拜二", wed: "礼拜三", thu: "礼拜四", fri: "礼拜五", sat: "礼拜六", sun: "礼拜日",
    recording: "录制中",
    livingRoom: "客厅 — 摄像机 1",
    articles: "文章",
    articlesSectionTitle: "看护人文章",
    articlesSubtitle: "给LOVOT看护人的贴士和指南。"
  },
  teochew: {
    name: "潮州话 (Teochew)",
    dashboard: "总页",
    cctvLive: "直播画面",
    reminders: "提醒",
    facialRec: "面容辨认",
    activityReport: "活动报告",
    dialect: "语言 / 方言",
    pageTitle: "看护人总页",
    lovotOnline: "LOVOT 在线",
    simulateFall: "模拟跌倒",
    toggleFaces: "开关面孔侦测",
    fullscreen: "全屏",
    addReminder: "加指示",
    reminderType: "类型",
    reminderText: "指示",
    reminderTime: "时间",
    reminderFreq: "频率",
    medicine: "药",
    selfCare: "个人护理",
    exercise: "运动",
    appointment: "约好",
    hydration: "喝水",
    daily: "每日",
    weekly: "每个礼拜",
    once: "一次",
    recognizedFaces: "认得的面孔",
    addFace: "加新面孔",
    faceName: "名",
    faceRelation: "关系",
    register: "登记",
    interactions: "沟通次数",
    alertsToday: "今天的警报",
    activeHours: "活跃时段",
    moodScore: "情绪分",
    generateReport: "做报告",
    exportPdf: "导出 PDF",
    weeklyActivity: "每礼拜活动总结",
    fallDetected: "有人跌倒",
    fallMessage: "客厅可能有人跌倒。已通知照顾者。",
    dismiss: "关闭",
    caregiverNotified: "已用短信和App通知照顾者。",
    noReminders: "还没有提醒。",
    reminderPlaceholder: "例如：食降血压药",
    mon: "拜一", tue: "拜二", wed: "拜三", thu: "拜四", fri: "拜五", sat: "拜六", sun: "礼拜",
    recording: "录制",
    livingRoom: "客厅 — 摄像头 1",
    articles: "文章",
    articlesSectionTitle: "看护人文章",
    articlesSubtitle: "给LOVOT看护人的提示和指南。"
  },
  cantonese: {
    name: "广东话 (Cantonese)",
    dashboard: "主页",
    cctvLive: "实时闭路电视",
    reminders: "提醒",
    facialRec: "面容辨认",
    activityReport: "活动报告",
    dialect: "语言 / 方言",
    pageTitle: "护理人员主页",
    lovotOnline: "LOVOT 上线",
    simulateFall: "模拟跌倒",
    toggleFaces: "开关面部检测",
    fullscreen: "全屏",
    addReminder: "加指令",
    reminderType: "类别",
    reminderText: "指令",
    reminderTime: "时间",
    reminderFreq: "频率",
    medicine: "药",
    selfCare: "自理",
    exercise: "运动",
    appointment: "预约",
    hydration: "饮水",
    daily: "每日",
    weekly: "每星期",
    once: "一次",
    recognizedFaces: "已识别面孔",
    addFace: "加新面孔",
    faceName: "名",
    faceRelation: "关系",
    register: "登记",
    interactions: "互动次数",
    alertsToday: "今日警报",
    activeHours: "活跃时间",
    moodScore: "情绪分数",
    generateReport: "生成报告",
    exportPdf: "导出 PDF",
    weeklyActivity: "每周活动总览",
    fallDetected: "发现跌倒",
    fallMessage: "客厅可能有人跌倒。已通知护理人员。",
    dismiss: "关闭",
    caregiverNotified: "已透过短信及App通知护理人员。",
    noReminders: "暂时无提醒。",
    reminderPlaceholder: "例如：食血压药",
    mon: "星期一", tue: "星期二", wed: "星期三", thu: "星期四", fri: "星期五", sat: "星期六", sun: "星期日",
    recording: "录紧",
    livingRoom: "客厅 — 镜头 1",
    articles: "文章",
    articlesSectionTitle: "护理人员文章",
    articlesSubtitle: "为LOVOT护理人员提供实用贴士和指南。"
  },
  ms: {
    name: "Bahasa Melayu",
    dashboard: "Laman Utama",
    cctvLive: "CCTV Langsung",
    reminders: "Peringatan",
    facialRec: "Pengecaman Wajah",
    activityReport: "Laporan Aktiviti",
    dialect: "Bahasa / Dialek",
    pageTitle: "Papan Pemuka Penjaga",
    lovotOnline: "LOVOT Dalam Talian",
    simulateFall: "Simulasi Jatuh",
    toggleFaces: "Togol Pengesanan Wajah",
    fullscreen: "Skrin Penuh",
    addReminder: "Tambah Arahan",
    reminderType: "Jenis",
    reminderText: "Arahan",
    reminderTime: "Masa",
    reminderFreq: "Kekerapan",
    medicine: "Ubat",
    selfCare: "Penjagaan Diri",
    exercise: "Senaman",
    appointment: "Temu Janji",
    hydration: "Minum Air",
    daily: "Harian",
    weekly: "Mingguan",
    once: "Sekali",
    recognizedFaces: "Wajah Dikenali",
    addFace: "Tambah Wajah Baru",
    faceName: "Nama",
    faceRelation: "Hubungan",
    register: "Daftar",
    interactions: "Interaksi",
    alertsToday: "Amaran Hari Ini",
    activeHours: "Waktu Aktif",
    moodScore: "Skor Mood",
    generateReport: "Jana Laporan",
    exportPdf: "Eksport PDF",
    weeklyActivity: "Gambaran Aktiviti Mingguan",
    fallDetected: "JATUH DIKESAN",
    fallMessage: "Kemungkinan jatuh dikesan di ruang tamu. Penjaga telah dimaklumkan.",
    dismiss: "Tutup",
    caregiverNotified: "Penjaga telah dimaklumkan melalui SMS & notifikasi aplikasi.",
    noReminders: "Tiada peringatan lagi. Tambah satu di atas!",
    reminderPlaceholder: "cth. Ambil ubat tekanan darah",
    mon: "Isn", tue: "Sel", wed: "Rab", thu: "Kha", fri: "Jum", sat: "Sab", sun: "Ahd",
    recording: "RAKAM",
    livingRoom: "Ruang Tamu — Kamera 1",
    articles: "Artikel",
    articlesSectionTitle: "Artikel Penjaga",
    articlesSubtitle: "Panduan dan tip berguna untuk penjaga LOVOT."
  },
  ta: {
    name: "தமிழ் (Tamil)",
    dashboard: "முகப்பு",
    cctvLive: "CCTV நேரடி",
    reminders: "நினைவூட்டல்",
    facialRec: "முக அங்கீகாரம்",
    activityReport: "செயல்பாட்டு அறிக்கை",
    dialect: "மொழி / வட்டாரம்",
    pageTitle: "பராமரிப்பாளர் டாஷ்போர்டு",
    lovotOnline: "LOVOT ஆன்லைன்",
    simulateFall: "விழுதல் உருவகப்படுத்து",
    toggleFaces: "முக கண்டறிதல் மாற்று",
    fullscreen: "முழு திரை",
    addReminder: "அறிவுறுத்தல் சேர்",
    reminderType: "வகை",
    reminderText: "அறிவுறுத்தல்",
    reminderTime: "நேரம்",
    reminderFreq: "அதிர்வெண்",
    medicine: "மருந்து",
    selfCare: "சுய பராமரிப்பு",
    exercise: "உடற்பயிற்சி",
    appointment: "சந்திப்பு",
    hydration: "தண்ணீர்",
    daily: "தினசரி",
    weekly: "வாராந்திர",
    once: "ஒருமுறை",
    recognizedFaces: "அடையாளம் காணப்பட்ட முகங்கள்",
    addFace: "புதிய முகம் சேர்",
    faceName: "பெயர்",
    faceRelation: "உறவு",
    register: "பதிவு",
    interactions: "தொடர்புகள்",
    alertsToday: "இன்றைய எச்சரிக்கைகள்",
    activeHours: "செயலில் நேரம்",
    moodScore: "மனநிலை மதிப்பெண்",
    generateReport: "அறிக்கை உருவாக்கு",
    exportPdf: "PDF ஏற்றுமதி",
    weeklyActivity: "வாராந்திர செயல்பாடு",
    fallDetected: "விழுதல் கண்டறியப்பட்டது",
    fallMessage: "அறையில் விழுதல் கண்டறியப்பட்டது. பராமரிப்பாளருக்கு தெரிவிக்கப்பட்டது.",
    dismiss: "நிராகரி",
    caregiverNotified: "SMS மற்றும் ஆப் மூலம் பராமரிப்பாளருக்கு தெரிவிக்கப்பட்டது.",
    noReminders: "நினைவூட்டல்கள் இல்லை. மேலே ஒன்று சேர்க்கவும்!",
    reminderPlaceholder: "எ.கா. இரத்த அழுத்த மருந்து எடு",
    mon: "திங்", tue: "செவ்", wed: "புத", thu: "வியா", fri: "வெள்", sat: "சனி", sun: "ஞாயி",
    recording: "பதிவு",
    livingRoom: "அறை — கேமரா 1",
    articles: "கட்டுரைகள்",
    articlesSectionTitle: "பராமரிப்பாளர் கட்டுரைகள்",
    articlesSubtitle: "LOVOT பராமரிப்பாளர்களுக்கான பயனுள்ள வழிகாட்டிகள்."
  }
};

let currentLang = 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

// ─── State ────────────────────────────────────────────────────────
let reminders = JSON.parse(localStorage.getItem('lovot_reminders') || '[]');
let fallAlertActive = false;
let faceDetectionOn = true;

// Simulated recognized faces
const recognizedFaces = [
  { name: "Ah Ma (张美玲)", relation: "Resident", confidence: 97, emoji: "👵" },
  { name: "David Tan", relation: "Son (Caregiver)", confidence: 92, emoji: "👨" },
  { name: "Nurse Fatimah", relation: "Home Nurse", confidence: 88, emoji: "👩‍⚕️" }
];

// ─── DOM Ready ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCCTV();
  initReminders();
  initFaceRecognition();
  initActivityReport();
  initForum();
  initActivities();
  initArticles();
  initDialectSelector();
  initNavigation();
  initMobileToggle();
  applyTranslations();
});

// ─── Shared tracking state for face detection ───────────────────
// Updated each frame so the HTML overlay can track the person
let _personHeadScreenX = 0;
let _personHeadScreenY = 0;
let _cctvCanvasW = 1;
let _cctvCanvasH = 1;

// ─── CCTV Canvas Simulation (LOVOT First-Person POV) ─────────────
function initCCTV() {
  const canvas = document.getElementById('cctv-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Person movement state
  let personNormX = 0.5;
  let personDir = 1;
  let frameCount = 0;
  let noiseOffset = 0;

  // 360° rotation state
  let currentAngle = 0; // 0, 90, 180, 270
  const angleLabels = {
    0:   '0° — Living Room',
    90:  '90° — Kitchen',
    180: '180° — Bedroom',
    270: '270° — Hallway'
  };

  function updateAngleLabel() {
    const el = document.getElementById('cctv-angle-label');
    if (el) el.textContent = angleLabels[currentAngle] || currentAngle + '°';
  }
  updateAngleLabel();

  // Rotation buttons
  document.getElementById('btn-rotate-left')?.addEventListener('click', () => {
    currentAngle = (currentAngle - 90 + 360) % 360;
    updateAngleLabel();
  });
  document.getElementById('btn-rotate-right')?.addEventListener('click', () => {
    currentAngle = (currentAngle + 90) % 360;
    updateAngleLabel();
  });

  // ── Shared drawing helpers ──
  function drawCeiling(w, h) {
    const cg = ctx.createLinearGradient(0, 0, 0, h * 0.22);
    cg.addColorStop(0, '#12152a');
    cg.addColorStop(1, '#181c33');
    ctx.fillStyle = cg;
    ctx.fillRect(0, 0, w, h * 0.22);
    // Lamp
    ctx.fillStyle = 'rgba(255, 220, 120, 0.06)';
    ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.04, 50, 14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255, 220, 120, 0.15)';
    ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.04, 22, 6, 0, 0, Math.PI * 2); ctx.fill();
  }

  function drawWallAndFloor(w, h, wallColor) {
    ctx.fillStyle = wallColor || '#1a1d2e';
    ctx.fillRect(0, h * 0.12, w, h * 0.53);
    ctx.fillStyle = 'rgba(255,255,255,0.02)';
    ctx.fillRect(0, h * 0.62, w, 4);
    const fg = ctx.createLinearGradient(0, h * 0.65, 0, h);
    fg.addColorStop(0, '#1e2140');
    fg.addColorStop(1, '#15182a');
    ctx.fillStyle = fg;
    ctx.fillRect(0, h * 0.65, w, h * 0.35);
    // Floor lines
    ctx.strokeStyle = 'rgba(255,255,255,0.02)';
    ctx.lineWidth = 1;
    for (let row = 0; row < 5; row++) {
      const fy = h * 0.65 + (h * 0.35) * (row / 5);
      ctx.beginPath(); ctx.moveTo(0, fy); ctx.lineTo(w, fy); ctx.stroke();
    }
  }

  function drawPostProcessing(w, h) {
    // Fisheye
    const fg = ctx.createRadialGradient(w / 2, h * 0.6, w * 0.15, w / 2, h * 0.6, w * 0.72);
    fg.addColorStop(0, 'transparent'); fg.addColorStop(0.85, 'transparent');
    fg.addColorStop(1, 'rgba(0,0,0,0.3)');
    ctx.fillStyle = fg; ctx.fillRect(0, 0, w, h);
    // Horn shadow
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.moveTo(w * 0.46, 0); ctx.lineTo(w * 0.54, 0);
    ctx.lineTo(w * 0.52, h * 0.035); ctx.lineTo(w * 0.48, h * 0.035);
    ctx.closePath(); ctx.fill();
    // Scanlines
    noiseOffset = (noiseOffset + 1) % h;
    ctx.fillStyle = 'rgba(255,255,255,0.008)';
    for (let y = 0; y < h; y += 3) {
      if ((y + noiseOffset) % 6 < 3) ctx.fillRect(0, y, w, 1);
    }
    // Vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, w * 0.2, w / 2, h / 2, w * 0.72);
    vg.addColorStop(0, 'transparent'); vg.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h);
  }

  // ── Room-specific drawing functions ──
  function drawLivingRoom(w, h) {
    // Sofa
    ctx.fillStyle = 'rgba(139, 92, 246, 0.12)';
    roundRect(ctx, w * 0.72, h * 0.30, w * 0.26, h * 0.32, 10); ctx.fill();
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.18)';
    roundRect(ctx, w * 0.72, h * 0.30, w * 0.26, h * 0.32, 10); ctx.stroke();
    ctx.fillStyle = 'rgba(139, 92, 246, 0.07)';
    roundRect(ctx, w * 0.75, h * 0.34, w * 0.08, h * 0.08, 6); ctx.fill();
    roundRect(ctx, w * 0.86, h * 0.34, w * 0.08, h * 0.08, 6); ctx.fill();
    // Side table
    ctx.fillStyle = 'rgba(255, 165, 0, 0.08)';
    roundRect(ctx, w * 0.03, h * 0.38, w * 0.14, h * 0.24, 4); ctx.fill();
    ctx.strokeStyle = 'rgba(255, 165, 0, 0.12)';
    roundRect(ctx, w * 0.03, h * 0.38, w * 0.14, h * 0.24, 4); ctx.stroke();
    ctx.fillStyle = 'rgba(255, 107, 107, 0.25)';
    roundRect(ctx, w * 0.07, h * 0.40, 12, 18, 3); ctx.fill();
    ctx.fillStyle = 'rgba(77, 171, 247, 0.2)';
    roundRect(ctx, w * 0.11, h * 0.42, 8, 14, 2); ctx.fill();
    // Window
    ctx.fillStyle = 'rgba(77, 171, 247, 0.05)';
    ctx.fillRect(w * 0.02, h * 0.06, w * 0.2, h * 0.22);
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.02, h * 0.06, w * 0.2, h * 0.22);
    ctx.beginPath(); ctx.moveTo(w * 0.12, h * 0.06); ctx.lineTo(w * 0.12, h * 0.28);
    ctx.moveTo(w * 0.02, h * 0.17); ctx.lineTo(w * 0.22, h * 0.17); ctx.stroke();
    // TV
    ctx.fillStyle = 'rgba(50, 50, 80, 0.3)';
    roundRect(ctx, w * 0.38, h * 0.15, w * 0.24, h * 0.18, 4); ctx.fill();
    ctx.strokeStyle = 'rgba(100, 100, 150, 0.2)';
    roundRect(ctx, w * 0.38, h * 0.15, w * 0.24, h * 0.18, 4); ctx.stroke();
    // TV screen glow
    ctx.fillStyle = `rgba(100, 140, 200, ${0.03 + Math.sin(frameCount * 0.03) * 0.015})`;
    ctx.fillRect(w * 0.39, h * 0.16, w * 0.22, h * 0.16);
  }

  function drawKitchen(w, h) {
    // Counter
    ctx.fillStyle = 'rgba(180, 140, 100, 0.12)';
    roundRect(ctx, w * 0.05, h * 0.40, w * 0.9, h * 0.22, 6); ctx.fill();
    ctx.strokeStyle = 'rgba(180, 140, 100, 0.18)';
    roundRect(ctx, w * 0.05, h * 0.40, w * 0.9, h * 0.22, 6); ctx.stroke();
    // Cabinets above
    ctx.fillStyle = 'rgba(120, 100, 80, 0.10)';
    roundRect(ctx, w * 0.1, h * 0.10, w * 0.22, h * 0.22, 5); ctx.fill();
    roundRect(ctx, w * 0.38, h * 0.10, w * 0.22, h * 0.22, 5); ctx.fill();
    roundRect(ctx, w * 0.66, h * 0.10, w * 0.22, h * 0.22, 5); ctx.fill();
    ctx.strokeStyle = 'rgba(120, 100, 80, 0.15)';
    roundRect(ctx, w * 0.1, h * 0.10, w * 0.22, h * 0.22, 5); ctx.stroke();
    roundRect(ctx, w * 0.38, h * 0.10, w * 0.22, h * 0.22, 5); ctx.stroke();
    roundRect(ctx, w * 0.66, h * 0.10, w * 0.22, h * 0.22, 5); ctx.stroke();
    // Fridge
    ctx.fillStyle = 'rgba(200, 200, 220, 0.10)';
    roundRect(ctx, w * 0.78, h * 0.14, w * 0.16, h * 0.48, 6); ctx.fill();
    ctx.strokeStyle = 'rgba(200, 200, 220, 0.15)';
    roundRect(ctx, w * 0.78, h * 0.14, w * 0.16, h * 0.48, 6); ctx.stroke();
    // Kettle
    ctx.fillStyle = 'rgba(220, 220, 230, 0.15)';
    ctx.beginPath(); ctx.ellipse(w * 0.25, h * 0.40, 12, 16, 0, 0, Math.PI * 2); ctx.fill();
    // Fruit bowl
    ctx.fillStyle = 'rgba(255, 200, 50, 0.12)';
    ctx.beginPath(); ctx.ellipse(w * 0.50, h * 0.42, 18, 10, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255, 80, 80, 0.15)';
    ctx.beginPath(); ctx.arc(w * 0.48, h * 0.38, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255, 180, 0, 0.15)';
    ctx.beginPath(); ctx.arc(w * 0.53, h * 0.39, 5, 0, Math.PI * 2); ctx.fill();
  }

  function drawBedroom(w, h) {
    // Bed
    ctx.fillStyle = 'rgba(180, 160, 220, 0.10)';
    roundRect(ctx, w * 0.15, h * 0.35, w * 0.70, h * 0.28, 8); ctx.fill();
    ctx.strokeStyle = 'rgba(180, 160, 220, 0.15)';
    roundRect(ctx, w * 0.15, h * 0.35, w * 0.70, h * 0.28, 8); ctx.stroke();
    // Pillow
    ctx.fillStyle = 'rgba(230, 220, 250, 0.12)';
    roundRect(ctx, w * 0.20, h * 0.38, w * 0.16, h * 0.10, 6); ctx.fill();
    roundRect(ctx, w * 0.40, h * 0.38, w * 0.16, h * 0.10, 6); ctx.fill();
    // Blanket pattern
    ctx.fillStyle = 'rgba(200, 180, 240, 0.06)';
    roundRect(ctx, w * 0.18, h * 0.50, w * 0.64, h * 0.10, 4); ctx.fill();
    // Bedside table
    ctx.fillStyle = 'rgba(160, 130, 90, 0.10)';
    roundRect(ctx, w * 0.02, h * 0.38, w * 0.10, h * 0.22, 4); ctx.fill();
    // Lamp on table
    ctx.fillStyle = 'rgba(255, 220, 120, 0.15)';
    ctx.beginPath(); ctx.ellipse(w * 0.07, h * 0.36, 8, 12, 0, Math.PI, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(255, 220, 120, 0.1)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(w * 0.07, h * 0.36); ctx.lineTo(w * 0.07, h * 0.42); ctx.stroke();
    // Window with curtain
    ctx.fillStyle = 'rgba(77, 171, 247, 0.04)';
    ctx.fillRect(w * 0.70, h * 0.06, w * 0.24, h * 0.24);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.70, h * 0.06, w * 0.24, h * 0.24);
    // Curtain stripes
    ctx.fillStyle = 'rgba(180, 160, 220, 0.05)';
    ctx.fillRect(w * 0.70, h * 0.06, w * 0.04, h * 0.24);
    ctx.fillRect(w * 0.90, h * 0.06, w * 0.04, h * 0.24);
  }

  function drawHallway(w, h) {
    // Door (front door)
    ctx.fillStyle = 'rgba(120, 90, 60, 0.15)';
    roundRect(ctx, w * 0.35, h * 0.08, w * 0.30, h * 0.54, 6); ctx.fill();
    ctx.strokeStyle = 'rgba(120, 90, 60, 0.2)';
    roundRect(ctx, w * 0.35, h * 0.08, w * 0.30, h * 0.54, 6); ctx.stroke();
    // Door handle
    ctx.fillStyle = 'rgba(200, 180, 100, 0.3)';
    ctx.beginPath(); ctx.arc(w * 0.60, h * 0.38, 5, 0, Math.PI * 2); ctx.fill();
    // Shoe rack
    ctx.fillStyle = 'rgba(140, 120, 90, 0.08)';
    roundRect(ctx, w * 0.72, h * 0.42, w * 0.22, h * 0.20, 4); ctx.fill();
    ctx.strokeStyle = 'rgba(140, 120, 90, 0.12)';
    roundRect(ctx, w * 0.72, h * 0.42, w * 0.22, h * 0.20, 4); ctx.stroke();
    // Shoes on rack
    ctx.fillStyle = 'rgba(90, 60, 40, 0.2)';
    roundRect(ctx, w * 0.75, h * 0.52, 16, 8, 3); ctx.fill();
    roundRect(ctx, w * 0.82, h * 0.52, 16, 8, 3); ctx.fill();
    // Mirror
    ctx.fillStyle = 'rgba(200, 210, 230, 0.06)';
    roundRect(ctx, w * 0.05, h * 0.10, w * 0.15, h * 0.35, 20); ctx.fill();
    ctx.strokeStyle = 'rgba(200, 210, 230, 0.10)';
    roundRect(ctx, w * 0.05, h * 0.10, w * 0.15, h * 0.35, 20); ctx.stroke();
    // Umbrella stand
    ctx.fillStyle = 'rgba(100, 100, 120, 0.10)';
    roundRect(ctx, w * 0.22, h * 0.42, 14, 20, 4); ctx.fill();
  }

  // ── Person drawing (only in living room view) ──
  function drawPerson(w, h) {
    personNormX += personDir * 0.0008;
    if (personNormX > 0.72 || personNormX < 0.28) personDir *= -1;

    const pCenterX = personNormX * w;
    const sway = Math.sin(frameCount * 0.025) * 3;
    const breathe = Math.sin(frameCount * 0.04) * 1.5;
    const headRadius = 28, torsoW = 56, torsoH = 100;
    const legW = 18, legH = 80, armW = 14, armH = 70;
    const feetY = h * 0.85;
    const torsoTopY = feetY - legH - torsoH;
    const headY = torsoTopY - headRadius * 0.6;
    const walkPhase = Math.sin(frameCount * 0.04) * 4;
    const armSwing = Math.sin(frameCount * 0.04) * 6;

    // Legs
    ctx.fillStyle = 'rgba(70, 75, 100, 0.65)';
    roundRect(ctx, pCenterX - 12 - legW / 2 + sway, feetY - legH + walkPhase, legW, legH, 6); ctx.fill();
    roundRect(ctx, pCenterX + 12 - legW / 2 + sway, feetY - legH - walkPhase, legW, legH, 6); ctx.fill();
    // Shoes
    ctx.fillStyle = 'rgba(90, 60, 40, 0.6)';
    roundRect(ctx, pCenterX - 12 - legW / 2 - 3 + sway, feetY - 10 + walkPhase, legW + 6, 14, 5); ctx.fill();
    roundRect(ctx, pCenterX + 12 - legW / 2 - 3 + sway, feetY - 10 - walkPhase, legW + 6, 14, 5); ctx.fill();
    // Torso
    ctx.fillStyle = 'rgba(100, 149, 237, 0.45)';
    roundRect(ctx, pCenterX - torsoW / 2 + sway, torsoTopY + breathe, torsoW, torsoH, 10); ctx.fill();
    ctx.fillStyle = 'rgba(120, 169, 255, 0.2)';
    ctx.beginPath(); ctx.ellipse(pCenterX + sway, torsoTopY + 10 + breathe, 16, 6, 0, 0, Math.PI); ctx.fill();
    // Arms
    ctx.fillStyle = 'rgba(100, 149, 237, 0.35)';
    roundRect(ctx, pCenterX - torsoW / 2 - armW + sway, torsoTopY + 15 + breathe - armSwing, armW, armH, 5); ctx.fill();
    roundRect(ctx, pCenterX + torsoW / 2 + sway, torsoTopY + 15 + breathe + armSwing, armW, armH, 5); ctx.fill();
    // Hands
    ctx.fillStyle = 'rgba(255, 200, 150, 0.55)';
    ctx.beginPath(); ctx.arc(pCenterX - torsoW / 2 - armW / 2 + sway, torsoTopY + 15 + armH + breathe - armSwing, 7, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(pCenterX + torsoW / 2 + armW / 2 + sway, torsoTopY + 15 + armH + breathe + armSwing, 7, 0, Math.PI * 2); ctx.fill();
    // Head
    ctx.fillStyle = 'rgba(255, 200, 150, 0.65)';
    ctx.beginPath(); ctx.arc(pCenterX + sway, headY + breathe, headRadius, 0, Math.PI * 2); ctx.fill();
    // Hair
    ctx.fillStyle = 'rgba(180, 180, 190, 0.4)';
    ctx.beginPath(); ctx.ellipse(pCenterX + sway, headY - 10 + breathe, headRadius + 2, headRadius * 0.7, 0, Math.PI, Math.PI * 2); ctx.fill();
    // Eyes
    ctx.fillStyle = 'rgba(60, 60, 80, 0.6)';
    ctx.beginPath();
    ctx.arc(pCenterX - 9 + sway, headY - 2 + breathe, 3.5, 0, Math.PI * 2);
    ctx.arc(pCenterX + 9 + sway, headY - 2 + breathe, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(pCenterX - 8 + sway, headY - 3 + breathe, 1.2, 0, Math.PI * 2);
    ctx.arc(pCenterX + 10 + sway, headY - 3 + breathe, 1.2, 0, Math.PI * 2);
    ctx.fill();
    // Mouth
    ctx.strokeStyle = 'rgba(200, 120, 100, 0.4)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(pCenterX + sway, headY + 8 + breathe, 8, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();

    // Update tracking
    _personHeadScreenX = pCenterX + sway;
    _personHeadScreenY = headY + breathe;
  }

  function drawFrame() {
    frameCount++;
    const w = canvas.width;
    const h = canvas.height;
    _cctvCanvasW = w;
    _cctvCanvasH = h;

    // Clear
    ctx.fillStyle = '#0e1020';
    ctx.fillRect(0, 0, w, h);

    // Draw shared elements
    drawCeiling(w, h);
    drawWallAndFloor(w, h);

    // Draw room-specific content based on angle
    const showPerson = (currentAngle === 0);
    switch (currentAngle) {
      case 0:   drawLivingRoom(w, h); break;
      case 90:  drawKitchen(w, h); break;
      case 180: drawBedroom(w, h); break;
      case 270: drawHallway(w, h); break;
    }

    // Person only in living room
    if (showPerson) {
      drawPerson(w, h);
    } else {
      // Hide face box when not in living room
      _personHeadScreenX = -999;
      _personHeadScreenY = -999;
    }

    // Post-processing (fisheye, scanlines, vignette)
    drawPostProcessing(w, h);

    // Camera info
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.font = '11px "Courier New", monospace';
    ctx.fillText('LOVOT POV — ' + (angleLabels[currentAngle] || ''), 16, h - 14);

    // Update face detection
    if (faceDetectionOn) updateFaceBoxes();

    requestAnimationFrame(drawFrame);
  }
  drawFrame();

  // Update timestamp
  function updateTimestamp() {
    const el = document.getElementById('cctv-timestamp');
    if (el) {
      const now = new Date();
      el.textContent = now.toLocaleString('en-SG', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
      });
    }
  }
  setInterval(updateTimestamp, 1000);
  updateTimestamp();

  // Fall simulation button
  document.getElementById('btn-simulate-fall')?.addEventListener('click', simulateFall);
  document.getElementById('btn-dismiss-fall')?.addEventListener('click', dismissFall);
  document.getElementById('btn-toggle-faces')?.addEventListener('click', toggleFaceDetection);

  // Initial face detection boxes
  updateFaceBoxes();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function simulateFall() {
  fallAlertActive = true;
  document.getElementById('fall-alert')?.classList.add('active');
  showToast('🚨', t('fallDetected') + ' — ' + t('caregiverNotified'), 'danger');
}

function dismissFall() {
  fallAlertActive = false;
  document.getElementById('fall-alert')?.classList.remove('active');
  showToast('✅', 'Alert dismissed. Status: Normal.', 'success');
}

function toggleFaceDetection() {
  faceDetectionOn = !faceDetectionOn;
  updateFaceBoxes();
}

function updateFaceBoxes() {
  const overlay = document.getElementById('cctv-overlay');
  if (!overlay) return;

  // Remove existing face boxes
  overlay.querySelectorAll('.face-box').forEach(b => b.remove());

  if (!faceDetectionOn) return;

  // Convert canvas pixel coords to percentage of the overlay container
  const container = overlay.parentElement;
  if (!container) return;
  const cw = container.offsetWidth;
  const ch = container.offsetHeight;

  // Map from canvas coords to container percentage
  const faceBoxW = 68;
  const faceBoxH = 72;
  const headXpx = (_personHeadScreenX / _cctvCanvasW) * cw;
  const headYpx = (_personHeadScreenY / _cctvCanvasH) * ch;

  const div = document.createElement('div');
  div.className = 'face-box';
  div.style.left = (headXpx - faceBoxW / 2) + 'px';
  div.style.top = (headYpx - faceBoxH / 2) + 'px';
  div.style.width = faceBoxW + 'px';
  div.style.height = faceBoxH + 'px';
  div.style.transition = 'left 0.08s linear, top 0.08s linear';
  div.innerHTML = `<span class="face-label">Ah Ma</span>`;
  overlay.appendChild(div);
}

// ─── Reminders ───────────────────────────────────────────────────
function initReminders() {
  renderReminders();

  document.getElementById('reminder-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.querySelector('#reminder-type').value;
    const text = form.querySelector('#reminder-text').value.trim();
    const time = form.querySelector('#reminder-time').value;
    const freq = form.querySelector('#reminder-freq').value;

    if (!text || !time) return;

    reminders.push({ id: Date.now(), type, text, time, freq });
    localStorage.setItem('lovot_reminders', JSON.stringify(reminders));
    renderReminders();
    showToast('✅', `Reminder added: "${text}"`, 'success');
    form.reset();
  });
}

function renderReminders() {
  const list = document.getElementById('reminder-list');
  if (!list) return;

  if (reminders.length === 0) {
    list.innerHTML = `<div class="empty-state"><span class="icon">📋</span>${t('noReminders')}</div>`;
    return;
  }

  const typeIcons = {
    medicine: '💊', selfcare: '🛁', exercise: '🏃', appointment: '🏥', hydration: '💧'
  };

  list.innerHTML = reminders.map(r => `
    <div class="reminder-item" data-id="${r.id}">
      <div class="reminder-icon ${r.type}">${typeIcons[r.type] || '📌'}</div>
      <div class="reminder-info">
        <div class="reminder-text">${r.text}</div>
        <div class="reminder-time">${r.time} · ${t(r.freq) || r.freq}</div>
      </div>
      <button class="reminder-delete" onclick="deleteReminder(${r.id})" title="Delete">✕</button>
    </div>
  `).join('');
}

function deleteReminder(id) {
  reminders = reminders.filter(r => r.id !== id);
  localStorage.setItem('lovot_reminders', JSON.stringify(reminders));
  renderReminders();
}

// ─── Facial Recognition ─────────────────────────────────────────
function initFaceRecognition() {
  renderFaceList();

  document.getElementById('face-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.querySelector('#face-name').value.trim();
    const relation = e.target.querySelector('#face-relation').value.trim();
    if (!name) return;
    recognizedFaces.push({
      name, relation: relation || 'Unknown', confidence: Math.floor(Math.random() * 15) + 80, emoji: '👤'
    });
    renderFaceList();
    showToast('✅', `Face registered: "${name}"`, 'success');
    e.target.reset();
  });
}

function renderFaceList() {
  const list = document.getElementById('face-list');
  if (!list) return;

  list.innerHTML = recognizedFaces.map(f => `
    <div class="face-entry">
      <div class="face-avatar recognized">${f.emoji}</div>
      <div class="face-info">
        <div class="name">${f.name}</div>
        <div class="detail">${f.relation}</div>
      </div>
    </div>
  `).join('');
}

// ─── Activity Report ─────────────────────────────────────────────
function initActivityReport() {
  generateReport();
  document.getElementById('btn-generate-report')?.addEventListener('click', generateReport);
  document.getElementById('btn-export-pdf')?.addEventListener('click', exportReport);
}

function generateReport() {
  // Randomized stats
  const stats = {
    interactions: Math.floor(Math.random() * 30) + 15,
    alerts: Math.floor(Math.random() * 4),
    activeHours: (Math.random() * 6 + 8).toFixed(1),
    mood: Math.floor(Math.random() * 20) + 75,
    idle: (Math.random() * 4 + 3).toFixed(1),
    moving: (Math.random() * 3 + 1.5).toFixed(1),
    social: Math.floor(Math.random() * 10) + 5,
    sleep: Math.floor(Math.random() * 20) + 70,
  };

  document.getElementById('stat-interactions').textContent = stats.interactions;
  document.getElementById('stat-alerts').textContent = stats.alerts;
  document.getElementById('stat-active').textContent = stats.activeHours + 'h';
  document.getElementById('stat-mood').textContent = stats.mood + '%';
  document.getElementById('stat-idle').textContent = stats.idle + 'h';
  document.getElementById('stat-moving').textContent = stats.moving + 'h';
  document.getElementById('stat-social').textContent = stats.social;
  document.getElementById('stat-sleep').textContent = stats.sleep + '%';

  // Time breakdown bar
  renderTimeBreakdown(stats);

  // Chart bars
  const chartContainer = document.getElementById('activity-chart');
  if (!chartContainer) return;

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const colors = ['#ff6b6b', '#f0a500', '#38d9a9', '#4dabf7', '#b197fc', '#ff6b6b', '#f0a500'];

  chartContainer.innerHTML = '';
  days.forEach((day, i) => {
    const height = Math.floor(Math.random() * 70) + 20;
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = '0%';
    bar.style.background = `linear-gradient(180deg, ${colors[i]}, ${colors[i]}88)`;
    bar.setAttribute('data-label', t(day));
    bar.title = `${t(day)}: ${height}% activity`;
    chartContainer.appendChild(bar);

    // Animate in
    setTimeout(() => { bar.style.height = height + '%'; }, i * 100);
  });
}

function renderTimeBreakdown(stats) {
  const container = document.getElementById('time-breakdown');
  const legend = document.getElementById('time-breakdown-legend');
  if (!container || !legend) return;

  const totalHours = 24;
  const sleepH = (stats.sleep / 100 * 8).toFixed(1);
  const idleH = parseFloat(stats.idle);
  const movingH = parseFloat(stats.moving);
  const socialH = (stats.social * 0.25).toFixed(1);
  const otherH = Math.max(0, totalHours - sleepH - idleH - movingH - socialH).toFixed(1);

  const segments = [
    { label: 'Sleep', hours: parseFloat(sleepH), color: '#6366f1' },
    { label: 'Idle/Rest', hours: idleH, color: '#b197fc' },
    { label: 'Movement', hours: movingH, color: '#2ecc71' },
    { label: 'Social', hours: parseFloat(socialH), color: '#f8a4c8' },
    { label: 'Other', hours: parseFloat(otherH), color: '#e2dff0' },
  ];

  container.innerHTML = '';
  segments.forEach((seg, i) => {
    const pct = (seg.hours / totalHours * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = 'tb-segment';
    div.style.width = '0%';
    div.style.background = seg.color;
    div.title = `${seg.label}: ${seg.hours}h (${pct}%)`;
    if (parseFloat(pct) > 8) div.textContent = seg.hours + 'h';
    container.appendChild(div);
    setTimeout(() => { div.style.width = pct + '%'; }, i * 80);
  });

  legend.innerHTML = segments.map(seg =>
    `<span class="legend-item"><span class="legend-dot" style="background:${seg.color}"></span>${seg.label} (${seg.hours}h)</span>`
  ).join('');
}

function exportReport() {
  showToast('📄', 'Activity report exported as PDF (simulated).', 'success');
}

// ─── Community Forum ───────────────────────────────────────────────────────
const forumThreads = [
  {
    id: 1,
    author: 'CaregiverJen',
    avatar: '👩',
    title: 'Feeling guilty about needing a break — anyone else?',
    preview: "I’ve been caring for my mum for 3 years now and some days I just feel so burnt out. I love her but I feel guilty every time I want time for myself. LOVOT has been a godsend because it keeps her company while I take 30 minutes to breathe, but the guilt doesn’t go away...",
    votes: 47,
    commentCount: 12,
    time: '3 hours ago',
    replies: [
      { author: 'DavidT_SG', avatar: '👨', text: "Jen, you are not alone. I went through the exact same thing with my dad. Taking breaks doesn’t mean you love them less — it means you’re making sure you can keep going. You’re doing an amazing job. ❤️", time: '2 hours ago' },
      { author: 'NurseMary', avatar: '👩‍⚕️', text: 'As a home nurse I see this all the time. Caregiver burnout is real and it’s nothing to be ashamed of. The fact that you set up LOVOT to keep her engaged shows how thoughtful you are. Please take that break guilt-free!', time: '1 hour ago' },
      { author: 'AhMa_Lover88', avatar: '🧓', text: 'I felt the same until my support group helped me realise self-care IS caregiving. If you collapse, who looks after mum? LOVOT’s reminders help me structure my breaks now — try setting a daily 30 min \'me time\' reminder!', time: '45 min ago' }
    ]
  },
  {
    id: 2,
    author: 'MrTanKH',
    avatar: '👨‍🦳',
    title: 'How do you manage sundowning with LOVOT?',
    preview: 'My father gets agitated every evening around 5–6pm (sundowning). Has anyone found ways to use LOVOT to help calm them during this time? I’ve tried the music feature but looking for more ideas.',
    votes: 32,
    commentCount: 8,
    time: '6 hours ago',
    replies: [
      { author: 'CaregiverJen', avatar: '👩', text: 'We found that having LOVOT do its companion routine (the gentle rocking and soft sounds) really helps mum settle down. Also keeping the lights warm and dimmed. The CCTV helps me monitor from the kitchen while cooking dinner.', time: '5 hours ago' },
      { author: 'Dr_LimPsych', avatar: '👨‍⚕️', text: 'Sundowning is very common with dementia. Structured routine is key. I recommend using LOVOT’s reminder system to start calming activities at 4:30pm — before the agitation peaks. Consistency helps enormously.', time: '4 hours ago' }
    ]
  },
  {
    id: 3,
    author: 'SarahCares',
    avatar: '👩‍🦰',
    title: 'LOVOT helped us catch a fall we would have missed',
    preview: 'Just want to share a positive story. Last week LOVOT’s fall detection alert went off while I was at work. My neighbour was able to rush over and help my grandmother who had tripped in the bathroom. She’s fine now but without the alert it could have been hours before anyone found her.',
    votes: 89,
    commentCount: 21,
    time: '1 day ago',
    replies: [
      { author: 'TechHelperSG', avatar: '🧑‍💻', text: 'This is exactly why these systems matter. So glad your grandmother is okay! Make sure the emergency contacts are all up to date in the settings.', time: '22 hours ago' },
      { author: 'MrTanKH', avatar: '👨‍🦳', text: 'What a relief! This gives me confidence. I’ve been on the fence about the fall detection but stories like this really show its value.', time: '20 hours ago' },
      { author: 'CaregiverJen', avatar: '👩', text: 'So happy she’s safe, Sarah! 🙏 This community is proof that we’re all in this together.', time: '18 hours ago' }
    ]
  }
];

function initForum() {
  renderForumThreads();
}

function renderForumThreads() {
  const container = document.getElementById('forum-threads');
  if (!container) return;

  container.innerHTML = forumThreads.map(thread => `
    <div class="forum-thread" data-thread-id="${thread.id}">
      <div class="thread-main" onclick="toggleThread(${thread.id})">
        <div class="thread-votes">
          <button class="vote-btn" onclick="event.stopPropagation()">▲</button>
          <span class="vote-count">${thread.votes}</span>
          <button class="vote-btn" onclick="event.stopPropagation()">▼</button>
        </div>
        <div class="thread-avatar">${thread.avatar}</div>
        <div class="thread-content">
          <div class="thread-title">${thread.title}</div>
          <div class="thread-preview">${thread.preview}</div>
          <div class="thread-meta">
            <span class="meta-item">👤 ${thread.author}</span>
            <span class="meta-item">💬 ${thread.commentCount} replies</span>
            <span class="meta-item">🕒 ${thread.time}</span>
          </div>
        </div>
      </div>
      <div class="thread-expand-hint" onclick="toggleThread(${thread.id})">Click to view replies ▾</div>
      <div class="thread-replies" id="replies-${thread.id}">
        ${thread.replies.map(r => `
          <div class="reply-item">
            <div class="reply-avatar">${r.avatar}</div>
            <div class="reply-content">
              <div class="reply-author">${r.author}</div>
              <div class="reply-text">${r.text}</div>
              <div class="reply-time">${r.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleThread(id) {
  const replies = document.getElementById('replies-' + id);
  if (replies) replies.classList.toggle('open');
}

// ─── Available Activities ─────────────────────────────────────────────────
const activitiesData = [
  // Local Events
  { category: 'local', icon: '🎭', title: 'Chingay Parade 2026', location: 'F1 Pit Building, Marina Bay', date: 'Sat, 22 Mar 2026', desc: 'Singapore\'s largest street performance and float parade. Wheelchair-accessible viewing areas available. A vibrant celebration of multicultural heritage.' },
  { category: 'local', icon: '🎶', title: 'Silver Strings Concert', location: 'Esplanade Recital Studio', date: 'Sun, 30 Mar 2026', desc: 'Free concert by the Silver Strings ensemble — senior musicians performing classic Mandarin and English favourites. Great for a relaxing afternoon out.' },
  { category: 'local', icon: '🎨', title: 'Heartlands Art Workshop', location: 'Toa Payoh CC, Blk 190', date: 'Every Wednesday, 10am', desc: 'Weekly watercolour painting class for seniors. Materials provided. A wonderful way to express creativity and socialise with neighbours.' },
  { category: 'local', icon: '🌺', title: 'Gardens by the Bay — Senior Walk', location: 'Gardens by the Bay, South', date: 'Daily, 7am–9am', desc: 'Free morning entry for seniors (60+). Guided walking routes through the Flower Dome with shaded rest stops and benches.' },
  // Nearby Activities
  { category: 'nearby', icon: '🧘', title: 'Tai Chi in the Park', location: 'Bishan-Ang Mo Kio Park', date: 'Tue & Thu, 7:30am', desc: 'Free outdoor Tai Chi sessions led by certified instructors. Suitable for all mobility levels. Gentle exercise that improves balance and reduces fall risk.' },
  { category: 'nearby', icon: '🎲', title: 'Mahjong Social Club', location: 'Void Deck, Blk 123 Toa Payoh', date: 'Mon, Wed, Fri, 2pm–5pm', desc: 'Community mahjong sessions for seniors. Great cognitive exercise and social bonding. Tea and snacks provided by volunteers.' },
  { category: 'nearby', icon: '📚', title: 'Library Reading Circle', location: 'Toa Payoh Public Library', date: 'Every Saturday, 10:30am', desc: 'Weekly reading and discussion group. Large-print books available. A relaxed space to share stories and make friends.' },
  { category: 'nearby', icon: '🍳', title: 'Cook & Bond: Heritage Recipes', location: 'Bishan CC Kitchen Studio', date: 'First Sunday of each month', desc: 'Seniors teach their heritage recipes to younger volunteers. A beautiful intergenerational bonding activity.' },
  // Overseas Travel
  { category: 'overseas', icon: '⛩️', title: 'Cameron Highlands Retreat', location: 'Pahang, Malaysia', date: '5–7 Apr 2026 (3D2N)', desc: 'Gentle senior-friendly tour of tea plantations, strawberry farms, and local markets. Cool climate, slow pace, wheelchair-accessible transport.' },
  { category: 'overseas', icon: '🏯', title: 'Kyoto Cherry Blossom Tour', location: 'Kyoto, Japan', date: '10–16 Apr 2026 (7D6N)', desc: 'Guided senior tour with temple visits, tea ceremonies, and cherry blossom viewing. Includes medical escort and accessibility support.' },
  { category: 'overseas', icon: '🏖️', title: 'Bali Wellness Retreat', location: 'Ubud, Bali, Indonesia', date: '1–5 May 2026 (5D4N)', desc: 'Spa, yoga, and relaxation retreat designed for seniors. Gentle activities, nutritious meals, and beautiful scenery.' },
  { category: 'overseas', icon: '🌊', title: 'Penang Heritage & Food Tour', location: 'Georgetown, Penang, Malaysia', date: '20–22 May 2026 (3D2N)', desc: 'Explore UNESCO heritage sites, hawker food tours, and Peranakan culture. Flat terrain, no strenuous walking required.' }
];

let currentActivityCategory = 'local';

function initActivities() {
  renderActivities();

  document.querySelectorAll('.activity-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.activity-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentActivityCategory = tab.getAttribute('data-category');
      renderActivities();
    });
  });
}

function renderActivities() {
  const grid = document.getElementById('activities-grid');
  if (!grid) return;

  const filtered = activitiesData.filter(a => a.category === currentActivityCategory);

  grid.innerHTML = filtered.map(evt => `
    <div class="event-card">
      <div class="event-icon">${evt.icon}</div>
      <div class="event-title">${evt.title}</div>
      <div class="event-location">📍 ${evt.location}</div>
      <div class="event-date">📅 ${evt.date}</div>
      <div class="event-desc">${evt.desc}</div>
      <button class="event-action">Learn More →</button>
    </div>
  `).join('');
}

// ─── Articles ─────────────────────────────────────────────────────
const articlesData = [
  {
    icon: '💊',
    tag: 'Health',
    title: 'Managing Medication Reminders with LOVOT',
    excerpt: 'Learn how to set up daily medication schedules so LOVOT can gently remind your loved one at the right times. Includes tips for multi-dose routines and tracking adherence.',
    date: '20 Mar 2026',
  },
  {
    icon: '🤝',
    tag: 'Companionship',
    title: 'How LOVOT Reduces Loneliness in Seniors',
    excerpt: 'Research shows companion robots significantly reduce feelings of isolation. Discover how LOVOT\'s warmth and responsiveness makes a meaningful difference in daily wellbeing.',
    date: '15 Mar 2026',
  },
  {
    icon: '🛡️',
    tag: 'Safety',
    title: 'Fall Detection: What Caregivers Need to Know',
    excerpt: 'LOVOT\'s CCTV monitoring can alert you to potential falls in real time. This guide covers setup, sensitivity tuning, and what to do when an alert triggers.',
    date: '10 Mar 2026',
  },
  {
    icon: '🧠',
    tag: 'Wellness',
    title: 'Cognitive Stimulation Activities with LOVOT',
    excerpt: 'Keep your loved one mentally active with LOVOT-assisted activities: storytelling prompts, simple memory games, and daily trivia sessions tailored for seniors.',
    date: '5 Mar 2026',
  },
  {
    icon: '👨‍👩‍👧',
    tag: 'Family',
    title: 'Staying Connected: Remote Caregiving Tips',
    excerpt: 'Even when you can\'t be there in person, LOVOT helps bridge the distance. Learn to use the dashboard, call features, and activity reports to stay informed and connected.',
    date: '28 Feb 2026',
  },
  {
    icon: '🌙',
    tag: 'Health',
    title: 'Improving Sleep Quality for Elderly Loved Ones',
    excerpt: 'LOVOT can help establish calming nighttime routines. This article explores gentle sleep hygiene practices and how to use reminders to support consistent sleep schedules.',
    date: '20 Feb 2026',
  },
];

function initArticles() {
  renderArticles();
}

function renderArticles() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  grid.innerHTML = articlesData.map(article => `
    <div class="article-card">
      <div class="article-card-image">${article.icon}</div>
      <div class="article-card-body">
        <span class="article-card-tag">${article.tag}</span>
        <div class="article-card-title">${article.title}</div>
        <div class="article-card-excerpt">${article.excerpt}</div>
        <div class="article-card-footer">
          <span class="article-card-date">📅 ${article.date}</span>
          <button class="article-card-readmore">Read More</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ─── Dialect Selector ────────────────────────────────────────────
function initDialectSelector() {
  const select = document.getElementById('dialect-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    currentLang = e.target.value;
    applyTranslations();
    renderReminders();
    generateReport(); // re-render chart labels
    renderFaceList();
  });
}

function applyTranslations() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else if (el.tagName === 'OPTION') {
      el.textContent = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  // Update page title
  document.title = `LOVOT — ${t('pageTitle')}`;
}

// ─── Navigation ──────────────────────────────────────────────────
function initNavigation() {
  document.querySelectorAll('.nav-link[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');

      // Active state
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Scroll to section
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Close mobile sidebar
      document.querySelector('.sidebar')?.classList.remove('open');
    });
  });
}

// ─── Mobile Toggle ───────────────────────────────────────────────
function initMobileToggle() {
  document.getElementById('mobile-toggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.toggle('open');
  });
}

// ─── Toast Notifications ─────────────────────────────────────────
function showToast(icon, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
    <button class="toast-dismiss" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(toast);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}
