const content = document.getElementById('content');
const inner = document.getElementById('contentInner');
const back = document.getElementById('back');

const surprises = [
  'No sé en qué momento empezaste a ocupar tanto espacio en mis pensamientos.',
  'A veces te escribo por cualquier cosa… y las dos sabemos que probablemente no era por eso.',
  'Me gusta escucharte, incluso cuando la conversación empieza hablando de cualquier bobada.',
  'Hay personas que simplemente se vuelven especiales. Tú eres una de ellas.',
  'Si alguna vez te preguntas si me gusta hablar contigo… la respuesta probablemente es demasiado obvia.'
];

const views = {
  interest: `
    <h2>Demostrarte interés</h2>
    <p>Quizá no siempre sea buena diciendo lo que siento. A veces se me nota de otras formas.</p>
    <div class="quote">Te busco cuando quiero hablar contigo.</div>
    <div class="quote">Me acuerdo de pequeños detalles que me cuentas.</div>
    <div class="quote">Te pregunto si ya comiste o si llegaste bien.</div>
    <div class="quote">Te molesto, te lanzo indirectas y miro qué haces con ellas.</div>
    <div class="quote">Y cuando realmente me importas, quiero saber cómo me ves tú.</div>
  `,

  likes: `
    <h2>Cosas que me gustan de ti</h2>
    <p>Hay cosas de ti que me gustan más de lo que quizá imaginas.</p>
    <div class="quote">Tu forma de ver el mundo.</div>
    <div class="quote">Tu sonrisa.</div>
    <div class="quote">Tu olor.</div>
    <div class="quote">Tu forma de hablar y de contar las cosas.</div>
    <div class="quote">Contigo cualquier conversación es importante, incluso cuando hablamos de cualquier cosa.</div>
  `,

  surprise: `
    <h2>Sorpresa</h2>
    <div class="surprise">
      <div>
        <div id="surpriseText" class="surprise-text">Pulsa el botón y descubre una.</div>
        <button id="newSurprise">Dime otra</button>
      </div>
    </div>
  `,

  'encuéntrame': `
    <h2>Encuéntrame</h2>
    <p class="find-clue">Hay algo escondido en esta página. No te voy a decir dónde.</p>
    <p class="find-clue">Pero si encuentras una pequeña estrella que no debería estar ahí… tócala. 👀</p>
    <div class="find-star-wrap">
      <button class="find-star" id="secretStar" aria-label="Tocar la estrella">✦</button>
    </div>
  `
};

function openSection(key) {
  inner.innerHTML = views[key] || '';
  content.classList.remove('hidden');
  content.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (key === 'surprise') bindSurprise();
  if (key === 'encuéntrame') bindSecretStar();
}

function bindSurprise() {
  const button = document.getElementById('newSurprise');
  if (!button) return;

  button.onclick = () => {
    const text = surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById('surpriseText').textContent = text;
  };
}

function bindSecretStar() {
  const star = document.getElementById('secretStar');
  if (!star) return;

  star.onclick = () => {
    inner.innerHTML = `
      <div class="secret-reveal">
        <h2>Encontraste lo escondido.</h2>
        <p class="quote">Me gustas y quiero conocerte más. Quiero descubrir poco a poco todo eso que todavía no sé de ti.</p>
        <p class="secret-question"><strong>Ahora que encontraste esto… si tú también quieres seguir conociéndome, ¿tenemos una segunda cita?</strong></p>
        <p class="secret-confirm">Confírmamelo como tú quieras. Puede ser con un emoji, con unas palabras… o simplemente dime cuándo.</p>
      </div>
    `;
  };
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => openSection(card.dataset.section));
});

back.onclick = () => {
  content.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
