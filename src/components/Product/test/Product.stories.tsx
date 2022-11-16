/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product from '../Product';
import FxBackground from '../../FxBackground';

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

export const Row = Template.bind({});
Row.args = {
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

export const Card = Template.bind({});
Card.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `card`,
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

export const Detail = Template.bind({});
Detail.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `detail`,
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

export const Banner = Template.bind({});
Banner.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `banner`,
  variants: `<div>variants</div>`,
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
  variants: `<div>variants</div>`,
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

export const Checkout = Template.bind({});
Checkout.args = {
  title: `Gelato Kush`,
  body: `<p>Gelato Kush, une variété Indica cultivée en intérieur.</p>`,
  slug: `gelato-kush`,
  display: `checkout`,
  scene: [<FxBackground
    position={1}
    padding={true}
    cover={`contain`}
    background={`url(http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_heretic_7fbc545c5f.png)`}
  />],
  variants: `<div>variants</div>`,
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
