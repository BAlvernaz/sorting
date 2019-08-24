function bubbleSort(array) {
  let lcounter = 0
  let rcounter = 1
  const lidx = array[lcounter]
  const ridx = array[rcounter]
  if(compare(lidx, ridx)) {
    swap(array,lidx, ridx)
  }
  lcounter ++
  rcounter ++
  return array
}

function compare(lidx, ridx) {
  if(lidx > ridx) {
    return true
  }
  return false
}

function swap (array,lidx, ridx) {
  const l = array[lidx]
  const r = array[ridx]
  console.log(array, lidx, ridx)
}

bubbleSort([2,1])
