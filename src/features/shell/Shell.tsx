import { Tabs } from "@chakra-ui/react";
import { Header } from "./header/Header";
import { Content } from "./content/Content";
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Shell = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const location = useLocation();
  const { pathname } = location;

  useEffect(()=>{
    if(pathname.startsWith('/breeds')){
      setTabIndex(1);
    } else if (pathname.startsWith('/favorites')) {
      setTabIndex(2);
    } else{
      setTabIndex(0);
    }

  }, [pathname])
  
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  }

  return (
      <>
        <Tabs isLazy h="100%" index={tabIndex} onChange={handleTabsChange}>
          <Header />
          <Content/>
        </Tabs>
      </>
  )
};