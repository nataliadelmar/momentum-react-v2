import React from 'react';
import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';
import Documentation from './Tooltip.stories.docs.mdx';
import Text from '../Text';
import Tooltip, { TooltipProps } from './';
import ButtonPill from '../ButtonPill';
import ButtonSimple from '../ButtonSimple';
import { COLORS } from '../ModalContainer/ModalContainer.constants';
import argTypes from './Tooltip.stories.args';
import { PLACEMENTS } from '../ModalArrow/ModalArrow.constants';
import Flex from '../Flex';
import Popover from '../Popover';
import ButtonCircle from '../ButtonCircle';
import Icon from '../Icon';

export default {
  title: 'Momentum UI/Tooltip',
  component: Tooltip,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
};

const Example = Template<TooltipProps>(Tooltip).bind({});

Example.argTypes = { ...argTypes };

Example.args = {
  placement: PLACEMENTS.AUTO,
  variant: 'small',
  color: COLORS.PRIMARY,
  delay: [0, 0],
  children: <p>Tooltip</p>,
  type: 'description',
  triggerComponent: (
    <ButtonSimple style={{ margin: '10rem auto', display: 'flex' }}>Hover me!</ButtonSimple>
  ),
};

Example.argTypes = { ...argTypes };

Example.args = {
  placement: PLACEMENTS.AUTO,
  variant: 'small',
  color: COLORS.PRIMARY,
  delay: [0, 0],
  children: <p>Tooltip</p>,
  type: 'description',
  triggerComponent: (
    <ButtonSimple style={{ margin: '10rem auto', display: 'flex' }}>Hover me!</ButtonSimple>
  ),
};

const Common = MultiTemplate<TooltipProps>(Tooltip).bind({});

Common.argTypes = { ...argTypes };

Common.args = {};
Common.parameters = {
  variants: [
    {
      children: <p>Label tooltip TERTIARY color, variant medium</p>,
      type: 'label',
      triggerComponent: (
        <ButtonSimple style={{ margin: '10rem auto', display: 'flex' }}>
          Hover me for label!
        </ButtonSimple>
      ),
      placement: PLACEMENTS.RIGHT,
      variant: 'medium',
      color: COLORS.TERTIARY,
    },
    {
      children: <p>Label tooltip, without label overwriteTERTIARY color, variant medium</p>,
      type: 'none',
      triggerComponent: (
        <ButtonSimple style={{ margin: '10rem auto', display: 'flex' }}>Hover me</ButtonSimple>
      ),
      placement: PLACEMENTS.RIGHT,
      variant: 'medium',
      color: COLORS.TERTIARY,
    },
    {
      children: <p>Description tooltip, PRIMARY color, variant small</p>,
      type: 'description',
      triggerComponent: (
        <ButtonSimple style={{ margin: '10rem auto', display: 'flex' }}>
          Hover me for description!
        </ButtonSimple>
      ),
      placement: PLACEMENTS.BOTTOM_START,
      variant: 'small',
      color: COLORS.PRIMARY,
    },
    {
      children: <p>Description tooltip, SECONDARY color, variant medium, showDelay 500ms</p>,
      type: 'description',
      triggerComponent: (
        <ButtonSimple>
          Hover me for description! <br /> With delay
        </ButtonSimple>
      ),
      placement: PLACEMENTS.LEFT_START,
      delay: [500],
      variant: 'medium',
      color: COLORS.SECONDARY,
    },
    {
      children: (
        <>
          <p>Label tooltip triggered by ButtonCircle.</p>
          <small>
            It does not console any MRV2 type warning because the type of the tooltip is label, so
            ButtonCircle receives an accessible name
          </small>
        </>
      ),
      type: 'label',
      triggerComponent: (
        <ButtonCircle>
          <Icon name="chat" scale={24} />
        </ButtonCircle>
      ),
    },
  ],
};

const Offset = Template<TooltipProps>(Tooltip).bind({});

Offset.argTypes = { ...argTypes };

Offset.args = {
  placement: PLACEMENTS.RIGHT,
  type: 'label',
  variant: 'small',
  color: COLORS.TERTIARY,
  delay: [0, 0],
  offsetDistance: -150,
  triggerComponent: (
    <ButtonPill style={{ margin: '10rem auto', display: 'flex', width: '30rem' }}>
      Hover me!
    </ButtonPill>
  ),
  children: (
    <Flex style={{ width: '10rem', height: '10rem' }} justifyContent="center" alignItems="center">
      <Text type="display" tagName="h1">
        🏖
      </Text>
    </Flex>
  ),
};

const MultiplePopovers = Template<TooltipProps>((args: TooltipProps) => {
  const triggerComponent = (
    <Tooltip
      placement={PLACEMENTS.BOTTOM}
      type={'description'}
      triggerComponent={
        <ButtonSimple style={{ margin: '10rem auto', display: 'flex' }}>
          Hover or click me!
        </ButtonSimple>
      }
    >
      Description tooltip on hover
    </Tooltip>
  );
  return <Popover {...args} triggerComponent={triggerComponent} />;
}).bind({});

MultiplePopovers.argTypes = { ...argTypes };

MultiplePopovers.args = {
  placement: PLACEMENTS.TOP,
  children: 'Popover content on click',
};

export { Example, Common, Offset, MultiplePopovers };
