const translations = {
  en: {
    profileName: "Eugene Buinouski",
    profileTitle: "DevOps Engineer",

    contactInfo: "Contact Info",
    email: "Eugene.Buinouski@outlook.com",
    linkedIn: "Linkedin.com/in/eugene-buinouski",
    location: "Tbilisi, Georgia",

    education: "Education",
    university: "Belarusian State University",
    specialization: "Radiophysics",
    yearsEducation: "2013-2017",

    languages: "Spoken Languages Levels",
    russian: "Russian",
    english: "English",
    native: "Native",
    levelB1B2: "B1-B2",

    profile: "Profile",
    profileText:
      "Versatile DevOps Engineer with 7+ years of experience spanning System Administration, Cloud Engineering, and Product DevOps. Proven track record in providing maintenance and support for high-availability environments, evolving from legacy Windows/Linux systems to modern multi-cluster Kubernetes architectures. Core expertise lies in architecture and infrastructure design, Kubernetes, AWS, and building resilient platforms. Expert in developing CI/CD according to GitOps concepts (ArgoCD), automating deployments to bare-metal, Kubernetes, and AWS, as well as administrative processes, and implementing proactive monitoring and observability. Experienced in designing Disaster Recovery strategies (AWS EKS) and troubleshooting environments down to the code level (Go, Python). Strong focus on ensuring system security, fixing security threats, and advising development teams on architectural solutions.",

    experience: "Experience",
    totalExperience: "Total experience: 7 years 7 months",
    skills: "Skills",
    projects: "Projects",
    personality: "Personality",
    hobbies: "Hobbies",

    downloadBtn: "Download CV",

    elinext: "Elinext",
    elinextDates: "Sep. 2022 - Jun. 2024",
    elinextLocation: "Tbilisi, Georgia",
    elinextRole: "DevOps Engineer",
    elinextDesc:
      "Migration to GCP, developing CI/CD pipelines according GitOps concept, maintenance, developing python scripts for automation, troubleshooting of environment, docker, pipeline issues, consulting development teams on implementation of CI/CD pipelines, developing and implementing Ansible playbooks, security consulting, creation and mentoring cloud technology training.",
    usedTech: "Used frameworks and technologies:",
    elinextTech:
      "AWS, GCP, Azure, Python, Docker, Docker-Compose, K8s, Ansible, Jenkins, Gitlab CI/CD, GitHub Actions",

    forbaseAdminTitle: "System Administrator",
    forbase: "Forbase",
    forbaseSysAdminDates1: "Nov. 2018 - Nov. 2021",
    forbaseLocation1: "Minsk, Belarus",
    forbaseSysAdminDesc:
      "Organization of backups: sites, IIS settings, various directories, configurations and virtual machine data. Up-to-date system and firmware support, high availability support. Monitoring and notification of: system, equipment, availability, integrity and safety of backups. System configuration, services and roles. Prevention of critical events. Troubleshooting. Infrastructure planning and implementation. Automation of administrative processes.",
    forbaseTech1:
      "Windows Server, MS SQL, AWS (EC2, S3), Dell PowerEdge/PowerVault, Synology NAS, Ipswitch WhatsUp Gold",

    forbaseSysAdminDates2: "Feb. 2017 - Nov. 2017",
    forbaseLocation2: "Minsk, Belarus",
    forbaseSysAdminDescIntern: "Internship.",
    forbaseTech2: "Windows Server, MS SQL, Synology NAS, Ipswitch WhatsUp Gold",

    tradingView: "TradingView",
    tradingViewDates: "Jul. 2024 - Jun. 2026",
    tradingViewLocation: "Tbilisi, Georgia",
    tradingViewRole: "Product DevOps Engineer",
    tradingViewDesc:
      "Migration of product architecture (Go stack) to Kubernetes, developing Helm charts and k8s-native Docker images, implementing GitOps concepts via ArgoCD, executing a Disaster Recovery strategy using Argo Workflows and AWS EKS, modernizing and maintaining Jenkins and GitLab CI pipelines for hybrid deployment and automated testing, introducing pre-commit hooks and linters for code quality control, migrating and orchestrating Kafka in K8s via Strimzi Operator, maintaining data streaming pipelines (Debezium, MirrorMaker), optimizing deployments and reducing cluster resource consumption, troubleshooting production incidents at both infrastructure and code levels (including Go SIGSEGV fixes), migrating monitoring from Zabbix to Prometheus with false-positive alert suppression, configuring log collection via Vector, testing networking solutions (MetalLB, Cilium), consulting adjacent development teams on K8s migration, conducting architectural reviews, and providing ready-to-use infrastructure templates.",
    tradingViewTech:
      "Kubernetes (on-prem, AWS EKS), Helm, ArgoCD, Argo Workflows, Docker, Jenkins, GitLab CI, pre-commit, Kafka (Strimzi), Debezium, MirrorMaker, PostgreSQL, ZooKeeper, etcd, Prometheus, Thanos, Alertmanager, Vector, Zabbix, Grafana, Puppet, Hiera, MetalLB, Cilium, AWS Route53, Python, Bash, Go.",
    tradingViewProjectDates: "Jul. 2024 - Jun. 2026",
    tradingViewProjectTitle: "TradingView",
    tradingViewProjectDesc: "Platform for traders and investors.",
    tradingViewProjectResponsibilities:
      "Support and development of company product services.",

    securityConsultTitle: "Security consult",
    securityConsultDates: "Feb. 2023 - Jun. 2024",
    securityConsultDesc: "Consulting security solutions.",
    securityConsultResponsibilities:
      "Consulting and configuring security solutions.",

    trainingTitle: "Elinext Cloud Training",
    trainingDates: "Oct. 2023 - Jun. 2024",
    trainingDesc: "Internal cloud technology training",
    trainingResponsibilities:
      "Creating and mentoring AWS cloud technology training.",

    satioTitle: "Sat.io",
    satioDates: "Jun. 2023 - Oct. 2023",
    satioDesc: "Satellite managing project.",
    satioResponsibilities:
      "Implementing CI/CD pipelines, advising development teams on the implementation of CI/CD pipelines, resolving issues of containerization.",

    gatewayTitle: "Elinext Gateway",
    gatewayDates: "Mar. 2023 - Jun. 2023",
    gatewayDesc: "Internal corporate network.",
    gatewayResponsibilities:
      "Developing and implementing Ansible playbooks for automated server configuration.",

    broadcomTitle: "Broadcom DX",
    broadcomDates: "Sep. 2022 - Feb. 2023",
    broadcomDesc: "Monitoring and analysis application.",
    broadcomResponsibilities:
      "Migration to GCP, developing CI/CD, maintenance, developing python scripts for automation.",

    marketingTitle: "Marketing G2",
    marketingDates1: "Oct. 2018 - Nov. 2021",
    marketingDesc: "Marketing solution for social media",

    marketingDates2: "Feb. 2017 - Nov. 2017",

    safetypayTitle: "Safetypay",
    safetypayDates: "Nov. 2018 - Nov. 2021",
    safetypayDesc: "Solution for payment methods",

    awsSkill: "AWS",
    awsDesc:
      "EC2 / Route 53 / S3 / VPC / Beanstalk / ECS / ECR / EKS / RDS / DevTools / SNS / Lambda / CloudFormation / CloudWatch",

    gcpSkill: "GCP",
    gcpDesc: "Compute / GKE / Storage",

    containerizationSkill: "CONTAINERIZATION & ORCHESTRATION",
    containerizationDesc:
      "Kubernetes / Helm / Docker / Docker-Compose / Swarm / MetalLB / Cilium",

    devopsSkill: "DEVOPS & GITOPS TOOLS",
    devopsDesc:
      "GitLab CI/CD / GitHub Actions / Jenkins / ArgoCD / Argo Workflows / Ansible / Puppet / Hiera / Terraform / Git",

    dataSkill: "DATA, BROKERS & STREAMING",
    dataDesc:
      "Kafka (Strimzi) / Debezium / MirrorMaker / PostgreSQL / ZooKeeper / etcd",

    monitoringSkill: "MONITORING, LOGGING & OBSERVABILITY",
    monitoringDesc:
      "Prometheus / Thanos / Alertmanager / Vector / Grafana / Zabbix / Ipswich WhatsUp Gold",

    scriptingSkill: "SCRIPTING & LANGUAGES",
    scriptingDesc: "Python / Bash / Go / PowerShell",

    linuxSkill: "LINUX SERVER & NETWORKING",
    linuxDesc:
      "CentOS / RHEL / Fedora / Debian / Ubuntu / Networking (iptables, L2TP, WireGuard, etc.)",

    windowsSkill: "WINDOWS SERVER",
    windowsDesc:
      "AD DC / GPO / DNS / DHCP / IIS / Hyper-V / DFS / Failover cluster / WSUS",

    virtualizationSkill: "VIRTUALIZATION",
    virtualizationDesc: "Hyper-V / VMware (vSphere)",

    storageSkill: "STORAGE & HARDWARE",
    storageDesc:
      "Synology NAS / Dell PowerEdge / Dell PowerVault / DELL (OME, OMSA, iDRAC)",

    othersSkill: "OTHER",
    othersDesc: "Network Security",

    personalityText:
      "Experimenting with new technologies and frameworks, continuous learning, resolving the most difficult problems, choosing the most appropriate technologies, flexible and organized.",

    hobbiesText: "Programming, radio electronics, CTF.",

    responsibilities: "Responsibilities:",
  },
  ru: {
    profileName: "Евгений Буйновский",
    profileTitle: "DevOps Engineer",

    contactInfo: "Контактная информация",
    email: "Eugene.Buinouski@outlook.com",
    linkedIn: "Linkedin.com/in/eugene-buinouski",
    location: "Тбилиси, Грузия",

    education: "Образование",
    university: "Белорусский государственный университет",
    specialization: "Радиофизика",
    yearsEducation: "2013-2017",

    languages: "Языки",
    russian: "Русский",
    english: "Английский",
    native: "Родной",
    levelB1B2: "B1-B2",

    profile: "Профиль",
    profileText:
      "Разносторонний DevOps-инженер с более чем 7-летним опытом в системном администрировании, облачной инженерии и Product DevOps. Имею подтвержденный опыт поддержки высокодоступных сред: от классических Windows/Linux инфраструктур до современных мультикластерных архитектур Kubernetes. Моя ключевая экспертиза - проектирование архитектуры и инфраструктуры, Kubernetes, AWS и построение отказоустойчивых платформ. Специализируюсь на разработке CI/CD по концепции GitOps (ArgoCD), автоматизации деплоя в bare-metal, Kubernetes и AWS, оптимизации рутинных административных процессов, а также на внедрении проактивного мониторинга. Имею опыт проектирования стратегий Disaster Recovery (AWS EKS) и траблшутинга вплоть до уровня кода (Go, Python). Уделяю особое внимание обеспечению безопасности систем, устранению уязвимостей и архитектурному консалтингу команд разработки.",

    experience: "Опыт работы",
    totalExperience: "Общий опыт: 7 лет 7 месяцев",
    skills: "Навыки",
    projects: "Проекты",
    personality: "Личные качества",
    hobbies: "Хобби",

    downloadBtn: "Скачать CV",

    elinext: "Elinext",
    elinextDates: "Сен. 2022 - Июн. 2024",
    elinextLocation: "Тбилиси, Грузия",
    elinextRole: "DevOps Engineer",
    elinextDesc:
      "Миграция на GCP, разработка CI/CD pipelines по концепции GitOps, обслуживание, разработка скриптов на Python для автоматизации, устранение неполадок в окружении, Docker, проблемы с pipelines, консультирование команд разработки по внедрению CI/CD pipelines, разработка и внедрение Ansible playbooks, консультирование по безопасности, создание и менторство в обучении облачным технологиям.",
    usedTech: "Используемые фреймворки и технологии:",
    elinextTech:
      "AWS, GCP, Azure, Python, Docker, Docker-Compose, K8s, Ansible, Jenkins, Gitlab CI/CD, GitHub Actions",

    forbaseAdminTitle: "Системный администратор",
    forbase: "Forbase",
    forbaseSysAdminDates1: "Ноя. 2018 - Ноя. 2021",
    forbaseLocation1: "Минск, Беларусь",
    forbaseSysAdminDesc:
      "Организация резервных копий: сайтов, настроек IIS, различных директорий, конфигураций и данных виртуальных машин. Поддержка системы и прошивки в актуальном состоянии, обеспечение высокой доступности. Мониторинг и оповещение: система, оборудование, доступность, целостность и безопасность резервных копий. Конфигурация системы, сервисов и ролей. Предотвращение критических событий. Устранение неполадок. Планирование и внедрение инфраструктуры. Автоматизация административных процессов.",
    forbaseTech1:
      "Windows Server, MS SQL, AWS (EC2, S3), Dell PowerEdge/PowerVault, Synology NAS, Ipswitch WhatsUp Gold",

    forbaseSysAdminDates2: "Фев. 2017 - Ноя. 2017",
    forbaseLocation2: "Минск, Беларусь",
    forbaseSysAdminDescIntern: "Стажировка.",
    forbaseTech2: "Windows Server, MS SQL, Synology NAS, Ipswitch WhatsUp Gold",

    tradingView: "TradingView",
    tradingViewDates: "Июл. 2024 - Июн. 2026",
    tradingViewLocation: "Тбилиси, Грузия",
    tradingViewRole: "Product DevOps Engineer",
    tradingViewDesc:
      "Миграция продуктовой архитектуры (Go-стек) в Kubernetes, разработка Helm-чартов и k8s-native Docker-образов, внедрение концепции GitOps через ArgoCD, реализация стратегии Disaster Recovery с использованием Argo Workflows и AWS EKS, модернизация и поддержка Jenkins и GitLab CI пайплайнов для гибридного деплоя и автоматического тестирования, внедрение pre-commit хуков и линтеров для контроля качества кода, миграция и оркестрация Kafka в K8s через Strimzi Operator, поддержка транспортных цепочек данных (Debezium, MirrorMaker), оптимизация деплоя и снижение потребления ресурсов кластера, траблшутинг production-инцидентов на инфраструктурном и кодовом уровне (включая fix SIGSEGV на Go), миграция мониторинга из Zabbix в Prometheus с настройкой подавления ложных алертов, конфигурация сбора логов через Vector, тестирование сетевых решений (MetalLB, Cilium), консалтинг смежных команд по миграции в K8s, архитектурное ревью и предоставление готовых инфраструктурных шаблонов.",
    tradingViewTech:
      "Kubernetes, Helm, ArgoCD, Argo Workflows, Docker, Jenkins, GitLab CI, pre-commit, Kafka (Strimzi), Debezium, MirrorMaker, PostgreSQL, ZooKeeper, etcd, Prometheus, Thanos, Alertmanager, Vector, Zabbix, Grafana, Puppet, Hiera, MetalLB, Cilium, AWS Route53, Python, Bash, Go.",
    tradingViewProjectDates: "Июл. 2024 - Июн. 2026",
    tradingViewProjectTitle: "TradingView",
    tradingViewProjectDesc: "Платформа для трейдеров и инвесторов.",
    tradingViewProjectResponsibilities:
      "Поддержка и развитие продуктовых сервисов компании.",

    securityConsultTitle: "Консультант по безопасности",
    securityConsultDates: "Фев. 2023 - Июн. 2024",
    securityConsultDesc: "Консультирование по безопасности.",
    securityConsultResponsibilities:
      "Консультирование и конфигурация решений по безопасности.",

    trainingTitle: "Elinext Cloud Training",
    trainingDates: "Окт. 2023 - Июн. 2024",
    trainingDesc: "Внутреннее обучение облачным технологиям",
    trainingResponsibilities:
      "Создание и менторство по обучению облачным технологиям AWS.",

    satioTitle: "Sat.io",
    satioDates: "Июн. 2023 - Окт. 2023",
    satioDesc: "Проект управления спутниками.",
    satioResponsibilities:
      "Внедрение CI/CD pipelines, консультирование команд разработки по внедрению CI/CD pipelines, решение проблем контейнеризации.",

    gatewayTitle: "Elinext Gateway",
    gatewayDates: "Мар. 2023 - Июн. 2023",
    gatewayDesc: "Внутренняя корпоративная сеть.",
    gatewayResponsibilities:
      "Разработка и внедрение Ansible playbooks для автоматической конфигурации сервера.",

    broadcomTitle: "Broadcom DX",
    broadcomDates: "Сен. 2022 - Фев. 2023",
    broadcomDesc: "Приложение мониторинга и анализа.",
    broadcomResponsibilities:
      "Миграция на GCP, разработка CI/CD, обслуживание, разработка скриптов на Python для автоматизации.",

    marketingTitle: "Marketing G2",
    marketingDates1: "Окт. 2018 - Ноя. 2021",
    marketingDesc: "Маркетинговое решение для социальных сетей",

    marketingDates2: "Фев. 2017 - Ноя. 2017",

    safetypayTitle: "Safetypay",
    safetypayDates: "Ноя. 2018 - Ноя. 2021",
    safetypayDesc: "Решение для методов платежей",

    awsSkill: "AWS",
    awsDesc:
      "EC2 / Route 53 / S3 / VPC / Beanstalk / ECS / ECR / EKS / RDS / DevTools / SNS / Lambda / CloudFormation / CloudWatch",

    gcpSkill: "GCP",
    gcpDesc: "Compute / GKE / Storage",

    containerizationSkill: "CONTAINERIZATION & ORCHESTRATION",
    containerizationDesc:
      "Kubernetes (on-prem, EKS) / Helm / Docker / Docker-Compose / Swarm / MetalLB / Cilium",

    devopsSkill: "DEVOPS & GITOPS TOOLS",
    devopsDesc:
      "GitLab CI/CD / GitHub Actions / Jenkins / ArgoCD / Argo Workflows / Ansible / Puppet / Hiera / Terraform / Git",

    dataSkill: "DATA, BROKERS & STREAMING",
    dataDesc:
      "Kafka (Strimzi) / Debezium / MirrorMaker / PostgreSQL / ZooKeeper / etcd",

    monitoringSkill: "MONITORING, LOGGING & OBSERVABILITY",
    monitoringDesc:
      "Prometheus / Thanos / Alertmanager / Vector / Grafana / Zabbix / Ipswich WhatsUp Gold",

    scriptingSkill: "SCRIPTING & LANGUAGES",
    scriptingDesc: "Python / Bash / Go / PowerShell",

    linuxSkill: "LINUX SERVER & NETWORKING",
    linuxDesc:
      "CentOS / RHEL / Fedora / Debian / Ubuntu / Networking (iptables, L2TP, WireGuard, etc.)",

    windowsSkill: "WINDOWS SERVER",
    windowsDesc:
      "AD DC / GPO / DNS / DHCP / IIS / Hyper-V / DFS / Failover cluster / WSUS",

    virtualizationSkill: "VIRTUALIZATION",
    virtualizationDesc: "Hyper-V / VMware (vSphere)",

    storageSkill: "STORAGE & HARDWARE",
    storageDesc:
      "Synology NAS / Dell PowerEdge / Dell PowerVault / DELL (OME, OMSA, iDRAC)",

    othersSkill: "OTHER",
    othersDesc: "Network Security",

    personalityText:
      "Экспериментирование с новыми технологиями и фреймворками, постоянное обучение, решение самых сложных проблем, выбор наиболее подходящих технологий, гибкость и организованность.",

    hobbiesText: "Программирование, радиоэлектроника, CTF.",

    responsibilities: "Ответственность:",
  },
};

