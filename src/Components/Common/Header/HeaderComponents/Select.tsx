import { useNavigate } from "react-router-dom";
import AsyncSelect from "react-select/async";
import { instance } from "../../../../API/instance/instance";
import { AllProducts } from "../../../../types/interfaces";
import useDebounce from "../../../../Hooks/useDebounce";
import debounce from "lodash.debounce";

const getData = async (title: string, cb) => {
  const response = await instance.get("/products/", {
    params: {
      title,
    },
  });
  cb(response.data);
  return response.data;
};

function Select() {
  const navigate = useNavigate();
  const loadOptions = debounce(getData, 500);

  const colorStyles = {
    container: (styles: any) => ({
      ...styles,
      width: "160ch",
      marginLeft: "50px",
    }),
    option: (styles: any) => {
      return {
        ...styles,
        ":hover": {
          backgroundColor: "lightblue",
        },
      };
    },
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      placeholder="Search..."
      styles={colorStyles}
      getOptionLabel={(option: AllProducts) => option.title}
      getOptionValue={(option: AllProducts) => String(option.id)}
      onChange={(value: AllProducts) => navigate(`/products/${value.id}`)}
    />
  );
}

export default Select;
