export function Example5() {
  const fruits = ['Banana', 'Apple', 'Orange'];
  return (
    <ul class="list">
      {fruits.map((item) =>
        <li>{item}</li>
      )}
    </ul>
  )
}