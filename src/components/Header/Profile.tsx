import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
      { showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Guilherme Rodrigues</Text>
            <Text color="gray.300" fontSize="small">
                guilherme.rod756@gmail.com
            </Text>
        </Box>
      )}

        <Avatar size="md" name="Guilherme Rodrigues" src="https://github.com/Guilherme756.png" />
    </Flex>
    );
}