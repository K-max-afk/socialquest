/* ============================================================
   SOCIALQUEST – script.js
   ============================================================ */

// ── Preguntas del Quiz ───────────────────────────────────────
const PREGUNTAS = [
  {
    p: '¿Qué es una exportación?',
    o: ['Comprar bienes del extranjero', 'Vender bienes y servicios a otro país', 'Fabricar productos nacionales', 'Consumir bienes importados'],
    c: 1,
    exp: 'Exportar es vender bienes o servicios producidos en el país a compradores en el extranjero, generando ingresos para la economía nacional.'
  },
  {
    p: '¿Qué organismo regula el comercio internacional?',
    o: ['FIFA', 'UNESCO', 'OMC', 'OMS'],
    c: 2,
    exp: 'La Organización Mundial del Comercio (OMC) es el organismo que regula las normas del comercio entre países y resuelve disputas comerciales.'
  },
  {
    p: '¿Qué mide el PIB (Producto Interno Bruto)?',
    o: ['El número de empresas de un país', 'El valor total de bienes y servicios producidos en un país en un año', 'La cantidad de dinero en circulación', 'El nivel de desempleo nacional'],
    c: 1,
    exp: 'El PIB mide el valor monetario total de todos los bienes y servicios producidos dentro de un país en un período determinado.'
  },
  {
    p: '¿Qué es la balanza comercial?',
    o: ['Una báscula para pesar mercancías', 'La diferencia entre exportaciones e importaciones de un país', 'El presupuesto del gobierno', 'La deuda externa del país'],
    c: 1,
    exp: 'Si un país exporta más de lo que importa, tiene superávit comercial. Si importa más, tiene déficit comercial.'
  },
  {
    p: '¿Cuál es la moneda de reserva internacional más utilizada en el mundo?',
    o: ['El euro', 'El yuan chino', 'El dólar estadounidense', 'La libra esterlina'],
    c: 2,
    exp: 'El dólar estadounidense (USD) es la principal moneda de reserva internacional y se usa ampliamente en el comercio global.'
  },
  {
    p: '¿Qué son los aranceles?',
    o: ['Ayudas económicas a exportadores', 'Acuerdos entre países', 'Impuestos que se cobran a los productos importados', 'Tipos de cambio entre monedas'],
    c: 2,
    exp: 'Los aranceles son impuestos aplicados a bienes importados. Sirven para proteger la industria nacional y generar ingresos fiscales.'
  },
  {
    p: '¿Qué significa "libre comercio"?',
    o: ['Comercio sin pagar ningún impuesto interno', 'Intercambio de bienes entre países sin barreras arancelarias ni restricciones', 'Vender productos gratis entre naciones', 'Comercio exclusivo entre países aliados'],
    c: 1,
    exp: 'El libre comercio busca eliminar barreras (aranceles, cuotas, subsidios) para que los bienes y servicios fluyan libremente entre naciones.'
  },
  {
    p: '¿Qué es el FMI?',
    o: ['Fondo Mundial de Inversiones', 'Federación Mundial de Industrias', 'Fondo Monetario Internacional', 'Fuerza Multilateral Internacional'],
    c: 2,
    exp: 'El Fondo Monetario Internacional (FMI) promueve la cooperación monetaria global, la estabilidad financiera y el crecimiento económico.'
  },
  {
    p: '¿Qué es la globalización económica?',
    o: ['La división del mundo en bloques económicos independientes', 'El proceso de integración económica, comercial y financiera entre países', 'El dominio de un solo país sobre la economía mundial', 'La eliminación de las monedas nacionales'],
    c: 1,
    exp: 'La globalización económica es el proceso de creciente integración e interdependencia entre las economías de distintos países.'
  },
  {
    p: '¿Qué es una ventaja comparativa?',
    o: ['Producir más que cualquier otro país', 'La capacidad de producir un bien a un menor costo de oportunidad que otro país', 'Tener más recursos naturales que los competidores', 'Exportar más de lo que se importa'],
    c: 1,
    exp: 'Un país tiene ventaja comparativa cuando puede producir un bien con un costo relativo menor que otro país, incluso si no es el más eficiente en términos absolutos.'
  },
  {
    p: '¿Cuál es el principal objetivo del Banco Mundial?',
    o: ['Regular los mercados financieros internacionales', 'Emitir la moneda de reserva internacional', 'Reducir la pobreza y apoyar el desarrollo económico de países pobres', 'Supervisar los bancos centrales nacionales'],
    c: 2,
    exp: 'El Banco Mundial financia proyectos de desarrollo, infraestructura y educación en países en vías de desarrollo para reducir la pobreza.'
  },
  {
    p: '¿Qué es una importación?',
    o: ['Vender productos nacionales al extranjero', 'Comprar bienes y servicios producidos en otro país', 'Producir bienes para el mercado interno', 'Invertir dinero en el extranjero'],
    c: 1,
    exp: 'Importar es adquirir bienes o servicios procedentes de otro país para satisfacer necesidades que la producción nacional no puede cubrir eficientemente.'
  },
  {
    p: '¿Qué es la inflación?',
    o: ['La disminución del desempleo', 'El aumento del PIB de un país', 'El aumento generalizado y sostenido del nivel de precios', 'La revalorización de la moneda nacional'],
    c: 2,
    exp: 'La inflación es el aumento generalizado de precios en una economía durante un período de tiempo, lo que reduce el poder adquisitivo del dinero.'
  },
  {
    p: '¿Qué es el G20?',
    o: ['Un grupo de 20 países con libre comercio total', 'Un foro de las 20 economías más grandes del mundo', 'Una organización militar internacional', 'Un tratado de 20 naciones europeas'],
    c: 1,
    exp: 'El G20 es un foro internacional que reúne a los líderes de las 20 economías más grandes e importantes del mundo para coordinar políticas económicas globales.'
  },
  {
    p: '¿Qué es una zona de libre comercio?',
    o: ['Un área donde todos los precios son fijos', 'Una región donde los países eliminan aranceles entre sí pero mantienen los propios con terceros países', 'Un país que no cobra impuestos internos', 'Un mercado donde solo participan países ricos'],
    c: 1,
    exp: 'En una zona de libre comercio los países acuerdan eliminar tarifas entre ellos, facilitando el intercambio comercial, aunque cada uno mantiene su política arancelaria frente a otros países.'
  }
];

