/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product from '../Product';

/*
# Images
*/
//import _imageDefaultLeftBlack from "../assets/example_left-black.svg";

/*
# Imports
# More on default export :
https://storybook.js.org/docs/react/writing-stories/introduction#default-export
*/
export default {
  title: 'ReactComponentLibrary/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Grid = Template.bind({});
Grid.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `grid`,
  tags: {
    0: {
      id: 6,
      name: "Infusion",
      slug: "infusion",
      children: {
      },
      parent: {
        0: {
          id: 2,
          name: "Consommation",
          slug: "consommation",
        }
      }
    },
    1: {
      id: 7,
      name: "Cuisine",
      slug: "cuisine",
      children: {
      },
      parent: {
        0: {
          id: 2,
          name: "Consommation",
          slug: "consommation",
        }
      }
    },
    2: {
      id: 6,
      name: "Indica",
      slug: "indica",
      children: {
      },
      parent: {
        0: {
          id: 1,
          name: "Variétés",
          slug: "variete",
        }
      }
    },
    3: {
      id: 2,
      name: "Consommation",
      slug: "consommation",
      children: {
        0: {
          id: 6,
          name: "Infusion",
          slug: "infusion"
        },
        1: {
          id: 7,
          name: "Cuisine",
          slug: "cuisine"
        },
      },
      parent: {

      },
    }
  },
};

export const Inline = Template.bind({});
Inline.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `row`,
  tags: {
    0: {
      id: 6,
      name: "Infusion",
      slug: "infusion",
      children: {
      },
      parent: {
        0: {
          id: 2,
          name: "Consommation",
          slug: "consommation",
        }
      }
    },
    1: {
      id: 7,
      name: "Cuisine",
      slug: "cuisine",
      children: {
      },
      parent: {
        0: {
          id: 2,
          name: "Consommation",
          slug: "consommation",
        }
      }
    },
    2: {
      id: 6,
      name: "Indica",
      slug: "indica",
      children: {
      },
      parent: {
        0: {
          id: 1,
          name: "Variétés",
          slug: "variete",
        }
      }
    },
    3: {
      id: 2,
      name: "Consommation",
      slug: "consommation",
      children: {
        0: {
          id: 6,
          name: "Infusion",
          slug: "infusion"
        },
        1: {
          id: 7,
          name: "Cuisine",
          slug: "cuisine"
        },
      },
      parent: {

      },
    }
  },
};
