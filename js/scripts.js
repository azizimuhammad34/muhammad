/* ============================================================
   DATA — tech stack per tab
   ============================================================ */
const SW = 'viewBox="0 0 24 24" fill="none" stroke="currentColor"';
const badge = t =>
  '<svg viewBox="0 0 24 24"><rect x="2.4" y="2.4" width="19.2" height="19.2" rx="5.5" fill="currentColor" opacity=".15"/><text x="12" y="16.8" text-anchor="middle" font-family="Space Grotesk,Inter,sans-serif" font-size="10.5" font-weight="700" fill="currentColor">' + t + '</text></svg>';

const SKILLS = {
  frontend: [
    { name:"React",      pct:95, bg:"#61dafb", mark:'<svg '+SW+' stroke-width="1.6"><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>' },
    { name:"Next.js",    pct:92, bg:"#111",    mark:'<svg '+SW+' stroke-width="1.7"><circle cx="12" cy="12" r="9.2"/><path d="M9.2 15.6V8.4l6.2 7.2V8.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    { name:"TypeScript", pct:88, bg:"#3178c6", mark:badge('TS') },
    { name:"JavaScript", pct:93, bg:"#f7df1e", dark:true, mark:badge('JS') },
    { name:"HTML5",      pct:95, bg:"#e34f26", mark:'<svg '+SW+' stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.5 20 5v6.2c0 5-3.2 8.6-8 10.3-4.8-1.7-8-5.3-8-10.3V5z"/><path d="M8 8.6h8l-.5 6.4-3.5 1.1-3.5-1.1-.2-2.5"/></svg>' },
    { name:"CSS3",       pct:90, bg:"#1572b6", mark:'<svg '+SW+' stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.5 20 5v6.2c0 5-3.2 8.6-8 10.3-4.8-1.7-8-5.3-8-10.3V5z"/><path d="M8 8.6h8l-.6 5.5-3.4 1.1-3.4-1.1-.3-2.5"/></svg>' },
    { name:"Tailwind CSS",pct:92, bg:"#38bdf8", mark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5c-2.6 0-4.4 1.3-5.4 3.9.6-1 1.4-1.5 2.4-1.3.8.2 1.4.8 2.1 1.5.9 1 2 2.1 4.2 2.1 2.6 0 4.4-1.3 5.4-3.9-.6 1-1.4 1.5-2.4 1.3-.8-.2-1.4-.8-2.1-1.5-.9-1-2-2.1-4.2-2.1zM6 13c-2.6 0-4.4 1.3-5.4 3.9.6-1 1.4-1.5 2.4-1.3.8.2 1.4.8 2.1 1.5.9 1 2 2.1 4.2 2.1 2.6 0 4.4-1.3 5.4-3.9-.6 1-1.4 1.5-2.4 1.3-.8-.2-1.4-.8-2.1-1.5-.9-1-2-2.1-4.2-2.1z"/></svg>' },
    { name:"Bootstrap",  pct:82, bg:"#7952b3", mark:badge('B') },
    { name:"Material UI",pct:85, bg:"#007fff", mark:badge('M') },
    { name:"Responsive UI",pct:93, bg:"#8b5cf6", mark:'▦' },
  ],
  backend: [
    { name:"Node.js",    pct:90, bg:"#339933", mark:'<svg '+SW+' stroke-width="1.8" stroke-linejoin="round"><path d="M12 2.5 20 7v10l-8 4.5L4 17V7z"/></svg>' },
    { name:"Express.js", pct:88, bg:"#444",    mark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2 5 13h5l-1.5 9L17 11h-5l1.5-9z"/></svg>' },
    { name:"REST APIs",  pct:94, bg:"#8b5cf6", mark:'<svg '+SW+' stroke-width="1.9" stroke-linecap="round"><path d="M8.5 6 4 12l4.5 6M15.5 6 20 12l-4.5 6"/></svg>' },
    { name:"Supabase",   pct:86, bg:"#3ecf8e", mark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2 4.5 13h5.2l-2 9L19.5 11h-5.2l2-9z"/></svg>' },
    { name:"JWT / Auth", pct:89, bg:"#f59e0b", dark:true, mark:'<svg '+SW+' stroke-width="1.8" stroke-linecap="round"><circle cx="8.6" cy="11" r="3.2"/><path d="M10.9 13.3 19.5 21.9M16 17.5l-1.4-1.4M19 14.5l-1.4-1.4"/></svg>' },
    { name:"Stripe Payments",pct:80, bg:"#635bff", mark:badge('S') },
  ],
  shopify: [
    { name:"Liquid",     pct:90, bg:"#96bf48", mark:'<svg '+SW+' stroke-width="1.8" stroke-linejoin="round"><path d="M12 3.5s6.5 6 6.5 10.5a6.5 6.5 0 0 1-13 0C5.5 9.5 12 3.5 12 3.5z"/></svg>' },
    { name:"Shopify Themes",pct:88, bg:"#7ab55c", mark:'<svg '+SW+' stroke-width="1.7" stroke-linejoin="round"><path d="M6 8.5h12l-1 11H7z"/><path d="M9 8.5a3 3 0 0 1 6 0"/></svg>' },
    { name:"Shopify CLI / Hydrogen",pct:82, bg:"#111", mark:'<svg '+SW+' stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4.5" width="18" height="15" rx="3"/><path d="M6.5 9l3 3-3 3M12 15h5"/></svg>' },
    { name:"Shopify APIs",pct:86, bg:"#2ec2aa", mark:'<svg '+SW+' stroke-width="1.7" stroke-linejoin="round"><rect x="8" y="2.5" width="8" height="5" rx="1.5"/><path d="M9 7.5v3.5a3 3 0 0 0 6 0V7.5M12 14v4M10 21h4"/></svg>' },
    { name:"Online Store 2.0",pct:85, bg:"#5e8e3e", mark:'<svg '+SW+' stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h2l2.4 11h11l1.6-8H7"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="16.5" cy="19" r="1.4"/></svg>' },
    { name:"E-commerce / CRO",pct:89, bg:"#8b5cf6", mark:'<svg '+SW+' stroke-width="1.8" stroke-linecap="round"><path d="M3.5 16.5 9 11l3.5 3.5L20 7M15 7h5v5"/></svg>' },
  ],
  ai: [
    { name:"OpenAI / LLM APIs",pct:92, bg:"#10a37f", mark:'<svg '+SW+' stroke-width="1.5"><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(150 12 12)"/></svg>' },
    { name:"Prompt Engineering",pct:90, bg:"#8b5cf6", mark:'✎' },
    { name:"Python",    pct:82, bg:"#3776ab", mark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 2.5v2.5h5V2.5a2 2 0 0 1 4 0v7a2 2 0 0 1-2 2h-7a4 4 0 0 0-4 4v3a4 4 0 0 1 4 4h-.5" opacity=".9"/><path d="M14.5 21.5V19h-5v2.5a2 2 0 0 1-4 0v-7a2 2 0 0 1 2-2h7a4 4 0 0 0 4-4v-3a4 4 0 0 1 4-4z" opacity=".55"/></svg>' },
    { name:"AI Agents / Workflows",pct:88, bg:"#22d3ee", dark:true, mark:'<svg '+SW+' stroke-width="1.6" stroke-linejoin="round"><rect x="5" y="8.5" width="14" height="11" rx="3"/><circle cx="9.2" cy="13" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.8" cy="13" r="1.1" fill="currentColor" stroke="none"/><path d="M9.6 17.4h4.8M12 8.5V5.5M9.2 5.5h5.6M4.5 10.5 2.5 9M19.5 10.5l2-1.5"/></svg>' },
    { name:"LangChain", pct:80, bg:"#111",    mark:'<svg '+SW+' stroke-width="1.8" stroke-linecap="round"><path d="M9.5 14.5a4 4 0 0 1-5.6.6l-.4-.4a4 4 0 0 1 5.6-5.6l1.4 1.4"/><path d="M14.5 9.5a4 4 0 0 1 5.6-.6l.4.4a4 4 0 0 1-5.6 5.6l-1.4-1.4"/></svg>' },
    { name:"RAG Pipelines",pct:85, bg:"#6366f1", mark:'<svg '+SW+' stroke-width="1.6"><ellipse cx="12" cy="5.5" rx="7" ry="2.8" fill="currentColor" opacity=".4" stroke="none"/><path d="M5 5.5v5.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V5.5"/><path d="M5 11v5.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V11"/></svg>' },
  ],
};

/* render skill bars */
const grid = document.getElementById('skillsGrid');
const lvl = p => p >= 90 ? 'Expert' : p >= 85 ? 'Advanced' : 'Solid';
const markHTML = s => s.mark && s.mark.startsWith('<') ? s.mark : (s.mark || s.name[0]);
function renderSkills(key){
  grid.innerHTML = SKILLS[key].map(s => `
    <div class="skill">
      <div class="head">
        <span class="name"><span class="logo" style="background:${s.bg};${s.dark?'color:#111;':''}">${markHTML(s)}</span>${s.name}</span>
      </div>
      <div class="bar-row">
        <div class="bar"><div class="fill" data-pct="${s.pct}"></div></div>
        <span class="pct">${lvl(s.pct)}</span>
      </div>
    </div>`).join('');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    grid.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.pct + '%');
  }));
}
if(grid) renderSkills('frontend');

/* tab switching */
const tabsEl = document.getElementById('tabs');
if(tabsEl){
  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.tab'); if(!btn) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderSkills(btn.dataset.tab);
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* floating UI: scroll progress + back-to-top */
const toTop = document.getElementById('toTop');
const progress = document.getElementById('scrollProgress');
if(toTop || progress){
  const onScroll = () => {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if(progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if(toTop) toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
  if(toTop) toTop.addEventListener('click', () =>
    window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' }));
}

/* one-click copy buttons + social handles */
(function(){
  const execFallback = text => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  };
  const paste = text => {
    if(navigator.clipboard && window.isSecureContext)
      return navigator.clipboard.writeText(text).then(() => true).catch(() => { execFallback(text); return true; });
    execFallback(text);
    return Promise.resolve(true);
  };
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      paste(btn.dataset.copy || '').then(() => {
        btn.textContent = '✔ Copied';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = btn.dataset.label || 'Copy';
          btn.classList.remove('copied');
        }, 1600);
      });
    });
  });
  document.querySelectorAll('.handle[data-copy]').forEach(h => {
    h.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      paste(h.dataset.copy).then(() => {
        const ico = h.querySelector('.copy-ico');
        if(ico){ ico.textContent = '✔'; h.classList.add('copied'); }
        setTimeout(() => {
          if(ico){ ico.textContent = '⧉'; h.classList.remove('copied'); }
        }, 1600);
      });
    });
  });
})();

