const skillDescriptions = {
    'Accounting': 'Detailed knowledge of financial practices. Use it to find hidden assets, money laundering, or embezzlement.',
    'Alertness': 'Noticing danger or hidden things. Use it to hear a safety click off, spot a hidden weapon, or detect someone using Stealth.',
    'Anthropology': 'The study of human cultures. Use it to understand rituals, social structures, and cultural behaviors.',
    'Archeology': 'The study of past human life through material remains. Use it to date artifacts, identify ruins, or excavate a site without destroying evidence.',
    'Art': 'The creation and critique of artistic works. Use it to identify forgeries, understand symbolism, or appraise value.',
    'Artillery': 'Safe and accurate use of heavy gunnery (mortars, howitzers).',
    'Athletics': 'Physical fitness. Running, climbing, jumping, and throwing.',
    'Bureaucracy': 'Navigating organizational structures. Use it to obtain resources, fake credentials, expedite permits, or cover up operations within a government agency.',
    'Computer Science': 'Deep knowledge of software and hardware. Use it to hack systems, recover deleted data, or trace digital footprints.',
    'Craft': 'Making and repairing tools. Specific types (Locksmith, Electrician) allow for specialized actions.',
    'Criminology': 'Knowledge of criminal behavior and law enforcement techniques. Use it to profile suspects or predict criminal patterns.',
    'Demolitions': 'Handling explosives safely. Setting charges and disarming bombs.',
    'Disguise': 'Altering appearance and mannerisms to avoid recognition.',
    'Dodge': 'Reflexive action to avoid physical attacks. Against firearms, this only helps you get to cover.',
    'Drive': 'Operating automobiles under stress or in high-speed pursuits.',
    'Firearms': 'Safe and accurate use of pistols, rifles, and shotguns.',
    'First Aid': 'Emergency medical treatment to stabilize injuries and restore a small amount of HP.',
    'Forensics': 'Collection and analysis of physical evidence (fingerprints, DNA, ballistics).',
    'Heavy Machinery': 'Operation of large vehicles (tractors, cranes, tanks).',
    'Heavy Weapons': 'Use of machine guns, rocket launchers, and grenade launchers.',
    'History': 'Academic knowledge of past events. Use it to identify historical context for a mystery.',
    'Human Studies': 'Academic knowledge of psychology and sociology.',
    'HUMINT': 'Human Intelligence. Reading people, gauging truthfulness, and gathering information through conversation.',
    'Law': 'Knowledge of legal codes and procedures. Use it to navigate the justice system or defend against legal action.',
    'Medicine': 'Advanced medical knowledge. Diagnosing illness, treating poisons, and long-term care.',
    'Melee Weapons': 'Combat with handheld weapons (knives, batons, axes).',
    'Military Science': 'Knowledge of military tactics, hierarchy, and protocol.',
    'Navigate': 'finding one’s way via map, compass, or landmarks.',
    'Occult': 'Knowledge of the supernatural, folklore, and secret history. Essential for identifying unnatural threats.',
    'Paranormal': 'Investigation of ghosts, cryptids, and fringe science.',
    'Persuade': 'Convincing others to do what you want through logic, emotion, or deception.',
    'Pharmacy': 'Knowledge of drugs, poisons, and chemistry.',
    'Pilot': 'Operating airborne or waterborne vehicles.',
    'Psychotherapy': 'Diagnosing and treating mental illness. Recovering Sanity Points.',
    'Ride': 'Riding and handling animals.',
    'Science': 'Academic knowledge of biology, chemistry, physics, etc.',
    'Search': 'Thoroughly searching an area for hidden items or clues.',
    'SIGINT': 'Signals Intelligence. Encryption, code-breaking, and electronic surveillance.',
    'Stealth': 'Moving silently and remaining unseen.',
    'Surgery': 'Invasive medical procedures to treat severe wounds.',
    'Survival': 'Surviving in the wilderness (finding food, shelter, tracking).',
    'Swim': 'Moving through water under stress.',
    'Unarmed Combat': 'Fighting without weapons (brawling, martial arts).'
};

