import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../../../utils/getData";
import { useDebounce } from "../../../../utils/useDebounceHook";
import InputList from "./InputList";

function CustomInput() {
  const [query, setQuery] = useState("");
  const [listing, setListing] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchQuery = useDebounce(query, 500);

  useEffect(() => {
    setListing([]);
    if (searchQuery || query.length < 0) searchItems();
    async function searchItems() {
      setListing([]);
      const data = await getData(searchQuery);
      setListing(data);
    }
  }, [searchQuery]);
  const handleValue = (e: any) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: ["150px", "450px", "600px", "800px", "1400px"],
          position: "relative",
        }}
      >
        <TextField
          fullWidth
          sx={{
            [`& .MuiOutlinedInput-input`]: { padding: "5px 8px" },
          }}
          placeholder="Search..."
          value={query}
          onChange={(e) => handleValue(e)}
        />
        <InputList
          showDropdown={showDropdown}
          data={listing}
          setShowDropdown={setShowDropdown}
        />
      </Box>
    </>
  );
}

export default CustomInput;
