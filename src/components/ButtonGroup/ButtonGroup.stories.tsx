import React from 'react';

import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import MenuTrigger from '../MenuTrigger';
import Menu from '../Menu';
import { Item } from '@react-stately/collections';
import ButtonPill from '../ButtonPill';
import ButtonCircle from '../ButtonCircle';
import Icon from '../Icon';

import ButtonGroup, { ButtonGroupProps } from './';
import argTypes from './ButtonGroup.stories.args';
import Documentation from './ButtonGroup.stories.docs.mdx';

export default {
  title: 'Momentum UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
  subComponents: { ButtonPill },
};

const commonChildren = [
  <ButtonPill key="0">Example</ButtonPill>,
  <ButtonCircle aria-label="redo" key="1">
    <Icon name="redo" autoScale={150} />
  </ButtonCircle>,
  <ButtonCircle aria-label="cancel" key="2">
    <Icon name="cancel" autoScale={150} />
  </ButtonCircle>,
];

const Example = Template<ButtonGroupProps>(ButtonGroup).bind({});

Example.args = {
  children: [...commonChildren],
};

Example.argTypes = { ...argTypes };

const Rounding = MultiTemplate<ButtonGroupProps>(ButtonGroup).bind({});

Rounding.args = {
  children: [...commonChildren],
};

Rounding.parameters = {
  variants: [{}, { round: true }],
};

Rounding.argTypes = { ...argTypes };
delete Rounding.argTypes.round;

const Spacing = MultiTemplate<ButtonGroupProps>(ButtonGroup).bind({});

Spacing.args = {
  children: [...commonChildren],
};

Spacing.parameters = {
  variants: [{}, { spaced: true }],
};

Spacing.argTypes = { ...argTypes };
delete Spacing.argTypes.spaced;

const Separator = MultiTemplate<ButtonGroupProps>(ButtonGroup).bind({});

const separatorCommonChildren = [
  <ButtonPill ghost key="0">
    Example
  </ButtonPill>,
  <ButtonCircle aria-label="redo" ghost key="1">
    <Icon name="redo" autoScale={150} />
  </ButtonCircle>,
  <ButtonCircle aria-label="cancel" ghost key="2">
    <Icon name="cancel" autoScale={150} />
  </ButtonCircle>,
];

const callControlsCommonChildren = [
  <ButtonCircle aria-label="raise hand" key="0" ghost size={40}>
    <Icon key="0" name="raise-hand" autoScale={125} />
  </ButtonCircle>,
  <MenuTrigger
    key="1"
    placement="top-end"
    triggerComponent={
      <ButtonCircle aria-label="options" ghost size={40}>
        <Icon name="reactions" autoScale={125} />
      </ButtonCircle>
    }
    children={[
      <Menu key="0" selectionMode="single">
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </Menu>,
    ]}
  />,
];

const callControlsCommonChildrenWithDiv = [
  <div key="0" {...ButtonGroup.CHILD_PROPS}>
    <ButtonCircle aria-label="raise hand" ghost size={40}>
      <Icon key="0" name="raise-hand" autoScale={125} />
    </ButtonCircle>
  </div>,
  <div key="1" {...ButtonGroup.CHILD_PROPS}>
    <MenuTrigger
      key="2"
      placement="top-end"
      triggerComponent={
        <ButtonCircle aria-label="reactions" ghost size={40}>
          <Icon name="reactions" autoScale={125} />
        </ButtonCircle>
      }
      children={[
        <Menu key="0" selectionMode="single">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>,
      ]}
    />
  </div>,
];

const paginationCommonChildren = [
  <ButtonCircle aria-label="some label" inverted disabled key="0" size={28}>
    <Icon name="arrow-up" autoScale={150} />
  </ButtonCircle>,
  <ButtonCircle aria-label="some label" inverted key="1" size={28}>
    <Icon name="arrow-down" autoScale={150} />
  </ButtonCircle>,
];

Separator.parameters = {
  variants: [
    { children: separatorCommonChildren },
    { children: separatorCommonChildren, separator: true },
    { children: separatorCommonChildren, round: true },
    { children: separatorCommonChildren, round: true, separator: true },
    {
      style: { marginTop: '1rem' },
      children: callControlsCommonChildren,
      round: true,
      separator: true,
    },
    {
      style: { marginTop: '1rem' },
      children: callControlsCommonChildrenWithDiv,
      round: true,
      separator: true,
    },
    {
      style: { marginTop: '1rem' },
      orientation: 'vertical',
      children: paginationCommonChildren,
      round: true,
      separator: true,
    },
  ],
};