/* lightbox for zoomable images — created lazily on first open */
(function(){
  const targets = document.querySelectorAll('.lightbox-trigger');
  if(!targets.length) return;
  let lb = null, img = null;
  const remove = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { if(lb && lb.parentNode) lb.parentNode.removeChild(lb); }, 260);
    lb = null; img = null;
  };
  const close = () => { if(lb) remove(); };
  const open = t => {
    if(lb) remove();
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Image preview');
    const stage = document.createElement('div');
    stage.className = 'lb-stage';
    const btn = document.createElement('button');
    btn.className = 'lb-close';
    btn.setAttribute('aria-label', 'Close');
    btn.innerHTML = '&#10005;';
    img = document.createElement('img');
    img.alt = t.getAttribute('data-alt') || t.alt || '';
    stage.appendChild(btn);
    stage.appendChild(img);
    lb.appendChild(stage);
    document.body.appendChild(lb);
    img.src = t.currentSrc || t.src;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(()=>requestAnimationFrame(()=> lb.classList.add('open')));
    btn.focus();
  };
  targets.forEach(t => t.addEventListener('click', () => open(t)));
  document.addEventListener('click', e => {
    if(!lb) return;
    if(e.target === lb || e.target.closest('.lb-close')) close();
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
})();

/* reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); } });
}, { threshold:.12 });
const reveals = document.querySelectorAll('.reveal');
if(reduceMotion){ reveals.forEach(el => el.classList.add('visible')); }
else { reveals.forEach(el => io.observe(el)); }

/* auto year */
const yr = document.getElementById('year');
if(yr) yr.textContent = new Date().getFullYear();

