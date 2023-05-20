/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product from '../Product'
import FxBackground from '../../FxBackground'
import FxImage from '../../FxImage'

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
  scene: [<FxImage cover={false} padding={false} image="https://backend.dusty-green.com/uploads/dustygreen_cbd_shop_switzerland_heretics_bones_powder_reduce_ddd6e1a930.png?auto=format&fit=max&w=3840" />],
  fx: [<FxBackground cover={`cover`} background="url(https://backend.dusty-green.com/uploads/dusty_green_background_heretic_bone_powder_b892d10c41.jpg)" />],
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

export const Row = Template.bind({});
Row.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `row`,
  scene: [<FxImage cover={false} padding={false} image="https://backend.dusty-green.com/uploads/dustygreen_cbd_shop_switzerland_heretics_bones_powder_reduce_ddd6e1a930.png?auto=format&fit=max&w=3840" />],
  fx: [<FxBackground cover={`cover`} background="url(https://backend.dusty-green.com/uploads/dusty_green_background_heretic_bone_powder_b892d10c41.jpg)" />],
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

export const Slide = Template.bind({});
Slide.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `slide`,
  scene: [<FxImage cover={false} padding={false} image="https://backend.dusty-green.com/uploads/dustygreen_cbd_shop_switzerland_heretics_bones_powder_reduce_ddd6e1a930.png?auto=format&fit=max&w=3840" />],
  fx: [<FxBackground cover={`cover`} background="url(https://backend.dusty-green.com/uploads/dusty_green_background_heretic_bone_powder_b892d10c41.jpg)" />],
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