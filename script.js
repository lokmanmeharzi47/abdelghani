/**
 * SOVEREIGN EXECUTIVE PORTAL
 * Official Scripts for Mr. Abdelghani Baba Ben Yahmed (السيد عبد الغني بابا بن يحمد)
 * Member of the Regional Office — Centre (Algiers)
 * Food Industry Expert | خبير في الصناعات الغذائية
 * Algerian Organization Communication for Development & National Authority for Migrants
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initVCardDownloader();
  initClipboardHandlers();
  initShareAction();
});

/* ==========================================================================
   1. TRILINGUAL ENGINE (AR / FR / EN)
   ========================================================================== */
const TRANSLATIONS = {
  ar: {
    // Document Title
    pageTitle: "السيد عبد الغني بابا بن يحمد | البوابة الرقمية الرسمية",

    // Topbar & Republic Header
    republicHeader: "الجمهورية الجزائرية الديمقراطية الشعبية",
    republicSub: "People's Democratic Republic of Algeria",
    orgName: "المنظمة الجزائرية إتصال من أجل التنمية",
    authorityName: "الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج",
    pillar1: "إتصال",
    pillar2: "ترقية الإستثمار",
    pillar3: "تنمية",

    // Text strictly inside portrait golden container
    nameAr: "السيد عبد الغني بابا بن يحمد",
    nameEn: "ABDELGHANI BABA BEN YAHMED",
    roleTitle: "عضو بالمكتب الجهوي — الوسط الجزائر العاصمة",
    expertTitle: "خبير في الصناعات الغذائية • Food Industry Expert",

    // Rank Badge
    leadershipBadge: "بطاقة قيادة • عضو المكتب الجهوي للوسط",

    // Tier 1 Buttons
    saveContactBtn: "حفظ جهة الاتصال الرسمية (vCard)",
    saveContactSub: "تنزيل بطاقة جهة الاتصال المعتمدة على هاتفك",
    sharePortalBtn: "مشاركة الملف الرسمي",
    copyLinkBtn: "نسخ رابط البوابة",

    // Tier 2 Missions & Competencies
    missionsTitle: "المهام الاستراتيجية ومجالات الاختصاص",
    card1Title: "المكتب الجهوي للوسط — الجزائر العاصمة",
    card1Desc: "تمثيل الهيئة الوطنية أمام السلطات والهيئات الرسمية، والتنسيق المؤسساتي على مستوى الجزائر العاصمة وإقليم الوسط.",
    expertTag: "تخصص استراتيجي نوعي",
    card2Title: "الخبرة في الصناعات الغذائية والأمن الغذائي",
    card2Desc: "تطوير ومرافقة مشاريع الصناعات الغذائية والتحويلية، دعم سلاسل الإنتاج والقيمة، وتعزيز الاستثمار المستدام في قطاع الصناعات الغذائية.",
    card3Title: "ترقية الإستثمار والتكفل بالجالية بالخارج",
    card3Desc: "مرافقة المستثمرين والكفاءات الوطنية بالخارج، وتسهيل اندماج المشاريع الاقتصادية والاستثمارية ذات القيمة المضافة العالية.",

    // Section: Accreditations & Legal Status
    accreditationsTitle: "بيانات الاعتماد الرسمي والصفة القانونية",
    officialCardType: "بطاقة قيادة معتمدة رسمياً",
    lblHolderName: "الاسم واللقب :",
    valHolderName: "عبد الغني بابا بن يحمد (ABDELGHANI BABA BEN YAHMED)",
    lblOfficialRole: "الصفة الرسمية :",
    valOfficialRole: "بطاقة قيادة — عضو بالمكتب الجهوي للوسط (الجزائر العاصمة)",
    lblSpecialty: "التخصص والخبرة :",
    valSpecialty: "خبير في الصناعات الغذائية (Food Industry Expert)",
    lblRegNum: "رقم التسجيل الرسمي :",
    lblBirth: "تاريخ ومكان الإزدياد :",
    valBirth: "1989/11/05 ببنورة - غرداية (Bounoura - Ghardaïa)",
    lblValidity: "تاريخ الإصدار والصلاحية :",
    valValidity: "أكتوبر 2026 (صالحة لمدة سنة قابلة للتجديد)",
    lblAuthorityLeader: "رئيس الهيئة الوطنية :",
    valAuthorityLeader: "القائد شريبط عبد الكريم (Commandant Chribat Abdelkrim)",
    lblMinistryApproval: "اعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية :",
    legalStatusNotice: "حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام كافة الجهات الرسمية والإدارية والأمنية.",
    unReferenceNotice: "إعلان الحق في التنمية الصادر والمعتمد بموجب قرار الجمعية العامة للأمم المتحدة رقم 128/14 المؤرخ في 04 كانون الأول / ديسمبر 1986.",

    // Tier 3 Contact & Addresses
    contactTitle: "قنوات الاتصال المباشر والإدارة المركزية",
    telGroupTitle: "الخطوط الهاتفية الرسمية",
    telGroupSub: "مباشر ومكتب الوسط",
    telTypeFax: "الهاتف / الفاكس :",
    telTypeMobile1: "الخط المحمول 1 :",
    telTypeMobile2: "الخط المحمول 2 :",
    telTypeMobile3: "الخط المحمول 3 :",
    emailGroupTitle: "البريد الإلكتروني الرسمي",
    emailGroupSub: "للمراسلات الإدارية الرسمية",
    copyEmailBtn: "نسخ العنوان",
    sendEmailDirectBtn: "إرسال مراسلة رسمية فورية",
    hqMainTitle: "المقر الرئيسي الوطني — الجزائر العاصمة :",
    hqMainAddress: "شارع بوجمعة تميم 249 درارية سيراميك — الجزائر العاصمة",
    hqAdminTitle: "الإدارة المركزية — قسنطينة :",
    hqAdminAddress: "و.ج 14 حي 1500 مسكن عدل توسعة بلمانع ع 39 محل 17 المدينة الجديدة — قسنطينة",

    // Footer
    republicFooter: "الجمهورية الجزائرية الديمقراطية الشعبية",
    authorityFooter: "المنظمة الجزائرية إتصال من أجل التنمية • الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج",
    footerCardRef: "بطاقة قيادة رقم : 100126 • اعتماد وزارة الداخلية رقم : 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    copyrightText: "جميع الحقوق محفوظة ومحمية قانونياً للجمهورية الجزائرية والدولة",

    // Toasts
    copiedToast: "تم النسخ بنجاح إلى الحافظة",
    vcardSuccessToast: "جاري تنزيل بطاقة الاتصال vCard..."
  },

  fr: {
    // Document Title
    pageTitle: "M. Abdelghani Baba Ben Yahmed | Portail Numérique Officiel",

    // Topbar & Republic Header
    republicHeader: "République Algérienne Démocratique et Populaire",
    republicSub: "République Algérienne Démocratique et Populaire",
    orgName: "Organisation Algérienne Communication pour le Développement",
    authorityName: "Autorité Nationale pour le Développement des Migrants et la Prise en Charge de la Communauté à l'Étranger",
    pillar1: "Communication",
    pillar2: "Promotion de l'Investissement",
    pillar3: "Développement",

    // Text strictly inside portrait golden container
    nameAr: "M. ABDELGHANI BABA BEN YAHMED",
    nameEn: "السيد عبد الغني بابا بن يحمد",
    roleTitle: "Membre du Bureau Régional du Centre — Alger",
    expertTitle: "Expert en Industries Agroalimentaires • Food Industry Expert",

    // Rank Badge
    leadershipBadge: "Carte de Commandement • Membre du Bureau Régional du Centre",

    // Tier 1 Buttons
    saveContactBtn: "Enregistrer le Contact vCard",
    saveContactSub: "Télécharger la fiche officielle sur votre smartphone",
    sharePortalBtn: "Partager le profil officiel",
    copyLinkBtn: "Copier le lien",

    // Tier 2 Missions & Competencies
    missionsTitle: "Missions Stratégiques & Domaines d'Expertise",
    card1Title: "Bureau Régional du Centre — Alger",
    card1Desc: "Représentation officielle de l'Autorité Nationale auprès des institutions et coordination institutionnelle sur Alger et la région Centre.",
    expertTag: "Expertise Stratégique Majeure",
    card2Title: "Industries Agroalimentaires & Sécurité Alimentaire",
    card2Desc: "Accompagnement et développement des projets agroalimentaires et de transformation, soutien des chaînes de valeur et valorisation des investissements.",
    card3Title: "Investissement & Communauté à l'Étranger",
    card3Desc: "Accompagnement des investisseurs et des compétences nationales établies à l'étranger, intégration de projets économiques à forte valeur ajoutée.",

    // Section: Accreditations & Legal Status
    accreditationsTitle: "Accréditations Officielles & Statut Juridique",
    officialCardType: "Carte de Commandement Officielle",
    lblHolderName: "Nom & Prénom :",
    valHolderName: "ABDELGHANI BABA BEN YAHMED (عبد الغني بابا بن يحمد)",
    lblOfficialRole: "Fonction Officielle :",
    valOfficialRole: "Carte de Commandement — Membre du Bureau Régional du Centre (Alger)",
    lblSpecialty: "Qualification & Expertise :",
    valSpecialty: "Expert en Industries Agroalimentaires (Food Industry Expert)",
    lblRegNum: "Numéro d'Enregistrement :",
    lblBirth: "Date et Lieu de Naissance :",
    valBirth: "05/11/1989 à Bounoura - Ghardaïa (بنورة - غرداية)",
    lblValidity: "Date d'Émission et Validité :",
    valValidity: "Octobre 2026 (Valable un an renouvelable)",
    lblAuthorityLeader: "Président de l'Autorité Nationale :",
    valAuthorityLeader: "Commandant Chribat Abdelkrim (القائد شريبط عبد الكريم)",
    lblMinistryApproval: "Agrément du Ministère de l'Intérieur et des Collectivités Locales :",
    legalStatusNotice: "Le titulaire de cette carte est une personnalité juridique investie des pleins pouvoirs auprès des autorités officielles, administratives et sécuritaires.",
    unReferenceNotice: "Déclaration sur le Droit au Développement adoptée par la résolution 128/14 de l'Assemblée Générale des Nations Unies du 4 décembre 1986.",

    // Tier 3 Contact & Addresses
    contactTitle: "Contacts Directs & Sièges Administratifs",
    telGroupTitle: "Lignes Téléphoniques Officielles",
    telGroupSub: "Ligne directe et bureau du Centre",
    telTypeFax: "Téléphone / Fax :",
    telTypeMobile1: "Ligne Mobile 1 :",
    telTypeMobile2: "Ligne Mobile 2 :",
    telTypeMobile3: "Ligne Mobile 3 :",
    emailGroupTitle: "Courriel Électronique Officiel",
    emailGroupSub: "Pour correspondances administratives officielles",
    copyEmailBtn: "Copier l'e-mail",
    sendEmailDirectBtn: "Envoyer un courriel officiel",
    hqMainTitle: "Siège National — Alger :",
    hqMainAddress: "249 Rue Boudjemaa Temim, Draria Céramique — Alger",
    hqAdminTitle: "Administration Centrale — Constantine :",
    hqAdminAddress: "W.J 14 Cité 1500 Logements AADL Extension Belmanaa Bât. 39 Local 17 Nouvelle Ville — Constantine",

    // Footer
    republicFooter: "République Algérienne Démocratique et Populaire",
    authorityFooter: "Organisation Algérienne Communication pour le Développement • Autorité Nationale pour les Migrants",
    footerCardRef: "Carte de Commandement N° : 100126 • Agrément Ministère de l'Intérieur : 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    copyrightText: "Tous droits réservés et protégés par la loi pour l'État Algérien",

    // Toasts
    copiedToast: "Copié avec succès dans le presse-papier",
    vcardSuccessToast: "Téléchargement de la carte de contact vCard..."
  },

  en: {
    // Document Title
    pageTitle: "Mr. Abdelghani Baba Ben Yahmed | Official Digital Portal",

    // Topbar & Republic Header
    republicHeader: "People's Democratic Republic of Algeria",
    republicSub: "People's Democratic Republic of Algeria",
    orgName: "Algerian Organization Communication for Development",
    authorityName: "National Authority for the Development of Migrants and Community Care Abroad",
    pillar1: "Communication",
    pillar2: "Investment Promotion",
    pillar3: "Development",

    // Text strictly inside portrait golden container
    nameAr: "MR. ABDELGHANI BABA BEN YAHMED",
    nameEn: "السيد عبد الغني بابا بن يحمد",
    roleTitle: "Member of the Central Regional Office — Algiers",
    expertTitle: "Food Industry Expert • خبير في الصناعات الغذائية",

    // Rank Badge
    leadershipBadge: "Command Card • Regional Central Office Member",

    // Tier 1 Buttons
    saveContactBtn: "Save Official Contact (vCard)",
    saveContactSub: "Download certified executive contact card to device",
    sharePortalBtn: "Share Official Profile",
    copyLinkBtn: "Copy Link",

    // Tier 2 Missions & Competencies
    missionsTitle: "Strategic Mandates & Core Competencies",
    card1Title: "Central Regional Office — Algiers",
    card1Desc: "Representing the National Authority before governmental bodies and institutional coordination across Algiers and the Central province.",
    expertTag: "Strategic Specialized Domain",
    card2Title: "Food Industry & Agro-Food Security",
    card2Desc: "Developing and mentoring food transformation projects, strengthening supply chains, and driving sustainable investment in the food sector.",
    card3Title: "Investment Promotion & Diaspora Affairs",
    card3Desc: "Assisting international investors and national diaspora talents, facilitating economic initiatives with high added value.",

    // Section: Accreditations & Legal Status
    accreditationsTitle: "Official Accreditations & Legal Authority",
    officialCardType: "Certified Executive Command Card",
    lblHolderName: "Full Name :",
    valHolderName: "ABDELGHANI BABA BEN YAHMED (عبد الغني بابا بن يحمد)",
    lblOfficialRole: "Official Position :",
    valOfficialRole: "Command Card — Member of the Central Regional Office (Algiers)",
    lblSpecialty: "Specialization & Qualification :",
    valSpecialty: "Food Industry Expert (خبير في الصناعات الغذائية)",
    lblRegNum: "Official Registration No. :",
    lblBirth: "Date and Place of Birth :",
    valBirth: "1989/11/05 in Bounoura - Ghardaïa (بنورة - غرداية)",
    lblValidity: "Issue Date and Term :",
    valValidity: "October 2026 (Valid for one year renewable)",
    lblAuthorityLeader: "President of the National Authority :",
    valAuthorityLeader: "Commandant Chribat Abdelkrim (القائد شريبط عبد الكريم)",
    lblMinistryApproval: "Ministry of Interior and Local Authorities Approval :",
    legalStatusNotice: "The holder of this card is a legal executive entity with full competence before all government, administrative, and security authorities.",
    unReferenceNotice: "Declaration on the Right to Development adopted under UN General Assembly Resolution 128/14 of December 4, 1986.",

    // Tier 3 Contact & Addresses
    contactTitle: "Official Direct Contact & Central Administration",
    telGroupTitle: "Official Telephone Lines",
    telGroupSub: "Direct line and Central Office",
    telTypeFax: "Telephone / Fax :",
    telTypeMobile1: "Mobile Line 1 :",
    telTypeMobile2: "Mobile Line 2 :",
    telTypeMobile3: "Mobile Line 3 :",
    emailGroupTitle: "Official Electronic Mail",
    emailGroupSub: "For official administrative correspondence",
    copyEmailBtn: "Copy Address",
    sendEmailDirectBtn: "Send Official Email Now",
    hqMainTitle: "National Headquarters — Algiers :",
    hqMainAddress: "249 Rue Boudjemaa Temim, Draria Ceramique — Algiers",
    hqAdminTitle: "Central Administration — Constantine :",
    hqAdminAddress: "W.J 14 Cite 1500 AADL Housing Extension Belmanaa Bldg. 39 Store 17 New City — Constantine",

    // Footer
    republicFooter: "People's Democratic Republic of Algeria",
    authorityFooter: "Algerian Organization Communication for Development • National Authority for Migrants Abroad",
    footerCardRef: "Command Card No: 100126 • Ministry of Interior Approval No: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    copyrightText: "All rights reserved and legally protected for the Algerian State",

    // Toasts
    copiedToast: "Copied to clipboard successfully",
    vcardSuccessToast: "Downloading executive vCard contact..."
  }
};

