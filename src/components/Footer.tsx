import React from 'react';
import { Github, Globe, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ergo-dark border-t border-ergo-orange/20 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-ergo-muted">
              Built by the Ergo community
            </p>
            <p className="font-mono text-xs text-ergo-muted/70 mt-1">
              Data updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/cannonQ/ergo-transcripts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-ergo-muted hover:text-ergo-orange transition-colors p-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://ergoblockchain.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ergo website"
              className="text-ergo-muted hover:text-ergo-orange transition-colors p-1"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/mAd6bMAjsR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord community"
              className="text-ergo-muted hover:text-ergo-orange transition-colors p-1"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/ergoplatform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram channel"
              className="text-ergo-muted hover:text-ergo-orange transition-colors p-1"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
