export interface Call {
  id: string;
  date: string;
  title: string;
  type: 'community_chat' | 'ama' | 'tutorial' | 'special_event';
  duration_minutes: number;
  speakers: string[];
  topics: string[];
  summary: string;
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

export interface QAPair {
  id: string;
  question: string;
  answer: string;
  asker?: string;
  responder: string;
  call_id: string;
  date: string;
  timestamp?: string;
  category: 'technical' | 'beginner' | 'governance' | 'projects' | 'general';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Decision {
  id: string;
  type: 'decision' | 'commitment' | 'open_question' | 'reversal';
  title: string;
  content: string;
  context?: string;
  speaker: string;
  date: string;
  call_id: string;
  topic: string;
  significance: 'major' | 'minor';
  status: 'active' | 'superseded' | 'pending' | 'completed' | 'unresolved';
  owner?: string;
  timeline?: string;
}

export interface Topic {
  slug: string;
  name: string;
  description: string;
  mention_count: number;
  call_count: number;
  key_speakers: string[];
  related_topics: string[];
}

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
