import { CircularProgress } from "@chakra-ui/react"


export const Loader = ()=> {
    return(
        <CircularProgress isIndeterminate color="tertiary.500" h="100%" w="inherit" display='flex' justifyContent="center" alignItems="center"/>
    )
}