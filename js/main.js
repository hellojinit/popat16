/* ============================================================
   main.js — renders sections from DATA and runs all motion.
   Classic script (no modules) so it works over file:// too.
   ============================================================ */
(function () {
  "use strict";
  var D = window.DATA;
  if (!D) return;

  var motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  if (motionOK) document.documentElement.classList.add("motion-ok");

  /* ---------- helpers ---------- */
  function nameify(s) { return String(s).split("{NAME}").join(D.name).split("{NICK}").join(D.nickname || D.name); }
  function el(id) { return document.getElementById(id); }
  function set(id, html) { var n = el(id); if (n) n.innerHTML = nameify(html); }
  function head(id, o, extra) {
    return '<div class="container">' +
      '<header class="section-head">' +
      '<p class="kicker" data-reveal>' + o.kicker + '</p>' +
      '<h2 class="section-title" id="' + id + '-title" data-reveal style="--i:1">' + o.title + '</h2>' +
      (o.lead ? '<p class="lead" data-reveal style="--i:2">' + o.lead + '</p>' : '') +
      '</header>' + (extra || "");
  }

  function flagSVG(country) {
    if (country === "France")
      return '<svg viewBox="0 0 3 2" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">' +
        '<rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>';
    if (country === "Morocco")
      return '<svg viewBox="0 0 3 2" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">' +
        '<rect width="3" height="2" fill="#c1272d"/>' +
        '<path d="M1.5 0.4 L1.86 1.5 L0.92 0.82 L2.08 0.82 L1.14 1.5 Z" fill="none" stroke="#006233" stroke-width="0.12" stroke-linejoin="round"/></svg>';
    return "";
  }

  /* ---------- number formatting ---------- */
  var CMP = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
  function fmtVal(v, fmt) {
    if (fmt === "compact") return CMP.format(v);
    if (fmt === "usd") return "$" + v.toFixed(2);
    if (fmt === "usd0") return "$" + Math.round(v).toLocaleString("en-US");
    return String(Math.round(v));
  }

  /* ============================================================
     RENDER
     ============================================================ */
  function renderDay() {
    var d = D.day, w = d.weather;
    var meta = w.meta.map(function (m) { return "<span><b>" + m[0] + "</b> " + m[1] + "</span>"; }).join("");
    var weather =
      '<article class="card card--accent weather" data-reveal aria-label="Weather on July 13, 2010">' +
        '<p class="eyebrow">Arlington, Virginia &middot; 7:15 pm</p>' +
        '<div class="weather-top">' +
          '<span class="weather-temp"><b data-countup data-from="' + w.low + '" data-to="' + w.high + '" data-fmt="int">' + w.high + '</b>&deg;' +
          '<span class="lo"> / ' + w.low + '&deg; low</span></span>' +
          '<div class="weather-meta">' + meta + '</div>' +
        '</div>' +
        '<p class="weather-story">' + w.story + '</p>' +
        '<p class="weather-forecast">' + w.forecast + '</p>' +
      '</article>';
    var chips = '<div class="chip-grid">' + d.chips.map(function (c, i) {
      return '<article class="chip" data-reveal style="--i:' + i + '">' +
        '<span class="chip-emoji" aria-hidden="true">' + c.emoji + '</span>' +
        '<div><p class="chip-title">' + c.title + '</p><p class="chip-text">' + c.text + '</p></div></article>';
    }).join("") + '</div>';
    set("day", head("day", d, weather + chips) + "</div>");
  }

  function videoEmbed(v) {
    if (!v || !v.id) return "";
    var href = "https://www.youtube.com/watch?v=" + v.id + (v.start ? "&t=" + v.start : "");
    return '<figure class="video" data-reveal>' +
      '<div class="video-frame">' +
        '<a class="lite-yt" href="' + href + '" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube: ' + v.title + '" ' +
        'style="background-image:url(https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg)">' +
        '<span class="yt-play" aria-hidden="true"></span></a>' +
      '</div>' +
      (v.caption ? '<figcaption class="video-cap"><span aria-hidden="true">▶</span> ' + v.caption + '</figcaption>' : "") +
      '</figure>';
  }
  function matchCard(m, i) {
    var scorers = m.scorers || (m.detail ? [m.detail] : []);
    var ic = m.icon || "⚽";
    return '<article class="card card--accent match" data-reveal data-rv="' + (i % 2 ? "r" : "l") + '" style="--i:' + i + '">' +
      '<p class="eyebrow match-label">' + m.label + '</p>' +
      '<div class="score-row">' +
        '<span class="score-team home">' + m.home + '</span>' +
        '<span class="score-box">' + m.score + '</span>' +
        '<span class="score-team away">' + m.away + '</span>' +
      '</div>' +
      (scorers.length ? '<div class="scorers">' + scorers.map(function (s) { return '<span><i aria-hidden="true">' + ic + '</i>' + s + '</span>'; }).join("") + '</div>' : "") +
      (m.venue ? '<p class="eyebrow" style="margin-top:12px">' + m.venue + '</p>' : "") +
      '<p class="match-kicker">' + m.kicker + '</p></article>';
  }
  function renderWorldcup() {
    var w = D.worldcup;
    var matches = '<div class="matches">' + matchCard(w.final, 0) + matchCard(w.thirdPlace, 1) + '</div>';
    var u = w.usa;
    var usa = '<div class="usa-note" data-reveal><p class="eyebrow">' + u.label + '</p><p>' + u.text + '</p></div>' + videoEmbed(u.video);
    set("worldcup", head("worldcup", w, matches + videoEmbed(w.video) + usa) + "</div>");
  }

  function renderSaints() {
    var s = D.saints;
    var card = '<div class="matches matches--one">' + matchCard(s.game, 0) + '</div>';
    var facts = '<div class="fact-list">' + s.facts.map(function (f, i) {
      return '<div class="fact" data-reveal style="--i:' + i + '"><span class="fact-mark">' + f.mark + '</span><p>' + f.html + '</p></div>';
    }).join("") + '</div>';
    var joke = '<div class="joke" data-reveal><span class="joke-mark" aria-hidden="true">😬</span><p>' + s.joke + '</p></div>';
    set("saints", head("saints", s, card + facts + videoEmbed(s.video) + joke) + "</div>");
  }

  function renderBarca() {
    var b = D.barca;
    var field = '<svg class="pitch-field" viewBox="0 0 68 105" preserveAspectRatio="none" aria-hidden="true">' +
      '<rect x="1.5" y="1.5" width="65" height="102" rx="2" class="fl"/>' +
      '<line x1="1.5" y1="52.5" x2="66.5" y2="52.5" class="fl"/>' +
      '<circle cx="34" cy="52.5" r="9" class="fl"/><circle cx="34" cy="52.5" r="0.8" class="fl-dot"/>' +
      '<rect x="14" y="1.5" width="40" height="16" class="fl"/><rect x="24" y="1.5" width="20" height="6" class="fl"/>' +
      '<rect x="14" y="87.5" width="40" height="16" class="fl"/><rect x="24" y="97.5" width="20" height="6" class="fl"/>' +
      '</svg>';
    var markers = b.players.map(function (p, i) {
      var lx = (p.x / 68 * 100).toFixed(1), ly = (p.y / 105 * 100).toFixed(1);
      return '<div class="pl' + (p.star ? " pl-star" : "") + '" style="left:' + lx + '%;top:' + ly + '%;--i:' + i + '">' +
        '<span class="pl-badge"><b class="pl-num">' + p.n + '</b></span>' +
        '<span class="pl-name">' + p.name + '</span></div>';
    }).join("");
    var figure = '<figure class="pitch-fig" role="img" aria-label="Barcelona 2010-11 starting eleven in a 4-3-3">' +
      '<div class="pitch-board" data-reveal>' + field + markers + '</div>' +
      '<figcaption class="formation-label">' + b.formationLabel + '</figcaption></figure>';
    var facts = '<div class="fact-list">' + b.facts.map(function (f, i) {
      return '<div class="fact" data-reveal style="--i:' + i + '"><span class="fact-mark">' + f.mark + '</span><p>' + f.html + '</p></div>';
    }).join("") + '</div>';
    var st = b.standings;
    var standings = '<div class="standings" data-reveal>' +
      '<p class="eyebrow standings-label">' + st.label + '</p>' +
      '<table class="standings-table"><tbody>' +
      st.rows.map(function (r) {
        return '<tr class="' + (r.champ ? "champ" : "") + '"><td class="pos">' + r.pos + '</td>' +
          '<td class="team">' + r.team + (r.champ ? ' <span class="badge">🏆 Champions</span>' : "") + '</td>' +
          '<td class="pts">' + r.pts + '<span class="pts-u">pts</span></td></tr>';
      }).join("") + '</tbody></table>' +
      '<p class="standings-note">' + st.note + '</p></div>';
    set("barca", head("barca", b, '<div class="pitch-wrap">' + figure + facts + '</div>' + standings) + "</div>");
  }

  function tile(t, i) {
    var hasThen = !!t.thenText;
    var big = t.thenText || fmtVal(t.from, t.fmt);
    var attrs = hasThen ? "" : ' data-countup data-from="0" data-to="' + t.from + '" data-fmt="' + t.fmt + '"';
    return '<div class="tile" data-reveal style="--i:' + (i % 8) + '">' +
      '<p class="tile-label">' + t.label + '</p>' +
      '<span class="tile-big"' + attrs + '>' + big + '</span>' +
      '<p class="tile-sub"><span class="tile-arrow">→</span> ' + fmtVal(t.to, t.fmt) + '</p>' +
      (t.note ? '<p class="tile-note">' + t.note + '</p>' : "") + '</div>';
  }
  function renderNumbers() {
    var n = D.numbers;
    var tiles = '<div class="tiles">' + n.tiles.map(tile).join("") + '</div>';
    set("numbers", head("numbers", n, tiles) + "</div>");
  }

  function renderCulture() {
    var c = D.culture;
    var cards = '<div class="scroller">' + c.cards.map(function (k, i) {
      return '<article class="pop-card" data-reveal style="--i:' + i + '">' +
        '<span class="pop-emoji" aria-hidden="true">' + k.emoji + '</span>' +
        '<p class="pop-tag">' + k.tag + '</p><p class="pop-title">' + k.title + '</p>' +
        '<p class="pop-text">' + k.text + '</p></article>';
    }).join("") + '</div>';
    set("culture", head("culture", c, cards) + "</div>");
  }

  function renderClimb() {
    var c = D.climb, r = c.rank;
    var rankHero = '<div class="rank-hero" data-reveal>' +
      '<div class="rank-nums"><span class="rank-from">' + r.from + '</span><span class="rank-arrow">→</span>' +
      '<span class="rank-to"><span class="grad" data-countup data-from="' + r.from + '" data-to="' + r.to + '" data-fmt="int">' + r.to + '</span></span></div>' +
      '<span class="rank-cap">' + r.cap + '</span><p class="rank-label">' + r.label + '</p></div>';
    var timeline = '<div class="timeline" data-reveal>' + c.steps.map(function (s, i) {
      return '<div class="step" data-reveal style="--i:' + i + '"><p class="step-year">' + s.year + '</p>' +
        '<p class="step-title">' + s.title + '</p><p class="step-text">' + s.text + '</p></div>';
    }).join("") + '</div>';
    set("climb", head("climb", c, rankHero + timeline + videoEmbed(c.video)) + "</div>");
  }

  function renderFullcircle() {
    var f = D.fullcircle, m = f.match, q = D.moroccoQF;
    var runStrip = '<p class="eyebrow" data-reveal style="text-align:center">' + f.runLabel + '</p>' +
      '<div class="run-strip" data-reveal>' + f.run.map(function (x, i) {
        return '<span class="run-chip" style="--i:' + i + '">' + (x.win ? "<b>" + x.txt + "</b>" : x.txt) + '</span>';
      }).join("") + '</div>' +
      '<p class="coda" data-reveal style="margin-top:0;margin-bottom:var(--s6)">' + f.runNote + '</p>';
    var body = q.played
      ? '<p class="fixture-when">' + q.result + '</p><p class="fixture-note">' + q.note + '</p>'
      : '<p class="fixture-when">' + m.dateText + '</p><p class="fixture-tag">' + m.tag + '</p><p class="fixture-note">' + m.upcoming + '</p>';
    var fixture = '<article class="fixture" data-reveal>' +
      '<p class="fixture-comp">' + m.comp + '</p>' +
      '<div class="fixture-teams">' +
        '<div class="fx-team"><span class="fx-flag">' + flagSVG(m.home) + '</span><span class="fx-name">' + m.home + '</span></div>' +
        '<span class="fx-vs">' + (q.played ? "FT" : "vs") + '</span>' +
        '<div class="fx-team"><span class="fx-flag">' + flagSVG(m.away) + '</span><span class="fx-name">' + m.away + '</span></div>' +
      '</div>' + body + '</article>';
    var coda = '<div class="coda-hl" data-reveal><span class="coda-star" aria-hidden="true">🎂</span><p>' + f.coda + '</p></div>';
    var twins = f.twins ? '<div class="twins" data-reveal><p class="twins-label">' + f.twins.label + '</p><div class="twins-grid">' +
      f.twins.people.map(function (p) {
        return '<div class="twin"><span class="twin-emoji" aria-hidden="true">' + p.emoji + '</span>' +
          '<span class="twin-body"><span class="twin-name">' + p.name + '</span><span class="twin-note">' + p.note + '</span></span></div>';
      }).join("") + '</div></div>' : "";
    set("fullcircle", head("fullcircle", f, runStrip + fixture + coda + twins) + "</div>");
  }

  function renderFinale() {
    var f = D.finale;
    var constants = '<div class="constants">' + f.constants.map(function (c, i) {
      return '<p class="constant" data-reveal style="--i:' + i + '">' + (typeof c === "string" ? c : c.html) + '</p>';
    }).join("") + '</div>';
    var actions = '<div class="finale-actions" data-reveal>' +
      '<button class="btn" id="replay">&#8635; ' + f.replay + '</button>' +
      '<div><button class="cake" id="cake" aria-label="birthday cake, tap it">🎂</button>' +
      '<span class="cake-count" id="cake-count" aria-hidden="true">' + f.cakeHint + '</span></div></div>';
    var inner = '<div class="finale-inner">' +
      '<p class="kicker" data-reveal>' + f.kicker + '</p>' + constants +
      '<p class="finale-message" data-reveal>' + f.message + '</p>' + actions +
      '<p class="footer-note">' + f.footer + '</p></div>';
    set("finale", '<div class="container">' + inner + '</div>');
  }

  function renderPhotos() {
    var p = D.photos, host = el("photos");
    if (!p || (!p.then.src && !p.now.src)) { if (host) host.remove(); return; }
    function frame(f) {
      return '<figure class="photo" data-reveal><div class="photo-in">' +
        (f.src ? '<img src="' + f.src + '" alt="' + f.caption + '" loading="lazy">' : '<div class="photo-empty">add a photo</div>') +
        '<span class="photo-year">' + f.year + '</span></div>' +
        '<figcaption>' + f.caption + '</figcaption></figure>';
    }
    set("photos", head("photos", p, '<div class="photos-wrap">' + frame(p.then) + frame(p.now) + '</div>') + "</div>");
  }

  function renderSweet() {
    var s = D.sweet;
    var cards = '<div class="chip-grid sweet-grid">' + s.cards.map(function (c, i) {
      return '<article class="chip sweet-card" data-reveal style="--i:' + i + '">' +
        '<span class="chip-emoji" aria-hidden="true">' + c.emoji + '</span>' +
        '<div><p class="pop-tag">' + c.tag + '</p><p class="chip-title">' + c.title + '</p><p class="chip-text">' + c.text + '</p></div></article>';
    }).join("") + '</div>';
    set("sweet", head("sweet", s, cards) + "</div>");
  }

  function renderAlive() {
    var a = D.alive;
    var body = '<div class="alive-grid">' +
      '<div class="alive-stat" data-reveal><span class="alive-num" id="alive-mins">0</span><span class="alive-label">minutes alive</span></div>' +
      '<div class="alive-stat" data-reveal style="--i:1"><span class="alive-num" id="alive-secs">0</span><span class="alive-label">seconds alive</span></div>' +
      '</div><p class="alive-note" data-reveal style="--i:2">' + a.note + '</p>';
    set("alive", head("alive", a, body) + "</div>");
  }

  renderDay(); renderAlive(); renderWorldcup(); renderBarca(); renderSaints(); renderNumbers();
  renderCulture(); renderClimb(); renderFullcircle(); renderSweet(); renderPhotos(); renderFinale();



  /* live "alive for..." counters — born July 13, 2010, 7:15:00 pm ET (UTC-4) */
  var birthMs = Date.parse("2010-07-13T19:15:00-04:00");
  var aMins = el("alive-mins"), aSecs = el("alive-secs");
  function tickAlive() {
    var ms = Date.now() - birthMs;
    if (aMins) aMins.textContent = Math.floor(ms / 60000).toLocaleString("en-US");
    if (aSecs) aSecs.textContent = Math.floor(ms / 1000).toLocaleString("en-US");
  }
  if (aMins || aSecs) { tickAlive(); setInterval(tickAlive, 1000); }

  /* hero name + kicker from data */
  var hn = el("hero-name"); if (hn) hn.textContent = D.name;
  var hk = document.querySelector(".hero-kicker"); if (hk) hk.textContent = D.hero.kicker;

  /* ambient hero party confetti + balloons (decorative, motion only) */
  var hp = document.querySelector(".hero-particles");
  if (hp && motionOK) {
    var PARTY = ["#FFC93C", "#FF5FA2", "#3AE0FF", "#B983FF", "#B6F36B", "#FF8A3D", "#4D8BFF", "#2FD48A"];
    var frag = "";
    for (var pi = 0; pi < 20; pi++) {
      var d = 3 + Math.round(Math.random() * 5);
      frag += '<span class="dot" style="left:' + Math.round(Math.random() * 100) + '%;width:' + d + 'px;height:' + d + 'px;' +
        'background:' + PARTY[(Math.random() * PARTY.length) | 0] + ';border-radius:' + (Math.random() < 0.5 ? "50%" : "2px") + ';' +
        'animation-duration:' + (9 + Math.round(Math.random() * 10)) + 's;animation-delay:' + (-Math.round(Math.random() * 14)) + 's;' +
        '--o:' + (0.3 + Math.random() * 0.45).toFixed(2) + '"></span>';
    }
    var balloons = ["🎈", "🎈", "🎈", "🎉", "🎂"];
    for (var bi = 0; bi < balloons.length; bi++) {
      frag += '<span class="balloon" style="left:' + (6 + Math.round(Math.random() * 86)) + '%;font-size:' + (20 + Math.round(Math.random() * 16)) + 'px;' +
        'animation-duration:' + (15 + Math.round(Math.random() * 9)) + 's;animation-delay:' + (-Math.round(Math.random() * 16)) + 's;' +
        '--o:' + (0.55 + Math.random() * 0.3).toFixed(2) + '">' + balloons[bi] + '</span>';
    }
    hp.innerHTML = frag;
  }

  /* "Scroll down to explore" — jumps to the first section */
  var exploreBtn = el("scroll-explore");
  if (exploreBtn) {
    var exploreLabel = exploreBtn.querySelector(".scroll-btn-label");
    if (exploreLabel && D.hero.cta) exploreLabel.textContent = D.hero.cta;
    exploreBtn.addEventListener("click", function () {
      var first = el("day");
      if (first) first.scrollIntoView({ behavior: motionOK ? "smooth" : "auto", block: "start" });
    });
  }

  /* ---------- jump menu ---------- */
  var navToggle = el("nav-toggle"), navPanel = el("nav-panel"), navBackdrop = el("nav-backdrop");
  var root = document.documentElement;
  function setNav(open) {
    root.classList.toggle("nav-open", open);
    if (navToggle) navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (navToggle && navPanel && navBackdrop) {
    /* drop links whose section never rendered (e.g. photos with no images) */
    var navLinks = {};
    navPanel.querySelectorAll("a[href^='#']").forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      if (el(id)) navLinks[id] = a; else a.parentNode.remove();
    });

    navToggle.addEventListener("click", function () { setNav(!root.classList.contains("nav-open")); });
    navBackdrop.addEventListener("click", function () { setNav(false); });
    navPanel.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

    /* highlight the section currently under the middle of the viewport */
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(navLinks).forEach(function (k) { navLinks[k].removeAttribute("aria-current"); });
        navLinks[e.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    Object.keys(navLinks).forEach(function (k) { navIO.observe(el(k)); });
  }

  /* progress bar — CSS drives it where scroll-driven animations exist */
  var bar = document.querySelector(".progress");
  var hasSDA = window.CSS && CSS.supports && CSS.supports("animation-timeline: scroll()");
  if (bar && !hasSDA) {
    var barQueued = false;
    function drawBar() {
      barQueued = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
    }
    window.addEventListener("scroll", function () {
      if (!barQueued) { barQueued = true; requestAnimationFrame(drawBar); }
    }, { passive: true });
    drawBar();
  }

  /* ============================================================
     MOTION
     ============================================================ */
  /* reveal on scroll */
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll("[data-reveal]").forEach(function (n) { revealIO.observe(n); });

  /* count-ups */
  function animateCount(node, from, to, fmt) {
    var dur = from === to ? 700 : 1300, start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var e = 1 - Math.pow(1 - t, 3);
      node.textContent = fmtVal(from + (to - from) * e, fmt);
      if (t < 1) requestAnimationFrame(frame); else node.textContent = fmtVal(to, fmt);
    }
    requestAnimationFrame(frame);
  }
  document.querySelectorAll("[data-countup]").forEach(function (node) {
    var from = +node.dataset.from, to = +node.dataset.to, fmt = node.dataset.fmt;
    var w = Math.max(fmtVal(from, fmt).length, fmtVal(to, fmt).length);
    node.style.display = "inline-block";
    node.style.minWidth = w + "ch";
    if (!motionOK) { node.textContent = fmtVal(to, fmt); return; }
    node.textContent = fmtVal(from, fmt);
    var once = false;
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (ent) {
        if (ent.isIntersecting && !once) { once = true; io.disconnect(); animateCount(node, from, to, fmt); }
      });
    }, { threshold: 0.4 });
    io.observe(node);
  });

  /* hero odometer */
  var strip = document.querySelector(".odo-strip"), odo = document.querySelector(".odo");
  function buildStrip() {
    var rows = "";
    for (var y = 2026; y >= 2010; y--) {
      rows += '<span class="odo-year">' + String(y).split("").map(function (d) { return "<b>" + d + "</b>"; }).join("") + "</span>";
    }
    strip.innerHTML = rows;
  }
  function runOdometer() {
    if (!motionOK || !strip) return;
    buildStrip();
    strip.classList.remove("run");
    strip.style.transform = "translateY(0)";
    void strip.offsetHeight;
    requestAnimationFrame(function () {
      strip.classList.add("run");
      strip.style.transform = "translateY(-16em)";
    });
  }
  runOdometer();
  if (motionOK) setTimeout(function () { launchConfetti(120, 0.9); }, 900);

  /* ---------- confetti ---------- */
  var COLORS = ["#FFC93C", "#FF5FA2", "#3AE0FF", "#B983FF", "#B6F36B", "#FF8A3D", "#FF5A5F", "#FFFFFF"];
  function launchConfetti(count, power) {
    if (!motionOK) return;
    count = count || 150; power = power || 1;
    var canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    function W() { return window.innerWidth; } function H() { return window.innerHeight; }
    canvas.width = W() * dpr; canvas.height = H() * dpr;
    var parts = [];
    function cannon(ox, sign) {
      var n = Math.ceil(count / 2);
      for (var i = 0; i < n; i++) {
        var a = (35 + Math.random() * 45) * Math.PI / 180;
        var sp = (7 + Math.random() * 7) * power;
        parts.push({
          x: ox, y: H() * (0.86 + Math.random() * 0.14),
          vx: Math.cos(a) * sp * sign, vy: -Math.sin(a) * sp,
          w: 6 + Math.random() * 6, h: 8 + Math.random() * 8,
          rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[(Math.random() * COLORS.length) | 0]
        });
      }
    }
    cannon(0, 1); cannon(W(), -1);
    var last = performance.now(), t0 = last, g = 0.28, drag = 0.995;
    function tick(now) {
      var dt = Math.min((now - last) / 16.67, 2); last = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save(); ctx.scale(dpr, dpr);
      var alive = 0;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.vy += g * dt; p.vx *= Math.pow(drag, dt); p.vy *= Math.pow(drag, dt);
        p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
        if (p.y < H() + 40) alive++;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      ctx.restore();
      if (alive > 0 && now - t0 < 6500) requestAnimationFrame(tick);
      else canvas.remove();
    }
    requestAnimationFrame(tick);
  }

  /* confetti when the finale message appears */
  var msg = document.querySelector(".finale-message");
  if (motionOK && msg) {
    var mio = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { mio.disconnect(); launchConfetti(160, 1); } });
    }, { threshold: 0.6 });
    mio.observe(msg);
  }

  /* toast */
  function showToast(text) {
    var t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = text;
    requestAnimationFrame(function () { t.classList.add("show"); });
    clearTimeout(t._timer); t._timer = setTimeout(function () { t.classList.remove("show"); }, 4200);
  }

  /* replay + cake easter egg */
  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest("#replay, #cake") : null;
    if (!t) return;
    if (t.id === "replay") {
      window.scrollTo({ top: 0, behavior: motionOK ? "smooth" : "auto" });
      setTimeout(runOdometer, motionOK ? 520 : 0);
    } else if (t.id === "cake") {
      window._taps = (window._taps || 0) + 1;
      var cc = el("cake-count");
      if (window._taps >= 16) {
        window._taps = 0;
        launchConfetti(340, 1.3);
        showToast(D.finale.eggToast);
        if (cc) cc.textContent = D.finale.cakeHint;
      } else if (cc) {
        cc.textContent = window._taps >= 8 ? window._taps + " / 16" : D.finale.cakeHint;
      }
    }
  });
})();
