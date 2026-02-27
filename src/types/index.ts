// Index file schema
export interface IndexStats {
  total_calls: number;
  total_qa: number;
  total_decisions: number;
  total_speakers: number;
  total_topics: number;
  total_hours: number;
}

export interface Index {
  generated: string;
  stats: IndexStats;
  calls: CallSummary[];
}

// Call summary from index.json (lightweight)
export interface CallSummary {
  id: string;
  file_prefix: string;
  date: string;
  title: string;
  type: 'community_chat' | 'ama' | 'tutorial' | 'special_event';
  speakers: string[];
  duration_minutes: number;
  thumbnail: string;
  stats: {
    topics: number;
    qa_pairs: number;
    decisions: number;
    commitments: number;
  };
  files: string[];
}

// Full call metadata from {prefix}_meta.json
export interface CallMeta {
  id: string;
  file_prefix: string;
  date: string;
  title: string;
  type: 'community_chat' | 'ama' | 'tutorial' | 'special_event';
  duration_minutes: number;
  speakers: string[];
  topics: string[];
  stats: {
    topics: number;
    qa_pairs: number;
    decisions: number;
    commitments: number;
  };
  media: {
    youtube?: string;
    spotify?: string;
    apple_podcasts?: string;
    anchor?: string;
  };
  thumbnail: string;
}

// QA pair from {prefix}_qa.json
export interface QAPair {
  qa_id: number;
  timestamp: string;
  question: string;
  answer: string;
  asker?: string;
  responder: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  related_terms?: string[];
}

export interface QAData {
  call_date: string;
  qa_pairs: QAPair[];
}

// Decision from {prefix}_decisions.json
export interface Decision {
  id: number;
  timestamp: string;
  decision: string;
  speaker: string;
  context: string;
  topic: string;
  significance: 'major' | 'minor';
  quote?: string;
}

export interface Commitment {
  id: number;
  timestamp?: string;
  commitment: string;
  owner: string;
  timeline: string;
  topic: string;
  quote?: string;
}

export interface OpenQuestion {
  id: number;
  timestamp?: string;
  question: string;
  context: string;
  topic: string;
  raised_by: string;
}

export interface KeyFact {
  id: number;
  timestamp: string;
  fact: string;
  speaker: string;
  topic: string;
}

export interface DecisionsData {
  call_date: string;
  call_title?: string;
  decisions: Decision[];
  commitments: Commitment[];
  open_questions: OpenQuestion[];
  reversals_or_updates?: any[];
  key_facts?: KeyFact[];
}

// Topic from topics.json
export interface Topic {
  slug: string;
  name: string;
  description: string;
  mention_count: number;
  call_count: number;
  key_speakers: string[];
  related_topics: string[];
}

// Speaker from speakers.json
export interface Speaker {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  stats: {
    calls: number;
    decisions: number;
    topics: number;
    quotes: number;
  };
  top_topics: string[];
}

// Aggregated decision for UI display
export interface AggregatedDecision {
  id: string;
  type: 'decision' | 'commitment' | 'open_question';
  title: string;
  content: string;
  context?: string;
  speaker: string;
  date: string;
  call_id: string;
  call_title: string;
  file_prefix: string;
  topic: string;
  significance: 'major' | 'minor';
  status: 'active' | 'pending' | 'completed' | 'unresolved';
  owner?: string;
  timeline?: string;
  quote?: string;
}

// ---------------------------------------------------------------------------
// Telegram chat archive types
// ---------------------------------------------------------------------------

export type TelegramChannel = 'general' | 'developer';

// Entry in telegram_index.json → {channel}.weeks[]
export interface TelegramWeekEntry {
  period: string;           // e.g. "2024-W01"
  month: string;            // e.g. "2024-01"
  message_count: number;
  summary_file: string;     // relative path under public/data/telegram/
  topics_file: string | null;
  top_topics: string[];     // first 3 topic titles
  sibling_parts: string[];  // other parts of the same base week (e.g. W31a, W31b)
}

// Entry in telegram_index.json → {channel}.months[]
export interface TelegramMonthEntry {
  period: string;           // e.g. "2024-01"
  summary_file: string;
  weeks: string[];          // week labels belonging to this month
  total_messages: number;
}

export interface TelegramChannelIndex {
  weeks: TelegramWeekEntry[];
  months: TelegramMonthEntry[];
}

export interface TelegramIndex {
  general: TelegramChannelIndex;
  developer: TelegramChannelIndex;
}

// Entry in telegram_search_index.json
export interface TelegramSearchEntry {
  id: string;               // "{channel}__{period}"
  channel: TelegramChannel;
  period: string;
  type: 'weekly' | 'monthly';
  month?: string;           // only for weekly entries
  message_count?: number;
  topics: string[];
  key_terms: string[];
  participants: string[];
  excerpt: string;
}

// telegram_topics_index.json
export interface TelegramCategoryData {
  label: string;
  topic_count: number;
  channels: TelegramChannel[];
  key_terms: string[];
  major_topics: { title: string; week: string; channel: TelegramChannel }[];
}

export interface TelegramTopicsIndex {
  categories: Record<string, TelegramCategoryData>;
  top_key_terms: { term: string; count: number }[];
}

// telegram_speakers.json — keyed by @username
export interface TelegramSpeakerStats {
  display_name: string;
  weeks_active: number;
  channels: TelegramChannel[];
  top_categories: string[];
  known_speaker: boolean;
}

// Lazily-fetched weekly topics file content
export interface TelegramTopicItem {
  title: string;
  category: string;
  key_terms: string[];
  participants: string[];
  significance: 'major' | 'minor';
}

export interface TelegramTopicsFile {
  chat: string;
  week: string;
  topics: TelegramTopicItem[];
  active_participants: string[];
  message_count: number;
}

// Aggregated QA for UI display
export interface AggregatedQA {
  id: string;
  question: string;
  answer: string;
  asker?: string;
  responder: string;
  call_id: string;
  call_title: string;
  file_prefix: string;
  date: string;
  timestamp?: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
