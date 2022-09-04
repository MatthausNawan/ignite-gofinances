import React, { useState } from "react";
import {
	Modal,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
} from "react-native";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import {
	Container,
	Header,
	Title,
	Form,
	Fields,
	TransactionsTypes,
} from "./styles";
import { InputForm } from "../../components/Forms/InputForm";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { CategorySelect } from "../../screens/CategorySelect";

interface FormData {
	name: string;
	amount: string;
}

const schema = Yup.object().shape({
	name: Yup
		.string()
		.required("Digite o nome"),
	amount: Yup
		.number()
		.typeError("Informe um valor numerico")
		.positive("O valor precisa maior que zero")
		.required("Digite o valor da transacao")
})

export function Register() {
	const [transactionType, setTransactionType] = useState("");
	const [categoryMotalOpen, setCategoryModalOpen] = useState(false);
	const [category, setCategory] = useState({
		key: "category",
		name: "Categoria",
	});

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
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

	function handleRegister(form: FormData) {
		if (!transactionType)
			return Alert.alert('Selecione o tipo da transacao');

		if (category.key === 'category')
			return Alert.alert('Selecione a Categoria');

		const data = {
			name: form.name,
			amount: form.amount,
			category: category.key,
			transactionType
		}
		console.log(data);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Header>
					<Title>Cadastro</Title>
				</Header>
				<Form>
					<Fields>
						<InputForm
							placeholder="Nome"
							name="name"
							control={control}
							autoCapitalize="sentences"
							autoCorrect={false}
							error={errors.name && errors.name.message}
						/>
						<InputForm
							placeholder="Preço"
							name="amount"
							control={control}
							keyboardType="numeric"
							error={errors.amount && errors.amount.message}
						/>
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
							title={category.name}
							onPress={handleOpenSelectedCategory}
						/>
					</Fields>
					<Button title="Enviar" onPress={handleSubmit(handleRegister)} />
				</Form>

				<Modal visible={categoryMotalOpen}>
					<CategorySelect
						category={category}
						setCategory={setCategory}
						closeSelectCategory={handleCloseSelectedCategory}
					/>
				</Modal>
			</Container>
		</TouchableWithoutFeedback>
	);
}
