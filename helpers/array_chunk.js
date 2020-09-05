export default function (inputArray, size) {
  return inputArray.reduce((credits, item, index) => {
    const chunkIdx = Math.floor(index / size)

    if (!credits[chunkIdx]) {
      credits[chunkIdx] = []
    }

    credits[chunkIdx].push(item)

    return credits
  }, [])
}
