import { TabPanels } from "@chakra-ui/react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "../../../components/loader/Loader";

const CatImages = React.lazy(() => import('../../cat-images/CatImages'));
const CatBreeds = React.lazy(() => import('../../cat-breeds/CatBreeds'));

export const Content = () => {

    return(
        <TabPanels h="100%" bg='secondary.100' overflow='scroll'>
            <Routes>
                <Route path="/" element={<Navigate to="/cats" />} />
                <Route
                    path="cats"
                    element={
                        <React.Suspense fallback={<Loader/>}>
                            <CatImages />
                        </React.Suspense>
                    }
                >
                    <Route path=':catId' element={<CatImages />} />
                </Route>
                <Route
                    path="breeds"
                    element={
                        <React.Suspense fallback={<Loader/>}>
                            <CatBreeds />
                        </React.Suspense>
                    }
                />
            </Routes>
        </TabPanels>
    )
};