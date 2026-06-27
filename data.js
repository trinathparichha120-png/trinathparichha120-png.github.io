// SYLLABUS DATABASE
const syllabusDB = {
    'plus2-2nd': {
        'cbse': {
            'physics': [
                { name: '1. Electric Charges and Fields', videoId: 'z1gy8O-9a-0' }, 
                { name: '2. Electrostatic Potential and Capacitance', videoId: '9Hf-v8-WTtY' }, 
                { name: '3. Current Electricity', videoId: '24YuubvxVLY' }, 
                { name: '4. Moving Charges and Magnetism', videoId: 'UFQx9UuT_Y0' }, 
                { name: '5. Magnetism and Matter', videoId: 'MS6MtjQMWuU' }, 
                { name: '6. Electromagnetic Induction', videoId: 'wNJTLxXfDS8' }, 
                { name: '7. Alternating Current', videoId: '-tCdzYEotgQ' }, 
                { name: '8. Electromagnetic Waves', videoId: '-tCdzYEotgQ' }, 
                { name: '9. Ray Optics and Optical Instruments', videoId: 'cH0zuEoY4r0' }, 
                { name: '10. Wave Optics', videoId: 'Y2BrCETu9EU' }, 
                { name: '11. Dual Nature of Radiation and Matter', videoId: 'Y2BrCETu9EU' }, 
                { name: '12. Atoms', videoId: 'uOaOviIfCTU' }, 
                { name: '13. Nuclei', videoId: 'uOaOviIfCTU' }, 
                { name: '14. Semiconductor Electronics', videoId: 'nCAXL800EZw' } 
            ],
            'chemistry': [
                { name: '1. Solutions', videoId: 'xw3C6_ZDDBo' }, 
                { name: '2. Electrochemistry', videoId: 'nPQ-mvIl_bQ' },
                { name: '3. Chemical Kinetics', videoId: 'WuARVOxfRNQ' },
                { name: '4. d and f Block Elements', videoId: 'ZHdxNDnJf4o' },
                { name: '5. Coordination Compounds', videoId: 'EszE3aP4yIM' },
                { name: '6. Haloalkanes and Haloarenes', videoId: 'iAwju2Xk2xc' },
                { name: '7. Alcohols, Phenols and Ethers', videoId: 'yzRH8PTJzkM' },
                { name: '8. Aldehydes, Ketones and Carboxylic Acids', videoId: 'HB8CZzDnKHI' },
                { name: '9. Amines', videoId: 'lQbgRJnVShY' },
                { name: '10. Biomolecules', videoId: 'qew8jac0z7g' }
            ],
            'mathematics': [
                { name: '1. Relations and Functions', videoId: 'zyFucmwc2gY' }, 
                { name: '2. Inverse Trigonometric Functions', videoId: 'Oy-Z49idgVw' }, 
                { name: '3. Matrices', videoId: 'MYF034ZUKxo' }, 
                { name: '4. Determinants', videoId: '2NncYZhn6FI' }, 
                { name: '5. Continuity and Differentiability', videoId: 'cnpv-t2DGiw' }, 
                { name: '6. Application of Derivatives', videoId: 'fy4m6lZ9YwA' }, 
                { name: '7. Integrals', videoId: 'yY2oUKVAkdY' }, 
                { name: '8. Application of Integrals', videoId: 'lnR343-9vFY' }, 
                { name: '9. Differential Equations', videoId: '4r-0JSfGez4' }, 
                { name: '10. Vector Algebra', videoId: 'U7nSbEZyYnA' }, 
                { name: '11. Three Dimensional Geometry', videoId: 'sNG2FVZi5d8' }, 
                { name: '12. Linear Programming', videoId: '0bVrrnAjAyw' }, 
                { name: '13. Probability', videoId: 'I4WvS7_rk8k' } 
            ],
            // Botany - Vipin Sir One Shots
            'botany': [
                { name: '1. Reproduction in Organisms (One Shot)', videoId: 'LmRldTCcf1w' },
                { name: '2. Sexual Reproduction in Flowering Plants', videoId: 'AT_Jqc-E1Eg' },
                { name: '8. Mendelian Genetics (One Shot)', videoId: 'nyIf7AXZ4I8' },
                { name: '9. Molecular Basis of Inheritance (One Shot)', videoId: 'bptWgjQ_jFA' }
            ],
            // Zoology - Vipin Sir One Shots
            'zoology': [
                { name: '1. Human Reproduction (One Shot)', videoId: 'zZ05EByJ9ts' },
                { name: '2. Reproductive Health (One Shot)', videoId: '48gImtbYLsQ' },
                { name: '3. Evolution (One Shot)', videoId: 'UhNT6wM9sng' },
                { name: '4. Human Health and Disease (One Shot)', videoId: 'uySMYvvV1H4' },
                { name: '5. Biotechnology: Principles and Processes', videoId: 'PqzJfOddRWE' },
                { name: '6. Biotechnology and its Applications', videoId: 'M-H9I027lAI' },
                { name: '7. Ecology (One Shot)', videoId: 'Sydlo51d8QA' }
            ]
        }
    }
};

