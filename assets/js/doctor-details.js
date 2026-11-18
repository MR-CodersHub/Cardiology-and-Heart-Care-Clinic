(function () {
  "use strict";

  const DOCTORS = {
    "dr-amelia-hart": {
      slug: "dr-amelia-hart",
      name: "Dr. Amelia Hart",
      firstName: "Dr. Hart",
      pageEyebrow: "Preventive cardiology",
      role: "MD, FACC · Director of Preventive Cardiology",
      heroSub: "MD, FACC · Director of Preventive Cardiology dedicated to clear, proactive heart care.",
      specialty: "Preventive Cardiology",
      status: "Accepting new patients",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Hart believes the most powerful cardiology happens before a crisis. She has spent fourteen years helping people understand their risk, change the trajectory of their heart health and feel genuinely confident about the future.",
      bio2: "Her clinic focuses on thorough assessment, clear explanation and practical plans that fit real lives. She works closely with imaging and intervention colleagues so every patient receives connected, continuous care.",
      stats: { years: "14", patients: "2.4k", rating: "4.9" },
      expertise: ["Preventive cardiology", "Lipid management", "Hypertension", "Women's heart health", "Lifestyle medicine"],
      contact: {
        address: "Cardia Clinic, 1200 Park Avenue, New York",
        phone: "+1 (800) 555-0192",
        email: "a.hart@cardiaclinic.com",
        hours: "Mon, Tue, Thu · 9:00–17:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "Columbia University, 2010" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "New York Presbyterian, 2016" },
        { icon: "i-shield", title: "FACC", detail: "American College of Cardiology" },
        { icon: "i-users", title: "MPH, Public Health", detail: "Johns Hopkins University, 2018" },
        { icon: "i-pill", title: "Certified Lipidologist", detail: "NLA, 2019" },
        { icon: "i-pulse", title: "Preventive Cardiology Fellow", detail: "Cleveland Clinic, 2017" }
      ],
      highlights: [
        "Former chair of the regional preventive cardiology advisory board",
        "Published over 30 papers on cardiovascular risk reduction",
        "Regular speaker on women's heart health and lipid management",
        "Recipient of the 2024 Excellence in Patient Education award"
      ],
      languages: "English, Spanish and French. Interpretation services are available for other languages on request.",
      approach: "Dr. Hart begins with a full 40-minute conversation, reviews your history and results, then creates a written plan you can take home. Follow-up is always included.",
      availability: [
        { label: "Mon 9:00–17:00" },
        { label: "Tue 10:00–18:00" },
        { label: "Wed —", off: true },
        { label: "Thu 9:00–17:00" },
        { label: "Fri —", off: true },
        { label: "Sat —", off: true }
      ],
      testimonial: {
        text: "Dr. Hart is the reason I stopped dreading check-ups. She is thorough, kind and incredibly clear. I finally understand my numbers and what to do about them.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        name: "Eleanor W.",
        role: "Patient, 3 years"
      },
      ratings: [
        { label: "Listening", value: "4.9", width: 98 },
        { label: "Clarity", value: "4.8", width: 96 },
        { label: "Wait time", value: "4.6", width: 92 }
      ],
      beyondSub: "Dr. Hart's work extends well beyond her consultation room.",
      beyond: [
        { icon: "i-brain", title: "Published research", text: "Over 30 peer-reviewed papers on lipid management, risk assessment and women's cardiovascular health." },
        { icon: "i-users", title: "Medical education", text: "Teaching the next generation of cardiologists and hosting regional clinical workshops." },
        { icon: "i-heart", title: "Community advocacy", text: "Regular talks and screening events helping women understand their unique heart risks." }
      ],
      ctaTitle: "Book a consultation with Dr. Hart.",
      metaTitle: "Dr. Amelia Hart | Preventive Cardiologist | Cardia",
      metaDescription: "Meet Dr. Amelia Hart, MD, FACC — preventive cardiologist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-marcus-chen": {
      slug: "dr-marcus-chen",
      name: "Dr. Marcus Chen",
      firstName: "Dr. Chen",
      pageEyebrow: "Interventional cardiology",
      role: "MD, PhD · Director of Interventional Cardiology",
      heroSub: "MD, PhD · Interventional cardiology focused on minimally invasive, evidence-led procedures.",
      specialty: "Interventional Cardiology",
      status: "Accepting new patients",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Chen is an interventional cardiologist who believes every procedure should begin with a clear conversation. He has spent eighteen years helping patients understand why a treatment is needed, what it involves and what recovery will look like.",
      bio2: "His practice combines coronary intervention, structural heart work and careful follow-up. He works closely with imaging and preventive colleagues so that procedures are only one part of a longer, joined-up plan.",
      stats: { years: "18", patients: "3.1k", rating: "4.9" },
      expertise: ["Interventional cardiology", "Coronary angioplasty", "Stenting", "Structural heart procedures", "Complex PCI"],
      contact: {
        address: "Cardia Clinic, 1200 Park Avenue, New York",
        phone: "+1 (800) 555-0192",
        email: "m.chen@cardiaclinic.com",
        hours: "Mon, Tue, Wed · 8:00–16:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "Columbia University, 2006" },
        { icon: "i-brain", title: "PhD, Cardiovascular Science", detail: "NYU, 2011" },
        { icon: "i-heart", title: "Interventional Cardiology Fellowship", detail: "Mount Sinai, 2014" },
        { icon: "i-shield", title: "FACC", detail: "American College of Cardiology" },
        { icon: "i-users", title: "Structural Heart Fellowship", detail: "Cleveland Clinic, 2015" },
        { icon: "i-pulse", title: "Board Certified, Interventional Cardiology", detail: "ABIM, 2014" }
      ],
      highlights: [
        "Performs more than 300 coronary and structural procedures each year",
        "Leads the clinic's complex PCI and structural heart programme",
        "Published research on stent optimisation and procedural safety",
        "Regular faculty at regional interventional cardiology workshops"
      ],
      languages: "English, Mandarin and Cantonese. Interpretation services are available for other languages on request.",
      approach: "Dr. Chen begins with a detailed review of your symptoms, imaging and test results, then explains the benefits, risks and alternatives of any procedure. You receive a written plan and a clear follow-up schedule before you leave.",
      availability: [
        { label: "Mon 8:00–16:00" },
        { label: "Tue 8:00–16:00" },
        { label: "Wed 10:00–18:00" },
        { label: "Thu —", off: true },
        { label: "Fri 8:00–14:00" },
        { label: "Sat —", off: true }
      ],
      testimonial: {
        text: "Dr. Chen took the time to understand my concerns and explained the procedure in detail. I felt completely informed and completely safe.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        name: "Peter H.",
        role: "Interventional patient"
      },
      ratings: [
        { label: "Listening", value: "4.9", width: 98 },
        { label: "Clarity", value: "4.9", width: 97 },
        { label: "Wait time", value: "4.7", width: 93 }
      ],
      beyondSub: "Dr. Chen's work extends well beyond the cath lab.",
      beyond: [
        { icon: "i-brain", title: "Procedure innovation", text: "Research into safer, more precise coronary and structural interventions." },
        { icon: "i-users", title: "Training & proctoring", text: "Teaching interventional techniques to the next generation of cardiologists." },
        { icon: "i-heart", title: "Community screening", text: "Local heart-health events focused on early detection of coronary disease." }
      ],
      ctaTitle: "Book a consultation with Dr. Chen.",
      metaTitle: "Dr. Marcus Chen | Interventional Cardiologist | Cardia",
      metaDescription: "Meet Dr. Marcus Chen, MD, PhD — interventional cardiologist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-priya-raman": {
      slug: "dr-priya-raman",
      name: "Dr. Priya Raman",
      firstName: "Dr. Raman",
      pageEyebrow: "Cardiac imaging",
      role: "MD, FASE · Director of Cardiac Imaging",
      heroSub: "MD, FASE · Cardiac imaging specialist focused on precise, calm and clearly explained scans.",
      specialty: "Cardiac Imaging",
      status: "Next available Monday",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Raman is a cardiac imaging specialist who believes a good scan should answer a question, not create more confusion. She has spent eleven years interpreting echocardiograms, cardiac CT and structural imaging for patients across New York.",
      bio2: "Her reporting style is clear and practical: what the image shows, what it means and what should happen next. She works closely with referring cardiologists and keeps patients informed at every stage.",
      stats: { years: "11", patients: "1.8k", rating: "4.8" },
      expertise: ["Echocardiography", "Cardiac CT", "Structural heart imaging", "Valve assessment", "Stress imaging"],
      contact: {
        address: "Cardia Imaging, 88 Atlantic Avenue, Brooklyn",
        phone: "+1 (800) 555-0192",
        email: "p.raman@cardiaclinic.com",
        hours: "Tue–Fri · 9:00–17:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "University of Michigan, 2012" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "Duke University, 2017" },
        { icon: "i-activity", title: "Advanced Echocardiography Fellowship", detail: "Mayo Clinic, 2018" },
        { icon: "i-shield", title: "FASE", detail: "American Society of Echocardiography" },
        { icon: "i-users", title: "Board Certified, Cardiovascular Disease", detail: "ABIM, 2017" },
        { icon: "i-brain", title: "Cardiac CT Certification", detail: "SCCT, 2020" }
      ],
      highlights: [
        "Reads more than 1,500 echocardiograms and cardiac CT scans each year",
        "Leads the clinic's structural heart imaging review meetings",
        "Published research on strain imaging and valve assessment",
        "Recipient of the 2023 Imaging Excellence in Patient Care award"
      ],
      languages: "English, Tamil and Hindi. Interpretation services are available for other languages on request.",
      approach: "Dr. Raman explains what the scan will involve before it begins, then reviews the findings with you in plain language. You leave with a written summary and a clear recommendation for the next step.",
      availability: [
        { label: "Mon —", off: true },
        { label: "Tue 9:00–17:00" },
        { label: "Wed 9:00–17:00" },
        { label: "Thu 9:00–17:00" },
        { label: "Fri 9:00–15:00" },
        { label: "Sat 9:00–13:00" }
      ],
      testimonial: {
        text: "The echocardiogram was calm, quick and clearly explained. Dr. Raman showed me what she was looking at and what it meant. I left feeling informed rather than worried.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        name: "James R.",
        role: "Cardiac imaging patient"
      },
      ratings: [
        { label: "Listening", value: "4.8", width: 96 },
        { label: "Clarity", value: "4.9", width: 98 },
        { label: "Wait time", value: "4.7", width: 93 }
      ],
      beyondSub: "Dr. Raman's work extends well beyond the imaging suite.",
      beyond: [
        { icon: "i-brain", title: "Imaging research", text: "Research into strain imaging, valve assessment and earlier detection." },
        { icon: "i-users", title: "Teaching & mentorship", text: "Training sonographers and cardiology fellows in advanced imaging." },
        { icon: "i-heart", title: "Women's heart imaging", text: "Focused imaging clinics for women with atypical symptoms." }
      ],
      ctaTitle: "Book a consultation with Dr. Raman.",
      metaTitle: "Dr. Priya Raman | Cardiac Imaging Specialist | Cardia",
      metaDescription: "Meet Dr. Priya Raman, MD, FASE — cardiac imaging specialist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-daniel-ortiz": {
      slug: "dr-daniel-ortiz",
      name: "Dr. Daniel Ortiz",
      firstName: "Dr. Ortiz",
      pageEyebrow: "Heart rhythm",
      role: "DO, FHRS · Cardiac Electrophysiologist",
      heroSub: "DO, FHRS · Heart rhythm specialist focused on clear answers and steady long-term care.",
      specialty: "Heart Rhythm",
      status: "Accepting new patients",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Ortiz is a cardiac electrophysiologist who helps patients make sense of palpitations, atrial fibrillation and other rhythm problems. He has spent nine years combining careful monitoring with treatments that fit the pace of real life.",
      bio2: "His approach is calm and methodical: confirm the rhythm, explain the options and choose a plan together. He works closely with device teams and primary care to keep care joined up between visits.",
      stats: { years: "9", patients: "1.2k", rating: "4.8" },
      expertise: ["Heart rhythm disorders", "Atrial fibrillation", "Palpitations", "Holter & rhythm monitoring", "Cardiac devices"],
      contact: {
        address: "Cardia Rhythm Lab, 245 Madison Avenue, Manhattan",
        phone: "+1 (800) 555-0192",
        email: "d.ortiz@cardiaclinic.com",
        hours: "Mon, Wed, Thu · 10:00–18:00"
      },
      qualifications: [
        { icon: "i-steth", title: "DO, Osteopathic Medicine", detail: "Philadelphia College, 2014" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "Temple University, 2019" },
        { icon: "i-pulse", title: "Clinical Cardiac Electrophysiology Fellowship", detail: "Mount Sinai, 2021" },
        { icon: "i-shield", title: "FHRS", detail: "Heart Rhythm Society" },
        { icon: "i-users", title: "Board Certified, Electrophysiology", detail: "ABIM, 2021" },
        { icon: "i-activity", title: "Rhythm Monitoring Certification", detail: "HRS, 2022" }
      ],
      highlights: [
        "Leads the clinic's atrial fibrillation and rhythm monitoring service",
        "Implants and manages pacemakers, ICDs and loop recorders",
        "Published research on remote rhythm monitoring and AF detection",
        "Regular speaker on palpitations and unexplained fainting"
      ],
      languages: "English and Spanish. Interpretation services are available for other languages on request.",
      approach: "Dr. Ortiz starts by listening to your symptoms and reviewing any existing rhythm data. He explains what the recordings show, what can be done and how often you should be reviewed.",
      availability: [
        { label: "Mon 10:00–18:00" },
        { label: "Tue —", off: true },
        { label: "Wed 10:00–18:00" },
        { label: "Thu 10:00–18:00" },
        { label: "Fri 10:00–16:00" },
        { label: "Sat —", off: true }
      ],
      testimonial: {
        text: "Dr. Ortiz finally explained why my heart was racing and what we could do about it. The monitor was easy to use and the follow-up was excellent.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        name: "Anita S.",
        role: "Heart rhythm patient"
      },
      ratings: [
        { label: "Listening", value: "4.8", width: 96 },
        { label: "Clarity", value: "4.8", width: 96 },
        { label: "Wait time", value: "4.7", width: 93 }
      ],
      beyondSub: "Dr. Ortiz's work extends well beyond the rhythm clinic.",
      beyond: [
        { icon: "i-brain", title: "Rhythm research", text: "Research into atrial fibrillation detection and remote monitoring." },
        { icon: "i-users", title: "Device education", text: "Helping patients understand pacemakers, monitors and ICDs." },
        { icon: "i-heart", title: "Community AF screening", text: "Local screening events for irregular heart rhythms." }
      ],
      ctaTitle: "Book a consultation with Dr. Ortiz.",
      metaTitle: "Dr. Daniel Ortiz | Heart Rhythm Specialist | Cardia",
      metaDescription: "Meet Dr. Daniel Ortiz, DO, FHRS — heart rhythm specialist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-jonathan-reyes": {
      slug: "dr-jonathan-reyes",
      name: "Dr. Jonathan Reyes",
      firstName: "Dr. Reyes",
      pageEyebrow: "Heart failure",
      role: "MD, FACC · Director of Heart Failure Services",
      heroSub: "MD, FACC · Heart failure specialist focused on stability, independence and long-term support.",
      specialty: "Heart Failure",
      status: "Next available Tuesday",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Reyes has spent more than two decades caring for people living with heart failure. He focuses on stabilising symptoms, simplifying medication and helping patients stay independent for as long as possible.",
      bio2: "His clinic reviews symptoms, home readings and medicines over time, adjusting the plan as needs change. He works closely with specialist nurses, imaging and rehabilitation teams to provide continuous care.",
      stats: { years: "22", patients: "4.6k", rating: "4.9" },
      expertise: ["Heart failure", "Medication optimisation", "Fluid management", "Remote monitoring", "Cardiac rehabilitation"],
      contact: {
        address: "Cardia Heart Failure Clinic, 1200 Park Avenue, New York",
        phone: "+1 (800) 555-0192",
        email: "j.reyes@cardiaclinic.com",
        hours: "Mon–Wed · 9:00–17:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "Yale University, 2001" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "Massachusetts General, 2007" },
        { icon: "i-users", title: "Advanced Heart Failure Fellowship", detail: "Cleveland Clinic, 2009" },
        { icon: "i-shield", title: "FACC", detail: "American College of Cardiology" },
        { icon: "i-activity", title: "Board Certified, Advanced Heart Failure", detail: "ABIM, 2010" },
        { icon: "i-pulse", title: "Cardiac Transplant Fellowship", detail: "Stanford, 2011" }
      ],
      highlights: [
        "Leads the clinic's advanced heart failure and remote monitoring programme",
        "More than 20 years of experience in heart failure and transplant care",
        "Published research on medication optimisation and readmission prevention",
        "Recipient of the 2024 Heart Failure Care Excellence award"
      ],
      languages: "English and Spanish. Interpretation services are available for other languages on request.",
      approach: "Dr. Reyes reviews your symptoms, home readings and current medicines in detail. He explains what is changing, why it matters and what to do if symptoms worsen, with a written plan you can share with your family.",
      availability: [
        { label: "Mon 9:00–17:00" },
        { label: "Tue 9:00–17:00" },
        { label: "Wed 9:00–17:00" },
        { label: "Thu —", off: true },
        { label: "Fri 9:00–15:00" },
        { label: "Sat —", off: true }
      ],
      testimonial: {
        text: "Dr. Reyes made a frightening diagnosis feel manageable. He adjusted my medicines carefully and explained exactly what to watch for. I feel more stable than I have in years.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        name: "Robert T.",
        role: "Heart failure patient"
      },
      ratings: [
        { label: "Listening", value: "4.9", width: 98 },
        { label: "Clarity", value: "4.9", width: 98 },
        { label: "Wait time", value: "4.8", width: 96 }
      ],
      beyondSub: "Dr. Reyes's work extends well beyond the heart failure clinic.",
      beyond: [
        { icon: "i-brain", title: "Heart failure research", text: "Research into readmission prevention and remote monitoring." },
        { icon: "i-users", title: "Patient education", text: "Practical education for patients and families living with heart failure." },
        { icon: "i-heart", title: "Community support", text: "Local support and exercise programmes for people with heart failure." }
      ],
      ctaTitle: "Book a consultation with Dr. Reyes.",
      metaTitle: "Dr. Jonathan Reyes | Heart Failure Specialist | Cardia",
      metaDescription: "Meet Dr. Jonathan Reyes, MD, FACC — heart failure specialist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-sofia-bennett": {
      slug: "dr-sofia-bennett",
      name: "Dr. Sofia Bennett",
      firstName: "Dr. Bennett",
      pageEyebrow: "Preventive cardiology",
      role: "MD, MPH · Preventive Cardiologist",
      heroSub: "MD, MPH · Preventive cardiologist focused on practical, personalised risk reduction.",
      specialty: "Preventive Cardiology",
      status: "Accepting new patients",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Bennett is a preventive cardiologist who helps people turn risk numbers into realistic changes. She has spent twelve years working with patients on blood pressure, cholesterol, lifestyle and family history.",
      bio2: "Her consultations are practical and collaborative. She explains what matters most, what can wait and how to build a plan that fits your routine, culture and family life.",
      stats: { years: "12", patients: "2.0k", rating: "4.9" },
      expertise: ["Preventive cardiology", "Hypertension", "Cholesterol management", "Lifestyle medicine", "Women's heart health"],
      contact: {
        address: "Cardia Preventive Clinic, 64 Queens Boulevard, Queens",
        phone: "+1 (800) 555-0192",
        email: "s.bennett@cardiaclinic.com",
        hours: "Mon, Tue, Thu, Fri · 9:00–17:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "Brown University, 2011" },
        { icon: "i-users", title: "MPH, Public Health", detail: "Harvard University, 2013" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "Boston University, 2018" },
        { icon: "i-shield", title: "Preventive Cardiology Fellowship", detail: "Northwestern, 2019" },
        { icon: "i-activity", title: "Board Certified, Cardiovascular Disease", detail: "ABIM, 2018" },
        { icon: "i-pill", title: "Certified Hypertension Specialist", detail: "AHA, 2021" }
      ],
      highlights: [
        "Leads the clinic's hypertension and lifestyle medicine programme",
        "Designs practical prevention plans for busy families",
        "Published research on blood pressure control and health equity",
        "Regular community speaker on prevention and women's heart health"
      ],
      languages: "English, Portuguese and Spanish. Interpretation services are available for other languages on request.",
      approach: "Dr. Bennett starts with your priorities, not just your numbers. She reviews your history, results and daily routine, then agrees a small number of changes that are realistic and easy to track.",
      availability: [
        { label: "Mon 9:00–17:00" },
        { label: "Tue 9:00–17:00" },
        { label: "Wed —", off: true },
        { label: "Thu 10:00–18:00" },
        { label: "Fri 10:00–18:00" },
        { label: "Sat 9:00–13:00" }
      ],
      testimonial: {
        text: "Dr. Bennett listened to everything and built a plan that fitted my life. Six months later my numbers have never been better.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        name: "Anita S.",
        role: "Preventive care patient"
      },
      ratings: [
        { label: "Listening", value: "4.9", width: 98 },
        { label: "Clarity", value: "4.9", width: 97 },
        { label: "Wait time", value: "4.8", width: 96 }
      ],
      beyondSub: "Dr. Bennett's work extends well beyond the consultation room.",
      beyond: [
        { icon: "i-brain", title: "Prevention research", text: "Research into hypertension control and practical risk reduction." },
        { icon: "i-users", title: "Lifestyle education", text: "Community workshops on food, movement and heart-healthy routines." },
        { icon: "i-heart", title: "Community wellness", text: "Neighbourhood screening and prevention events across Queens." }
      ],
      ctaTitle: "Book a consultation with Dr. Bennett.",
      metaTitle: "Dr. Sofia Bennett | Preventive Cardiologist | Cardia",
      metaDescription: "Meet Dr. Sofia Bennett, MD, MPH — preventive cardiologist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-nathan-cole": {
      slug: "dr-nathan-cole",
      name: "Dr. Nathan Cole",
      firstName: "Dr. Cole",
      pageEyebrow: "Interventional cardiology",
      role: "MD · Interventional Cardiologist",
      heroSub: "MD · Interventional cardiologist focused on precise procedures and straightforward recovery.",
      specialty: "Interventional Cardiology",
      status: "Next available Wednesday",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Cole is an interventional cardiologist with sixteen years of experience in coronary and peripheral procedures. He is known for careful planning, clear explanations and a calm approach in the cath lab.",
      bio2: "He reviews every case with imaging and clinical colleagues before treatment, and gives patients a written recovery plan afterwards. Follow-up is built into the process from the start.",
      stats: { years: "16", patients: "2.8k", rating: "4.7" },
      expertise: ["Interventional cardiology", "Coronary angiography", "Stenting", "Peripheral vascular intervention", "Complex PCI"],
      contact: {
        address: "Cardia Interventional Suite, 245 Madison Avenue, Manhattan",
        phone: "+1 (800) 555-0192",
        email: "n.cole@cardiaclinic.com",
        hours: "Mon, Wed, Thu, Fri · 8:00–16:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "University of Chicago, 2007" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "Northwestern University, 2013" },
        { icon: "i-pulse", title: "Interventional Cardiology Fellowship", detail: "Emory University, 2015" },
        { icon: "i-shield", title: "FACC", detail: "American College of Cardiology" },
        { icon: "i-activity", title: "Structural Heart Certification", detail: "SCAI, 2017" },
        { icon: "i-users", title: "Peripheral Vascular Intervention", detail: "SCAI, 2018" }
      ],
      highlights: [
        "Performs coronary, peripheral and complex interventional procedures",
        "Leads the clinic's same-day discharge pathway for suitable patients",
        "Published research on vascular access and procedural safety",
        "Regular faculty at regional interventional cardiology courses"
      ],
      languages: "English. Interpretation services are available for other languages on request.",
      approach: "Dr. Cole explains the purpose of the procedure, the alternatives and what recovery will involve before you decide. After treatment, you receive a written plan covering medicines, activity and follow-up.",
      availability: [
        { label: "Mon 8:00–16:00" },
        { label: "Tue —", off: true },
        { label: "Wed 8:00–16:00" },
        { label: "Thu 8:00–16:00" },
        { label: "Fri 8:00–14:00" },
        { label: "Sat —", off: true }
      ],
      testimonial: {
        text: "Dr. Cole was calm, precise and honest about what to expect. The procedure was explained clearly and my recovery plan was easy to follow.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        name: "Peter H.",
        role: "Interventional patient"
      },
      ratings: [
        { label: "Listening", value: "4.7", width: 94 },
        { label: "Clarity", value: "4.8", width: 96 },
        { label: "Wait time", value: "4.6", width: 92 }
      ],
      beyondSub: "Dr. Cole's work extends well beyond the cath lab.",
      beyond: [
        { icon: "i-brain", title: "Structural heart research", text: "Research into safer access and better outcomes in complex procedures." },
        { icon: "i-users", title: "Procedure training", text: "Teaching coronary and peripheral techniques to fellows." },
        { icon: "i-heart", title: "Community outreach", text: "Heart-health talks and screening events across Manhattan." }
      ],
      ctaTitle: "Book a consultation with Dr. Cole.",
      metaTitle: "Dr. Nathan Cole | Interventional Cardiologist | Cardia",
      metaDescription: "Meet Dr. Nathan Cole, MD — interventional cardiologist at Cardia. View qualifications, expertise, availability and patient reviews."
    },

    "dr-olivia-grant": {
      slug: "dr-olivia-grant",
      name: "Dr. Olivia Grant",
      firstName: "Dr. Grant",
      pageEyebrow: "Cardiac imaging",
      role: "MD · Cardiac Imaging Specialist",
      heroSub: "MD · Cardiac imaging specialist focused on detailed scans and reassuring explanations.",
      specialty: "Cardiac Imaging",
      status: "Accepting new patients",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=88",
      bio1: "Dr. Grant is a cardiac imaging specialist with a particular interest in echocardiography and cardiac MRI. She has spent ten years helping patients understand what their scans show and what happens next.",
      bio2: "Her reports are detailed but readable, and she takes time to answer questions. She works closely with cardiologists, surgeons and referring doctors to make sure imaging is used well.",
      stats: { years: "10", patients: "1.5k", rating: "4.8" },
      expertise: ["Echocardiography", "Cardiac MRI", "Stress imaging", "Valve assessment", "Structural imaging"],
      contact: {
        address: "Cardia Imaging, 88 Atlantic Avenue, Brooklyn",
        phone: "+1 (800) 555-0192",
        email: "o.grant@cardiaclinic.com",
        hours: "Mon–Wed, Fri · 9:00–17:00"
      },
      qualifications: [
        { icon: "i-steth", title: "MD, Medicine", detail: "NYU Grossman, 2013" },
        { icon: "i-heart", title: "Cardiology Fellowship", detail: "Columbia University, 2018" },
        { icon: "i-activity", title: "Advanced Cardiac Imaging Fellowship", detail: "Johns Hopkins, 2020" },
        { icon: "i-shield", title: "FASE", detail: "American Society of Echocardiography" },
        { icon: "i-brain", title: "Cardiac MRI Certification", detail: "SCMR, 2021" },
        { icon: "i-users", title: "Board Certified, Cardiovascular Disease", detail: "ABIM, 2018" }
      ],
      highlights: [
        "Reads echocardiography, cardiac MRI and stress imaging studies",
        "Leads the clinic's cardiac MRI quality and safety programme",
        "Published research on myocardial strain and valve disease",
        "Recipient of the 2025 Imaging Communication award"
      ],
      languages: "English and French. Interpretation services are available for other languages on request.",
      approach: "Dr. Grant explains what the scan involves, what she is looking for and what the images show. You leave with a clear summary and a recommendation that your referring doctor can act on.",
      availability: [
        { label: "Mon 9:00–17:00" },
        { label: "Tue 9:00–17:00" },
        { label: "Wed 9:00–17:00" },
        { label: "Thu —", off: true },
        { label: "Fri 9:00–15:00" },
        { label: "Sat 9:00–13:00" }
      ],
      testimonial: {
        text: "Dr. Grant explained my scan in a way that actually made sense. She was patient with my questions and the report reached my doctor the same day.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        name: "Sofia M.",
        role: "Cardiac imaging patient"
      },
      ratings: [
        { label: "Listening", value: "4.8", width: 96 },
        { label: "Clarity", value: "4.9", width: 98 },
        { label: "Wait time", value: "4.7", width: 93 }
      ],
      beyondSub: "Dr. Grant's work extends well beyond the imaging suite.",
      beyond: [
        { icon: "i-brain", title: "Imaging research", text: "Research into cardiac MRI, strain imaging and valve disease." },
        { icon: "i-users", title: "MRI education", text: "Training clinicians in safe, effective cardiac MRI use." },
        { icon: "i-heart", title: "Community screening", text: "Imaging-focused screening events for people at higher risk." }
      ],
      ctaTitle: "Book a consultation with Dr. Grant.",
      metaTitle: "Dr. Olivia Grant | Cardiac Imaging Specialist | Cardia",
      metaDescription: "Meet Dr. Olivia Grant, MD — cardiac imaging specialist at Cardia. View qualifications, expertise, availability and patient reviews."
    }
  };

  const ORDER = [
    "dr-amelia-hart",
    "dr-marcus-chen",
    "dr-priya-raman",
    "dr-daniel-ortiz",
    "dr-jonathan-reyes",
    "dr-sofia-bennett",
    "dr-nathan-cole",
    "dr-olivia-grant"
  ];
  const DEFAULT_KEY = "dr-amelia-hart";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const dd = (name, ctx = document) => $(`[data-dd="${name}"]`, ctx);
  const setText = (el, text) => { if (el) el.textContent = text; };
  const icon = (name) => `<svg class="ico"><use href="#${name}"/></svg>`;
  const smallIcon = (name) => `<svg class="ico ico--sm"><use href="#${name}"/></svg>`;

  const params = new URLSearchParams(window.location.search);
  const key = params.get("doctor");
  const data = DOCTORS[key] || DOCTORS[DEFAULT_KEY];

  function relatedDoctors() {
    const start = ORDER.indexOf(data.slug);
    return [1, 2, 3].map((offset) => DOCTORS[ORDER[(start + offset) % ORDER.length]]);
  }

  function renderHeader() {
    document.body.dataset.doctor = data.slug;
    document.title = data.metaTitle;
    const meta = $('meta[name="description"]');
    if (meta) meta.content = data.metaDescription;

    setText(dd("heroEyebrow"), data.pageEyebrow);
    setText(dd("heroName"), data.name);
    setText(dd("heroSub"), data.heroSub);
  }

  function renderProfile() {
    const photo = dd("photo");
    if (photo) {
      photo.src = data.image;
      photo.alt = data.name + ", cardiologist";
    }
    setText(dd("address"), data.contact.address);
    setText(dd("phone"), data.contact.phone);
    setText(dd("email"), data.contact.email);
    setText(dd("hours"), data.contact.hours);
    setText(dd("status"), data.status);
    setText(dd("name"), data.name);
    setText(dd("role"), data.role);
    setText(dd("bio1"), data.bio1);
    setText(dd("bio2"), data.bio2);
    setText(dd("statYears"), data.stats.years);
    setText(dd("statPatients"), data.stats.patients);
    setText(dd("statRating"), data.stats.rating);

    const expertise = dd("expertise");
    if (expertise) {
      expertise.innerHTML = data.expertise.map((item) => `<span class="badge badge--mist">${item}</span>`).join("");
    }
  }

  function renderBackground() {
    const qualifications = dd("qualifications");
    if (qualifications) {
      qualifications.innerHTML = data.qualifications.map((item, index) => (
        `<div class="doctor-qual__item"><span class="doctor-qual__icon${index % 2 ? " doctor-qual__icon--teal" : ""}">${icon(item.icon)}</span><div class="doctor-qual__body"><strong>${item.title}</strong><span>${item.detail}</span></div></div>`
      )).join("");
    }
    const highlights = dd("highlights");
    if (highlights) {
      highlights.innerHTML = data.highlights.map((item) => `<li>${item}</li>`).join("");
    }
    setText(dd("languages"), data.languages);
    setText(dd("approach"), data.approach);
  }

  function renderVisit() {
    const availability = dd("availability");
    if (availability) {
      availability.innerHTML = data.availability.map((item) => (
        `<span${item.off ? ' class="off"' : ""}>${item.label}</span>`
      )).join("");
    }

    setText(dd("testimonialText"), data.testimonial.text);
    const avatar = dd("testimonialAvatar");
    if (avatar) {
      avatar.src = data.testimonial.avatar;
      avatar.alt = data.testimonial.name;
    }
    setText(dd("testimonialName"), data.testimonial.name);
    setText(dd("testimonialRole"), data.testimonial.role);

    const ratings = dd("ratings");
    if (ratings) {
      ratings.innerHTML = data.ratings.map((item) => (
        `<div class="rating-row"><span class="rating-row__label">${item.label}</span><div class="rating-row__track"><div class="rating-row__fill" style="width:${item.width}%"></div></div><span class="rating-row__value">${item.value}</span></div>`
      )).join("");
    }
  }

  function renderBeyond() {
    setText(dd("beyondSub"), data.beyondSub);
    const grid = dd("beyond");
    if (grid) {
      grid.innerHTML = data.beyond.map((item, index) => (
        `<div class="card card__body" data-reveal${index ? ` data-reveal-delay="${index}"` : ""}><div class="card__icon${index === 1 ? " card__icon--teal" : ""}">${icon(item.icon)}</div><h3 class="card__title">${item.title}</h3><p class="card__text">${item.text}</p></div>`
      )).join("");
    }
  }

  function renderTeam() {
    const grid = dd("team");
    if (!grid) return;
    grid.innerHTML = relatedDoctors().map((doctor, index) => (
      `<article class="doctor-card" data-reveal${index ? ` data-reveal-delay="${index}"` : ""}><div class="doctor-card__media"><div class="ratio"><img src="${doctor.image}" alt="${doctor.name}"></div></div><div class="doctor-card__body"><h3 class="doctor-card__name">${doctor.name}</h3><p class="doctor-card__spec">${doctor.specialty}</p><div class="doctor-card__actions"><a class="btn btn--primary btn--sm" href="doctor-details.html?doctor=${doctor.slug}">View Profile</a><button class="btn btn--outline btn--sm" data-book data-doctor="${doctor.name}">Book</button></div></div></article>`
    )).join("");
  }

  function renderBooking() {
    $$("[data-book]").forEach((button) => {
      if (!button.closest('[data-dd="team"]')) button.dataset.doctor = data.name;
    });

    const select = $("#bookDoctor");
    if (!select) return;
    select.innerHTML = '<option>No preference</option>' + ORDER.map((slug) => {
      const doctor = DOCTORS[slug];
      return `<option value="${doctor.name}">${doctor.name}</option>`;
    }).join("");
    select.value = data.name;
  }

  function renderCta() {
    setText(dd("ctaTitle"), data.ctaTitle);
  }

  renderHeader();
  renderProfile();
  renderBackground();
  renderVisit();
  renderBeyond();
  renderCta();
  renderTeam();
  renderBooking();
})();