let currentLang = 'ar';

function initI18n() {
  const savedLang = localStorage.getItem('executive_portal_lang') || 'ar';
  setLanguage(savedLang);

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('executive_portal_lang', lang);

  // Update HTML tag
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update Title
  document.title = TRANSLATIONS[lang].pageTitle || document.title;

  // Update active buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Update all data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = TRANSLATIONS[lang][key];
    if (translation) {
      if (key === 'legalStatusNotice') {
        el.innerHTML = `<strong>${lang === 'ar' ? 'الصفة القانونية :' : (lang === 'fr' ? 'Statut Juridique :' : 'Legal Status :')}</strong> ${translation}`;
      } else if (key === 'unReferenceNotice') {
        el.innerHTML = `<strong>${lang === 'ar' ? 'المرجعية الأممية :' : (lang === 'fr' ? 'Référence Onusienne :' : 'UN Mandate :')}</strong> ${translation}`;
      } else {
        el.textContent = translation;
      }
    }
  });
}

/* ==========================================================================
   2. VCARD GENERATOR & DOWNLOADER (RFC 6350 / vCard 3.0 UTF-8)
   ========================================================================== */
function initVCardDownloader() {
  const saveBtn = document.getElementById('btnSaveContact');
  if (!saveBtn) return;

  saveBtn.addEventListener('click', () => {
    const vCardData = generateVCardString();
    downloadVCardFile(vCardData, 'Abdelghani_Baba_Ben_Yahmed_Contact.vcf');
    showToast(TRANSLATIONS[currentLang].vcardSuccessToast || "Downloading vCard...");
  });
}