// 1. Deep Copy CBSE to CHSE within the strict hierarchy
syllabusDB['plus2-2nd']['chse'] = JSON.parse(JSON.stringify(syllabusDB['plus2-2nd']['cbse']));

// 2. Syllabus Constraint Overrides
syllabusDB['plus2-2nd']['chse']['physics'][13].name = '14. Semiconductor Electronics (Excluding Logic Gates)';

// 3. Remove inherited flat arrays prior to restructuring
delete syllabusDB['plus2-2nd']['chse']['biology'];
delete syllabusDB['plus2-2nd']['chse']['english'];

// 4. Overwrite Arrays with Verified "One Shot" Data



// Botany - Vipin Sir One Shots class 11th
syllabusDB['plus2-2nd']['chse']['botany'] = [
    { name: '3. Plant Water Relations (One Shot)', videoId: 'uubHmiafxG8'},
    { name: '4. Mineral Nutrition (One Shot)', videoId: 'g4_7y9R0bKM' },
    { name: '5. Photosynthesis (One Shot)', videoId: 'orPhMWc0CMw' },
    { name: '6. Respiration (One Shot)', videoId: 'kC0hk6_Uxis' },
    { name: '7. Plant Growth & Development (One Shot)', videoId: '5rhSaeXug2k' },
];

// Zoology - Vipin Sir One Shots class 11th

// MIL Odia - HK Sir One Shots
syllabusDB['plus2-2nd']['chse']['mil-odia'] = [
    { name: 'Prose: Itihasa (One Shot)', videoId: 'GKWJzuRVQrk' },
    { name: 'Prose: Pushpapura re Varshabarana', videoId: 'z1MLMknyWMQ' },
    { name: 'Prose: Swadhina Deshare Sikshya Chinta', videoId: 'z1MLMknyWMQ' },
    { name: 'Poetry: Bada Pana (One Shot)', videoId: 'z1MLMknyWMQ' },
    { name: 'Poetry: Tapaswinira Patra (One Shot)', videoId: 'z1MLMknyWMQ' },
    { name: 'Poetry: Bandira Viraha Vyatha', videoId: 'z1MLMknyWMQ' },
    { name: 'Poetry: Pingalara Abhisara', videoId: 'z1MLMknyWMQ' },
    { name: 'Short Story: Sabhya Zamindar', videoId: 'z1MLMknyWMQ' },
    { name: 'Short Story: Pataka Uttolana', videoId: 'z1MLMknyWMQ' },
    { name: 'Short Story: Rup Narayan Saha', videoId: 'z1MLMknyWMQ' },
    { name: 'Grammar: Samasa (One Shot)', videoId: 'z1MLMknyWMQ' },
    { name: 'Grammar: Roudhi (One Shot)', videoId: 'z1MLMknyWMQ' },
    { name: 'Grammar: Krudanta (One Shot)', videoId: 'z1MLMknyWMQ' },
    { name: 'Grammar: Tadhita (One Shot)', videoId: 'z1MLMknyWMQ' }
];

// English Invitations - One Shots
syllabusDB['plus2-2nd']['chse']['english-inv1'] = [
    { name: 'Prose: My Greatest Olympic Prize', videoId: 'Y7w1EVjG0aY' },
    { name: 'Prose: On Examinations', videoId: 'Y7w1EVjG0aY' },
    { name: 'Prose: The Magic of Teamwork', videoId: 'Y7w1EVjG0aY' },
    { name: 'Poetry: Daffodils', videoId: 'Y7w1EVjG0aY' },
    { name: 'Poetry: The Ballad of Father Gilligan', videoId: 'Y7w1EVjG0aY' },
    { name: 'Poetry: A Psalm of Life', videoId: 'Y7w1EVjG0aY' }
];

