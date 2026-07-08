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
  function nameify(s) { return String(s).split("{NAME}").join(D.name); }
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
        '<p class="eyebrow">Alexandria, Virginia &middot; that day</p>' +
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

  function matchCard(m, i) {
    var scorers = m.scorers || (m.detail ? [m.detail] : []);
    return '<article class="card card--accent match" data-reveal style="--i:' + i + '">' +
      '<p class="eyebrow match-label">' + m.label + '</p>' +
      '<div class="score-row">' +
        '<span class="score-team home">' + m.home + '</span>' +
        '<span class="score-box">' + m.score + '</span>' +
        '<span class="score-team away">' + m.away + '</span>' +
      '</div>' +
      (scorers.length ? '<div class="scorers">' + scorers.map(function (s) { return "<span>" + s + "</span>"; }).join("") + '</div>' : "") +
      (m.venue ? '<p class="eyebrow" style="margin-top:12px">' + m.venue + '</p>' : "") +
      '<p class="match-kicker">' + m.kicker + '</p></article>';
  }
  function renderWorldcup() {
    var w = D.worldcup;
    var matches = '<div class="matches">' + matchCard(w.final, 0) + matchCard(w.thirdPlace, 1) + '</div>';
    var paul = '<div class="paul" data-reveal><span aria-hidden="true">🐙</span><span>' + w.paul + '</span></div>';
    set("worldcup", head("worldcup", w, matches + paul) + "</div>");
  }

  function renderBarca() {
    var b = D.barca;
    var lines =
      '<line class="line" x1="3" y1="3" x2="65" y2="3"/><line class="line" x1="3" y1="102" x2="65" y2="102"/>' +
      '<line class="line" x1="3" y1="3" x2="3" y2="102"/><line class="line" x1="65" y1="3" x2="65" y2="102"/>' +
      '<line class="line" x1="3" y1="52.5" x2="65" y2="52.5"/>' +
      '<circle class="line" cx="34" cy="52.5" r="8.5"/><circle class="line" cx="34" cy="52.5" r="0.6" fill="rgba(255,255,255,.2)"/>' +
      '<rect class="line" x="16" y="3" width="36" height="14"/><rect class="line" x="25" y="3" width="18" height="6"/>' +
      '<rect class="line" x="16" y="88" width="36" height="14"/><rect class="line" x="25" y="96" width="18" height="6"/>';
    var players = b.players.map(function (p, i) {
      return '<g transform="translate(' + p.x + ',' + p.y + ')">' +
        '<g class="player' + (p.star ? " star" : "") + '" data-reveal style="--i:' + i + '">' +
        (p.star ? '<circle class="star-ring" r="6.4"/>' : "") +
        '<circle class="player-dot" r="4.3"/>' +
        '<text class="player-num" y="1.25">' + p.n + '</text>' +
        '<text class="player-name" y="8.4">' + p.name + '</text></g></g>';
    }).join("");
    var svg =
      '<svg class="pitch" viewBox="0 0 68 105" role="img" aria-labelledby="pitch-title">' +
      '<title id="pitch-title">Barcelona\'s 2010–11 starting eleven, a 4-3-3</title>' +
      '<defs>' +
        '<radialGradient id="dotgrad" cx="35%" cy="30%"><stop offset="0" stop-color="#5b8cff"/><stop offset="1" stop-color="#1c46b8"/></radialGradient>' +
        '<radialGradient id="stargrad" cx="35%" cy="30%"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#e39a2e"/></radialGradient>' +
      '</defs>' + lines + players + '</svg>';
    var figure = '<figure>' + svg +
      '<figcaption><p class="formation-label">' + b.formationLabel + '</p>' +
      '<p class="pitch-xi">Valdés · Alves, Piqué, Puyol, Abidal · Busquets, Xavi, Iniesta · Pedro, Messi, Villa</p></figcaption></figure>';
    var facts = '<div class="fact-list">' + b.facts.map(function (f, i) {
      return '<div class="fact" data-reveal style="--i:' + i + '"><span class="fact-mark">' + f.mark + '</span><p>' + f.html + '</p></div>';
    }).join("") + '</div>';
    set("barca", head("barca", b, '<div class="pitch-wrap">' + figure + facts + '</div>') + "</div>");
  }

  function tile(t, i) {
    var then = t.thenText || fmtVal(t.from, t.fmt);
    return '<div class="tile" data-reveal style="--i:' + (i % 8) + '">' +
      '<p class="tile-label">' + t.label + '</p>' +
      '<div class="tile-nums">' +
        '<span class="tile-then">' + then + '</span><span class="tile-arrow">→</span>' +
        '<span class="tile-now" data-countup data-from="' + t.from + '" data-to="' + t.to + '" data-fmt="' + t.fmt + '">' + fmtVal(t.to, t.fmt) + '</span>' +
      '</div>' + (t.note ? '<p class="tile-note">' + t.note + '</p>' : "") + '</div>';
  }
  function renderNumbers() {
    var n = D.numbers, p = n.punchline;
    var tiles = '<div class="tiles">' + n.tiles.map(tile).join("") +
      '<div class="tile tile--wide" data-reveal>' +
        '<p class="tile-label">' + p.label + '</p>' +
        '<div class="tile-nums" style="justify-content:center">' +
          '<span class="tile-now" data-countup data-from="' + p.from + '" data-to="' + p.to + '" data-fmt="' + p.fmt + '">' + fmtVal(p.to, p.fmt) + '</span>' +
        '</div><p class="tile-note">' + p.note + '</p></div>' +
      '</div>';
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
    set("climb", head("climb", c, rankHero + timeline) + "</div>");
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
      '</div>' + body + '</article>' +
      '<p class="coda" data-reveal>' + f.coda + '</p>';
    set("fullcircle", head("fullcircle", f, runStrip + fixture) + "</div>");
  }

  function renderFinale() {
    var f = D.finale;
    var constants = '<div class="constants">' + f.constants.map(function (c, i) {
      return '<p class="constant" data-reveal style="--i:' + i + '">' + (typeof c === "string" ? c : c.html) + '</p>';
    }).join("") + '</div>';
    var actions = '<div class="finale-actions" data-reveal>' +
      '<button class="btn" id="replay">&#8635; ' + f.replay + '</button>' +
      '<div><button class="cake" id="cake" aria-label="birthday cake — tap it">🎂</button>' +
      '<span class="cake-count" id="cake-count" aria-hidden="true">' + f.cakeHint + '</span></div></div>';
    var inner = '<div class="finale-inner">' +
      '<p class="kicker" data-reveal>' + f.kicker + '</p>' + constants +
      '<p class="finale-message" data-reveal>' + f.message + '</p>' + actions +
      '<p class="footer-note">' + f.footer + '</p></div>';
    set("finale", '<div class="container">' + inner + '</div>');
  }

  renderDay(); renderWorldcup(); renderBarca(); renderNumbers();
  renderCulture(); renderClimb(); renderFullcircle(); renderFinale();

  /* hero name + kicker from data */
  var hn = el("hero-name"); if (hn) hn.textContent = D.name;
  var hk = document.querySelector(".hero-kicker"); if (hk) hk.textContent = D.hero.kicker;

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

  /* ---------- confetti ---------- */
  var COLORS = ["#F2C14E", "#3B78F0", "#D6355C", "#E2484D", "#2FA36B", "#FFFFFF"];
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
