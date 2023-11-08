import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './infoBox.tsx';
import {React, ReactNode} from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {

  // renders Infobox based on how many goals. if there are too many goals it will give a warning to slow down

  if (goals.length === 0) {
    return (
      <InfoBox mode="Hint">
        <p>Start adding goals!</p>
      </InfoBox>
    );
  }

let warningBox: ReactNode;

if (goals.length > 5){
  return(
    <InfoBox mode="Error" severity='high'>
      <p>Too many goals! Slow down!</p>
    </InfoBox>
  )
  

}


  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}
