import { Box, Flex, Heading, Spacer, VStack, Text, HStack } from "@chakra-ui/react"
import { useWallet } from "@solana/wallet-adapter-react"
import WalletMultiButton from "@/components/WalletMultiButton"
import SessionKeyButton from "@/components/SessionKeyButton"
import InitPlayerButton from "@/components/InitPlayerButton"
import ChopTreeButton from "@/components/ChopTreeButton"
import RequestAirdrop from "@/components/RequestAirdrop"
import { BN } from "@coral-xyz/anchor"
import DisplayGameState from "@/components/DisplayGameState"
// import DisplayNfts from "@/components/DisplayNfts"

export default function Home() {
  const { publicKey } = useWallet()

  return (
    <Box>

      <Flex px={4} py={4}>
        <Spacer />
        <VStack>
        <WalletMultiButton />
        <InitPlayerButton />
        <SessionKeyButton />
        <RequestAirdrop />
        </VStack>
      </Flex>
      <VStack>
      <Heading>Response Roulette</Heading>

        <DisplayGameState />
        <Spacer height="1000px"/>
        {!publicKey && <Text>Connect to devnet wallet!</Text>}
        <HStack>
        <VStack>
            
          <ChopTreeButton vote_idx={new BN(0)}/>
          </VStack>
          <ChopTreeButton vote_idx={new BN(1)}/>
        </HStack>
        {/* <CreateElectionButton /> */}
        {/* <DisplayNfts /> */}
      </VStack>
    </Box>
  )
}