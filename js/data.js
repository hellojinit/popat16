/* ============================================================
   DATA — all copy, facts & media live here. Edit this one file.
   {NAME} -> name, {NICK} -> nickname (used in copy).
   Born: Tuesday, July 13, 2010, 7:15 pm · Arlington, VA
   Hometown: Lorton, VA
   ============================================================ */
window.DATA = {

  /* ▼▼ the name shown on the site ▼▼ */
  name: "Popat",
  nickname: "Popat",
  /* ▲▲ appears in "Happy 16th, ___" (hero) and the closing line ▲▲ */

  hero: {
    kicker: "Time capsule to",
    headline: "Happy 16th, {NAME}!",
    sub: "A few fun facts — and a look at the world you were born into. Tuesday, July 13, 2010.",
    cta: "Scroll down to explore"
  },

  day: {
    kicker: "The day you arrived",
    title: "Tuesday.",
    lead: "Arlington, Virginia. 7:15 in the evening, sun still up — a warm, sticky Tuesday. And then there was you.",
    weather: {
      high: 86, low: 73,
      meta: [["At 7:15 pm", "85°F"], ["Feels like", "92°F"], ["Sunset", "8:34 pm"]],
      story: "A few days earlier, Reagan National — right there in Arlington — hit 102°F. Twice. But the heat wave broke just in time, so you got a warm, partly cloudy evening to arrive to.",
      forecast: "Sixteen years on, your birthday looks almost exactly the same: about 85°F, humid, a little hazy."
    },
    chips: [
      { emoji: "🌇", title: "7:15 in the evening", text: "You arrived an hour and a half before sunset, with the sky over Northern Virginia still gold." },
      { emoji: "⚾", title: "On your actual birthday", text: "Out in Anaheim, the National League finally won the MLB All-Star Game 3-1 — their first win in 14 years." },
      { emoji: "🛰️", title: "Three days before", text: "Europe's Rosetta spacecraft slipped past an asteroid called Lutetia, 280 million miles away, and sent home the closest photos anyone had ever taken." },
      { emoji: "🕵️", title: "That week", text: "The U.S. and Russia swapped 14 spies on a runway in Vienna — the biggest exchange since the Cold War. And a few days earlier, LeBron took his talents to South Beach." }
    ]
  },

  alive: {
    kicker: "Every second counts",
    title: "You've been alive for...",
    note: "You crossed 500 million seconds a couple months ago. Here's to billions more..."
  },

  worldcup: {
    kicker: "48 hours before you arrived",
    title: "The world crowned a champion.",
    lead: "The 2010 World Cup final was played in Johannesburg on July 11, two days before you were born — and Barça were all over it.",
    final: {
      label: "July 11 · the final",
      home: "Spain", away: "Netherlands", score: "1-0", detail: "Iniesta, 116'",
      kicker: "Seven of Spain's eleven starters were Barça: Piqué, Puyol, Busquets, Xavi, Iniesta, Pedro and Villa. So really, Barça won the whole thing."
    },
    thirdPlace: {
      label: "July 10 · third-place match",
      home: "Germany", away: "Uruguay", score: "3-2", venue: "Port Elizabeth",
      scorers: ["Müller 19'", "Cavani 28'", "Forlán 51'", "Jansen 56'", "Khedira 82'"],
      kicker: "On the last kick of the game, Forlán's free kick smacked the crossbar. Inches from extra time."
    },
    video: { id: "3pCPQDxZzfY", title: "Iniesta's World Cup-winning goal", caption: "The goal that won it all, the week you were born." },
    usa: {
      label: "🇺🇸 And your country had its moment",
      text: "Three weeks before you were born, <b>Landon Donovan</b> scored in the 91st minute against Algeria. It's still the most famous goal in U.S. soccer history — it won the group ahead of England, of all teams, and the whole country went absolutely nuts.",
      video: { id: "dd-jAOtj5Xw", start: 150, title: "Donovan's 91st-minute winner vs Algeria", caption: "“Go, go, USA!” Three weeks before you showed up." }
    }
  },

  barca: {
    kicker: "Barça, summer 2010",
    title: "The greatest team on Earth.",
    lead: "The week you were born, this was the best football team on the planet — reigning Spanish champions, with Pep Guardiola on the touchline.",
    formationLabel: "2010-11 · 4-3-3",
    players: [
      { n: 1,  name: "Valdés",   x: 34, y: 96 },
      { n: 22, name: "Abidal",   x: 11, y: 78 },
      { n: 5,  name: "Puyol",    x: 25, y: 84 },
      { n: 3,  name: "Piqué",    x: 44, y: 84 },
      { n: 2,  name: "Alves",    x: 58, y: 78 },
      { n: 16, name: "Busquets", x: 34, y: 62 },
      { n: 8,  name: "Iniesta",  x: 19, y: 50 },
      { n: 6,  name: "Xavi",     x: 49, y: 50 },
      { n: 7,  name: "Villa",    x: 12, y: 28 },
      { n: 10, name: "Messi",    x: 34, y: 22, star: true },
      { n: 17, name: "Pedro",    x: 57, y: 28 }
    ],
    standings: {
      label: "La Liga 2009-10 · final table",
      rows: [
        { pos: 1, team: "Barcelona",   pts: 99, champ: true },
        { pos: 2, team: "Real Madrid",  pts: 96 },
        { pos: 3, team: "Valencia",     pts: 71 }
      ],
      note: "Champions of Spain with a record 99 points, three clear of Real Madrid. Then they went and did it all again the next season — and won the Champions League at Wembley."
    },
    facts: [
      { mark: "10", html: "That number <b>10</b> was just 23, with exactly <b>one</b> Ballon d'Or to his name back then. He's got <b>eight</b> now — and nobody else has more than five." },
      { mark: "€40M", html: "David Villa had just signed for <b>€40 million</b>. He turned up a few days after you did — just in time to win everything." },
      { mark: "↔", html: "That same week, <b>Yaya Touré</b> was off to Man City, <b>Ibrahimović</b> was still around the squad, and Adriano had just signed on." },
      { mark: "🏆", html: "Before you'd even turned one, this team won the <b>Champions League</b> at Wembley, 3-1 over Manchester United — Pedro, Messi and Villa all scored." }
    ]
  },

  saints: {
    kicker: "Who Dat!",
    title: "The Saints were on top of the world.",
    lead: "Five months before you were born, New Orleans won the first Super Bowl in franchise history. A city still putting itself back together after Katrina got to dance in the streets again.",
    game: {
      label: "Super Bowl XLIV · Feb 7, 2010 · Miami",
      home: "Saints", away: "Colts", score: "31-17", icon: "🏈",
      scorers: ["Brees, Super Bowl MVP", "Payton's onside kick", "Porter 74-yd pick-six"],
      kicker: "The underdogs beat Peyton Manning's Colts. So for the entire first year of your life, the Saints were the best team in the NFL."
    },
    facts: [
      { mark: "9", html: "<b>Drew Brees</b> tied a Super Bowl record with 32 completions and was named MVP." },
      { mark: "⚡", html: "Coach <b>Sean Payton</b> came out for the second half and called a surprise onside kick — nicknamed “Ambush.”" },
      { mark: "74", html: "<b>Tracy Porter</b> jumped Manning's pass and took it 74 yards the other way to seal it." }
    ],
    video: { id: "P0zuCOfcSjc", title: "Super Bowl XLIV highlights", caption: "Saints 31-17 Colts. The whole ride, in a few minutes." },
    joke: "We all know they've been shit ever since, so it's not too late to switch it up. You're only 16, and I hear the Cowboys are hiring. 💀"
  },

  numbers: {
    kicker: "By the numbers",
    title: "2010 → 2026.",
    tiles: [
      { label: "World population", from: 6900000000, to: 8300000000, fmt: "compact" },
      { label: "U.S. population",  from: 308745538, to: 342600000, fmt: "compact" },
      { label: "Virginia",         from: 8001024,   to: 8900000,   fmt: "compact" },
      { label: "Lorton, VA",       from: 18610,     to: 21000,     fmt: "compact" },
      { label: "Gallon of gas",    from: 2.72,  to: 3.45,  fmt: "usd" },
      { label: "Movie ticket",     from: 7.89,  to: 15.00, fmt: "usd" },
      { label: "A Big Mac",        from: 3.73,  to: 6.49,  fmt: "usd" },
      { label: "One Bitcoin",      from: 0.01,  to: 63000, fmt: "usd0", thenText: "≈ 1¢", note: "$100 of it that week could be worth $126M to $790M today." }
    ]
  },

  culture: {
    kicker: "The week you were born",
    title: "A different planet.",
    lead: "No Instagram. No TikTok. No Snapchat. Here's what the summer of 2010 actually sounded and looked like.",
    cards: [
      { emoji: "🎤", tag: "#1 song", title: "California Gurls", text: "Katy Perry and Snoop Dogg at #1, with Eminem and Rihanna's “Love the Way You Lie” climbing right behind." },
      { emoji: "🍌", tag: "#1 movie", title: "Despicable Me", text: "It opened four days before you were born and made $56M that weekend. The Minions are basically your age." },
      { emoji: "🎬", tag: "In theaters", title: "Summer 2010", text: "Twilight: Eclipse, Toy Story 3, and Inception, out three days after you. Avatar was still the biggest film ever made." },
      { emoji: "📱", tag: "19 days old", title: "iPhone 4", text: "$199, the first Retina screen, brand new FaceTime. The original iPad was barely three months old." },
      { emoji: "🚫", tag: "Didn't exist yet", title: "Instagram", text: "It launched three months after you did. No Snapchat, no TikTok, no Fortnite." },
      { emoji: "🌐", tag: "Online", title: "Facebook: 500M", text: "About to cross half a billion users, while Justin Bieber's “Baby” became the most viewed video on YouTube." },
      { emoji: "⛏️", tag: "Gaming", title: "Minecraft, $13", text: "Still a rough alpha built by one guy. Angry Birds was the game everyone had on their phone." },
      { emoji: "🎮", tag: "Consoles", title: "Xbox 360 & PS3", text: "The consoles to have, with Kinect arriving that November. The PS5 was still ten years away." }
    ]
  },

  climb: {
    kicker: "The Atlas Lions",
    title: "The climb.",
    lead: "The summer you were born, Moroccan football was at rock bottom. What happened next is one of the best stories in football — and it's not finished yet.",
    rank: { from: 82, to: 7, cap: "FIFA world ranking", label: "all-time high of 5th, June 2026" },
    steps: [
      { year: "July 2010", title: "Rock bottom", text: "FIFA rank <b>82nd</b> — the worst in Morocco's history. They'd just missed the World Cup, dead last in their qualifying group. A week before you were born, they brought in a new coach to sort it out." },
      { year: "2010", title: "The old guard", text: "Chamakh had just signed for Arsenal. Taarabt was the maverick. Boussoufa was winning Belgium's Golden Shoe. Good players — just not a team yet." },
      { year: "Meanwhile…", title: "The future was in school", text: "The day you were born, <b>Hakimi was 11</b>. Ounahi was 10. En-Nesyri and Amrabat were 13. Nobody had heard of any of them yet. Just kids — like you." },
      { year: "2022", title: "The mountain", text: "Morocco became the <b>first African and Arab team ever</b> to reach a World Cup semifinal. Belgium, Spain, Portugal — all sent home. Fourth in the world." },
      { year: "2025", title: "Kings of Africa", text: "Champions of the Africa Cup of Nations, at home, in front of their own people." },
      { year: "Today", title: "Top ten on Earth", text: "Sixteen years after rock bottom, Morocco sits <b>7th in the world</b>. And that little kid Ounahi? He just scored twice in a World Cup knockout game." }
    ],
    video: { id: "op4mGRTAlEY", title: "Morocco 1-0 Portugal, 2022", caption: "The night Morocco made history and reached a World Cup semifinal." }
  },

  fullcircle: {
    kicker: "Right now",
    title: "You turn 16 during a World Cup.",
    lead: "You were born two days after one World Cup ended. Sixteen years later, you turn 16 right in the middle of the next one.",
    coda: "You share a birthday with Barcelona's teenage superstar. <b>Lamine Yamal</b> was born on July 13, 2007 — same day as you, just three years earlier. The day you turn 16, he turns 19.",
    twins: {
      label: "And you're in good company. A few other July 13 birthdays:",
      people: [
        { emoji: "🎬", name: "Harrison Ford", note: "Han Solo & Indiana Jones" },
        { emoji: "🖖", name: "Patrick Stewart", note: "Professor X & Captain Picard" },
        { emoji: "🧽", name: "Tom Kenny", note: "the voice of SpongeBob" },
        { emoji: "🧩", name: "Ernő Rubik", note: "invented the Rubik's Cube" },
        { emoji: "😂", name: "Ken Jeong", note: "The Hangover (you'll get it soon)" }
      ]
    }
  },

  sweet: {
    kicker: "Sweet sixteen 🎉",
    title: "What 16 unlocks.",
    lead: "Old enough to drive, young enough to still get grounded. Here's to year sixteen.",
    cards: [
      { emoji: "🚗", tag: "New this year", title: "You're learning to drive", text: "Somewhere in Lorton, a steering wheel is sweating. The roads of Northern Virginia will never be the same, and godspeed to every other driver out there." },
      { emoji: "🎉", tag: "Countdown", title: "3 years to go", text: "Only three more years until you've officially, medically beaten teen pregnancy. We're all rooting for you. Stay strong. 🙏" },
      { emoji: "🦖", tag: "Throwback", title: "Dinosaur fun fact", text: "A T. rex only lived about 28 years — so at 16, in rex years, you're basically a responsible adult. Rawr." }
    ]
  },

  /* OPTIONAL — a "then & now" photo pair. Add two image files to a
     photos/ folder and set the paths below; the section appears only
     once at least one src is filled in. Leave both blank to hide it. */
  photos: {
    kicker: "Then & now",
    title: "Look how far you've come.",
    then: { year: "2010", caption: "Day one in Arlington, VA", src: "" },
    now:  { year: "2026", caption: "Sixteen and unstoppable",  src: "" }
  },

  finale: {
    kicker: "Some things never change",
    constants: [
      "Messi is still playing.",
      "Barça is still Barça.",
      "The Saints are still who dat.",
      "The best summers are still World Cup summers.",
      { html: "Morocco is <span class=\"grad\">still climbing.</span>" }
    ],
    message: "Keep growing, keep smiling. Happy birthday, {NICK}!",
    replay: "Replay the rewind",
    cakeHint: "psst, tap the cake",
    eggToast: "🎉 You found the secret. Year 16 wins everything.",
    footer: "Made with love for your 16th. 🎂⚽⚜️"
  }
};
