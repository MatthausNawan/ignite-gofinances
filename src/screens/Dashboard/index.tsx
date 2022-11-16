import React from 'react'
import { HighlightCard } from '../../components/HighlighCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    LogoutButton,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from "./styles";

export interface DataListProps extends TransactionCardProps {
    id: string
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de Site',
            amount: "R$ 5.500,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "29/07/2022"
        },
        {
            id: '2',
            type: 'positive',
            title: 'Salario',
            amount: "R$ 2.500,00",
            category: {
                name: 'Salário',
                icon: 'dollar-sign'
            },
            date: "29/07/2022"
        },
        {
            id: '3',
            type: 'negative',
            title: 'Hanburgueria',
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "29/07/2022"
        },
        {
            id: '4',
            type: 'negative',
            title: 'Aluguel',
            amount: "R$ 500,00",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: "29/07/2022"
        },
        {
            id: '5',
            type: 'positive',
            title: 'Freelancers',
            amount: "R$ 1.500,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "29/07/2022"
        }
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/10215771?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Matthaus</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => { }}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard title='Entradas' amount="R$ 17.000,00" lastTransaction='Última entrada dia 13 de Maio.' type='up' />
                <HighlightCard title='Saídas' amount="R$ 5.300,00" lastTransaction='Última saía dia 13 de Maio.' type="down" />
                <HighlightCard title='Total' amount="R$ 23.300,00" lastTransaction='01 à 25 Maio.' type="total" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}
