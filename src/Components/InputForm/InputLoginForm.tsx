import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputFields from "../Common/InputFields";

function InputLoginForm({ register, errors, isValid }) {
  const navigate = useNavigate();
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
          <CardHeader title="Welcome back!" sx={{ fontSize: "1.2rem" }} />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: ["column", "column", "row"],
            }}
          >
            <Typography component="div" sx={{ fontSize: ["0.8rem", "1rem"] }}>
              Don't have an account?
            </Typography>
            <Button
              variant="text"
              onClick={() => navigate("/registration")}
              sx={{
                textTransform: "none",
                fontSize: ["0.8rem", "1rem"],
              }}
            >
              Create today!
            </Button>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
          </CardContent>

          <Button
            variant="outlined"
            type="submit"
            disabled={!isValid}
            sx={{ marginBottom: "20px" }}
          >
            Submit
          </Button>
        </Card>
      </Box>
    </div>
  );
}

export default InputLoginForm;
