export const panelData = {
  center: {
    cat: 'THE BRIDGE',
    title: 'Joan Andreas',
    body: 'Business Architecture Analyst with an engineering foundation. I bring the technical depth to challenge vendors and the communication clarity to align stakeholders — having built production software at Blibli.com before moving into cloud architecture and FinOps at Accenture.',
    metrics: [['AWS SA', 'Certified'], ['CS', 'Bina Nusantara Univ.']],
    tags: ['AWS', 'FinOps', 'Cloud Architecture', 'Python', 'AWS CDK', 'Power BI']
  },
  cloud: {
    cat: 'CAPABILITY',
    title: 'Cloud Architecture',
    body: 'Designing and implementing AWS solutions that align with real business constraints — cost, security, and operability. From serverless functions replacing EOL tools to multi-service architectures for automated reporting pipelines.',
    metrics: [['AWS SA', 'Certified Apr 2026'], ['Serverless', 'Lambda · S3 · SNS']],
    tags: ['AWS Lambda', 'S3', 'SNS', 'EC2', 'EBS', 'AWS CDK', 'CloudFormation']
  },
  finops: {
    cat: 'PRACTICE',
    title: 'FinOps',
    body: 'Cloud financial operations across two consecutive performance periods at Accenture — 100% billing accuracy, zero disputes. Identifying six-figure annualised savings through Savings Plan optimisation and quarterly rightsizing of AWS instances and storage.',
    metrics: [['6-fig', 'annualised savings'], ['Quarterly', 'rightsizing reviews']],
    tags: ['Savings Plans', 'Rightsizing', 'Cost Explorer', 'CUR', 'Anomaly Detection']
  },
  stakeholders: {
    cat: 'PRACTICE',
    title: 'Stakeholder Management',
    body: 'Regular contributor to Management Business Reviews with both client and AWS stakeholders. Translates cloud metrics into language that resonates with execs and boards — Power BI dashboards, executive summaries, and decision-ready narratives.',
    metrics: [['C-Suite', 'audience'], ['Quarterly', 'MBR cadence']],
    tags: ['MBR', 'C-Suite Reporting', 'Power BI', 'Client Mgmt', 'AWS Stakeholders']
  },
  governance: {
    cat: 'PRACTICE',
    title: 'Governance, Risk & Security',
    body: 'Ensuring AWS workloads stay within risk, security, and compliance boundaries. Reviews for cost governance, tagging discipline, and policy enforcement across the account footprint.',
    metrics: [['0', 'billing disputes'], ['100%', 'billing accuracy']],
    tags: ['Risk', 'Security', 'Compliance', 'Tagging Standards', 'Cost Governance']
  },
  migration: {
    cat: 'CAPABILITY',
    title: 'Cloud Migration',
    body: 'Lift-and-shift and re-architecture decisions on real workloads. Apptio ETL pipeline migration delivered ahead of schedule; Flexera migration delivered on time. Replacing EOL tooling with native AWS services where it makes sense.',
    metrics: [['Ahead', 'Apptio ETL pipeline'], ['On time', 'Flexera migration']],
    tags: ['Lift-and-shift', 'Re-architecture', 'Flexera', 'Apptio', 'ETL']
  },
  iac: {
    cat: 'TECHNOLOGY',
    title: 'Infrastructure as Code',
    body: 'Hands-on with AWS CDK and CloudFormation. Replacing manual cloud setup with reproducible, version-controlled infrastructure definitions — same engineering discipline applied to ops.',
    metrics: [['AWS CDK', 'TypeScript / Python'], ['CFN', 'CloudFormation']],
    tags: ['AWS CDK', 'CloudFormation', 'IaC', 'Version Control', 'Python']
  },
  agile: {
    cat: 'PRACTICE',
    title: 'Agile Delivery',
    body: 'Delivery via SAFe / Scrum practices at Accenture. ETL pipeline delivered ahead of schedule, Flexera migration delivered on time, 50% of manual billing work automated — a consistent record of finishing under estimate.',
    metrics: [['50%', 'manual work automated'], ['10%', 'under estimate, consistently']],
    tags: ['SAFe', 'Scrum', 'Sprint Planning', 'Retrospectives', 'Delivery']
  },
  workshops: {
    cat: 'ENABLEMENT',
    title: 'Workshops & Discovery',
    body: 'Runs internal brown-bag workshops on AWS CLI, Python, and serverless for the wider team. Lifts technical fluency across non-engineering colleagues so the practice can move faster collectively.',
    metrics: [['Brown bag', 'AWS CLI · Python · λ'], ['~10%', 'team efficiency gain']],
    tags: ['Knowledge Sharing', 'Discovery', 'Brown Bag', 'Enablement', 'Mentoring']
  },
  biz: {
    cat: 'CAPABILITY',
    title: 'Business Strategy',
    body: 'Translating cloud metrics into business decisions. Regular contributor to Management Business Reviews with client and AWS stakeholders. Developed reporting structures and Power BI dashboards that bring cost and usage data to decision-makers clearly.',
    metrics: [['100%', 'billing accuracy'], ['0', 'billing disputes']],
    tags: ['Power BI', 'Apptio', 'Stakeholder Mgmt', 'MBR', 'Cost Reporting']
  },
  eng: {
    cat: 'FOUNDATION',
    title: 'Engineering Roots',
    body: 'Computer Science graduate from Bina Nusantara University (GPA 3.75). Built and shipped production software at Blibli.com — one of Indonesia\'s largest e-commerce platforms — contributing ~27,600 lines of code to their CMS migration.',
    metrics: [['~27.6K', 'lines of code merged'], ['3.75', 'GPA / 4.0']],
    tags: ['Java', 'Spring Boot', 'Python', 'Kafka', 'Microservices', 'DBMS', 'Parallel Computing', 'Git']
  },
  delivery: {
    cat: 'CAPABILITY',
    title: 'Delivery & Enablement',
    body: 'Consistent delivery track record — ETL pipeline ahead of schedule, Flexera migration on time, 50% of manual billing work automated. Also runs knowledge-sharing sessions: brown bag workshops on AWS CLI, Python, and serverless for the wider team.',
    metrics: [['50%', 'manual work automated'], ['~10%', 'team efficiency gain']],
    tags: ['Python', 'VBA', 'Power Automate', 'ETL', 'Knowledge Sharing']
  },
  aws: {
    cat: 'TECHNOLOGY',
    title: 'AWS Services',
    body: 'AWS Certified Solutions Architect – Associate and Cloud Practitioner (both Apr 2026). Hands-on with compute, storage, serverless, and cost management tooling across production workloads at Accenture.',
    metrics: [['2', 'AWS certifications'], ['Apr 2026', 'both obtained']],
    tags: ['EC2', 'EBS', 'Lambda', 'S3', 'SNS', 'CloudHealth', 'Flexera', 'Apptio']
  }
};

