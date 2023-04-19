/* 
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
*/
export function electionsWinners(votes: number[], k: number): number {
  let inTheRunning = 0;
  const mostVotes = Math.max(...votes);
  const sortedVotes = votes.sort((a, b) => b - a);

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) return 1;

  votes.forEach((voteCount) => {
    if (mostVotes - voteCount < k) inTheRunning++;
  });

  return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
