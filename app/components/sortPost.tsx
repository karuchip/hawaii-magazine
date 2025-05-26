import {Box, Button} from "@mui/material"
import { Dispatch, SetStateAction } from "react";

type Props = {
  sortType: string|null;
  setSortType: Dispatch<SetStateAction<string>>;
}
type Sort = {
  label: string;
  value: string;
}

const sortList :Sort[] = [
  { label: "投稿日が新しい順", value:"new"},
  { label: "投稿日が古い順", value:"old"},
  { label: "人気の投稿順", value:"likes"}
];

export const SortPost = ({sortType, setSortType}: Props)=>{
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
      {sortList.map((sort, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={()=> setSortType(sort.value)}

          sx={{
            backgroundColor: "#66c7d9",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            textTransform: "none",
            opacity: sortType === sort.value ? 1 : 0.6,
            "&:hover": {
              opacity: 0.9,
            }
          }}
        >
          {sort.label}
        </Button>
      ))}
    </Box>
  )
}
export default SortPost
