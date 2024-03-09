import * as React from 'react';

export type SystemPurposeId = 'Generic' | 'Custom' | 'DeveloperPreview' | 'Executive' | 'Scientist';

export const defaultSystemPurposeId: SystemPurposeId = 'Generic';

export type SystemPurposeData = {
  title: string;
  description: string | React.JSX.Element;
  systemMessage: string;
  systemMessageNotes?: string;
  symbol: string;
  imageUri?: string;
  examples?: string[];
  highlighted?: boolean;
  call?: { starters?: string[] };
  voices?: { elevenLabs?: { voiceId: string } };
};

export const SystemPurposes = {
  Generic: {
    title: 'General Agent',
    description: 'Call Expert Agents for specific tasks',
    systemMessage: '',
    symbol: '🤖',
    examples: [
      '/browse https://monstermsp.com',
      'introduce yourself',
      '/browse https://monstermsp.com',
      'introduce yourself',
    ],
    call: { starters: [
      "Ready to skyrocket. What's up?",
      'Growth hacker on line. What\'s the plan?',
      'Marketing whiz ready.',
      'Hey.'
    ] },
    voices: { elevenLabs: { voiceId: 'EXAVITQu4vr4xnSDxMaL' } },
  },
  Custom: {
    title: 'Custom',
    description: 'Define the persona:',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nCurrent date: {{Today}}',
    symbol: '✨',
    call: { starters: ['What\'s the task?', 'What can I do?', 'Ready for your task.', 'Yes?'] },
    voices: { elevenLabs: { voiceId: 'flq6f7yk4E4fJM5XTYuZ' } },
  },
};
