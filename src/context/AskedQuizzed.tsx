import { createContext, useState } from 'react';
import { AskedQuiz } from '../types/types';


type InitialType = {
    allAskedQuizzes: AskedQuiz[],
    totalQuizzes: number,
    setTotalQuizzes:(totalQuizzes: number) => void,
    addAskedQuiz: (askedQuiz: AskedQuiz) => void,
    removeAllAskedQuiz: () => void,
    // removeAskedQuiz: (uuid: string) => void,
    // updateAskedQuiz: (uuid: string, updatedQuiz: AskedQuiz) => void,
}

export const AskedQuizContext = createContext<InitialType>({
    allAskedQuizzes: [],
    totalQuizzes: 0,
    setTotalQuizzes: () => {},
    addAskedQuiz: () => {},
    removeAllAskedQuiz: () => undefined
    // removeAskedQuiz: () => {},
    // updateAskedQuiz: () => {},
});

export const AskedQuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [allAskedQuizzes, setAllAskedQuizzes] = useState<AskedQuiz[]>([]);
    const [totalQuizzes, setTotalQuizzes] = useState(0);

    const addAskedQuiz = (askedQuiz: AskedQuiz) => {
        setAllAskedQuizzes([...allAskedQuizzes, askedQuiz]);
        // setTotalQuizzes(totalQuizzes + 1);
    }

    const removeAllAskedQuiz = () => {
        setAllAskedQuizzes([]);
    }
    return (
        <AskedQuizContext.Provider value={{ allAskedQuizzes:allAskedQuizzes, totalQuizzes:totalQuizzes, setTotalQuizzes:setTotalQuizzes, addAskedQuiz:addAskedQuiz, removeAllAskedQuiz:removeAllAskedQuiz}} >
            {children}
        </AskedQuizContext.Provider>
    )

}