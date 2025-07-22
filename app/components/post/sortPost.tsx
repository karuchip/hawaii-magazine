import {Box, Button, Select, MenuItem} from "@mui/material"

type Props = {
  sortType: string,
  setSortType: (value: string) => void,
}

export const SortPost = ({sortType, setSortType}: Props)=>{
  return (
    <Select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
    >
      <MenuItem value="new">新しい順</MenuItem>
      <MenuItem value="old">古い順</MenuItem>
      <MenuItem value="likes">人気順</MenuItem>
    </Select>
  )
}
export default SortPost