function generateVCardString() {
  // Build RFC 6350 vCard with complete UTF-8 attributes
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N;CHARSET=UTF-8:Baba Ben Yahmed;Abdelghani;;M.;',
    'FN;CHARSET=UTF-8:Abdelghani Baba Ben Yahmed (عبد الغني بابا بن يحمد)',
    'ORG;CHARSET=UTF-8:المنظمة الجزائرية إتصال من أجل التنمية;الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
    'TITLE;CHARSET=UTF-8:عضو بالمكتب الجهوي - الوسط الجزائر العاصمة | خبير في الصناعات الغذائية',
    'ROLE;CHARSET=UTF-8:عضو المكتب الجهوي للوسط - خبير صناعات غذائية',
    'TEL;TYPE=WORK,VOICE:+21339023769',
    'TEL;TYPE=CELL,VOICE;TYPE=pref:+213553609631',
    'TEL;TYPE=CELL,VOICE:+213552022868',
    'TEL;TYPE=CELL,VOICE:+213656127378',
    'EMAIL;TYPE=PREF,INTERNET:aocfdpdg02@gmail.com',
    'ADR;TYPE=WORK;CHARSET=UTF-8:;;249 شارع بوجمعة تميم درارية سيراميك;الجزائر العاصمة;الجزائر;;الجزائر',
    'NOTE;CHARSET=UTF-8:بطاقة قيادة رقم: 100126 - تسجيل: 2026101601261019 - إعتماد وزارة الداخلية رقم 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21 - خبير في الصناعات الغذائية (Food Industry Expert)',
    'URL:https://algeria-executive-portal.dz',
    'REV:' + new Date().toISOString(),
    'END:VCARD'
  ].join('\r\n');
}