syllabusDB['plus2-2nd']['chse']['english-inv2'] = [
    { name: '1. The Doctor\'s Word', videoId: 'Y7w1EVjG0aY' },
    { name: '2. The Nightingale and the Rose', videoId: 'Y7w1EVjG0aY' },
    { name: '3. Mystery of the Missing Cap', videoId: 'Y7w1EVjG0aY' },
    { name: '4. The Monkey\'s Paw', videoId: 'Y7w1EVjG0aY' }
];

syllabusDB['plus2-2nd']['chse']['english-inv3'] = [
    { name: '1. Essay Writing', videoId: 'Y7w1EVjG0aY' },
    { name: '2. Report Writing', videoId: 'Y7w1EVjG0aY' },
    { name: '3. Note Making', videoId: 'Y7w1EVjG0aY' }
];

syllabusDB['plus2-2nd']['chse']['english-inv4'] = [
    { name: '1. Tense Patterns', videoId: 'Y7w1EVjG0aY' },
    { name: '2. Modals', videoId: 'Y7w1EVjG0aY' },
    { name: '3. Conditionals', videoId: 'Y7w1EVjG0aY' },
    { name: '4. Passive Voice', videoId: 'Y7w1EVjG0aY' }
];

// 5. Appending IT Module
syllabusDB['plus2-2nd']['chse']['it'] = [
    { name: '1. Networking & Internet', videoId: '' },
    { name: '2. HTML & Web Development', videoId: '' },
    { name: '3. Database Management System', videoId: '' },
    { name: '4. IT Applications & E-Commerce', videoId: '' },
    { name: '5. Cyber Security & Ethics', videoId: '' }
];

// 6. Retain other CHSE Specific Subjects
syllabusDB['plus2-2nd']['chse']['compsci'] = [
    { name: '1. Python Revision Tour', videoId: '' },
    { name: '2. Functions & Modules', videoId: '' },
    { name: '3. File Handling', videoId: '' },
    { name: '4. Data Structures (Stacks)', videoId: '' },
    { name: '5. Computer Networks', videoId: '' },
    { name: '6. Database Management (SQL)', videoId: '' },
    { name: '7. Interface Python with MySQL', videoId: '' }
];

syllabusDB['plus2-2nd']['chse']['statistics'] = [
    { name: '1. Probability Theory', videoId: '' },
    { name: '2. Random Variables', videoId: '' },
    { name: '3. Theoretical Distributions', videoId: '' },
    { name: '4. Statistical Inference', videoId: '' },
    { name: '5. Time Series Analysis', videoId: '' }
];

syllabusDB['plus2-2nd']['chse']['electronics'] = [
    { name: '1. Semiconductor Physics', videoId: '' },
    { name: '2. Junction Diodes', videoId: '' },
    { name: '3. Bipolar Junction Transistors', videoId: '' },
    { name: '4. Amplifiers', videoId: '' },
    { name: '5. Oscillators', videoId: '' },
    { name: '6. Digital Electronics Basics', videoId: '' }
];

syllabusDB['plus2-2nd']['chse']['history'] = [
    { name: '1. Bricks, Beads and Bones', videoId: 'wNJTLxXfDS8' },
    { name: '2. Kings, Farmers and Towns', videoId: '9b8Dhh-Pq1w' },
    { name: '3. Kinship, Caste and Class', videoId: 'Y8Tko2YAui0' }
];

syllabusDB['plus2-2nd']['chse']['political-science'] = [
    { name: '1. Democracy in India', videoId: 'z1gy8O-9a-0' },
    { name: '2. Party System in India', videoId: '9Hf-v8-WTtY' },
    { name: '3. Contemporary World Politics', videoId: '24YuubvxVLY' }
];

syllabusDB['plus2-2nd']['chse']['economics'] = [
    { name: '1. Microeconomics: Introduction', videoId: 'rEUYpKt9V20' },
    { name: '2. Consumer Equilibrium', videoId: 'uTx3zRNqwwM' },
    { name: '3. National Income', videoId: 'oF4xQe3u92E' }
];

syllabusDB['plus2-2nd']['chse']['accountancy'] = [
    { name: '1. Partnership Accounts', videoId: 'uOaOviIfCTU' },
    { name: '2. Company Accounts', videoId: 'Y2BrCETu9EU' },
    { name: '3. Financial Statement Analysis', videoId: 'cH0zuEoY4r0' }
];

syllabusDB['plus2-2nd']['chse']['business-studies'] = [
    { name: '1. Nature and Significance of Management', videoId: '-tCdzYEotgQ' },
    { name: '2. Principles of Management', videoId: 'wNJTLxXfDS8' },
    { name: '3. Financial Management', videoId: 'MS6MtjQMWuU' }
];
