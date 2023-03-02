import { Typography, Box, Card, CardContent, Button } from "@mui/material";
import { CustomLink } from "../../Styles";
import InputFields from "../Common/InputFields";

function InputRegForm({ register, errors, isValid }) {
  return (
    <div>
      <Box>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: ["275px", "500px", "600px"],
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: ["1rem", "1.2rem", "1.5rem"],
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Registration
          </Typography>

          <CardContent
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <InputFields
              errors={errors}
              register={register}
              label="Email"
              name="email"
              type="email"
            />
            <InputFields
              errors={errors}
              register={register}
              label="Password"
              name="password"
              type="password"
            />
            <InputFields
              errors={errors}
              register={register}
              label="Name"
              name="name"
              type="text"
            />
            <InputFields
              errors={errors}
              register={register}
              label="Avatar"
              name="avatar"
              type="text"
            />
          </CardContent>

          <Button variant="outlined" type="submit" disabled={!isValid}>
            Submit
          </Button>

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              component="div"
              sx={{
                marginTop: "20px",
              }}
            >
              Already registered?
            </Typography>
            <CustomLink to="/login">
              <Button variant="text" component="div">
                Login
              </Button>
            </CustomLink>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default InputRegForm;