Separator.argTypes = { ...argTypes };
delete Separator.argTypes.separator;
delete Separator.argTypes.round;
delete Separator.argTypes.compressed;
delete Separator.argTypes.spaced;

const AudioVideoControls = MultiTemplate<ButtonGroupProps>(ButtonGroup).bind({});
AudioVideoControls.argTypes = { ...argTypes };
delete AudioVideoControls.argTypes.round;
delete AudioVideoControls.argTypes.spaced;
delete AudioVideoControls.argTypes.compressed;

AudioVideoControls.parameters = {
  variants: [
    {
      children: [
        <ButtonPill outline ghost key="0" size={40} style={{ minWidth: '6.8rem' }}>
          <Icon key="0" name="microphone-on" autoScale={125} style={{ marginLeft: 'auto' }} />
          <div key="1" style={{ marginRight: 'auto' }}>
            Mute
          </div>
        </ButtonPill>,
        <MenuTrigger
          key="2"
          placement="top-end"
          triggerComponent={
            <ButtonCircle aria-label="some label" outline ghost key="1" size={40}>
              <Icon name="arrow-down" autoScale={100} />
            </ButtonCircle>
          }
          children={[
            <Menu key="0" selectionMode="single">
              <Item>Item 1</Item>
              <Item>Item 2</Item>
            </Menu>,
          ]}
        />,
      ],
      round: true,
      compressed: true,
    },
    {
      children: [
        <ButtonPill outline ghost key="0" size={40} style={{ minWidth: '6.8rem' }}>
          <Icon
            key="0"
            name="microphone-muted"
            strokeColor="#FC8B98"
            autoScale={125}
            style={{ marginLeft: 'auto' }}
          />
          <div key="1" style={{ marginRight: 'auto' }}>
            Unmute
          </div>
        </ButtonPill>,
        <ButtonCircle aria-label="some label" outline ghost key="1" size={40}>
          <Icon name="arrow-down" autoScale={100} />
        </ButtonCircle>,
      ],
      round: true,
      compressed: true,
    },
    {
      children: [
        <ButtonPill outline ghost key="0" size={40} style={{ minWidth: '8.3rem' }}>
          <Icon key="0" name="camera-on" autoScale={125} style={{ marginLeft: 'auto' }} />
          <div key="1" style={{ marginRight: 'auto' }}>
            Stop Video
          </div>
        </ButtonPill>,
        <ButtonCircle aria-label="some label" outline ghost key="1" size={40}>
          <Icon name="arrow-down" autoScale={100} />
        </ButtonCircle>,
      ],
      round: true,
      compressed: true,
    },
    {
      children: [
        <ButtonPill outline ghost key="0" size={40} style={{ minWidth: '8.3rem' }}>
          <Icon key="0" name="camera-muted" strokeColor="#FC8B98" autoScale={125} />
          <div key="1">Start Video</div>
        </ButtonPill>,
        <ButtonCircle aria-label="some label" outline ghost key="1" size={40}>
          <Icon name="arrow-down" autoScale={100} />
        </ButtonCircle>,
      ],
      round: true,
      compressed: true,
    },
    {
      children: [
        <ButtonPill outline ghost key="0" size={40} style={{ minWidth: '8.3rem' }}>
          <Icon key="0" name="camera-muted" strokeColor="#FC8B98" autoScale={125} />
          <div key="1">Long Label Possibly German</div>
        </ButtonPill>,
        <ButtonCircle aria-label="some label" outline ghost key="1" size={40}>
          <Icon name="arrow-down" autoScale={100} />
        </ButtonCircle>,
      ],
      round: true,
      compressed: true,
    },
    {
      children: [
        <div key="0" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }} data-compressed>
          <ButtonPill outline ghost size={40} style={{ minWidth: '8.3rem' }}>
            <Icon key="0" name="camera-muted" strokeColor="#FC8B98" autoScale={125} />
            <div key="1">Long Label Possibly German</div>
          </ButtonPill>
        </div>,
        <div key="1" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }} data-compressed>
          <ButtonCircle aria-label="some label" outline ghost size={40}>
            <Icon name="arrow-down" scale={16} />
          </ButtonCircle>
        </div>,
      ],
      round: true,
      compressed: true,
    },
  ],
};