// Текущий выбранный язык
let currentLang = localStorage.getItem("selectedLang") || "en";

// Инициализация
document.addEventListener("DOMContentLoaded", function () {
  initLanguageSwitcher();
  applyLanguage(currentLang);
});

function initLanguageSwitcher() {
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  const langOptions = document.querySelectorAll(".lang-option");

  // Открытие/закрытие меню
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    langMenu.classList.toggle("active");
  });

  // Закрытие меню при клике на опцию
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      changeLanguage(selectedLang);
      langMenu.classList.remove("active");
    });
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", function () {
    langMenu.classList.remove("active");
  });

  // Установка текущего языка в кнопку
  updateLangButton();
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("selectedLang", lang);
  applyLanguage(lang);
  updateLangButton();
}

function updateLangButton() {
  const langBtn = document.getElementById("langBtn");
  const flags = { en: "EN", ru: "RU" };
  const names = { en: "English", ru: "Русский" };

  langBtn.innerHTML = `<span class="lang-flag">${flags[currentLang]}</span><span class="lang-text">${names[currentLang]}</span>`;
}

function applyLanguage(lang) {
  const t = translations[lang];

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (key === "profileName") {
        el.innerHTML = `${t.profileName}<br><span>${t.profileTitle}</span>`;
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update contact info
  const educationH4s = document.querySelectorAll(".contactInfo.education h4");
  if (educationH4s[0]) educationH4s[0].textContent = t.university;
  if (educationH4s[1]) educationH4s[1].textContent = t.specialization;

  const educationH5s = document.querySelectorAll(".contactInfo.education h5");
  if (educationH5s[0]) educationH5s[0].textContent = t.yearsEducation;

  // Update language section content
  const languageSpans = document.querySelectorAll(
    ".contactInfo.language .text",
  );
  if (languageSpans[0]) languageSpans[0].textContent = t.russian + ":";
  if (languageSpans[1]) languageSpans[1].textContent = t.native;
  if (languageSpans[2]) languageSpans[2].textContent = t.english + ":";
  if (languageSpans[3]) languageSpans[3].textContent = t.levelB1B2;

  // Update download button
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    updateDownloadLink();
  }

  // Apply to all text content that needs translation
  applyContentTranslations(lang);
}

