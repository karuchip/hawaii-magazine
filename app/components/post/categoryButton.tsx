import { Select, MenuItem} from "@mui/material"


type Props = {
  categoryType: string,
  setCategoryType: (value: string) => void,
}

export type Category = {
  label: string
  value: string
  color: string
  selectedColor: string
}

export const categoryList: Category[] = [
  { label: "🌺 すべて",       value: "all",       color: "#ef9a9a",   selectedColor: "#e57373" },
  { label: "🍽️ 食べ物",     value: "food",     color: "#a5d6a7",   selectedColor: "#81c784" },
  { label: "🏄‍♀️ アクティビティ", value: "activity", color: "#66c7d9",   selectedColor: "#26c6da" },
  { label: "🛍️ 買い物",     value: "shopping", color: "#ffd54f",   selectedColor: "#fbc02d" },
  { label: "🌈 場所",       value: "place",    color: "#ce93d8",   selectedColor: "#ba68c8"  },
  { label: "👑 文化",       value: "culture",  color: "#b39ddb",   selectedColor: "#9575cd"  },
  { label: "🌴 歴史",       value: "history",  color: "#EAB0D2",   selectedColor: "#e48ab8"  },
  { label: "🌋 自然",       value: "nature",   color: "#80cbc4",   selectedColor: "#4db6ac"  },
  { label: "🐬 その他",     value: "other",    color: "#ffab91",   selectedColor: "#ff8a65"  }
]


const CategoryButtons = ({categoryType, setCategoryType}:Props) => {
  return (
      <Select style={{width: "158px"}}
      value={categoryType}
      onChange={(e) => setCategoryType(e.target.value)}
      >
        <MenuItem value="all">すべて</MenuItem>
        <MenuItem value="food">食べ物</MenuItem>
        <MenuItem value="activity">アクティビティ</MenuItem>
        <MenuItem value="shopping">買い物</MenuItem>
        <MenuItem value="place">場所</MenuItem>
        <MenuItem value="culture">文化</MenuItem>
        <MenuItem value="history">歴史</MenuItem>
        <MenuItem value="nature">自然</MenuItem>
        <MenuItem value="other">その他</MenuItem>
      </Select>
  )
}
export default CategoryButtons
