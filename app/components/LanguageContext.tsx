import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'ja';
export type T = { en: string; ja: string };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: T) => string;
}

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: (k) => k.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <Ctx.Provider value={{ lang, setLang, t: (k) => k[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage() {
  return useContext(Ctx);
}
