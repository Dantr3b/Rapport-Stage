const PROFILE = {
  name: "Gabin Rolland-Bertrand",
  cvUrl: "CV Gabin Rolland-Bertrand.pdf",
  linkedin: "https://www.linkedin.com/in/gabin-rolland-bertrand-0aaa84277",
  kpi: { articles: 5, skills: 10, hours: 210 },
};

const POSTS = [
  {id:"integration",title:"Mon intégration : outils, rituels et culture d’équipe",excerpt:"Une intégration facilitée par mon expérience passée, avec pour défis la communication et l’adaptation aux outils existants.",tags:["intégration","communication","outils"],date:"2025-06-10",content:`
  <h2>Mon intégration</h2>
  <p>
  Mon intégration dans l’équipe s’est déroulée de manière fluide car je travaillais déjà pour l’entreprise en tant qu’agent de piste.
  Je connaissais donc une grande partie de l’équipe ainsi que les besoins concrets de l’entreprise. Cette familiarité a rendu la
  transition naturelle et a facilité mon adaptation au nouveau rôle orienté informatique.
  </p>

  <h3>Défis rencontrés</h3>
  <p>
  Le principal défi a concerné la <strong>communication avec mes supérieurs non techniques</strong>.
  J’ai dû apprendre à interpréter leurs attentes exprimées de manière générale, puis à les traduire en objectifs
  techniques clairs et réalisables. Ce travail d’interprétation m’a permis de mieux structurer mes missions et
  d’aligner mes solutions sur les besoins réels de l’entreprise.
  </p>
  <p>
  Un second défi a été l’<strong>adaptation aux outils déjà en place</strong>. Comprendre leur logique, identifier leurs
  limites et les utiliser efficacement a nécessité une phase d’apprentissage rapide afin de rester productif.
  </p>

  <h3>Ce que j’ai appris</h3>
  <ul>
  <li>Renforcer mes compétences en communication avec des interlocuteurs non techniques.</li>
  <li>Transformer des besoins exprimés simplement en solutions concrètes et viables.</li>
  <li>M’adapter rapidement à un environnement technique préexistant.</li>
  </ul>

  <h3>Prise de recul</h3>
  <p>
  Cette intégration m’a confirmé l’importance de la <strong>pédagogie et de l’écoute active</strong> dans un rôle technique.
  J’ai compris que mon efficacité ne se limite pas à mes compétences en informatique, mais repose aussi sur ma
  capacité à créer un langage commun entre la technique et le métier. Cette expérience m’a rendu plus autonome,
  plus adaptable et mieux préparé pour les prochaines étapes de mon stage.
  </p>
`,},{id:"mission-tech",title:"Mission technique : de la spec au livrable",excerpt:"Développement d’un affichage dynamique des tarifs avec gestion des heures creuses et back-office administrateur.",tags:["tech","php","web","backoffice"],date:"2025-06-24",content:`
<h2>Mission technique : affichage dynamique des tarifs</h2>
<p>
  L’entreprise avait besoin d’un <strong>système d’affichage des tarifs</strong> accessible au public, avec une
  spécificité importante : appliquer une remise automatique entre 13h et 15h, période considérée comme
  heures creuses. L’objectif était de fournir une solution fiable, flexible et facile à maintenir pour les
  responsables non techniques.
</p>

<h3>Approche et choix techniques</h3>
<p>
  Pour répondre à ce besoin, j’ai mis en place un <strong>serveur web local avec WAMP</strong> et développé une
  <strong>page de tarifs en PHP</strong>. Ce système permettait de calculer dynamiquement les prix affichés en
  fonction de l’heure. Ainsi, lors du créneau 13h–15h, les remises s’appliquaient automatiquement.
</p>
<p>
  Afin de rendre la solution accessible à tous, j’ai également développé un <strong>back-office</strong> permettant à un
  utilisateur non technique de modifier facilement les tarifs, définir les plages d’heures creuses ou mettre à
  jour les informations sans avoir à manipuler le code source.
</p>

<h3>Extrait de code simplifié</h3>
<pre><code class="language-php">
// Vérification de l'heure et application des tarifs
$heure = date('H');
if($heure >= 13 && $heure < 15){
    $tarif = $tarif_base * 0.8; // remise 20% heures creuses
} else {
    $tarif = $tarif_base;
}
</code></pre>

<h3>Impact</h3>
<p>
  Cette solution a permis de <strong>gagner en efficacité</strong> et en autonomie :
  </p>
  <ul>
    <li>Affichage des tarifs en temps réel et sans erreurs de saisie.</li>
    <li>Flexibilité pour adapter les prix ou modifier les heures creuses via le back-office.</li>
    <li>Amélioration de l’expérience client avec une communication claire et dynamique des tarifs.</li>
    <li>Réduction de la charge de travail des responsables qui n’avaient plus besoin d’intervenir manuellement.</li>
  </ul>
<p>
  En résumé, ce projet m’a permis de mettre en pratique mes compétences en <strong>développement web</strong>,
  en <strong>gestion de contraintes métier</strong> et en <strong>ergonomie applicative</strong>, tout en apportant une
  réelle valeur ajoutée à l’entreprise.
</p>
`,},{id:"competences",title:"Compétences mobilisées et développées",excerpt:"Retour sur les savoirs, savoir-faire et savoir-être mis en pratique lors du stage.",tags:["compétences","formation","apprentissage"],date:"2025-07-02",content:`
<h2>Compétences mobilisées et développées</h2>
<p>
Mon stage m’a permis de mettre en pratique un large panel de compétences acquises en formation,
tout en en développant de nouvelles adaptées au contexte de l’entreprise et à ses besoins spécifiques.
</p>

<h3>Compétences techniques</h3>
<ul>
<li><strong>Développement web :</strong> création d’une application en PHP pour l’affichage dynamique des tarifs.</li>
<li><strong>Administration système :</strong> installation et configuration d’un serveur local (WAMP) pour héberger la solution.</li>
<li><strong>Réseau :</strong> mise en place d’un Wi-Fi public adapté aux nouveaux locaux.</li>
<li><strong>Matériel :</strong> installation et configuration de périphériques (imprimantes, postes de travail).</li>
<li><strong>Bases de données :</strong> structuration simple pour la gestion des tarifs et des paramètres d’heures creuses.</li>
</ul>

<h3>Compétences transverses</h3>
<ul>
<li><strong>Communication :</strong> savoir traduire les demandes de mes supérieurs non techniques en solutions concrètes.</li>
<li><strong>Gestion de projet :</strong> planifier et prioriser les actions liées à la migration informatique et au développement applicatif.</li>
<li><strong>Adaptabilité :</strong> prise en main rapide des outils déjà en place et intégration des contraintes métiers.</li>
<li><strong>Esprit d’analyse :</strong> proposer des solutions techniques pertinentes et adaptées au contexte des nouveaux locaux.</li>
</ul>

<h3>Prise de recul</h3>
<p>
Ce stage m’a montré l’importance d’être à la fois <strong>technicien</strong> et <strong>pédagogue</strong> :
la valeur d’une solution ne réside pas uniquement dans sa robustesse technique, mais aussi dans sa
capacité à être comprise, utilisée et maintenue par l’équipe. Cette expérience a renforcé ma confiance
en mes compétences, tout en m’incitant à continuer à développer mes aptitudes en communication
et en gestion de projet.
</p>
`,},{id:"probleme-solution",title:"Un problème, une solution : diagnostic et résolution",excerpt:"Étude de cas : un obstacle technique rencontré pendant le stage et la démarche mise en place pour le résoudre.",tags:["problème","solution","wifi","backoffice"],date:"2025-07-16",content:`
<h2>Un problème, une solution</h2>
<p>
L’un des défis majeurs rencontrés durant mon stage a été la <strong>mise en place du Wi-Fi public</strong>
dans les nouveaux locaux. L’objectif était d’offrir un accès fiable et sécurisé aux clients, sans compromettre
le réseau interne de l’entreprise.
</p>

<h3>Le problème</h3>
<p>
Lors de la configuration initiale, le Wi-Fi public perturbait le fonctionnement du réseau interne,
créant des ralentissements et un risque de sécurité. De plus, la couverture n’était pas homogène,
certains espaces restant sans signal stable.
</p>

<h3>La démarche de résolution</h3>
<ul>
<li>Analyse du réseau existant et identification des points de saturation.</li>
<li>Séparation claire entre le réseau interne et le Wi-Fi public via la configuration du routeur.</li>
<li>Optimisation du placement des bornes Wi-Fi pour améliorer la couverture.</li>
<li>Tests réguliers pour valider la stabilité et la sécurité de la connexion.</li>
</ul>

<h3>Résultat</h3>
<p>
Grâce à ces ajustements, le Wi-Fi public est devenu <strong>stable, sécurisé et fonctionnel</strong> dans l’ensemble
du bâtiment. L’entreprise bénéficie désormais d’un service apprécié des clients, sans impact négatif
sur son infrastructure interne.
</p>

<h3>Prise de recul</h3>
<p>
Cette expérience m’a permis de développer mes compétences en <strong>diagnostic réseau</strong> et en
<strong>sécurité informatique</strong>. J’ai également appris à tester mes solutions de manière itérative et
à tenir compte à la fois des besoins techniques et de l’expérience utilisateur finale.
</p>
`,},{id:"bilan",title:"Bilan de stage : apprentissages, axes d’amélioration et perspectives",excerpt:"Retour global sur mon expérience : compétences acquises, difficultés rencontrées et perspectives professionnelles.",tags:["bilan","réflexion","stage"],date:"2025-08-30",content:`
<h2>Bilan de stage</h2>
<p>
Ce stage m’a offert une première expérience complète dans un environnement professionnel en pleine évolution,
marquée par la migration de l’infrastructure informatique vers de nouveaux locaux et le développement
de solutions adaptées aux besoins de l’entreprise.
</p>

<h3>Mes acquis</h3>
<ul>
<li><strong>Techniques :</strong> déploiement et configuration d’un parc informatique (PC, imprimantes, Wi-Fi),
création d’une application web en PHP avec back-office, administration d’un serveur local.</li>
<li><strong>Transverses :</strong> communication avec des interlocuteurs non techniques, gestion de projet,
interprétation des besoins métiers en solutions concrètes.</li>
<li><strong>Humains :</strong> intégration rapide dans l’équipe, sens du service et autonomie dans mes missions.</li>
</ul>

<h3>Difficultés rencontrées</h3>
<p>
La principale difficulté a été de <strong>traduire les attentes de mes supérieurs</strong>, souvent exprimées de manière
générale, en objectifs techniques réalisables. J’ai dû faire preuve de pédagogie et de méthode pour proposer
des solutions adaptées tout en respectant les contraintes techniques et organisationnelles.
</p>

<h3>Axes d’amélioration</h3>
<p>
Ce stage m’a montré l’importance de <strong>structurer davantage ma démarche de gestion de projet</strong>
et de renforcer mes compétences en documentation technique. À l’avenir, je souhaite améliorer la
traçabilité de mes actions et formaliser mes méthodes pour gagner en efficacité et en clarté.
</p>

<h3>Perspectives</h3>
<p>
Cette expérience confirme mon envie de poursuivre dans le domaine du <strong>développement et de l’administration
informatique</strong>. Elle m’a permis de consolider mes bases et de me projeter vers une alternance d’un an
afin de continuer à progresser, d’élargir mon expertise et de participer à des projets à plus grande échelle.
</p>

<p>
En résumé, ce stage m’a permis de <strong>gagner en compétences techniques, en autonomie et en professionnalisme</strong>,
tout en renforçant ma motivation à évoluer dans le secteur informatique.
</p>
`,},
];

