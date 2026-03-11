import { useState, useEffect, useRef } from 'react';

export default function StoryModeHint() {
  const [text, setText] = useState("psst... there's a story mode ✨");
  const revertTimerRef = useRef(null);
  const highlightTimerRef = useRef(null);

  const handleClick = () => {
    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current);
    }
    if (highlightTimerRef.current) {
      clearTimeout(highlightTimerRef.current);
    }

    const trigger = document.querySelector('[data-story-trigger]');

    if (trigger) {
      setText("Long-press the pitchfork button in the navigation bar to enter Story Mode ✨");

      trigger.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });

      setTimeout(() => {
        trigger.classList.add(
          'ring-4',
          'ring-offset-2',
          'ring-rose-700',
          'animate-pulse',
          'rounded-lg'
        );

        highlightTimerRef.current = setTimeout(() => {
          trigger.classList.remove(
            'ring-4',
            'ring-offset-2',
            'ring-rose-700',
            'animate-pulse',
            'rounded-lg'
          );
        }, 3200);
      }, 100);

      setTimeout(() => {
        if (trigger && typeof trigger.focus === 'function') {
          try {
            trigger.focus();
          } catch {
          }
        }
      }, 400);

      revertTimerRef.current = setTimeout(() => {
        setText("psst... there's a story mode ✨");
      }, 6000);
    } else {
      setText("Look for the 🎬 Story Mode button in the header.");

      revertTimerRef.current = setTimeout(() => {
        setText("psst... there's a story mode ✨");
      }, 6000);
    }
  };

  useEffect(() => {
    return () => {
      if (revertTimerRef.current) {
        clearTimeout(revertTimerRef.current);
      }
      if (highlightTimerRef.current) {
        clearTimeout(highlightTimerRef.current);
      }
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      aria-label="Reveal how to enter Story Mode"
      className="text-xs italic transition-opacity duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-1"
      style={{
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        color: 'var(--asu-text-muted)'
      }}
    >
      {text}
    </button>
  );
}

