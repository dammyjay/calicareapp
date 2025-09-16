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

// const translations = {
//   en: {
//     profile: "Profile",
//     personalInfo: "Personal Information",
//     username: "Username",
//     email: "Email",
//     phone: "Phone",
//     gender: "Gender",
//     setting: "Settings",
//     back: "Back to Dashboard",
//     logout: "Logout",

//     login_title: "Login",
//     welcomeBack: "Welcome Back!",
//     enterDetails: "PLEASE ENTER YOUR DETAILS",
//     email_placeholder: "Email",
//     password: "Password",
//     password_placeholder: "Password",
//     login_button: "Login",
//     rememberMe: "Remember me",
//     forgotPassword: "Forgot Password?",
//     dontHaveAccount: "Don't have an account?",
//     signup: "Sign up",
//     loginWithFacebook: "Login with Facebook",
//     loginWithGoogle: "Login with Google",

//     notifications: "In-App Notifications",
//     notifyHelp: "Receive notifications",
//     reminders: "Reminders",
//     reminderHelp: "Get daily reminders",
//     darkMode: "Dark Mode",
//     darkModeHelp: "Switch between light and dark theme",
//     language: "Language",
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
//     welcomeBack: "Bon retour!",
//     enterDetails: "VEUILLEZ ENTRER VOS INFORMATIONS",
//     email_placeholder: "E-mail",
//     password: "Mot de passe",
//     password_placeholder: "Mot de passe",
//     login_button: "Se connecter",
//     rememberMe: "Souviens-toi de moi",
//     forgotPassword: "Mot de passe oublié ?",
//     dontHaveAccount: "Vous n'avez pas de compte ?",
//     signup: "S'inscrire",
//     loginWithFacebook: "Se connecter avec Facebook",
//     loginWithGoogle: "Se connecter avec Google",

//     notifications: "Notifications intégrées",
//     notifyHelp: "Recevoir des notifications",
//     reminders: "Rappels",
//     reminderHelp: "Recevez des rappels quotidiens",
//     darkMode: "Mode sombre",
//     darkModeHelp: "Basculer entre clair et sombre",
//     language: "Langue",
//   },
//   yo: {
//     profile: "Àwòrán ara ẹni",
//     personalInfo: "Alaye ti ara ẹni",
//     username: "Orúkọ olumulo",
//     email: "Imeeli",
//     phone: "Foonu",
//     gender: "Ìbálòpọ̀",
//     setting: "Eto",
//     back: "Pada si Dasibodu",
//     logout: "Jade",

//     login_title: "Wọle",
//     welcomeBack: "Kaabọ Pada!",
//     enterDetails: "JỌ̀WỌ́ TẸ ÀLÁYÉ RẸ",
//     email_placeholder: "Imeeli",
//     password: "Ọrọ aṣínà",
//     password_placeholder: "Ọrọ aṣínà",
//     login_button: "Wọle",
//     rememberMe: "Ranti mi",
//     forgotPassword: "Gbagbe Ọrọ aṣínà?",
//     dontHaveAccount: "Ṣe o kò ní àkọọlẹ kan?",
//     signup: "Forukọsilẹ",
//     loginWithFacebook: "Wọle pẹ̀lú Facebook",
//     loginWithGoogle: "Wọle pẹ̀lú Google",

//     notifications: "Ifohunsafẹfẹ inu",
//     notifyHelp: "Gba awọn ifitonileti",
//     reminders: "Awọn ìrántí",
//     reminderHelp: "Gba awọn ìrántí ojoojumọ",
//     darkMode: "Ìpo Dúdú",
//     darkModeHelp: "Yi laarin ìmọlẹ ati dídùdú",
//     language: "Èdè",
//   },
//   ha: {
//     profile: "Bayanan mai amfani",
//     personalInfo: "Bayanan sirri",
//     username: "Sunan mai amfani",
//     email: "Imel",
//     phone: "Waya",
//     gender: "Jinsi",
//     setting: "Saituna",
//     back: "Koma zuwa Dashboard",
//     logout: "Fita",

