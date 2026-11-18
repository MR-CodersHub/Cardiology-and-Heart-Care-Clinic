(function () {
  "use strict";

  const DOCTORS = {
    priya: {
      name: "Dr. Priya Raman",
      slug: "dr-priya-raman",
      spec: "MD, FASE · Cardiac Imaging Director",
      text: "Specialises in comprehensive cardiac assessment and advanced imaging.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=85"
    },
    amelia: {
      name: "Dr. Amelia Hart",
      slug: "dr-amelia-hart",
      spec: "MD, FACC · Preventive Cardiology",
      text: "Works with you on prevention, treatment and long-term heart health.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=85"
    },
    marcus: {
      name: "Dr. Marcus Chen",
      slug: "dr-marcus-chen",
      spec: "MD, PhD · Interventional Cardiology",
      text: "Specialises in minimally invasive coronary and structural procedures.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=85"
    },
    daniel: {
      name: "Dr. Daniel Ortiz",
      slug: "dr-daniel-ortiz",
      spec: "DO, FHRS · Heart Rhythm",
      text: "Focuses on rhythm disorders, monitoring and long-term heart care.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=85"
    }
  };

  const SERVICES = {
    "echocardiogram": {
      metaTitle: "Echocardiogram | Diagnostic Service | Cardia",
      metaDescription: "Painless ultrasound imaging that shows your heart's structure, valves and pumping function in real time.",
      heroEyebrow: "Diagnostic service",
      heroTitle: "Echocardiogram",
      heroText: "Painless ultrasound imaging that shows your heart's structure, valves and pumping function in real time.",
      heroImage: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=82",
      detailEyebrow: "Diagnostic service",
      detailTitle: "Echocardiogram: a clear picture of how your heart works.",
      detailLead: "A painless ultrasound that shows your heart's structure, valves and pumping function in real time — giving your cardiologist the detail needed to make confident decisions.",
      detailImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Cardiology consultation during an echocardiogram",
      detailTag: "Accredited imaging suite",
      booking: "Echocardiogram",
      detailBookLabel: "Book This Test",
      price: { label: "Echocardiogram package", amount: "$290", unit: "/ scan", meta: ["Scan & specialist report", "20-min result consultation"] },
      trust: [
        { icon: "i-clock", label: "45 minutes" },
        { icon: "i-file", label: "Report in 24h" },
        { icon: "i-shield", label: "Non-invasive" }
      ],
      about: {
        eyebrow: "About the test",
        title: "See beyond the surface.",
        lead: "An echocardiogram uses sound waves to create moving images of your heart. It helps us assess chamber size, pumping strength, valve function and blood flow — without radiation, needles or discomfort.",
        text: "Your specialist will explain each image as they capture it, so you leave understanding exactly what we found and what it means for you.",
        cards: [
          { icon: "i-heart", title: "Pumping function", text: "Measures ejection fraction and how well the heart muscle contracts." },
          { icon: "i-activity", title: "Valve assessment", text: "Detects narrowing, leakage and valve motion abnormalities." },
          { icon: "i-pulse", title: "Blood flow", text: "Doppler imaging reveals the direction and speed of flow through the heart." },
          { icon: "i-brain", title: "Early detection", text: "Identifies subtle changes before symptoms appear." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your visit, step by step.",
        sub: "No surprises. Here is exactly how your appointment will unfold.",
        steps: [
          { icon: "i-clock", title: "Arrive & settle", text: "Check in, get comfortable and change into a gown in your private room." },
          { icon: "i-activity", title: "Sensors placed", text: "Small stickers are applied to your chest to record your heart rhythm." },
          { icon: "i-heart", title: "Images captured", text: "A painless probe glides over your chest while we capture live images." },
          { icon: "i-file", title: "Results explained", text: "Your cardiologist walks you through the findings and next steps." }
        ],
        ctaTitle: "Preparation is minimal.",
        ctaText: "Wear comfortable clothing, avoid caffeine two hours before and take your usual medications unless told otherwise.",
        ctaLabel: "Book Your Scan"
      },
      facility: {
        eyebrow: "Our imaging suite",
        title: "Purpose-built for precision and calm.",
        lead: "Our dedicated imaging suites combine leading technology with a quiet, private environment — so you can relax while we gather the detail we need.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1100&q=85",
        imageAlt: "Cardiologists reviewing diagnostic imaging",
        items: ["High-resolution 3D and strain imaging", "Private, temperature-controlled rooms", "Specialist sonographers and reporting cardiologists", "Reports delivered securely to your patient portal"],
        link: "Explore our facilities"
      },
      specialists: {
        title: "Read by leading imaging cardiologists.",
        text: "Every scan is interpreted by a specialist who knows your history.",
        doctors: [DOCTORS.priya, DOCTORS.amelia]
      },
      faqs: [
        { q: "Does an echocardiogram hurt?", a: "Not at all. It is a painless ultrasound. You may feel mild pressure from the probe, but there are no needles, radiation or discomfort." },
        { q: "How long does the appointment take?", a: "Allow around 45 minutes in total, including check-in, image capture and a discussion with your cardiologist." },
        { q: "When will I receive my report?", a: "Reports are usually available within 24 hours in your secure patient portal, with a plain-language summary from your doctor." },
        { q: "Can I drive after the test?", a: "Yes. There is no sedation, so you can drive, work and eat normally straight afterwards." }
      ]
    },

    "clinical-cardiology": {
      metaTitle: "Clinical Cardiology | Cardia Heart & Vascular Clinic",
      metaDescription: "Specialist cardiology consultations for symptoms, risk factors, family history and ongoing heart conditions.",
      heroEyebrow: "Clinical service",
      heroTitle: "Clinical Cardiology",
      heroText: "Specialist consultations for symptoms, risk factors, family history and ongoing heart conditions.",
      heroImage: "assets/img/service-consultation.jpg",
      detailEyebrow: "Clinical service",
      detailTitle: "Expert assessment for the full picture of your heart health.",
      detailLead: "An unhurried consultation that brings together your symptoms, history, test results and goals — so you leave with a clear diagnosis and a plan you understand.",
      detailImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Cardiologist discussing a care plan with a patient",
      detailTag: "Private consultation rooms",
      booking: "Clinical Cardiology Consultation",
      detailBookLabel: "Book a Consultation",
      price: { label: "Consultation package", amount: "$180", unit: "/ visit", meta: ["60-min cardiologist review", "Written care plan"] },
      trust: [
        { icon: "i-clock", label: "45-60 minutes" },
        { icon: "i-file", label: "Plan same day" },
        { icon: "i-shield", label: "No referral needed" }
      ],
      about: {
        eyebrow: "About the service",
        title: "Care that starts with listening.",
        lead: "We review your symptoms, family history, medications and lifestyle in detail, then combine that with any tests you need. The result is a diagnosis and plan built around your real life.",
        text: "Whether you are worried about a new symptom or managing a long-term condition, your cardiologist will explain every finding and involve you in each decision.",
        cards: [
          { icon: "i-steth", title: "Symptom review", text: "Understand chest pain, breathlessness, palpitations and fatigue." },
          { icon: "i-shield", title: "Risk assessment", text: "Family history, blood pressure, cholesterol and lifestyle factors." },
          { icon: "i-file", title: "Clear diagnosis", text: "A plain-language explanation of what is happening and why." },
          { icon: "i-heart", title: "Personal plan", text: "Medication, monitoring and lifestyle steps you can follow." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your consultation, step by step.",
        sub: "A structured visit that gives you time to ask questions and leave with a plan.",
        steps: [
          { icon: "i-clock", title: "Check in & history", text: "We review your symptoms, medications, previous reports and family history." },
          { icon: "i-steth", title: "Examination", text: "Your cardiologist checks your heart, blood pressure and circulation." },
          { icon: "i-activity", title: "Tests if needed", text: "An ECG or other test can be arranged on site the same day." },
          { icon: "i-file", title: "Plan explained", text: "You receive a clear diagnosis, next steps and a written care plan." }
        ],
        ctaTitle: "Come prepared, leave with clarity.",
        ctaText: "Bring a list of medications, any previous cardiac reports and the symptoms you most want to discuss.",
        ctaLabel: "Book a Consultation"
      },
      facility: {
        eyebrow: "Our clinic",
        title: "Designed for unhurried conversations.",
        lead: "Private consultation rooms and a care team that takes time to listen, explain and plan with you.",
        image: "assets/img/service-consultation.jpg",
        imageAlt: "Private cardiology consultation room",
        items: ["Private consultation rooms", "Same-day ECG access", "Secure patient portal", "Easy follow-up scheduling"],
        link: "Explore our clinic"
      },
      specialists: {
        title: "Cardiologists who know your history.",
        text: "Your consultation is led by a specialist who reviews the full picture.",
        doctors: [DOCTORS.priya, DOCTORS.amelia]
      },
      faqs: [
        { q: "Do I need a referral to book?", a: "No referral is needed for a clinical cardiology consultation. You can book directly and bring any previous reports with you." },
        { q: "How long will the first visit take?", a: "Allow 45 to 60 minutes. This includes your history, examination and a discussion of the plan." },
        { q: "Will I need tests on the same day?", a: "If a test is needed, we will arrange it on site where possible. Not every consultation requires testing." },
        { q: "Can I bring someone with me?", a: "Yes. You are welcome to bring a family member or friend to help you remember the discussion." }
      ]
    },

    "diagnostic-testing": {
      metaTitle: "Diagnostic Testing | Cardia Heart & Vascular Clinic",
      metaDescription: "ECG, echocardiography, stress testing and ambulatory rhythm monitoring on site.",
      heroEyebrow: "Diagnostic service",
      heroTitle: "Diagnostic Testing",
      heroText: "ECG, echocardiography, stress tests and ambulatory rhythm monitoring on site.",
      heroImage: "assets/img/service-ecg.jpg",
      detailEyebrow: "Diagnostic service",
      detailTitle: "The right test, with answers you can understand.",
      detailLead: "From a quick ECG to a 48-hour rhythm monitor, our diagnostic team captures the detail your cardiologist needs — and explains what it means in plain language.",
      detailImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Cardiac technician preparing diagnostic monitoring equipment",
      detailTag: "On-site diagnostics lab",
      booking: "Diagnostic Testing",
      detailBookLabel: "Book a Test",
      price: { label: "Diagnostic package", amount: "$290", unit: "/ test", meta: ["Test & specialist report", "Results consultation"] },
      trust: [
        { icon: "i-clock", label: "30-60 minutes" },
        { icon: "i-file", label: "Report in 24h" },
        { icon: "i-shield", label: "Non-invasive" }
      ],
      about: {
        eyebrow: "About the service",
        title: "Testing that answers the right question.",
        lead: "We choose the least invasive test that will give a clear answer, then combine the results with your history and examination. No unnecessary tests, no confusing reports.",
        text: "Your cardiologist will explain what each test shows, what it does not show, and how the result changes your care.",
        cards: [
          { icon: "i-activity", title: "ECG", text: "A quick recording of your heart's electrical rhythm." },
          { icon: "i-heart", title: "Echocardiography", text: "Ultrasound imaging of structure, valves and pumping function." },
          { icon: "i-pulse", title: "Stress testing", text: "See how your heart responds to controlled exercise." },
          { icon: "i-clock", title: "Rhythm monitoring", text: "A 24-48 hour recorder to catch intermittent symptoms." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your test, step by step.",
        sub: "Most tests are quick, painless and performed in a private room.",
        steps: [
          { icon: "i-clock", title: "Arrive & settle", text: "Check in and get comfortable in our diagnostics area." },
          { icon: "i-activity", title: "Test performed", text: "Your technician explains the test and attaches any sensors." },
          { icon: "i-file", title: "Readings reviewed", text: "Images and recordings are checked by a specialist." },
          { icon: "i-heart", title: "Results explained", text: "Your cardiologist talks you through the findings and next steps." }
        ],
        ctaTitle: "Most tests need little preparation.",
        ctaText: "Wear comfortable clothing and bring a list of medications. Some tests may need a light meal or caffeine avoidance.",
        ctaLabel: "Book a Test"
      },
      facility: {
        eyebrow: "Our diagnostics lab",
        title: "Precision testing in a calm setting.",
        lead: "Our diagnostics rooms are equipped for ECG, echocardiography, stress testing and ambulatory monitoring, with specialist reporting on site.",
        image: "assets/img/service-echo.jpg",
        imageAlt: "Diagnostic imaging equipment in a private room",
        items: ["Digital ECG and rhythm monitoring", "High-resolution echocardiography", "Supervised stress testing", "Reports delivered securely to your portal"],
        link: "Explore our facilities"
      },
      specialists: {
        title: "Read by leading cardiologists.",
        text: "Every test is reviewed by a specialist who knows your history.",
        doctors: [DOCTORS.priya, DOCTORS.daniel]
      },
      faqs: [
        { q: "How long will my test take?", a: "An ECG takes about 10 minutes. Echocardiograms take around 45 minutes and stress tests about an hour." },
        { q: "When will I get my results?", a: "ECG results are usually same day. Echocardiograms are reported within 24 hours and stress tests within one to two working days." },
        { q: "Do I need to fast?", a: "Most tests do not require fasting. If your test does, our team will tell you when you book." },
        { q: "Can I drive home afterwards?", a: "Yes for most tests. If you have a stress test or sedation, we will advise you before the appointment." }
      ]
    },

    "preventive-cardiology": {
      metaTitle: "Preventive Cardiology | Cardia Heart & Vascular Clinic",
      metaDescription: "Risk mapping, lipid management and lifestyle programmes to stop heart disease before it starts.",
      heroEyebrow: "Preventive care",
      heroTitle: "Preventive Cardiology",
      heroText: "Risk mapping, lipid management and lifestyle programmes to stop disease before it starts.",
      heroImage: "assets/img/service-screening.jpg",
      detailEyebrow: "Preventive care",
      detailTitle: "A clearer picture of your future heart health.",
      detailLead: "We combine your risk factors, blood results, blood pressure and family history into a practical prevention plan — so you know exactly what to change and why.",
      detailImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Doctor checking blood pressure during preventive heart screening",
      detailTag: "Preventive assessment suite",
      booking: "Preventive Cardiology",
      detailBookLabel: "Book an Assessment",
      price: { label: "Preventive package", amount: "$240", unit: "/ assessment", meta: ["Risk assessment & bloods", "Personalised prevention plan"] },
      trust: [
        { icon: "i-clock", label: "60 minutes" },
        { icon: "i-file", label: "Results in 3-5 days" },
        { icon: "i-shield", label: "No referral needed" }
      ],
      about: {
        eyebrow: "About the service",
        title: "Prevention built around your real risk.",
        lead: "There is no one-size-fits-all prevention plan. We look at your numbers, your family history and your daily life, then focus on the changes that will make the biggest difference.",
        text: "You will leave with clear targets, practical next steps and a follow-up plan to track your progress.",
        cards: [
          { icon: "i-brain", title: "Risk mapping", text: "A clear picture of your current and future heart risk." },
          { icon: "i-pill", title: "Lipid management", text: "Cholesterol and blood pressure optimisation." },
          { icon: "i-heart", title: "Lifestyle planning", text: "Practical nutrition, activity and sleep guidance." },
          { icon: "i-shield", title: "Early detection", text: "Catch subtle changes before symptoms appear." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your assessment, step by step.",
        sub: "A complete prevention review, usually completed in one visit.",
        steps: [
          { icon: "i-file", title: "Risk questionnaire", text: "We review your history, family history and lifestyle." },
          { icon: "i-activity", title: "Checks & bloods", text: "Blood pressure, cholesterol and other risk markers are measured." },
          { icon: "i-brain", title: "Risk review", text: "Your cardiologist explains your numbers and what they mean." },
          { icon: "i-heart", title: "Prevention plan", text: "You receive clear targets and a practical plan to reach them." }
        ],
        ctaTitle: "Come as you are.",
        ctaText: "Bring recent blood results if you have them and avoid heavy meals for two hours before your assessment.",
        ctaLabel: "Book an Assessment"
      },
      facility: {
        eyebrow: "Our prevention programme",
        title: "A complete picture, in one visit.",
        lead: "Risk assessments, bloods and lifestyle reviews are coordinated in one place, with a clear plan at the end.",
        image: "assets/img/service-screening.jpg",
        imageAlt: "Preventive heart screening appointment",
        items: ["Cardiovascular risk scoring", "Blood pressure and lipid review", "Lifestyle and nutrition guidance", "Structured follow-up and monitoring"],
        link: "Explore our programme"
      },
      specialists: {
        title: "Prevention led by cardiologists.",
        text: "Your risk plan is built and reviewed by a specialist.",
        doctors: [DOCTORS.amelia, DOCTORS.priya]
      },
      faqs: [
        { q: "Who should consider preventive screening?", a: "Anyone with a family history of heart disease, high blood pressure, high cholesterol, diabetes or lifestyle risk factors." },
        { q: "Do I need to fast for blood tests?", a: "Some cholesterol tests are best done fasting. Our team will confirm when you book." },
        { q: "How long until I get my results?", a: "Most blood and risk results are available within three to five working days." },
        { q: "Will I need medication?", a: "Not necessarily. Your plan may focus on lifestyle first, with medication only where it is clearly beneficial." }
      ]
    },

    "interventional-care": {
      metaTitle: "Interventional Care | Cardia Heart & Vascular Clinic",
      metaDescription: "Minimally invasive procedures delivered by experienced interventional specialists.",
      heroEyebrow: "Interventional care",
      heroTitle: "Interventional Care",
      heroText: "Minimally invasive procedures delivered by experienced interventional specialists.",
      heroImage: "assets/img/service-echo.jpg",
      detailEyebrow: "Interventional care",
      detailTitle: "Advanced procedures with a clear plan at every step.",
      detailLead: "From diagnostic angiography to stenting, our interventional team explains the purpose, risks and recovery of your procedure before you decide — and supports you afterwards.",
      detailImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Interventional cardiology procedure preparation",
      detailTag: "Specialist cath lab",
      booking: "Interventional Care",
      detailBookLabel: "Book a Procedure",
      price: { label: "Procedure package", amount: "$1,450", unit: "/ procedure", meta: ["Pre-procedure assessment", "Follow-up review"] },
      trust: [
        { icon: "i-clock", label: "60 minutes" },
        { icon: "i-file", label: "Report in 24h" },
        { icon: "i-shield", label: "Minimally invasive" }
      ],
      about: {
        eyebrow: "About the service",
        title: "Precision, planning and recovery support.",
        lead: "Our interventional cardiologists use minimally invasive techniques to diagnose and treat blocked or narrowed arteries. Every procedure is planned around your anatomy, symptoms and overall health.",
        text: "You will know what will happen, how long recovery is likely to take and who to contact if something changes.",
        cards: [
          { icon: "i-activity", title: "Angiography", text: "Detailed imaging of the heart's blood vessels." },
          { icon: "i-pulse", title: "Stenting", text: "Minimally invasive treatment to restore blood flow." },
          { icon: "i-file", title: "Procedure planning", text: "Clear preparation, consent and medication guidance." },
          { icon: "i-shield", title: "Recovery support", text: "Follow-up reviews and a structured recovery plan." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your procedure, step by step.",
        sub: "We prepare you fully and explain each stage before it happens.",
        steps: [
          { icon: "i-steth", title: "Pre-procedure review", text: "Your specialist reviews your history, tests and goals." },
          { icon: "i-file", title: "Preparation", text: "You receive fasting, medication and consent instructions." },
          { icon: "i-pulse", title: "Procedure", text: "The team performs the procedure in our specialist cath lab." },
          { icon: "i-shield", title: "Recovery plan", text: "You receive follow-up, medication and recovery guidance." }
        ],
        ctaTitle: "We prepare you fully.",
        ctaText: "You will receive clear fasting and medication instructions before your procedure, along with a direct contact for questions.",
        ctaLabel: "Book a Procedure"
      },
      facility: {
        eyebrow: "Our cath lab",
        title: "Advanced care in a calm environment.",
        lead: "Our specialist lab combines modern imaging with an experienced team focused on safety, comfort and clear communication.",
        image: "assets/img/service-echo.jpg",
        imageAlt: "Specialist cardiac procedure room",
        items: ["Modern angiography and stenting equipment", "Experienced interventional team", "Clear pre-procedure planning", "Structured recovery and follow-up"],
        link: "Explore our facilities"
      },
      specialists: {
        title: "Procedure care from experienced specialists.",
        text: "Every step is planned and performed by our interventional team.",
        doctors: [DOCTORS.marcus, DOCTORS.priya]
      },
      faqs: [
        { q: "Is the procedure painful?", a: "You will receive local anaesthetic and sedation where needed. Most patients feel pressure rather than pain." },
        { q: "How long will I stay in hospital?", a: "Many procedures are day cases. Your specialist will confirm whether an overnight stay is recommended." },
        { q: "When can I return to normal activity?", a: "Recovery varies by procedure. You will receive specific guidance before you leave." },
        { q: "Who do I contact after the procedure?", a: "You will be given a direct contact number for your care team and clear warning signs to watch for." }
      ]
    },

    "heart-failure-clinic": {
      metaTitle: "Heart Failure Clinic | Cardia Heart & Vascular Clinic",
      metaDescription: "Specialist management, medication optimisation and day-to-day support for heart failure.",
      heroEyebrow: "Specialist clinic",
      heroTitle: "Heart Failure Clinic",
      heroText: "Specialist management, medication optimisation and day-to-day support for longer, better lives.",
      heroImage: "assets/img/service-stress.jpg",
      detailEyebrow: "Specialist clinic",
      detailTitle: "Ongoing support for a stronger, steadier life.",
      detailLead: "Heart failure care is not a single appointment. Our clinic reviews your symptoms, medications and home readings over time, adjusting your plan as your needs change.",
      detailImage: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Cardiologist reviewing heart failure monitoring results",
      detailTag: "Specialist heart failure clinic",
      booking: "Heart Failure Clinic",
      detailBookLabel: "Book a Clinic Visit",
      price: { label: "Clinic package", amount: "$210", unit: "/ visit", meta: ["Specialist review & plan", "Medication optimisation"] },
      trust: [
        { icon: "i-clock", label: "45 minutes" },
        { icon: "i-file", label: "Plan same day" },
        { icon: "i-shield", label: "Ongoing support" }
      ],
      about: {
        eyebrow: "About the clinic",
        title: "Continuity that makes a difference.",
        lead: "We focus on the things that help you feel better day to day: the right medication, the right monitoring and a plan you can follow at home.",
        text: "Your clinic team reviews your weight, blood pressure, symptoms and blood results over time, so changes are caught early and treatment stays on track.",
        cards: [
          { icon: "i-heart", title: "Symptom control", text: "Breathlessness, fatigue and fluid management." },
          { icon: "i-pill", title: "Medication optimisation", text: "Evidence-based treatment tailored to you." },
          { icon: "i-activity", title: "Remote monitoring", text: "Home readings reviewed by your care team." },
          { icon: "i-steth", title: "Long-term support", text: "Regular reviews and practical day-to-day guidance." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your clinic visit, step by step.",
        sub: "A focused review that adjusts your plan and answers your questions.",
        steps: [
          { icon: "i-steth", title: "Symptom review", text: "We discuss breathlessness, fatigue, swelling and daily function." },
          { icon: "i-pill", title: "Medication check", text: "Your medicines are reviewed for safety and effectiveness." },
          { icon: "i-activity", title: "Monitoring plan", text: "We agree what to track at home and how often to review." },
          { icon: "i-heart", title: "Ongoing support", text: "You leave with a clear plan and a contact for changes." }
        ],
        ctaTitle: "Bring your current medicines.",
        ctaText: "Bring all medication boxes and any home blood pressure or weight readings you have been tracking.",
        ctaLabel: "Book a Clinic Visit"
      },
      facility: {
        eyebrow: "Our clinic",
        title: "Continuity you can rely on.",
        lead: "The same specialist team follows your progress, with remote monitoring and easy access when something changes.",
        image: "assets/img/service-consultation.jpg",
        imageAlt: "Heart failure clinic consultation",
        items: ["Specialist-led clinic reviews", "Medication optimisation", "Home monitoring support", "Direct access when symptoms change"],
        link: "Explore our clinic"
      },
      specialists: {
        title: "A team that stays with you.",
        text: "Your clinic reviews are led by cardiologists who know your history.",
        doctors: [DOCTORS.daniel, DOCTORS.amelia]
      },
      faqs: [
        { q: "How often will I be reviewed?", a: "Most patients are reviewed every three to six months, with earlier reviews after medication changes or symptoms." },
        { q: "What should I monitor at home?", a: "Your team may ask you to track weight, blood pressure and symptoms. We will explain exactly what to record." },
        { q: "Can my medication be adjusted remotely?", a: "Some changes can be made after a phone or video review. Others need an in-person check." },
        { q: "What if my symptoms get worse?", a: "Contact the clinic directly. We will advise whether you need an earlier review or urgent care." }
      ]
    },

    "virtual-follow-up": {
      metaTitle: "Virtual & Follow-up Care | Cardia Heart & Vascular Clinic",
      metaDescription: "Secure video consultations, result reviews and remote monitoring from home.",
      heroEyebrow: "Virtual care",
      heroTitle: "Virtual & Follow-up Care",
      heroText: "Secure video consultations, result reviews and remote monitoring from home.",
      heroImage: "assets/img/service-virtual.jpg",
      detailEyebrow: "Virtual care",
      detailTitle: "Specialist care, wherever you are.",
      detailLead: "Review results, adjust medication and plan your next steps by secure video — with the same cardiology team who manage your in-clinic care.",
      detailImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      detailImageAlt: "Cardiologist conducting a virtual follow-up consultation",
      detailTag: "Secure video consultation",
      booking: "Virtual & Follow-up Care",
      detailBookLabel: "Book a Video Visit",
      price: { label: "Virtual package", amount: "$120", unit: "/ visit", meta: ["Secure video consultation", "Written follow-up summary"] },
      trust: [
        { icon: "i-clock", label: "30 minutes" },
        { icon: "i-file", label: "Summary in 24h" },
        { icon: "i-shield", label: "Secure video" }
      ],
      about: {
        eyebrow: "About the service",
        title: "Follow-up care that fits your day.",
        lead: "Virtual visits are ideal for result reviews, medication checks and routine follow-ups. You get the same specialist attention without the travel.",
        text: "If your cardiologist needs an examination or test, they will arrange an in-person visit and explain why.",
        cards: [
          { icon: "i-video", title: "Secure video", text: "Consult from home on a private, encrypted platform." },
          { icon: "i-file", title: "Result review", text: "Go through reports and next steps with your cardiologist." },
          { icon: "i-pill", title: "Medication adjustments", text: "Safe changes with a written updated plan." },
          { icon: "i-activity", title: "Remote monitoring", text: "Home readings and symptoms tracked between visits." }
        ]
      },
      process: {
        eyebrow: "What to expect",
        title: "Your video visit, step by step.",
        sub: "A simple, secure appointment from wherever you are.",
        steps: [
          { icon: "i-video", title: "Join securely", text: "Open the link we send you and join from a quiet space." },
          { icon: "i-steth", title: "Review symptoms", text: "Your cardiologist checks how you have been since your last visit." },
          { icon: "i-file", title: "Results & medication", text: "Reports are reviewed and your treatment plan is adjusted." },
          { icon: "i-heart", title: "Written plan", text: "You receive a summary and clear next steps after the call." }
        ],
        ctaTitle: "Find a quiet space.",
        ctaText: "Have your medication list and recent reports nearby, and test your camera and microphone before the visit.",
        ctaLabel: "Book a Video Visit"
      },
      facility: {
        eyebrow: "Our virtual care",
        title: "Specialist care, wherever you are.",
        lead: "Our secure platform connects you with the same cardiologists who manage our clinic, with reports and plans shared safely.",
        image: "assets/img/service-virtual.jpg",
        imageAlt: "Virtual cardiology follow-up consultation",
        items: ["Encrypted video consultations", "Secure result sharing", "Written follow-up summaries", "Easy rebooking and reminders"],
        link: "Explore virtual care"
      },
      specialists: {
        title: "Specialist care, wherever you are.",
        text: "Your video visit is with the same cardiologists who manage our clinic.",
        doctors: [DOCTORS.amelia, DOCTORS.priya]
      },
      faqs: [
        { q: "What do I need for a video visit?", a: "A reliable internet connection, a camera and microphone, and a quiet private space." },
        { q: "Can I get a prescription after a video visit?", a: "Yes, where it is safe and appropriate. Some medications require an in-person review." },
        { q: "What if I need an examination?", a: "Your cardiologist will arrange an in-person visit and explain what needs to be checked." },
        { q: "Is the video call secure?", a: "Yes. We use an encrypted platform and do not record consultations without your consent." }
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const key = params.get("service") || "echocardiogram";
  const data = SERVICES[key] || SERVICES.echocardiogram;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const section = (name) => $(`[data-sd-section="${name}"]`);
  const setText = (el, text) => { if (el) el.textContent = text; };
  const icon = (name) => `<svg class="ico"><use href="#${name}"/></svg>`;
  const smallIcon = (name) => `<svg class="ico ico--sm"><use href="#${name}"/></svg>`;

  function ensureOption(select, value) {
    if (!select || !value) return;
    const exists = Array.from(select.options).some((option) => option.value === value || option.textContent === value);
    if (!exists) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    }
  }

  function renderAbout(about) {
    const root = section("about");
    if (!root) return;
    setText($(".eyebrow", root), about.eyebrow);
    setText($("h2", root), about.title);
    setText($(".lead", root), about.lead);
    setText($(".text-muted", root), about.text);
    const grid = $('[data-sd="about-cards"]', root);
    if (grid) {
      grid.innerHTML = about.cards.map((card) => (
        `<div class="diag-card"><div class="diag-card__icon">${icon(card.icon)}</div><div><h5>${card.title}</h5><p>${card.text}</p></div></div>`
      )).join("");
    }
  }

  function renderProcess(process, booking) {
    const root = section("process");
    if (!root) return;
    setText($(".eyebrow", root), process.eyebrow);
    setText($("h2", root), process.title);
    setText($(".sec-sub", root), process.sub);
    const flow = $('[data-sd="steps"]', root);
    if (flow) {
      flow.innerHTML = process.steps.map((step, index) => (
        `<div class="process-step"><span class="process-step__num">Step ${String(index + 1).padStart(2, "0")}</span><div class="process-step__icon">${icon(step.icon)}</div><h5>${step.title}</h5><p>${step.text}</p></div>`
      )).join("");
    }
    const cta = $(".cta-band", root);
    if (!cta) return;
    setText($("h2", cta), process.ctaTitle);
    setText($("p", cta), process.ctaText);
    const button = $("[data-book]", cta);
    if (button) {
      button.dataset.book = booking;
      setText($("[data-book-label]", button), process.ctaLabel);
    }
  }

  function renderFacility(facility) {
    const root = section("facility");
    if (!root) return;
    const image = $(".ratio img", root);
    if (image) {
      image.src = facility.image;
      image.alt = facility.imageAlt;
    }
    setText($(".eyebrow", root), facility.eyebrow);
    setText($("h2", root), facility.title);
    setText($(".lead", root), facility.lead);
    const list = $(".check-list", root);
    if (list) list.innerHTML = facility.items.map((item) => `<li>${item}</li>`).join("");
    const link = $(".link-more", root);
    if (link) link.innerHTML = `${facility.link} ${smallIcon("i-arrow")}`;
  }

  function renderSpecialists(specialists) {
    const root = section("specialists");
    if (!root) return;
    setText($(".eyebrow", root), "Your specialists");
    setText($("h2", root), specialists.title);
    setText($(".sec-sub", root), specialists.text);
    const grid = $('[data-sd="specialist-cards"]', root);
    if (!grid) return;
    grid.innerHTML = specialists.doctors.map((doctor, index) => (
      `<article class="doctor-card specialist-card" data-reveal${index ? ' data-reveal-delay="1"' : ""}><div class="doctor-card__body specialist-card__body"><div class="ratio specialist-card__photo"><img src="${doctor.image}" alt="${doctor.name}"></div><div class="specialist-card__content"><h3 class="doctor-card__name">${doctor.name}</h3><p class="doctor-card__spec">${doctor.spec}</p><p class="card__text">${doctor.text}</p><div class="doctor-card__actions"><a class="btn btn--primary btn--sm" href="doctor-details.html?doctor=${doctor.slug}">View Profile</a><button class="btn btn--outline btn--sm" data-book data-doctor="${doctor.name}">Book</button></div></div></div></article>`
    )).join("");
  }

  function renderFaqs(faqs) {
    const root = section("faq");
    if (!root) return;
    setText($(".eyebrow", root), "Common questions");
    setText($("h2", root), "Everything you might be wondering.");
    setText($(".lead", root), "Still unsure? Our care team is happy to talk it through before you book.");
    const accordion = $('[data-sd="faqs"]', root);
    if (accordion) {
      accordion.innerHTML = faqs.map((faq) => (
        `<div class="accordion-item"><button class="accordion-head">${faq.q}<span class="accordion-icon"></span></button><div class="accordion-body"><div class="accordion-body__inner">${faq.a}</div></div></div>`
      )).join("");
    }
  }

  function render() {
    document.body.dataset.service = key;
    document.title = data.metaTitle;
    const meta = $('meta[name="description"]');
    if (meta) meta.content = data.metaDescription;

    const hero = section("hero");
    if (hero) {
      const image = $(".page-hero__bg", hero);
      if (image) image.src = data.heroImage;
      setText($(".eyebrow", hero), data.heroEyebrow);
      setText($("h1", hero), data.heroTitle);
      setText($("p", hero), data.heroText);
    }

    const detail = section("detail");
    if (detail) {
      setText($(".eyebrow", detail), data.detailEyebrow);
      setText($("h2", detail), data.detailTitle);
      setText($(".lead", detail), data.detailLead);
      const image = $(".detail-hero__media img", detail);
      if (image) {
        image.src = data.detailImage;
        image.alt = data.detailImageAlt;
      }
      const tag = $(".detail-hero__tag", detail);
      if (tag) tag.innerHTML = `${smallIcon("i-star")} ${data.detailTag}`;
      const bookButton = $(".detail-hero [data-book]", detail);
      if (bookButton) {
        bookButton.dataset.book = data.booking;
        setText($("[data-book-label]", bookButton), data.detailBookLabel);
      }
      setText($(".detail-price__label", detail), data.price.label);
      const amount = $(".detail-price__amount", detail);
      if (amount) amount.innerHTML = `${data.price.amount} <span>${data.price.unit}</span>`;
      const metaList = $(".detail-price__meta", detail);
      if (metaList) metaList.innerHTML = data.price.meta.map((item) => `<span>${smallIcon("i-check")} ${item}</span>`).join("");
      const trust = $(".trust-strip", detail);
      if (trust) trust.innerHTML = data.trust.map((item) => `<span class="trust-strip__item">${icon(item.icon)} ${item.label}</span>`).join("");
    }

    renderAbout(data.about);
    renderProcess(data.process, data.booking);
    renderFacility(data.facility);
    renderSpecialists(data.specialists);
    renderFaqs(data.faqs);

    ensureOption($("#bookService"), data.booking);
    data.specialists.doctors.forEach((doctor) => ensureOption($("#bookDoctor"), doctor.name));
  }

  render();
})();
