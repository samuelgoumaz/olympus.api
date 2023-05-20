/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Article from '../Article';
import FxBackground from '../../FxBackground'

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
  title: 'ReactComponentLibrary/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Slide = Template.bind({});
Slide.args = {
  title: `Slide`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `article-slug`,
  display: `slide`,
  scene: [<FxBackground cover={`cover`} background="url(https://atelierharfang.ch/static/a723a5ee27accc7df0aca8f9ab849615/35ece/b6dc3a5d062ec35097b248ddae717043.jpg)" />],
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

export const Grid = Template.bind({});
Grid.args = {
  title: `Slide`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `article-slug`,
  display: `grid`,
  scene: [<FxBackground cover={`cover`} background="url(https://atelierharfang.ch/static/a723a5ee27accc7df0aca8f9ab849615/35ece/b6dc3a5d062ec35097b248ddae717043.jpg)" />],
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
  title: `Slide`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `article-slug`,
  display: `row`,
  scene: [<FxBackground cover={`cover`} background="url(https://atelierharfang.ch/static/a723a5ee27accc7df0aca8f9ab849615/35ece/b6dc3a5d062ec35097b248ddae717043.jpg)" />],
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