//     login_title: "Shiga",
//     welcomeBack: "Barka da dawowa!",
//     enterDetails: "DA FATA KA SHIGA DA BAYANANKA",
//     email_placeholder: "Imel",
//     password: "Kalmar sirri",
//     password_placeholder: "Kalmar sirri",
//     login_button: "Shiga",
//     rememberMe: "Tuna ni",
//     forgotPassword: "Ka manta kalmar sirri?",
//     dontHaveAccount: "Ba ku da asusu?",
//     signup: "Yi rijista",
//     loginWithFacebook: "Shiga da Facebook",
//     loginWithGoogle: "Shiga da Google",

//     notifications: "Sanarwa na ciki",
//     notifyHelp: "Karɓi sanarwa",
//     reminders: "Tunatarwa",
//     reminderHelp: "Samu tunatarwa na yau da kullun",
//     darkMode: "Yanayin Duɗi",
//     darkModeHelp: "Canza haske zuwa duɗi",
//     language: "Harshe",
//   },
//   ig: {
//     profile: "Profaịlụ",
//     personalInfo: "Ozi nke onwe",
//     username: "Aha ojii",
//     email: "Email",
//     phone: "Ekwentị",
//     gender: "Okike",
//     setting: "Ntọala",
//     back: "Laghachi na Dashboard",
//     logout: "Pụọ",

//     login_title: "Banye",
//     welcomeBack: "Nnọọ na azụ!",
//     enterDetails: "BIKO TINYE NKỌWA GI",
//     email_placeholder: "Email",
//     password: "Okwuntughe",
//     password_placeholder: "Okwuntughe",
//     login_button: "Banye",
//     rememberMe: "Cheta m",
//     forgotPassword: "Chefuru okwuntughe?",
//     dontHaveAccount: "Ị nweghị akaụntụ?",
//     signup: "Debanye aha",
//     loginWithFacebook: "Banye na Facebook",
//     loginWithGoogle: "Banye na Google",

//     notifications: "Nkwupụta n'ime",
//     notifyHelp: "Nnata nkwupụta",
//     reminders: "Ncheta",
//     reminderHelp: "Nweta ncheta kwa ụbọchị",
//     darkMode: "Ọnọdụ ọchịchịrị",
//     darkModeHelp: "Gbanwee ọkụ na ọchịchịrị",
//     language: "Asụsụ",
//   },
//   zh: {
//     profile: "个人资料",
//     personalInfo: "个人信息",
//     username: "用户名",
//     email: "电子邮件",
//     phone: "电话",
//     gender: "性别",
//     setting: "设置",
//     back: "返回仪表板",
//     logout: "退出登录",

//     login_title: "登录",
//     welcomeBack: "欢迎回来！",
//     enterDetails: "请输入您的信息",
//     email_placeholder: "电子邮件",
//     password: "密码",
//     password_placeholder: "密码",
//     login_button: "登录",
//     rememberMe: "记住我",
//     forgotPassword: "忘记密码？",
//     dontHaveAccount: "没有账户？",
//     signup: "注册",
//     loginWithFacebook: "使用 Facebook 登录",
//     loginWithGoogle: "使用 Google 登录",

//     notifications: "内置通知",
//     notifyHelp: "接收通知提醒",
//     reminders: "提醒",
//     reminderHelp: "每天获取提醒",
//     darkMode: "深色模式",
//     darkModeHelp: "在明亮和深色主题之间切换",
//     language: "语言",
//   },
// };

// =============================
// translations.js (Complete)
// =============================

