import { Card, TextField, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import CategoryButtons from "@/app/components/post/categoryButton"
import SortPost from "./sortPost"

type Props = {
  keyWord: string;
  setKeyWord: (value: string)=>void;
  handleClearChange: ()=> void;
  handleSearchSubmit: (e:React.FormEvent<HTMLFormElement>)=> void;
  handleSortChange: (newSort: string)=>void;
  handleCategoryChange: (value: string)=>void;
  searchParams: URLSearchParams;
}

const ToolBox = ({
  keyWord,
  setKeyWord,
  handleClearChange,
  handleSearchSubmit,
  handleSortChange,
  handleCategoryChange,
  searchParams,

}:Props) => {

  return (
      <div className="toolBoxContainer">

        <div className="toolBoxContent">
          {/* 検索 */}
          <div className="toolBoxSearch">
            <form onSubmit={handleSearchSubmit}>
              <TextField
                label="キーワードを入力して検索"
                variant="outlined"
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
              />
              <button type="submit" className="toolBoxSearchBtn"><SearchIcon/>検索</button>
            </form>
          </div>

          {/* 並び替え */}
          <div className="toolBoxSortFilterContent">
            <Box sx={{ width: "fit-content", mb:4}}>
              <p style={{marginLeft:"30px"}}>並び替え</p>
              <SortPost sortType={searchParams.get('sort') || "new"} setSortType={handleSortChange} />
            </Box>

            {/* カテゴリー */}
            <Box sx={{ width: "fit-content", mb: 4 }}>
              <p style={{marginLeft:"50px"}}>カテゴリー</p>
              <CategoryButtons categoryType={searchParams.get('category') || "all"} setCategoryType={handleCategoryChange}/>
            </Box>
          </div>
        </div>

        {/* フィルタークリア */}
        <div className="toolBoxClear">
          <button onClick={handleClearChange}>
            条件をクリア
          </button>
        </div>

      </div>
  // </Card>
  )
}

export default ToolBox