const routes = ["accueil", "entreprise", "articles", "contact"];

function setActiveRoute() {
  const hash = location.hash.replace('#/', '') || 'accueil';
  document.querySelectorAll('[data-route]').forEach(a => {
    const is = a.getAttribute('href') === `#/${hash}`;
    a.classList.toggle('active', is);
  });
  routes.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', id === hash);
  });
}

window.addEventListener('hashchange', setActiveRoute);

const themeToggle = document.getElementById('themeToggle');
function applyTheme() {
  const t = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.toggle('light', t === 'light');
}
applyTheme();
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const cur = localStorage.getItem('theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme();
  });
}

function initProfile() {
  const nameEl = document.getElementById('studentName');
  if (nameEl) nameEl.textContent = PROFILE.name;
  const cvLink = document.getElementById('cvLink');
  if (cvLink) cvLink.href = PROFILE.cvUrl;
  const li = document.getElementById('linkedinLink');
  if (li) li.href = PROFILE.linkedin;
  const kA = document.getElementById('kpiArticles');
  if (kA) kA.textContent = PROFILE.kpi.articles + '+';
  const kS = document.getElementById('kpiSkills');
  if (kS) kS.textContent = PROFILE.kpi.skills + '+';
  const kW = document.getElementById('kpiHours');
  if (kW) kW.textContent = PROFILE.kpi.hours;
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

const postsEl = document.getElementById('posts');
const postTemplate = document.getElementById('postTemplate');
const filterTag = document.getElementById('filterTag');
const searchInput = document.getElementById('search');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function renderTagsOptions() {
  if (!filterTag) return;
  const tags = Array.from(new Set(POSTS.flatMap(p => p.tags))).sort();
  for (const t of tags) {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    filterTag.appendChild(opt);
  }
}

function renderPosts() {
  if (!postsEl || !postTemplate) return;
  postsEl.innerHTML = '';
  const q = (searchInput?.value || '').trim().toLowerCase();
  const tag = filterTag?.value || '';
  POSTS.slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter(p => !tag || p.tags.includes(tag))
    .filter(p =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.tags.join(' ').toLowerCase().includes(q)
    )
    .forEach(p => {
      const node = postTemplate.content.cloneNode(true);
      node.querySelector('.post-title').textContent = p.title;
      node.querySelector('.post-excerpt').textContent = p.excerpt;
      const tagsEl = node.querySelector('.post-tags');
      p.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = t;
        tagsEl.appendChild(span);
      });
      node.querySelector('[data-open]').addEventListener('click', () => openPost(p));
      postsEl.appendChild(node);
    });
}

