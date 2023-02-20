import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { AbCard } from '../src'

export default {
  title: 'componentes/Card',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

export const AbCardComponent = () => {
    return (<AbCard>
        <h1>Olá, eu sou um card</h1>
    </AbCard>)
}