function applyContentTranslations(lang) {
  const t = translations[lang];

  // Experience boxes
  const experienceBoxes = document.querySelectorAll(".about.experience .box");

  // TradingView position
  if (experienceBoxes[0]) {
    const h5s = experienceBoxes[0].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.tradingView;
    if (h5s[1]) h5s[1].textContent = t.tradingViewDates;
    if (h5s[2]) h5s[2].textContent = t.tradingViewLocation;
    const h4 = experienceBoxes[0].querySelector(".text h4");
    if (h4) h4.textContent = t.tradingViewRole;
    const textSpan = experienceBoxes[0].querySelector(".text span");
    const paragraphs = experienceBoxes[0].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.tradingViewDesc;
    if (textSpan) textSpan.textContent = t.usedTech;
    if (paragraphs[1]) paragraphs[1].textContent = t.tradingViewTech;
  }

  // Elinext position
  if (experienceBoxes[1]) {
    const h5s = experienceBoxes[1].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.elinext;
    if (h5s[1]) h5s[1].textContent = t.elinextDates;
    if (h5s[2]) h5s[2].textContent = t.elinextLocation;
    const h4 = experienceBoxes[1].querySelector(".text h4");
    if (h4) h4.textContent = t.elinextRole;
    const textSpan = experienceBoxes[1].querySelector(".text span");
    const paragraphs = experienceBoxes[1].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.elinextDesc;
    if (textSpan) textSpan.textContent = t.usedTech;
    if (paragraphs[1]) paragraphs[1].textContent = t.elinextTech;
  }

  // Forbase System Administrator (first position)
  if (experienceBoxes[2]) {
    const h5s = experienceBoxes[2].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.forbase;
    if (h5s[1]) h5s[1].textContent = t.forbaseSysAdminDates1;
    if (h5s[2]) h5s[2].textContent = t.forbaseLocation1;
    const h4 = experienceBoxes[2].querySelector(".text h4");
    if (h4) h4.textContent = t.forbaseAdminTitle;
    const textSpan = experienceBoxes[2].querySelector(".text span");
    const paragraphs = experienceBoxes[2].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.forbaseSysAdminDesc;
    if (textSpan) textSpan.textContent = t.usedTech;
    if (paragraphs[1]) paragraphs[1].textContent = t.forbaseTech1;
  }

  // Forbase System Administrator (second position)
  if (experienceBoxes[3]) {
    const h5s = experienceBoxes[3].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.forbase;
    if (h5s[1]) h5s[1].textContent = t.forbaseSysAdminDates2;
    if (h5s[2]) h5s[2].textContent = t.forbaseLocation2;
    const h4 = experienceBoxes[3].querySelector(".text h4");
    if (h4) h4.textContent = t.forbaseAdminTitle;
    const textSpan = experienceBoxes[3].querySelector(".text span");
    const paragraphs = experienceBoxes[3].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.forbaseSysAdminDescIntern;
    if (textSpan) textSpan.textContent = t.usedTech;
    if (paragraphs[1]) paragraphs[1].textContent = t.forbaseTech2;
  }

  // Projects section
  const projectBoxes = document.querySelectorAll(".about.project .box");

  if (projectBoxes[0]) {
    const h5s = projectBoxes[0].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.tradingView;
    if (h5s[1]) h5s[1].textContent = t.tradingViewProjectDates;
    const h4 = projectBoxes[0].querySelector(".text h4");
    if (h4) h4.textContent = t.tradingViewProjectTitle;
    const textSpan = projectBoxes[0].querySelector(".text span");
    const paragraphs = projectBoxes[0].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.tradingViewProjectDesc;
    if (textSpan) textSpan.textContent = t.responsibilities;
    if (paragraphs[1])
      paragraphs[1].textContent = t.tradingViewProjectResponsibilities;
  }

  if (projectBoxes[1]) {
    const h5s = projectBoxes[1].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.elinext;
    if (h5s[1]) h5s[1].textContent = t.securityConsultDates;
    const h4 = projectBoxes[1].querySelector(".text h4");
    if (h4) h4.textContent = t.securityConsultTitle;
    const textSpan = projectBoxes[1].querySelector(".text span");
    const paragraphs = projectBoxes[1].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.securityConsultDesc;
    if (textSpan) textSpan.textContent = t.responsibilities;
    if (paragraphs[1])
      paragraphs[1].textContent = t.securityConsultResponsibilities;
  }

  if (projectBoxes[2]) {
    const h5s = projectBoxes[2].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.elinext;
    if (h5s[1]) h5s[1].textContent = t.trainingDates;
    const h4 = projectBoxes[2].querySelector(".text h4");
    if (h4) h4.textContent = t.trainingTitle;
    const textSpan = projectBoxes[2].querySelector(".text span");
    const paragraphs = projectBoxes[2].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.trainingDesc;
    if (textSpan) textSpan.textContent = t.responsibilities;
    if (paragraphs[1]) paragraphs[1].textContent = t.trainingResponsibilities;
  }

  if (projectBoxes[3]) {
    const h5s = projectBoxes[3].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.elinext;
    if (h5s[1]) h5s[1].textContent = t.satioDates;
    const h4 = projectBoxes[3].querySelector(".text h4");
    if (h4) h4.textContent = t.satioTitle;
    const textSpan = projectBoxes[3].querySelector(".text span");
    const paragraphs = projectBoxes[3].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.satioDesc;
    if (textSpan) textSpan.textContent = t.responsibilities;
    if (paragraphs[1]) paragraphs[1].textContent = t.satioResponsibilities;
  }

  if (projectBoxes[4]) {
    const h5s = projectBoxes[4].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.elinext;
    if (h5s[1]) h5s[1].textContent = t.gatewayDates;
    const h4 = projectBoxes[4].querySelector(".text h4");
    if (h4) h4.textContent = t.gatewayTitle;
    const textSpan = projectBoxes[4].querySelector(".text span");
    const paragraphs = projectBoxes[4].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.gatewayDesc;
    if (textSpan) textSpan.textContent = t.responsibilities;
    if (paragraphs[1]) paragraphs[1].textContent = t.gatewayResponsibilities;
  }

  if (projectBoxes[5]) {
    const h5s = projectBoxes[5].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.elinext;
    if (h5s[1]) h5s[1].textContent = t.broadcomDates;
    const h4 = projectBoxes[5].querySelector(".text h4");
    if (h4) h4.textContent = t.broadcomTitle;
    const textSpan = projectBoxes[5].querySelector(".text span");
    const paragraphs = projectBoxes[5].querySelectorAll(".text p");
    if (paragraphs[0]) paragraphs[0].textContent = t.broadcomDesc;
    if (textSpan) textSpan.textContent = t.responsibilities;
    if (paragraphs[1]) paragraphs[1].textContent = t.broadcomResponsibilities;
  }

  if (projectBoxes[6]) {
    const h5s = projectBoxes[6].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.forbase;
    if (h5s[1]) h5s[1].textContent = t.marketingDates1;
    const h4 = projectBoxes[6].querySelector(".text h4");
    if (h4) h4.textContent = t.marketingTitle;
    const p = projectBoxes[6].querySelector(".text p");
    if (p) p.textContent = t.marketingDesc;
  }

  if (projectBoxes[7]) {
    const h5s = projectBoxes[7].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.forbase;
    if (h5s[1]) h5s[1].textContent = t.safetypayDates;
    const h4 = projectBoxes[7].querySelector(".text h4");
    if (h4) h4.textContent = t.safetypayTitle;
    const p = projectBoxes[7].querySelector(".text p");
    if (p) p.textContent = t.safetypayDesc;
  }

  if (projectBoxes[8]) {
    const h5s = projectBoxes[8].querySelectorAll(".year_company h5");
    if (h5s[0]) h5s[0].textContent = t.forbase;
    if (h5s[1]) h5s[1].textContent = t.marketingDates2;
    const h4 = projectBoxes[8].querySelector(".text h4");
    if (h4) h4.textContent = t.marketingTitle;
    const p = projectBoxes[8].querySelector(".text p");
    if (p) p.textContent = t.marketingDesc;
  }

  // Skills section
  const skillItems = document.querySelectorAll(".skills ul li");
  const skillsMap = [
    { h4: t.awsSkill, p: t.awsDesc },
    { h4: t.gcpSkill, p: t.gcpDesc },
    { h4: t.containerizationSkill, p: t.containerizationDesc },
    { h4: t.devopsSkill, p: t.devopsDesc },
    { h4: t.dataSkill, p: t.dataDesc },
    { h4: t.monitoringSkill, p: t.monitoringDesc },
    { h4: t.scriptingSkill, p: t.scriptingDesc },
    { h4: t.linuxSkill, p: t.linuxDesc },
    { h4: t.windowsSkill, p: t.windowsDesc },
    { h4: t.virtualizationSkill, p: t.virtualizationDesc },
    { h4: t.storageSkill, p: t.storageDesc },
    { h4: t.othersSkill, p: t.othersDesc },
  ];

  skillItems.forEach((item, index) => {
    if (skillsMap[index]) {
      const skillName = item.querySelector(".skill h4");
      const skillDesc = item.querySelector(".description p");
      if (skillName) skillName.textContent = skillsMap[index].h4;
      if (skillDesc) skillDesc.textContent = skillsMap[index].p;
    }
  });
}

function updateDownloadLink() {
  const downloadBtn = document.getElementById("downloadBtn");
  const fileName =
    currentLang === "ru"
      ? "CV Евгений Буйновский.pdf"
      : "CV Eugene Buinouski.pdf";
  downloadBtn.href = fileName;
}
