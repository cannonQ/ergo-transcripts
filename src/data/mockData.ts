import { Call, QAPair, Decision, Topic, Speaker } from '../types';

export const mockCalls: Call[] = [
  {
    id: "H8uXsY6WP3s",
    date: "2024-01-16",
    title: "Ergo Community Chat - AI Coding Revolution",
    type: "community_chat",
    duration_minutes: 59,
    speakers: ["qx", "kushti", "HQ", "Fitz"],
    topics: ["ai-coding", "ergoscript", "development", "tooling", "automation"],
    summary: "The community discussed the impact of AI coding tools on Ergo development, with kushti demonstrating new approaches to ErgoScript optimization using GPT-4 and Copilot.",
    stats: {
      topics: 5,
      qa_pairs: 12,
      decisions: 2,
      commitments: 3
    },
    media: {
      youtube: "https://youtube.com/watch?v=H8uXsY6WP3s",
      spotify: "https://open.spotify.com/episode/example",
      apple_podcasts: "https://podcasts.apple.com/podcast/example",
      anchor: "https://anchor.fm/ergo-platform/episodes/example"
    },
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop"
  },
  {
    id: "K9vYtR4mN2x",
    date: "2024-01-14",
    title: "Rosen Bridge V2 Security Architecture",
    type: "special_event",
    duration_minutes: 87,
    speakers: ["kushti", "armeanio", "morphic"],
    topics: ["rosen-bridge", "security", "cross-chain", "threshold-signatures"],
    summary: "Deep dive into Rosen Bridge V2's new security model, discussing the transition from multisig to threshold signatures and the implications for decentralization.",
    stats: {
      topics: 4,
      qa_pairs: 18,
      decisions: 3,
      commitments: 2
    },
    media: {
      youtube: "https://youtube.com/watch?v=K9vYtR4mN2x",
      spotify: "https://open.spotify.com/episode/example2"
    },
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=225&fit=crop"
  },
  {
    id: "L3pQwE8zM5n",
    date: "2024-01-12",
    title: "ErgoDEX V3 Roadmap & Concentrated Liquidity",
    type: "ama",
    duration_minutes: 72,
    speakers: ["ilya", "oskin", "HQ"],
    topics: ["ergodex", "defi", "concentrated-liquidity", "amm", "roadmap"],
    summary: "The ErgoDEX team unveiled V3 plans featuring concentrated liquidity pools, improved capital efficiency, and new yield farming strategies.",
    stats: {
      topics: 6,
      qa_pairs: 24,
      decisions: 4,
      commitments: 5
    },
    media: {
      youtube: "https://youtube.com/watch?v=L3pQwE8zM5n"
    },
    thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=225&fit=crop"
  },
  {
    id: "M4rTyU9kP2w",
    date: "2024-01-10",
    title: "ErgoScript Tutorial - Advanced Box Patterns",
    type: "tutorial",
    duration_minutes: 45,
    speakers: ["kushti", "greenhat"],
    topics: ["ergoscript", "tutorial", "smart-contracts", "development"],
    summary: "Comprehensive tutorial on advanced ErgoScript patterns including proxy contracts, time-locked boxes, and complex spending conditions.",
    stats: {
      topics: 4,
      qa_pairs: 8,
      decisions: 0,
      commitments: 1
    },
    media: {
      youtube: "https://youtube.com/watch?v=M4rTyU9kP2w"
    },
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=225&fit=crop"
  },
  {
    id: "N5sWxR7mL3y",
    date: "2024-01-08",
    title: "Ergo Foundation Q1 2024 Updates",
    type: "community_chat",
    duration_minutes: 63,
    speakers: ["armeanio", "qx", "mgpai", "HQ"],
    topics: ["foundation", "governance", "funding", "grants", "roadmap"],
    summary: "Quarterly update from the Ergo Foundation covering grant distributions, partnership announcements, and strategic priorities for Q1 2024.",
    stats: {
      topics: 7,
      qa_pairs: 15,
      decisions: 5,
      commitments: 4
    },
    media: {
      youtube: "https://youtube.com/watch?v=N5sWxR7mL3y",
      spotify: "https://open.spotify.com/episode/example3"
    },
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=225&fit=crop"
  }
];

