import { TabPanels } from "@chakra-ui/react";
import React, { ReactComponentElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const CatImages = React.lazy(() => import('../../cat-images/CatImages'));
const CatBreeds = React.lazy(() => import('../../cat-breeds/CatBreeds'));

export const Content = () => {

    return(
        <TabPanels height={['100%']} bg='secondary.100'>
            <Routes>
                <Route path="/" element={<Navigate to="/cats" />} />
                <Route
                    path="cats"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <CatImages />
                        </React.Suspense>
                    }
                />
                <Route
                    path="breeds"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <CatBreeds />
                        </React.Suspense>
                    }
                />
            </Routes>
        </TabPanels>
    )
};