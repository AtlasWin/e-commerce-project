import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Item({ param, item }) {
  const navigate = useNavigate();

  return (
    <div>
      <Card
        sx={{
          width: ["275px", "350px"],
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="140" image={item.images[0]} />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body1" component="div">
              {item.description}
            </Typography>
            <Typography variant="body2" component="div">
              {item.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigate(`/${param}/${item.id}`)}
        >
          Learn More
        </Button>
      </Card>
    </div>
  );
}

export default Item;
