type ChildProps = {
  count: number
  handleIncrease: () => void
}

function Child({ handleIncrease }: ChildProps) {
  return (
    <div className='border p-4 m-4 bg-blue-200'>
      <button onClick={handleIncrease}>Increase in Child</button>
    </div>
  )
}

export default Child