function downloadVCardFile(content, filename) {
  // Prepend UTF-8 BOM so native contacts apps (Outlook, Apple, Android) read Arabic perfectly
  const blob = new Blob(['\uFEFF' + content], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.href = url;
  tempLink.setAttribute('download', filename);
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ==========================================================================
   3. CLIPBOARD COPY HANDLERS & TOAST NOTIFICATION
   ========================================================================== */
function initClipboardHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      copyTextToClipboard(textToCopy, () => {
        showToast(`${TRANSLATIONS[currentLang].copiedToast} : ${textToCopy}`);
      });
    });
  });

  const copyLinkBtn = document.getElementById('btnCopyLink');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      const pageUrl = window.location.href;
      copyTextToClipboard(pageUrl, () => {
        showToast(TRANSLATIONS[currentLang].copiedToast);
      });
    });
  }
}

function copyTextToClipboard(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
      fallbackCopyText(text, onSuccess);
    });
  } else {
    fallbackCopyText(text, onSuccess);
  }
}

function fallbackCopyText(text, onSuccess) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.top = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Copy fallback failed', err);
  }
  document.body.removeChild(textArea);
}

let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   4. SHARE PORTAL ACTION
   ========================================================================== */
function initShareAction() {
  const shareBtn = document.getElementById('btnSharePortal');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const title = TRANSLATIONS[currentLang].pageTitle;
    const text = `${TRANSLATIONS[currentLang].nameAr} — ${TRANSLATIONS[currentLang].roleTitle} (${TRANSLATIONS[currentLang].expertTitle})`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyTextToClipboard(url, () => {
            showToast(TRANSLATIONS[currentLang].copiedToast);
          });
        }
      }
    } else {
      copyTextToClipboard(url, () => {
        showToast(TRANSLATIONS[currentLang].copiedToast);
      });
    }
  });
}
