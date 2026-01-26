import React, { useState } from 'react';
import { Flag, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface CorrectionButtonProps {
  pageType: string;
  pageTitle: string;
  className?: string;
}

export default function CorrectionButton({ pageType, pageTitle, className = '' }: CorrectionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentText.trim()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/correction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageType,
          pageTitle,
          pageUrl: window.location.href,
          currentText: currentText.trim(),
          correctedText: correctedText.trim(),
          notes: notes.trim(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          setIsOpen(false);
          setStatus('idle');
          setCurrentText('');
          setCorrectedText('');
          setNotes('');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-1.5 text-xs font-mono text-term-cyan hover:text-cyan-300 underline underline-offset-2 transition-colors ${className}`}
        title="Suggest a correction"
      >
        <Flag className="w-3.5 h-3.5" />
        Suggest correction
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => status !== 'submitting' && setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-ergo-dark border border-ergo-orange/30 rounded-lg w-full max-w-lg shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-ergo-orange/20">
              <h3 className="font-mono font-semibold text-ergo-orange">Suggest a Correction</h3>
              <button
                onClick={() => status !== 'submitting' && setIsOpen(false)}
                className="p-1 text-ergo-muted hover:text-ergo-light transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-term-green mx-auto mb-3" />
                <p className="font-mono text-term-green">Correction submitted!</p>
                <p className="text-sm text-ergo-muted mt-1">Thank you for helping improve the knowledge base.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                {/* Context */}
                <div className="bg-ergo-darker rounded p-3 text-xs font-mono text-ergo-muted">
                  <span className="text-ergo-orange">{pageType}</span> &mdash; {pageTitle}
                </div>

                {/* What's wrong */}
                <div>
                  <label className="block text-sm font-mono text-ergo-muted mb-1">
                    What's wrong? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={currentText}
                    onChange={e => setCurrentText(e.target.value)}
                    placeholder='e.g. "MuFinance" is misspelled'
                    className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm placeholder-ergo-muted/50 focus:outline-none focus:border-ergo-orange resize-none"
                    rows={2}
                    required
                  />
                </div>

                {/* What it should be */}
                <div>
                  <label className="block text-sm font-mono text-ergo-muted mb-1">
                    What should it be?
                  </label>
                  <textarea
                    value={correctedText}
                    onChange={e => setCorrectedText(e.target.value)}
                    placeholder='e.g. "MewFinance"'
                    className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm placeholder-ergo-muted/50 focus:outline-none focus:border-ergo-orange resize-none"
                    rows={2}
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-mono text-ergo-muted mb-1">
                    Additional notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Any extra context (optional)"
                    className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm placeholder-ergo-muted/50 focus:outline-none focus:border-ergo-orange resize-none"
                    rows={2}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm font-mono text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    Failed to submit. Please try again.
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    disabled={status === 'submitting'}
                    className="px-4 py-2 text-sm font-mono text-ergo-muted hover:text-ergo-light transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !currentText.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-ergo-orange/20 hover:bg-ergo-orange/30 border border-ergo-orange/50 rounded font-mono text-sm transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
