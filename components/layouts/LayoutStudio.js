import Head from "next/head"
import Footer from "../modules/Footer"
import NavBar from "../modules/NavBar"
import SideBarLeft from "../modules/SideBarLeft"
import SideBarRight from "../modules/SideBarRight"
import { Box, Flex} from "@chakra-ui/react"

export default function LayoutStudio({children}) {
	return(
		<Box>
			<Flex direction="column" h="100vh">
				<NavBar />
				<Flex direction="row" h="100%">
					<SideBarLeft />
					<Box p="1rem" bg="gray.300" w="100%">
						{children}
					</Box>
					<SideBarRight />
				</Flex>
				<Footer />
			</Flex>
		</Box>
	)
};