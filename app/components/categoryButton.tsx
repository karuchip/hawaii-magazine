import { Button, Box} from "@mui/material"
import { Dispatch, SetStateAction } from "react"

type Props = {
  selectCategory : string| null
  setSelectCategory : Dispatch<SetStateAction<string | null>>
}

export type Category = {
  label: string
  value: string
  color: string
  selectedColor: string
}

export const categoryList: Category[] = [
  { label: "🌺 All",       value: "",       color: "#ef9a9a",   selectedColor: "#e57373" },
  { label: "🍽️ 食べ物",     value: "food",     color: "#a5d6a7",   selectedColor: "#81c784" },
  { label: "🏄‍♀️ アクティビティ", value: "activity", color: "#66c7d9",   selectedColor: "#26c6da" },
  { label: "🛍️ 買い物",     value: "shopping", color: "#ffd54f",   selectedColor: "#fbc02d" },
  { label: "🌴 場所",       value: "place",    color: "#ce93d8",   selectedColor: "#ba68c8"  },
  { label: "👑 文化",       value: "culture",  color: "#b39ddb",   selectedColor: "#9575cd"  },
  { label: "🐬 歴史",       value: "history",  color: "#EAB0D2",   selectedColor: "#e48ab8"  },
  { label: "🌈 自然",       value: "nature",   color: "#80cbc4",   selectedColor: "#4db6ac"  },
  { label: "🍍 その他",     value: "other",    color: "#ffab91",   selectedColor: "#ff8a65"  }
]


const CategoryButtons = ({selectCategory, setSelectCategory}:Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "30px"
      }}
    >
      {categoryList.map((cat, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={()=> setSelectCategory(cat.value)}
          sx={{
            backgroundColor: selectCategory === cat.value ? cat.selectedColor : cat.color,
            color: "#ffffff",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            borderRadius: "12px",
            textTransform: "none",
            opacity: selectCategory === cat.value ? 1 : 0.8,
            "&:hover": {
              backgroundColor: cat.color,
              opacity: 0.9,
            }
          }}
        >
          {cat.label}
        </Button>
      ))}
    </Box>
  )
}
export default CategoryButtons
