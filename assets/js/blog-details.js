(function () {
  "use strict";

  const AUTHORS = {
    amelia: {
      name: "Dr. Amelia Hart",
      role: "MD, FACC · Preventive Cardiology",
      bio: "MD, FACC · Director of Preventive Cardiology at Cardia. Dr. Hart writes about risk reduction, lipids and practical lifestyle medicine.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80"
    },
    marcus: {
      name: "Dr. Marcus Chen",
      role: "MD, PhD · Interventional Cardiology",
      bio: "MD, PhD · Director of Interventional Cardiology at Cardia. Dr. Chen writes about coronary procedures, recovery and evidence-led care.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
    },
    priya: {
      name: "Dr. Priya Raman",
      role: "MD, FASE · Cardiac Imaging",
      bio: "MD, FASE · Director of Cardiac Imaging at Cardia. Dr. Raman writes about diagnostics, echocardiography and making test results easier to understand.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80"
    },
    daniel: {
      name: "Dr. Daniel Ortiz",
      role: "DO, FHRS · Heart Rhythm",
      bio: "DO, FHRS · Heart rhythm specialist at Cardia. Dr. Ortiz writes about palpitations, monitoring and long-term rhythm care.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
    }
  };

  const POSTS = {
    "heart-healthy-plate": {
      slug: "heart-healthy-plate",
      category: "Nutrition",
      readTime: "7 min read",
      dateLong: "12 November 2026",
      author: "amelia",
      title: "The heart-healthy plate: what the evidence actually says",
      metaTitle: "The Heart-Healthy Plate | Cardia Heart Journal",
      metaDescription: "Evidence-based guidance on building a sustainable heart-healthy diet, written by Cardia preventive cardiologist Dr. Amelia Hart.",
      heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "A colourful, heart-healthy meal",
      body: [
        { type: "lead", text: `If you have ever tried to eat "better" for your heart, you have probably met a bewildering array of advice — low fat, low carb, superfoods, detoxes. The good news is that the evidence is far simpler and far less dramatic than the headlines suggest.` },
        { type: "p", text: `A heart-healthy diet is not a short-term intervention. It is a flexible pattern of eating that you can sustain for years. The most consistently supported approach emphasises whole foods, plants and healthy fats while limiting highly processed products.` },
        { type: "h3", text: "Build the plate, not the rules" },
        { type: "p", text: `Rather than counting every calorie, start with the proportions on your plate. A useful visual is to divide it into roughly half vegetables and fruit, a quarter whole grains and a quarter quality protein, with a small amount of unsaturated fat.` },
        { type: "ul", items: [
          `<strong>Colour is a clue.</strong> Different coloured plants provide different antioxidants and fibres. Aim for variety across the week rather than perfection on any single day.`,
          `<strong>Choose whole grains.</strong> Oats, brown rice, quinoa and wholegrain bread retain fibre that helps manage cholesterol and blood sugar.`,
          `<strong>Prioritise unsaturated fats.</strong> Olive oil, nuts, seeds and oily fish support healthy cholesterol profiles when they replace saturated fats.`,
          `<strong>Reduce, don't eliminate.</strong> Highly processed foods, excess salt and added sugars are worth limiting — but an occasional portion is not a failure.`
        ] },
        { type: "blockquote", text: "The best diet for your heart is the one you can happily follow for the next twenty years." },
        { type: "h3", text: "What about salt, cholesterol and coffee?" },
        { type: "p", text: `For most people, reducing salt means cutting back on processed and restaurant foods rather than reaching for the salt shaker. Dietary cholesterol has a smaller effect on blood cholesterol than saturated fat, so focus on the fat source first. Moderate coffee consumption is generally fine for most people, though it is worth discussing if you have an irregular rhythm or uncontrolled blood pressure.` },
        { type: "h3", text: "Make it work in real life" },
        { type: "p", text: `Sustainable change comes from small, repeatable decisions. Keep washed fruit visible, stock your freezer with vegetables, and plan two or three simple meals you genuinely enjoy. If a meal is shared with family or friends, the social benefit matters too.` },
        { type: "p", text: `If you have an existing heart condition, are taking medication or have specific nutritional needs, speak with your cardiologist before making significant changes. A personalised plan is always better than a generic one.` }
      ],
      takeaways: [
        "Build meals around plants, whole grains and unsaturated fats rather than chasing fad diets.",
        "Small, repeatable changes are more effective than short bursts of perfection.",
        "Personalise the plan with your cardiologist, especially if you take medication or have a diagnosis."
      ]
    },

    "blood-pressure-numbers": {
      slug: "blood-pressure-numbers",
      category: "Prevention",
      readTime: "6 min read",
      dateLong: "8 November 2026",
      author: "amelia",
      title: "Understanding your blood pressure numbers — once and for all",
      metaTitle: "Understanding Blood Pressure Numbers | Cardia Heart Journal",
      metaDescription: "A clear guide to systolic and diastolic blood pressure, home monitoring and when a reading deserves medical attention.",
      heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "A blood pressure measurement being taken",
      body: [
        { type: "lead", text: `A blood pressure reading is a snapshot, not a verdict. Understanding what the two numbers mean — and how to measure them consistently — makes the result far more useful.` },
        { type: "p", text: `The top number is systolic pressure, the force in your arteries when your heart contracts. The bottom number is diastolic pressure, the pressure that remains when your heart relaxes between beats. Both matter, and both change throughout the day.` },
        { type: "h3", text: "What the numbers mean" },
        { type: "p", text: `Guidelines vary slightly by country and by individual risk, but the broad categories are consistent. A single reading in a higher range is a reason to check again, not to panic.` },
        { type: "ul", items: [
          `Normal is generally below 120/80 mmHg for most adults.`,
          `Elevated pressure is often described as 120–129 over less than 80.`,
          `Stage 1 hypertension commonly starts around 130/80 and depends on overall risk.`,
          `Very high readings, especially with symptoms, need urgent medical advice.`
        ] },
        { type: "blockquote", text: "One high reading is information. A pattern of readings is a conversation." },
        { type: "h3", text: "How to measure it properly" },
        { type: "p", text: `Home readings can be more representative than a single clinic measurement, but technique matters. Use a validated upper-arm monitor and a cuff that fits correctly.` },
        { type: "ul", items: [
          `Sit quietly for five minutes before measuring, with your back supported.`,
          `Keep your feet flat and rest your arm at heart level.`,
          `Avoid caffeine, exercise and smoking for 30 minutes beforehand.`,
          `Take two readings a minute apart and record both.`
        ] },
        { type: "h3", text: "When to get help" },
        { type: "p", text: `Seek urgent care for a very high reading with chest pain, breathlessness, weakness, confusion or severe headache. Otherwise, bring a week of home readings to your next appointment so your clinician can see the pattern rather than a single number.` }
      ],
      takeaways: [
        "Track trends over several days instead of reacting to one reading.",
        "Use a validated upper-arm monitor and a consistent measuring routine.",
        "Seek urgent help for very high readings accompanied by symptoms."
      ]
    },

    "ecg-vs-echocardiogram": {
      slug: "ecg-vs-echocardiogram",
      category: "Diagnostics",
      readTime: "7 min read",
      dateLong: "2 November 2026",
      author: "priya",
      title: "ECG vs echocardiogram: which test do you need?",
      metaTitle: "ECG vs Echocardiogram | Cardia Heart Journal",
      metaDescription: "Learn the difference between an ECG and an echocardiogram, what each test shows and how cardiologists decide which one to use.",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Cardiac monitoring equipment used during heart tests",
      body: [
        { type: "lead", text: `An ECG and an echocardiogram are both common heart tests, but they answer different questions. One records the heart's electrical signal; the other shows its structure and movement.` },
        { type: "p", text: `Your cardiologist may recommend one test, the other, or both. The choice depends on your symptoms, examination findings and what needs to be ruled out.` },
        { type: "h3", text: "What an ECG shows" },
        { type: "p", text: `An electrocardiogram records the timing and rhythm of your heart's electrical activity. It is quick, painless and especially useful when a rhythm problem or reduced blood flow is suspected.` },
        { type: "ul", items: [
          `Heart rate and rhythm, including atrial fibrillation and other arrhythmias.`,
          `Evidence of previous heart damage or strain.`,
          `Changes that may suggest reduced blood flow to the heart muscle.`,
          `The effect of certain medications on the heart's electrical system.`
        ] },
        { type: "h3", text: "What an echocardiogram shows" },
        { type: "p", text: `An echocardiogram uses ultrasound to create moving images of the heart. It shows chamber size, muscle function, valve motion and how blood flows through the heart.` },
        { type: "ul", items: [
          `How well the heart muscle is pumping.`,
          `Valve narrowing, leakage or other valve problems.`,
          `Chamber size and wall thickness.`,
          `Fluid around the heart or signs of heart failure.`
        ] },
        { type: "blockquote", text: "The ECG tells us how the heart is conducting. The echo tells us how the heart is built and working." },
        { type: "h3", text: "Which test comes first?" },
        { type: "p", text: `A palpitations episode may start with an ECG or a longer rhythm monitor. A murmur or breathlessness may call for an echocardiogram. In many assessments, both tests provide complementary information and are reviewed together.` },
        { type: "p", text: `If you are unsure why a test has been requested, ask what question your cardiologist is trying to answer. That context makes the result much easier to understand.` }
      ],
      takeaways: [
        "An ECG records electrical rhythm; an echocardiogram shows structure and pumping.",
        "The right test depends on your symptoms and what your cardiologist needs to know.",
        "Many heart assessments use both tests together for a fuller picture."
      ]
    },

    "exercise-after-cardiac-diagnosis": {
      slug: "exercise-after-cardiac-diagnosis",
      category: "Lifestyle",
      readTime: "6 min read",
      dateLong: "27 October 2026",
      author: "marcus",
      title: "Exercise after a cardiac diagnosis: safe, smart and step-by-step",
      metaTitle: "Exercise After a Cardiac Diagnosis | Cardia Heart Journal",
      metaDescription: "A practical, cardiologist-reviewed guide to starting exercise safely after a heart diagnosis or procedure.",
      heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "A person exercising outdoors",
      body: [
        { type: "lead", text: `Movement is one of the most effective medicines for the heart, but after a cardiac diagnosis it deserves a plan. The goal is not to prove anything — it is to build a routine your body can tolerate and sustain.` },
        { type: "p", text: `Most people benefit from a mix of gentle aerobic activity, strength work and mobility. The right starting point depends on your diagnosis, treatment, symptoms and current fitness.` },
        { type: "h3", text: "Start with a conversation" },
        { type: "p", text: `Before beginning, ask your cardiologist or cardiac rehabilitation team what is safe for you. They can set sensible heart-rate limits, explain warning signs and recommend supervised rehabilitation if appropriate.` },
        { type: "ul", items: [
          `Ask whether any specific movements or intensities should be avoided.`,
          `Review your medications, especially those that affect heart rate or blood pressure.`,
          `Choose low-impact activity such as walking, cycling or swimming.`,
          `Plan shorter sessions more often rather than one exhausting session.`
        ] },
        { type: "h3", text: "Build slowly" },
        { type: "p", text: `A practical approach is to start with 10 to 15 minutes of easy activity and add a few minutes each week. You should be able to speak in short sentences while exercising. If you cannot, slow down.` },
        { type: "blockquote", text: "Consistency beats intensity. A modest routine you repeat is more valuable than a heroic session you dread." },
        { type: "h3", text: "Know the warning signs" },
        { type: "p", text: `Stop and seek medical advice if you develop chest pain, severe breathlessness, dizziness, palpitations that feel new or worsening, or unusual swelling. Do not push through symptoms to complete a session.` },
        { type: "p", text: `Over time, regular activity can improve stamina, mood, blood pressure and blood sugar. The best programme is the one that fits your life and can be adjusted as your confidence grows.` }
      ],
      takeaways: [
        "Get personalised advice before starting or changing an exercise routine.",
        "Begin gently and increase duration before intensity.",
        "Stop and seek help for chest pain, severe breathlessness or new palpitations."
      ]
    },

    "medication-routine": {
      slug: "medication-routine",
      category: "Prevention",
      readTime: "5 min read",
      dateLong: "19 October 2026",
      author: "amelia",
      title: "Never miss a dose: building a medication routine that sticks",
      metaTitle: "Building a Medication Routine | Cardia Heart Journal",
      metaDescription: "Practical systems and gentle reminders that make heart medication adherence easier and more consistent.",
      heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Medication blister packs arranged on a table",
      body: [
        { type: "lead", text: `Heart medications work best when they are taken consistently. Missing doses is common, but it is rarely about forgetfulness alone — routines, cost, side effects and confusion all play a part.` },
        { type: "p", text: `The most effective system is usually the simplest one. It should fit your day, make the right dose obvious and make missed doses easy to notice.` },
        { type: "h3", text: "Make it automatic" },
        { type: "p", text: `Link your medication to something you already do without thinking, such as brushing your teeth or eating breakfast. A predictable cue reduces the number of decisions you have to make.` },
        { type: "ul", items: [
          `Use a weekly pill organiser and refill it on the same day each week.`,
          `Keep medications visible but safely out of reach of children and pets.`,
          `Set a phone alarm or use a reminder app for doses outside your routine.`,
          `Ask for a simplified schedule if you take several medicines at different times.`
        ] },
        { type: "blockquote", text: "The best medication routine is not the most elaborate one. It is the one you can repeat on a difficult day." },
        { type: "h3", text: "Plan for refills" },
        { type: "p", text: `Running out of a heart medicine can interrupt treatment and, for some drugs, cause symptoms if stopped suddenly. Note the refill date when you start a new pack and request repeats a few days early.` },
        { type: "h3", text: "Talk about side effects" },
        { type: "p", text: `Do not silently stop a medicine because it makes you feel unwell. Write down what you notice and when it happens, then contact your care team. There may be a different dose, timing or alternative that works better.` },
        { type: "p", text: `If cost is a barrier, ask whether a generic version, patient assistance programme or alternative is available. A workable plan is always better than an ideal one you cannot follow.` }
      ],
      takeaways: [
        "Attach medication to an existing daily habit and use a weekly organiser.",
        "Track refill dates so treatment is not interrupted.",
        "Report side effects or cost barriers instead of stopping medicines alone."
      ]
    },

    "stress-and-your-heart": {
      slug: "stress-and-your-heart",
      category: "Lifestyle",
      readTime: "6 min read",
      dateLong: "11 October 2026",
      author: "daniel",
      title: "Stress and your heart: the connection worth taking seriously",
      metaTitle: "Stress and Your Heart | Cardia Heart Journal",
      metaDescription: "How chronic stress affects blood pressure, sleep and heart rhythm, plus practical steps that genuinely help.",
      heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "A person practising calm breathing",
      body: [
        { type: "lead", text: `Stress is not only a feeling. It changes blood pressure, sleep, inflammation and the way the heart's electrical system behaves. The effect is usually temporary, but chronic stress can wear away at heart health.` },
        { type: "p", text: `The goal is not to remove every stressor. It is to reduce the load where possible and build recovery into the day so your body is not constantly on alert.` },
        { type: "h3", text: "What stress does to the heart" },
        { type: "p", text: `During stress, the body releases hormones that raise heart rate and blood pressure. That response is useful in short bursts. When it stays switched on, sleep, blood sugar and blood pressure can all suffer.` },
        { type: "ul", items: [
          `Blood pressure and heart rate can rise during stressful periods.`,
          `Sleep quality often drops, which adds further strain.`,
          `Some people notice more palpitations or a racing heartbeat.`,
          `Long-term stress can make healthy routines harder to maintain.`
        ] },
        { type: "blockquote", text: "Recovery is not a luxury. It is part of how the heart resets." },
        { type: "h3", text: "What actually helps" },
        { type: "p", text: `Small, regular recovery practices tend to work better than waiting for a holiday. A short walk, slow breathing, time outdoors, a consistent bedtime and saying no to one unnecessary commitment can all lower the load.` },
        { type: "ul", items: [
          `Try five minutes of slow breathing with a longer exhale than inhale.`,
          `Protect a consistent sleep and wake time.`,
          `Move your body most days, even briefly.`,
          `Talk to someone you trust rather than carrying everything alone.`
        ] },
        { type: "h3", text: "When to seek support" },
        { type: "p", text: `Speak with a clinician if stress is affecting sleep, mood or daily life, or if you have new palpitations, chest discomfort or blood pressure that is harder to control. Support is practical, not a sign of weakness.` }
      ],
      takeaways: [
        "Chronic stress affects blood pressure, sleep and heart rhythm.",
        "Regular short recovery practices are more useful than occasional big breaks.",
        "Seek support for persistent symptoms or stress that affects daily life."
      ]
    },

    "holter-monitor-48-hours": {
      slug: "holter-monitor-48-hours",
      category: "Diagnostics",
      readTime: "5 min read",
      dateLong: "3 October 2026",
      author: "daniel",
      title: "Living with a Holter monitor for 48 hours",
      metaTitle: "Living With a Holter Monitor | Cardia Heart Journal",
      metaDescription: "A realistic guide to wearing a Holter monitor for 48 hours, including what it records and how to live normally.",
      heroImage: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=82",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Cardiac monitoring equipment",
      body: [
        { type: "lead", text: `A Holter monitor is a small, portable ECG recorder worn for 24 to 48 hours. It is especially useful when palpitations or dizziness come and go, because it can catch an episode while you are living your normal day.` },
        { type: "p", text: `The monitor records continuously, but it cannot tell us how you felt. That is why your symptom diary matters as much as the device itself.` },
        { type: "h3", text: "What the monitor records" },
        { type: "p", text: `Several electrodes are attached to your chest and connected to a small recorder worn on a belt or shoulder strap. The device stores a continuous rhythm strip for your cardiologist to review.` },
        { type: "ul", items: [
          `Your heart rate and rhythm across the whole recording period.`,
          `Short runs of extra beats or other rhythm changes.`,
          `How your heart rate responds to activity and rest.`,
          `The rhythm at the exact time you recorded a symptom.`
        ] },
        { type: "blockquote", text: "The most useful diary entry is specific: what you felt, when it started and what you were doing." },
        { type: "h3", text: "Living normally" },
        { type: "p", text: `You can usually continue most daily activities. The goal is to capture a typical day, including the situations that trigger symptoms.` },
        { type: "ul", items: [
          `Keep the electrodes dry unless your care team says otherwise.`,
          `Avoid magnets and heavy electrical equipment near the recorder.`,
          `Wear loose clothing so the wires are not pulled.`,
          `Write down symptoms, times and activity in the diary provided.`
        ] },
        { type: "h3", text: "After the monitor" },
        { type: "p", text: `Return the device as instructed. The recording is analysed and reviewed alongside your diary. Your cardiologist will explain whether the result shows a rhythm problem, a harmless variation or a need for further monitoring.` },
        { type: "p", text: `If you develop chest pain, severe breathlessness or fainting while wearing the monitor, seek urgent medical care rather than waiting for the review appointment.` }
      ],
      takeaways: [
        "A Holter monitor records your rhythm continuously over 24 to 48 hours.",
        "Keep a specific symptom diary to help your cardiologist interpret the recording.",
        "Seek urgent care for chest pain, severe breathlessness or fainting."
      ]
    }
  };

  const ORDER = [
    "heart-healthy-plate",
    "blood-pressure-numbers",
    "ecg-vs-echocardiogram",
    "exercise-after-cardiac-diagnosis",
    "medication-routine",
    "stress-and-your-heart",
    "holter-monitor-48-hours"
  ];

  const $ = (selector, context = document) => context.querySelector(selector);
  const bd = (name) => $(`[data-bd="${name}"]`);
  const requested = new URLSearchParams(window.location.search).get("post");
  const key = ORDER.includes(requested) ? requested : ORDER[0];
  const data = POSTS[key];
  const author = AUTHORS[data.author];

  function setText(element, value) {
    if (element) element.textContent = value;
  }

  function setImage(element, src, alt) {
    if (!element) return;
    element.src = src;
    element.alt = alt;
  }

  function blockHtml(block) {
    if (block.type === "lead") return `<p class="lead">${block.text}</p>`;
    if (block.type === "h3") return `<h3>${block.text}</h3>`;
    if (block.type === "ul") return `<ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    if (block.type === "blockquote") return `<blockquote>“${block.text}”</blockquote>`;
    return `<p>${block.text}</p>`;
  }

  function renderHero() {
    const heroImage = bd("heroImage");
    if (heroImage) heroImage.src = data.heroImage;
    setText(bd("heroEyebrow"), `${data.category} · ${data.readTime}`);
    setText(bd("heroTitle"), data.title);
    setText(bd("heroMeta"), `By ${author.name} · ${data.dateLong}`);
  }

  function renderArticle() {
    setImage(bd("articleImage"), data.image, data.imageAlt);
    const body = bd("body");
    if (body) body.innerHTML = data.body.map(blockHtml).join("");
    setImage(bd("authorImage"), author.image, author.name);
    setText(bd("authorName"), author.name);
    setText(bd("authorBio"), author.bio);
  }

  function renderSummary() {
    const takeaways = bd("takeaways");
    if (takeaways) takeaways.innerHTML = data.takeaways.map((item) => `<li>${item}</li>`).join("");
    setImage(bd("reviewerImage"), author.image, author.name);
    setText(bd("reviewerName"), author.name);
    setText(bd("reviewerRole"), author.role);
  }

  function renderRelated() {
    const grid = bd("related");
    if (!grid) return;
    const start = ORDER.indexOf(key);
    const related = [1, 2, 3].map((offset) => POSTS[ORDER[(start + offset) % ORDER.length]]);
    grid.innerHTML = related.map((post, index) => (
      `<article class="post-card" data-reveal${index ? ` data-reveal-delay="${index}"` : ""}><div class="post-card__media ratio"><img src="${post.image}" alt="${post.imageAlt}"></div><div class="post-card__body"><div class="post-card__meta"><span>${post.category}</span><span>${post.readTime}</span></div><h3 class="post-card__title">${post.title}</h3><a class="card__link" href="blog-details.html?post=${post.slug}">Read more <svg class="ico ico--sm"><use href="#i-arrow"/></svg></a></div></article>`
    )).join("");
  }

  function copyFallback(text, done) {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      done();
    } catch (error) {
      window.showToast?.("Copy failed", "Please copy the URL from your browser.", "error");
    }
    document.body.removeChild(area);
  }

  function renderShare() {
    const pageUrl = window.location.href;
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(data.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
    };
    Object.keys(links).forEach((name) => {
      const link = $(`[data-share="${name}"]`);
      if (!link) return;
      link.href = links[name];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
    const copy = $("[data-share-copy]");
    copy?.addEventListener("click", () => {
      const done = () => window.showToast?.("Link copied", "The article link is ready to share.", "success");
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(pageUrl).then(done).catch(() => copyFallback(pageUrl, done));
      } else {
        copyFallback(pageUrl, done);
      }
    });
  }

  function render() {
    document.body.dataset.post = data.slug;
    document.title = data.metaTitle;
    const meta = $('meta[name="description"]');
    if (meta) meta.content = data.metaDescription;
    renderHero();
    renderArticle();
    renderSummary();
    renderRelated();
    renderShare();
  }

  render();
})();
