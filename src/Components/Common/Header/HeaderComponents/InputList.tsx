import { List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InputList({ data, showDropdown, setShowDropdown }) {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    if (showDropdown) {
      navigate(`/products/${id}`);
      setShowDropdown(false);
    }
  };

  return (
    <>
      {showDropdown ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: ["48px"],
            left: "0",
            zIndex: "999",
            maxHeight: "350px",
            overflowY: "scroll",
            overflowX: "hidden",
            width: ["250px", "450px", "600px", "800px", "1400px"],
          }}
        >
          {data?.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                background: "#fff",
                width: ["250px", "450px", "600px", "800px", "1400px"],
              }}
              onClick={() => handleClick(item.id)}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  borderBottom: "1px solid rgba(0,0,0, 0.2)",
                  [`& :hover`]: { background: "lightblue", cursor: "pointer" },
                }}
              />
            </ListItem>
          ))}
        </List>
      ) : null}
    </>
  );
}

export default InputList;
