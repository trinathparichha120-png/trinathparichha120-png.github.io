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
                { name: '14. Semiconductor Electronics', videoId: 'Y2BrCETu9EU' } 
            ],
            'chemistry': [
                { name: '1. Solutions', videoId: 'rEUYpKt9V20' }, 
                { name: '2. Electrochemistry', videoId: 'rEUYpKt9V20' },
                { name: '3. Chemical Kinetics', videoId: 'rEUYpKt9V20' },
                { name: '4. d and f Block Elements', videoId: 'rEUYpKt9V20' },
                { name: '5. Coordination Compounds', videoId: 'rEUYpKt9V20' },
                { name: '6. Haloalkanes and Haloarenes', videoId: 'rEUYpKt9V20' },
                { name: '7. Alcohols, Phenols and Ethers', videoId: 'rEUYpKt9V20' },
                { name: '8. Aldehydes, Ketones and Carboxylic Acids', videoId: 'rEUYpKt9V20' },
                { name: '9. Amines', videoId: 'rEUYpKt9V20' },
                { name: '10. Biomolecules', videoId: 'rEUYpKt9V20' }
            ],
            'mathematics': [
                { name: '1. Relations and Functions', videoId: 'uTx3zRNqwwM' }, 
                { name: '2. Inverse Trigonometric Functions', videoId: 'uTx3zRNqwwM' }, 
                { name: '3. Matrices', videoId: 'uTx3zRNqwwM' }, 
                { name: '4. Determinants', videoId: 'uTx3zRNqwwM' }, 
                { name: '5. Continuity and Differentiability', videoId: 'uTx3zRNqwwM' }, 
                { name: '6. Application of Derivatives', videoId: 'uTx3zRNqwwM' }, 
                { name: '7. Integrals', videoId: 'uTx3zRNqwwM' }, 
                { name: '8. Application of Integrals', videoId: 'uTx3zRNqwwM' }, 
                { name: '9. Differential Equations', videoId: 'uTx3zRNqwwM' }, 
                { name: '10. Vector Algebra', videoId: 'uTx3zRNqwwM' }, 
                { name: '11. Three Dimensional Geometry', videoId: 'uTx3zRNqwwM' }, 
                { name: '12. Linear Programming', videoId: 'uTx3zRNqwwM' }, 
                { name: '13. Probability', videoId: 'uTx3zRNqwwM' } 
            ],
            'biology': [
                { name: '1. Reproduction in Organisms', videoId: 'oF4xQe3u92E' },
                { name: '2. Human Reproduction', videoId: 'oF4xQe3u92E' },
                { name: '3. Genetics', videoId: 'oF4xQe3u92E' }
            ],
            'english': [
                { name: '1. Reading Comprehension', videoId: 'hQ6-B7R4Yiw' },
                { name: '2. Literature', videoId: 'hQ6-B7R4Yiw' }
            ],
            'compsci': [
                { name: '1. Python Fundamentals', videoId: 'Y8Tko2YAui0' },
                { name: '2. Database Concepts', videoId: 'Y8Tko2YAui0' }
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

// Chemistry - Ashu Sir One Shots
syllabusDB['plus2-2nd']['chse']['chemistry'] = [
    { name: '1. Solutions (One Shot)', videoId: '50U_ZfcrzuI' }, 
    { name: '2. Electrochemistry (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '3. Chemical Kinetics (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '4. d and f Block Elements (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '5. Coordination Compounds (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '6. Haloalkanes and Haloarenes (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '7. Alcohols, Phenols and Ethers (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '8. Aldehydes, Ketones and Carboxylic Acids', videoId: '50U_ZfcrzuI' },
    { name: '9. Amines (One Shot)', videoId: '50U_ZfcrzuI' },
    { name: '10. Biomolecules (One Shot)', videoId: '50U_ZfcrzuI' }
];

// Botany - Vipin Sir One Shots
syllabusDB['plus2-2nd']['chse']['botany'] = [
    { name: '1. Reproduction in Organisms (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '2. Sexual Reproduction in Flowering Plants', videoId: '3o54J5R0nlQ' },
    { name: '3. Plant Water Relations (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '4. Mineral Nutrition (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '5. Photosynthesis (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '6. Respiration (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '7. Plant Growth & Development (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '8. Mendelian Genetics (One Shot)', videoId: '3o54J5R0nlQ' },
    { name: '9. Molecular Basis of Inheritance (One Shot)', videoId: '3o54J5R0nlQ' }
];

// Zoology - Vipin Sir One Shots
syllabusDB['plus2-2nd']['chse']['zoology'] = [
    { name: '1. Human Reproduction (One Shot)', videoId: 'r3_N_9Dtljk' },
    { name: '2. Reproductive Health (One Shot)', videoId: 'r3_N_9Dtljk' },
    { name: '3. Evolution (One Shot)', videoId: 'r3_N_9Dtljk' },
    { name: '4. Human Health and Disease (One Shot)', videoId: 'r3_N_9Dtljk' },
    { name: '5. Biotechnology: Principles and Processes', videoId: 'r3_N_9Dtljk' },
    { name: '6. Biotechnology and its Applications', videoId: 'r3_N_9Dtljk' },
    { name: '7. Ecology (One Shot)', videoId: 'r3_N_9Dtljk' }
];

// MIL Odia - HK Sir One Shots
syllabusDB['plus2-2nd']['chse']['mil-odia'] = [
    { name: 'Prose: Itihasa (One Shot)', videoId: 'z1MLMknyWMQ' },
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
    { name: 'Prose: My Greatest Olympic Prize', videoId: 'MRsMxz91UKE' },
    { name: 'Prose: On Examinations', videoId: 'MRsMxz91UKE' },
    { name: 'Prose: The Magic of Teamwork', videoId: 'MRsMxz91UKE' },
    { name: 'Poetry: Daffodils', videoId: 'MRsMxz91UKE' },
    { name: 'Poetry: The Ballad of Father Gilligan', videoId: 'MRsMxz91UKE' },
    { name: 'Poetry: A Psalm of Life', videoId: 'MRsMxz91UKE' }
];

syllabusDB['plus2-2nd']['chse']['english-inv2'] = [
    { name: '1. The Doctor\'s Word', videoId: 'hiKzGhc9i5Y' },
    { name: '2. The Nightingale and the Rose', videoId: 'hiKzGhc9i5Y' },
    { name: '3. Mystery of the Missing Cap', videoId: 'hiKzGhc9i5Y' },
    { name: '4. The Monkey\'s Paw', videoId: 'hiKzGhc9i5Y' }
];

syllabusDB['plus2-2nd']['chse']['english-inv3'] = [
    { name: '1. Essay Writing', videoId: 'MRsMxz91UKE' },
    { name: '2. Report Writing', videoId: 'MRsMxz91UKE' },
    { name: '3. Note Making', videoId: 'MRsMxz91UKE' }
];

syllabusDB['plus2-2nd']['chse']['english-inv4'] = [
    { name: '1. Tense Patterns', videoId: 'hiKzGhc9i5Y' },
    { name: '2. Modals', videoId: 'hiKzGhc9i5Y' },
    { name: '3. Conditionals', videoId: 'hiKzGhc9i5Y' },
    { name: '4. Passive Voice', videoId: 'hiKzGhc9i5Y' }
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
    { name: '1. Python Revision Tour', videoId: 'Y8Tko2YAui0' },
    { name: '2. Functions & Modules', videoId: 'Y8Tko2YAui0' },
    { name: '3. File Handling', videoId: 'Y8Tko2YAui0' },
    { name: '4. Data Structures (Stacks)', videoId: 'Y8Tko2YAui0' },
    { name: '5. Computer Networks', videoId: 'Y8Tko2YAui0' },
    { name: '6. Database Management (SQL)', videoId: 'Y8Tko2YAui0' },
    { name: '7. Interface Python with MySQL', videoId: 'Y8Tko2YAui0' }
];

syllabusDB['plus2-2nd']['chse']['statistics'] = [
    { name: '1. Probability Theory', videoId: '9b8Dhh-Pq1w' },
    { name: '2. Random Variables', videoId: '9b8Dhh-Pq1w' },
    { name: '3. Theoretical Distributions', videoId: '9b8Dhh-Pq1w' },
    { name: '4. Statistical Inference', videoId: '9b8Dhh-Pq1w' },
    { name: '5. Time Series Analysis', videoId: '9b8Dhh-Pq1w' }
];

syllabusDB['plus2-2nd']['chse']['electronics'] = [
    { name: '1. Semiconductor Physics', videoId: 'wNJTLxXfDS8' },
    { name: '2. Junction Diodes', videoId: 'wNJTLxXfDS8' },
    { name: '3. Bipolar Junction Transistors', videoId: 'wNJTLxXfDS8' },
    { name: '4. Amplifiers', videoId: 'wNJTLxXfDS8' },
    { name: '5. Oscillators', videoId: 'wNJTLxXfDS8' },
    { name: '6. Digital Electronics Basics', videoId: 'wNJTLxXfDS8' }
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
