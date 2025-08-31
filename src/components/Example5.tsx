export function Example5() {
  const fruits = ['Banana', 'Apple', 'Orange'];
  return (
    <ul className="list">
      {fruits.map((item) =>
        <li key={item}>{item}</li>
      )}
    </ul>
  )
}