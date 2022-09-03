import React, { useState } from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { CategorySelect } from "../../screens/CategorySelect";

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryMotalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleCloseSelectedCategory() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectedCategory() {
    setCategoryModalOpen(true);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              type="up"
              title="Income"
              onPress={() => handleTransactionTypeSelect("up")}
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              type="down"
              title="OutCome"
              onPress={() => handleTransactionTypeSelect("down")}
            />
          </TransactionsTypes>
          <CategorySelectButton
            title="Categoria"
            onPress={handleOpenSelectedCategory}
          />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryMotalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectedCategory}
        />
      </Modal>
    </Container>
  );
}
