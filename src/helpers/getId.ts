/**
 * Generate dinamic id
 * @param minLen 
 * @param maxLen 
 * @returns 
 */
export const getId = (minLen: number, maxLen: number) =>
  +Array.from(
    {length: 0 | (Math.random() * (maxLen - minLen + 1) + minLen)},
    () => 0 | (Math.random() * 9 + 1),
  ).join('');