const Common = MultiTemplate<ButtonGroupProps>(ButtonGroup).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.children;
delete Common.argTypes.spaced;
delete Common.argTypes.round;

Common.parameters = {
  variants: [
    {
      children: [
        <ButtonPill key="0">Example</ButtonPill>,
        <ButtonCircle aria-label="redo" key="1">
          <Icon name="redo" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="cancel" key="2">
          <Icon name="cancel" autoScale={150} />
        </ButtonCircle>,
      ],
      round: true,
    },
    {
      children: [
        <ButtonPill color="message" key="0">
          Message
        </ButtonPill>,
        <ButtonCircle aria-label="send" color="message" key="1">
          <Icon name="send" autoScale={150} />
        </ButtonCircle>,
      ],
      round: true,
    },
    {
      children: [
        <ButtonPill color="join" key="0">
          Join
        </ButtonPill>,
        <ButtonCircle aria-label="enter room" color="join" key="1">
          <Icon name="enter-room" autoScale={150} />
        </ButtonCircle>,
      ],
      round: true,
    },
    {
      children: [
        <ButtonPill color="cancel" key="0">
          Cancel
        </ButtonPill>,
        <ButtonCircle aria-label="cancel" color="cancel" key="1">
          <Icon name="cancel" autoScale={150} />
        </ButtonCircle>,
      ],
      round: true,
    },
    {
      children: [
        <ButtonCircle aria-label="exit room" key="0" ghost size={64}>
          <Icon name="exit-room" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="location" key="1" ghost size={64}>
          <Icon name="location" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="room calendar" key="2" ghost size={64}>
          <Icon name="room-calendar" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="assign host" key="3" ghost size={64}>
          <Icon name="assign-host" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="settings" key="4" ghost size={64}>
          <Icon name="settings" autoScale={150} />
        </ButtonCircle>,
      ],
      round: true,
      spaced: true,
      style: {
        backgroundColor: 'IndianRed',
      },
    },
    {
      children: [
        <ButtonCircle aria-label="camera on" key="0" ghost size={32}>
          <Icon name="camera-presence" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="quiet hours" key="1" ghost size={32}>
          <Icon name="quiet-hours-presence" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="call" key="2" ghost size={32}>
          <Icon name="handset" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="meetings" key="3" ghost size={32}>
          <Icon name="meetings-presence" autoScale={150} />
        </ButtonCircle>,
        <ButtonCircle aria-label="pto" key="4" ghost size={32}>
          <Icon name="pto-presence" autoScale={150} />
        </ButtonCircle>,
      ],
      round: true,
      spaced: true,
      style: {
        backgroundColor: 'Chocolate',
      },
    },
    {
      children: [
        <div key="0" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }}>
          <ButtonCircle aria-label="camera" ghost size={32}>
            <Icon name="camera-presence" autoScale={150} />
          </ButtonCircle>
        </div>,
        <div key="1" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }}>
          <ButtonCircle aria-label="quiet hours" ghost size={32}>
            <Icon name="quiet-hours-presence" autoScale={150} />
          </ButtonCircle>
        </div>,
        <div key="2" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }}>
          <ButtonCircle aria-label="call" ghost size={32}>
            <Icon name="handset" autoScale={150} />
          </ButtonCircle>
        </div>,
        <div key="3" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }}>
          <ButtonCircle aria-label="meeting" ghost size={32}>
            <Icon name="meetings-presence" autoScale={150} />
          </ButtonCircle>
        </div>,
        <div key="4" {...ButtonGroup.CHILD_PROPS} style={{ fontSize: '0.8rem' }}>
          <ButtonCircle aria-label="pto" ghost size={32}>
            <Icon name="pto-presence" autoScale={150} />
          </ButtonCircle>
        </div>,
      ],
      round: true,
      spaced: true,
      style: {
        backgroundColor: 'Chocolate',
      },
    },
  ],
};

export { Example, Rounding, Spacing, Separator, AudioVideoControls, Common };