const translations = {
  en: {
    back: "Go Back",
    logout: "Logout",
    login: "Login",
    signup: "Sign up",
    profile: "Profile",

    welcome: "Welcome Onboard!",
    companyName: "Calicare",
    vision: "Empowering health through technology",
    getStarted: "Get Started",

    login_title: "Login",
    welcomeBack: "Welcome Back!",
    enterDetails: "Please enter your details",
    email: "Email",
    email_placeholder: "Enter your email",
    password: "Password",
    password_placeholder: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot Password?",
    dontHaveAccount: "Don't have an account?",
    login_button: "Login",

    signup_title: "Signup",
    fullname: "Full Name",
    fullname_placeholder: "Enter full name",
    phone: "Phone",
    phone_placeholder: "Enter phone number",
    gender: "Gender",
    upload: "Upload Profile Picture",
    agree: "I agree to the",
    terms_condition: "Terms and Conditions",
    already_have: "Already have an account?",
    verify_text:
      "Please check your email for verification OTP sent and enter it below.",
    spam: "Check your spam folder if you don’t see it in inbox.",
    verify_btn: "Verify OTP",

    reset_title: "Reset Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    updatePassword: "Update Password",

    setting: "Settings",
    notifications: "In-App Notifications",
    notifyHelp: "Receive notifications",
    reminder: "Reminder Alerts",
    reminderHelp: "Set reminders",
    darkMode: "Dark Mode",
    darkHelp: "Switch between light and dark theme",
    language: "Language",
    langHelp: "Select your preferred language",
    connect: "Device Connection",
    connectHelp: "Connect your device",
    export: "Export Data",
    exportHelp: "Share your data",
    about: "About Calicare",
    aboutHelp: "Learn more about us",
    exportBtn: "Export health Data",
    aboutBtn: "Learn More",

    tutorials: "Exercise Tutorials",
    searchPlaceholder: "Search exercises...",
    categories: "All Categories",
    neck: "Neck",
    shoulder: "Shoulder",
    back: "Back",
    legs: "Legs",
    products: "Products",
    prev: "Previous",
    next: "Next",

    liveReadings: "Live Readings",
    username: "Username",
    emg: "EMG Reading",
    deviceId: "Device ID",
    deviceStat: "Device Status",
    connectDevice: "Connect Device",
    exportPDF: "Export PDF",
    exportCSV: "Export CSV",

    admin: "Admin Dashboard",
    users: "Users",
    devices: "Devices",
    upload: "Upload",
    dashboard: "Dashboard",
    welcomeAdmin: "Welcome, Admin!",
    id: "ID",
    profilePicture: "Profile Picture",
    name: "Name",
    role: "Role",
    genderCol: "Gender",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
  },

  fr: {
    back: "Retour",
    logout: "Se déconnecter",
    login: "Connexion",
    signup: "S'inscrire",
    profile: "Profil",

    welcome: "Bienvenue à bord!",
    companyName: "Calicare",
    vision: "Autonomiser la santé grâce à la technologie",
    getStarted: "Commencer",

    login_title: "Connexion",
    welcomeBack: "Bon retour!",
    enterDetails: "Veuillez entrer vos informations",
    email: "E-mail",
    email_placeholder: "Entrez votre e-mail",
    password: "Mot de passe",
    password_placeholder: "Entrez votre mot de passe",
    rememberMe: "Souviens-toi de moi",
    forgotPassword: "Mot de passe oublié?",
    dontHaveAccount: "Pas encore de compte?",
    login_button: "Se connecter",

    signup_title: "Inscription",
    fullname: "Nom complet",
    fullname_placeholder: "Entrez le nom complet",
    phone: "Téléphone",
    phone_placeholder: "Entrez le numéro de téléphone",
    gender: "Genre",
    upload: "Télécharger une photo de profil",
    agree: "J'accepte les",
    terms_condition: "Conditions d'utilisation",
    already_have: "Vous avez déjà un compte?",
    verify_text:
      "Veuillez vérifier votre e-mail pour l'OTP et entrez-le ci-dessous.",
    spam: "Vérifiez votre dossier spam si vous ne le voyez pas.",
    verify_btn: "Vérifier OTP",

    reset_title: "Réinitialiser le mot de passe",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    updatePassword: "Mettre à jour le mot de passe",

    setting: "Paramètres",
    notifications: "Notifications intégrées",
    notifyHelp: "Recevoir des notifications",
    reminders: "Rappels",
    reminderHelp: "Recevez des rappels quotidiens",
    darkMode: "Mode sombre",
    darkModeHelp: "Changer entre clair et sombre",
    language: "Langue",
    langHelp: "Sélectionnez votre langue préférée",
    connect: "Connexion de l'appareil",
    connectHelp: "Connectez votre appareil",
    export: "Exporter les données",
    exportHelp: "Partager vos données",
    about: "À propos de Calicare",
    aboutHelp: "En savoir plus sur nous",
    exportBtn: "Exporter les données",
    aboutBtn: "En savoir plus",

    tutorials: "Tutoriels d'exercice",
    searchPlaceholder: "Rechercher des exercices...",
    categories: "Toutes catégories",
    neck: "Cou",
    shoulder: "Épaule",
    back: "Dos",
    legs: "Jambes",
    products: "Produits",
    prev: "Précédent",
    next: "Suivant",

    liveReadings: "Lectures en direct",
    username: "Nom d'utilisateur",
    emg: "Lecture EMG",
    deviceId: "ID de l'appareil",
    deviceStat: "Statut de l'appareil",
    connectDevice: "Connecter l'appareil",
    exportPDF: "Exporter en PDF",
    exportCSV: "Exporter en CSV",

    admin: "Tableau de bord administrateur",
    users: "Utilisateurs",
    devices: "Appareils",
    upload: "Téléverser",
    dashboard: "Tableau de bord",
    welcomeAdmin: "Bienvenue, Administrateur!",
    id: "ID",
    profilePicture: "Photo de profil",
    name: "Nom",
    role: "Rôle",
    genderCol: "Genre",
    actions: "Actions",
    edit: "Modifier",
    delete: "Supprimer",
  },

  es: {
    back: "Regresar",
    logout: "Cerrar sesión",
    login: "Iniciar sesión",
    signup: "Registrarse",
    profile: "Perfil",

    welcome: "¡Bienvenido a bordo!",
    companyName: "Calicare",
    vision: "Empoderando la salud a través de la tecnología",
    getStarted: "Comenzar",

    login_title: "Iniciar sesión",
    welcomeBack: "¡Bienvenido de nuevo!",
    enterDetails: "Por favor ingrese sus datos",
    email: "Correo electrónico",
    email_placeholder: "Ingrese su correo electrónico",
    password: "Contraseña",
    password_placeholder: "Ingrese su contraseña",
    rememberMe: "Recuérdame",
    forgotPassword: "¿Olvidaste tu contraseña?",
    dontHaveAccount: "¿No tienes una cuenta?",
    login_button: "Acceder",

    signup_title: "Registro",
    fullname: "Nombre completo",
    fullname_placeholder: "Ingrese nombre completo",
    phone: "Teléfono",
    phone_placeholder: "Ingrese número de teléfono",
    gender: "Género",
    upload: "Subir foto de perfil",
    agree: "Acepto los",
    terms_condition: "Términos y Condiciones",
    already_have: "¿Ya tienes una cuenta?",
    verify_text:
      "Por favor revisa tu correo para el OTP de verificación y escríbelo abajo.",
    spam: "Revisa tu carpeta de spam si no lo ves en la bandeja de entrada.",
    verify_btn: "Verificar OTP",

    reset_title: "Restablecer contraseña",
    newPassword: "Nueva contraseña",
    confirmPassword: "Confirmar contraseña",
    updatePassword: "Actualizar contraseña",

    setting: "Configuración",
    notifications: "Notificaciones en la aplicación",
    notifyHelp: "Recibir notificaciones",
    reminders: "Recordatorios",
    reminderHelp: "Recibe recordatorios diarios",
    darkMode: "Modo oscuro",
    darkModeHelp: "Cambiar entre tema claro y oscuro",
    language: "Idioma",
    langHelp: "Selecciona tu idioma preferido",
    connect: "Conexión de dispositivo",
    connectHelp: "Conecta tu dispositivo",
    export: "Exportar datos",
    exportHelp: "Comparte tus datos",
    about: "Acerca de Calicare",
    aboutHelp: "Aprende más sobre nosotros",

    tutorials: "Tutoriales de ejercicios",
    searchPlaceholder: "Buscar ejercicios...",
    categories: "Todas las categorías",
    neck: "Cuello",
    shoulder: "Hombro",
    back: "Espalda",
    legs: "Piernas",
    products: "Productos",
    prev: "Anterior",
    next: "Siguiente",

    liveReadings: "Lecturas en vivo",
    username: "Nombre de usuario",
    emg: "Lectura EMG",
    deviceId: "ID de dispositivo",
    deviceStat: "Estado del dispositivo",
    connectDevice: "Conectar dispositivo",
    exportPDF: "Exportar PDF",
    exportCSV: "Exportar CSV",

    admin: "Panel de administrador",
    users: "Usuarios",
    devices: "Dispositivos",
    upload: "Subir",
    dashboard: "Panel",
    welcomeAdmin: "¡Bienvenido, Administrador!",
    id: "ID",
    profilePicture: "Foto de perfil",
    name: "Nombre",
    role: "Rol",
    genderCol: "Género",
    actions: "Acciones",
    edit: "Editar",
    delete: "Eliminar",
  },

  yo: {
    back: "Padà",
    logout: "Jáde",
    login: "Wọlé",
    signup: "Forukọsilẹ",
    profile: "Àwòrán Ara ẹni",

    welcome: "Kaabọ!",
    companyName: "Calicare",
    vision: "Ìmúlò imọ-ẹrọ fún ìlera",
    getStarted: "Bẹrẹ",

    login_title: "Wọlé",
    welcomeBack: "Kaabọ Padà!",
    enterDetails: "Jọwọ tẹ alaye rẹ sii",
    email: "Imeeli",
    email_placeholder: "Tẹ imeeli rẹ sii",
    password: "Ọrọ aṣínà",
    password_placeholder: "Tẹ ọrọ aṣínà rẹ sii",
    rememberMe: "Ranti mi",
    forgotPassword: "Gbagbe Ọrọ aṣínà?",
    dontHaveAccount: "Ṣe o ko ni akọọlẹ?",
    login_button: "Wọlé",

    signup_title: "Forukọsilẹ",
    fullname: "Orúkọ kikun",
    fullname_placeholder: "Tẹ orúkọ kikun sii",
    phone: "Foonu",
    phone_placeholder: "Tẹ nọmba foonu sii",
    gender: "Ìbálòpọ̀",
    upload: "Ṣe igbasilẹ àwòrán ara ẹni",
    agree: "Mo gba pẹlu",
    terms_condition: "Àwọn ofin àti ipo",
    already_have: "Ṣe o ti ní akọọlẹ?",
    verify_text: "Ṣayẹwo imeeli rẹ fun OTP ìmúdájú ki o tẹ sii ni isalẹ.",
    spam: "Ṣayẹwo folda spam ti o ko ba ri ninu apo-iwọle.",
    verify_btn: "Ṣe ìmúdájú OTP",

    reset_title: "Tun Ọrọ aṣínà ṣe",
    newPassword: "Ọrọ aṣínà tuntun",
    confirmPassword: "Jẹrisi Ọrọ aṣínà",
    updatePassword: "Ṣe imudojuiwọn Ọrọ aṣínà",

    setting: "Eto",
    notifications: "Ifohunsafẹfẹ inu",
    notifyHelp: "Gba awọn ìkìlọ̀",
    reminders: "Ìrántí",
    reminderHelp: "Gba ìrántí ojoojúmọ́",
    darkMode: "Ìpo Dúdú",
    darkModeHelp: "Yi láàrin imọlẹ àti dídùdú",
    language: "Èdè",
    langHelp: "Yan èdè tí o fẹ́",
    connect: "Ìsopọ Ẹrọ",
    connectHelp: "So ẹrọ pọ",
    export: "Gbejade Data",
    exportHelp: "Pin Data rẹ",
    about: "Nípa Calicare",
    aboutHelp: "Kọ ẹ̀kọ́ síi nípa wa",
    exportBtn: "Gbejade data ilera",
    aboutBtn: "Kọ ẹkọ diẹ sii",

    tutorials: "Àkọ́kọ́ Ìdárayá",
    searchPlaceholder: "Ṣàwárí ìdárayá...",
    categories: "Gbogbo Ẹ̀ka",
    neck: "Ọrun",
    shoulder: "Ejika",
    back: "Ẹ̀yìn",
    legs: "Ẹsẹ̀",
    products: "Ọjà",
    prev: "Tẹ́lẹ̀",
    next: "Tó kàn",

    liveReadings: "Ìka lásiko",
    username: "Orúkọ Olùmúlò",
    emg: "Ìka EMG",
    deviceId: "ID Ẹrọ",
    deviceStat: "Ìpò Ẹrọ",
    connectDevice: "So Ẹrọ pọ",
    exportPDF: "Gbejade PDF",
    exportCSV: "Gbejade CSV",

    admin: "Dasibodu Alákóso",
    users: "Àwọn Olùmúlò",
    devices: "Àwọn Ẹrọ",
    upload: "Ṣe igbasilẹ",
    dashboard: "Dasibodu",
    welcomeAdmin: "Kaabọ, Alákóso!",
    id: "ID",
    profilePicture: "Àwòrán Ara ẹni",
    name: "Orúkọ",
    role: "Ìpò",
    genderCol: "Ìbálòpọ̀",
    actions: "Ìṣe",
    edit: "Ṣàtúnṣe",
    delete: "Paarẹ",
  },

  ha: {
    back: "Koma baya",
    logout: "Fita",
    login: "Shiga",
    signup: "Yi rijista",
    profile: "Bayanan mai amfani",

    welcome: "Barka da zuwa!",
    companyName: "Calicare",
    vision: "Ƙarfafa lafiya ta hanyar fasaha",
    getStarted: "Fara",

    login_title: "Shiga",
    welcomeBack: "Barka da dawowa!",
    enterDetails: "Da fatan za a shigar da bayananka",
    email: "Imel",
    email_placeholder: "Shigar da imel ɗinka",
    password: "Kalmar sirri",
    password_placeholder: "Shigar da kalmar sirri",
    rememberMe: "Tuna ni",
    forgotPassword: "Ka manta kalmar sirri?",
    dontHaveAccount: "Ba ka da asusu?",
    login_button: "Shiga",

    signup_title: "Rijista",
    fullname: "Cikakken suna",
    fullname_placeholder: "Shigar da cikakken suna",
    phone: "Lambar waya",
    phone_placeholder: "Shigar da lambar waya",
    gender: "Jinsi",
    upload: "Dora hoton mai amfani",
    agree: "Na amince da",
    terms_condition: "Sharuɗɗa da Ka'idoji",
    already_have: "Kana da asusu?",
    verify_text:
      "Duba imel ɗinka don OTP na tabbatarwa sannan ka shigar da shi a ƙasa.",
    spam: "Duba babban fayil ɗin spam idan ba ka gani a akwatin saƙo ba.",
    verify_btn: "Tabbatar da OTP",

    reset_title: "Sake saitin kalmar sirri",
    newPassword: "Sabuwar Kalmar sirri",
    confirmPassword: "Tabbatar da Kalmar sirri",
    updatePassword: "Sabunta Kalmar sirri",

    setting: "Saituna",
    notifications: "Sanarwar cikin app",
    notifyHelp: "Karɓi sanarwa",
    reminders: "Tunatarwa",
    reminderHelp: "Karɓi tunatarwa na yau da kullum",
    darkMode: "Yanayin duhu",
    darkModeHelp: "Sauya tsakanin haske da duhu",
    language: "Harshe",
    langHelp: "Zaɓi yaren da kake so",
    connect: "Haɗin Na'ura",
    connectHelp: "Haɗa na'urarka",
    export: "Fitar da bayanai",
    exportHelp: "Raba bayananka",
    about: "Game da Calicare",
    aboutHelp: "Ƙarin bayani game da mu",

    tutorials: "Darussan motsa jiki",
    searchPlaceholder: "Nemo motsa jiki...",
    categories: "Duk Rukunoni",
    neck: "Wuya",
    shoulder: "Kafaɗa",
    back: "Baya",
    legs: "Ƙafafu",
    products: "Kayayyaki",
    prev: "Na baya",
    next: "Na gaba",

    liveReadings: "Karatu Kai tsaye",
    username: "Sunan mai amfani",
    emg: "Karatu na EMG",
    deviceId: "ID Na'ura",
    deviceStat: "Matsayin Na'ura",
    connectDevice: "Haɗa Na'ura",
    exportPDF: "Fitar da PDF",
    exportCSV: "Fitar da CSV",

    admin: "Dashboard na Admin",
    users: "Masu amfani",
    devices: "Na'urori",
    upload: "Dora",
    dashboard: "Dashboard",
    welcomeAdmin: "Barka, Admin!",
    id: "ID",
    profilePicture: "Hoto",
    name: "Suna",
    role: "Matsayi",
    genderCol: "Jinsi",
    actions: "Ayyuka",
    edit: "Gyara",
    delete: "Share",
  },

  ig: {
    back: "Laghachi",
    logout: "Pụọ",
    login: "Banye",
    signup: "Debanye aha",
    profile: "Profaịlụ",

    welcome: "Nnọọ!",
    companyName: "Calicare",
    vision: "Ịkwalite ahụike site na teknụzụ",
    getStarted: "Bido",

    login_title: "Banye",
    welcomeBack: "Nnọọ na azụ!",
    enterDetails: "Biko tinye ozi gị",
    email: "Email",
    email_placeholder: "Tinye email gị",
    password: "Okwuntughe",
    password_placeholder: "Tinye okwuntughe gị",
    rememberMe: "Cheta m",
    forgotPassword: "Chefuru okwuntughe?",
    dontHaveAccount: "Ị nweghị akaụntụ?",
    login_button: "Banye",

    signup_title: "Debanye aha",
    fullname: "Aha zuru ezu",
    fullname_placeholder: "Tinye aha zuru ezu",
    phone: "Ekwentị",
    phone_placeholder: "Tinye nọmba ekwentị",
    gender: "Okike",
    upload: "Bulite foto profaịlụ",
    agree: "Ana m ekweta na",
    terms_condition: "Usoro na Kọndishọn",
    already_have: "Ị nwere akaụntụ?",
    verify_text: "Biko lelee email gị maka OTP nkwenye wee tinye ya n'okpuru.",
    spam: "Lelee folda spam gị ma ọ bụrụ na ọ naghị adị na igbe mbata.",
    verify_btn: "Kwenye OTP",

    reset_title: "Tọọ Okwuntughe ọhụrụ",
    newPassword: "Okwuntughe ọhụrụ",
    confirmPassword: "Kwenye Okwuntughe",
    updatePassword: "Melite Okwuntughe",

    setting: "Ntọala",
    notifications: "Nkwupụta n'ime ngwa",
    notifyHelp: "Nnata nkwupụta",
    reminders: "Ncheta",
    reminderHelp: "Nweta ncheta kwa ụbọchị",
    darkMode: "Ọnọdụ ọchịchịrị",
    darkModeHelp: "Gbanwee ọkụ na ọchịchịrị",
    language: "Asụsụ",
    langHelp: "Họrọ asụsụ masịrị gị",
    connect: "Njikọ Ngwaọrụ",
    connectHelp: "Jikọọ ngwaọrụ gị",
    export: "Zipu Data",
    exportHelp: "Kekọrịta data gị",
    about: "Banyere Calicare",
    aboutHelp: "Mụta ihe ọzọ gbasara anyị",

    tutorials: "Nkuzi Mmega ahụ",
    searchPlaceholder: "Chọọ mmega ahụ...",
    categories: "Ụdị niile",
    neck: "Ọrịa olu",
    shoulder: "Afụ",
    back: "Azụ",
    legs: "Ụkwụ",
    products: "Ngwaahịa",
    prev: "Tupu",
    next: "Osote",

    liveReadings: "Ntụgharị Ozugbo",
    username: "Aha Ojii",
    emg: "Ntụgharị EMG",
    deviceId: "ID Ngwaọrụ",
    deviceStat: "Ọnọdụ Ngwaọrụ",
    connectDevice: "Jikọọ Ngwaọrụ",
    exportPDF: "Zipu PDF",
    exportCSV: "Zipu CSV",

    admin: "Dashboard Onye njikwa",
    users: "Ndị ọrụ",
    devices: "Ngwaọrụ",
    upload: "Bulite",
    dashboard: "Dashboard",
    welcomeAdmin: "Nnọọ, Onye njikwa!",
    id: "ID",
    profilePicture: "Foto Profaịlụ",
    name: "Aha",
    role: "Ọrụ",
    genderCol: "Okike",
    actions: "Omume",
    edit: "Dezie",
    delete: "Hichapụ",
  },

  zh: {
    back: "返回",
    logout: "退出",
    login: "登录",
    signup: "注册",
    profile: "个人资料",

    welcome: "欢迎登船！",
    companyName: "Calicare",
    vision: "通过技术赋能健康",
    getStarted: "开始",

    login_title: "登录",
    welcomeBack: "欢迎回来！",
    enterDetails: "请输入您的信息",
    email: "电子邮件",
    email_placeholder: "输入您的电子邮件",
    password: "密码",
    password_placeholder: "输入您的密码",
    rememberMe: "记住我",
    forgotPassword: "忘记密码？",
    dontHaveAccount: "还没有账户？",
    login_button: "登录",

    signup_title: "注册",
    fullname: "全名",
    fullname_placeholder: "输入全名",
    phone: "电话",
    phone_placeholder: "输入电话号码",
    gender: "性别",
    upload: "上传个人照片",
    agree: "我同意",
    terms_condition: "条款和条件",
    already_have: "已经有账户？",
    verify_text: "请检查您的电子邮件以获取验证码并输入。",
    spam: "如果未在收件箱中看到，请检查垃圾邮件文件夹。",
    verify_btn: "验证 OTP",

    reset_title: "重置密码",
    newPassword: "新密码",
    confirmPassword: "确认密码",
    updatePassword: "更新密码",

    setting: "设置",
    notifications: "应用内通知",
    notifyHelp: "接收通知",
    reminders: "提醒",
    reminderHelp: "每日提醒",
    darkMode: "深色模式",
    darkModeHelp: "切换明暗主题",
    language: "语言",
    langHelp: "选择您喜欢的语言",
    connect: "设备连接",
    connectHelp: "连接设备",
    export: "导出数据",
    exportHelp: "分享数据",
    about: "关于 Calicare",
    aboutHelp: "了解更多关于我们",

    tutorials: "运动教程",
    searchPlaceholder: "搜索运动...",
    categories: "所有类别",
    neck: "颈部",
    shoulder: "肩膀",
    back: "背部",
    legs: "腿部",
    products: "产品",
    prev: "上一页",
    next: "下一页",

    liveReadings: "实时读数",
    username: "用户名",
    emg: "肌电读数",
    deviceId: "设备 ID",
    deviceStat: "设备状态",
    connectDevice: "连接设备",
    exportPDF: "导出 PDF",
    exportCSV: "导出 CSV",

    admin: "管理员仪表盘",
    users: "用户",
    devices: "设备",
    upload: "上传",
    dashboard: "仪表盘",
    welcomeAdmin: "欢迎，管理员！",
    id: "ID",
    profilePicture: "个人照片",
    name: "名字",
    role: "角色",
    genderCol: "性别",
    actions: "操作",
    edit: "编辑",
    delete: "删除",
  },
};



// ---------- APPLY TRANSLATIONS ----------
function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // For placeholders (input, textarea)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.setAttribute("placeholder", t[key]);
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
