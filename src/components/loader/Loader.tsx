import { CircularProgress } from "@chakra-ui/react"


export const Loader = ()=> {
    return(
        <CircularProgress isIndeterminate color="tertiary.500" h="inherit" w="inherit" display='flex' justifyContent="center" alignItems="center"/>
    )
}