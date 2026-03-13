/* ================================================================
   app.js — Uplift Compliment & Joke Generator
   ================================================================ */


/* ================================================================
   1. DATA
   ================================================================ */
const COMPLIMENTS = [
  "You have an incredible ability to make others feel heard",
  "The world is a better place because you're in it",
  "You radiate a quiet confidence that inspires everyone around you",
  "Every challenge you've overcome has made you stronger than you realize",
  "You have a way of turning ordinary moments into something meaningful",
  "Your resilience is truly remarkable — keep going",
  "You bring out the best in every room you walk into",
  "Your potential is limitless, and you're just getting started",
  "You have a spark inside you that no setback can dim",
  "The courage you show every single day doesn't go unnoticed",
  "You are exactly where you need to be, even if it doesn't feel like it yet",
  "Your determination is quietly rewriting what's possible",
  "You carry yourself with a grace that makes hard things look effortless",
  "The way you keep showing up, even on tough days, is truly admirable",
  "You're building something beautiful — trust the process",
  "Your energy is the kind that shifts the whole atmosphere of a room",
  "You don't need anyone's permission to be extraordinary",
  "You've already survived 100% of your worst days — that's incredible",
  "There is so much strength in the gentleness you carry",
  "You make the impossible feel a little more within reach",
  "Your story is still being written, and the best chapters are ahead",
  "You handle uncertainty with more grace than you give yourself credit for",
  "You inspire people just by being unapologetically yourself",
  "The progress you've made — even the quiet kind — matters enormously",
  "You are braver than you believe and more capable than you know",
  "Your light doesn't dim when you lift others up — it only grows",
  "Your attention to detail sets a standard others aspire to",
  "You have a rare talent for making complex ideas feel simple",
  "Your work ethic is genuinely inspiring to everyone on your team",
  "You lead with empathy, and that's your greatest strength",
  "The way you approach problem-solving is nothing short of brilliant",
  "You have an exceptional ability to stay calm under pressure",
  "Your creativity consistently pushes boundaries in the best way",
  "People trust your judgment because you've earned it every single day",
  "You bring a level of professionalism that elevates every project",
  "Your ability to listen before speaking makes you an outstanding collaborator",
  "You turn feedback into fuel better than anyone I've seen",
  "Your presentations don't just inform — they inspire action",
  "You have a strategic mind that sees three steps ahead",
  "The culture of any team you join gets noticeably better",
  "You ask the questions that everyone else is thinking but won't say",
  "Your follow-through is remarkable — people can always count on you",
  "You balance ambition with humility in a way that's rare",
  "Your communication style makes even difficult conversations productive",
  "You don't just meet expectations — you quietly redefine them",
  "Your mentorship has likely changed more careers than you'll ever know",
  "You bring structure to chaos without losing creativity",
  "The clarity you bring to complex problems is a genuine superpower",
  "Your ability to adapt to change is a massive competitive advantage",
  "You make the people around you better at their jobs just by example",
  "You have the rare gift of turning vision into execution seamlessly",
  "Every team you're part of benefits from your unique perspective",
  "You're the human equivalent of a perfectly timed meme",
  "If good vibes were currency, you'd be a billionaire",
  "You're proof that awesome things come in exactly your size",
  "Your laugh is basically free therapy for everyone nearby",
  "You could make a DMV wait entertaining",
  "You're like a four-leaf clover — rare and delightful to find",
  "If there were an Olympic event for being amazing, you'd medal",
  "You're the reason the word 'legendary' was invented",
  "You have the energy of a golden retriever and the wisdom of an owl",
  "You're the plot twist everyone was hoping for",
  "If you were a spice, you'd be the entire spice rack",
  "Your vibe is basically a vacation for anyone nearby",
  "You're like WiFi — everyone's happier when you're connected",
  "You could sell a ketchup popsicle to someone in white gloves",
  "You're the kind of person people write 'you had to be there' stories about",
  "If charisma were a sport, you'd be undefeated",
  "You're basically a walking, talking serotonin boost",
  "You have main-character energy in the best possible way",
  "Your sense of humor could defuse an international incident",
  "You're like a human highlight reel",
  "If confidence were contagious, you'd be a superspreader",
  "You bring snack-level energy to every situation — and we're hungry for it",
  "You have the rare ability to make Mondays feel like Fridays",
  "You're the reason someone smiles when they check their phone",
  "If personality were a currency, you'd have your own crypto coin",
  "You're what would happen if sunshine and espresso had a baby",
  "Your kindness creates ripples you may never see, but they matter",
  "The compassion you show others is a gift not everyone can give",
  "You make people feel safe just by being yourself",
  "Your generosity of spirit is something truly special",
  "The way you care for others is nothing short of beautiful",
  "You have a heart that makes the world feel warmer",
  "Your thoughtfulness never goes unnoticed — it means more than you know",
  "You remind people that goodness is real and everywhere",
  "You listen with your whole heart, and people feel that",
  "The patience you show others is a rare and beautiful thing",
  "You make everyone around you feel like they belong",
  "Your empathy is a bridge that connects people in ways words can't",
  "You have a gift for finding the best in everyone you meet",
  "You treat strangers with the same warmth you give your closest friends",
  "Your quiet acts of kindness are the ones that change lives",
  "You make people feel seen in a world that often overlooks them",
  "The way you celebrate other people's wins says everything about your character",
  "You bring comfort to people just by being present",
  "Your words always seem to land exactly where they're needed most",
  "You have a way of making the hard stuff feel a little lighter",
  "You're the kind of person the world needs a lot more of",
  "You love people in a way that feels like coming home",
  "Your tenderness is never a weakness — it's your greatest power",
  "You carry other people's stories with care and dignity",
  "The grace you extend to others is something many aspire to",
  "You leave every interaction a little kinder than you found it",
];

