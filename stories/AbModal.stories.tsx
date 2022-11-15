import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbModal, AbModalProps } from '../src/componentes/AbModal';

export default {
    title: 'Componentes/AbModal',
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args} />

export const Padrao = Template.bind({})

Padrao.args = {
    titulo: 'Modal',
    aberta: true,
} as AbModalProps
