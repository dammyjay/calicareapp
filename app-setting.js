// // =============================
// // app-settings.js
// // =============================

// // ---------- THEME HANDLING ----------
// // =============================
// // app-settings.js (Final Version)
// // =============================

// // ---------- THEME ----------
// function toggleTheme() {
//   const currentTheme = localStorage.getItem("theme") || "light";
//   const newTheme = currentTheme === "dark" ? "light" : "dark";
//   localStorage.setItem("theme", newTheme);
//   applyTheme(newTheme);
// }

// function applyTheme(theme) {
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//     document.body.classList.add("dark-mode");
//     document.body.style.backgroundColor = "#1e1e1e";
//   } else {
//     document.documentElement.classList.remove("dark");
//     document.body.classList.remove("dark-mode");
//     document.body.style.backgroundColor = "#f3fbfb";
//   }
// }

// // ---------- LANGUAGE ----------
// function setLanguage(lang) {
//   localStorage.setItem("language", lang);
//   applyTranslations(lang);
// }

// const translations = {
//   en: {
//     // Dashboard / Settings
//     profile: "Profile",
//     personalInfo: "Personal Information",
//     username: "Username",
//     email: "Email",
//     phone: "Phone",
//     gender: "Gender",
//     setting: "Setting",
//     back: "Back to Dashboard",
//     logout: "Logout",

//     // Login Page
//     login_title: "Login",
//     login_heading: "Welcome Back",
//     password: "Password",
//     login_button: "Login",
//   },
//   es: {
//     profile: "Perfil",
//     personalInfo: "Información Personal",
//     username: "Nombre de usuario",
//     email: "Correo electrónico",
//     phone: "Teléfono",
//     gender: "Género",
//     setting: "Configuración",
//     back: "Volver al Panel",
//     logout: "Cerrar sesión",

//     login_title: "Iniciar sesión",
//     login_heading: "Bienvenido de nuevo",
//     password: "Contraseña",
//     login_button: "Acceder",
//   },
//   fr: {
//     profile: "Profil",
//     personalInfo: "Informations personnelles",
//     username: "Nom d'utilisateur",
//     email: "E-mail",
//     phone: "Téléphone",
//     gender: "Genre",
//     setting: "Paramètres",
//     back: "Retour au tableau de bord",
//     logout: "Se déconnecter",

//     login_title: "Connexion",
//     login_heading: "Bon retour",
//     password: "Mot de passe",
//     login_button: "Se connecter",
//   },
// };


// function applyTranslations(lang) {
//   const t = translations[lang] || translations.en;
//   document.querySelectorAll("[data-i18n]").forEach(el => {
//     const key = el.getAttribute("data-i18n");
//     if (t[key]) el.textContent = t[key];
//   });
// }

// // ---------- INITIALIZE ----------
// (function initSettings() {
//   // Apply saved theme
//   const savedTheme = localStorage.getItem("theme") || "light";
//   applyTheme(savedTheme);

//   // Apply saved language
//   const savedLang = localStorage.getItem("language") || "en";
//   applyTranslations(savedLang);

//   // Attach events if controls exist (Settings page only)
//   const themeToggle = document.getElementById("themeToggle");
//   if (themeToggle) {
//     themeToggle.checked = savedTheme === "dark";
//     themeToggle.addEventListener("change", toggleTheme);
//   }

//   const langSelect = document.getElementById("languageSelect");
//   if (langSelect) {
//     langSelect.value = savedLang;
//     langSelect.addEventListener("change", e => setLanguage(e.target.value));
//   }
// })();



// =============================
// app-settings.js (Global Language + Theme)
// =============================

// ---------- CLEANUP OLD KEYS ----------
localStorage.removeItem("darkmode");
localStorage.removeItem("lang");

// ---------- THEME ----------
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#1e1e1e";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = "#f3fbfb";
  }
}

// ---------- LANGUAGE ----------
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  applyTranslations(lang);
}

