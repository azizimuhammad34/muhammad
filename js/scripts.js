/* ============================================================
   DATA — tech stack per tab
   ============================================================ */
const SKILLS = {
  frontend: [
    { name:"React",          pct:95, bg:"#61dafb" },
    { name:"Next.js",        pct:92, bg:"#111"    },
    { name:"TypeScript",     pct:88, bg:"#3178c6" },
    { name:"JavaScript",     pct:93, bg:"#f7df1e", dark:true },
    { name:"HTML5",          pct:95, bg:"#e34f26" },
    { name:"CSS3",           pct:90, bg:"#1572b6" },
    { name:"Tailwind CSS",   pct:92, bg:"#38bdf8" },
    { name:"Bootstrap",      pct:82, bg:"#7952b3" },
    { name:"Material UI",    pct:85, bg:"#007fff" },
    { name:"Responsive UI",  pct:93, bg:"#8b5cf6" },
  ],
  backend: [
    { name:"Node.js",        pct:90, bg:"#339933" },
    { name:"Express.js",     pct:88, bg:"#444"    },
    { name:"REST APIs",      pct:94, bg:"#8b5cf6" },
    { name:"Supabase",       pct:86, bg:"#3ecf8e" },
    { name:"JWT / Auth",     pct:89, bg:"#f59e0b", dark:true },
    { name:"Stripe Payments",pct:80, bg:"#635bff" },
  ],
  shopify: [
    { name:"Liquid",              pct:90, bg:"#96bf48" },
    { name:"Shopify Themes",      pct:88, bg:"#7ab55c" },
    { name:"Shopify CLI / Hydrogen", pct:82, bg:"#111" },
    { name:"Shopify APIs",        pct:86, bg:"#2ec2aa" },
    { name:"Online Store 2.0",    pct:85, bg:"#5e8e3e" },
    { name:"E-commerce / CRO",    pct:89, bg:"#8b5cf6" },
  ],
  ai: [
    { name:"OpenAI / LLM APIs", pct:92, bg:"#10a37f" },
    { name:"Prompt Engineering",pct:90, bg:"#8b5cf6" },
    { name:"Python",         pct:82, bg:"#3776ab" },
    { name:"AI Agents / Workflows", pct:88, bg:"#22d3ee", dark:true },
    { name:"LangChain",      pct:80, bg:"#111"    },
    { name:"RAG Pipelines",  pct:85, bg:"#6366f1" },
  ],
};

/* render skill bars */
const grid = document.getElementById('skillsGrid');
function renderSkills(key){
  grid.innerHTML = SKILLS[key].map(s => `
    <div class="skill">
      <div class="head">
        <span class="name"><span class="logo" style="background:${s.bg};${s.dark?'color:#111;':''}">${s.name[0]}</span>${s.name}</span>
        <span class="pct">${s.pct}%</span>
      </div>
      <div class="bar"><div class="fill" data-pct="${s.pct}"></div></div>
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

/* lightbox for zoomable images */
(function(){
  const targets = document.querySelectorAll('.lightbox-trigger');
  if(!targets.length) return;
  let lb = document.querySelector('.lightbox');
  if(!lb){
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close" aria-label="Close">✕</button>';
    document.body.appendChild(lb);
  }
  const img = document.createElement('img');
  img.alt = '';
  lb.appendChild(img);
  const open = src => { img.src = src; lb.classList.add('open'); };
  const close = () => { img.src = ''; lb.classList.remove('open'); };
  targets.forEach(t => t.addEventListener('click', () => open(t.src)));
  lb.addEventListener('click', e => { if(e.target === lb || e.target.closest('.lb-close')) close(); });
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