import React, { useState } from "react";
import { styled, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import Notifications from "../Notifications";

const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%"
}));

const PageWrapper = styled("div")(() => ({
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent"
}));

const Layout = () => {
    const theme = useTheme();
    return (
        <MainWrapper>
            <PageWrapper>
                <Header />
                <Container
                    sx={{
                        padding: "0px !important",
                        [theme.breakpoints.up("sm")]: {
                            maxWidth: "1400px"
                        },
                        flexGrow: 1,
                        backgroundColor: theme.palette.background.paper,
                        width: '100%'
                    }}
                >
                    <Outlet />
                    {Notifications()}
                </Container>
                <Footer />
            </PageWrapper>
        </MainWrapper>
    );
};

export default Layout;