export const mockQA: QAPair[] = [
  {
    id: "qa-1",
    question: "What is the difference between UTXO and eUTXO?",
    answer: "eUTXO extends the UTXO model with data storage and scripts attached to each box, enabling complex smart contracts while maintaining the security and predictability of UTXO. Unlike account-based models, eUTXO allows for better parallelization and deterministic transaction validation.",
    responder: "kushti",
    call_id: "H8uXsY6WP3s",
    date: "2024-01-16",
    timestamp: "15:23",
    category: "technical",
    difficulty: "intermediate"
  },
  {
    id: "qa-2",
    question: "How does Rosen Bridge ensure security without centralization?",
    answer: "Rosen Bridge V2 uses threshold signatures instead of traditional multisig, requiring k-of-n watchers to sign transactions. This provides security through redundancy while avoiding single points of failure. The watchers are incentivized through fees and slashing mechanisms.",
    asker: "community",
    responder: "armeanio",
    call_id: "K9vYtR4mN2x",
    date: "2024-01-14",
    timestamp: "32:45",
    category: "technical",
    difficulty: "advanced"
  },
  {
    id: "qa-3",
    question: "When will concentrated liquidity be available on ErgoDEX?",
    answer: "Concentrated liquidity is planned for Q2 2024 as part of ErgoDEX V3. We're currently finalizing the mathematical models and UI/UX design. Beta testing will begin in late Q1 with selected partners.",
    responder: "ilya",
    call_id: "L3pQwE8zM5n",
    date: "2024-01-12",
    timestamp: "18:30",
    category: "projects",
    difficulty: "beginner"
  },
  {
    id: "qa-4",
    question: "Can I use AI tools to write ErgoScript?",
    answer: "Yes! GPT-4 and GitHub Copilot can assist with ErgoScript development. We've created specific prompts and training data to improve AI understanding of ErgoScript syntax. However, always verify the generated code as AI can make subtle errors in contract logic.",
    responder: "kushti",
    call_id: "H8uXsY6WP3s",
    date: "2024-01-16",
    timestamp: "28:15",
    category: "technical",
    difficulty: "intermediate"
  },
  {
    id: "qa-5",
    question: "What are the grant application requirements for Q1 2024?",
    answer: "Grant applications require: 1) Detailed project proposal, 2) Timeline with milestones, 3) Budget breakdown, 4) Team background, 5) Open-source commitment. Applications are reviewed monthly, with funding ranging from $5k to $50k depending on scope.",
    responder: "armeanio",
    call_id: "N5sWxR7mL3y",
    date: "2024-01-08",
    timestamp: "41:20",
    category: "governance",
    difficulty: "beginner"
  }
];

export const mockDecisions: Decision[] = [
  {
    id: "dec-1",
    type: "decision",
    title: "Rosen Bridge V2 will use threshold signatures instead of multisig",
    content: "After extensive security analysis and community feedback, we've decided to implement threshold signatures (k-of-n) for Rosen Bridge V2. This provides better security guarantees while maintaining decentralization.",
    context: "Security vs decentralization tradeoffs discussed in depth during the security architecture review.",
    speaker: "kushti",
    date: "2024-01-14",
    call_id: "K9vYtR4mN2x",
    topic: "rosen-bridge",
    significance: "major",
    status: "active"
  },
  {
    id: "dec-2",
    type: "commitment",
    title: "Release Rosen Bridge security audit report",
    content: "Full security audit report from CertiK will be published publicly, including all findings and remediations.",
    speaker: "armeanio",
    date: "2024-01-14",
    call_id: "K9vYtR4mN2x",
    topic: "rosen-bridge",
    significance: "major",
    status: "pending",
    owner: "armeanio",
    timeline: "Q1 2024"
  },
  {
    id: "dec-3",
    type: "open_question",
    title: "How to incentivize watcher nodes long-term?",
    content: "Need to determine sustainable tokenomics for Rosen Bridge watcher nodes. Current fee model may not be sufficient for long-term security.",
    context: "Sustainability of bridge security model remains an open challenge.",
    speaker: "community",
    date: "2024-01-14",
    call_id: "K9vYtR4mN2x",
    topic: "rosen-bridge",
    significance: "major",
    status: "unresolved"
  },
  {
    id: "dec-4",
    type: "decision",
    title: "ErgoDEX V3 will launch with 4 fee tiers",
    content: "Based on analysis of other DEXs and Ergo's unique characteristics, V3 will launch with 0.05%, 0.3%, 1%, and 2% fee tiers for different volatility profiles.",
    speaker: "ilya",
    date: "2024-01-12",
    call_id: "L3pQwE8zM5n",
    topic: "ergodex",
    significance: "major",
    status: "active"
  },
  {
    id: "dec-5",
    type: "commitment",
    title: "Launch ErgoScript AI assistant",
    content: "Develop and release an AI-powered ErgoScript assistant trained on all existing contracts and documentation.",
    speaker: "kushti",
    date: "2024-01-16",
    call_id: "H8uXsY6WP3s",
    topic: "development",
    significance: "minor",
    status: "pending",
    owner: "kushti",
    timeline: "Q2 2024"
  }
];

