import Link from "next/link";
import { Button, Container, Typography, Box } from "@mui/material";

// Import fetchers to ensure they are registered in FetcherRegistry
import "../fetchers/UserDataFetcher";
import "../fetchers/ProductDataFetcher";

export default function Home() {
    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h4" gutterBottom>
                Welcome to the Data Viewer
            </Typography>
            <Typography variant="body1" gutterBottom>
                Select a category:
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} mt={3}>
                <Link href="/user-table" passHref>
                    <Button variant="contained" color="primary">
                        View Users (Client Fetch)
                    </Button>
                </Link>
                <Link href="/user-table-ssr" passHref>
                    <Button variant="contained" color="secondary">
                        View Users (Server Fetch)
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
