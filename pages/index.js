import { 
        Container,
        Box,
        Heading, 
        Image, 
        useColorModeValue,
        Button
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import {BioSection,BioYear} from  '../components/bio'
const Page = () => {
    return(
        <Container>
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center"
            >  Hello, I&apos;m a developer based in Philippines!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        John Riggo Tolentino
                    </Heading>
                    <p>Artisan (Developer)</p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base:4, md:0}}
                    ml={{md: 6}}
                    align="center" 
                >
                    <Image  
                        borderColor="whiteAlpha.800" 
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/john.png"
                        alt="Profile"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>I'm John - A Web Developer with a 4 years experience working with software development companies. I specialized using Web Technologies specifically on PHP, Javascript and MySQL.</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/projects"><Button rightIcon={<ChevronRightIcon mt={1}/>} colorScheme="teal">My Portfolio</Button></NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                        Bio
                </Heading>
                
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born In Philippines, Davao City.
                </BioSection>

                <BioSection>
                    <BioYear>2018</BioYear>
                    Graduated Information Technology <small>(University Of Mindanao)</small>
                </BioSection>

                <BioSection>
                    <BioYear>2018 - 2019</BioYear>
                    Worked at Eternal Wallet Ph Holdings Incorporated <small>(Web Developer)</small>
                </BioSection>

                <BioSection>
                    <BioYear>2019 - 2021</BioYear>
                    Worked at Techstation Incorporated <small>(Full stack web developer)</small>
                </BioSection>

                <BioSection>
                    <BioYear>2021 - present</BioYear>
                    Worked at DSG Sons Group Incorporated <small>(Senior Systems Developer)</small>
                </BioSection>
                
            </Section>
        </Container>
    )
}

export default Page