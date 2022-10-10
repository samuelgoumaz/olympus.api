/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../Card';

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
  title: 'ReactComponentLibrary/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Banner = Template.bind({});
Banner.args = {
  title: `Title`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
  display: `banner`,
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
  title: `Title`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
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

export const Line = Template.bind({});
Line.args = {
  title: `Title`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
  display: `line`,
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
  title: `Title`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
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

export const Section = Template.bind({});
Section.args = {
  title: `Title`,
  subtitle: `subtitle`,
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
  display: `section`,
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
