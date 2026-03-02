export const captionStyles = [
  "Pretentious Art Critic",
  "2012 Tumblr",
  "LinkedIn Hustle Bro",
  "Conspiracy Theorist",
  "Film Noir",
  "Overly Dramatic"
] as const;

export type CaptionStyle = (typeof captionStyles)[number];

type WordPools = {
  object: string[];
  emotion: string[];
  vibe: string[];
};

const wordPools: WordPools = {
  object: [
    "lamp",
    "croissant",
    "pigeon",
    "taxi",
    "toothbrush",
    "cactus",
    "sneaker",
    "microwave",
    "traffic cone",
    "ferret",
    "glitter bomb",
    "soup spoon"
  ],
  emotion: [
    "existential dread",
    "mild euphoria",
    "chaotic joy",
    "suppressed rage",
    "romantic confusion",
    "cosmic envy",
    "secondhand embarrassment",
    "aggressive serenity",
    "melodramatic optimism",
    "delicate panic"
  ],
  vibe: [
    "main-character energy",
    "parking-lot renaissance",
    "late-night infomercial aura",
    "forbidden brunch aesthetic",
    "apocalyptic whimsy",
    "retro chaos",
    "soft villain arc",
    "season finale tension",
    "internet-core melancholy",
    "ceremonial nonsense"
  ]
};

