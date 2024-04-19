/**
 * Function to merge two arrays of objects by specified id (or another common value),
 * which means that the objects will be merged if on both objects there is the same ID,
 * otherwise they'll be considered unique objects.
 *
 * TODO namings could be improved
 */
export function mergeTwoArraysByKeyValue<
  T extends Record<keyof T, T[keyof T]>,
  U extends Record<keyof U, U[keyof U]>,
>(arrOne: T[], arrTwo: U[], firstIdKey: keyof T, secondIdKey: keyof U) {
  const result = new Map<keyof (T & U), T & U>();

  const largestLength = Math.max(arrOne.length, arrTwo.length);

  //N.B I'm doing it like this in a not that pretty way, to reduce the time complexity to O(n)
  for (let i = 0; i < largestLength; i++) {
    const currFromOne = arrOne[i] || {};
    const currFromTwo = arrTwo[i] || {};
    const firstId = currFromOne[firstIdKey];
    const secondId = currFromTwo[secondIdKey];

    if (result.has(firstId)) {
      result.set(firstId, {
        ...(result.get(firstId) as U),
        ...currFromOne,
      });
    } else if (firstId) {
      result.set(firstId, currFromOne as T & U);
    }

    if (result.has(secondId)) {
      result.set(secondId, {
        ...(result.get(secondId) as T),
        ...currFromTwo,
      });
    } else if (secondId) {
      result.set(secondId, currFromTwo as T & U);
    }
  }

  return result;
}

export function clsx(array: Array<string | undefined | null | false>) {
  return array.filter(Boolean).join(" ");
}
