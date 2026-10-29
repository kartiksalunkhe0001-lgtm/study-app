import type { Topic } from '../types'

export const TOPICS: Topic[] = [
  { id: 't1', name: 'Thermodynamics', accuracy: 42, status: 'red', lastReviewed: '3 days ago', nextReview: 'Today', reviewsDone: 2, bankKey: 'thermodynamics' },
  { id: 't2', name: 'Rotational Dynamics', accuracy: 51, status: 'red', lastReviewed: '5 days ago', nextReview: 'Today', reviewsDone: 1 },
  { id: 't3', name: 'Optics', accuracy: 68, status: 'yellow', lastReviewed: '2 days ago', nextReview: 'Day 2', reviewsDone: 4 },
  { id: 't4', name: 'Chemical Bonding', accuracy: 74, status: 'yellow', lastReviewed: '1 day ago', nextReview: 'Day 3', reviewsDone: 3 },
  { id: 't5', name: 'Electrostatics', accuracy: 63, status: 'yellow', lastReviewed: '4 days ago', nextReview: 'Day 2', reviewsDone: 2 },
  { id: 't6', name: 'Vectors', accuracy: 92, status: 'green', lastReviewed: '6 days ago', nextReview: 'Day 7', reviewsDone: 5 },
  { id: 't7', name: 'Kinematics', accuracy: 88, status: 'green', lastReviewed: '5 days ago', nextReview: 'Day 6', reviewsDone: 4 },
  { id: 't8', name: 'Atomic Structure', accuracy: 81, status: 'green', lastReviewed: '3 days ago', nextReview: 'Day 5', reviewsDone: 3 },
  { id: 't9', name: 'Organic Reactions', accuracy: 84, status: 'green', lastReviewed: '2 days ago', nextReview: 'Day 4', reviewsDone: 3 },
  { id: 't10', name: 'Modern Physics', accuracy: 77, status: 'yellow', lastReviewed: '1 day ago', nextReview: 'Day 3', reviewsDone: 2 },
]
