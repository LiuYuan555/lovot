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
    generateReport: "Generate Report",
    exportPdf: "Export PDF",
    weeklyActivity: "Weekly Activity Overview",
    fallDetected: "FALL DETECTED",
    fallMessage: "Possible fall detected in living room. Caregiver notified.",
    dismiss: "Dismiss",
    caregiverNotified: "Caregiver has been notified via SMS & app push notification.",
    noReminders: "No reminders yet. Add one above!",
    reminderPlaceholder: "e.g. Take blood pressure medicine",
    mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
    recording: "REC",
    livingRoom: "Living Room — Camera 1"
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
    livingRoom: "客厅 — 摄像头 1"
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
    livingRoom: "客厅 — 摄像机 1"
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
    livingRoom: "客厅 — 摄像头 1"
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
    livingRoom: "客厅 — 镜头 1"
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
    livingRoom: "Ruang Tamu — Kamera 1"
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
    livingRoom: "அறை — கேமரா 1"
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
  div.innerHTML = `<span class="face-label">Ah Ma (97%)</span>`;
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
      <div class="confidence-bar">
        <div class="confidence-fill" style="width: ${f.confidence}%"></div>
      </div>
      <span class="confidence-text">${f.confidence}%</span>
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
  };

  document.getElementById('stat-interactions').textContent = stats.interactions;
  document.getElementById('stat-alerts').textContent = stats.alerts;
  document.getElementById('stat-active').textContent = stats.activeHours + 'h';
  document.getElementById('stat-mood').textContent = stats.mood + '%';

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

function exportReport() {
  showToast('📄', 'Activity report exported as PDF (simulated).', 'success');
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
