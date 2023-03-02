import { Container } from "@mui/material";

function Layout({ children }) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default Layout;