export const mockTopics: Topic[] = [
  {
    slug: "rosen-bridge",
    name: "Rosen Bridge",
    description: "Cross-chain bridge for Ergo enabling interoperability with other blockchains",
    mention_count: 47,
    call_count: 23,
    key_speakers: ["kushti", "armeanio", "morphic"],
    related_topics: ["bridges", "security", "cross-chain", "cardano"]
  },
  {
    slug: "ergodex",
    name: "ErgoDEX",
    description: "Decentralized exchange built on Ergo with advanced AMM features",
    mention_count: 38,
    call_count: 19,
    key_speakers: ["ilya", "oskin"],
    related_topics: ["defi", "amm", "liquidity", "trading"]
  },
  {
    slug: "ergoscript",
    name: "ErgoScript",
    description: "Ergo's smart contract language based on Sigma protocols",
    mention_count: 62,
    call_count: 31,
    key_speakers: ["kushti", "greenhat"],
    related_topics: ["smart-contracts", "development", "sigma-protocols"]
  },
  {
    slug: "governance",
    name: "Governance",
    description: "Ergo's decentralized governance model and decision-making processes",
    mention_count: 29,
    call_count: 15,
    key_speakers: ["armeanio", "qx"],
    related_topics: ["foundation", "voting", "proposals", "treasury"]
  },
  {
    slug: "defi",
    name: "DeFi",
    description: "Decentralized finance applications and protocols on Ergo",
    mention_count: 44,
    call_count: 22,
    key_speakers: ["ilya", "kushti", "oskin"],
    related_topics: ["ergodex", "lending", "yield", "liquidity"]
  }
];

export const mockSpeakers: Speaker[] = [
  {
    name: "kushti",
    role: "Core Developer",
    bio: "Ergo Platform founder and lead developer. Expert in cryptography and blockchain protocols.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop",
    stats: {
      calls: 234,
      decisions: 45,
      topics: 28,
      quotes: 156
    },
    top_topics: ["ergoscript", "rosen-bridge", "development", "security"]
  },
  {
    name: "armeanio",
    role: "Ergo Foundation",
    bio: "Ergo Foundation board member focused on ecosystem growth and partnerships.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop",
    stats: {
      calls: 156,
      decisions: 28,
      topics: 19,
      quotes: 89
    },
    top_topics: ["governance", "foundation", "partnerships", "grants"]
  },
  {
    name: "ilya",
    role: "ErgoDEX Lead",
    bio: "Lead developer of ErgoDEX, specializing in DeFi protocols and AMM design.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    stats: {
      calls: 87,
      decisions: 19,
      topics: 12,
      quotes: 64
    },
    top_topics: ["ergodex", "defi", "amm", "liquidity"]
  },
  {
    name: "qx",
    role: "Community Manager",
    bio: "Community engagement and education lead, organizing events and content.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    stats: {
      calls: 198,
      decisions: 12,
      topics: 24,
      quotes: 102
    },
    top_topics: ["community", "education", "marketing", "events"]
  }
];

export const mockStats = {
  total_calls: 622,
  total_qa: 4847,
  total_decisions: 312,
  total_speakers: 15,
  total_hours: 400,
  last_updated: new Date().toISOString()
};
