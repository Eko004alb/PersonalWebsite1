(function (global) {
  const STORAGE_KEY = 'site-lang';
  const DEFAULT_LANG = 'en';

  const translations = {
    en: {
      'meta.description': 'Erik Guza — Marketing, Growth & Product.',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.projects': 'Projects',
      'nav.blog': 'Blog',
      'nav.cta': 'Get in Touch',
      'opera.aria': 'Sydney Opera House intro video',
      'opera.fallback': 'Your browser does not support the video tag.',
      'hero.greeting': "Hey, I'm Erik 👋",
      'hero.heading': "I'm passionate about",
      'hero.role_title': 'Vice President @ CEMS Club Stockholm',
      'hero.role_sub': 'Currently leading club initiatives',
      'typed.0': 'Growth',
      'typed.1': 'Startups',
      'typed.2': 'Vibe Coding',
      'typed.3': 'Productivity',
      'typed.4': 'Neuroscience',
      'about.label': 'About',
      'about.title': 'Who I am',
      'about.p1': "I'm <strong>Erik Guza</strong> — Albanian-Italian, studying International Management and passionate about growth, startups, and building things that scale.",
      'about.p2': 'From August I will be pursuing a <strong>Double Degree in International Management</strong> at CEMS (Stockholm School of Economics & UCD), after an exchange at <strong>UTS Sydney</strong> where I finished in the top 4% of my cohort and participated in the <strong>Apple Foundation Programme</strong>.',
      'about.p3': "I've led growth for a fashion e-commerce brand, managed 12-person marketing teams, and built content accounts from zero to 6M+ views. I care about neuroscience, productivity, vibe coding, and anything that makes people move.",
      'about.tag.growth': 'Growth',
      'about.tag.marketing': 'Marketing',
      'about.tag.product': 'Product',
      'about.tag.startups': 'Startups',
      'about.tag.neuroscience': 'Neuroscience',
      'about.tag.vibe': 'Vibe Coding',
      'about.tag.apple': 'Apple Foundation',
      'about.tag.cems': 'CEMS',
      'about.lang_label': 'Languages',
      'about.lang.it': '🇮🇹 Italian',
      'about.lang.en': '🇬🇧 English C1',
      'about.lang.sq': '🇦🇱 Albanian',
      'about.lang.de': '🇩🇪 German B1',
      'about.postcards_aria': 'Personal photos of Erik',
      'exp.label': 'Experience',
      'exp.title': 'Where I work',
      'exp.badge.current': 'Current',
      'exp.cems.role': 'Vice President · Stockholm, Sweden · Jul 2026 – Present',
      'exp.settimo.role': 'Growth Intern · Bologna, Italy · Mar 2026 – Jun 2026',
      'exp.settimo.b1': 'Launched a full-funnel digital growth strategy for a Made-in-Italy women\'s fashion brand — drove <strong>+28% organic traffic</strong> and <strong>+18% CVR</strong> via SEO, content restructuring, and A/B testing.',
      'exp.settimo.b2': 'Scaled Instagram & TikTok channels, cutting CPC by 31% and growing combined following by <strong>4,200+</strong>.',
      'exp.settimo.b3': 'Developed a real-time GA4 + Meta Ads dashboard tracking CAC, ROAS (peak <strong>4.2x</strong>), and retention.',
      'exp.stand.role': 'Marketing Intern · Udine, Italy · Jun 2025 – Aug 2025',
      'exp.stand.b1': 'Conducted national and European <strong>market analysis</strong>, evaluating potential partner companies to identify strategic growth opportunities.',
      'exp.stand.b2': 'Supported the CEO in managing <strong>strategic partnerships</strong> and strengthening external stakeholder relationships.',
      'exp.jebo.role': 'Marketing & Communication Associate · Bologna, Italy · May 2024 – Oct 2025',
      'exp.jebo.b1': "Planned and executed digital strategies for clients, developing JEBO's Digital Brand Identity and leading its LinkedIn rebranding.",
      'exp.jebo.b2': 'As Project Manager (Dec 2024 – Jul 2025), managed a team of <strong>12 people</strong> across social media strategy for national clients.',
      'exp.jebo.b3': 'Designed a zero-budget social campaign generating <strong>400K+ impressions/month</strong> and <strong>+35% follower growth</strong> in 1 month.',
      'exp.creator.company': 'Content Creator & Founder',
      'exp.creator.role': 'Udine, Italy · Jul 2022 – Jun 2023',
      'exp.creator.b1': 'Founded and managed Instagram and TikTok accounts reaching <strong>12K+ followers</strong> and <strong>6M+ views</strong>.',
      'edu.label': 'Education',
      'edu.title': 'Academic background',
      'edu.badge.upcoming': 'Upcoming',
      'edu.cems.role': 'Double Degree in International Management · Aug 2026 – Sep 2027',
      'edu.cems.desc': '4th Master in Management Worldwide. Dual degree across University College Dublin and Stockholm School of Economics.',
      'edu.uts.role': 'Exchange Student – Faculty of Business · Sydney, Australia · Jul – Dec 2025',
      'edu.uts.desc': "Selected for the Apple Foundation Programme. Active in Bluebird Pantry – UTS Students' Association.",
      'edu.unibo.role': 'Bachelor in Management & Marketing · Bologna, Italy · Sep 2023 – Jul 2026',
      'edu.unibo.desc': 'GPA: 28.3/30',
      'proj.label': 'Featured Work',
      'proj.title': 'Selected projects',
      'proj.bitetalk.desc': 'An app that informs you about the food you eat. Snap a photo of your meal and get an AI-generated audio summary of nutritional info, ingredients, and cultural context. Built and pitched as part of the Apple Foundation Programme at UTS.',
      'proj.bitetalk.tag.ios': 'iOS App',
      'proj.bitetalk.tag.design': 'Product Design',
      'proj.bitetalk.tag.apple': 'Apple Foundation',
      'proj.bitetalk.tag.uts': 'UTS',
      'proj.bitetalk.tag.ai': 'AI',
      'proj.resensio.tagline': "Feel what's inside",
      'proj.resensio.desc': 'A free, science-backed awareness app that helps people reconnect with their emotional language through a validated TAS-20 based self-assessment and a practical emotional journaling flow.',
      'proj.resensio.tag.mh': 'Mental Health',
      'proj.resensio.tag.aware': 'Self-Awareness',
      'proj.resensio.tag.tas': 'TAS-20',
      'proj.resensio.tag.journal': 'Emotional Journal',
      'proj.resensio.tag.research': 'Research-Backed',
      'proj.thesis.download_aria': 'Download thesis PDF',
      'proj.thesis.desc': "Un'analisi del caso Canva attraverso i framework dell'Economia e Gestione delle Imprese (Abell, Porter, RBV/VRIO, dynamic capabilities) per valutare se il suo vantaggio competitivo regga alla pressione dell'IA generativa.",
      'proj.thesis.tag.thesis': 'Thesis',
      'proj.thesis.tag.canva': 'Canva',
      'proj.thesis.tag.saas': 'SaaS',
      'proj.thesis.tag.vrio': 'VRIO',
      'proj.thesis.tag.genai': 'Gen AI',
      'reading.label': 'Reading',
      'reading.title': "What I'm reading",
      'reading.notion': 'View full list in Notion →',
      'book.status.reading': 'Reading',
      'book.status.read': 'Read',
      'blog.label': 'Writing',
      'blog.title': 'Blog',
      'blog.meta': '6 Jun 2026 · Essay',
      'blog.post_title': 'A Country You Love and Do Not Live In',
      'blog.excerpt': 'Albania, its diaspora, and the economics of belonging from elsewhere.',
      'contact.label': 'Contact',
      'contact.title': "Let's connect",
      'contact.text': 'Open to interesting conversations, collaborations, or just a good chat about marketing and ideas.',
      'footer.blog': 'Blog',
    },
    sq: {
      'meta.description': 'Erik Guza — Marketing, Growth & Produkt.',
      'nav.home': 'Ballina',
      'nav.about': 'Rreth meje',
      'nav.experience': 'Përvoja',
      'nav.education': 'Arsimi',
      'nav.projects': 'Projektet',
      'nav.blog': 'Blogu',
      'nav.cta': 'Kontaktoni',
      'opera.aria': 'Video hyrëse e Sydney Opera House',
      'opera.fallback': 'Shfletuesi juaj nuk e mbështet etiketën video.',
      'hero.greeting': 'Përshëndetje, unë jam Erik 👋',
      'hero.heading': 'Jam i pasionuar për',
      'hero.role_title': 'Nënkryetar @ CEMS Club Stockholm',
      'hero.role_sub': 'Aktualisht drejtoj iniciativat e klubit',
      'typed.0': 'Growth',
      'typed.1': 'Startups',
      'typed.2': 'Vibe Coding',
      'typed.3': 'Produktivitet',
      'typed.4': 'Neuroshkencë',
      'about.label': 'Rreth meje',
      'about.title': 'Kush jam',
      'about.p1': 'Unë jam <strong>Erik Guza</strong> — shqiptaro-italian, studioj International Management dhe jam i pasionuar për growth, startups dhe ndërtimin e gjërave që shkallëzohen.',
      'about.p2': 'Nga gushti do të ndjek një <strong>Double Degree në International Management</strong> në CEMS (Stockholm School of Economics & UCD), pas një exchange në <strong>UTS Sydney</strong> ku mbarova në top 4% të koortës dhe mora pjesë në <strong>Apple Foundation Programme</strong>.',
      'about.p3': 'Kam drejtuar growth për një brand fashion e-commerce, kam menaxhuar ekipe marketingu me 12 persona, dhe kam ndërtuar llogari përmbajtjeje nga zero në 6M+ shikime. Më interesojnë neuroshkenca, produktiviteti, vibe coding dhe gjithçka që i lëviz njerëzit.',
      'about.tag.growth': 'Growth',
      'about.tag.marketing': 'Marketing',
      'about.tag.product': 'Produkt',
      'about.tag.startups': 'Startups',
      'about.tag.neuroscience': 'Neuroshkencë',
      'about.tag.vibe': 'Vibe Coding',
      'about.tag.apple': 'Apple Foundation',
      'about.tag.cems': 'CEMS',
      'about.lang_label': 'Gjuhët',
      'about.lang.it': '🇮🇹 Italisht',
      'about.lang.en': '🇬🇧 Anglisht C1',
      'about.lang.sq': '🇦🇱 Shqip',
      'about.lang.de': '🇩🇪 Gjermanisht B1',
      'about.postcards_aria': 'Foto personale të Erikut',
      'exp.label': 'Përvoja',
      'exp.title': 'Ku kam punuar',
      'exp.badge.current': 'Aktuale',
      'exp.cems.role': 'Nënkryetar · Stockholm, Suedi · Kor 2026 – Sot',
      'exp.settimo.role': 'Growth Intern · Bologna, Itali · Mar 2026 – Qer 2026',
      'exp.settimo.b1': 'Nisëm një strategi digjitale full-funnel growth për një brand fashion femrash Made-in-Italy — rritëm <strong>+28% trafik organik</strong> dhe <strong>+18% CVR</strong> përmes SEO, ristrukturimit të përmbajtjes dhe A/B testing.',
      'exp.settimo.b2': 'Shkallëzuam kanalet Instagram & TikTok, ulëm CPC me 31% dhe rritëm ndjekësit e kombinuar me <strong>4,200+</strong>.',
      'exp.settimo.b3': 'Zhvillova një dashboard real-time GA4 + Meta Ads që ndiqte CAC, ROAS (kulmi <strong>4.2x</strong>) dhe retention.',
      'exp.stand.role': 'Marketing Intern · Udine, Itali · Qer 2025 – Gus 2025',
      'exp.stand.b1': 'Kryeva <strong>analizë tregu</strong> kombëtare dhe europiane, duke vlerësuar kompani potencialisht partnere për mundësi strategjike rritjeje.',
      'exp.stand.b2': 'Mbështeta CEO-n në menaxhimin e <strong>partneriteteve strategjike</strong> dhe forcimin e marrëdhënieve me stakeholderët e jashtëm.',
      'exp.jebo.role': 'Marketing & Communication Associate · Bologna, Itali · Maj 2024 – Tet 2025',
      'exp.jebo.b1': 'Planifikova dhe ekzekutova strategji digjitale për klientë, duke zhvilluar Digital Brand Identity të JEBO dhe duke udhëhequr rebranding-un në LinkedIn.',
      'exp.jebo.b2': 'Si Project Manager (Dhj 2024 – Kor 2025), menaxhova një ekip me <strong>12 persona</strong> për strategji social media për klientë kombëtarë.',
      'exp.jebo.b3': 'Dizajnova një fushatë sociale me buxhet zero që gjeneroi <strong>400K+ shfaqje/muaj</strong> dhe <strong>+35% rritje ndjekësish</strong> në 1 muaj.',
      'exp.creator.company': 'Content Creator & Themelues',
      'exp.creator.role': 'Udine, Itali · Kor 2022 – Qer 2023',
      'exp.creator.b1': 'Themelova dhe menaxhova llogari Instagram dhe TikTok që arritën <strong>12K+ ndjekës</strong> dhe <strong>6M+ shikime</strong>.',
      'edu.label': 'Arsimi',
      'edu.title': 'Sfondi akademik',
      'edu.badge.upcoming': 'Së shpejti',
      'edu.cems.role': 'Double Degree në International Management · Gus 2026 – Sht 2027',
      'edu.cems.desc': 'Masteri i 4-të në Management në botë. Diploma e dyfishtë në University College Dublin dhe Stockholm School of Economics.',
      'edu.uts.role': 'Student Exchange – Faculty of Business · Sydney, Australi · Kor – Dhj 2025',
      'edu.uts.desc': 'Përzgjedhur për Apple Foundation Programme. Aktiv në Bluebird Pantry – UTS Students\' Association.',
      'edu.unibo.role': 'Bachelor në Management & Marketing · Bologna, Itali · Sht 2023 – Kor 2026',
      'edu.unibo.desc': 'Mesatarja: 28.3/30',
      'proj.label': 'Punë e zgjedhur',
      'proj.title': 'Projekte të përzgjedhura',
      'proj.bitetalk.desc': 'Një app që të informon për ushqimin që ha. Bëj një foto të vaktit dhe mer një përmbledhje audio të gjeneruar nga AI me info ushqimore, përbërës dhe kontekst kulturor. Ndërtuar dhe prezantuar si pjesë e Apple Foundation Programme në UTS.',
      'proj.bitetalk.tag.ios': 'iOS App',
      'proj.bitetalk.tag.design': 'Product Design',
      'proj.bitetalk.tag.apple': 'Apple Foundation',
      'proj.bitetalk.tag.uts': 'UTS',
      'proj.bitetalk.tag.ai': 'AI',
      'proj.resensio.tagline': 'Ndje çfarë ke brenda',
      'proj.resensio.desc': 'Një app falas, i bazuar në shkencë, që ndihmon njerëzit të rilidhen me gjuhën e tyre emocionale përmes një vlerësimi të vërtetuar TAS-20 dhe një fluksi praktik journal emocional.',
      'proj.resensio.tag.mh': 'Shëndet Mendor',
      'proj.resensio.tag.aware': 'Vetëdijësim',
      'proj.resensio.tag.tas': 'TAS-20',
      'proj.resensio.tag.journal': 'Journal Emocional',
      'proj.resensio.tag.research': 'I bazuar në kërkim',
      'proj.thesis.download_aria': 'Shkarko PDF-në e tezës',
      'proj.thesis.desc': "Un'analisi del caso Canva attraverso i framework dell'Economia e Gestione delle Imprese (Abell, Porter, RBV/VRIO, dynamic capabilities) per valutare se il suo vantaggio competitivo regga alla pressione dell'IA generativa.",
      'proj.thesis.tag.thesis': 'Tezë',
      'proj.thesis.tag.canva': 'Canva',
      'proj.thesis.tag.saas': 'SaaS',
      'proj.thesis.tag.vrio': 'VRIO',
      'proj.thesis.tag.genai': 'Gen AI',
      'reading.label': 'Lexime',
      'reading.title': 'Çfarë po lexoj',
      'reading.notion': 'Shiko listën e plotë në Notion →',
      'book.status.reading': 'Duke lexuar',
      'book.status.read': 'Lexuar',
      'blog.label': 'Shkrime',
      'blog.title': 'Blogu',
      'blog.meta': '6 Qer 2026 · Ese',
      'blog.post_title': 'Një vend që e do dhe nuk jeton në të',
      'blog.excerpt': 'Shqipëria, diaspora e saj, dhe ekonomia e përkatësisë nga gjetiu.',
      'contact.label': 'Kontakt',
      'contact.title': 'Le të lidhemi',
      'contact.text': 'I hapur për biseda interesante, bashkëpunime, ose thjesht një bisedë të mirë për marketing dhe ide.',
      'footer.blog': 'Blogu',
    },
  };

  function getLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'sq') return stored;
    } catch (_) { /* ignore */ }
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    const next = lang === 'sq' ? 'sq' : 'en';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) { /* ignore */ }
    applyLanguage(next);
    return next;
  }

  function t(key, lang) {
    const l = lang || getLang();
    const dict = translations[l] || translations.en;
    return dict[key] != null ? dict[key] : (translations.en[key] || key);
  }

  function getTypedPhrases(lang) {
    const l = lang || getLang();
    return [0, 1, 2, 3, 4].map((i) => t('typed.' + i, l));
  }

  function translateBookStatus(status, lang) {
    const normalized = String(status || '').trim().toLowerCase();
    if (normalized === 'reading') return t('book.status.reading', lang);
    if (normalized === 'read') return t('book.status.read', lang);
    return status;
  }

  function applyLanguage(lang) {
    const l = lang === 'sq' ? 'sq' : 'en';
    document.documentElement.lang = l;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description', l));

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(key, l);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = t(key, l);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', t(key, l));
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-set-lang');
      const active = btnLang === l;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: l } }));
  }

  function initLangSwitcher() {
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang');
        setLang(lang);
      });
    });
    applyLanguage(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
  } else {
    initLangSwitcher();
  }

  global.SiteI18n = {
    translations,
    getLang,
    setLang,
    t,
    getTypedPhrases,
    translateBookStatus,
    applyLanguage,
  };
})(window);
