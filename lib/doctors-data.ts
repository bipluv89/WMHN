export interface Doctor {
  slug: string;
  name: string;
  title: string;
  postNominals: string;
  role: string;
  interests: string[];
  snippet: string;
  bio: string[];
  qualifications: string[];
}

export const doctors: Doctor[] = [
  {
    slug: 'sarah-mitchell',
    name: 'Dr Sarah Mitchell',
    title: 'Consultant Haematologist',
    postNominals: 'MBBS, FRACP, FRCPA',
    role: 'Director, Consultant Haematologist',
    interests: ['Lymphoma', 'Chronic Lymphocytic Leukaemia (CLL)', 'Clinical Trials'],
    snippet: 'Specialist in lymphoid malignancies with over 15 years of experience in haematology and medical oncology.',
    bio: [
      'Dr Sarah Mitchell is a consultant haematologist with extensive experience in the diagnosis and treatment of lymphoid malignancies. She completed her medical degree at the University of Melbourne before undertaking specialist training in haematology at major Melbourne hospitals.',
      'Sarah has a particular interest in lymphoma and chronic lymphocytic leukaemia, and has been involved in numerous clinical trials investigating new treatment approaches for these conditions. She is committed to ensuring her patients have access to the latest evidence-based treatments.',
      'Sarah works closely with multidisciplinary teams to provide comprehensive care for her patients. She values clear communication and takes time to ensure patients and their families understand their diagnosis and treatment options.'
    ],
    qualifications: [
      'MBBS - University of Melbourne',
      'FRACP - Fellow of the Royal Australasian College of Physicians',
      'FRCPA - Fellow of the Royal College of Pathologists of Australasia',
      'Advanced training in Haematology at major Melbourne hospitals'
    ]
  },
  {
    slug: 'james-chen',
    name: 'Dr James Chen',
    title: 'Consultant Haematologist',
    postNominals: 'MBBS, PhD, FRACP, FRCPA',
    role: 'Consultant Haematologist',
    interests: ['Myeloma', 'Bone Marrow Transplantation', 'Stem Cell Disorders'],
    snippet: 'Expert in plasma cell disorders and bone marrow transplantation with extensive research background.',
    bio: [
      'Dr James Chen is a consultant haematologist specializing in plasma cell disorders, particularly multiple myeloma. He completed his PhD in haematology research before undertaking clinical training in haematology at leading Melbourne teaching hospitals.',
      'James has extensive experience in the management of myeloma and related conditions, including coordination of stem cell transplantation. His research background ensures he stays at the forefront of emerging treatments in this rapidly evolving field.',
      'James is known for his methodical approach and his ability to explain complex medical information in accessible terms. He works collaboratively with patients to develop individualized treatment plans that align with their goals and values.'
    ],
    qualifications: [
      'MBBS - Monash University',
      'PhD - Haematology Research',
      'FRACP - Fellow of the Royal Australasian College of Physicians',
      'FRCPA - Fellow of the Royal College of Pathologists of Australasia'
    ]
  },
  {
    slug: 'emma-thompson',
    name: 'Dr Emma Thompson',
    title: 'Consultant Haematologist',
    postNominals: 'MBBS, FRACP, FRCPA',
    role: 'Consultant Haematologist',
    interests: ['Thrombosis', 'Bleeding Disorders', 'Anticoagulation Management'],
    snippet: 'Specialized in haemostasis and thrombosis, providing comprehensive care for clotting and bleeding disorders.',
    bio: [
      'Dr Emma Thompson is a consultant haematologist with specialist expertise in disorders of haemostasis and thrombosis. She completed her haematology training at major Melbourne hospitals with additional fellowship training in haemostasis.',
      'Emma manages a wide range of bleeding and clotting disorders, including haemophilia, von Willebrand disease, thrombophilia, and complex anticoagulation cases. She has particular expertise in managing pregnant patients with bleeding or clotting disorders.',
      'Emma is passionate about empowering patients to understand and manage their conditions. She provides comprehensive care including acute management, long-term monitoring, and preventive strategies.'
    ],
    qualifications: [
      'MBBS - University of Melbourne',
      'FRACP - Fellow of the Royal Australasian College of Physicians',
      'FRCPA - Fellow of the Royal College of Pathologists of Australasia',
      'Advanced training in Haemostasis and Thrombosis'
    ]
  },
  {
    slug: 'michael-nguyen',
    name: 'Dr Michael Nguyen',
    title: 'Consultant Haematologist',
    postNominals: 'MBBS, FRACP, FRCPA',
    role: 'Consultant Haematologist',
    interests: ['Acute Leukaemia', 'Myelodysplastic Syndromes', 'Bone Marrow Failure'],
    snippet: 'Expert in acute leukaemias and bone marrow failure syndromes with focus on intensive treatments.',
    bio: [
      'Dr Michael Nguyen is a consultant haematologist with extensive experience in the management of acute leukaemias and bone marrow failure syndromes. He completed advanced training at major tertiary hospitals with significant exposure to intensive haematology.',
      'Michael has particular expertise in acute myeloid leukaemia (AML), acute lymphoblastic leukaemia (ALL), and myelodysplastic syndromes. He coordinates care for patients requiring intensive chemotherapy and works closely with transplant centres when stem cell transplantation is indicated.',
      'Michael is dedicated to providing compassionate care during challenging times. He works closely with patients and families to navigate complex treatment decisions and ensure comprehensive supportive care.'
    ],
    qualifications: [
      'MBBS - Monash University',
      'FRACP - Fellow of the Royal Australasian College of Physicians',
      'FRCPA - Fellow of the Royal College of Pathologists of Australasia',
      'Advanced training in intensive haematology'
    ]
  },
  {
    slug: 'rebecca-palmer',
    name: 'Dr Rebecca Palmer',
    title: 'Consultant Haematologist',
    postNominals: 'MBBS, FRACP, FRCPA',
    role: 'Consultant Haematologist',
    interests: ['Anaemia', 'Iron Disorders', 'Benign Haematology'],
    snippet: 'Specialized in benign haematology with particular focus on anaemia and iron metabolism disorders.',
    bio: [
      'Dr Rebecca Palmer is a consultant haematologist with special interest in benign haematology, particularly anaemia and disorders of iron metabolism. She trained at leading Melbourne hospitals and has developed particular expertise in complex anaemia cases.',
      'Rebecca manages a wide range of non-malignant blood disorders including iron deficiency anaemia, vitamin B12 and folate deficiency, haemolytic anaemias, and hereditary red cell disorders. She also has expertise in iron overload conditions.',
      'Rebecca takes a comprehensive approach to diagnosis, working to identify and address underlying causes. She is experienced in iron infusion therapy and provides ongoing monitoring to ensure optimal outcomes for her patients.'
    ],
    qualifications: [
      'MBBS - University of Melbourne',
      'FRACP - Fellow of the Royal Australasian College of Physicians',
      'FRCPA - Fellow of the Royal College of Pathologists of Australasia',
      'Special interest in iron metabolism and benign haematology'
    ]
  },
  {
    slug: 'david-krishnan',
    name: 'Dr David Krishnan',
    title: 'Consultant Haematologist',
    postNominals: 'MBBS, FRACP, FRCPA',
    role: 'Consultant Haematologist',
    interests: ['Myeloproliferative Neoplasms', 'Chronic Leukaemias', 'Transitional Care'],
    snippet: 'Expert in myeloproliferative disorders and chronic leukaemias with focus on long-term management.',
    bio: [
      'Dr David Krishnan is a consultant haematologist with expertise in myeloproliferative neoplasms (MPNs) and chronic leukaemias. He completed his haematology training at major Melbourne teaching hospitals with additional experience in managing chronic myeloid conditions.',
      'David specializes in conditions including polycythaemia vera, essential thrombocythaemia, myelofibrosis, and chronic myeloid leukaemia (CML). He provides long-term management strategies and monitors for disease progression and complications.',
      'David also has a special interest in transitional care for young adults with blood disorders, helping patients transition from paediatric to adult services. He is committed to holistic care that addresses both medical and psychosocial needs.'
    ],
    qualifications: [
      'MBBS - Monash University',
      'FRACP - Fellow of the Royal Australasian College of Physicians',
      'FRCPA - Fellow of the Royal College of Pathologists of Australasia',
      'Special interest in myeloproliferative neoplasms'
    ]
  }
];
