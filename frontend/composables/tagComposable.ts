import type { Tag } from "~/types/Tag.interface"

function getEmptyTag(): Tag {
  return {
    id: crypto.randomUUID(),
    name: '',
    color: '#000000'
  }
}

export {
  getEmptyTag
}