const templates: Record<CaptionStyle, string[]> = {
  "Pretentious Art Critic": [
    "This {object} interrogates the fragility of {emotion} in a post-{vibe} world.",
    "A daring meditation on the {vibe} of modern {object} grief.",
    "Observe how the {object} weaponizes negative space to evoke {emotion}.",
    "This piece refuses meaning, then sells it back to us as {vibe}.",
    "The {object} appears ordinary, yet whispers the theology of {emotion}.",
    "A brutalist sonnet about {vibe}, disguised as a photo of a {object}.",
    "The artist captures {emotion} as if it were a tax deductible lifestyle.",
    "It is less an image, more a legally binding agreement with {vibe}.",
    "This {object} performs silence with unsettling {emotion}.",
    "A luminous conflict between domesticity and {vibe} spectacle.",
    "The frame trembles under the intellectual weight of this {object}.",
    "One can almost taste the curated {emotion} embedded in the pixels.",
    "A rebellious hymn to {vibe}, sung through a compromised {object}.",
    "The {object} collapses time into a single note of {emotion}.",
    "This composition is a quiet riot against coherent {vibe}."
  ],
  "2012 Tumblr": [
    "i'm not saying this {object} saved me but like... spiritually? yes.",
    "this is what {emotion} looks like at 2:13am with no wifi.",
    "we were all chasing {vibe} and calling it personality.",
    "reblog if this {object} has ever personally attacked you.",
    "just a small post about {emotion} and emotional bankruptcy.",
    "my soul is a {object} covered in glitter and unresolved trauma.",
    "the {vibe} in this pic? illegal in 43 countries.",
    "if lost, return me to the nearest source of {emotion}.",
    "no thoughts, only {object} and a dangerous amount of {vibe}.",
    "currently accepting prayers and {emotion} in the inbox.",
    "this is my villain origin story but make it {vibe}.",
    "the {object} said \"heal\" and i said \"block\".",
    "everyone wants closure, i want dramatic {emotion}.",
    "dear diary: today i became the {vibe} i feared.",
    "this {object} is proof that god has a sense of irony."
  ],
  "LinkedIn Hustle Bro": [
    "This {object} taught me 10X {emotion} before breakfast. Here's how:",
    "People laugh at your {vibe} until it becomes a keynote slide.",
    "I posted a selfie with a {object} and closed 3 deals in 7 minutes.",
    "Your competitors are sleeping. You're optimizing {emotion}.",
    "Stop chasing passion. Start scaling your {vibe} pipeline.",
    "The {object} isn't broken—your mindset around {emotion} is.",
    "Monday reminder: turn that {emotion} into recurring revenue.",
    "I fired my alarm clock and hired a {object} to mentor me.",
    "If your {vibe} strategy fits on one sticky note, think bigger.",
    "Success is 1% inspiration, 99% aggressive {object} ownership.",
    "Wake up. Hydrate. Monetize {emotion}. Repeat.",
    "I don't do weekends. I do {vibe} sprints with my {object}.",
    "The market rewards those who iterate through {emotion} publicly.",
    "This {object} is now my Chief Visionary of {vibe}.",
    "Haters call it cringe. I call it scalable {emotion}."
  ],
  "Conspiracy Theorist": [
    "Notice how the {object} aligns with the moon? Exactly. {vibe} agenda.",
    "They told us {emotion} was normal. Then this photo happened.",
    "Every pixel in this {object} spells out a warning. Wake up.",
    "You think it's a vibe. I think it's phase two of {vibe}.",
    "The shadows around this {object} were edited by someone. Who?",
    "Coincidence that {emotion} trends right after this image? impossible.",
    "I've mapped this {object} to 14 ancient prophecies and a podcast.",
    "Mainstream media says \"cute pic\". I say {vibe} signal.",
    "The government doesn't want you to zoom in on that {object}.",
    "This is how they distract you from the real {emotion} shortage.",
    "Do your own research: the {object} appears every 11 years.",
    "If this screams {vibe}, your third eye is still asleep.",
    "I traced the metadata. It points straight to {emotion} labs.",
    "Ask yourself: who profits from this level of {object} placement?",
    "Not saying aliens, but the {vibe} here is deeply extraterrestrial."
  ],
  "Film Noir": [
    "The {object} sat there like a confession nobody wanted to hear.",
    "Rain hit the window. {emotion} hit harder.",
    "In this town, even {vibe} wears a fedora and lies for cash.",
    "The {object} knew my name before I did.",
    "She walked in carrying {emotion} and bad intentions.",
    "The night smelled like gasoline, jazz, and {vibe}.",
    "I trusted the {object}. That's how I lost everything.",
    "Every alley had two exits and one flavor of {emotion}.",
    "The {vibe} was thick enough to carve with a pocketknife.",
    "By dawn, the {object} was gone and so was my alibi.",
    "I lit a match and watched {emotion} flicker in the dark.",
    "Nothing good happens after midnight, except maybe this {object}.",
    "In the city of broken promises, {vibe} paid in exact change.",
    "The case was cold, but the {emotion} was fresh.",
    "I followed the {object}. It led me straight to trouble."
  ],
  "Overly Dramatic": [
    "This {object} didn't just arrive. It shattered the heavens.",
    "I have seen kingdoms fall with less {emotion} than this moment.",
    "The {vibe} here could summon storms and questionable exes.",
    "One glance at this {object}, and my bloodline changed forever.",
    "Historians will divide time into before and after this {emotion}.",
    "The stars blinked twice when this {object} entered the frame.",
    "This isn't a picture. It's a prophecy soaked in {vibe}.",
    "My ancestors felt this {emotion} in their bones just now.",
    "The {object} has spoken, and peace is no longer an option.",
    "I whispered \"wow\" and the wind answered with {vibe}.",
    "If drama were oxygen, this {object} would be a supernova.",
    "I came for a vibe and found eternal {emotion}.",
    "The horizon trembled beneath the weight of this {object}.",
    "Legends begin exactly like this: one {object}, infinite {vibe}.",
    "My group chat will never recover from this {emotion}."
  ]
};

const placeholderPattern = /\{(object|emotion|vibe)\}/g;

export function generateCaption(style: CaptionStyle): string {
  const styleTemplates = templates[style];
  const template = styleTemplates[Math.floor(Math.random() * styleTemplates.length)];

  return template.replace(placeholderPattern, (_, key: keyof WordPools) => {
    const options = wordPools[key];
    return options[Math.floor(Math.random() * options.length)];
  });
}