// ---------- TRANSLATIONS ----------
const translations = {
  en: {
    profile: "Profile",
    personalInfo: "Personal Information",
    username: "Username",
    email: "Email",
    phone: "Phone",
    gender: "Gender",
    setting: "Settings",
    back: "Back to Dashboard",
    logout: "Logout",

    login_title: "Login",
    login_heading: "Welcome Back",
    password: "Password",
    login_button: "Login",
    rememberMe: "Remember me",
    forgotPassword: "Forgot Password?",
    signup: "Sign up",

    notifications: "In-App Notifications",
    notifyHelp: "Receive notifications",
    reminders: "Reminders",
    reminderHelp: "Get daily reminders",
    darkMode: "Dark Mode",
    darkModeHelp: "Switch between light and dark theme",
    language: "Language",
  },
  fr: {
    profile: "Profil",
    personalInfo: "Informations personnelles",
    username: "Nom d'utilisateur",
    email: "E-mail",
    phone: "Téléphone",
    gender: "Genre",
    setting: "Paramètres",
    back: "Retour au tableau de bord",
    logout: "Se déconnecter",

    login_title: "Connexion",
    login_heading: "Bon retour",
    password: "Mot de passe",
    login_button: "Se connecter",
    rememberMe: "Souviens-toi de moi",
    forgotPassword: "Mot de passe oublié ?",
    signup: "S'inscrire",

    notifications: "Notifications intégrées",
    notifyHelp: "Recevoir des notifications",
    reminders: "Rappels",
    reminderHelp: "Recevez des rappels quotidiens",
    darkMode: "Mode sombre",
    darkModeHelp: "Basculer entre clair et sombre",
    language: "Langue",
  },
  yo: {
    profile: "Àwòrán ara ẹni",
    personalInfo: "Alaye ti ara ẹni",
    username: "Orúkọ olumulo",
    email: "Imeeli",
    phone: "Foonu",
    gender: "Ìbálòpọ̀",
    setting: "Eto",
    back: "Pada si Dasibodu",
    logout: "Jade",

    login_title: "Wọle",
    login_heading: "Kaabọ Pada",
    password: "Ọrọ aṣínà",
    login_button: "Wọle",
    rememberMe: "Ranti mi",
    forgotPassword: "Gbagbe Ọrọ aṣínà?",
    signup: "Forukọsilẹ",

    notifications: "Ifohunsafẹfẹ inu",
    notifyHelp: "Gba awọn ifitonileti",
    reminders: "Awọn ìrántí",
    reminderHelp: "Gba awọn ìrántí ojoojumọ",
    darkMode: "Ìpo Dúdú",
    darkModeHelp: "Yi laarin ìmọlẹ ati dídùdú",
    language: "Èdè",
  },
  ha: {
    profile: "Bayanan mai amfani",
    personalInfo: "Bayanan sirri",
    username: "Sunan mai amfani",
    email: "Imel",
    phone: "Waya",
    gender: "Jinsi",
    setting: "Saituna",
    back: "Koma zuwa Dashboard",
    logout: "Fita",

    login_title: "Shiga",
    login_heading: "Barka da dawowa",
    password: "Kalmar sirri",
    login_button: "Shiga",
    rememberMe: "Tuna ni",
    forgotPassword: "Ka manta kalmar sirri?",
    signup: "Yi rijista",

    notifications: "Sanarwa na ciki",
    notifyHelp: "Karɓi sanarwa",
    reminders: "Tunatarwa",
    reminderHelp: "Samu tunatarwa na yau da kullun",
    darkMode: "Yanayin Duɗi",
    darkModeHelp: "Canza haske zuwa duɗi",
    language: "Harshe",
  },
  ig: {
    profile: "Profaịlụ",
    personalInfo: "Ozi nke onwe",
    username: "Aha ojii",
    email: "Email",
    phone: "Ekwentị",
    gender: "Okike",
    setting: "Ntọala",
    back: "Laghachi na Dashboard",
    logout: "Pụọ",

    login_title: "Banye",
    login_heading: "Nnọọ na azụ",
    password: "Okwuntughe",
    login_button: "Banye",
    rememberMe: "Cheta m",
    forgotPassword: "Chefuru okwuntughe?",
    signup: "Debanye aha",

    notifications: "Nkwupụta n'ime",
    notifyHelp: "Nnata nkwupụta",
    reminders: "Ncheta",
    reminderHelp: "Nweta ncheta kwa ụbọchị",
    darkMode: "Ọnọdụ ọchịchịrị",
    darkModeHelp: "Gbanwee ọkụ na ọchịchịrị",
    language: "Asụsụ",
  },
  zh: {
    profile: "个人资料",
    personalInfo: "个人信息",
    username: "用户名",
    email: "电子邮件",
    phone: "电话",
    gender: "性别",
    setting: "设置",
    back: "返回仪表板",
    logout: "退出登录",

    login_title: "登录",
    login_heading: "欢迎回来",
    password: "密码",
    login_button: "登录",
    rememberMe: "记住我",
    forgotPassword: "忘记密码？",
    signup: "注册",

    notifications: "内置通知",
    notifyHelp: "接收通知提醒",
    reminders: "提醒",
    reminderHelp: "每天获取提醒",
    darkMode: "深色模式",
    darkModeHelp: "在明亮和深色主题之间切换",
    language: "语言",
  },
};

// ---------- APPLY TRANSLATIONS ----------
function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
}

// ---------- INITIALIZE ----------
(function initSettings() {
  // Apply saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Apply saved language
  const savedLang = localStorage.getItem("language") || "en";
  applyTranslations(savedLang);

  // Theme toggle (support both IDs)
  const themeToggle =
    document.getElementById("themeToggle") ||
    document.getElementById("darkToggle");
  if (themeToggle) {
    themeToggle.checked = savedTheme === "dark";
    themeToggle.addEventListener("change", toggleTheme);
  }

  // Language select
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", (e) =>
      setLanguage(e.target.value)
    );
  }

  // ---------- LISTEN FOR LANGUAGE CHANGES FROM OTHER PAGES ----------
  window.addEventListener("storage", (e) => {
    if (e.key === "language") {
      applyTranslations(e.newValue);
      if (langSelect) langSelect.value = e.newValue;
    }
    if (e.key === "theme") {
      applyTheme(e.newValue);
      if (themeToggle)
        themeToggle.checked = e.newValue === "dark";
    }
  });
})();