const weaponPresets = {
    "Standard Issue": [
        { name: "Service Pistol (Light)", expense: "Standard", skillIdentifier: "Firearms", range: 10, dmg: "1D8", ap: "", lethality: "", ammoC: 17, ammoM: 17, desc: "Standard FBI/Police issue.", examples: "Glock 17, Sig P226." },
        { name: "Service Pistol (Medium)", expense: "Standard", skillIdentifier: "Firearms", range: 15, dmg: "1D10", ap: "", lethality: "", ammoC: 15, ammoM: 15, desc: ".40 S&W or .45 ACP sidearms.", examples: "Glock 22, M1911." },
        { name: "Back-up Revolver", expense: "Standard", skillIdentifier: "Firearms", range: 5, dmg: "1D8", ap: "", lethality: "", ammoC: 5, ammoM: 5, desc: "Small, concealable.", examples: "S&W J-Frame." },
        { name: "Patrol Shotgun", expense: "Standard", skillIdentifier: "Firearms", range: 50, dmg: "2D10", ap: "", lethality: "", ammoC: 6, ammoM: 6, desc: "Standard pump-action.", examples: "Remington 870." },
        { name: "Patrol Carbine", expense: "Unusual", skillIdentifier: "Firearms", range: 100, dmg: "1D12", ap: "3", lethality: "10", ammoC: 30, ammoM: 30, desc: "Semi-auto rifle kept in trunks.", examples: "AR-15." }
    ],
    "Melee Weapons": [
        { name: "Unarmed", expense: "N/A", skillIdentifier: "Unarmed Combat", range: 1, dmg: "1D4-1", ap: "", lethality: "", ammoC: "", ammoM: "", desc: "Fists and feet.", examples: "Brawling." },
        { name: "Tactical Knife", expense: "Incidental", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D6", ap: "3", lethality: "", ammoC: "", ammoM: "", desc: "Combat blade.", examples: "Ka-Bar." },
        { name: "Baton/Asp", expense: "Incidental", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D6", ap: "", lethality: "", ammoC: "", ammoM: "", desc: "Collapsible steel baton.", examples: "Police standard." },
        { name: "Taser (Contact)", expense: "Incidental", skillIdentifier: "Unarmed Combat", range: 1, dmg: "Stun", ap: "", lethality: "", ammoC: "", ammoM: "", desc: "Shock device. Target must make CON test or be stunned.", examples: "" }
    ],
    "Heavy Weapons": [
        { name: "Frag Grenade", expense: "Restricted", skillIdentifier: "Athletics", range: 20, dmg: "1D6", ap: "", lethality: "15", ammoC: 1, ammoM: 1, desc: "Military ordnance. Radius 10m.", examples: "M67." },
        { name: "Flashbang", expense: "Restricted", skillIdentifier: "Athletics", range: 20, dmg: "Stun", ap: "", lethality: "", ammoC: 1, ammoM: 1, desc: "Blinds and deafens targets.", examples: "M84." },
        { name: "Smoke Grenade", expense: "Standard", skillIdentifier: "Athletics", range: 20, dmg: "Cover", ap: "", lethality: "", ammoC: 1, ammoM: 1, desc: "Obscures vision.", examples: "M18." },
        { name: "RPG / Rocket", expense: "Restricted", skillIdentifier: "Heavy Weapons", range: 200, dmg: "", ap: "20", lethality: "30", ammoC: 1, ammoM: 1, desc: "Anti-tank weapon.", examples: "AT4." },
        { name: "Heavy Machine Gun", expense: "Restricted", skillIdentifier: "Heavy Weapons", range: 400, dmg: "2D12", ap: "5", lethality: "20", ammoC: 100, ammoM: 100, desc: "Mounted automatic weapon.", examples: "M2 Browning." }
    ]
};

const armorPresets = [
    { name: "Kevlar Vest (Light)", ap: 3, desc: "Concealable under loose clothing. Standard issue for Agents.", isBombSuit: false },
    { name: "Tactical Vest (Heavy)", ap: 5, desc: "Visible plate carrier. Used by SWAT/HRT.", isBombSuit: false },
    { name: "Riot Gear", ap: 4, desc: "Includes helmet and pads. Bulky.", isBombSuit: false },
    { name: "Bomb Suit", ap: 10, desc: "Explosive ordnance disposal suit. User cannot run.", isBombSuit: true }
];
