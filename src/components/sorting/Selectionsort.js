function Selectionsort({ array, setArray, delay }) {
  const selectionsort = async () => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        const comparedbars = [...array];
        comparedbars[i] += 500;
        comparedbars[j] += 500;
        setArray(comparedbars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (array[i] > array[j]) {
          const temp = array[j];
          array[j] = array[i];
          array[i] = temp;

          // Highlight the swapped bars
          const swappedBars = [...array];
          swappedBars[j] += 1000;
          swappedBars[i] += 1000;
          setArray(swappedBars);
          await new Promise((resolve) => setTimeout(resolve, delay));

          // Update the array state
          setArray([...array]);
          await new Promise((resolve) => setTimeout(resolve, delay));

          setArray([...array]);
        }
        setArray(array);
      }
    }
  };

  return (
    <div>
      <button onClick={selectionsort}>Selection sort</button>
    </div>
  );
}
export default Selectionsort;