let panelEl, backdropEl, catEl, titleEl, bodyEl, metricsEl, tagsEl, closeBtn;
let lastFocused = null;
let activeNode = null;

function cacheRefs() {
  panelEl    = document.getElementById('detailPanel');
  backdropEl = document.getElementById('panelBackdrop');
  catEl      = document.getElementById('panelCat');
  titleEl    = document.getElementById('panelTitle');
  bodyEl     = document.getElementById('panelBody');
  metricsEl  = document.getElementById('panelMetrics');
  tagsEl     = document.getElementById('panelTags');
  closeBtn   = document.getElementById('panelClose');
}

export function openPanel(id, sourceEl = null) {
  if (!panelEl) cacheRefs();
  const data = panelData[id];
  if (!data) return;

  catEl.textContent = data.cat;
  titleEl.textContent = data.title;
  bodyEl.textContent = data.body;

  metricsEl.innerHTML = data.metrics.map(([num, lab]) => `
    <div class="panel-metric">
      <span class="panel-metric-num">${num}</span>
      <span class="panel-metric-lab">${lab}</span>
    </div>
  `).join('');

  tagsEl.innerHTML = data.tags.map(t => `<span class="panel-tag">${t}</span>`).join('');

  // Highlight the active node, deselecting the previous one.
  if (activeNode) activeNode.classList.remove('node-active');
  const target = sourceEl || document.querySelector(`[data-panel="${id}"]`);
  if (target) {
    target.classList.add('node-active');
    activeNode = target;
  } else {
    activeNode = null;
  }

  lastFocused = document.activeElement;
  panelEl.classList.add('open');
  panelEl.setAttribute('aria-hidden', 'false');
  backdropEl.classList.add('open');

  // Move focus into the panel for keyboard users.
  requestAnimationFrame(() => closeBtn?.focus());
}

export function closePanel() {
  if (!panelEl) cacheRefs();
  panelEl.classList.remove('open');
  panelEl.setAttribute('aria-hidden', 'true');
  backdropEl.classList.remove('open');
  if (activeNode) {
    activeNode.classList.remove('node-active');
    activeNode = null;
  }
  if (lastFocused && typeof lastFocused.focus === 'function') {
    lastFocused.focus();
  }
}

export function initPanel() {
  cacheRefs();

  // Bind clicks on all SVG nodes with data-panel
  document.querySelectorAll('[data-panel]').forEach(el => {
    el.addEventListener('click', () => openPanel(el.dataset.panel, el));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPanel(el.dataset.panel, el);
      }
    });
  });

  closeBtn?.addEventListener('click', closePanel);
  backdropEl?.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panelEl.classList.contains('open')) {
      closePanel();
    }
  });
}
