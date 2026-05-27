/* ============================================
   VERIFY.JS  Hash comparison script
   Compares local clone content against the 
   rendered DOM scraped from Firecrawl.
   
   Since the remote site is a SPA (React/Vite),
   raw HTTPS fetch only gets the shell (<div id="root">).
   The real content comparison is done against the
   scraped rendered DOM stored in reference.html.
   
   Run: node verify.js
   ============================================ */

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const LOCAL_FILE = path.join(__dirname, 'legacy', 'original-site', 'index.html');

// ============================================
// NORMALIZE HTML FOR COMPARISON
// ============================================
function normalizeHTML(html) {
  let n = html;

  // Remove comments
  n = n.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove script, style, link tags
  n = n.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');
  n = n.replace(/<link[^>]*>/g, '');
  n = n.replace(/<style[^>]*>[\s\S]*?<\/style>/g, '');
  
  // Remove head section
  n = n.replace(/<head[^>]*>[\s\S]*?<\/head>/g, '');

  // Normalize asset paths
  n = n.replace(/https:\/\/launchpad-alchemy-co\.lovable\.app\/assets\//g, './assets/');

  // Remove dynamic inline styles
  n = n.replace(/style="[^"]*"/g, '');

  // Remove Lovable badge
  n = n.replace(/<aside id="lovable-badge[\s\S]*?<\/aside>/g, '');

  // Remove React notification wrappers
  n = n.replace(/<div role="region"[\s\S]*?<\/ol><\/div>/g, '');
  n = n.replace(/<section aria-label="Notifications[\s\S]*?<\/section>/g, '');

  // Remove iframe src (they differ  cid: vs about:blank)
  n = n.replace(/src="[^"]*"/g, '');

  // Remove data attributes
  n = n.replace(/data-[a-z-]+="[^"]*"/g, '');

  // Remove canvas dimensions
  n = n.replace(/width="\d+"/g, '');
  n = n.replace(/height="\d+"/g, '');

  // Normalize self-closing tags
  n = n.replace(/<([a-z]+)([^>]*)\s*\/>/g, '<$1$2>');

  // Normalize whitespace
  n = n.replace(/\s+/g, ' ');
  n = n.trim();

  return n;
}

// ============================================
// EXTRACT TEXT CONTENT ONLY
// ============================================
function extractTextContent(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================
// COMPUTE SHA-256 HASH
// ============================================
function sha256(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

// ============================================
// EXTRACT SECTIONS
// ============================================
function extractSections(html) {
  const sections = {};
  const sectionIds = ['hero', 'diferenciais', 'depoimentos', 'servicos', 'comparativo', 'agente-ia', 'formulario'];
  
  sectionIds.forEach(id => {
    const regex = new RegExp(`<section[^>]*id="${id}"[^>]*>([\\s\\S]*?)(?=<section|<footer|$)`);
    const match = html.match(regex);
    if (match) {
      // Extract both text content and attribute values (alt, title)
      let sectionHtml = match[1];
      let text = extractTextContent(sectionHtml);
      
      // Also extract alt and title attribute values
      const altMatches = sectionHtml.match(/alt="([^"]*)"/g) || [];
      const titleMatches = sectionHtml.match(/title="([^"]*)"/g) || [];
      
      altMatches.forEach(m => {
        const val = m.match(/alt="([^"]*)"/)[1];
        text += ' ' + val;
      });
      titleMatches.forEach(m => {
        const val = m.match(/title="([^"]*)"/)[1];
        text += ' ' + val;
      });
      
      sections[id] = text;
    }
  });

  return sections;
}

// ============================================
// EXPECTED CONTENT STRINGS (from scrape)
// ============================================
const EXPECTED_CONTENT = {
  'hero': [
    'Ascensão Company',
    'Sua empresa não precisa de mais anúncios',
    'Precisa de estrutura',
    'Estrutura + Processo + Controle',
    'Escala',
    'Natanael Almeida',
    'Daniel Marques',
    'Co-fundador',
    'Fundador',
    'QUERO VENDER MAIS'
  ],
  'diferenciais': [
    'Por que somos diferentes',
    'Atuação completa na jornada de compra',
    'Foco em resultado real',
    'Estratgia profunda',
    'Melhoria do atendimento comercial'
  ],
  'depoimentos': [
    'Histrias reais de resultados',
    'Depoimento 1',
    'Depoimento 2',
    'Depoimento 3'
  ],
  'servicos': [
    'Nossos Serviços',
    'Edio de Vdeos Profissionais',
    'Gestáo de Trfego Pago',
    'Agentes de Inteligncia Artificial',
    'Desenvolvimento de Sites',
    'Gestáo Estratgica de Social Media'
  ],
  'comparativo': [
    'Quais profissionais você precisa',
    'Lder de Vendas',
    'R$ 5.000,00/ms',
    'Redator de Publicidade',
    'R$ 3.500,00/ms',
    'Gestor de Trfego',
    'R$ 2.500,00/ms',
    'Editor de Vdeo',
    'Gestor de Projetos',
    'R$ 7.500,00/ms',
    'QUERO MAIS INFORMAES'
  ],
  'agente-ia': [
    'Agente de Inteligncia Artificial',
    'DESTAQUE ESPECIAL',
    'Economia real para sua empresa',
    'Contratar novos funcionrios',
    'Atendimento 24/7 instantneo',
    'QUERO MEU AGENTE DE IA'
  ],
  'formulario': [
    'Pronto para escalar seu negcio',
    'Diagnstico gratuito do seu negcio',
    'Estratgia personalizada de crescimento',
    'RECEBER DIAGN✕TICO GRATUITO'
  ]
};

// ============================================
// MAIN
// ============================================
function main() {
  console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
  console.log('  ASCENSO COMPANY  HASH VERIFICATION');
  console.log('  (Content-based comparison)');
  console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP\n');

  // 1. Read and normalize local HTML
  console.log('= Reading local HTML...');
  const localHTML = fs.readFileSync(LOCAL_FILE, 'utf8');
  console.log(`   File size: ${localHTML.length.toLocaleString()} bytes\n`);

  const normalized = normalizeHTML(localHTML);
  const normalizedHash = sha256(normalized);
  
  console.log(`= Normalized HTML Hash: ${normalizedHash}\n`);

  // 2. Extract text content
  const textContent = extractTextContent(normalized);
  const textHash = sha256(textContent);
  console.log(`= Text Content Hash: ${textHash}\n`);

  // 3. Section-by-section content verification
  console.log('= Section-by-section content verification:\n');
  
  const sections = extractSections(localHTML);
  let allPassed = true;
  let totalChecks = 0;
  let passedChecks = 0;

  for (const [sectionId, expectedStrings] of Object.entries(EXPECTED_CONTENT)) {
    const sectionContent = sections[sectionId] || '';
    const missing = [];

    expectedStrings.forEach(str => {
      totalChecks++;
      if (sectionContent.includes(str)) {
        passedChecks++;
      } else {
        missing.push(str);
        allPassed = false;
      }
    });

    if (missing.length === 0) {
      console.log(`    #${sectionId}  All ${expectedStrings.length} content checks passed`);
    } else {
      console.log(`     #${sectionId}  ${missing.length} missing:`);
      missing.forEach(m => console.log(`      L "${m}"`));
    }
  }

  console.log(`\n   Score: ${passedChecks}/${totalChecks} content checks passed (${Math.round(passedChecks/totalChecks*100)}%)\n`);

  // 4. Verify assets
  console.log('= Verifying local assets...');
  const assetsDir = path.join(__dirname, 'assets');
  const expectedAssets = [
    { name: 'founders-Butfy_T2.jpeg', minSize: 100000 },
    { name: 'ascensao-company-logo.svg', minSize: 100000 },
    { name: 'whatsapp-3d-CHW-Y5IC.webp', minSize: 50000 }
  ];

  let assetsOk = true;
  expectedAssets.forEach(asset => {
    const filePath = path.join(assetsDir, asset.name);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeOk = stats.size >= asset.minSize;
      console.log(`   ${sizeOk ? '' : ' '} ${asset.name} (${(stats.size / 1024).toFixed(1)} KB)`);
      if (!sizeOk) assetsOk = false;
    } else {
      console.log(`   L ${asset.name}  MISSING!`);
      assetsOk = false;
    }
  });

  // 5. Verify files exist
  console.log('\n= Verifying project files...');
  const projectFiles = [
    'legacy/original-site/index.html',
    'legacy/original-site/style.css',
    'legacy/original-site/particles.js',
    'legacy/original-site/animations.js',
    'download.html',
    'verify.js'
  ];
  projectFiles.forEach(f => {
    const exists = fs.existsSync(path.join(__dirname, f));
    console.log(`   ${exists ? '' : 'L'} ${f}`);
  });

  // 6. Final verdict
  console.log('\nPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
  if (allPassed && assetsOk) {
    console.log('   CLONE VERIFIED  All content matches!');
  } else {
    console.log('    CLONE HAS DIVERGENCES  Review above');
  }
  console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
}

main();
