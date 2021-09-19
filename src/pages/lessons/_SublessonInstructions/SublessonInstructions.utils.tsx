import {
  ChallengeDataFragment,
  SublessonInstructionsDataFragment,
} from 'src/generated/graphql';

/*
 * Because the CMS does not allow for proper union types we
 * need to have a separate field for each possible type when
 * entering it in the CMS. However, once we get the data we can
 * convert it to the Challenge union type
 */
export const getChallengesFromSublessonChallenges = (
  sublessonChallenges: SublessonInstructionsDataFragment['challenges'],
): Array<ChallengeDataFragment> => {
  return sublessonChallenges.map((sublessonChallenge) => {
    if (sublessonChallenge.codeChallenge) {
      return sublessonChallenge.codeChallenge;
    } else if (sublessonChallenge.multipleChoiceChallenge) {
      return sublessonChallenge.multipleChoiceChallenge;
    }

    throw new Error('sublesson challenge did not contain any challenges');
  });
};