// ── Estado global ────────────────────────────────────────────
let currentScreen = 'intro';
let quizIndex = 0;
let quizScore = 0;
let answered = false;
let userAnswers = [];

const PROGRESS_MAP = { intro: 0, module1: 20, module2: 40, module3: 60, quiz: 80, results: 100 };

// ── Navegación ───────────────────────────────────────────────
function goTo(id) {
  const from = document.getElementById(currentScreen);
  const to   = document.getElementById(id);
  if (!to || id === currentScreen) return;

  from.classList.add('fade-out');
  setTimeout(() => {
    from.classList.remove('active', 'fade-out');
    from.style.display = 'none';

    to.style.display = 'flex';
    requestAnimationFrame(() => {
      to.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
      triggerReveal(to);
    });

    currentScreen = id;
    updateProgressBar(id);
    updateNav(id);
  }, 350);
}

function updateProgressBar(id) {
  const bar = document.getElementById('progress-bar-global');
  bar.style.width = (PROGRESS_MAP[id] ?? 0) + '%';
}

function updateNav(id) {
  const nav = document.getElementById('main-nav');
  if (id === 'intro') {
    nav.classList.remove('visible');
  } else {
    nav.classList.add('visible');
  }
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === id);
  });
}

// Nav button clicks
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.target));
});

// ── Reveal animations ────────────────────────────────────────
function triggerReveal(section) {
  section.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    const delay = parseFloat(el.style.getPropertyValue('--d') || '0') * 1000;
    setTimeout(() => el.classList.add('visible'), delay + 50);
  });
}

// ── Particles (intro) ────────────────────────────────────────
function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#3b82f6','#818cf8','#a78bfa','#6ee7b7','#fbbf24'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${Math.random()*8+6}s;
      animation-delay:${Math.random()*6}s;
    `;
    container.appendChild(p);
  }
}

// ── Quiz ─────────────────────────────────────────────────────
function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  answered = false;
  userAnswers = [];

  document.getElementById('quiz-intro').classList.add('hidden');
  document.getElementById('quiz-game').classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  if (quizIndex >= PREGUNTAS.length) { showResults(); return; }

  answered = false;
  const q = PREGUNTAS[quizIndex];
  const letters = ['A','B','C','D'];

  // Counter & progress
  document.getElementById('q-counter').textContent = `Pregunta ${quizIndex + 1} / ${PREGUNTAS.length}`;
  document.getElementById('q-score-live').textContent = `⭐ ${quizScore} pts`;
  document.getElementById('quiz-progress').style.width = `${(quizIndex / PREGUNTAS.length) * 100}%`;

  // Question text
  document.getElementById('q-text').textContent = q.p;

  // Options
  const container = document.getElementById('q-options');
  container.innerHTML = '';
  q.o.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span> ${opt}`;
    btn.onclick = () => selectAnswer(i, btn);
    container.appendChild(btn);
  });

  // Feedback
  const fb = document.getElementById('q-feedback');
  fb.className = 'q-feedback hidden';
  fb.innerHTML = '';

  // Animate
  const wrap = document.getElementById('question-wrap');
  wrap.style.animation = 'none';
  wrap.offsetHeight; // reflow
  wrap.style.animation = '';
}