function openPost(p) {
  if (!modal || !modalContent) return;
  modalContent.innerHTML = `
    <header style="display:flex; align-items:center; justify-content:space-between; gap:12px">
      <h2 style="margin:0">${p.title}</h2>
      <small class="muted">${new Date(p.date).toLocaleDateString('fr-FR')}</small>
    </header>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin:6px 0 14px">
      ${p.tags.map(t => `<span class='tag'>${t}</span>`).join('')}
    </div>
    ${p.content}
  `;
  modal.showModal();
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

searchInput?.addEventListener('input', debounce(renderPosts, 200));
filterTag?.addEventListener('change', renderPosts);

const newPostBtn = document.getElementById('newPostBtn');
newPostBtn?.addEventListener('click', () => {
  const skeleton = `{
id: "slug-a-remplacer",
title: "Titre de l’article",
excerpt: "Résumé de 1–2 phrases",
tags: ["tag1","tag2"],
date: "${new Date().toISOString().slice(0,10)}",
content: \`
<h2>Sous‑titre</h2>
<p>Votre contenu riche en prise de recul.</p>
\`
},`;
  navigator.clipboard.writeText(skeleton);
  alert('Template d\'article copié. Collez‑le dans le tableau POSTS.');
});

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Contact Blog-Portfolio – ${name}`);
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
  const mailto = `mailto:gabin.rolland@gmail.com?subject=${subject}&body=${body}`;
  const status = document.getElementById('formStatus');
  if (status) status.textContent = 'Ouverture de votre client mail…';
  location.href = mailto;
});

const burgerToggle = document.getElementById('burgerToggle');
const mobileNav = document.getElementById('mobileNav');
burgerToggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('active'));
});

// Initialisation
setActiveRoute();
initProfile();
renderTagsOptions();
renderPosts();