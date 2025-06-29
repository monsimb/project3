import React, { createContext, useState, useContext } from 'react';

type SeenCombinationsContextType = {
  seenCombinations: string[];
  markAsSeen: (combination: string) => void;
};

const SeenCombinationsContext = createContext<SeenCombinationsContextType | undefined>(undefined);

export const SeenCombinationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [seenCombinations, setSeenCombinations] = useState<string[]>([]);

  const markAsSeen = (combination: string) => {
    if (!seenCombinations.includes(combination)) {
      setSeenCombinations([...seenCombinations, combination]);
    }
  };

  return (
    <SeenCombinationsContext.Provider value={{ seenCombinations, markAsSeen }}>
      {children}
    </SeenCombinationsContext.Provider>
  );
};

export const useSeenCombinations = () => {
  const context = useContext(SeenCombinationsContext);
  if (!context) {
    throw new Error('useSeenCombinations must be used within a SeenCombinationsProvider');
  }
  return context;
};