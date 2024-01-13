import { Tabs, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "./header/Header";
import { Content } from "./content/Content";
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Shell = () => {
  const { pathname } = useLocation();
  const align = useBreakpointValue<"end" | "center" | "start">(
    {
      base: 'end',
      md: 'center',
    },
    {
      fallback: 'end',
    },
  )

  const [tabIndex, setTabIndex] = useState<number>(0);


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
        <Tabs 
          isLazy
          h="100%"
          maxH="100%"
          align={align}
          index={tabIndex}
          display="flex"
          flexFlow='column'
          onChange={handleTabsChange}
          textAlign={'center'}
        >
          <Header/>
          <Content/>
        </Tabs>
      </>
  )
};