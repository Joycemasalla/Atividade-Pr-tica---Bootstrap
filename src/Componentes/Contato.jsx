<<<<<<< HEAD
import styles from './Contato.module.css'
    export function Contato() {
        return(
            <body className={styles.contato}>
        <h1> Número: (32) 99421-2311
        <br />
        <br />
        E-mail: pcmaster@gmail.com 
        <br />
        <br />
        Endereço: Rua React, 321, Cataguases, MG, 19311-928.
        </h1>
        </body>
        )
    }
=======
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export function Contato() {
  return (
    // <h1>Contato</h1>

    // <h1>{props.nomePagina}</h1>

    <Box>
      <Flex>
        <Center
          w="100%"
          bg="white"
          top={100}
          borderRadius={5}
          p="2"
          boxShadow={"0 1px 2px #ccc"}
        >
          <FormControl>

            <HStack>
              <Box>
                <FormLabel>Nome Completo</FormLabel>
                <Input id='nome' placeholder='Nome Completo' />
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input id='email' placeholder='E-mail' />
              </Box>
            </HStack>

            <HStack>
              <Box>
                <FormLabel>Data Nascimento</FormLabel>
                <Input id='nasc' placeholder='Data de Nascimento' />
              </Box>
              <Box>
                <FormLabel>Naturalidade</FormLabel>
                <Input id='natural' placeholder='Naturalidade' />
              </Box>
            </HStack>

         

          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}
>>>>>>> b6944f71df5b5f8a12738996a1bd8d783e979e00
