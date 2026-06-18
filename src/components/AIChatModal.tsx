import React, { useState, useEffect } from 'react';

interface AIChatModalProps {
  open: boolean;
  onClose: () => void;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ open, onClose }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Mzati AI 👋 How can I help you today?";

  useEffect(() => {
    if (open) {
      setDisplayText('');
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 40);

      return () => clearInterval(interval);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white dark:bg-[#0a0f1a] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">Mzati AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-white/70 text-xs">Online</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-6 h-80 overflow-y-auto">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900 dark:text-white">Mzati AI</p>
              <div className="mt-1 p-3 bg-violet-50 dark:bg-violet-500/10 rounded-2xl rounded-tl-none">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-1 h-4 ml-1 bg-violet-500 animate-pulse" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 dark:border-white/10 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full border-0 focus:ring-2 focus:ring-violet-500 outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            <button className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full hover:scale-105 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatModal;