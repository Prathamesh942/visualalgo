function InsertionSort({ array, setArray, delay }) {
  const insertionSort = async () => {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > key) {
        const comparedArray = [...array];
        // comparedArray[i] += 500;
        comparedArray[j] += 500;
        comparedArray[j + 1] += 500;
        setArray(comparedArray);
        await new Promise((resolve) => setTimeout(resolve, delay));

        array[j + 1] = array[j];
        j--;

        const swappedArray = [...array];
        swappedArray[j + 1] += 1000;
        setArray(swappedArray);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      array[j + 1] = key;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  };

  return (
    <div>
      <button onClick={insertionSort}>Insertion Sort</button>
    </div>
  );
}

export default InsertionSort;
