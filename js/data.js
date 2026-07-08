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

  /* ══════════════════════════════════════════════════════════
     THE ONE THING TO UPDATE — France vs Morocco quarterfinal
     Kicks off Thursday, July 9, 2026 (4pm ET). After it ends, set:
       played: true
       result: "Morocco 1-0 France"      (final score, Morocco first)
       note:   pick the matching line and paste it in:
         WIN  -> "Into the semifinals. They play July 14, the day after your birthday. 🇲🇦"
         LOSS -> "It ends in the last eight, but they're 7th in the world and still climbing."
         PENS -> "Decided on penalties again. What a way to spend your birthday week."
     Then re-deploy. That's the only edit game-day needs.
     ══════════════════════════════════════════════════════════ */
  moroccoQF: {
    played: false,
    result: "",
    note: ""
  },

  hero: {
    kicker: "July 13, 2026 · you're 16",
    headline: "Happy 16th, {NAME}.",
    sub: "Here are some fun facts, and a look at how the world was the day you were born. Tuesday, July 13, 2010.",
    play: "▶  Play the story"
  },

  day: {
    kicker: "The day you arrived",
    title: "Tuesday, July 13, 2010.",
    lead: "Arlington, Virginia, 7:15 in the evening, with the summer sun still up. A warm, sticky Tuesday, and the start of everything.",
    weather: {
      high: 86, low: 73,
      meta: [["At 7:15 pm", "85°F"], ["Feels like", "92°F"], ["Sunset", "8:34 pm"]],
      story: "A few days earlier, Reagan National (right there in Arlington) had hit 102°F. Twice. It was a brutal heat wave. By the 13th the worst of it had passed, so you got a warm, partly cloudy evening to show up to.",
      forecast: "Sixteen years later, your birthday looks almost identical: about 85°F, humid, a little haze. Some things really don't change."
    },
    chips: [
      { emoji: "🌇", title: "7:15 in the evening", text: "You showed up about an hour and a half before sunset, with the sky over Northern Virginia still gold." },
      { emoji: "⚾", title: "On your actual birthday", text: "Over in Anaheim, the National League won the MLB All-Star Game 3 to 1. It was their first win in 14 years, and it happened on your birthday." },
      { emoji: "🛰️", title: "Three days before", text: "Europe's Rosetta spacecraft flew past an asteroid called Lutetia, 280 million miles from home, and sent back the closest photos anyone had ever taken." },
      { emoji: "🕵️", title: "That week", text: "The U.S. and Russia swapped 14 spies on a runway in Vienna, the biggest exchange since the Cold War. That same week, LeBron went on live TV and took his talents to South Beach." }
    ]
  },

  alive: {
    kicker: "Every second counts",
    title: "You've been alive for...",
    lead: "You arrived at exactly 7:15 in the evening. The clock hasn't stopped once since.",
    note: "and counting, one second at a time."
  },

  worldcup: {
    kicker: "48 hours before you arrived",
    title: "The world crowned a champion.",
    lead: "The 2010 World Cup final was played in Johannesburg on July 11, just two days before you were born. And your Barça were all over it.",
    final: {
      label: "July 11 · the final",
      home: "Spain", away: "Netherlands", score: "1-0", detail: "Iniesta, 116'",
      kicker: "Seven of the eleven players who started for Spain were from Barça: Piqué, Puyol, Busquets, Xavi, Iniesta, Pedro and Villa. Your club basically won the whole thing."
    },
    thirdPlace: {
      label: "July 10 · third-place match",
      home: "Germany", away: "Uruguay", score: "3-2", venue: "Port Elizabeth",
      scorers: ["Müller 19'", "Cavani 28'", "Forlán 51'", "Jansen 56'", "Khedira 82'"],
      kicker: "With the very last kick of the game, Forlán's free kick hit the crossbar. Inches from extra time."
    },
    video: { id: "3pCPQDxZzfY", title: "Iniesta's World Cup-winning goal", caption: "The goal that won it all, the week you were born." },
    usa: {
      label: "🇺🇸 And your country had its moment",
      text: "Three weeks before you were born, <b>Landon Donovan</b> scored in the 91st minute against Algeria. It's still the most famous goal in U.S. soccer history. It won the group (ahead of England, no less) and put the USA into the last 16, and the whole country lost its mind.",
      video: { id: "dd-jAOtj5Xw", start: 150, title: "Donovan's 91st-minute winner vs Algeria", caption: "“Go, go, USA!” Three weeks before you showed up." }
    }
  },

  barca: {
    kicker: "Your Barça, summer 2010",
    title: "The greatest team on Earth.",
    lead: "The week you were born, this was the best football team on the planet. Reigning Spanish champions, coached by Pep Guardiola.",
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
      note: "First place, champions of Spain with a record 99 points, three clear of Real Madrid. The next season they did it all over again, and won the Champions League at Wembley too."
    },
    facts: [
      { mark: "10", html: "That number <b>10</b> was 23 years old, with exactly <b>one</b> Ballon d'Or at the time. He has <b>eight</b> now. Nobody else has more than five." },
      { mark: "€40M", html: "David Villa had just signed for <b>€40 million</b>. He arrived a few days after you did, right in time to win everything." },
      { mark: "↔", html: "That same week, <b>Yaya Touré</b> was sold to Man City, <b>Ibrahimović</b> was still in the squad, and Adriano signed on the week you were born." },
      { mark: "🏆", html: "Before you'd even had your first birthday, this team won the <b>Champions League</b> at Wembley, beating Manchester United 3 to 1. Pedro, Messi and Villa scored." }
    ]
  },

  saints: {
    kicker: "Who Dat!",
    title: "Your Saints ruled the world.",
    lead: "Five months before you were born, New Orleans won the first Super Bowl in the franchise's history. A city still rebuilding after Katrina got to dance in the streets again.",
    game: {
      label: "Super Bowl XLIV · Feb 7, 2010 · Miami",
      home: "Saints", away: "Colts", score: "31-17", icon: "🏈",
      scorers: ["Brees, Super Bowl MVP", "Payton's onside kick", "Porter 74-yd pick-six"],
      kicker: "The underdogs beat Peyton Manning's Colts. So for the entire first year of your life, the Saints were the champions of the NFL."
    },
    facts: [
      { mark: "9", html: "<b>Drew Brees</b> tied a Super Bowl record with 32 completions and was named MVP." },
      { mark: "⚡", html: "Coach <b>Sean Payton</b> opened the second half with a surprise onside kick they called “Ambush.”" },
      { mark: "74", html: "<b>Tracy Porter</b> jumped Manning's pass and took it 74 yards the other way to seal it." }
    ],
    video: { id: "P0zuCOfcSjc", title: "Super Bowl XLIV highlights", caption: "Saints 31-17 Colts. The whole ride, in a few minutes." },
    joke: "One small catch. They won it all five months before you showed up, and they haven't won a Super Bowl since. Every single year of your life, nothing. Coincidence? 💀 (There's still time to switch teams. Just saying.)"
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
      { label: "A home near Lorton",from: 400000, to: 650000, fmt: "usd0" },
      { label: "One Bitcoin",      from: 0.01,  to: 63000, fmt: "usd0", thenText: "≈ 1¢", note: "$100 of it that week could be worth $126M to $790M today." }
    ]
  },

  culture: {
    kicker: "The week you were born",
    title: "A different planet.",
    lead: "No Instagram. No TikTok. No Snapchat. Here's what the summer of 2010 actually sounded and looked like.",
    cards: [
      { emoji: "🎤", tag: "#1 song", title: "California Gurls", text: "Katy Perry and Snoop Dogg, sitting at #1, with Eminem and Rihanna's “Love the Way You Lie” climbing right behind it." },
      { emoji: "🍌", tag: "#1 movie", title: "Despicable Me", text: "It opened four days before you were born and made $56M that weekend, which makes the Minions basically your age." },
      { emoji: "🎬", tag: "In theaters", title: "Summer 2010", text: "Twilight: Eclipse, Toy Story 3, and Inception, which came out three days after you did. Avatar was still the biggest film ever made." },
      { emoji: "📱", tag: "19 days old", title: "iPhone 4", text: "$199, the first Retina screen, brand new FaceTime. The original iPad was barely three months old." },
      { emoji: "🚫", tag: "Didn't exist yet", title: "Instagram", text: "It launched three months after you did. No Snapchat, no TikTok, and Uber was a tiny startup called UberCab." },
      { emoji: "🌐", tag: "Online", title: "Facebook: 500M", text: "About to cross half a billion users, while Justin Bieber's “Baby” became the most viewed video on YouTube." },
      { emoji: "⛏️", tag: "Gaming", title: "Minecraft, $13", text: "Still a rough alpha built by one guy. Angry Birds was the game everyone had on their phone." },
      { emoji: "📼", tag: "The old world", title: "Blockbuster was open", text: "Netflix mostly mailed you DVDs. And the Old Spice Guy went viral that exact week." }
    ]
  },

  climb: {
    kicker: "Your Atlas Lions",
    title: "The climb.",
    lead: "The summer you were born, Moroccan football was at rock bottom. What happened next is one of the best stories in sport, and it's still being written.",
    rank: { from: 82, to: 7, cap: "FIFA world ranking", label: "all-time high of 5th, June 2026" },
    steps: [
      { year: "July 2010", title: "Rock bottom", text: "FIFA rank <b>82nd</b>, the worst in Morocco's history. They'd just missed the World Cup after finishing last in qualifying. They hired a new coach, Eric Gerets, to fix it, a week before you were born." },
      { year: "2010", title: "The old guard", text: "Chamakh had just joined Arsenal. Taarabt was the maverick. Boussoufa was winning Belgium's Golden Shoe. Good players, but not a team yet." },
      { year: "Meanwhile…", title: "The future was in school", text: "The day you were born, <b>Hakimi was 11</b>. Ounahi was 10. En-Nesyri and Amrabat were 13. Bono was 19. Nobody had heard of any of them. They were just kids, like you." },
      { year: "2022", title: "The mountain", text: "Morocco became the <b>first African and Arab team ever</b> to reach a World Cup semifinal. They beat Belgium. They knocked out Spain on penalties. They beat Portugal. Fourth in the world." },
      { year: "2025", title: "Kings of Africa", text: "Champions of the Africa Cup of Nations, at home, in front of their own people." },
      { year: "Today", title: "Top ten on Earth", text: "16 years after rock bottom, Morocco sits <b>7th in the world</b>. And that little kid Ounahi? He just scored twice in a World Cup knockout." }
    ],
    video: { id: "op4mGRTAlEY", title: "Morocco 1-0 Portugal, 2022", caption: "The night Morocco made history and reached a World Cup semifinal." }
  },

  fullcircle: {
    kicker: "Right now",
    title: "You turn 16 during a World Cup.",
    lead: "You were born two days after one of these ended. Sixteen years later, almost to the week, you turn 16 right in the middle of the next one. And this time, Morocco is one of the last eight teams standing.",
    runLabel: "Morocco's run, summer 2026",
    run: [
      { txt: "Brazil 1-1", plain: true },
      { txt: "Scotland 1-0", win: true },
      { txt: "Haiti 4-2", win: true },
      { txt: "Netherlands 1-1 (3-2 pens)", win: true },
      { txt: "Canada 3-0", win: true }
    ],
    runNote: "They knocked out the <b>Netherlands</b> on penalties to reach the last 16. That's the same team Spain beat in the final the week you were born. Full circle.",
    match: {
      comp: "2026 World Cup · Quarterfinal",
      home: "Morocco", away: "France",
      dateText: "Thursday, July 9",
      upcoming: "If they win, Morocco play a World Cup semifinal on July 14, the day after you turn 16.",
      tag: "A rematch of the 2022 semifinal, and this time the whole world is watching."
    },
    coda: "You share your birthday with Barcelona's teen superstar. <b>Lamine Yamal</b> was born on July 13, 2007, the exact same day as you, just three years earlier. When you turn 16, he turns 19.",
    twins: {
      label: "And you're in good company. A few other July 13 birthdays:",
      people: [
        { emoji: "🎬", name: "Harrison Ford", note: "Han Solo & Indiana Jones" },
        { emoji: "🖖", name: "Patrick Stewart", note: "Professor X & Captain Picard" },
        { emoji: "🧽", name: "Tom Kenny", note: "the voice of SpongeBob" },
        { emoji: "🧩", name: "Ernő Rubik", note: "invented the Rubik's Cube" },
        { emoji: "😂", name: "Ken Jeong", note: "The Hangover" }
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
      { emoji: "🦖", tag: "Throwback", title: "Your dinosaur era", text: "You used to be obsessed with dinosaurs. Fun fact: a T. rex only lived about 28 years, so at 16, in rex years, you're basically a responsible adult. Rawr." }
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
      { html: "And Morocco is <span class=\"grad\">still climbing.</span>" }
    ],
    message: "Happy 16th, {NICK}. The world's been busy since July 13, 2010, but so have you.",
    replay: "Replay the rewind",
    cakeHint: "psst, tap the cake",
    eggToast: "🎉 You found the secret. Year 16 wins everything.",
    footer: "Made with love for your 16th. 🎂⚽⚜️"
  }
};