function selectAnswer(chosen, clickedBtn) {
  if (answered) return;
  answered = true;

  const q = PREGUNTAS[quizIndex];
  const correct = q.c;
  const isRight = chosen === correct;
  const pts = isRight ? 10 : 0;
  quizScore += pts;

  userAnswers.push({ q: q.p, chosen, correct, isRight, correctText: q.o[correct] });

  // Style all options
  const options = document.querySelectorAll('.q-option');
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === chosen && !isRight) btn.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('q-feedback');
  fb.className = `q-feedback ${isRight ? 'correct-fb' : 'wrong-fb'}`;
  fb.innerHTML = `
    <strong>${isRight ? '✅ ¡Correcto! +10 pts' : '❌ Incorrecto'}</strong><br>
    ${q.exp}
    <button class="btn-next" onclick="nextQuestion()">${quizIndex + 1 < PREGUNTAS.length ? 'Siguiente pregunta →' : 'Ver resultados 🏆'}</button>
  `;
}

function nextQuestion() {
  quizIndex++;
  loadQuestion();
}

// ── Resultados ───────────────────────────────────────────────
function showResults() {
  goTo('results');

  const total = PREGUNTAS.length * 10;
  const pct = quizScore / total;

  let grade, gradeStyle, title, msg;
  if (pct >= 0.9) {
    grade = '🥇 Experto en Economía'; gradeStyle = 'background:rgba(245,158,11,.15);color:#fbbf24;border:1px solid rgba(245,158,11,.3)';
    title = '¡Excelente trabajo!'; msg = 'Dominas los conceptos de economía mundial y comercio internacional. ¡Sigue así!';
  } else if (pct >= 0.7) {
    grade = '🥈 Muy Buen Nivel'; gradeStyle = 'background:rgba(37,99,235,.15);color:#93c5fd;border:1px solid rgba(37,99,235,.3)';
    title = '¡Muy bien!'; msg = 'Tienes un buen manejo del tema. Repasa los módulos para perfeccionar tu conocimiento.';
  } else if (pct >= 0.5) {
    grade = '🥉 En Progreso'; gradeStyle = 'background:rgba(124,58,237,.15);color:#c4b5fd;border:1px solid rgba(124,58,237,.3)';
    title = '¡Buen esfuerzo!'; msg = 'Vas por buen camino. Te recomendamos repasar los módulos y volver a intentarlo.';
  } else {
    grade = '📚 Sigue Aprendiendo'; gradeStyle = 'background:rgba(220,38,38,.12);color:#fca5a5;border:1px solid rgba(220,38,38,.3)';
    title = '¡No te rindas!'; msg = 'La economía mundial tiene muchos conceptos. Repasa los módulos y vuelve a intentarlo.';
  }

  document.getElementById('result-title').textContent = title;
  document.getElementById('result-grade').textContent = grade;
  document.getElementById('result-grade').style.cssText = gradeStyle;
  document.getElementById('result-msg').textContent = msg;

  // Animate score counter
  const scoreEl = document.getElementById('result-score');
  let current = 0;
  const step = Math.ceil(quizScore / 40);
  const interval = setInterval(() => {
    current = Math.min(current + step, quizScore);
    scoreEl.textContent = current;
    if (current >= quizScore) clearInterval(interval);
  }, 30);

  // Update progress bar
  document.getElementById('quiz-progress').style.width = '100%';
  document.getElementById('q-score-live').textContent = `⭐ ${quizScore} pts`;

  // Review list
  const review = document.getElementById('result-review');
  review.innerHTML = userAnswers.map((a, i) => `
    <div class="review-item">
      <span class="review-icon">${a.isRight ? '✅' : '❌'}</span>
      <div class="review-q">
        <strong>P${i+1}.</strong> ${a.q}
        <div class="review-a ${a.isRight ? 'ok' : 'fail'}">
          ${a.isRight ? '✔ Correcto' : `✘ Tu respuesta era incorrecta — Correcto: "${a.correctText}"`}
        </div>
      </div>
    </div>
  `).join('');
}

function restartQuiz() {
  document.getElementById('quiz-game').classList.add('hidden');
  document.getElementById('quiz-intro').classList.remove('hidden');
  goTo('quiz');
}

// ── Init ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Show intro
  const intro = document.getElementById('intro');
  intro.style.display = 'flex';
  setTimeout(() => intro.classList.add('active'), 50);

  spawnParticles();
  updateProgressBar('intro');
});
