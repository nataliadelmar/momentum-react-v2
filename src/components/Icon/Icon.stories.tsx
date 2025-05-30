import Icon, { IconProps } from './';

import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import argTypes from './Icon.stories.args';
import Documentation from './Icon.stories.docs.mdx';
import { SIZES, WEIGHTS } from './Icon.constants';

const sizesWithoutAutoInherit = Object.values(SIZES).filter(
  (size) => !['auto', 'inherit'].includes(size as string)
);

export default {
  title: 'Momentum UI/Icon',
  component: Icon,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
};

const Example = Template<IconProps>(Icon).bind({});

Example.argTypes = { ...argTypes };

Example.args = {
  name: 'accessibility',
  ariaLabel: undefined,
  title: undefined,
  scale: 32,
};

const Sizes = MultiTemplate<IconProps>(Icon).bind({});

Sizes.argTypes = { ...argTypes };
delete Sizes.argTypes.autoScale;
delete Sizes.argTypes.scale;

Sizes.args = {
  name: 'accessibility',
};

Sizes.parameters = {
  variants: [
    ...sizesWithoutAutoInherit.map((size) => {
      return {
        scale: size,
      };
    }),
  ],
};

const Weights = MultiTemplate<IconProps>(Icon).bind({});

Weights.argTypes = { ...argTypes };
delete Weights.argTypes.weight;

Weights.args = {
  name: 'accessories',
};

Weights.parameters = {
  variants: [
    ...Object.values(WEIGHTS).map((weight) => {
      return {
        weight,
      };
    }),
  ],
};

const WithTooltip = Template<IconProps>(Icon).bind({});

WithTooltip.argTypes = { ...argTypes };

WithTooltip.args = {
  name: 'accessibility',
  tooltipProps: {
    children: 'Tooltip content!',
  },
};

const Common = MultiTemplate<IconProps>(Icon).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.autoScale;
delete Common.argTypes.scale;
delete Common.argTypes.weight;

Common.args = {
  name: 'accessories',
};

const cartesian = <T extends (string | number)[][]>(...arr: T) =>
  arr.reduce((a, b) => a.flatMap((c) => b.map((d) => [...c, d])), [[]]);

Common.parameters = {
  variants: [
    ...cartesian(Object.values(WEIGHTS), sizesWithoutAutoInherit).flatMap((variant) => {
      return { weight: variant[0], scale: variant[1] };
    }),
  ],
};

export { Example, Sizes, Weights, WithTooltip, Common };
