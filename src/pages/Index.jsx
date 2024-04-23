import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, Text, useToast, Select } from "@chakra-ui/react";
import { FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  const { isOpen: isFormOpen, onOpen: onFormOpen, onClose: onFormClose } = useDisclosure();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();
  const toast = useToast();

  const [apartmentNumber, setApartmentNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [amount, setAmount] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (amount < 80 || amount > 120) {
      toast({
        title: "Erreur",
        description: "Le montant doit être compris entre 80 et 120.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    // Ici, vous devriez ajouter la logique pour vérifier les doublons et enregistrer les données
    onFormClose();
  };

  return (
    <Box p={5}>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onFormOpen}>
        Ajouter Cotisation
      </Button>
      <Button ml={4} leftIcon={<FaSearch />} colorScheme="blue" onClick={onSearchOpen}>
        Rechercher Cotisations
      </Button>

      {/* Modal pour le formulaire d'ajout */}
      <Modal isOpen={isFormOpen} onClose={onFormClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter une cotisation</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Numéro d'appartement</FormLabel>
              <Select placeholder="Sélectionnez un numéro" value={apartmentNumber} onChange={(e) => setApartmentNumber(e.target.value)}>
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Mois</FormLabel>
              <Select placeholder="Mois" value={month} onChange={(e) => setMonth(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Année</FormLabel>
              <Select placeholder="Année" value={year} onChange={(e) => setYear(e.target.value)}>
                {Array.from({ length: 16 }, (_, i) => (
                  <option key={2015 + i} value={2015 + i}>
                    {2015 + i}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Montant</FormLabel>
              <Input placeholder="Montant" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleFormSubmit}>
              Enregistrer
            </Button>
            <Button onClick={onFormClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal pour la recherche */}
      <Modal isOpen={isSearchOpen} onClose={onSearchClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rechercher des cotisations</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Type de recherche</FormLabel>
              <Select placeholder="Choisir le type de recherche">
                <option value="apartment">Par appartement</option>
                <option value="year">Par année</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Entrez le numéro d'appartement ou l'année" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Rechercher
            </Button>
            <Button onClick={onSearchClose}>Fermer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