/* theme (dark default, light opt-in) */
const root = document.documentElement;
const STORAGE_KEY = 'bh-theme';
const toggle = document.getElementById('themeToggle');
if(toggle){
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch(e){}
    toggle.setAttribute('aria-pressed', next === 'light');
  });
}

/* mobile menu */
const hamburger = document.getElementById('hamburger');
if(hamburger){
  hamburger.addEventListener('click', () =>
    document.getElementById('nav').classList.toggle('open'));
}

/* FAQ accordion */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

/* hero particle network */
const canvas = document.getElementById('net');
if(canvas && !reduceMotion){
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];
  function resize(){
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  for(let i = 0; i < 70; i++)
    pts.push({ x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35 });
  (function tick(){
    ctx.clearRect(0, 0, W, H);
    for(const p of pts){
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > W) p.vx *= -1;
      if(p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, 7);
      ctx.fillStyle = 'rgba(94,234,212,.5)'; ctx.fill();
    }
    for(let i = 0; i < pts.length; i++)
      for(let j = i+1; j < pts.length; j++){
        const d = Math.hypot(pts[i].x-pts[j].x, pts[i].y-pts[j].y);
        if(d < 130){
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = 'rgba(45,212,191,' + ((1 - d/130) * .16).toFixed(3) + ')';
          ctx.stroke();
        }
      }
    requestAnimationFrame(tick);
  })();
}