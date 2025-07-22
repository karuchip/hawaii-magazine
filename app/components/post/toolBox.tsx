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
    <Card className="toolBoxContainer"
      sx={{
        boxShadow: "0px 4px 8px rgba(0,0,0,0.4)",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(6px)"
        }}>
      <div className="toolBoxContent">

        {/* フィルタークリア */}
        <div  className="toolBoxClear">
          <button onClick={handleClearChange}>
            条件をクリア
          </button>
        </div>

        {/* 検索 */}
        <div className="toolBoxSearch">
          <p>検索</p>
          <form onSubmit={handleSearchSubmit}>
            <TextField
              label="キーワードを入力"
              variant="standard"
              value={keyWord}
              onChange={(e) => setKeyWord(e.target.value)}
            />
            <button type="submit" className="toolBoxSearchBtn"><SearchIcon/></button>
          </form>
        </div>

        <div className="toolBoxSortFilter">
          {/* 並び替え */}
          <Box sx={{ width: "fit-content", mb:4}}>
            <p>並び替え</p>
            <SortPost sortType={searchParams.get('sort') || "new"} setSortType={handleSortChange} />
          </Box>

          {/* カテゴリー */}
          <Box sx={{ width: "fit-content", mb: 4 }}>
            <p>ソート</p>
            <CategoryButtons categoryType={searchParams.get('category') || "all"} setCategoryType={handleCategoryChange}/>
          </Box>
        </div>

      </div>
    </Card>
  )
}

export default ToolBox