const JOKES = [
  { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything." },
  { setup: "I told my wife she was drawing her eyebrows too high.", punchline: "She looked surprised." },
  { setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field." },
  { setup: "What do you call a fake noodle?", punchline: "An impasta." },
  { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up." },
  { setup: "I'm reading a book about anti-gravity.", punchline: "It's impossible to put down." },
  { setup: "What did the ocean say to the beach?", punchline: "Nothing, it just waved." },
  { setup: "Why did the bicycle fall over?", punchline: "It was two-tired." },
  { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear." },
  { setup: "Why can't your nose be 12 inches long?", punchline: "Because then it would be a foot." },
  { setup: "I used to hate facial hair…", punchline: "But then it grew on me." },
  { setup: "What do you call a dog that does magic?", punchline: "A Labracadabrador." },
  { setup: "Why do cows wear bells?", punchline: "Because their horns don't work." },
  { setup: "What did the grape do when it got stepped on?", punchline: "Nothing — it just let out a little wine." },
  { setup: "I told my computer I needed a break.", punchline: "Now it won't stop sending me Kit-Kat ads." },
  { setup: "Why did the math book look so sad?", punchline: "Because it had too many problems." },
  { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese." },
  { setup: "Why couldn't the leopard play hide and seek?", punchline: "Because he was always spotted." },
  { setup: "I'm on a seafood diet.", punchline: "I see food and I eat it." },
  { setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore." },
  { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." },
  { setup: "What did one wall say to the other?", punchline: "I'll meet you at the corner." },
  { setup: "How does a penguin build its house?", punchline: "Igloos it together." },
  { setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one." },
  { setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus." },
  { setup: "Why do bees have sticky hair?", punchline: "Because they use honeycombs." },
];


/* ================================================================
   2. STATE
   ================================================================ */
const state = {
  mode: "compliments",       // "compliments" or "jokes"
  currentText: null,         // stored text for copy/fav/share
  favorites: [],
  seenCompliments: new Set(),
  seenJokes: new Set(),
  isDark: false,
  hasGenerated: false,
  lastBgIndex: -1,
};


/* ================================================================
   3. DOM REFERENCES
   ================================================================ */
const $ = (sel) => document.querySelector(sel);

const dom = {
  nameInput:         $("#name-input"),
  complimentControls:$("#compliment-controls"),
  compliment:        $("#compliment-text"),
  cardInner:         $(".card-inner"),
  generateBtn:       $("#generate-btn"),
  generateLabel:     $("#generate-label"),
  copyBtn:           $("#copy-btn"),
  copyLabel:         $("#copy-label"),
  favBtn:            $("#fav-btn"),
  shareBtn:          $("#share-btn"),
  themeBtn:          $("#theme-btn"),
  sunIcon:           $("#icon-sun"),
  moonIcon:          $("#icon-moon"),
  favsBtn:           $("#favs-btn"),
  favBadge:          $("#fav-badge"),
  modalOverlay:      $("#modal-overlay"),
  modalClose:        $("#modal-close"),
  modalBody:         $("#modal-body"),
  toast:             $("#toast"),
  confetti:          $("#confetti-container"),
  modeCompliments:   $("#mode-compliments"),
  modeJokes:         $("#mode-jokes"),
};


/* ================================================================
   4. CARD BACKGROUND IMAGES (compliments only)
   ================================================================ */
const CARD_IMAGES = [
  "images/Landscape-1.webp",
  "images/Landscape-2.webp",
  "images/Landscape-3.webp",
  "images/Landscape-4.webp",
  "images/Landscape-5.webp",
];

function pickCardImage() {
  let idx;
  do {
    idx = Math.floor(Math.random() * CARD_IMAGES.length);
  } while (idx === state.lastBgIndex && CARD_IMAGES.length > 1);
  state.lastBgIndex = idx;
  return CARD_IMAGES[idx];
}

function setCardBackground(imagePath) {
  const FADE_MS = 900;

  if (imagePath) {
    // Add new layer on top, fade it in
    const layer = document.createElement("div");
    layer.className = "card-bg-layer";
    layer.style.backgroundImage = `url('${imagePath}')`;
    dom.cardInner.appendChild(layer);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => layer.classList.add("visible"));
    });

    // Fade out and remove any older layers once the new one is visible
    const old = dom.cardInner.querySelectorAll(".card-bg-layer:not(:last-child)");
    old.forEach((el) => {
      el.classList.remove("visible");
      setTimeout(() => el.remove(), FADE_MS);
    });
  } else {
    // Fade out and remove all layers
    dom.cardInner.querySelectorAll(".card-bg-layer").forEach((el) => {
      el.classList.remove("visible");
      setTimeout(() => el.remove(), FADE_MS);
    });
  }
}


/* ================================================================
   5. PARTICLE SYSTEM
   ================================================================ */
(function initParticles() {
  const canvas = $("#particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h;
  const particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COLORS = ["#FF6B6B", "#957FEF", "#F4C95D", "#FFB4A2", "#B8A9C9", "#E8A0BF"];

  for (let i = 0; i < 45; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.5,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      baseAlpha: Math.random() * 0.25 + 0.04,
      phase: Math.random() * Math.PI * 2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      p.phase += 0.012;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0.01, p.baseAlpha + Math.sin(p.phase) * 0.07);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  draw();
})();


/* ================================================================
   5. MODE SWITCHING
   ================================================================ */
function setMode(mode) {
  state.mode = mode;

  dom.modeCompliments.classList.toggle("active", mode === "compliments");
  dom.modeJokes.classList.toggle("active", mode === "jokes");
  dom.modeCompliments.setAttribute("aria-checked", mode === "compliments");
  dom.modeJokes.setAttribute("aria-checked", mode === "jokes");

  dom.complimentControls.classList.toggle("collapsed", mode === "jokes");

  dom.generateLabel.textContent =
    mode === "jokes" ? "Tell Me a Joke" : "Generate Compliment";

  if (mode === "jokes") setCardBackground(null);
}


/* ================================================================
   6. CONTENT ENGINE
   ================================================================ */
function pickCompliment() {
  let pool = COMPLIMENTS
    .map((text, i) => ({ text, index: i }))
    .filter((c) => !state.seenCompliments.has(c.index));

  if (pool.length === 0) {
    state.seenCompliments = new Set();
    showToast("All seen — reshuffled!");
    return pickCompliment();
  }

  const pick = pool[Math.floor(Math.random() * pool.length)];
  state.seenCompliments.add(pick.index);
  return pick.text;
}

function pickJoke() {
  let pool = JOKES
    .map((j, i) => ({ joke: j, index: i }))
    .filter((j) => !state.seenJokes.has(j.index));

  if (pool.length === 0) {
    state.seenJokes = new Set();
    showToast("All seen — reshuffled!");
    return pickJoke();
  }

  const pick = pool[Math.floor(Math.random() * pool.length)];
  state.seenJokes.add(pick.index);
  return pick.joke;
}

function personalize(text) {
  const name = dom.nameInput.value.trim();
  if (!name) return text;
  return `${name}, ${text.charAt(0).toLowerCase()}${text.slice(1)}`;
}

function displayContent() {
  dom.compliment.classList.add("exit");

  // Kick off the background dissolve immediately, in sync with the text exit
  if (state.mode === "compliments") {
    setCardBackground(pickCardImage());
  } else {
    setCardBackground(null);
  }

  setTimeout(() => {
    state.hasGenerated = true;

    if (state.mode === "jokes") {
      const joke = pickJoke();
      state.currentText = `${joke.setup} — ${joke.punchline}`;

      dom.compliment.innerHTML = `
        <div class="joke-layout">
          <div class="joke-setup">${joke.setup}</div>
          <div class="joke-punchline" id="joke-punchline">${joke.punchline}</div>
          <div class="reveal-tap" id="reveal-tap">tap to reveal punchline</div>
        </div>`;

      const revealTap = document.getElementById("reveal-tap");
      const punchline = document.getElementById("joke-punchline");

      const reveal = () => {
        punchline.classList.add("revealed");
        revealTap.style.display = "none";
      };

      revealTap.addEventListener("click", reveal);
      punchline.addEventListener("click", reveal);

    } else {
      const raw = pickCompliment();
      const text = personalize(raw);
      state.currentText = raw;

      dom.compliment.textContent = `\u201C ${text} \u201D`;
    }

    syncFavBtn();

    dom.compliment.classList.remove("exit");
    dom.compliment.classList.add("enter");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => dom.compliment.classList.remove("enter"));
    });
  }, 320);
}

function syncFavBtn() {
  const isFav = state.favorites.some((f) => f.text === state.currentText);
  dom.favBtn.classList.toggle("faved", isFav);
}

function syncBadge() {
  const n = state.favorites.length;
  dom.favBadge.textContent = n;
  dom.favBadge.classList.toggle("show", n > 0);
}


/* ================================================================
   7. CONFETTI BURST
   ================================================================ */
function burstConfetti(x, y) {
  const colors = ["#FF6B6B", "#957FEF", "#F4C95D", "#FFB4A2", "#E8A0BF", "#B8A9C9"];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = Math.random() * 6 + 4 + "px";
    el.style.height = Math.random() * 6 + 4 + "px";
    el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    el.style.setProperty("--tx", (Math.random() - 0.5) * 220 + "px");
    el.style.setProperty("--ty", (Math.random() - 0.8) * 200 + "px");
    el.style.setProperty("--rot", Math.random() * 720 + "deg");
    el.style.animationDelay = Math.random() * 0.08 + "s";
    dom.confetti.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}


/* ================================================================
   8. TOAST
   ================================================================ */
let toastTimer;

function showToast(msg) {
  clearTimeout(toastTimer);
  dom.toast.textContent = msg;
  dom.toast.classList.add("show");
  toastTimer = setTimeout(() => dom.toast.classList.remove("show"), 2500);
}


/* ================================================================
   9. FAVORITES MODAL
   ================================================================ */
function renderFavorites() {
  if (!state.favorites.length) {
    dom.modalBody.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">⭐</span>
        <p>No favorites yet.<br>Tap the star on things you love!</p>
      </div>`;
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "fav-list";

  state.favorites.forEach((f, i) => {
    const li = document.createElement("li");
    li.className = "fav-item";
    li.style.animationDelay = i * 0.04 + "s";
    const typeLabel = f.type === "joke" ? "😂 Joke" : "💛 Compliment";
    li.innerHTML = `
      <div>
        <p>${f.text}</p>
        <div class="fav-type">${typeLabel}</div>
      </div>
      <button class="fav-remove" data-i="${i}" aria-label="Remove from favorites">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>`;
    ul.appendChild(li);
  });

  dom.modalBody.innerHTML = "";
  dom.modalBody.appendChild(ul);

  ul.querySelectorAll(".fav-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.favorites.splice(+btn.dataset.i, 1);
      renderFavorites();
      syncFavBtn();
      syncBadge();
    });
  });
}

function openModal() {
  renderFavorites();
  dom.modalOverlay.classList.add("open");
  dom.modalClose.focus();
}

function closeModal() {
  dom.modalOverlay.classList.remove("open");
  dom.favsBtn.focus();
}


/* ================================================================
   10. EVENT HANDLERS
   ================================================================ */

/* Mode toggle */
dom.modeCompliments.addEventListener("click", () => setMode("compliments"));
dom.modeJokes.addEventListener("click", () => setMode("jokes"));

/* Generate */
dom.generateBtn.addEventListener("click", (e) => {
  const rect = dom.generateBtn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  const sz = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = sz + "px";
  ripple.style.left = e.clientX - rect.left - sz / 2 + "px";
  ripple.style.top = e.clientY - rect.top - sz / 2 + "px";
  dom.generateBtn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
  displayContent();
});

/* Copy */
dom.copyBtn.addEventListener("click", async () => {
  if (!state.hasGenerated) return;
  const text = state.currentText;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  dom.copyLabel.textContent = "Copied!";
  dom.copyBtn.classList.add("copied");
  setTimeout(() => {
    dom.copyLabel.textContent = "Copy";
    dom.copyBtn.classList.remove("copied");
  }, 1500);
});

/* Favorite */
dom.favBtn.addEventListener("click", (e) => {
  if (!state.hasGenerated) return;
  const idx = state.favorites.findIndex((f) => f.text === state.currentText);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showToast("Removed from favorites");
  } else {
    state.favorites.push({
      text: state.currentText,
      type: state.mode === "jokes" ? "joke" : "compliment",
    });
    showToast("Saved to favorites ⭐");
    const rect = dom.favBtn.getBoundingClientRect();
    burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }
  syncFavBtn();
  syncBadge();
});

/* Share */
dom.shareBtn.addEventListener("click", async () => {
  if (!state.hasGenerated) return;
  const text = state.currentText + "\n\n— via Uplift";
  if (navigator.share) {
    try { await navigator.share({ text }); } catch {}
  } else {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  }
});

/* Theme toggle */
dom.themeBtn.addEventListener("click", () => {
  state.isDark = !state.isDark;
  document.documentElement.setAttribute("data-theme", state.isDark ? "dark" : "light");
  dom.sunIcon.classList.toggle("hidden", state.isDark);
  dom.moonIcon.classList.toggle("hidden", !state.isDark);
});

/* Favorites modal */
dom.favsBtn.addEventListener("click", openModal);
dom.modalClose.addEventListener("click", closeModal);
dom.modalOverlay.addEventListener("click", (e) => {
  if (e.target === dom.modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && dom.modalOverlay.classList.contains("open")) {
    closeModal();
  }
});


/* ================================================================
   11. INITIALIZATION
   ================================================================ */
document.documentElement.setAttribute("data-theme", "light");
syncBadge();