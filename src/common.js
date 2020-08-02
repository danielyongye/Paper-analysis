import { demeList } from './constValue';
export function getPointScore(index, score) {
    const currentProject = demeList[index];
    const currentScore = currentProject.find(item => score > item.standard);
    return currentScore && currentScore.desc ? currentScore.desc : '';
}